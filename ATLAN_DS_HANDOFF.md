# Atlan Design System — Handoff Note (DS-01 … DS-05)

**From:** Atlan Case Study project
**To:** `Atlan Design System/` repo
**Date:** 26 July 2026
**Source:** `ATLAN_UPSTREAM_UPDATES.md`, Part 1
**Status:** none of these files live in the case-study project. Everything below is ready to paste
into the named file. Case-study items (CS-01 … CS-04) are already applied here and are not repeated.

| Item | Target file | Section to add / edit |
|---|---|---|
| DS-01 | `README.md` + `SKILL.md` | new **Language** section adjacent to CONTENT FUNDAMENTALS; one Don't |
| DS-02 | `README.md` + `SKILL.md` | CONTENT FUNDAMENTALS → new boundary table |
| DS-03 | `README.md` (`colors_and_type.css` notes) | new **Formatting** heading |
| DS-04 | `Atlan_Performance_Style_Guide_v1.0.md` | typography section |
| DS-05 | `COMPONENT_QUICK_REFERENCE.md` | new **Stepped flow** entry |

---

## DS-01 · Language is a system rule 🟠

**Target:** `Atlan Design System/README.md`, new section adjacent to CONTENT FUNDAMENTALS.

**Why:** the system documents color, type, spacing, motion, glass, and icons, and says nothing
about shipping in two languages. That omission is *why* the language setting was built as an
onboarding-only feature (C-20). `AtlanLanguage` and `Bilingual` now live in `AtlanCore`
(`Packages/AtlanCore/Sources/AtlanCore/Localization.swift`) — foundation types at the same level
as the color and type tokens.

### Paste into `README.md`

```markdown
## LANGUAGE

Atlan ships in two languages. This is a foundation, not a feature — `AtlanLanguage` and
`Bilingual` sit in `AtlanCore` alongside the color and type tokens, and every surface depends
on them.

### The rule

> **A string exists in both languages or not at all.**

Copy is authored as a pair, never as a base plus a translation. `Bilingual("…", "…")` takes both
at the constructor; there is no way to supply one and defer the other. The type is the rule.

### The authorship principle

> **Spanish is not a translation of English. It's the same product, built twice.**

| | |
|---|---|
| **EN** | "Built for athletes with lives." |
| **ES** | "Hecho para quienes entrenan entre todo lo demás." |

A literal rendering — *"Hecho para atletas con vidas"* — is grammatical and wrong. It loses the
beat. Voice posture carries across languages; vocabulary does not.
```

### Paste into `SKILL.md` → Don'ts

```markdown
- **Don't author an English string without its Spanish pair.** Every user-facing chrome string is
  a `Bilingual` pair at the point it is written. There is no "add ES later" state.
```

---

## DS-02 · Chrome follows the toggle; authored content does not 🟠

**Target:** `README.md` → CONTENT FUNDAMENTALS (as a table). One-line version into `SKILL.md` so
generated prototypes inherit it.

**Why:** this is a content-model rule, not an implementation detail — it determines what a coach
writes twice and what they never do, and right now nothing tells them. A coach reading the current
docs would reasonably assume writing a session in Spanish is either required or pointless; neither
is correct. It also protects the honesty position: claiming "the app is bilingual" without this
boundary is the same species of overclaim as the 11.8:1 contrast figure in C-02 — true enough to
say out loud, wrong under inspection.

### Paste into `README.md` → CONTENT FUNDAMENTALS

```markdown
### The bilingual boundary

**Every word the app says is bilingual. Every word the coach says is theirs.**

| Follows the language toggle | Stays as authored |
|---|---|
| Buttons, headers, eyebrows, section titles | Session titles ("Threshold · ~30 min") |
| State words (Completed · Skipped · Swapped · In progress) | Block prescriptions ("4 × 100m at threshold") |
| Discipline, intensity, and block-kind names | Coach message subjects and bodies |
| Empty states, settings captions, toggle details | `WhyEntry` mechanism, prescription, and citation text |
| Accessibility labels, hints, and values | |

Coach-authored content does not follow the toggle, deliberately. A training prescription is not
chrome, and machine-translating one would be a safety claim the product has not earned.

Never write "fully bilingual." The bounded claim is the stronger one.
```

### Paste into `SKILL.md`

```markdown
- Chrome is bilingual; coach-authored content stays in the language it was written in. Never
  translate a session prescription, a coach message, or `WhyEntry` content.
```

---

## DS-03 · Formatting authority — dates follow language, units never do 🟡

**Target:** the notes accompanying `colors_and_type.css` in `README.md`, under a new **Formatting**
heading.

**Why:** `AtlanLanguage` gained a `locale` property (`en_US` / `es_ES`) used at seven date sites.
Distances did not change — `atlanFormatted` stays pinned to `en_US_POSIX`. That looks inconsistent
and is not; the governing principle is one level up. Naming the parent principle makes both the
"distances never region-convert" rule and `AtlanLanguage` having no `.system` case *derivable*
instead of memorized.

### Paste into `README.md`

```markdown
### Formatting

> **The athlete's explicit choice governs formatting. The device's region never does.**

- **Dates** are language-bound. A Spanish-speaking athlete reads *"sábado, 25 jul"*.
  Driven by `AtlanLanguage.locale` (`en_US` / `es_ES`) — seven sites.
- **Distances** are language-*invariant*. A pool is marked in metres in every country and a pace
  clock reads the same in both languages. `atlanFormatted` stays pinned to `en_US_POSIX`.
- **Neither** consults `Locale.current`. That is an IP address's opinion, not the athlete's.

Two consequences, both derivable from the above rather than memorized:
the 1,000 m swim never renders as "3,281 ft", and `AtlanLanguage` has no `.system` case.
```

---

## DS-04 · Spanish text-expansion allowance 🟡

**Target:** `Atlan_Performance_Style_Guide_v1.0.md`, typography section.

**Why:** nothing changed in the token layer — this is a gap the bilingual work exposed and did not
close. Spanish runs roughly 15–30% longer than English and lands hardest exactly where this system
is tightest: uppercase eyebrow labels in constrained widths. Today every one of these survives on
`minimumScaleFactor` — a silent, undocumented deviation from the type scale on the Spanish path
(logged as C-21, open).

| Surface | EN | ES | Pressure |
|---|---|---|---|
| Metric chip | CONSISTENCY (11) | CONSTANCIA (10) | survives |
| Metric chip | RECOVERY (8) | RECUPERACIÓN (12) | **+50% in a ~77pt chip** |
| Wet Mode zone | Skip rest | Saltar descanso | **+64% in a half-width zone** |
| Settings toggle | Advance when the clock runs out | Avanzar cuando el reloj llega a cero | wraps a second line |

The Wet Mode headline already has the correct rule — *shrink, never truncate*, with a documented
floor (144pt → 72pt). It is currently written as if specific to the countdown. It is not; it is the
general answer to text expansion.

### Paste into the style guide, typography section

```markdown
### Text expansion (ES)

> **Any label in a constrained container shrinks before it truncates, and carries a documented floor.**

Uppercase labels in fixed-width containers are sized against **the longer of the two languages,
not the English.** Spanish runs 15–30% longer for the same content.

- Wet Mode countdown: 144pt → 72pt floor (the existing, correct, instance of this rule).
- Metric chips, Wet Mode zone labels, and settings toggle details all inherit it.
- Truncation and ellipsis are never the answer for a label. Wrapping is acceptable where the
  container allows a second line; shrinking to a documented floor is the answer where it does not.
```

**Tooling note:** `atlan-audit` cannot check this today. A future check could assert that every
`Bilingual` pair's ES string fits the same container as its EN string.

---

## DS-05 · Stepped flows require a back affordance in a reserved slot 🟡

**Target:** `COMPONENT_QUICK_REFERENCE.md`, as a new **Stepped flow** entry.

**Why:** onboarding gained back navigation (C-19, resolved in iOS). Three rules are worth
generalizing, and rule 3 is the reason to write this down at all — the naive implementation moves
the progress indicator between steps, which reads as a layout bug in an otherwise precise system.

### Paste into `COMPONENT_QUICK_REFERENCE.md`

```markdown
## Stepped flow

Any multi-step, non-skippable flow (onboarding, calibration, guided setup).

**1 · A back control on every step after the first.**
Sourced from competitive research — Tonal, Equinox+, pliability, Apple Fitness, and Gentler Streak
all place one. It is the one near-universal pattern in the category that is not tied to
gamification.

**2 · Clamped to the flow's entry point, not to step zero.**
Settings → "Re-run calibration" opens the same component at the Calibration step; back stops there
rather than walking the athlete into Welcome or Language, which belong to first run only.
**A re-entered flow's floor is where it was entered.** (`minStep` + `goBack()`.)

**3 · The slot is reserved even when empty.**
A 48pt `Color.clear` holds the position on step one, so the progress marks do not shift left on the
one screen that has nothing to go back to.

**Reference implementation:** `Features/Onboarding/OnboardingView.swift` — `minStep`, `goBack()`,
`backButton`.
```

---

## Order of work

Per the upstream doc's recommendation, DS-01 and DS-02 are second priority overall (after CS-02,
which is done). DS-03, DS-04 land with C-21. DS-05 is housekeeping.

1. **DS-01 / DS-02** — give the system a Language section, so the next feature does not repeat C-20.
2. **DS-03 / DS-04** — formatting and text-expansion rules (closes C-21).
3. **DS-05** — stepped-flow entry.

Not covered here and still owed: the `Strings.xcstrings` migration, and a native-ES copy review of
the 137 new pairs (the cheapest quality win available on the project).
