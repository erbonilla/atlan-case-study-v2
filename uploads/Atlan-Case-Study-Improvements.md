# Atlan Performance — Case Study Improvement Plan

**Project:** Atlan Performance — *Liquid Precision & The Quiet Sage*
**Live:** case-study-atlan.vercel.app · **Repo:** github.com/erbonilla/case-study-atlan
**Grounded in:** the live site, repo source (`Hero.jsx`, `Sections1.jsx`, `Rail.jsx`, `Atlan Image Prompts.md`, `index.html`), and the two attached 2025–2026 portfolio playbooks.
**How to read this:** each item = **What / Why / Change**. Priority is P0 (fix before showing anyone) → P2 (polish). Items marked **[ASSUMPTION]** need your confirmation; **[GAP]** = I couldn't verify from the provided materials.

---

## Snapshot: what's already strong (don't touch)

Keep these — they are the reasons this study reads as senior, and the improvements below must not dilute them:

- The **competitive 2×2 with the empty "Deep + Autonomy-supportive" quadrant** — a specific, defensible hook.
- The **reframe sentence**: *"Life-interruption is the default state, not the exception… absorb disruption silently, not mark it red."*
- The **"The meeting ran late." scenario** used to interrogate every screen.
- The **anti-persona trio** (Streaker / Coach-Client / Sprint Beginner) — rare and senior.
- The **Honesty & Disclosure** section and the "synthesis, not ethnography" framing.
- The **Session Swapper** three-property model and the **before/after dashboard** (21 elements → 6).
- **Built in code** (functional PWA), not just Figma mockups.

---

## P0 — Fix before showing this to any recruiter

### 1. Reconcile the contradictory voice-mix stat
**What.** The site shows **two different numbers** for the Sage/Hero voice ratio: `90/10` in the hero stat blocks and `70/30` in the meta table.
**Why.** A visible internal contradiction on a *self-described* "confidently honest" study undercuts the exact credibility the study trades on. Reviewers scan for attention-to-detail; this is the kind of slip that gets noticed.
**Change.** Pick one ratio, use it everywhere (hero stats, meta table, and the Session Swapper "Sage 60 / Hero 40" line — note that's a *third* number, which is fine if it's clearly a per-surface override, but say so explicitly).

### 2. Ship ONE hero variant; retire the tweak panel
**What.** The repo exposes three hero variants (Editorial / Magazine / Centered) plus a tweaks panel; `Hero.jsx` still carries an unused legacy SVG hero (`_MorningLightSVG_unused`).
**Why.** Playbook: a portfolio is itself a UX artifact; exposed build-time toggles read as unfinished. A reviewer should see one decisive art direction, not a chooser.
**Change.** Commit to a single hero (the **Magazine** variant best fits the editorial "Liquid Precision" voice — **[ASSUMPTION]**). Remove or gate the tweak panel and delete the dead SVG code path. If you want to show exploration, move it to a small "process" aside, not the live hero.

### 3. Rewrite the "Outcomes" section as expected-impact + measurement strategy
**What.** Section 05 is titled **"Outcomes"**, but the product is *built, not launched* — there are no outcomes.
**Why.** Both playbooks are explicit: never imply results you can't establish; a "result without methodology feels like marketing." The title "Outcomes" on unlaunched work is the single biggest credibility liability in this study.
**Change.** Rename to **"Expected impact & how I'd measure it"** and import Osteóplus's labeled hierarchy (**documented / expected / recommended / placeholder**). For each claim state: the hypothesis, the metric, the method to validate, and the guardrail. Anchor on one North-Star-style metric (e.g., *adherence without pressure* — **[GAP]** Atlan has no stated North Star metric; define one).

### 4. Make the "synthesized, not real" label travel with every quote
**What.** The composite persona voice ("I don't need more motivation, I need less guilt…") is disclosed in the Persona section, but quotes reappear elsewhere.
**Why.** A 60-second scanner who lands mid-page can mistake a composite line for a research finding — the one thing your honesty framing is designed to prevent.
**Change.** Attach a compact "composite / synthesized — not a recorded interview" caption *adjacent to every quote block* site-wide, not only in Persona.

---

## P1 — Strengthen the argument

### 5. Add a 500–800-word written decision narrative
**What.** The playbook's highest-value 2026 format — one decision traced from ambiguous start to outcome — isn't present as a discrete piece.
**Why.** It's described as the clearest proof of "conscious competence" and the format senior hiring managers respond to most.
**Change.** Write it around the **Session Swapper** (you already have every ingredient in `Sections1.jsx`): ambiguous start ("the meeting ran late") → alternatives tried and discarded (calendar-first, programs-first, metrics-first IA; two ergonomically-wrong Wet Mode prototypes) → the pivot (subtraction-with-redirection, "Why" affordances relocated not deleted) → what you traded (native-gesture crispness, iOS push limits, HealthKit depth) → what you kept. Place it in Process or as a linked long-read.

### 6. Show interaction *states*, not just hero screens, in Solution Mockups
**What.** Section 04 "Solution Mockups" — **[GAP]** I couldn't verify the fidelity from source, but the study's strength is behavior under stress.
**Why.** Playbook (UI-heavy roles): show empty / loading / error / success + responsive + accessibility states; that's craft literacy. Atlan's whole thesis is "what happens when the week breaks," so the *non-happy-path* states are the argument.
**Change.** For Wet Mode and Session Swapper, show: offline state, wet/glare state, the "skip today" path (explicitly *not* a fail-state), and the silent-recalc "depth on demand" reveal. Annotate *why*, not *what*.

### 7. Formalize the AI signal
**What.** No explicit "how I directed AI" artifact is visible on Atlan (Osteóplus names its AI toolchain; Atlan doesn't).
**Why.** Playbook Part 5: "no AI signals" is now a red flag, but lazy AI is also a red flag — show taste *plus* AI.
**Change.** Add a short sidebar or 3–5 min Loom showing you directing AI on research synthesis or the bilingual copy pass, with *you* owning the judgment. Frame AI as material, not author. **[ASSUMPTION]** you used AI here as you did on Osteóplus — confirm and describe accurately.

### 8. Give the bilingual claim visible proof
**What.** "2 languages, at parity" is a headline stat, but ES/EN parity needs to be *shown*.
**Why.** Claims must be paired with evidence (both playbooks). "At parity" is a strong, checkable claim — so let it be checked.
**Change.** Show a side-by-side ES/EN screen (e.g., the locked Session Swapper notification copy in both languages) and one sentence on how you handled the Spanish rewrite that "landed too literal" — you already mention it in `Sections1.jsx` as a discarded pass; surface it as evidence of craft.

### 9. Quantify Wet Mode's accessibility claim in context
**What.** "16:1 AAA contrast" and "320×360 Wet Mode touch zone" are strong but sit as isolated stats.
**Why.** Numbers land harder tied to the human condition they solve.
**Change.** Pair each with its rationale in one line ("16:1 so it survives direct sun glare on wet glass"; "320×360 for cold, wet, imprecise hands"). Consider one annotated Wet Mode screen the way Osteóplus annotates its A11Y-02 Today view.

---

## P2 — Polish & site craft

### 10. Verify and publish live technical scores
**What.** Repo contains `.lighthouse-atlan.json`; live scores unverified here.
**Why.** Playbook: the site *is* a work sample — Lighthouse ≥90 across the board, LCP ≤2.5s / INP ≤200ms / CLS ≤0.1, and a real-phone pass.
**Change.** Run Lighthouse on the live URL, fix flagged issues, and — since accessibility is your thesis — consider publishing the score as proof.

### 11. Confirm reduced-motion + focus-visible on the live build
**What.** The design language is motion-forward ("Liquid Precision," scroll choreography).
**Why.** Both playbooks: motion must respect `prefers-reduced-motion`; every interactive needs a visible focus state; nothing critical hover-only.
**Change.** Test keyboard-only navigation and reduced-motion on the live site; ensure the rail, section anchors, and any animated hero degrade gracefully with static poster frames.

### 12. Tighten to the 5-minute-read / distinct-structure bar
**What.** Seven rich sections; ensure total read stays under ~5 minutes and doesn't mirror Osteóplus's structure.
**Why.** Playbook: identical templates across studies make them forgettable; over-length dilutes signal.
**Change.** Atlan should read *editorial/magazine*; Osteóplus reads *product-dossier*. Keep them deliberately different in rhythm and typography so the two studies feel authored, not templated.

### 13. Wire real "Morning Light" photography from your own prompt library
**What.** `Atlan Image Prompts.md` is a complete, brand-locked prompt set, but the hero currently ships the AVIF placeholder path with SVG fallbacks.
**Why.** Your art-direction system is a genuine asset; realized photography will lift the whole study.
**Change.** Generate and drop the `fig-hero-pool-sunrise` set into `assets/photography/`, follow your own delivery checklist (≥2400px, <600KB, post-grade to the locked palette, moment-describing alt text).

---

## Suggested execution order

1. P0 items 1–4 (credibility fixes — do first).
2. P1 item 5 (decision narrative) — highest reviewer value.
3. P1 items 6, 8, 9 (evidence for the interaction/bilingual/a11y claims).
4. P1 item 7 (AI signal).
5. P2 items 10–13 (technical + visual polish).

## Open questions for you
- **[ASSUMPTION]** Which hero variant is the keeper (I lean Magazine)?
- **[GAP]** What is Atlan's North-Star / primary success metric? Section 05 needs one.
- **[ASSUMPTION]** Did you use an AI-assisted workflow on Atlan (as on Osteóplus)? If so, what did you own vs. accelerate?
- Confirm the canonical Sage/Hero voice ratio.
