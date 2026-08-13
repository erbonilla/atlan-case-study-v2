#!/usr/bin/env python3
"""Re-sync the exported standalone bundles with the editable sources.

The bundles embed each source file as a gzip+base64 manifest entry plus an
escaped page template. Entries are matched by hashing them against the
committed version of every candidate source file, so an entry is only replaced
when its current payload is byte-identical to that file at HEAD.
"""

import base64
import gzip
import hashlib
import json
import os
import re
import subprocess
import sys

BUNDLES = [
    "Atlan Case Study (Standalone).html",
    "Atlan Case Study - Deep Dive (Standalone).html",
]

TEMPLATE_REPLACEMENTS = [
    (
        "Atlan UX Case Study — Adaptive Endurance Coaching PWA | Edgar Bonilla",
        "Atlan UX Case Study — Adaptive Endurance Coaching Mobile App | Edgar Bonilla",
    ),
    (
        "bilingual coaching PWA with adaptive scheduling",
        "bilingual coaching mobile app with adaptive scheduling",
    ),
    (
        "bilingual coaching PWA for executive endurance athletes",
        "bilingual coaching mobile app for executive endurance athletes",
    ),
    (
        "and prototype implementation for an adaptive endurance-coaching concept",
        "and mobile-app implementation for an adaptive endurance-coaching concept",
    ),
]

CSS_REPLACEMENTS = [
    (
        ".cs-proto-note{margin-top:20px;padding:16px 20px;border:1px dashed var(--abyss-24);"
        "border-radius:4px;font:400 13.5px/1.5 var(--body);color:var(--abyss-56)}",
        ".cs-proto-note{margin-top:20px;padding:16px 20px;border:1px dashed var(--abyss-24);"
        "border-radius:4px;font:400 13.5px/1.5 var(--body);color:var(--abyss-56)}"
        ".cs-proto-note a{font-weight:600;color:var(--tide-deep);text-decoration:none;"
        "border-bottom:1px solid currentColor}"
        ".cs-proto-note a:hover{color:var(--coral)}"
        ".cs-proto-note .cs-proto-ref{display:block;margin-top:6px;font-size:12.5px;color:var(--abyss-40)}"
        ".cs-proto-note .cs-proto-ref a{font-weight:500;color:var(--abyss-56)}"
        ".cs-proto-note .cs-proto-ref a:hover{color:var(--tide-deep)}",
    ),
]


def apply_replacements(text, pairs):
    """Replace only when the result is not already in place, so reruns are safe."""
    for old, new in pairs:
        if new in text:
            continue
        text = text.replace(old, new)
    return text


def head_text(path):
    result = subprocess.run(
        ["git", "show", "HEAD:" + path], capture_output=True
    )
    if result.returncode != 0:
        return None
    try:
        return result.stdout.decode("utf-8")
    except UnicodeDecodeError:
        return None


def candidate_sources():
    sources = {}
    for root, dirs, files in os.walk("."):
        dirs[:] = [
            d
            for d in dirs
            if d not in (".git", "uploads", "screenshots", "assets", "figures", "node_modules")
        ]
        for name in files:
            if not name.endswith((".jsx", ".js")):
                continue
            path = os.path.normpath(os.path.join(root, name))
            committed = head_text(path)
            if committed is None:
                continue
            sources[hashlib.sha256(committed.encode()).hexdigest()] = path
    return sources


def sync(path, sources):
    original = open(path, encoding="utf-8").read()
    manifest_match = re.search(
        r'(<script type="__bundler/manifest">)(.*?)(</script>)', original, re.S
    )
    template_match = re.search(
        r'(<script type="__bundler/template">)(.*?)(</script>)', original, re.S
    )
    manifest = json.loads(manifest_match.group(2))

    swapped = []
    for key, entry in manifest.items():
        if entry["mime"] != "application/javascript":
            continue
        payload = base64.b64decode(entry["data"])
        if entry.get("compressed"):
            payload = gzip.decompress(payload)
        digest = hashlib.sha256(payload).hexdigest()
        source = sources.get(digest)
        if source is None:
            continue
        current = open(source, "rb").read()
        if current == payload:
            continue
        encoded = gzip.compress(current, mtime=0) if entry.get("compressed") else current
        entry["data"] = base64.b64encode(encoded).decode("ascii")
        swapped.append(source)

    template = template_match.group(2)
    patched_template = apply_replacements(
        template, TEMPLATE_REPLACEMENTS + CSS_REPLACEMENTS
    )

    # The wrapper document carries its own <head>, ahead of the manifest.
    wrapper_head = original[: manifest_match.start(1)]
    patched_head = apply_replacements(wrapper_head, TEMPLATE_REPLACEMENTS)

    updated = (
        patched_head
        + original[manifest_match.start(1) : manifest_match.start(2)]
        + json.dumps(manifest, separators=(",", ":"))
        + original[manifest_match.end(2) : template_match.start(2)]
        + patched_template
        + original[template_match.end(2) :]
    )
    open(path, "w", encoding="utf-8").write(updated)
    return swapped, patched_template != template, patched_head != wrapper_head


def main():
    sources = candidate_sources()
    for bundle in BUNDLES:
        swapped, template_changed, head_changed = sync(bundle, sources)
        print(bundle)
        for source in sorted(swapped):
            print("   swapped:", source)
        print("   template patched:", template_changed)
        print("   wrapper head patched:", head_changed)
    return 0


if __name__ == "__main__":
    sys.exit(main())
