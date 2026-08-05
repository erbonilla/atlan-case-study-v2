/* global React */
// Atlan Case Study — Side rail with section progress

const SECTIONS = [
  { id: 'hero', num: '00', label: 'Hero' },
  { id: 'problem', num: '01', label: 'Problem & Context' },
  { id: 'persona', num: '02', label: 'Persona & Research' },
  { id: 'process', num: '03', label: 'Process & Ideation' },
  { id: 'solution', num: '04', label: 'Solution Mockups' },
  { id: 'outcomes', num: '05', label: 'Outcomes' },
  { id: 'honesty', num: '06', label: 'Honesty & Disclosure' },
];

function Rail() {
  const [active, setActive] = React.useState('hero');

  React.useEffect(() => {
    const sections = SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean);
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.30;
      let current = SECTIONS[0].id;
      for (const el of sections) {
        if (el.offsetTop <= y) current = el.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <aside className="rail">
      <div className="rail-mark">
        <a href="#hero" className="rail-mark-link" aria-label="Atlan — top of case study">
          <img className="rail-mark-img" src={window.__resources ? window.__resources.atlanLogo : "assets/atlan_logo_bk.svg"} alt="Atlan" width="56" height="56" />
          <div className="rail-mark-text">
            <div className="rail-logo">atlan<span className="dot">.</span></div>
            <div className="rail-sub">UX Case Study · 2026</div>
          </div>
        </a>
      </div>

      <nav className="rail-list">
        {SECTIONS.map(s => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`rail-item ${active === s.id ? 'active' : ''}`}
          >
            <span className="num">{s.num}</span>
            <span className="tick"></span>
            <span>{s.label}</span>
          </a>
        ))}
      </nav>

      <div className="rail-foot">
        <div className="rail-foot-label">Designer</div>
        <div className="rail-foot-value">Edgar Bonilla</div>
        <div className="rail-foot-label" style={{ marginTop: 12 }}>Status</div>
        <div className="rail-foot-value">Self-initiated concept</div>
      </div>
    </aside>
  );
}

window.Rail = Rail;
window.SECTIONS = SECTIONS;
