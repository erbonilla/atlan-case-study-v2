# Atlan Performance — Image Prompts

Prompts to generate the **Morning Light** photography referenced as placeholders across the case study and deck. Style is locked by the Atlan brand: *"Liquid Precision"* — calm, ocean-toned, science-engineered. Never *suffer porn*. Never red-faced, never grimacing, never gym moody.

> **Universal style suffix** (append to every prompt unless noted)
>
> `photorealistic, editorial sports photography, shot on Sony A7 IV, 35mm lens, f/2.0, natural golden-hour light, cool-leaning warm color grade (teal/cyan water, warm coral/peach skin highlights), high clarity, slight cinematic grain, no text, no logos, no watermark, --ar 3:4 --style raw`

---

## Brand palette (for color graders / Photoshop adjustment)

| Use | Value |
|---|---|
| Water mids | `#0E8A9A` (Tide Teal) |
| Deep water / shadow | `#0B2A3C` (Abyss Navy) |
| Sky / skin highlight | `#FFC9A8 → #F1B69D` (warm sunrise) |
| Accent (lane floats, sun) | `#FF6A3D` (Coral Spark) |
| Foam / surface highlights | `#ECF7F8` |

Hard rules — apply in post:
- ❌ No red, sunburned, or grimacing faces.
- ❌ No B&W (except partner co-branding).
- ❌ No generic posed stock-fitness energy.
- ✅ Blue/teal water dominant.
- ✅ Warm skin tones and sunrise highlights.
- ✅ Slight grain acceptable for editorial moments.

---

## 1 — Hero photo · `fig-hero-pool-sunrise`

**Where:** `case-study/Hero.jsx` → "Photo placeholder · Morning light · pool deck or open water at first light."
Replaces the SVG art slot in all three Hero variants (Editorial, Magazine, Centered).

**Aspect:** 3:4 portrait (Editorial / Magazine variants) and 16:9 landscape companion for the Centered full-bleed background.

**Prompt**

```
A 40-year-old endurance athlete pushing off the wall in an outdoor 50-meter pool
at first light. Shot from a low side angle, partially submerged half-and-half
waterline — calm teal-blue water in the lower frame, coral-and-peach sunrise sky
in the upper frame. Coral-colored lane rope floats visible at the surface. The
athlete is mid-stroke, focused expression — not exhausted, not grimacing. Sun
sits low behind them casting warm rim light on their shoulder and the water
surface. Steam rising faintly from the warm pool into cooler dawn air. Empty,
quiet pool deck behind. Composition leaves clear negative space in the upper
right third for headline overlay.
```

---

## 2 — Open-water alternative · `fig-hero-openwater-sunrise`

**Where:** Companion / alternate hero (Hero `scene="horizon"` tweak).

**Aspect:** 3:4 portrait.

**Prompt**

```
Single open-water swimmer in calm coastal water at golden-hour sunrise. Shot
from the surface, low to the water, half waterline — silver-teal water below,
warm peach-coral sky above. The swimmer is mid-breath, sighting forward, neon
swim-buoy trailing behind them on the surface. Distant horizon line clean, no
shoreline visible. Atmosphere is meditative, not exertional. Sun haze and a
faint sun glare on the water surface, no lens flare artifacts. The swimmer's
silhouette is centered-left; right two-thirds is open water and sky for
overlay copy.
```

---

## 3 — Section divider · `fig-water-texture`

**Where:** Optional full-bleed band between sections (e.g. between Problem and Persona).

**Aspect:** 21:9 ultrawide.

**Prompt**

```
Abstract underwater surface texture, shot looking up from below toward the
water surface. Sun rays piercing down in soft parallel beams. Color graded
deep teal at the edges, transitioning to glowing coral-orange where the sun
breaks the surface. No swimmer, no scale reference, no horizon. Pure water,
caustic light patterns, surface ripples. Reads as a calm, scientific
moment — not action.
```

---

## 4 — Closing / sign-off · `fig-closing-pooldeck-quiet`

**Where:** Deck slide 22 closing, or case-study Honesty section reverse.

**Aspect:** 16:9.

**Prompt**

```
A solitary endurance athlete sitting at the edge of a 50-meter outdoor pool
after a session, towel on shoulders, looking out at the lane lines. Back to
camera or three-quarter rear. Golden morning light from the side. Coral-orange
lane floats clearly visible in the water beside them. Atmosphere is contemplative
and satisfied — not exhausted. Cool teal water, warm skin tones, soft grain.
Composition is wide — leave room on the left for a closing quote overlay.
```

---

## 5 — Persona portrait reference · `fig-optimizer-portrait` *(optional)*

**Where:** `figures/fig-02-persona.html` — currently illustrated. Photo upgrade option.

**Aspect:** 4:5 portrait.

**Prompt**

```
Editorial three-quarter portrait of a 38-year-old executive endurance athlete,
of Latin American or Mediterranean descent, in a lightweight technical
quarter-zip on an outdoor pool deck at sunrise. Hair slightly damp from a swim.
Soft confident expression — measured, not heroic. Background is out-of-focus
pool lane lines and coral floats. Natural sunrise side-light. Style is editorial
profile feature, not athletic catalog. Hands relaxed at sides. Eye contact
optional but if present, calm and direct.
```

---

## 6 — Wet Mode in-environment · `fig-wetmode-context` *(supporting)*

**Where:** Pillar 01 supporting imagery (deck slide 13, case-study Solution section). Documents the real-world condition Wet Mode is designed for.

**Aspect:** 4:5 portrait, phone-in-frame.

**Prompt**

```
Close-up over-shoulder shot of an athlete's wet hand reaching for a smartphone
in a waterproof clear pouch resting on the pool deck. Water droplets on the
phone surface. Sun glare hitting the screen at a difficult angle — this is the
real condition the UI must survive. Lane lines and teal pool water visible at
the edge of frame. No UI shown on the screen (the design renders separately).
Cool-warm color grade. Hand is the only person element. Slightly grainy,
editorial.
```

---

## 7 — Bilingual onboarding context · `fig-onboarding-context` *(supporting)*

**Where:** Pillar 03 (deck slide 15, case-study Solution).

**Aspect:** 4:5 portrait.

**Prompt**

```
Phone in a person's hand at a sunlit kitchen counter at dawn, coffee mug visible
out of focus, with the device screen oriented toward the camera but the on-screen
content blank (the design renders separately as an overlay). Warm morning light
through a window casts soft coral on the scene. Cool teal accent from a water
bottle on the counter. Calm, residential, pre-workout moment. Latin-American /
Spanish-language cultural context welcome — a Spanish-language newspaper or
pan dulce on the counter is a nice subtle cue. No people's faces in frame.
```

---

## Negative prompts (apply to every generation)

```
no red faces, no grimacing, no sweat-drenched gym shots, no dark moody gym
lighting, no neon studio fitness photography, no posed model energy, no
exaggerated muscle definition, no logos, no text, no watermark, no
distorted hands, no extra fingers, no warped equipment
```

---

## Delivery checklist

For every generated image:

- [ ] Resolution ≥ 2400px on the long edge.
- [ ] Saved as `.jpg` (quality 85) — file under 600KB.
- [ ] File named exactly as listed (e.g. `fig-hero-pool-sunrise.jpg`).
- [ ] Dropped into `assets/photography/` of this project.
- [ ] Post-grade pass to lock palette: pull water toward `#0E8A9A`, push warm highlights toward `#F1B69D`, and dot Coral `#FF6A3D` only where lane floats / sunrise glow already live in-scene.
- [ ] Alt text added when wiring into HTML — describe the moment, not the brand.

---

## Where each image lands in code

| File | Asset | Section |
|---|---|---|
| `case-study/Hero.jsx` | `fig-hero-pool-sunrise.jpg` | Replaces `MorningLightSVG` art slot, Editorial + Magazine variants |
| `case-study/Hero.jsx` | `fig-hero-openwater-sunrise.jpg` | `scene="horizon"` tweak variant |
| `case-study/Hero.jsx` | `fig-hero-pool-sunrise.jpg` (16:9 crop) | Centered variant full-bleed background |
| `case-study/Sections1.jsx` | `fig-water-texture.jpg` | Optional band between sections |
| `Atlan Deck.html` slide 01 | `fig-hero-pool-sunrise.jpg` | Cover photo behind the SVG morning-light art |
| `Atlan Deck.html` slide 13 | `fig-wetmode-context.jpg` | Pillar 01 supporting context |
| `Atlan Deck.html` slide 15 | `fig-onboarding-context.jpg` | Pillar 03 supporting context |
| `Atlan Deck.html` slide 22 | `fig-closing-pooldeck-quiet.jpg` | Closing slide background |

— *Edgar Bonilla · Atlan Performance · May 2026*
