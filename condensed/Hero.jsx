/* global React */
function Chevron() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" style={{ display: 'inline-block', marginLeft: 5, verticalAlign: -1 }} aria-hidden="true">
      <path d="M3 1.5L8 5.5L3 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TopBar() {
  return (
    <div className="cs-shell cs-topbar">
      <a href="#hero" className="mark">
        <img src={window.__resources ? window.__resources.atlanLogo : "assets/atlan_logo_bk.svg"} alt="Atlan" />
        <span style={{ font: '600 15px/1 var(--display)', color: 'var(--abyss)' }}>atlan<span style={{ color: 'var(--coral)' }}>.</span></span>
      </a>
      <a href="Atlan Case Study - Deep Dive.html" className="deep-link">Read the full deep-dive study<Chevron /></a>
    </div>
  );
}

function CsHero() {
  return (
    <section id="hero" className="cs-hero cs-shell">
      <div className="cs-hero-top">
        <span className="cs-status-chip"><span className="dot"></span>Self-initiated concept — functional prototype, not launched to users</span>
      </div>
      <h1>Designing a coaching PWA that adapts when life interrupts training.</h1>
      <p className="cs-hero-summary">
        Atlan is a self-initiated, offline-first coaching concept for bilingual endurance athletes.
        I designed and built the product around one premise: when a demanding week disrupts training,
        the system should adapt the plan instead of framing the athlete as a failure.
      </p>
      <div className="cs-chips">
        <span className="cs-chip">Offline-first</span>
        <span className="cs-chip">ES/EN parity</span>
        <span className="cs-chip">Wet Mode</span>
        <span className="cs-chip">WCAG-aware interface system</span>
      </div>
      <div className="cs-meta-row">
        <span><strong>Role</strong> — Product strategy, UX/UI, brand system, prototype implementation</span>
        <span><strong>Team</strong> — Solo concept</span>
        <span><strong>Duration</strong> — ~10 weeks</span>
        <span><strong>Platform</strong> — Offline-first PWA</span>
        <span><strong>Languages</strong> — Spanish and English</span>
      </div>
      <div className="cs-hero-photo">
        <img src={window.__resources ? window.__resources.heroPhoto : "assets/photography/fig-hero-pool-sunrise.png"} alt="Endurance athlete pushing off at sunrise, pool lane lines and coral floats" />
      </div>
    </section>
  );
}

function SixtySecondCase() {
  const blocks = [
    ['Situation', 'Endurance products often expose either dense performance analysis or social motivation. This scenario required scientific depth without cognitive overload or punishment-based adherence mechanics.'],
    ['Responsibility', 'I owned strategy, product framing, IA, content and voice rules, design-system decisions, key flows, interface design, and prototype implementation.'],
    ['Intervention', 'I designed Session Swapper, Wet Mode, depth-on-demand explanations, and bilingual app chrome — onboarding through Settings — around environmental and cognitive constraints.'],
    ['Evidence status', 'The prototype and accessibility properties are documented. Product-behavior effects remain hypotheses pending recruited research and in-context testing.'],
  ];
  return (
    <section className="cs-section cs-shell">
      <div className="cs-eyebrow">The 60-second case</div>
      <div className="cs-60-grid">
        {blocks.map(([k, v]) => (
          <div className="cs-60-card" key={k}>
            <div className="k">{k}</div>
            <p>{v}</p>
          </div>
        ))}
      </div>
      <div className="cs-proto-note">
        <strong>Prototype:</strong> available live on request during an interview.
      </div>
    </section>
  );
}

window.TopBar = TopBar;
window.CsHero = CsHero;
window.SixtySecondCase = SixtySecondCase;
