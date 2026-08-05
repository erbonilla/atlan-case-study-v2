/* global React, ReactDOM, Rail, Hero, ProblemSection, PersonaSection, ProcessSection, SolutionSection, OutcomesSection, HonestySection, TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakSlider, TweakToggle, TweakSelect */

function WaterBand() {
  return (
    <div className="water-band" aria-hidden="true">
      <img src={window.__resources ? window.__resources.waterTexture : "assets/photography/fig-water-texture.png"} alt="" />
      <div className="water-band-veil"></div>
      <div className="water-band-mark">
        <span className="mono">Liquid Precision</span>
        <span className="dotsep">·</span>
        <span className="mono">Atlan</span>
      </div>
    </div>
  );
}

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "outcomesVariant": "tiles",
  "typeStyle": "outfit-lato",
  "coralIntensity": 1.0,
  "showHero": true,
  "showProblem": true,
  "showPersona": true,
  "showProcess": true,
  "showSolution": true,
  "showOutcomes": true,
  "showHonesty": true
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(DEFAULTS);

  // Apply tweaks live: type swap and coral intensity
  React.useEffect(() => {
    const root = document.documentElement;
    if (t.typeStyle === 'fraunces-manrope') {
      root.style.setProperty('--display', "'Fraunces', 'Georgia', serif");
      root.style.setProperty('--body', "'Manrope', 'Helvetica Neue', sans-serif");
    } else if (t.typeStyle === 'outfit-inter') {
      root.style.setProperty('--display', "'Outfit', 'Inter', sans-serif");
      root.style.setProperty('--body', "'Inter', system-ui, sans-serif");
    } else {
      root.style.setProperty('--display', "'Outfit', 'Inter', sans-serif");
      root.style.setProperty('--body', "'Lato', 'Helvetica Neue', sans-serif");
    }
    root.style.setProperty('--coral-mix', String(t.coralIntensity));
    // adjust coral hue intensity via the actual coral var
    const intensity = t.coralIntensity;
    if (intensity < 0.999) {
      // dampen by blending toward abyss
      const a = Math.round(255 * intensity);
      root.style.setProperty('--coral-effective', `rgba(255,106,61,${intensity})`);
    }
  }, [t.typeStyle, t.coralIntensity]);

  return (
    <React.Fragment>
      <div className="app">
        <Rail />
        <main className="main">
          {t.showHero && <Hero />}
          {t.showProblem && <ProblemSection />}
          {t.showPersona && <PersonaSection />}
          {t.showProcess && <ProcessSection />}
          {t.showSolution && <SolutionSection />}
          <WaterBand />
          {t.showOutcomes && <OutcomesSection variant={t.outcomesVariant} />}
          {t.showHonesty && <HonestySection />}
        </main>
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Outcomes section">
          <TweakRadio
            label="Style"
            value={t.outcomesVariant}
            onChange={(v) => setTweak('outcomesVariant', v)}
            options={[
              { value: 'tiles', label: 'Tile cards' },
              { value: 'spec', label: 'Data spec' },
            ]}
          />
        </TweakSection>

        <TweakSection title="System">
          <TweakSelect
            label="Type pairing"
            value={t.typeStyle}
            onChange={(v) => setTweak('typeStyle', v)}
            options={[
              { value: 'outfit-lato', label: 'Outfit + Lato (default)' },
              { value: 'fraunces-manrope', label: 'Fraunces + Manrope (brief)' },
              { value: 'outfit-inter', label: 'Outfit + Inter (tighter)' },
            ]}
          />
          <TweakSlider
            label="Coral intensity"
            value={t.coralIntensity}
            min={0.3} max={1} step={0.05}
            format={(v) => `${Math.round(v * 100)}%`}
            onChange={(v) => setTweak('coralIntensity', v)}
          />
        </TweakSection>

        <TweakSection title="Show / hide sections">
          <TweakToggle label="Hero" value={t.showHero} onChange={(v) => setTweak('showHero', v)} />
          <TweakToggle label="Problem & Context" value={t.showProblem} onChange={(v) => setTweak('showProblem', v)} />
          <TweakToggle label="Persona & Research" value={t.showPersona} onChange={(v) => setTweak('showPersona', v)} />
          <TweakToggle label="Process & Ideation" value={t.showProcess} onChange={(v) => setTweak('showProcess', v)} />
          <TweakToggle label="Solution Mockups" value={t.showSolution} onChange={(v) => setTweak('showSolution', v)} />
          <TweakToggle label="Outcomes" value={t.showOutcomes} onChange={(v) => setTweak('showOutcomes', v)} />
          <TweakToggle label="Honesty & Disclosure" value={t.showHonesty} onChange={(v) => setTweak('showHonesty', v)} />
        </TweakSection>
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
