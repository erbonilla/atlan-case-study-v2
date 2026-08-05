/* global React */
function DecisionSpine() {
  const steps = [
    ['01', 'A demanding week runs long.', 'Tomorrow\u2019s scheduled threshold session no longer fits the day that\u2019s left.'],
    ['02', 'A rigid product fails here.', 'It marks the session missed, or asks the athlete to manually replan around a fixed calendar grid.'],
    ['03', 'Atlan proposes an alternative.', 'A lower-cost session is offered in its place — reachable from the notification itself, no app-diving required.'],
    ['04', 'One gesture resolves it.', 'Swipe to accept the alternative, or tap "Skip today." Neither path is treated as a failure state.'],
    ['05', 'The week recalculates, quietly.', 'Periodization rebalances without exposing the math by default; depth is one tap away, not forced on the surface.'],
  ];
  return (
    <section className="cs-section cs-shell">
      <div className="cs-eyebrow">The decision that shaped the product</div>
      <h2 className="cs-h2">"The meeting ran late." The plan is now wrong.</h2>
      <div className="cs-spine">
        {steps.map(([n, t, d]) => (
          <div className="cs-spine-row" key={n}>
            <div className="cs-spine-n">{n}</div>
            <div className="cs-spine-text"><strong>{t}</strong> {d}</div>
          </div>
        ))}
      </div>
      <div className="cs-tradeoff">
        <div className="k">Trade-off accepted</div>
        <p>Silent recalculation reduces control and transparency on the primary surface. Atlan compensates
        with an optional explanation layer rather than displaying periodization detail by default.</p>
      </div>
    </section>
  );
}

function ThreeDecisions() {
  const decisions = [
    {
      n: 'Decision 01', title: 'Adapt the week, not the blame.',
      evidence: 'Disruption scenario above, paired with adherence literature on autonomy-supportive design.',
      decision: 'Session Swapper — notification-reachable, one-gesture, silent recalc.',
      rejected: 'A red "missed" state, manual calendar repair, or forced catch-up sessions.',
      tradeoff: 'Less immediate visibility into how the recalculated plan was derived.',
      validation: 'Comprehension, trust, acceptance rate, and downstream plan-correction behavior.',
    },
    {
      n: 'Decision 02', title: 'Design for wet hands and sun glare.',
      evidence: 'Poolside context research and the offline-first architectural requirement.',
      decision: 'Gross-motor swipe zones, 16:1 contrast, minimal controls — Wet Mode.',
      rejected: 'Small precision-tap buttons; any behavior that assumes a live connection.',
      tradeoff: 'Reduced control density versus a standard touch interface.',
      validation: 'Real pool deck, waterproof pouch, wet hands, sun glare, false-positive gesture rate.',
    },
    {
      n: 'Decision 03', title: 'Keep the science one tap below the surface.',
      evidence: 'Cognitive-fatigue framing from the reframe — depth without demand.',
      decision: '"Why" affordance with source-backed, citation-grounded explanations.',
      rejected: 'Persistent charts on the main surface; unexplained simplification.',
      tradeoff: 'Expert users take one additional action to inspect the underlying detail.',
      validation: 'Discoverability of the "i" affordance, comprehension, and trust in the citation.',
    },
  ];
  return (
    <section className="cs-section cs-shell">
      <div className="cs-eyebrow">Three product decisions</div>
      <h2 className="cs-h2">The judgment calls that carry this study.</h2>
      <div className="cs-decisions mt-lg" style={{ marginTop: 28 }}>
        {decisions.map((d) => (
          <div className="cs-decision" key={d.n}>
            <div className="cs-decision-head">
              <span className="cs-decision-n">{d.n}</span>
              <h3>{d.title}</h3>
            </div>
            <div className="cs-decision-grid">
              <div className="cs-decision-field"><div className="k">Evidence</div><p>{d.evidence}</p></div>
              <div className="cs-decision-field"><div className="k">Decision</div><p>{d.decision}</p></div>
              <div className="cs-decision-field"><div className="k">Rejected</div><p>{d.rejected}</p></div>
              <div className="cs-decision-field"><div className="k">Trade-off</div><p>{d.tradeoff}</p></div>
            </div>
            <div className="cs-decision-field" style={{ marginTop: 14, borderTop: '1px solid var(--abyss-16)', paddingTop: 14 }}>
              <div className="k">Validation needed</div><p>{d.validation}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="cs-eyebrow" style={{ marginTop: 44 }}>Rejected alternatives — the strongest ones</div>
      <div className="cs-rejects">
        <div className="cs-reject-card">
          <div className="cs-reject-thumb"><div className="cal-grid">{Array.from({length:8}).map((_,i)=><i key={i} className={i===5?'hit':''}></i>)}</div></div>
          <div className="cs-reject-label">Calendar-first IA</div>
          <div className="cs-reject-why">Organized the whole app around a monthly grid — read as a scheduling tool, not a coach.</div>
        </div>
        <div className="cs-reject-card">
          <div className="cs-reject-thumb"><div className="metric-bars">{[40,70,30,85,55].map((h,i)=><i key={i} style={{height:h+'%'}}></i>)}</div></div>
          <div className="cs-reject-label">Metrics-first IA</div>
          <div className="cs-reject-why">Led with HRV/pace/load charts — read like a coach's dashboard, not the athlete's own week.</div>
        </div>
        <div className="cs-reject-card">
          <div className="cs-reject-thumb"><div className="program-bands"><i></i><i></i><i></i></div></div>
          <div className="cs-reject-label">Program-first IA</div>
          <div className="cs-reject-why">Grouped by training block (Base/Build/Peak) but buried what the user opens the app to see: today.</div>
        </div>
        <div className="cs-reject-card">
          <div className="cs-reject-thumb"><div className="precision-taps">{Array.from({length:10}).map((_,i)=><i key={i}></i>)}</div></div>
          <div className="cs-reject-label">Precision-tap Wet Mode</div>
          <div className="cs-reject-why">Small buttons at standard touch-target size — unusable wet, gloved, or with sun glare.</div>
        </div>
        <div className="cs-reject-card">
          <div className="cs-reject-thumb"><div className="es-literal">"La reunión se prolongó."</div></div>
          <div className="cs-reject-label">Literal ES first pass</div>
          <div className="cs-reject-why">Translated the English sentence structure directly — technically correct, lost the reassurance beat.</div>
        </div>
      </div>
    </section>
  );
}

window.DecisionSpine = DecisionSpine;
window.ThreeDecisions = ThreeDecisions;
