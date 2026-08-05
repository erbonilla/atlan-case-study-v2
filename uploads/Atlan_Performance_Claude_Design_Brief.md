# Atlan Performance — Claude Design Brief

**For:** Claude Design (claude.ai/design) — Anthropic Labs, powered by Claude Opus 4.7
**From:** Edgar Bonilla · `erbonilla@outlook.com`
**Project:** Atlan Performance — *Liquid Precision & The Quiet Sage* · self-initiated UX case study
**Date prepared:** May 2026
**Brief version:** v0.1
**Two deliverables requested:** (1) a scrolling portfolio web page; (2) a portfolio-review presentation deck (~18–22 slides), exportable to Canva / PDF / PPTX.

---

## 0. How to read this brief

This document is a self-contained working brief. It compresses ~35 source documents (Phase 1–4 of the project) into one consumable file. Read it top-to-bottom. If you want to verify any specific claim against its source, every section names which Phase 1–4 document the content traces to — but **you do not need to read the source documents to start working from this brief**. The brief is authoritative for the build.

Six things follow, in order:

1. **The build prompt** — what to make, in plain English
2. **The brand system** — colors, typography, the Coral-as-currency rule, the Phase 3 card pattern
3. **The narrative scope** — what the case study is about, compressed to ~1,500 words
4. **The artifact inventory** — seven existing HTML artifacts to embed or adapt
5. **The locked constraints** — voice, disclosure, banned phrases, mandatory inclusions
6. **The output specification** — concrete shapes for the web page and the deck

---

## 1. The build prompt

> Build a scrolling portfolio web page **and** a portfolio-review presentation deck for *Atlan Performance — Liquid Precision & The Quiet Sage*, a self-initiated UX concept project for a bilingual offline-first coaching PWA. The case study has seven sections (Hero / Problem & Context / Persona & Research / Process & Ideation / Solution Mockups / Outcomes / Honesty & Disclosure) and seven existing HTML artifacts (Persona Card, Journey Map, Wet Mode, "Why" Button, Onboarding Flow, Before/After Dashboard, Competitive 2×2) that need to be embedded or visually adapted. The voice is *The Quiet Sage* — empathetic, evidence-led, never shaming, Sage 70% / Hero 30% with per-surface ratios that shift. The aesthetic is *Morning Light* — calm, high-contrast, generous whitespace. Brand colors are Abyss Navy `#0B2A3C`, Tide Teal `#0E8A9A`, Coral Spark `#FF6A3D`, and Foam `#ECF7F8`. Typography pairs Fraunces (display) with Manrope (body). The case study leads with a "Self-Initiated Concept" badge and closes with a full honesty-disclosure block. **The web page is the primary deliverable; the deck is the portfolio-interview companion.**

That's the prompt as it would be entered into Claude Design's initial conversation. Everything below this section is the supporting detail for the clarifying-question stage and the iteration cycles.

---

## 2. Brand system inputs

### 2.1 Color palette (Morning Light)

The design system is built on four primary tokens. Use the short tokens as working variable names; the long names are brand-kit references.

| Token | Hex | Brand name | Role |
|---|---|---|---|
| `--abyss` | `#0B2A3C` | Abyss Navy | Primary text on light surfaces; primary background on dark panels |
| `--tide` | `#0E8A9A` | Tide Teal | Eyebrows; secondary accents; competitor dots in matrices |
| `--coral` | `#FF6A3D` | Coral Spark | Brand accent — **rationed by surface** (see Coral-as-currency rule below) |
| `--foam` | `#ECF7F8` | Foam | Card backgrounds on light surfaces; text on dark panels |

Supporting tokens (used in the existing artifacts and should carry through):

| Token | Hex / value | Role |
|---|---|---|
| `--abyss-deep` | `#061a26` | Deeper Abyss for max-contrast surfaces (Wet Mode) |
| `--abyss-72`, `--abyss-56`, `--abyss-40`, `--abyss-24`, `--abyss-16`, `--abyss-08` | rgba(11,42,60,X) | Hierarchical text tints |
| `--tide-deep` | `#0A6F7D` | Eyebrows; section labels |
| `--tide-soft` | `#BFE0E5` | Panel eyebrows on dark surfaces |
| `--tide-pale` | `#DDEEF1` | Faint backgrounds; dot halos in the 2×2 matrix |
| `--coral-bright` | `#FF7E50` | Coral halos; gradient termini |
| `--foam-warm` | `#F4FAFB` | Slight off-white for callouts and out-of-scope strips |
| `--paper` | `#FBFCFC` | Matrix frame backgrounds |

### 2.2 Typography pair

**Display:** **Fraunces** (variable, italic-capable, optical-size variant)
**Body:** **Manrope** (300–800 weights)

**Both fonts are on Google Fonts.** Load with `@import` or `<link>`:
```
https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500&family=Manrope:wght@300;400;500;600;700;800&display=swap
```

**Typography rules:**
- Section titles and major headings use Fraunces at `opsz 144`, weight 500
- Italic Fraunces is used for *pull quotes, takeaway lines, and any line meant to land emotionally*
- Manrope is the body workhorse — weights 400 (body), 500 (emphasis), 600 (sub-headers), 700 (eyebrows)
- Eyebrows are **all-caps Manrope** at 0.22em letter-spacing, 10–11px, 700 weight, in `--tide-deep`
- Numbers and stats use Fraunces at `opsz 96` or larger when they're the focal point

### 2.3 The Coral-as-currency rule

**Coral is a finite resource on any single surface.** Every Coral instance must be intentional and named.

Per-surface caps (drawn from the Phase 3 artifact set):

| Surface type | Max Coral instances | Typical Coral roles |
|---|---|---|
| Persona card / data card | 2–3 | Corner mark + headline-insight underline |
| Standard dashboard / mockup | 3–5 | Corner mark + primary CTA + footer accent |
| 2×2 matrix / strategic visual | 5 | Corner mark + key data dot + callout border + bullets + footer accent |
| Wet Mode (action-heavy) | 7 | Corner mark + main CTA + supporting dots + accent text + chevrons + footer |
| Hi-fi interaction artifact | 4–7 | Variable, but each Coral instance must serve the Hero gesture or the brand signature |

**Coral is never used for:**
- Body copy
- Standard buttons (only the *Hero* button gets Coral; secondary buttons use Tide or Abyss)
- Decorative borders that don't carry meaning
- Multiple competing CTAs on the same surface (pick one)

If a surface has more than 7 Coral instances, the design is over-saturated and the Hero allocation has been diluted.

### 2.4 The Phase 3 card pattern

Every existing artifact uses this card structure. Carry it forward into the case study sections.

1. **Top-left Coral hairline:** 96 × 3 px Coral bar at the top-left corner of every card. Brand signature.
2. **Header strip:** Eyebrow (Manrope all-caps, Tide-deep) → Title (Fraunces 48–64px) → Subtitle (Fraunces italic 18–20px, abyss-72).
3. **Body content:** The primary visual or narrative payload.
4. **Optional dark methodology panel:** Abyss background, Foam text, used for "operating rules" or "what this artifact does not measure" callouts.
5. **Footer takeaway:** Italic Fraunces line in a left-bordered block (2px Coral left border, 24px padding). The line carries the strategic point of the card.
6. **Meta row:** Two-column small Manrope (Source / Figure reference) at the bottom.

Each artifact is rendered on a `--foam` card with a hairline `--abyss-08` border, slight shadow, and ~64px padding on each side (mobile: 28px).

### 2.5 Layout principles

- **Generous whitespace** — minimum 48px between major content blocks, 64–80px between section transitions
- **Max content width** — body text caps at ~720px line length; figures cap at ~1200px
- **Mobile breakpoint** — single-column layout at ≤900px; padding drops to 28px; figures stack vertically
- **Reading rhythm** — alternate between text-heavy and visual-heavy blocks. Avoid stacking three text paragraphs or three figures in a row.

---

## 3. Narrative scope — what the case study is about

This section compresses ~11,000 words of locked Phase 4 section copy into ~1,500 words of working narrative. **Use this as the canonical content reference for both the web page and the deck.** Specific verbatim quotes and locked phrasings are flagged inline with → arrows.

### 3.1 The one-line summary

→ **"A self-initiated UX concept project: an emotionally intelligent, offline-first, bilingual coaching PWA for executive endurance athletes (30–50), built end-to-end solo over ~10 weeks."**

### 3.2 The strategic frame

The endurance-tech market has solved two problems well, and neither of them is The Optimizer's. **Deep-science platforms** (TrainingPeaks) bury users in periodization telemetry, threshold metrics, and TSS-based load management — assuming the user has the bandwidth to interpret a CTL/ATL/TSB curve at 9 PM. **Social-tracking platforms** (Strava) gamify training into public performance — leaderboards, kudos, streaks — using social comparison as the adherence mechanism.

The Optimizer needs both sides — the rigor *and* the adherence support — but neither product is built for them. They want the periodization without the cognitive load. They want adherence support without leaderboard pressure. They want depth on demand, not depth on display. They want a plan that adapts when life moves the plan.

The strategic position is a 2×2 with two axes:
- **Scientific depth** — Shallow ←→ Deep
- **Adherence model** — Pressure-based ←→ Autonomy-supportive

Four competitors anchor the existing positions (TrainingPeaks upper-left; Strava lower-left; MySwimPro middle-left; FORM upper-middle on the Y-midline). **The upper-right quadrant — Deep + Autonomy-supportive — is empty.** That's where Atlan sits.

### 3.3 The persona — The Optimizer

> **Research-honesty disclosure (must lead the persona section):** → "The Optimizer is a synthesis persona built from secondary research (Self-Determination Theory; adherence literature in endurance sports; app-store reviews and forum threads on TrainingPeaks, Strava, and MySwimPro) and informal conversations with athletes in my network. I did not run formal moderated interviews or recruit a research panel. The persona is presented as **synthesis, not ethnography.**"

**The Optimizer in one sentence:** → "The Optimizer is not deficient on drive or discipline. They are deficient on alignment between the two — and the dominant cost driving that misalignment is cognitive, not physical, fatigue."

**Who they are:**
- Executive athlete, 30–50, in a demanding mid-to-senior professional role
- Trains 8–12 hours per week — committed but amateur, past beginner phase
- 3–10 years in sport; high tech literacy; tried TrainingPeaks, Strava, swim-specific apps
- Bilingual ES/EN — not Spanish-default-with-English-fallback, both languages used across the week
- High disposable income; pays premium for time savings or sharper results

**What they value (5):** Scientific rigor · Time efficiency · Adaptability to real life · Sustainable consistency · Bilingual respect

**What breaks them (5):** Shaming / fail-state copy · Cluttered decision-heavy dashboards · Consumer-fitness gamification · Rigid scheduling · Apps that don't work poolside

**Synthesized voice (composite, not verbatim from individuals):**
- → *"I don't need more motivation. I need less guilt when life intervenes."*
- → *"Just tell me why this drill matters. I can handle the science — I just don't have time to look it up."*

### 3.4 The strategic reframe that did most of the work

→ **"Life-interruption is the default state for this user, not the exception. The product's job is to absorb disruption silently, not to mark it red."**

That single sentence collapsed dozens of competing screens into one strategic question: *what is the cheapest possible interaction that lets the user keep training when the week breaks?* Every IA decision descends from that reframe.

### 3.5 The platform choice — PWA, offline-first

Three reasons:
1. **The pool locker room.** No cellular signal. PWAs with offline-first caching load instantly from local storage.
2. **Cross-device continuity.** Phone at 5:30 AM, laptop at 9 PM — same product, no install.
3. **App-store bypass.** A PWA can be shared with a URL.

**Trade-offs accepted:** Native gestures slightly less crisp; iOS PWA push notifications constrained by Safari; HealthKit deep integration limited.

### 3.6 The three solution pillars (Section 5)

**Pillar 1 — Wet Mode** (environmental design)
The Optimizer trains at the pool. Standard mobile UX assumes dry fingers and connectivity; neither holds at the pool deck. Wet Mode replaces precision taps with gross-motor swipe zones. Four spec floors:
- **320 × 360 px** minimum touch zone (≈25× WCAG 2.2 AA minimum)
- **16:1** contrast (exceeds WCAG 2.2 AAA)
- **144 px** display headline (largest type in the product)
- **100%** offline persistence (architectural rule)

Gesture grammar: swipe right = complete set; swipe left = pause; swipe down (long) = exit Wet Mode. The 120 px swipe threshold protects against accidental triggers from water droplet movement or finger drag from goggle adjustment.

**Surface ratio: 90% Sage / 10% Hero** — the only Coral element is the *Complete* swipe zone.

**Pillar 2 — The "Why" button** (depth on demand)
Cluster 4 from the research: cognitive fatigue, not physical fatigue, breaks adherence. Subtraction with redirection: depth lives one tap below the surface, not on it. The `i` button next to a metric label is Tide-outlined (Sage affordance), not Coral — Coral is reserved for productive gestures.

The threshold modal carries ~115 words across four parts: explanation of mechanism (lactate clearance), bulleted mechanism block, prescription summary, formal citation. The citation is real and verifiable: → **Maglischo, E. W. (2003). *Swimming Fastest* (2nd ed.). Champaign, IL: Human Kinetics, pp. 348–356.**

**Surface ratio: 95% Sage / 5% Hero** — the strongest Sage surface in the product. Zero motivational copy.

**Pillar 3 — Bilingual onboarding** (cultural design)
Language is selected before account creation. Both languages appear on the same screen at equal visual weight, no default highlighted, no IP geolocation auto-pick.

Four screens: Language → Welcome → Grit Calibration (4 questions, 3 options each, mapped to the Drive ↔ Discipline axis) → Tuned (transparency layer showing what the calibration did).

The Welcome line in both languages (locked, not translated, both authored fresh):
- **EN:** → *"Built for athletes with lives."*
- **ES:** → *"Hecho para quienes entrenan entre todo lo demás."*

Different sentence structures, same emotional payload. This is what parity means.

**Surface ratio: 55% Sage / 45% Hero** — the only surface where Hero leads, briefly, because the first warmth signal a new user receives has to be Hero.

### 3.7 Outcomes — what can and can't be claimed

> **Disclosure framing:** The PWA is functional but has not been launched to users. No user retention curve has been generated. Outcomes are tagged either **MEASURED** (verified against design files) or **HYPOTHESIS** (with an explicit measurement plan attached).

**Tile 01 — MEASURED.** WCAG 2.2 AA across primary surfaces; AAA on the high-stakes screen.
- Abyss text on Foam background: **11.8:1** (exceeds AAA 7:1)
- Foam on Abyss-deep (Wet Mode): **16:1** (exceeds AAA 7:1)
- Secondary surfaces: **5.2:1** (above AA 4.5:1)

**Tile 02 — HYPOTHESIS.** A 90-day cohort using Atlan would show ≥15% higher session-completion adherence than a TrainingPeaks-style control. Measurement plan: between-subjects cohort, 30–50 participants per arm, random assignment, 90+ days, primary metric weekly session-completion rate (weeks 7–12), pre-registered before recruitment, α = 0.05, power 0.80.

**Tile 03 — HYPOTHESIS.** Users with wet hands inside a waterproof pouch complete "mark set complete" in Wet Mode ≥40% faster than in standard mobile interface, with lower error rate. Measurement plan: within-subjects counterbalanced, 12–18 participants, real pool deck, wet hands, sun glare condition, primary metric time-to-completion across 5 consecutive sets.

**Validation roadmap (5 stages, future work):**
1. Closed beta with 5–8 recruited Optimizer-demographic participants
2. Wet Mode in-environment study (Tile 03)
3. 90-day adherence cohort study (Tile 02)
4. Bilingual cohort sub-analysis
5. Subject-matter expert audit of every "Why" modal citation

### 3.8 The role card (Section 1)

- **Owned:** Strategy, brand system, design system tokens, IA, all wireframes and high-fidelity UI, Wet Mode interaction model, Session Swapper flow, bilingual onboarding sequence, PWA implementation in code.
- **Worked across:** Adherence-science synthesis (SDT, sport-psychology), competitive teardown, technical scoping for offline-first PWA.
- **What I gave up:** A real user research panel. This is a concept project; research is secondary literature plus light primary conversations.

→ **"Every decision in this case study is one I made and can defend."**

### 3.9 What I'd do differently

Four reflection items, framed as conditional voice:
1. Recruit 5–8 participants from The Optimizer demographic and run unstructured interviews *before* locking the persona, not after.
2. Run the Wet Mode time-to-action study during, not after, the Wet Mode design.
3. Get a Spanish-native copywriter onto the Welcome and Calibration copy *before* the artifact ships.
4. Spend time on a *summary form* of the case study, not just the full form.

### 3.10 Closing line

→ **"The case study reads as confidently honest, or it doesn't read at all. The next step is a recruited cohort. The next step after that is the data."**
**— Edgar Bonilla, May 2026**

---

## 4. The artifact inventory — seven existing HTML cards

Seven artifacts already exist as production-ready HTML cards. They use the brand system in §2, follow the Phase 3 card pattern, and can be embedded directly (as iframes or static renders) or visually adapted into the web page / deck.

| FIG. | Artifact | File | Section placement | Purpose |
|---|---|---|---|---|
| **FIG. 01** | Competitive 2×2 Matrix | `Atlan_Phase3_Task7_Competitive_2x2.html` | Section 2 (Problem & Context) | Positions Atlan in the empty upper-right quadrant. Names 4 competitors + 3 out-of-scope + 5 omissions. |
| **FIG. 02** | Persona Card — The Optimizer | `Atlan_Phase3_Task1_Persona_Card.html` | Section 3 (Persona) | At-a-glance persona profile with research-honesty footer. |
| **FIG. 03** | Journey Map — "The Meeting Ran Late" | `Atlan_Phase3_Task2_Journey_Map.html` | Section 4 (Process) | Dual-track comparison: competitor pressure-frame vs. Atlan Session Swapper. **Reproduces banned phrases inside competitor track for contrast — see §5.3.** |
| **FIG. 04** | Before/After Dashboard | `Atlan_Phase3_Task6_Before_After.html` | Section 4 (Process) | 21 → 6 elements; 5 → 1 chart; 4 → 0 pressure mechanics; 0 → 4 "Why" affordances. Subtraction-as-design-move artifact. |
| **FIG. 05** | Wet Mode Wireframes + Hi-Fi + Spec Panel | `Atlan_Phase3_Task3_Wet_Mode.html` | Section 5 (Solution) | Lo-fi standard vs. lo-fi Wet Mode side-by-side; hi-fi Wet Mode screen with annotations; four spec floors in dark panel. |
| **FIG. 06** | "Why" Button Two-Screen Flow | `Atlan_Phase3_Task4_Why_Button.html` | Section 5 (Solution) | Screen A daily session + Screen B modal open. Includes verifiable Maglischo (2003) citation + four citation methodology rules. |
| **FIG. 07** | Bilingual Onboarding Sequence | `Atlan_Phase3_Task5_Onboarding.html` | Section 5 (Solution) | Four-screen flow with EN/ES parity. ES parity panel with four operating rules. |

**Embed strategy options (Claude Design to decide based on output context):**
- **Iframe embed** — preserves the artifacts as live interactive HTML
- **Static SVG/PNG export** — for the deck (PPTX/PDF) and for performance on the web page
- **Visual adaptation** — re-render the artifact's content using Claude Design's native components, preserving the visual language

**Recommendation:** For the web page, iframe-embed for fidelity. For the deck, export to static visuals (each artifact becomes 1–2 slides with the key content extracted).

---

## 5. Locked constraints — what you must and must not do

These are non-negotiable. They come from the Phase 1 Output 3 (Voice Rule) and Output 4 (Honesty & Disclosure Ruleset). Every constraint that follows is locked from earlier project phases; do not relitigate.

### 5.1 Voice — first-person singular throughout designer voice

- Use **"I"** in all designer-voice prose. Never "we," "our," or editorial plural.
- **Past tense** for what I did ("I locked the platform"); **present tense** for what the design does ("the Session Swapper recalculates silently").
- **Product voice** (the voice the app uses to talk to users) appears only in quoted source material — blockquotes from the artifacts. **Never blur the two.**

### 5.2 Banned phrases (Hard rule — any hit is a defect)

- "the client" / "the team" / "stakeholders"
- "the launch" / "since launching" / "users have reported"
- "we" / "our" (in designer voice)
- "revolutionary" / "game-changing" / "seamless" / "delight" / "love" / "crushing" / "smashing"
- Streak language: "Streak broken" / "You're 1 day behind plan" / `[MISSED]` — **except inside the journey map's competitor track, where they appear deliberately for contrast (see §5.3).**

**Required substitutions:**
- "Self-initiated concept project" not "client project"
- "Built (PWA functional); not launched to users" not "released" or "launched"
- "Solo designer, end-to-end" not "I led a team"

### 5.3 Banned-phrase reproduction inside the journey map

FIG. 03 (Journey Map) deliberately reproduces banned voice patterns inside its competitor track: "Streak broken," the red `[MISSED]` pill, "You're 1 day behind plan." **This is intentional and disclosed.** They are the language Atlan is *designed against*. If you adapt or re-render FIG. 03 for the web page or deck, the contrast reproduction must remain — it is the artifact's core argument. Section 7 of the case study carries the explicit disclosure.

### 5.4 Mandatory disclosures (must appear on the web page and the deck)

**On the hero / opening surface:**
- The **"Self-Initiated Concept"** badge, visible before any other body content.
- The **"Built (PWA functional); not launched to users"** project status.
- **Solo designer, end-to-end** authorship claim.

**On the persona section:**
- The leading research-honesty disclosure: → *"The Optimizer is a synthesis persona built from secondary research and informal conversations… synthesis, not ethnography."*
- **No quote is attributed to an individual.** Synthesized voice patterns must be framed as composites.

**On the outcomes section:**
- Every numeric outcome claim badged either **MEASURED** (with source artifact) or **HYPOTHESIS** (with measurement plan).
- Falsification condition stated for each HYPOTHESIS.
- The validation roadmap introduced as future work.

**On the closing / footer (Section 7):**
- The canonical Output 4 honesty disclosure block (verbatim, see §3.7 disclosure framing).
- AI-assistance disclosure naming Cursor, Claude Code, Codex — with the acceleration-vs-authorship split: AI accelerated implementation; design strategy is mine.
- Banned-phrase reproduction inside FIG. 03 disclosed as deliberate contrast.

### 5.5 Brand archetype mix — Sage 70 / Hero 30, no Ruler

**This is the project's most consequential lock.** Earlier project iterations explored a Sage / Hero / Ruler mix at 60/30/10; that was rejected in favor of **Sage 70% / Hero 30%, no Ruler.** Surface the mix correctly in any Section 1 meta table.

Per-surface ratios that shift (covered in §3.6):
- Wet Mode: 90/10
- "Why" modal: 95/5
- Onboarding Welcome: 55/45
- Daily session view: 80/20
- Session Swapper notification: 60/40

The voice does work on each surface; what changes is *which voice does it*.

### 5.6 Language posture — English-only case study

The product is bilingual ES/EN at parity. **The case study is English-only.** This is locked from Phase 1 Output 2 Decision 4. Do not produce a Spanish version of the web page or the deck.

**Exception:** The Spanish Welcome line — → *"Hecho para quienes entrenan entre todo lo demás"* — appears once in Section 5 as quoted source material from FIG. 07, in support of the parity argument. This is a citation from the artifact, not a translation of the case study. Surrounding text remains English.

### 5.7 Citation discipline

The Maglischo (2003) citation in FIG. 06 is real and verifiable. Do not paraphrase or compress the citation format. The four citation methodology rules from FIG. 06 (every mechanism cites a source; primary or canonical secondary text; one citation per concept; citation visible, not footer-buried) are operating rules the product commits to — preserve them.

The Teixeira et al. (2012) reference in Tile 02 outcomes (the SDT meta-review for the 10–25% effect-size range) is a research citation, not an Atlan outcome — does not require a MEASURED/HYPOTHESIS badge.

---

## 6. Output specification — two deliverables

### 6.1 Deliverable A — Scrolling portfolio web page

**Format:** Single HTML page, responsive, mobile-first considerate. Exportable as standalone HTML from Claude Design.

**Structure** (seven sections, top to bottom):

| # | Section | ~Length | Key elements |
|---|---|---|---|
| 1 | Hero | ~1 viewport | Title + Self-Initiated badge blockquote + photo placeholder + role card + meta table + section preview |
| 2 | Problem & Context | ~2 viewports | Polarized-market framing + FIG. 01 embed + corner-by-corner competitor block + "meeting ran late" scenario intro + disclosure block |
| 3 | Persona & Research | ~2 viewports | Research-honesty disclosure (leads) + headline insight + FIG. 02 embed + values/frictions parallel lists + synthesized voice block + anti-persona |
| 4 | Process & Ideation | ~3 viewports | Reframe pull-quote + PWA platform reasoning + FIG. 03 embed + Session Swapper detail + FIG. 04 embed + dashboard reframe + "what this section doesn't show" |
| 5 | Solution Mockups | ~3 viewports | Three pillars: Wet Mode (FIG. 05) + Why button (FIG. 06) + Bilingual onboarding (FIG. 07). Voice ratios surfaced per surface. |
| 6 | Outcomes | ~2 viewports | MEASURED tile (with hex values) + 2 HYPOTHESIS tiles (with measurement plans) + validation roadmap (5 stages) |
| 7 | Honesty & Disclosure | ~1.5 viewports | Global honesty block + AI-assistance disclosure + persona/banned-phrase/citation disclosures + "what's not in scope" + "what I'd do differently" + closing |

**Navigation:**
- Sticky thin top nav with section anchor links (Hero / Problem / Persona / Process / Solution / Outcomes / Honesty)
- "Scroll to top" button after Section 3
- No mid-page modals; everything is in the scrolling flow
- One persistent contact link (small footer)

**Visual rhythm:**
- Section transitions: 80px vertical whitespace + a 1px Coral hairline + section eyebrow → Fraunces section H1 → Fraunces italic sub
- Artifact embeds (FIG. 01–07): centered, max-width 1200px, with a small Fraunces italic caption below ("Fig. 01 — Where the gap sits")
- Pull quotes: italic Fraunces 26–32px in a 2px Coral left-bordered block with 24px padding
- Tables: minimal borders, hairline `--abyss-08` dividers, Manrope 13px body, Manrope 11px eyebrow headers

**Animation discipline:**
- Light only. Smooth scroll on anchor link. Fade-in on section entry (subtle, 200ms). No parallax. No scroll-driven animations. No autoplay. No carousel.
- The Quiet Sage aesthetic is *calm* — anything that visually shouts is wrong.

**Performance targets:**
- Lighthouse score 90+ on Performance, Accessibility, Best Practices, SEO
- Page weight under 2 MB ideally (with iframe-embedded artifacts)
- All fonts loaded with `display=swap` to avoid FOIT

**Mobile considerations:**
- Single-column layout below 900px
- Padding compresses from 64px to 28px
- Tables convert to stacked-row presentation
- Artifact iframes scale to viewport width with internal mobile breakpoints already built into the source HTML

### 6.2 Deliverable B — Portfolio-review presentation deck

**Format:** ~18–22 slides, exportable to Canva / PDF / PPTX. 16:9 aspect ratio.

**Slide structure:**

| Slide | Content |
|---|---|
| 1 | **Cover.** *Atlan Performance.* Sub: *Liquid Precision & The Quiet Sage.* Sub-sub: *A self-initiated UX concept project · Edgar Bonilla · May 2026.* Self-Initiated badge visible. |
| 2 | **The one-line claim.** Compress §3.1 to one slide. Photo or visual on right, claim on left. |
| 3 | **My role.** The role card from §3.8 in slide form: Owned / Worked across / What I gave up. |
| 4 | **The problem (1 of 2).** Two-sided market framing: deep without empathy vs. empathy without depth. Visual: simplified rendering of the 2×2's two axes. |
| 5 | **The problem (2 of 2) — Where the gap sits.** Static export of FIG. 01 (Competitive 2×2). Caption: *"The upper-right is empty. The case study has to earn it."* |
| 6 | **The user — disclosure first.** Research-honesty disclosure as the slide's central content. Sets the methodological posture before introducing the persona. |
| 7 | **The Optimizer.** Static export of FIG. 02 (Persona Card). |
| 8 | **The headline insight.** Pull-quote slide: → *"Cognitive fatigue is just as detrimental to adherence as physical fatigue."* — italic Fraunces, large, on Morning Light background. |
| 9 | **The reframe that did the work.** Pull-quote slide: → *"Life-interruption is the default state, not the exception."* |
| 10 | **The journey — competitor vs. Atlan.** Static export of FIG. 03 (Journey Map). |
| 11 | **The Session Swapper.** Detail slide: three properties (notification-reachable / one-gesture / silent recalc) with the locked notification copy quoted. |
| 12 | **Subtraction as a design move.** Static export of FIG. 04 (Before/After Dashboard). |
| 13 | **Pillar 1 — Wet Mode.** Static export of FIG. 05 (Wet Mode). Highlight the four spec floors. |
| 14 | **Pillar 2 — The "Why" button.** Static export of FIG. 06 ("Why" Button). Highlight the Maglischo citation. |
| 15 | **Pillar 3 — Bilingual onboarding.** Static export of FIG. 07 (Onboarding). Highlight the EN/ES parity line. |
| 16 | **What I can claim — MEASURED.** Tile 01 from §3.7. Contrast values with hex tokens. |
| 17 | **What I can claim — HYPOTHESIS (1 of 2).** Tile 02 — 90-day adherence hypothesis with measurement plan. |
| 18 | **What I can claim — HYPOTHESIS (2 of 2).** Tile 03 — Wet Mode time-to-action with measurement plan. |
| 19 | **Validation roadmap.** Five stages from §3.7. Sequenced by empirical cost. |
| 20 | **What I'd do differently.** Four reflection items from §3.9. |
| 21 | **Honesty & disclosure.** The global honesty block from §3.7. AI-assistance acceleration-vs-authorship split. |
| 22 | **Closing.** → *"The case study reads as confidently honest, or it doesn't read at all. The next step is a recruited cohort."* Contact info: erbonilla@outlook.com. |

**Slide design discipline:**
- Each slide carries the Coral hairline top-left (96 × 3 px) — Phase 3 card pattern preserved
- Slide titles: Fraunces 36–44px, weight 500
- Body: Manrope 18–22px
- Pull-quote slides: Fraunces italic 40–56px, on `--foam` background, Coral left-border
- Maximum 5 lines of body text per slide; if more is needed, split into two slides
- Visual rhythm: alternate text-heavy and visual-heavy slides

**Presenter notes:**
- Each slide gets ~3–5 sentences of presenter-note prose drawn from the corresponding section's published copy
- Notes serve as speaking prompts in a 30-minute portfolio review, not full script

---

## 7. What the brief does not cover (intentionally)

To prevent over-specification, the following are *intentionally left to Claude Design's judgment*:

- **Exact slide transitions** — pick what reads calm; avoid spin/zoom/dramatic
- **Photo selection** — placeholder markers in Section 1 (hero banner) and Section 3 (persona portrait). Brief recommends Morning Light environment photos: pool deck at first light, open water, no athlete face visible
- **Web page navigation micro-interactions** — keep them minimal
- **Exact font sizes within ranges** — use the typography ranges in §2.2 as guidance
- **Mobile drawer/menu pattern** — Claude Design picks
- **Favicon and meta tags** — implement standard best practices
- **The decision on iframe vs. static for artifact embeds** — Claude Design picks based on the rendering context

---

## 8. Open questions Claude Design should ask during the clarifying-quiz

When Claude Design's onboarding asks clarifying questions, these are the legitimate ones:

1. **Hosting / publication context.** Standalone export only, or deploy to a Vercel/Netlify-style hosting?
2. **Domain / URL.** Is there a target domain? (Affects internal links and SEO.)
3. **Photo sourcing.** Should Claude Design generate placeholder visuals (AI-rendered) or leave hero-image slots blank for Edgar to populate later?
4. **Deck export priority.** PPTX, PDF, Canva, or all three?
5. **Color contrast verification.** Should the build include a Lighthouse audit step at the end?
6. **Connection to Claude Code.** Should the web page be ready for handoff to Claude Code (for any post-Claude-Design refinement), or kept self-contained?

---

## 9. Sign-off

| | |
|---|---|
| Brief author | Edgar Bonilla |
| Contact | erbonilla@outlook.com |
| Source documents (compressed) | Phase 1: 5 docs · Phase 2: 5 docs · Phase 3: 15 files · Phase 4: 8 docs |
| Total source word count compressed | ~70,000 words → this brief |
| Brief readiness | Ready for upload to claude.ai/design |
| Next instance's first action | Read this brief end-to-end, then begin the clarifying-question quiz |

---

*Brief version: v0.1 · Atlan Performance UX case study · Self-contained working brief for Claude Design. All source content is locked from Phases 1–4 of the underlying project; no relitigation needed.*
