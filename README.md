# atlan-case-study-v2

Atlan UX case study — an adaptive endurance coaching mobile app. Includes the interactive case study, deep dive, deck, and supporting assets.

## Live site

- **Case study:** [atlan-case-study-v2.vercel.app](https://atlan-case-study-v2.vercel.app)
- **Deep dive:** [atlan-case-study-v2.vercel.app/deep-dive](https://atlan-case-study-v2.vercel.app/deep-dive)
- **Deck:** [atlan-case-study-v2.vercel.app/deck](https://atlan-case-study-v2.vercel.app/deck)

## Product previews

- **Mobile app preview (primary):** [atlan-app-web-preview.vercel.app](https://atlan-app-web-preview.vercel.app/)
- **Website (reference):** [atlan-performance.vercel.app](https://atlan-performance.vercel.app/)

## Preview locally

```bash
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080) or [http://localhost:8080/Atlan%20Case%20Study.html](http://localhost:8080/Atlan%20Case%20Study.html).

## Deploy on Vercel

Connect this GitHub repo in [Vercel](https://vercel.com/new). No build command or install step is required — Vercel serves the static files as-is. `vercel.json` maps `/` to the main case study and sets correct headers for `.jsx` files.

## Contents

- **Atlan Case Study.html** — main interactive case study (editable JSX sources)
- **Atlan Case Study (Standalone).html** — self-contained bundle for sharing

The standalone bundles embed the JSX sources as gzipped manifest entries. After editing anything
under `case-study/` or `condensed/`, run `python3 scripts/sync-standalone.py` to push those edits
into both bundles; it is safe to re-run.
- **Atlan Case Study - Deep Dive.html** — extended deep dive version
- **Atlan Deck.html** — presentation deck
