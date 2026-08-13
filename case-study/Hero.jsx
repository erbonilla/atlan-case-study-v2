/* global React */
// Atlan Case Study — Hero (Section 1)
// Single committed art direction: Magazine layout, Morning Light pool photo.

function MorningLight() {
  return (
    <img
      src={window.__resources ? window.__resources.heroPhoto : "assets/photography/fig-hero-pool-sunrise.png"}
      alt="Endurance athlete pushing off at sunrise — pool lane lines and coral floats"
      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      loading="eager"
      decoding="async"
    />
  );
}

function RoleCard({ inverse = false }) {
  const rows = [
    {
      k: 'Owned',
      v: 'Strategy · Brand system · Design system tokens · IA · All wireframes & hi-fi UI · Wet Mode interaction model · Session Swapper flow · Bilingual onboarding · Mobile-app implementation in code.',
    },
    {
      k: 'Worked across',
      v: 'Adherence-science synthesis (SDT, sport-psychology) · Competitive teardown · Technical scoping for an offline-first mobile app.',
    },
    {
      k: 'Gave up',
      v: 'A real user research panel. This is a concept project — research is secondary literature plus light primary conversations.',
    },
  ];
  return (
    <div className={`role-card ${inverse ? 'role-card--inverse' : ''}`}>
      <div className="label" style={{ marginBottom: 18 }}>My role</div>
      <div className="role-rows">
        {rows.map(r => (
          <div className="role-row" key={r.k}>
            <div className="role-key">{r.k}</div>
            <div className="role-val">{r.v}</div>
          </div>
        ))}
      </div>
      <div className="role-pull">
        <em>"Every decision in this case study is one I made and can defend."</em>
      </div>
    </div>
  );
}

function MetaTable() {
  const rows = [
    ['Project', 'Atlan Performance — Liquid Precision & The Quiet Sage'],
    ['Type', 'Self-initiated UX concept project'],
    ['Status', 'Built (mobile app functional); not launched to users'],
    ['Duration', '~10 weeks, end-to-end, solo'],
    ['Platform', 'Offline-first mobile app · Bilingual ES/EN'],
    [
      'Live preview',
      <a href="https://atlan-app-web-preview.vercel.app/" target="_blank" rel="noopener noreferrer" className="link">
        Open the Atlan mobile-app preview
      </a>,
    ],
    ['Voice mix', 'Sage 90 / Hero 10 peak · No Ruler'],
    ['Designer', 'Edgar Bonilla'],
    ['Date', 'May 2026'],
  ];
  return (
    <div className="meta-table">
      {rows.map(([k, v]) => (
        <div className="meta-row" key={k}>
          <div className="meta-key">{k}</div>
          <div className="meta-val">{v}</div>
        </div>
      ))}
    </div>
  );
}

function Stat({ n, l }) {
  return (
    <div className="stat">
      <div className="stat-n">{n}</div>
      <div className="stat-l">{l}</div>
    </div>
  );
}

function Hero() {
  return (
    <section id="hero" className="section section--abyss-deep hero hero--magazine" data-screen-label="01 Hero">
      <div className="container container--wide">
        <div className="hero-mag-top">
          <div className="hero-brand-lockup">
            <img className="hero-brand-mark" src={window.__resources ? window.__resources.atlanLogo : "assets/atlan_logo_bk.svg"} alt="Atlan" width="72" height="72" />
            <div className="badge"><span className="dot"></span>Self-Initiated Concept</div>
          </div>
          <div className="hero-mag-meta">
            <span><span className="label">Project</span> Atlan Performance</span>
            <span><span className="label">By</span> Edgar Bonilla</span>
            <span><span className="label">Date</span> May 2026</span>
          </div>
        </div>

        <div className="hero-tick" style={{ margin: '48px 0 32px' }}></div>

        <h1 className="hero-mag-title">
          An emotionally intelligent coach<br />
          <em>for athletes with lives.</em>
        </h1>

        <div className="hero-mag-deck-row">
          <p className="hero-deck" style={{ maxWidth: 540 }}>
            A self-initiated UX concept project — an offline-first, bilingual coaching mobile app
            for executive endurance athletes (30–50). Built end-to-end solo over ~10 weeks.
            The case study reads as confidently honest, or it doesn't read at all.
          </p>
          <div className="hero-mag-art">
            <MorningLight />
          </div>
        </div>

        <div className="hero-mag-bottom">
          <div className="hero-stats hero-stats--wide">
            <Stat n="7" l="Sections" />
            <Stat n="7" l="Hi-fi artifacts" />
            <Stat n="16:1" l="AAA contrast (Wet Mode)" />
            <Stat n="2" l="Languages, at parity" />
            <Stat n="~10wk" l="End-to-end solo" />
          </div>
        </div>

        <div className="hero-divider"></div>
        <div className="hero-foot">
          <RoleCard inverse />
          <div className="hero-meta">
            <div className="label" style={{ marginBottom: 18 }}>At a glance</div>
            <MetaTable />
          </div>
        </div>

        <div className="hero-preview">
          <div className="eyebrow"><span className="num">↓</span> What follows</div>
          <div className="hero-preview-grid">
            {window.SECTIONS.slice(1).map(s => (
              <a key={s.id} href={`#${s.id}`} className="hero-preview-item">
                <span className="mono">{s.num}</span>
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
