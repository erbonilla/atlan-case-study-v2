# Atlan Performance — Upstream Updates

**Prepared for:** Edgar Bonilla
**Date:** 25 July 2026
**Scope:** Changes made in the iOS build that the Design System and the case studies must absorb to stay in sync with what ships
**Related:** `ATLAN_iOS_DESIGN_SPEC.md` · `ATLAN_CONFLICTS_TO_RESOLVE.md` · `Atlan Design System/README.md`

---

## What this document is

The iOS build moved ahead of its source documents in two areas this pass. This is
the list of what changed, why, and **which upstream file has to be edited** so the
Design System and the case studies do not describe a product that no longer exists.

It follows the conventions already in use: Design System items are `DS-##`, case
study items are `CS-##`, and newly discovered contradictions are numbered
continuing from `ATLAN_CONFLICTS_TO_RESOLVE.md`, which ends at C-18.

### Scope boundary

| Covered | Not covered |
|---|---|
| Onboarding back navigation | Prior uncommitted work in the tree (Wet Mode state machine, tab bar, Phosphor vendoring, fonts) — those have their own history |
| App-wide bilingual chrome | The `Strings.xcstrings` migration, which is still not started |
| Competitive research sourcing | Anything requiring a brand-owner decision (C-08 app icon) |

---

## Summary

| # | Change | Upstream file to edit | Severity |
|---|---|---|---|
| **DS-01** | Bilingual copy is a system rule, not a feature detail | `Atlan Design System/README.md` | 🟠 High |
| **DS-02** | Chrome follows the language toggle; authored content does not | `README.md` + `SKILL.md` | 🟠 High |
| **DS-03** | Formatting authority: dates follow language, units never do | `colors_and_type.css` README notes | 🟡 Medium |
| **DS-04** | Type/layout needs a Spanish text-expansion allowance | `Atlan_Performance_Style_Guide_v1.0.md` | 🟡 Medium |
| **DS-05** | Stepped flows require a back affordance in a reserved slot | `COMPONENT_QUICK_REFERENCE.md` | 🟡 Medium |
| **CS-01** | Onboarding figure shows a flow with no way back | `figures/fig-07-onboarding.html` | 🟠 High |
| **CS-02** | The "bilingual" claim can be upgraded — but must be bounded | `sections-solution-outcomes-honesty.jsx` | 🔴 Blocker if left vague |
| **CS-03** | Competitive claims now have a sourced evidence base | `figures/fig-01-competitive.html` | ⚪ Low |
| **CS-04** | Screenshots showing the old Settings caption are stale | Case study image assets | ⚪ Low |
| **C-19 … C-22** | Four new conflicts found while building | `ATLAN_CONFLICTS_TO_RESOLVE.md` | see below |

---

# Part 1 — Design System updates

## DS-01 · Bilingual copy is a system rule, not a feature detail

**What changed.** `AtlanLanguage` and `Bilingual` moved out of the Onboarding
feature and into `AtlanCore` (`Packages/AtlanCore/Sources/AtlanCore/Localization.swift`).
They are now foundation types that every surface depends on, at the same level as
the color and type tokens.

**Why it matters upstream.** The Design System currently has **no localization
section at all**. It documents color, type, spacing, motion, glass, and icons —
and says nothing about the fact that this product ships in two languages. That
omission is why the language setting was built as an onboarding-only feature in
the first place: nothing in the system said it was a system concern.

**The rule to add**, stated as the code enforces it:

> **A string exists in both languages or not at all.**
> Copy is authored as a pair, never as a base plus a translation. `Bilingual("…", "…")`
> takes both at the constructor — there is no way to supply one and defer the other.

And the authorship principle already written in `OnboardingCopy.swift`, which
deserves to be brand-level rather than buried in a feature file:

> "Spanish is not a translation of English. It's the same product, built twice."
>
> EN — "Built for athletes with lives."
> ES — "Hecho para quienes entrenan entre todo lo demás."
>
> A literal rendering — *"Hecho para atletas con vidas"* — is grammatical and
> wrong. It loses the beat.

**Where to add it:** a new **Language** section in `Atlan Design System/README.md`,
adjacent to CONTENT FUNDAMENTALS, plus a line in `SKILL.md`'s Don'ts:
*don't author an English string without its Spanish pair.*

---

## DS-02 · Chrome follows the language toggle; authored content does not

**What changed.** Every piece of app chrome across all ten surfaces now reads from
the athlete's language choice. Coach-authored content does not, and deliberately
so. The boundary is now explicit in code and needs to be explicit in the system.

| Follows the language toggle | Stays as authored |
|---|---|
| Buttons, headers, eyebrows, section titles | Session titles ("Threshold · ~30 min") |
| State words (Completed · Skipped · Swapped · In progress) | Block prescriptions ("4 × 100m at threshold") |
| Discipline, intensity, and block-kind names | Coach message subjects and bodies |
| Empty states, settings captions, toggle details | `WhyEntry` mechanism, prescription, and citation text |
| Accessibility labels, hints, and values | |

**Why it matters upstream.** This is a **content-model rule**, not an
implementation detail. It determines what a coach has to write twice and what they
never do — and right now nothing tells them. A coach reading the current system
docs would reasonably assume writing a session in Spanish is either required or
pointless; neither is correct.

It also protects the honesty position the brand has already committed to. Claiming
"the app is bilingual" without this boundary is the same species of overclaim as
the 11.8:1 contrast figure in C-02: true enough to say out loud, wrong under
inspection.

**Where to add it:** `README.md` CONTENT FUNDAMENTALS, as a table. `SKILL.md`
should carry the one-line version so generated prototypes inherit it.

---

## DS-03 · Formatting authority — dates follow language, units never do

**What changed.** `AtlanLanguage` gained a `locale` property (`en_US` / `es_ES`)
used at seven date-formatting sites. Distances did **not** change: `atlanFormatted`
stays pinned to `en_US_POSIX`.

This looks inconsistent and is not. The governing principle is one level up:

> **The athlete's explicit choice governs formatting. The device's region never does.**
>
> - **Dates** are language-bound — a Spanish-speaking athlete reads *"sábado, 25 jul"*.
> - **Distances** are language-*invariant* — a pool is marked in metres in every
>   country and a pace clock reads the same in both languages.
> - **Neither** consults `Locale.current`. That is an IP address's opinion, not the athlete's.

The existing rule "distances never region-convert" (the 1,000 m swim that rendered
as "3,281 ft") is a *consequence* of this principle, not a standalone quirk — and
so is `AtlanLanguage` having no `.system` case. Naming the parent principle makes
both derivable instead of memorized.

**Where to add it:** the notes accompanying `colors_and_type.css` in
`README.md`, under a **Formatting** heading.

---

## DS-04 · Type and layout need a Spanish text-expansion allowance

**What changed.** Nothing in the token layer — this is a gap the bilingual work
exposed and did not close.

Spanish runs roughly 15–30% longer than English for the same content, and it lands
hardest exactly where this design system is tightest: **uppercase eyebrow labels in
constrained widths.**

| Surface | EN | ES | Pressure |
|---|---|---|---|
| Metric chip | CONSISTENCY (11) | CONSTANCIA (10) | survives |
| Metric chip | RECOVERY (8) | RECUPERACIÓN (12) | **+50% in a ~77pt chip** |
| Wet Mode zone | Skip rest | Saltar descanso | **+64% in a half-width zone** |
| Settings toggle | Advance when the clock runs out | Avanzar cuando el reloj llega a cero | wraps a second line |

The Wet Mode headline already has the correct rule — *shrink, never truncate*, with
a documented floor (144pt → 72pt). That rule is currently written as if it were
specific to the countdown. It is not; it is the general answer to text expansion
and should be stated once, generally:

> **Any label in a constrained container shrinks before it truncates, and carries a
> documented floor.** Uppercase labels in fixed-width containers must be sized
> against the longer of the two languages, not the English.

**Where to add it:** `Atlan_Performance_Style_Guide_v1.0.md`, typography section.
`atlan-audit` cannot check this today; a future check could assert that every
`Bilingual` pair's ES string fits the same container as its EN string.

---

## DS-05 · Stepped flows require a back affordance in a reserved slot

**What changed.** Onboarding gained back navigation. The implementation carries
three rules worth generalizing into a component spec:

1. **A back control on every step after the first.** Sourced from competitive
   research — Tonal, Equinox+, pliability, Apple Fitness, and Gentler Streak all
   place one, and it is the one near-universal pattern in the category that is not
   tied to gamification.
2. **Clamped to the flow's entry point, not to step zero.** Settings →
   "Re-run calibration" opens the same component at the Calibration step; back
   stops there rather than walking the athlete into Welcome or Language, which
   belong to first run only. A re-entered flow's floor is where it was entered.
3. **The slot is reserved even when empty.** A 48pt `Color.clear` holds the
   position on step one, so the progress marks do not shift left on the one screen
   that has nothing to go back to.

Rule 3 is the non-obvious one and the reason to write this down: the naive
implementation moves the progress indicator between steps, which reads as a layout
bug in an otherwise precise system.

**Where to add it:** `COMPONENT_QUICK_REFERENCE.md`, as a **Stepped flow** entry.

---

# Part 2 — Case study updates

## CS-01 · The onboarding figure shows a flow with no way back 🟠

**Where:** `figures/fig-07-onboarding.html` (and the four-step sequence in §04 Solution).

**What's wrong.** The figure renders four steps with a progress indicator and no
back control. That matched the build until this pass; it no longer does. Left
as-is, the case study's own prototype demonstrates a usability gap the shipped app
has fixed — and a reviewer who tries the figure finds a dead end.

**Fix.** Add the back caret to steps 02–04 in the figure, left of the progress
marks, with the empty reserved slot on step 01. Note in the figure caption that the
control is clamped to the flow's entry point, since that is the part a static
prototype cannot demonstrate.

---

## CS-02 · The bilingual claim can be upgraded — but must be bounded 🔴

**Where:** `sections-solution-outcomes-honesty.jsx` (§04 Solution, §06 Honesty).

**What's wrong now.** The case study describes bilingual authorship as an
onboarding property. That is now an *understatement* — chrome across all ten
surfaces is bilingual, 137 newly authored pairs on top of the 39 in onboarding.

**Why this is a blocker rather than a nice update.** The tempting sentence is "Atlan
is fully bilingual." That sentence is false, and falsifiable in about four seconds
by anyone who switches to Español and opens a coach message. The correct claim is
narrower and stronger:

> **Every word the app says is bilingual. Every word the coach says is theirs.**
> App chrome — 176 authored EN/ES pairs across ten surfaces — follows the athlete's
> language choice. Coach messages and session prescriptions stay in the language
> they were written in, because a training prescription is not chrome and
> machine-translating one would be a safety claim the product has not earned.

That framing belongs in **§06 Honesty**, not §04 Solution — it is a scope
limitation stated deliberately, which is what that section is for.

**Fix.** Upgrade the §04 claim to "bilingual app chrome," and add the boundary to
§06 alongside the existing open gaps. Do not write "fully bilingual" anywhere.

---

## CS-03 · Competitive claims now have a sourced evidence base ⚪

**Where:** `figures/fig-01-competitive.html`, §01 Problem.

**What changed.** The deep-dive's competitive position — that rings, streaks,
confetti, adherence percentages, and grid calendars are the category default that
Atlan deliberately rejects — was previously asserted. It now has a sourced basis: a
17-app review across Mobbin (Fitbod, Gymshark, Ladder, Oura, Fitbit, Google Fit,
Runna, Equinox+, Future, Tonal, pliability, Apple Fitness, Gentler Streak, Fitplan,
Peloton, Ultrahuman, Withings), organized by the five screen types Atlan's roots
correspond to.

Every category-default pattern the case study claims to reject was confirmed
present in the reference set. Nothing in the review contradicted the product's
positions; the one genuine gap found (CS-01) was unrelated to gamification.

**Why it matters.** `ATLAN_CONFLICTS_TO_RESOLVE.md` exists largely because
unverifiable claims were shipped. This is the opposite case — a claim that was
sound and is now cheap to defend. It should be cited rather than left as
assertion.

**Fix.** Add a sources line to the competitive figure. Optional but recommended:
name the sample size, since "17 apps" is a materially different claim from "we
looked around."

---

## CS-04 · Screenshots showing the old Settings caption are stale ⚪

**Where:** any case study image of the Settings screen.

The caption under the language picker changed, because the old one became untrue:

| | |
|---|---|
| **Before** | "Onboarding is authored in both languages. Session copy follows." |
| **After** | "App text follows this choice. Coach messages and session content stay as written until that's bilingual too." |

The old caption accurately described an onboarding-only implementation and would
now under-describe the app. Re-shoot any screenshot that includes it.

---

# Part 3 — New conflicts (continuing from C-18)

Add these to `ATLAN_CONFLICTS_TO_RESOLVE.md` in its existing five-part format.
Two are already resolved in code and are logged for the paper trail; two are open.

## C-19 — Onboarding had no route backward 🟠 High · **resolved in iOS**

| Part | |
|---|---|
| **What's wrong** | A four-step, non-skippable first-run flow offered no way to return to a previous step. |
| **Where** | `OnboardingView.swift`; `figures/fig-07-onboarding.html` |
| **Evidence** | `advance()` existed; no inverse. An athlete who mis-tapped a language or a calibration answer had to complete the flow and re-enter it from Settings. |
| **Why it matters** | Language is step 01 and is the one choice the entire rest of the flow renders in. Getting it wrong and being unable to correct it is the worst-case version of this gap. |
| **Fix** | iOS: done — back caret on steps 02–04, clamped to entry point. Case study: see CS-01. |

## C-20 — "Bilingual" was a product claim with a feature-sized implementation 🟠 High · **resolved in iOS**

| Part | |
|---|---|
| **What's wrong** | `AtlanLanguage` and `Bilingual` lived inside the Onboarding feature, so no other screen could read the language setting. Settings offered an Español toggle that changed onboarding and nothing else. |
| **Where** | `OnboardingCopy.swift` (before); `SettingsView.swift` language section |
| **Evidence** | A grep for `AtlanLanguage` returned five files, four of which were onboarding or storage. Switching to Español left Today, Plan, History, Wet Mode, and Settings itself entirely in English. |
| **Why it matters** | The control was honest only because a caption under it admitted the limitation. A settings toggle that appears global and is not is a trust cost, and this product's whole positioning is that the dashboard does not lie. |
| **Fix** | iOS: done — types moved to `AtlanCore`, threaded through all ten surfaces. Design System: DS-01, DS-02. |

## C-21 — No text-expansion allowance in the type spec 🟡 Medium · **open**

| Part | |
|---|---|
| **What's wrong** | The typography spec sizes uppercase labels against English strings only. Spanish runs 15–30% longer and the system's tightest containers are its uppercase eyebrow labels. |
| **Where** | `Atlan_Performance_Style_Guide_v1.0.md`; `colors_and_type.css` type roles |
| **Evidence** | RECOVERY (8 glyphs) → RECUPERACIÓN (12) inside a ~77pt metric chip. "Skip rest" → "Saltar descanso" inside a half-width Wet Mode zone. |
| **Why it matters** | Every one of these currently survives on `minimumScaleFactor`, i.e. on shrinking type in a system that specifies exact sizes. That is a silent, undocumented deviation from the type scale on the Spanish path. |
| **Fix** | Generalize the Wet Mode shrink-never-truncate rule with documented floors to all constrained labels. See DS-04. |

## C-22 — Formatting locale was unspecified 🟡 Medium · **partially resolved**

| Part | |
|---|---|
| **What's wrong** | The system specifies that distances never region-convert but says nothing about dates, times, or numbers — so date formatting silently inherited the device region. |
| **Where** | `colors_and_type.css` README notes; `TrainingModels.swift` (`atlanFormatted`) |
| **Evidence** | Weekday and month names rendered in the device language regardless of the athlete's choice, on a screen whose greeting was in Spanish. |
| **Why it matters** | Same failure family as the "3,281 ft" swim already logged: the device's opinion overriding the athlete's explicit choice. |
| **Fix** | iOS: done — `AtlanLanguage.locale` drives date formatting at seven sites; units stay `en_US_POSIX` deliberately. Design System: state the parent principle. See DS-03. |

---

# Part 4 — Code inventory

For whoever maintains the iOS build. Everything below is in the working tree and
compiles; nothing is committed yet.

### New files

| File | Contains |
|---|---|
| `AtlanCore/Sources/AtlanCore/Localization.swift` | `AtlanLanguage` (moved, made public, gained `locale`) · `Bilingual` (moved, made public) |
| `Atlan/DomainCopy.swift` | Bilingual display names for `Discipline`, `Session.Intensity`, `SessionBlock.Kind`, `Session.State.planLabel` — 20 pairs, consolidated so one wrong word cannot be wrong on five screens independently |

### Modified

| File | Change |
|---|---|
| `Features/Onboarding/OnboardingView.swift` | `minStep` · `goBack()` · `backButton` with reserved empty slot |
| `Features/Onboarding/OnboardingCopy.swift` | Type definitions removed; imports `AtlanCore` |
| `RootView.swift` | `language` computed from `@AppStorage`; threaded into four roots, Wet Mode, and the Swapper |
| `Features/Today/TodayView.swift` | 16 pairs · `TodayModel` metrics/greeting/date/arc became language-parameterized |
| `Features/Plan/PlanView.swift` | 2 pairs + shared domain copy; local `planLabel` extension removed |
| `Features/History/HistoryView.swift` | 10 pairs; coach content deliberately untouched |
| `Features/Session/SessionDetailView.swift` | 4 pairs; local `displayName` extensions removed |
| `Features/Session/SessionSummaryView.swift` | 8 pairs |
| `Features/WetMode/WetModeView.swift` | 21 pairs — zones, control panel, exit dialog, accessibility |
| `Features/WhySheet/WhySheetView.swift` | 6 pairs (chrome only; `WhyEntry` content untouched) |
| `Features/SessionSwapper/SessionSwapperView.swift` | 11 pairs including `ProposalReason` explanations |
| `Features/Settings/SettingsView.swift` | 39 pairs + the caption correction in CS-04 |
| `DebugSurfaces.swift` | Call sites updated; debug surfaces pinned to `.english` |

**Totals:** 176 authored pairs across 11 files (39 pre-existing in onboarding, 137
new) · 12 files threading `AtlanLanguage` · 7 locale-aware date sites.

---

# Part 5 — Open risks

Stated plainly, because §06 Honesty is the section this project takes most
seriously.

| Risk | Status |
|---|---|
| **The Spanish has not been reviewed by a native ES copy editor.** The case study already names this as an open gap for 39 onboarding pairs. The surface area is now 176. The authored-pairs *method* is sound; the specific word choices in 137 new pairs are one designer's Spanish and should not be treated as final. | **Open — highest-value next action** |
| **`Bilingual` is a stopgap.** It exists because `Strings.xcstrings` was not wired up and chrome needed to be demonstrable in both languages first. It does not handle pluralization, gender agreement, or per-string translator context — all of which a string catalog gives for free. Migration is still owed. | Open |
| **Only Today was visually verified in Spanish.** Plan, History, Settings, Wet Mode, and the Swapper received the same mechanical treatment and compile, but were not screenshotted — the simulator control tooling cannot attach on this machine (`SimulatorKit.framework` is at `Contents/SharedFrameworks/` under this Xcode 27 install, not the path the tool expects). Worth a manual pass in Xcode. | Open |
| **Text expansion is currently absorbed by `minimumScaleFactor`,** not by design. See C-21. | Open |
| **Onboarding back navigation was not interactively tested** for the same tooling reason. The logic is small and the build is clean, but the caret has not been tapped. | Open |

---

## Recommended order

1. **CS-02** — bound the bilingual claim before the case study is shown again. It is the only item here that can become a public overclaim.
2. **DS-01 / DS-02** — give the system a Language section, so the next feature does not repeat C-20.
3. **Native ES copy review** — 137 pairs, and the cheapest quality win available.
4. **CS-01** — update the onboarding figure.
5. **DS-03 / DS-04 / C-21** — formatting and text-expansion rules.
6. **DS-05, CS-03, CS-04** — housekeeping.
