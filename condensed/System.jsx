/* global React, Figure */
function SystemDetail() {
  return (
    <section className="cs-section cs-shell">
      <div className="cs-eyebrow">System &amp; interaction detail</div>
      <h2 className="cs-h2">How the three decisions actually behave on-screen.</h2>
      <p style={{ font: '400 15.5px/1.6 var(--body)', color: 'var(--abyss-56)', maxWidth: 680, marginTop: 10 }}>
        Each figure below includes empty, error, offline, and completion states where relevant —
        annotated for why, not just what.
      </p>
      <Figure num="A" title="Wet Mode — gesture grammar, contrast, and the four spec floors." src={window.__resources ? window.__resources.figWetMode : "figures/fig-05-wet-mode.html"} height={1500} />
      <Figure num="B" title="Session Swapper via the journey map — competitor pressure-frame vs. Atlan." src={window.__resources ? window.__resources.figJourney : "figures/fig-03-journey.html"} height={1100} />
      <Figure num="C" title="The Why affordance — daily session and threshold modal with citation." src={window.__resources ? window.__resources.figWhyButton : "figures/fig-06-why-button.html"} height={1300} />

      <div className="cs-eyebrow" style={{ marginTop: 40 }}>ES/EN content parity</div>
      <p style={{ font: '400 15.5px/1.6 var(--body)', color: 'var(--abyss-56)', maxWidth: 760, marginTop: 12 }}>
        Bilingual app chrome, not a translation layer: <strong>176 authored EN/ES pairs across ten surfaces</strong>
        {' '}follow the athlete's language choice. Coach messages and session prescriptions stay in the language they
        were written in — a prescription is not chrome, and machine-translating one would be a safety claim the
        product has not earned. Spanish is authored, never derived.
      </p>
      <div className="cs-lang-pair">
        <div className="cs-lang-card">
          <div className="cs-lang-tag">EN — Session Swapper notification</div>
          <div className="cs-lang-line">"Life happens. Want to swap tomorrow's 6 AM threshold set for a 30-minute easy aerobic on Wednesday? The week still works."</div>
        </div>
        <div className="cs-lang-card">
          <div className="cs-lang-tag">ES — same notification</div>
          <div className="cs-lang-line">"La vida pasa así. ¿Cambiamos el set de umbral de las 6 AM de mañana por 30 minutos aeróbicos suaves el miércoles? La semana sigue funcionando."</div>
        </div>
      </div>
    </section>
  );
}

function EvidencePlan() {
  return (
    <section className="cs-section cs-shell">
      <div className="cs-eyebrow">Evidence and validation plan</div>
      <h2 className="cs-h2">What is measured. What is not.</h2>
      <div className="cs-evidence-table">
        <div className="cs-evidence-col">
          <div className="k">Evidence available</div>
          <ul>
            <li>Design-token contrast values (16:1 Wet Mode, 11.8:1 primary)</li>
            <li>Documented Wet Mode touch-zone dimensions (320×360px)</li>
            <li>Implemented offline behavior in the prototype</li>
            <li>176 authored EN/ES chrome pairs across ten surfaces, at equal visual weight</li>
            <li>Documented measurement plans with falsification conditions</li>
          </ul>
        </div>
        <div className="cs-evidence-col">
          <div className="k">Evidence still needed</div>
          <ul>
            <li>Moderated usability testing</li>
            <li>In-context pool testing (wet hands, sun glare)</li>
            <li>Longitudinal adherence data</li>
            <li>Native-speaker validation of the 137 pairs outside onboarding</li>
            <li>Retention and adoption data</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Reflection() {
  return (
    <section className="cs-section cs-shell cs-reflection">
      <div className="cs-eyebrow">Reflection</div>
      <h2 className="cs-h2">What I'd validate next.</h2>
      <p style={{ marginTop: 16 }}>
        The concept became stronger when I stopped treating missed training as an edge case and made
        disruption the organizing condition. The largest limitation is equally clear: the audience and
        behavior assumptions have not been validated with a recruited panel. I would next{' '}
        <em>test Wet Mode in a real pool environment, validate the disruption model with endurance
        athletes, and review the training logic and citations with a qualified coach or sports-science
        specialist.</em>
      </p>
    </section>
  );
}

function CreditsCondensed() {
  return (
    <section className="cs-section cs-shell">
      <div className="cs-eyebrow">Credits &amp; disclosure</div>
      <div className="cs-credits">
        <div>
          <p>
            Atlan is solo, self-initiated concept work — no client, team, or launch exists. The persona
            is a strategic synthesis from secondary literature, product reviews, forum patterns, and
            informal conversations, not a validated persona from a recruited research panel. AI tools
            (Cursor, Claude Code, Codex) accelerated implementation and this case study's layout; strategy,
            IA, the voice system, and every decision above are mine.
          </p>
        </div>
        <div>
          <div className="k" style={{ font: '700 11px/1 var(--body)', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--abyss-40)', marginBottom: 10 }}>Where this was solo, not a team</div>
          <ul>
            <li>Product/PM input normally scopes cohort recruitment — self-reviewed against SDT literature here.</li>
            <li>Engineering review of offline sync edge cases — simulated in the prototype, not load-tested.</li>
            <li>A sports-science or coaching SME would need to sign off on the training logic and citations before any real launch.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function CondensedFooter() {
  const Chevron = () => (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" style={{ display: 'inline-block', marginLeft: 5, verticalAlign: -1 }} aria-hidden="true">
      <path d="M3 1.5L8 5.5L3 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  return (
    <footer className="cs-section cs-shell cs-footer">
      <div className="links">
        <a href="Atlan Case Study - Deep Dive.html">Full deep-dive study<Chevron /></a>
        <a href="Atlan Deck.html">View the deck<Chevron /></a>
        <a href="mailto:erbonilla@outlook.com">erbonilla@outlook.com</a>
      </div>
      <span className="fine">Atlan Performance · Edgar Bonilla · May 2026</span>
    </footer>
  );
}

window.SystemDetail = SystemDetail;
window.EvidencePlan = EvidencePlan;
window.Reflection = Reflection;
window.CreditsCondensed = CreditsCondensed;
window.CondensedFooter = CondensedFooter;
