# Atlan Performance — Conflicts To Resolve

**Prepared for:** Edgar Bonilla
**Date:** 24 July 2026
**Scope:** Contradictions, unverifiable claims, and iOS-blocking specifications found across the Atlan case studies and the Atlan Design System
**Related:** `ATLAN_iOS_ACTION_PLAN.md` · `ATLAN_iOS_DESIGN_SPEC.md` · `AtlanDesignTokens.swift`

---

## How to use this document

Each conflict below has five parts:

| Part | What it tells you |
|---|---|
| **What's wrong** | The contradiction, in one sentence |
| **Where** | Exact document and location — the file you open to fix it |
| **Evidence** | The literal text in conflict, quoted from both sides |
| **Why it matters** | Consequence if it ships unresolved |
| **Fix** | The specific edit, per document |

### Severity legend

| | Meaning |
|---|---|
| 🔴 **Blocker** | A published accessibility claim is wrong, or a component fails the standard the brand claims to meet. Fix before the case study is shown again. |
| 🟠 **High** | The iOS build cannot proceed as specified, or a required asset does not exist. |
| 🟡 **Medium** | Two documents say different things. Costs credibility in review; costs rework in build. |
| ⚪ **Low** | Cosmetic or housekeeping. Fix opportunistically. |

### ⚠️ Important note on editing the case studies

`Atlan Case Study (Standalone).html` and `Atlan Case Study - Deep Dive (Standalone).html` are **compiled bundles**, not source files. Each contains a `__bundler/manifest` block of gzip+base64 assets plus the page source as an escaped JS string. **Editing the `.html` directly will be overwritten on the next export.**

Every case-study fix below names the **source component** that must change, recovered from the bundle:

| Source file (in your case-study project) | Contains |
|---|---|
| `sections-problem-persona-process.jsx` | §01 Problem, §02 Persona, §03 Process (`ProblemSection`, `PersonaSection`, `ProcessSection`) |
| `sections-solution-outcomes-honesty.jsx` | §04 Solution, §05 Outcomes, §06 Honesty (`SolutionSection`, `OutcomesSection`, `HonestySection`) |
| `condensed-decisions.jsx` | `DecisionSpine`, `ThreeDecisions` |
| `condensed-system-evidence.jsx` | `SystemDetail`, `EvidencePlan`, `Reflection`, `CreditsCondensed` |
| `figures/fig-01-competitive.html` … `fig-07-onboarding.html` | The seven embedded figure prototypes |

Fix the source, then re-export both standalone bundles.

---

## Summary — 18 conflicts

| # | Conflict | Severity | Primary document to edit |
|---|---|---|---|
| C-01 | Primary CTA button fails WCAG AA (2.85:1) | 🔴 Blocker | `atlan_css_variables_&_design_system.md` |
| C-02 | Published 11.8:1 contrast figure does not reproduce | 🔴 Blocker | `sections-solution-outcomes-honesty.jsx` |
| C-03 | Wet Mode 16:1 attributed to the wrong background color | 🔴 Blocker | `figures/fig-05-wet-mode.html` |
| C-04 | Tide Teal text rule is under-specified; links fail AA in both modes | 🔴 Blocker | `colors_and_type.css` + `README.md` |
| C-05 | Wet Mode touch zones cannot fit an iPhone as specified | 🟠 High | `figures/fig-05-wet-mode.html` |
| C-06 | "≈25× the WCAG minimum" does not reproduce by any method | 🟠 High | `sections-solution-outcomes-honesty.jsx` |
| C-07 | Abyss Deep `#061a26` is used everywhere but tokenized nowhere | 🟠 High | `colors_and_type.css` |
| C-08 | No iOS app-icon asset exists, and logo rules forbid making one | 🟠 High | `Atlan_Brand_Kit_v2.0.md` §3.1 |
| C-09 | Lato and Roboto Mono are not bundled — CDN-only | 🟠 High | `Atlan Design System/fonts/` |
| C-10 | Onboarding voice ratio is inverted between two documents | 🟡 Medium | `figures/fig-07-onboarding.html` |
| C-11 | The persona has two different names and ages in one figure | 🟡 Medium | `figures/fig-02-persona.html` |
| C-12 | Voice "ceiling" of 90/10 is exceeded by the 95/5 surface | 🟡 Medium | `sections-solution-outcomes-honesty.jsx` |
| C-13 | "6 elements / 4 Why affordances" has no stated counting rule | 🟡 Medium | `figures/fig-04-before-after.html` |
| C-14 | Live `href="#"` placeholder in a published portfolio artifact | 🟡 Medium | `condensed-hero.jsx` |
| C-15 | Token name mismatch: `--touch-min` vs `--touch-target-min` | 🟡 Medium | `colors_and_type.css` |
| C-16 | Theming class contradiction: `.dark-mode` vs `.light` | 🟡 Medium | `COMPONENT_QUICK_REFERENCE.md` |
| C-17 | Three component values contradict between docs (blur, radius, unicode) | 🟡 Medium | `COMPONENT_QUICK_REFERENCE.md` |
| C-18 | Housekeeping: 48px mislabeled as WCAG, rem/px drift, dead URL | ⚪ Low | `Atlan_Brand_Kit_v2.0.md` |

---

# 🔴 BLOCKERS

## C-01 — The primary CTA button fails the accessibility standard the brand claims to meet

**What's wrong.** `.btn-primary` specifies white text on Coral Spark. That combination measures **2.85:1** — it fails WCAG 2.2 AA for normal text (4.5:1) and fails even the large-text threshold (3:1). This is the most-used component in the system, and the case study lists WCAG 2.2 AA conformance as a **DOCUMENTED** claim, not a hypothesis.

**Where.**
- `Atlan Design System/uploads/atlan_css_variables_&_design_system.md`, lines **311–338** (`.btn-primary`, `.btn-secondary` and their `:hover` states)
- Claim asserted in: `sections-solution-outcomes-honesty.jsx` → `OutcomesTiles`, Tile 01 — *"WCAG 2.2 AA across primary surfaces. AAA on the high-stakes screen."*

**Evidence.**

```css
/* atlan_css_variables_&_design_system.md:311 */
.btn-primary   { background-color: var(--color-coral-spark); color: var(--color-white); }
.btn-secondary { background-color: var(--color-tide-teal);   color: var(--color-white); }
```

Measured (WCAG 2.x relative luminance, computed from the locked hexes):

| Component | Pair | Ratio | AA normal (4.5:1) |
|---|---|---|---|
| `.btn-primary` | `#FFFFFF` on `#FF6A3D` | **2.85:1** | ❌ **FAIL** |
| `.btn-primary:hover` | `#FFFFFF` on `#E0552D` | **3.81:1** | ❌ FAIL |
| `.btn-secondary` | `#FFFFFF` on `#0E8A9A` | **4.10:1** | ❌ FAIL |
| `.btn-secondary:hover` | `#FFFFFF` on `#0A6B78` | 6.20:1 | ✅ pass |

**Why it matters.** Every "GET STARTED TODAY!", every "Start session", every Wet Mode Complete zone inherits this. A reviewer who spot-checks one number will check the primary button first — and the case study's strongest evidence tile is the thing that breaks.

**Fix.** Swap the foreground, don't touch the locked brand colors. Both alternatives pass comfortably:

| Component | Change to | New ratio |
|---|---|---|
| `.btn-primary` | **Abyss Navy `#0B2A3C`** on Coral Spark | **5.23:1** ✅ |
| `.btn-secondary` | **Foam `#ECF7F8`** on Teal Dark `#0A6B78` (make Teal Dark the rest state) | **5.68:1** ✅ |

Dark navy text on a coral fill is also the more characteristic choice for this brand — white-on-coral reads generic; navy-on-coral reads Atlan.

**Documents to edit:**
1. `uploads/atlan_css_variables_&_design_system.md` lines 311–338 — change `color:` on both button classes.
2. `uploads/COMPONENT_QUICK_REFERENCE.md` §Buttons — add a "Text color" column recording the corrected pairings.
3. `Atlan_Brand_Kit_v2.0.md` §5.3 — add the approved foreground/background pairings table.
4. `AtlanDesignTokens.swift` — no change needed; add `atlOnCoral = atlAbyssNavy` and `atlOnTeal = atlFoam` semantic tokens so no view can pick the wrong foreground.

---

## C-02 — The published 11.8:1 contrast figure does not reproduce

**What's wrong.** The case study reports **11.8:1** for "Abyss on Foam" as a documented, verified value. Computing it from the locked hexes gives **13.63:1**. No pairing in the palette produces 11.8:1.

**Where.**
- `sections-solution-outcomes-honesty.jsx` → `OutcomesTiles`, Tile 01:
  `<Numeric value="11.8:1" label="Abyss on Foam" note="Exceeds AAA 7:1" tone="tide" />`
- Same file → `OutcomesSpec`: `['Abyss on Foam', '11.8:1', 'Exceeds AAA 7:1']`
- `condensed-system-evidence.jsx` → `EvidencePlan`: *"Design-token contrast values (16:1 Wet Mode, 11.8:1 primary)"*

**Evidence.** Full palette audit, computed:

| Pair | Published | Measured | Note |
|---|---|---|---|
| Abyss Navy `#0B2A3C` on Foam `#ECF7F8` | 11.8:1 | **13.63:1** | Understated by 1.8 |
| Foam on Abyss Deep `#061a26` | 16:1 | **16.25:1** | ✅ Accurate |
| Foam on Abyss Light `#0F3A50` (`--bg-2`) | — | **11.04:1** | Closest value to 11.8 — possibly the intended pair, mislabeled |
| Coral `#FF6A3D` on Abyss Navy | 5.2:1 | **5.23:1** | ✅ Accurate, but labeled vaguely as "secondary surfaces" |

**Why it matters.** The error is in the safe direction — you're under-claiming — but it is still a number a reviewer can falsify in thirty seconds with a contrast checker. In a case study whose entire thesis is *"the case study reads as confidently honest, or it doesn't read at all,"* an unreproducible verified figure is the most expensive kind of error.

The likeliest cause: 11.04:1 (Foam on `--bg-2`) was computed, rounded up, and then relabeled as the Abyss-on-Foam pair.

**Fix.**
1. In `sections-solution-outcomes-honesty.jsx`, correct **both** `OutcomesTiles` and `OutcomesSpec` to **`13.6:1`**, label `Abyss Navy on Foam`.
2. Add the third row explicitly rather than calling it "secondary surfaces": `Foam on Abyss Light (--bg-2) · 11.0:1`.
3. In `condensed-system-evidence.jsx` → `EvidencePlan`, update to *"(16.3:1 Wet Mode, 13.6:1 primary)"*.
4. Add a one-line method note beside the table: *"WCAG 2.x relative luminance, computed from design tokens; not sampled from rendered screenshots."* That single sentence makes every number auditable and pre-empts the question.

---

## C-03 — The Wet Mode 16:1 claim is attributed to the wrong background color

**What's wrong.** The Wet Mode figure states the 16:1 ratio is *"Foam (#ECF7F8) on Abyss Navy (#0B2A3C)."* Foam on Abyss Navy is **13.63:1**. The 16:1 value comes from Foam on **Abyss Deep `#061a26`** — which is what the outcomes section correctly says.

**Where.**
- `figures/fig-05-wet-mode.html` → "Contrast / 16:1 contrast ratio" annotation
- Contradicted by `sections-solution-outcomes-honesty.jsx` → Tile 01: `['Foam on Abyss-deep (Wet Mode)', '16:1', ...]`

**Evidence.**

> **fig-05:** "16:1 contrast ratio — Foam (#ECF7F8) on Abyss Navy (#0B2A3C) — exceeds WCAG 2.2 AAA on every text element."
>
> **§05 Outcomes:** "Foam on Abyss-deep (Wet Mode) — 16:1 — Exceeds AAA 7:1." *(Hex values listed: `#0B2A3C · #ECF7F8 · #061a26`)*

**Why it matters.** Two surfaces of the same case study attribute the same number to two different colors. It also implies Wet Mode runs on the standard canvas, which would silently drop the app's flagship accessibility claim from 16.25:1 to 13.63:1 if an engineer built it from the figure.

**Fix.**
1. In `figures/fig-05-wet-mode.html`, change the annotation to: **"Foam (#ECF7F8) on Abyss Deep (#061a26) — 16.3:1 — exceeds WCAG 2.2 AAA on every text element."**
2. Add a visible note that Wet Mode uses a **deeper canvas than the rest of the app** — that is a deliberate design decision worth surfacing, not an implementation detail. It strengthens the figure.
3. Resolve C-07 (tokenize `#061a26`) at the same time.

---

## C-04 — The Tide Teal text rule is under-specified, and links fail AA in both modes

**What's wrong.** The design system forbids Tide Teal for body text **on dark backgrounds only**. Tide Teal also fails on light backgrounds (3.75:1), and `colors_and_type.css` sets it as the default link color globally — with a hover state that drops to **2.40:1** on dark.

**Where.**
- `Atlan Design System/README.md` line **134**: *"Hard rule: Tide Teal is never used for body text under 18px on dark backgrounds (fails WCAG AA at 3.8:1)."*
- `Atlan Design System/SKILL.md` line **40**: same rule, same dark-only scoping
- `colors_and_type.css` lines **251–257**: `a { color: var(--accent-2); }` / `a:hover { color: var(--color-teal-dark); }`

**Evidence.**

| Pair | Measured | AA normal | Where it's used |
|---|---|---|---|
| Tide Teal on Abyss Navy | **3.63:1** | ❌ | Default link, dark mode *(README states 3.8:1 — also slightly off)* |
| Tide Teal on Foam | **3.75:1** | ❌ | Default link, light mode — **not covered by the current rule** |
| Teal Dark `#0A6B78` on Abyss Navy | **2.40:1** | ❌❌ | `a:hover` in dark mode — hovering makes it *worse* |
| Teal Dark on Foam | 5.68:1 | ✅ | `a:hover` in light mode — fine |

**Why it matters.** The rule as written implies light mode is safe. It isn't. And the hover behavior is inverted on dark: `--color-teal-dark` is a *darkening* step, which is correct on a light surface and actively harmful on a dark one. Every inline link in the product currently fails AA.

**Fix.**
1. **`colors_and_type.css`** — make the link hover mode-aware. On dark, hover should *lighten*, not darken:
   ```css
   a       { color: var(--link);       }
   a:hover { color: var(--link-hover); }
   :root       { --link: #3FB6C4; --link-hover: #6FD3DE; } /* dark mode: lightened teals */
   .light      { --link: #0A6B78; --link-hover: #085460; } /* light mode: darkened teals */
   ```
   Verify the new values before committing; both must clear 4.5:1 against their own canvas.
2. **`README.md` line 134** — rewrite the hard rule to be surface-agnostic and correct the ratio:
   > **Hard rule:** Tide Teal at full saturation is never used for text under 18px on **any** background — 3.63:1 on Abyss Navy, 3.75:1 on Foam. Both fail WCAG AA. Use Foam on dark, Abyss Navy on light. Tide Teal remains valid for **non-text** use: data lines, borders, icons, focus rings, and tracked uppercase eyebrows at 12px+.
3. **`SKILL.md` line 40** — mirror the corrected wording.
4. **`AtlanDesignTokens.swift`** — the `atlEyebrow()` modifier currently applies Tide Teal at 12pt. Eyebrows are uppercase, bold, and tracked, so this is a defensible non-body exception — but document it explicitly in the token file so it reads as a decision rather than an oversight.

---

# 🟠 HIGH — iOS build blockers

## C-05 — Wet Mode touch zones cannot fit an iPhone as specified

**What's wrong.** The spec gives **320 × 360 px** swipe zones *and* says each occupies **one quarter of the screen**. Two 320pt-wide zones side by side require 640pt of width. An iPhone 17 is **393pt** wide. The two statements cannot both be true on any iPhone ever made.

**Where.**
- `figures/fig-05-wet-mode.html` — "Touch targets / 320 × 360 px swipe zones" and "Each swipe surface is one-quarter of the viewport"
- `sections-solution-outcomes-honesty.jsx` line **38**: `<Spec n="320 × 360" l="Min touch zone" note="≈25× WCAG 2.2 AA minimum" />`
- Same file line **301**: *"predicted from the 320 × 360 px touch-zone floor"*
- `condensed-system-evidence.jsx` → `EvidencePlan`: *"Documented Wet Mode touch-zone dimensions (320×360px)"*

**Why it matters.** This is the flagship feature. An engineer building from the spec hits the contradiction in the first hour and has to guess. The *property* the spec is protecting — gross-motor targets, not finger precision — is sound and worth keeping exactly as is.

**Fix.** Keep the property, restate the number for the platform. On a 393 × 852 pt device, each zone is **≈196 × 400 pt**, which is:

- **40.5×** the Apple HIG minimum target area (44 × 44 pt)
- **136×** the WCAG 2.2 AA minimum target area (24 × 24 px)

Both are *larger* multiples than the current claim, so the argument gets stronger, not weaker.

**Documents to edit:**
1. `figures/fig-05-wet-mode.html` — replace the dimension with: **"≈196 × 400 pt per zone — one quarter of the viewport."** Keep "one quarter of the viewport" as the primary statement, since it's the resolution-independent truth.
2. `sections-solution-outcomes-honesty.jsx` line 38 — update the `Spec` component's `n` and `note`.
3. Line 301 — update the hypothesis text to match.
4. `condensed-system-evidence.jsx` — update the evidence bullet.
5. Already correct in `ATLAN_iOS_DESIGN_SPEC.md` §5.4 and `AtlanDesignTokens.swift` (`AtlanLayout.wetZoneFraction`).

---

## C-06 — "≈25× the WCAG 2.2 AA minimum" does not reproduce by any method

**What's wrong.** The Wet Mode spec grid annotates the touch zone as *"≈25× WCAG 2.2 AA minimum."* Against the WCAG 2.2 AA target-size minimum of 24 × 24 px, the actual multiple is **200× by area** or **13.3× by linear dimension**. Neither is 25.

**Where.** `sections-solution-outcomes-honesty.jsx` line 38, the `note` prop. Repeated in `figures/fig-05-wet-mode.html`: *"roughly 25× the WCAG 2.2 AA minimum of 24×24 px."*

**Why it matters.** It is a second unverifiable number sitting next to the first one (C-05) on the same figure. Two soft numbers in one panel invites a reviewer to check the third.

**Fix.** State the comparison method explicitly — that's what makes it checkable:

> **"≈136× the WCAG 2.2 AA minimum target *area* (24 × 24 px); ≈40× the Apple HIG minimum (44 × 44 pt)."**

Apply to `figures/fig-05-wet-mode.html` and `sections-solution-outcomes-honesty.jsx` line 38. Resolve together with C-05 in one pass.

---

## C-07 — Abyss Deep `#061a26` is used everywhere but tokenized nowhere

**What's wrong.** `#061a26` is the Wet Mode canvas and carries the product's headline 16.25:1 accessibility claim. It does not exist in `colors_and_type.css`, the brand kit palette, or the component reference. It appears only as a raw hex inside case-study prose.

**Where.**
- **Used in:** `sections-solution-outcomes-honesty.jsx` (Tile 01, `#0B2A3C · #ECF7F8 · #061a26`); `figures/fig-05-wet-mode.html`
- **Missing from:** `colors_and_type.css` (the `:root` block, lines 34–47); `Atlan_Brand_Kit_v2.0.md` §3.2 Color Palette; `COMPONENT_QUICK_REFERENCE.md` §Key Variables

**Why it matters.** An undocumented color that carries a published claim will drift. Someone will use `--bg-1` for Wet Mode because it's the only dark token that exists, and the 16:1 claim silently becomes 13.6:1 with no visible failure.

**Fix.**
1. **`colors_and_type.css`** — add to the Extended block after line 44:
   ```css
   --color-abyss-deep: #061a26;  /* Wet Mode canvas — 16.3:1 with Foam */
   ```
   and a semantic alias: `--bg-0: var(--color-abyss-deep);`
2. **`Atlan_Brand_Kit_v2.0.md` §3.2** — add the row, scoped: *"Abyss Deep · `#061a26` · Wet Mode / high-glare surfaces only. Not a general background."*
3. **`README.md`** §Color — add to the palette table with the same scoping note.
4. **`COMPONENT_QUICK_REFERENCE.md`** §Key Variables — add the line.
5. **`AtlanDesignTokens.swift`** — already present as `atlAbyssDeep`, with the provenance noted in a comment.

---

## C-08 — No iOS app icon exists, and the logo rules forbid producing one

**What's wrong.** iOS requires a **1024 × 1024, fully opaque, square, no-transparency** app icon that gets system-masked to a rounded rectangle. Every asset in `assets/` is a transparent-background horizontal wordmark. The brand kit forbids cropping, recoloring, or applying effects to the logo — which is exactly what producing an app icon requires.

**Where.**
- `Atlan Design System/assets/` — contains `atlan_logo.png` (transparent, horizontal), `atlan_logo_bk.{png,svg}` (black mark), `brand_colors.png`. No square mark, no icon.
- `Atlan_Brand_Kit_v2.0.md` §3.1 Logo Standards — the prohibition
- `README.md` line 302 — already flags a related gap: *"**Missing:** white / Foam-tinted variant of the wordmark for use on Coral fills."*

**Why it matters.** Hard ship blocker. You cannot submit to the App Store without it, and it is the single most-seen brand asset the product will ever have — on the home screen, every day, at 60pt.

**Fix.** This needs a design decision from you as brand owner, then a new asset and a new rule.

**Recommended:** extract the **wave glyph** from the primary mark as a standalone square icon — Tide Teal wave on an Abyss Navy field, centered with generous margin for the system mask. The wordmark is unreadable at 60pt anyway; the wave is the memorable element and it survives the crop.

**Documents to create / edit:**
1. **New assets** in `Atlan Design System/assets/`:
   - `atlan_icon_1024.png` — App Store icon, opaque, square
   - `atlan_icon.svg` — vector source
   - `atlan_wordmark_foam.svg` — the Foam-tinted wordmark README line 302 already flags as missing (needed for Coral fills, launch screen, and watchOS)
2. **`Atlan_Brand_Kit_v2.0.md` §3.1** — add an **"App icon"** subsection stating that the square wave-glyph lockup is a **sanctioned derivative**, the only one, with fixed proportions. Without this, the icon violates your own governance.
3. **`README.md`** — update the Missing note once both assets land.

---

## C-09 — Lato and Roboto Mono are not bundled

**What's wrong.** Two of the four brand families load from Google Fonts at runtime. An iOS app cannot do that — fonts must ship in the bundle and be registered in `Info.plist`.

**Where.**
- `colors_and_type.css` line **32**: `@import url('https://fonts.googleapis.com/css2?family=Lato...&family=Roboto+Mono...')`
- `README.md` lines **306–310** — already documents this honestly: *"If you want Lato and Roboto Mono self-hosted too, drop the licensed .woff2 / .ttf files into fonts/ and I'll wire them up the same way."*
- `Atlan Design System/fonts/` currently holds only Outfit and Montserrat (Roman + Italic)

**Why it matters.** Body text and every metric in the app depend on these two. Without them the app silently falls back to system fonts, and Roboto Mono's tabular numerics — which the entire data-display system assumes — are lost.

**Fix.**
1. Download **Lato** (300/400/700) and **Roboto Mono** (400/500) — both SIL Open Font License, no licensing obstacle.
2. Place `.ttf` files in `Atlan Design System/fonts/`.
3. **`colors_and_type.css`** — replace the line-32 `@import` with `@font-face` blocks matching the existing Outfit/Montserrat pattern (lines 6–29).
4. **`README.md` lines 306–310** — update the font note to say all four are self-hosted.
5. **iOS:** add all four to the Xcode target and `UIAppFonts` in `Info.plist`. Register variable-weight axes for Outfit and Montserrat.

---

# 🟡 MEDIUM — internal contradictions

## C-10 — The onboarding voice ratio is inverted between two documents

**What's wrong.** The same surface is labeled **55% Sage / 45% Hero** in the deep dive and **55% Hero / 45% Sage** in the figure. Both then say *"the only surface where Hero leads"* — which is only true of the figure's version.

**Where.**
- `sections-solution-outcomes-honesty.jsx` line **120**: `<strong>55% Sage</strong> · 45% Hero`
- Same file line **166**: `<VoiceRow surface="Onboarding Welcome" sage={55} hero={45} ... />`
- `figures/fig-07-onboarding.html`: *"Voice ratio — 55 % Hero · 45 % Sage — The only surface where Hero leads."*

**Evidence.** The deep dive is self-contradicting *within a single section*: line 128 of the same file reads *"This is the only surface where **Hero leads**, briefly"* while the ratio bar three lines above renders Sage at 55%.

**Why it matters.** The voice ratio map is presented as a rigorous system with five documented surfaces. An inversion on one of the five undermines the premise that the ratios were designed rather than assigned after the fact.

**Fix.** The prose is consistent across both documents — **Hero leads** — so the figure is right and the deep-dive numbers are wrong.
1. `sections-solution-outcomes-honesty.jsx` line 120 → `<strong>55% Hero</strong> · 45% Sage`
2. Line 119 — the `ratio-bar` renders `ratio-sage` at 55%; swap to render Hero at 55%
3. Line 166 → `<VoiceRow surface="Onboarding Welcome" sage={45} hero={55} ... />`
4. `ATLAN_iOS_DESIGN_SPEC.md` §5.6 — currently records 55/45 Sage/Hero from the deep dive; update once you confirm the direction.

**Note:** `figures/fig-07-onboarding.html` also cites **Sage 70 / Hero 30** for the Grit Calibration block. That's a different sub-surface and is probably correct — but state it explicitly in the voice map so it doesn't read as a third contradictory number.

---

## C-11 — The persona has two different names and ages inside one figure

**What's wrong.** The persona card header reads **"Sofía · 41 · Chief of Staff · Heredia / San José commute."** The photo caption in the same figure reads **"The Optimizer · Carlos Mendoza · 38."**

**Where.** `figures/fig-02-persona.html` — header block vs. image caption.

**Why it matters.** The persona is the foundation of every downstream decision, and the deep dive is careful to disclose it as a synthesis with the anchor name framed as *"a vividness device, not a real individual."* Two anchor names reads as an unfinished edit, and it lands in the section where the case study is explicitly asking to be trusted on research rigor.

**Fix.**
1. Pick one identity and apply it consistently. **Sofía · 41 · Chief of Staff** is the better choice — the demographic band is 30–50, "Chief of Staff" matches the stated "high meeting density," and the Heredia / San José commute grounds the bilingual Costa Rican context the brand kit calls for.
2. Update the photo caption in `figures/fig-02-persona.html`.
3. Grep the whole case-study source for `Carlos` and `Mendoza` to catch other instances.
4. Confirm the disclosure footer still reads correctly with the chosen name.

---

## C-12 — The voice "ceiling" of 90/10 is exceeded by the 95/5 surface

**What's wrong.** §04 states the voice ceiling is **Sage 90 / Hero 10**. The very next pillar in the same section runs **Sage 95 / Hero 5**. A ceiling that a documented surface exceeds is not a ceiling.

**Where.**
- `sections-solution-outcomes-honesty.jsx`, `SolutionSection` deck: *"The voice ceiling is **Sage 90 / Hero 10, no Ruler** — a peak, not a flat ratio."*
- Same file, Pillar 02: *"**95% Sage** · 5% Hero"*, described as *"The strongest Sage surface in the product."*
- Also in tension with `Atlan Design System/README.md` line 71, which sets the brand baseline at **Sage 70 / Hero 30** and adds *"a whisper of **Ruler** (~10% of the time)"* — while the case study says **no Ruler**.

**Why it matters.** Three documents give three different governing ratios, and the word "ceiling" is used for a value that isn't the maximum. This is the kind of thing an interviewer picks at, because the voice system is presented as one of the study's strongest artifacts.

**Fix.** Restate as a **baseline plus documented range**, which is what the data actually shows:

> **Baseline:** Sage 70 / Hero 30 across the product.
> **Documented range:** Sage 45 → 95, per surface, each with a stated reason.
> **Peak Sage:** the "Why" modal at 95/5 — no motivational copy at all.
> **Peak Hero:** the onboarding Welcome at 45/55 — the first warmth signal a new user receives.
> **Ruler** appears only in protocol and mandate copy, ~10% of instances.

**Documents to edit:**
1. `sections-solution-outcomes-honesty.jsx` — `SolutionSection` deck paragraph
2. `Atlan Design System/README.md` §Voice character (line 71) — align the baseline wording
3. `Atlan_Brand_Kit_v2.0.md` §4.1 Voice Character — same
4. Resolve C-10 first, since it changes the peak-Hero number

---

## C-13 — "6 elements / 4 Why affordances" has no stated counting rule

**What's wrong.** The headline metric of the entire study — *21 → 6 elements, 0 → 4 "Why" affordances* — cannot be reproduced from the figure it describes. The "After" panel renders a session card, a weekly arc, and three metric chips. Depending on whether you count the Start button, the arc, and the card as separate interactive surfaces, you get 5, 6, or 7 — and either 4 or 5 `(i)` affordances.

**Where.**
- `figures/fig-04-before-after.html` — the "After" panel and the summary stat blocks
- Quoted in `sections-solution-outcomes-honesty.jsx` (Fig. 04 caption) and throughout the study

**Why it matters.** Two consequences. In review, it is the most-quoted number in the study and it doesn't tie out. In the iOS build, "6 elements" is supposed to be an enforceable budget — but a budget with no counting rule can't be enforced in code review.

**Fix.** Add an explicit counting rule as a visible footnote on the figure. Suggested:

> **Counted as:** distinct interactive surfaces on the landing view — a card and its primary button count as one; each `(i)` affordance counts within its parent, not separately.
> **After = 6:** today's session card · Start session · weekly arc · Load chip · Consistency chip · Recovery chip.
> **"Why" affordances = 4:** today's session · Load · Consistency · Recovery. *(The weekly arc opens the same modal as the Load chip.)*

**Documents to edit:**
1. `figures/fig-04-before-after.html` — add the footnote; verify the rendered "After" panel matches the enumeration exactly
2. `ATLAN_iOS_DESIGN_SPEC.md` §5.1 — record the rule so the review gate can enforce it
3. Apply the same rule to the "Before = 21" count so both sides use one method

---

## C-14 — A live placeholder link ships in a published portfolio artifact

**What's wrong.** The condensed case study contains an anchor with `href="#"` and visible placeholder text.

**Where.** `condensed-hero.jsx` → `SixtySecondCase`:

```jsx
<strong>Prototype:</strong> a public link is coming soon —
<a href="#">placeholder for the shared prototype URL</a>.
Until then, ask to see it live in an interview.
```

**Why it matters.** A dead link labeled "placeholder" in a hiring artifact reads as unfinished, and it sits in the "60-second case" — the block most likely to be read.

**Fix.** Two options, both better than the current state:
- **Preferred:** publish the PWA and put the real URL in.
- **Otherwise:** delete the anchor entirely and keep only the honest sentence — *"The prototype is available live on request during an interview."* That reads as a deliberate choice rather than an unfinished one.

Also check `condensed-system-evidence.jsx` → `CondensedFooter`, which links to `Atlan Case Study - Deep Dive.html` and `Atlan Deck.html` as **relative paths**. Those resolve only if all three files sit in the same directory. Confirm they do wherever you host, or make them absolute.

---

## C-15 — Token name mismatch: `--touch-min` vs `--touch-target-min`

**What's wrong.** Two design-system documents define the same concept under two different variable names. Code written against one silently produces no min-height when compiled with the other.

**Where.**
- `colors_and_type.css` line **141**: `--touch-min: 48px;`
- `uploads/atlan_css_variables_&_design_system.md` line **143**: `--touch-target-min: 48px;` — and used at lines 292 and 455
- `uploads/COMPONENT_QUICK_REFERENCE.md` line **253**: documents `var(--touch-target-min)`

**Why it matters.** Silent failure. An undefined CSS custom property doesn't error — `min-height: var(--touch-min)` in a file that defines `--touch-target-min` just produces no min-height, and every button quietly drops below the 48px floor with nothing to catch it.

**Fix.** Standardize on **`--touch-target-min`** — it's the more descriptive name and it's used in two of the three documents.
1. `colors_and_type.css` line 141 — rename, and add `--touch-min: var(--touch-target-min);` as a deprecated alias for one release.
2. Grep `ui_kits/web/styles.css` for both names and normalize.
3. `README.md` line 219 — reference the token by name alongside the 48×48 statement.

---

## C-16 — Theming class contradiction: `.dark-mode` vs `.light`

**What's wrong.** One document says light is the default and you opt into dark. The other says dark is the default and you opt into light. They describe opposite architectures.

**Where.**
- `uploads/COMPONENT_QUICK_REFERENCE.md` line **243**: *"Add `.dark-mode` class to `<body>` element to activate dark theme."* → implies **light is default**
- `colors_and_type.css` lines **59, 150**: `:root` is dark; `.light` opts out → **dark is default**
- `README.md` line 132 and `SKILL.md` line 23 both state dark is default — *"the ocean is the home"*

**Why it matters.** The quick reference is the document an implementer (or an AI agent following `SKILL.md`) is most likely to skim. Following it produces a light-mode-default app, inverting the brand's most distinctive visual decision.

**Fix.** `colors_and_type.css` is the source of truth; correct the quick reference.
1. `uploads/COMPONENT_QUICK_REFERENCE.md` §Dark Mode (lines 241–245) — rewrite:
   > **Dark mode is the default.** `:root` ships the dark palette. Add `.light` to `<body>` for light surfaces — print, PDF export, training-plan bodies. There is no `.dark-mode` class.
2. Grep `uploads/atlan_css_variables_&_design_system.md` for `.dark-mode` and remove or realign it.
3. `AtlanDesignTokens.swift` — already dark-only by construction; the action plan locks `.preferredColorScheme(.dark)`.

---

## C-17 — Three component values contradict between documents

Three small mismatches, same fix pattern: the quick reference disagrees with the authoritative source. Fix in one pass.

### C-17a — `.glass-strong` blur: 16px or 24px?

| Document | Value |
|---|---|
| `README.md` line 181 | `--glass-bg-strong` 85% + `--blur-xl` **(24px)** |
| `README.md` line 218 | Nav is glass-strong, **24px blur** |
| `colors_and_type.css` line 138 | `--blur-xl: blur(24px)` |
| `COMPONENT_QUICK_REFERENCE.md` line 182 | `.glass-strong` — **16px** ❌ |

**Fix:** `COMPONENT_QUICK_REFERENCE.md` line 182 → **24px**. Three sources agree against it.

### C-17b — Card radius: 8px or 16px?

| Document | Value |
|---|---|
| `README.md` line 154 | *"Cards are usually `lg` (16px)"* |
| `README.md` line 227 | Card anatomy — `--radius-lg` **(16px)** |
| `Atlan_Brand_Kit_v2.0.md` line 781 | `.card { border-radius: 8px; }` ❌ |

The brand kit's Dark Mode Card snippet also uses `box-shadow: 0 4px 6px -1px rgba(14,138,154,0.15)`, which doesn't match `--shadow-md` (`0 4px 12px rgba(0,0,0,0.12)`) in `colors_and_type.css`.

**Fix:** `Atlan_Brand_Kit_v2.0.md` §5.3 lines ~775–785 — update the card snippet to `border-radius: var(--radius-lg)` and `box-shadow: var(--shadow-md)`, and add the inset glass-lip highlight the README specifies. Better still, replace the hard-coded snippet with a reference to `colors_and_type.css` so it can't drift again.

### C-17c — Unicode arrows in CTAs vs. the "no unicode" rule

| Document | Statement |
|---|---|
| `SKILL.md` line 26 | *"No emoji. **No unicode arrows or stars.** Phosphor icons only."* |
| `README.md` line 113 | *"Unicode chars are used as icons **never** — Phosphor only."* |
| Case study CTAs | `"Start session →"`, `"Resume plan →"`, `"View the deck →"`, `"Read the full deep-dive study →"` ❌ |

**Fix:** Two acceptable resolutions — pick one and apply consistently.
- **Preferred:** replace the literal `→` with a Phosphor `ArrowRight` / `CaretRight` glyph in all CTA components. On iOS this is also the accessible choice: VoiceOver reads "Start session" and treats the glyph as decorative, instead of announcing "Start session right arrow."
- **Alternative:** amend the rule to permit `→` in inline CTA text while keeping the prohibition for anything functioning as a standalone icon. Less clean, but honest — and better than a rule the flagship artifact breaks.

`ATLAN_iOS_DESIGN_SPEC.md` already assumes the preferred option.

---

# ⚪ LOW — housekeeping

## C-18 — Four small items

### C-18a — 48px is described as a WCAG requirement. It isn't.

`Atlan_Brand_Kit_v2.0.md` line **756**: *"Minimum Size: 48px × 48px (WCAG requirement for mobile accessibility)"*, and line **889** lists it in the mandatory-standards table as a WCAG row.

The actual standards: **WCAG 2.2 AA (2.5.8)** is 24 × 24 px. **WCAG 2.2 AAA (2.5.5)** is 44 × 44. **Apple HIG** is 44 × 44 pt. **Material Design** is 48 × 48 dp — which is where 48 comes from.

48 is a good standard and you should keep it. But attributing it to WCAG is a factual error in the document that governs your accessibility claims.

**Fix:** `Atlan_Brand_Kit_v2.0.md` §5.3 and §7.1 →
> **Minimum size:** 48 × 48 px — an Atlan standard exceeding WCAG 2.2 AA (24 × 24 px), WCAG 2.2 AAA (44 × 44 px), and the Apple HIG minimum (44 × 44 pt).

Mirror in `README.md` line 219 and `COMPONENT_QUICK_REFERENCE.md` line 251.

### C-18b — Tide Teal contrast stated as 3.8:1; measured 3.63:1

`README.md` line 134 and `SKILL.md` line 40. The rule is correct either way — both fail AA — but correct the number while fixing C-04.

### C-18c — Spacing units drift between rem and px

`colors_and_type.css` lines 98–104 define spacing in **rem** (`--space-xs: 0.5rem`). `COMPONENT_QUICK_REFERENCE.md` lines 279–285 document the same tokens in **px** (`--space-xs: 8px`). Equivalent at a 16px root, divergent otherwise — and the px values are what a native port reads as points.

**Fix:** `COMPONENT_QUICK_REFERENCE.md` — annotate as *"0.5rem = 8px at the default 16px root."* Also add the missing `--radius-xl: 24px`, which the quick reference omits from Key Variables.

### C-18d — Dead asset repository URL

`README.md` line 40 lists `https://drive.google.com/atlan-brand` as the central asset repository. That is not a resolvable Google Drive URL — Drive folder links use the `/drive/folders/<id>` form.

**Fix:** replace with the real link or mark it explicitly as a placeholder.

---

# Addendum — C-19 … C-22

Added 26 July 2026, from `ATLAN_UPSTREAM_UPDATES.md` Part 3. Two are already resolved in the iOS
working tree and are logged here for the paper trail; two are open. Kept as an addendum rather than
merged into the severity sections above so the C-01 … C-18 numbering and the order-of-work table
stay stable.

| # | Severity | Status |
|---|---|---|
| C-19 | 🟠 High | **Resolved in iOS** · case study updated (CS-01) |
| C-20 | 🟠 High | **Resolved in iOS** · Design System owed (DS-01, DS-02) |
| C-21 | 🟡 Medium | **Open** |
| C-22 | 🟡 Medium | **Partially resolved** — iOS done, Design System owed (DS-03) |

---

## C-19 — Onboarding had no route backward

**What's wrong.** A four-step, non-skippable first-run flow offered no way to return to a previous step.

**Where.**
- `Features/Onboarding/OnboardingView.swift`
- `figures/fig-07-onboarding.html` (case study)

**Evidence.** `advance()` existed; no inverse. An athlete who mis-tapped a language or a calibration answer had to complete the flow and re-enter it from Settings.

**Why it matters.** Language is step 01 and is the one choice the entire rest of the flow renders in. Getting it wrong and being unable to correct it is the worst-case version of this gap.

**Fix.**
1. iOS — **done.** Back caret on steps 02–04, clamped to the flow's entry point (`minStep` · `goBack()` · `backButton` with reserved empty slot).
2. Case study — **done.** See CS-01: fig-07 now shows the caret on steps 02–04, an empty reserved slot on step 01, and a figure note that the control clamps to the entry point.
3. Design System — generalize into a **Stepped flow** entry. See DS-05.

---

## C-20 — "Bilingual" was a product claim with a feature-sized implementation

**What's wrong.** `AtlanLanguage` and `Bilingual` lived inside the Onboarding feature, so no other screen could read the language setting. Settings offered an Español toggle that changed onboarding and nothing else.

**Where.**
- `OnboardingCopy.swift` (before the move)
- `Features/Settings/SettingsView.swift` language section

**Evidence.** A grep for `AtlanLanguage` returned five files, four of which were onboarding or storage. Switching to Español left Today, Plan, History, Wet Mode, and Settings itself entirely in English.

**Why it matters.** The control was honest only because a caption under it admitted the limitation. A settings toggle that appears global and is not is a trust cost, and this product's whole positioning is that the dashboard does not lie. Same overclaim family as C-02.

**Fix.**
1. iOS — **done.** Types moved to `AtlanCore`, threaded through all ten surfaces. 176 authored pairs across 11 files (39 pre-existing in onboarding, 137 new); 12 files threading `AtlanLanguage`.
2. Design System — a **Language** section and the chrome/authored-content boundary table. See DS-01, DS-02.
3. Case study — **done.** §04 now claims "bilingual app chrome"; the boundary is stated in §06 Honesty. See CS-02. "Fully bilingual" appears nowhere.

---

## C-21 — No text-expansion allowance in the type spec

**What's wrong.** The typography spec sizes uppercase labels against English strings only. Spanish runs 15–30% longer and the system's tightest containers are its uppercase eyebrow labels.

**Where.**
- `Atlan_Performance_Style_Guide_v1.0.md` typography section
- `colors_and_type.css` type roles

**Evidence.** RECOVERY (8 glyphs) → RECUPERACIÓN (12) inside a ~77pt metric chip. "Skip rest" → "Saltar descanso" inside a half-width Wet Mode zone. "Advance when the clock runs out" → "Avanzar cuando el reloj llega a cero" wraps a second line.

**Why it matters.** Every one of these currently survives on `minimumScaleFactor`, i.e. on shrinking type in a system that specifies exact sizes. That is a silent, undocumented deviation from the type scale on the Spanish path.

**Fix.** Generalize the Wet Mode shrink-never-truncate rule, with documented floors, to all constrained labels — sized against the longer of the two languages. See DS-04. `atlan-audit` cannot check this today; a future check could assert every `Bilingual` pair's ES string fits the same container as its EN string.

**Note for the case study.** Parity rule 03 in `figures/fig-07-onboarding.html` currently reads "Long ES strings flow to two lines; they do not shrink." That is the opposite of the DS-04 rule and should be reconciled once DS-04 is written.

---

## C-22 — Formatting locale was unspecified

**What's wrong.** The system specifies that distances never region-convert but says nothing about dates, times, or numbers — so date formatting silently inherited the device region.

**Where.**
- `colors_and_type.css` README notes
- `TrainingModels.swift` (`atlanFormatted`)

**Evidence.** Weekday and month names rendered in the device language regardless of the athlete's choice, on a screen whose greeting was in Spanish.

**Why it matters.** Same failure family as the "3,281 ft" swim already logged: the device's opinion overriding the athlete's explicit choice.

**Fix.**
1. iOS — **done.** `AtlanLanguage.locale` drives date formatting at seven sites; units stay `en_US_POSIX` deliberately.
2. Design System — state the parent principle: *the athlete's explicit choice governs formatting; the device's region never does.* See DS-03.

---

# Suggested order of work

| Session | Conflicts | Rationale |
|---|---|---|
| **1 — Accessibility truth pass** (½ day) | C-01, C-02, C-03, C-04, C-18b | All contrast-related, all touch the same numbers. Fix the button first — it's the only one that's an actual failure rather than a mis-statement. Re-run a full palette audit at the end and paste the results into the case study as the method note. |
| **2 — Wet Mode figure pass** (2 hrs) | C-05, C-06, C-07 | One figure, one set of numbers, one re-export. C-07 unblocks the iOS token layer. |
| **3 — Case-study consistency pass** (½ day) | C-10, C-11, C-12, C-13, C-14 | All in the case-study source. Do them together and re-export both bundles once. |
| **4 — Design-system hygiene** (½ day) | C-15, C-16, C-17, C-18a/c/d | Mechanical. Mostly `COMPONENT_QUICK_REFERENCE.md` catching up to `colors_and_type.css`. |
| **5 — Asset production** (needs your decision) | C-08, C-09 | The app icon needs a brand-owner call before anyone can draw it. Font bundling is independent and can start immediately. |

**Blocking the iOS build:** C-07 (token), C-08 (icon), C-09 (fonts). Everything else can proceed in parallel.

**Blocking the next time you show the case study:** C-01, C-02, C-03, C-10, C-11, C-14.

---

## Appendix — Verified contrast reference

All values computed from the locked brand hexes using the WCAG 2.x relative-luminance formula. Use this table as the authoritative source when correcting the documents above.

| Foreground | Background | Ratio | AA normal (4.5) | AA large (3.0) | AAA (7.0) |
|---|---|---|---|---|---|
| Foam `#ECF7F8` | Abyss Deep `#061a26` | **16.25:1** | ✅ | ✅ | ✅ |
| Foam `#ECF7F8` | Abyss Navy `#0B2A3C` | **13.63:1** | ✅ | ✅ | ✅ |
| Abyss Navy `#0B2A3C` | Foam `#ECF7F8` | **13.63:1** | ✅ | ✅ | ✅ |
| Foam `#ECF7F8` | Abyss Light `#0F3A50` | **11.04:1** | ✅ | ✅ | ✅ |
| Foam `#ECF7F8` | Teal Dark `#0A6B78` | **5.68:1** | ✅ | ✅ | ❌ |
| Abyss Navy `#0B2A3C` | Coral Spark `#FF6A3D` | **5.23:1** | ✅ | ✅ | ❌ |
| Coral Spark `#FF6A3D` | Abyss Navy `#0B2A3C` | **5.23:1** | ✅ | ✅ | ❌ |
| White `#FFFFFF` | Teal Dark `#0A6B78` | **6.20:1** | ✅ | ✅ | ❌ |
| White `#FFFFFF` | Tide Teal `#0E8A9A` | **4.10:1** | ❌ | ✅ | ❌ |
| Coral Dark `#E0552D` | Abyss Navy `#0B2A3C` | **3.90:1** | ❌ | ✅ | ❌ |
| White `#FFFFFF` | Coral Dark `#E0552D` | **3.81:1** | ❌ | ✅ | ❌ |
| Tide Teal `#0E8A9A` | Foam `#ECF7F8` | **3.75:1** | ❌ | ✅ | ❌ |
| Foam `#ECF7F8` | Tide Teal `#0E8A9A` | **3.75:1** | ❌ | ✅ | ❌ |
| Tide Teal `#0E8A9A` | Abyss Navy `#0B2A3C` | **3.63:1** | ❌ | ✅ | ❌ |
| White `#FFFFFF` | Coral Spark `#FF6A3D` | **2.85:1** | ❌ | ❌ | ❌ |
| Coral Spark `#FF6A3D` | Foam `#ECF7F8` | **2.60:1** | ❌ | ❌ | ❌ |
| Teal Dark `#0A6B78` | Abyss Navy `#0B2A3C` | **2.40:1** | ❌ | ❌ | ❌ |

**Reading the table:** anything below 4.5:1 is non-text or large-text only. Coral Spark on Foam (2.60:1) means the `.text-spark` utility is unsafe on light surfaces — worth a note in the component reference alongside the C-04 fix.
