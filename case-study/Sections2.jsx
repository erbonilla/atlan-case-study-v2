/* global React, Figure */
// Atlan Case Study — Sections 5 (Solution), 6 (Outcomes), 7 (Honesty)

// ─── Section 5: Solution Mockups ──────────────────────────────
function SolutionSection() {
  return (
    <section id="solution" className="section section--abyss-deep" data-screen-label="05 Solution Mockups">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow"><span className="num">04</span> Solution Mockups</div>
          <h2 className="section-title">
            Three pillars. <em>Three voice ratios.</em> One product.
          </h2>
          <p className="section-deck">
            <strong>Baseline: Sage 70 / Hero 30</strong> across the product, with a whisper of Ruler (~10%
            of instances) in protocol and mandate copy. Per surface, the mix moves within a
            <strong> documented range of Sage 45 → 95</strong> — peak Sage is the "Why" modal (95/5, zero
            motivational copy); peak Hero is the onboarding Welcome (45/55, briefly). Session Swapper is a
            separate explicit override at Sage 60 / Hero 40, for the moment life actually interrupts training.
          </p>
        </div>

        {/* Pillar 1 — Wet Mode */}
        <div className="pillar">
          <div className="pillar-head">
            <div className="pillar-num">Pillar 01</div>
            <div className="pillar-ratio">
              <span className="ratio-bar"><span className="ratio-sage" style={{ width: '90%' }}></span></span>
              <span className="ratio-label"><strong>90% Sage</strong> · 10% Hero</span>
            </div>
          </div>
          <h3 className="pillar-title">Wet Mode — environmental design.</h3>
          <p className="body mt-md" style={{ maxWidth: 780, color: 'var(--foam-72)' }}>
            The Optimizer trains at the pool. Standard mobile UX assumes dry fingers and connectivity;
            neither holds at the pool deck. Wet Mode replaces precision taps with <strong>gross-motor swipe zones.</strong>
          </p>

          <div className="spec-grid mt-xl">
            <Spec n="≈196 × 400 pt" l="Min touch zone" note="≈136× WCAG 2.2 AA area · ≈40× Apple HIG" />
            <Spec n="16:1" l="Contrast ratio" note="Exceeds WCAG 2.2 AAA" />
            <Spec n="144 px" l="Display headline" note="Largest type in the product" />
            <Spec n="100%" l="Offline persistence" note="Architectural rule, not a feature" />
          </div>

          <p className="body mt-xl" style={{ maxWidth: 780, color: 'var(--foam-72)' }}>
            <strong style={{ color: 'var(--foam)' }}>Gesture grammar:</strong> swipe right = complete set ·
            swipe left = pause · swipe down (long) = exit Wet Mode. The 120 px swipe threshold protects against
            accidental triggers from water droplets and finger drag from goggle adjustment. The only Coral
            element on the entire surface is the <em>Complete</em> swipe zone.
          </p>

          <Figure
            num="05"
            title="Wet Mode — lo-fi standard vs. lo-fi Wet Mode side-by-side, hi-fi Wet Mode with annotations, and the four spec floors in dark methodology panel."
            src={window.__resources ? window.__resources.fig05 : "figures/fig-05-wet-mode.html"}
            height={1700}
          />
        </div>

        <div className="pillar-divider"></div>

        {/* Pillar 2 — Why Button */}
        <div className="pillar">
          <div className="pillar-head">
            <div className="pillar-num">Pillar 02</div>
            <div className="pillar-ratio">
              <span className="ratio-bar"><span className="ratio-sage" style={{ width: '95%' }}></span></span>
              <span className="ratio-label"><strong>95% Sage</strong> · 5% Hero</span>
            </div>
          </div>
          <h3 className="pillar-title">The "Why" button — depth on demand.</h3>
          <p className="body mt-md" style={{ maxWidth: 780, color: 'var(--foam-72)' }}>
            Cluster 4 from the research said cognitive fatigue, not physical fatigue, breaks adherence.
            The product responds with <strong>subtraction with redirection</strong> — depth lives one tap below the
            surface, not on it.
          </p>

          <div className="cols-2 cols-2--wide mt-xl">
            <div>
              <div className="label" style={{ color: 'var(--tide-soft)' }}>The "i" affordance</div>
              <p className="body mt-md">
                The <span className="mono" style={{ background: 'rgba(14,138,154,0.18)', color: 'var(--tide-soft)', padding: '2px 8px', borderRadius: 2 }}>i</span>
                {' '}button next to a metric label is <strong style={{ color: 'var(--foam)' }}>Tide-outlined,</strong>
                not Coral. Coral is reserved for <em style={{ color: 'var(--coral)' }}>productive gestures.</em>
                The "Why" is a Sage affordance — measured, never demanding.
              </p>
            </div>
            <div className="methodology" style={{ background: 'rgba(11,42,60,0.6)' }}>
              <div className="label">Citation methodology — four operating rules</div>
              <ol className="ordered-list mt-md">
                <li>Every mechanism cites a source — no generic "studies show".</li>
                <li>Primary text where it exists, canonical secondary text otherwise.</li>
                <li>One citation per concept — no citation pile-on.</li>
                <li>Citation is visible in-line, not footer-buried.</li>
              </ol>
              <div className="hr" style={{ margin: '24px 0', background: 'var(--foam-16)' }}></div>
              <div className="label">Example — the threshold modal citation</div>
              <p className="body mt-sm" style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 14.5 }}>
                Maglischo, E. W. (2003). <em>Swimming Fastest</em> (2nd ed.).<br />
                Champaign, IL: Human Kinetics, pp. 348–356.
              </p>
            </div>
          </div>

          <Figure
            num="06"
            title='The "Why" button — Screen A daily session · Screen B threshold modal with mechanism, prescription, and verifiable Maglischo (2003) citation.'
            src={window.__resources ? window.__resources.fig06 : "figures/fig-06-why-button.html"}
            height={1500}
          />
        </div>

        <div className="pillar-divider"></div>

        {/* Pillar 3 — Bilingual Onboarding */}
        <div className="pillar">
          <div className="pillar-head">
            <div className="pillar-num">Pillar 03</div>
            <div className="pillar-ratio">
              <span className="ratio-bar"><span className="ratio-sage" style={{ width: '45%' }}></span></span>
              <span className="ratio-label"><strong>55% Hero</strong> · 45% Sage</span>
            </div>
          </div>
          <h3 className="pillar-title">Bilingual app chrome — cultural design.</h3>
          <p className="body mt-md" style={{ maxWidth: 780, color: 'var(--foam-72)' }}>
            Language is a foundation type, not an onboarding setting. <strong style={{ color: 'var(--foam)' }}>176 authored
            EN/ES pairs across ten surfaces</strong> — buttons, headers, state words, empty states, settings captions,
            accessibility labels — follow the athlete's language choice. Onboarding is the flagship demonstration of
            the method, and the one shown below; 39 of those pairs live here, 137 are the rest of the app.
            <br /><br />
            Language is selected <strong style={{ color: 'var(--foam)' }}>before account creation.</strong>
            Both languages appear at equal visual weight, no default highlighted, no IP geolocation auto-pick.
            <br /><br />
            This is the only surface where <em style={{ color: 'var(--coral)' }}>Hero leads, briefly</em> —
            because the first warmth signal a new user receives has to be Hero. The boundary of the claim — what
            follows the toggle and what deliberately does not — is stated in <strong style={{ color: 'var(--foam)' }}>§06 Honesty.</strong>
          </p>

          <div className="cols-2 cols-2--wide mt-xl">
            <div className="lang-card">
              <div className="lang-tag">EN — locked Welcome line</div>
              <div className="lang-line">
                <em>"Built for athletes with lives."</em>
              </div>
            </div>
            <div className="lang-card">
              <div className="lang-tag">ES — locked Welcome line</div>
              <div className="lang-line">
                <em>"Hecho para quienes entrenan entre todo lo demás."</em>
              </div>
              <div className="lang-note">
                Different sentence structure. Same emotional payload. <strong>That is what parity means.</strong>
              </div>
            </div>
          </div>

          <Figure
            num="07"
            title="Bilingual onboarding sequence — Language · Welcome · Grit Calibration · Tuned, with back navigation on steps 02–04. ES parity panel with four operating rules."
            src={window.__resources ? window.__resources.fig07 : "figures/fig-07-onboarding.html"}
            height={1700}
          />
        </div>

        <div className="pillar-divider"></div>

        {/* Voice ratio map */}
        <div className="voice-map">
          <div className="eyebrow"><span className="num">→</span> The voice ratio map, across all five primary surfaces</div>
          <div className="voice-rows mt-lg">
            <VoiceRow surface="Wet Mode" sage={90} hero={10} note="Only Coral element: the Complete swipe zone." />
            <VoiceRow surface={'"Why" modal'} sage={95} hero={5} note="Zero motivational copy. Strongest Sage surface." />
            <VoiceRow surface="Onboarding Welcome" sage={45} hero={55} note="The only surface where Hero leads — briefly." />
            <VoiceRow surface="Daily session view" sage={80} hero={20} note="Workout card + the locked encouragement line." />
            <VoiceRow surface="Session Swapper" sage={60} hero={40} note="Empathy first, action second, reassurance third." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Spec({ n, l, note }) {
  return (
    <div className="spec">
      <div className="spec-n">{n}</div>
      <div className="spec-l">{l}</div>
      <div className="spec-note">{note}</div>
    </div>
  );
}

function VoiceRow({ surface, sage, hero, note }) {
  return (
    <div className="voice-row">
      <div className="voice-surface">{surface}</div>
      <div className="voice-bar">
        <span className="vb-sage" style={{ width: `${sage}%` }}></span>
        <span className="vb-hero" style={{ width: `${hero}%` }}></span>
      </div>
      <div className="voice-pct">
        <span className="vb-sage-pct">{sage}%</span>
        <span className="vb-hero-pct">{hero}%</span>
      </div>
      <div className="voice-note">{note}</div>
    </div>
  );
}

// ─── Section 6: Outcomes (with 2 variants) ────────────────────
function OutcomesSection({ variant = 'tiles' }) {
  return variant === 'spec' ? <OutcomesSpec /> : <OutcomesTiles />;
}

function OutcomesTiles() {
  return (
    <section id="outcomes" className="section section--paper" data-screen-label="06 Outcomes">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow"><span className="num">05</span> Expected Impact & How I'd Measure It</div>
          <h2 className="section-title">
            What I can claim. <em>What I can't.</em>
          </h2>
          <p className="section-deck">
            The PWA is functional but has not been launched to users — there are no outcomes yet, only
            evidence and hypotheses. Every claim below is tagged <strong>DOCUMENTED</strong> (verified
            against design files, not user data), <strong>EXPECTED</strong> (a hypothesis with an explicit
            measurement plan and falsification condition), or <strong>RECOMMENDED</strong> (a next step,
            not yet run).
          </p>
        </div>

        <div className="north-star mt-lg">
          <div className="badge badge--hypothesis"><span className="dot"></span>Recommended · proposed, unconfirmed</div>
          <div className="north-star-body mt-md">
            <div className="label">Proposed North Star</div>
            <h3 className="lead mt-sm">Adherence Consistency Index</h3>
            <p className="body mt-sm">
              % of weeks a user completes ≥80% of planned sessions <em>without a missed-week gap</em>,
              independent of pace or distance. It rewards showing up consistently over training hard,
              which is the thesis of the whole product. Atlan has no launched cohort yet, so this is a
              recommendation to validate in Stage 03 below — not a measured or committed metric.
            </p>
          </div>
        </div>

        <div className="outcome-tiles">
          {/* Tile 01 */}
          <article className="outcome-tile outcome-tile--measured">
            <div className="outcome-tag">
              <div className="badge badge--measured"><span className="dot"></span>Documented · Tile 01</div>
              <div className="mono outcome-id">01 / 03</div>
            </div>
            <h3 className="outcome-h">
              WCAG 2.2 AA across primary surfaces. <em>AAA on the high-stakes screen.</em>
            </h3>
            <div className="outcome-stats">
              <Numeric value="13.6:1" label="Abyss Navy on Foam" note="Exceeds AAA 7:1" tone="tide" />
              <Numeric value="16.3:1" label="Foam on Abyss-deep (Wet Mode)" note="Exceeds AAA 7:1" tone="coral" />
              <Numeric value="11.0:1" label="Foam on Abyss Light (--bg-2)" note="Exceeds AAA 7:1" tone="default" />
              <Numeric value="5.2:1" label="Coral on Abyss Navy" note="Above AA 4.5:1" tone="default" />
            </div>
            <p className="body mt-sm" style={{ fontSize: 12.5, color: 'var(--abyss-40)' }}>
              Method: WCAG 2.x relative luminance, computed from locked design tokens — not sampled from rendered screenshots.
            </p>
            <p className="body mt-lg">
              Source: contrast ratios verified against design tokens. Hex values:
              {' '}<span className="mono">#0B2A3C · #ECF7F8 · #061a26</span>.
            </p>
          </article>

          {/* Tile 02 */}
          <article className="outcome-tile">
            <div className="outcome-tag">
              <div className="badge badge--hypothesis"><span className="dot"></span>Expected · Tile 02</div>
              <div className="mono outcome-id">02 / 03</div>
            </div>
            <h3 className="outcome-h">
              A 90-day cohort using Atlan would show <em>≥15% higher session-completion adherence</em>
              {' '}than a TrainingPeaks-style control.
            </h3>
            <p className="body mt-md">
              Effect size grounded in the Teixeira et al. (2012) SDT meta-review — autonomy-supportive
              interventions produce 10–25% adherence improvements vs. controlling conditions in physical-activity contexts.
            </p>
            <div className="measurement-plan">
              <div className="label">Measurement plan</div>
              <ul className="bullets mt-md">
                <li><strong>Design:</strong> between-subjects cohort, random assignment, pre-registered before recruitment.</li>
                <li><strong>Participants:</strong> 30–50 per arm, recruited to Optimizer demographic.</li>
                <li><strong>Duration:</strong> 90+ days; primary metric uses weeks 7–12.</li>
                <li><strong>Primary metric:</strong> weekly session-completion rate, weeks 7–12.</li>
                <li><strong>Statistics:</strong> α = 0.05, power = 0.80.</li>
              </ul>
              <p className="body mt-md" style={{ fontSize: 13.5 }}>
                <strong>Falsification:</strong> if the 95% CI for the difference crosses zero, the hypothesis is rejected.
              </p>
            </div>
          </article>

          {/* Tile 03 */}
          <article className="outcome-tile">
            <div className="outcome-tag">
              <div className="badge badge--hypothesis"><span className="dot"></span>Expected · Tile 03</div>
              <div className="mono outcome-id">03 / 03</div>
            </div>
            <h3 className="outcome-h">
              Users with wet hands inside a waterproof pouch complete "mark set complete" in Wet Mode
              {' '}<em>≥40% faster</em> than in a standard mobile interface.
            </h3>
            <p className="body mt-md">
              Lower error rate, too — predicted from the ≈196 × 400 pt touch-zone floor and the
              one-direction swipe gesture grammar that Wet Mode commits to.
            </p>
            <div className="measurement-plan">
              <div className="label">Measurement plan</div>
              <ul className="bullets mt-md">
                <li><strong>Design:</strong> within-subjects counterbalanced.</li>
                <li><strong>Participants:</strong> 12–18, real pool deck, wet hands, sun glare condition.</li>
                <li><strong>Primary metric:</strong> time-to-completion across 5 consecutive sets.</li>
                <li><strong>Secondary:</strong> error rate (false-positive set completes; missed completes).</li>
              </ul>
              <p className="body mt-md" style={{ fontSize: 13.5 }}>
                <strong>Falsification:</strong> if the within-subjects mean delta is &lt; 40% OR error rates equalize,
                the hypothesis is rejected.
              </p>
            </div>
          </article>
        </div>

        <div className="hr"></div>

        <div className="roadmap">
          <div className="eyebrow"><span className="num">→</span> Validation roadmap · Recommended, not yet run</div>
          <h3 className="lead mt-md">Five stages, sequenced by empirical cost.</h3>
          <div className="roadmap-stages mt-xl">
            <Stage n="01" title="Closed beta" detail="5–8 recruited Optimizer-demographic participants. Two weeks. Smoke test for the Wet Mode and Why button affordances." />
            <Stage n="02" title="Wet Mode in-environment study" detail="Tile 03 above. Real pool, wet hands, real sun. 12–18 participants. Time-to-action + error rate." />
            <Stage n="03" title="90-day adherence cohort" detail="Tile 02 above. Between-subjects, 30–50 per arm, pre-registered. The expensive one." />
            <Stage n="04" title="Bilingual cohort sub-analysis" detail="From Stage 03 data: parity of completion rate between ES-primary and EN-primary users." />
            <Stage n="05" title="SME audit of citations" detail="Every 'Why' modal citation audited by a subject-matter expert. Stage 5, not stage 1, because the citations need to ship first to be audited." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Numeric({ value, label, note, tone = 'default' }) {
  return (
    <div className="numeric">
      <div className={`numeric-value ${tone === 'coral' ? 'coral' : ''} ${tone === 'tide' ? 'tide' : ''}`}>{value}</div>
      <div className="numeric-label">{label}</div>
      <div className="numeric-note">{note}</div>
    </div>
  );
}

function Stage({ n, title, detail }) {
  return (
    <div className="stage">
      <div className="stage-n">{n}</div>
      <div>
        <div className="stage-title">{title}</div>
        <div className="stage-detail">{detail}</div>
      </div>
    </div>
  );
}

// Outcomes — Spec variant
function OutcomesSpec() {
  return (
    <section id="outcomes" className="section section--abyss" data-screen-label="06 Outcomes">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow"><span className="num">05</span> Expected Impact & How I'd Measure It</div>
          <h2 className="section-title">
            What I can claim. <em>What I can't.</em>
          </h2>
          <p className="section-deck">
            Three claims: one documented, two expected. Every claim carries either a source artifact
            or an explicit measurement plan with a falsification condition. The North Star metric this
            product should be judged on is proposed, not yet confirmed — see the tiles view.
          </p>
        </div>

        <div className="outcome-spec">
          <SpecRow
            id="01"
            badge="measured"
            claim="WCAG 2.2 AA across primary surfaces; AAA on the high-stakes screen."
            measures={[
              ['Abyss Navy on Foam', '13.6:1', 'Exceeds AAA 7:1'],
              ['Foam on Abyss-deep (Wet Mode)', '16.3:1', 'Exceeds AAA 7:1'],
              ['Foam on Abyss Light (--bg-2)', '11.0:1', 'Exceeds AAA 7:1'],
              ['Coral on Abyss Navy', '5.2:1', 'Above AA 4.5:1'],
            ]}
            ground="Method: WCAG 2.x relative luminance, computed from locked design tokens — not sampled from rendered screenshots."
            source="Source: contrast ratios verified against design tokens."
          />
          <SpecRow
            id="02"
            badge="hypothesis"
            claim="A 90-day cohort using Atlan would show ≥15% higher session-completion adherence than a TrainingPeaks-style control."
            plan={[
              'Between-subjects cohort · random assignment · pre-registered.',
              '30–50 participants per arm · Optimizer demographic.',
              '90+ days · primary metric uses weeks 7–12.',
              'Primary: weekly session-completion rate.',
              'α = 0.05 · power = 0.80.',
            ]}
            falsification="If the 95% CI for the difference crosses zero, the hypothesis is rejected."
            ground="Effect size grounded in Teixeira et al. (2012) SDT meta-review — 10–25% adherence improvements from autonomy-supportive interventions."
          />
          <SpecRow
            id="03"
            badge="hypothesis"
            claim={'Users with wet hands inside a waterproof pouch complete "mark set complete" in Wet Mode ≥40% faster than a standard mobile interface — with lower error rate.'}
            plan={[
              'Within-subjects counterbalanced.',
              '12–18 participants · real pool deck.',
              'Wet hands · sun glare condition.',
              'Primary: time-to-completion across 5 sets.',
              'Secondary: error rate (false-positive completes; missed completes).',
            ]}
            falsification="If the within-subjects mean delta is < 40% OR error rates equalize, the hypothesis is rejected."
          />
        </div>

        <div className="hr"></div>

        <div className="roadmap">
          <div className="eyebrow"><span className="num">→</span> Validation roadmap · Recommended, not yet run</div>
          <h3 className="lead mt-md">Five stages, sequenced by empirical cost.</h3>
          <div className="roadmap-stages mt-xl">
            <Stage n="01" title="Closed beta" detail="5–8 recruited Optimizer-demographic participants." />
            <Stage n="02" title="Wet Mode in-environment study" detail="Real pool, wet hands. Time-to-action + error rate." />
            <Stage n="03" title="90-day adherence cohort" detail="Between-subjects, 30–50/arm, pre-registered." />
            <Stage n="04" title="Bilingual cohort sub-analysis" detail="From Stage 03 data: parity between ES-primary and EN-primary." />
            <Stage n="05" title="SME audit of citations" detail="Every 'Why' modal citation audited by an SME." />
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecRow({ id, badge, claim, measures, plan, falsification, source, ground }) {
  const badgeLabel = badge === 'measured' ? 'Documented' : badge === 'hypothesis' ? 'Expected' : badge;
  return (
    <article className="spec-row">
      <div className="spec-row-side">
        <div className={`badge badge--${badge}`}><span className="dot"></span>{badgeLabel}</div>
        <div className="mono spec-row-id">Tile {id}</div>
      </div>
      <div className="spec-row-main">
        <h3 className="spec-row-claim">{claim}</h3>
        {ground && <p className="body mt-md">{ground}</p>}
        {measures && (
          <div className="measure-list mt-lg">
            {measures.map(([k, v, n]) => (
              <div className="measure-row" key={k}>
                <div className="measure-k">{k}</div>
                <div className="measure-v">{v}</div>
                <div className="measure-n">{n}</div>
              </div>
            ))}
          </div>
        )}
        {plan && (
          <div className="methodology mt-lg">
            <div className="label">Measurement plan</div>
            <ul className="bullets mt-md">
              {plan.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
            {falsification && <p className="body mt-md" style={{ fontSize: 13.5 }}><strong>Falsification:</strong> {falsification}</p>}
          </div>
        )}
        {source && <p className="body mt-md" style={{ fontSize: 13.5, color: 'var(--abyss-56)' }}>{source}</p>}
      </div>
    </article>
  );
}

// ─── Section 7: Honesty & Disclosure ──────────────────────────
function HonestySection() {
  return (
    <section id="honesty" className="section section--abyss-deep" data-screen-label="07 Honesty & Disclosure">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow"><span className="num">06</span> Honesty &amp; Disclosure</div>
          <h2 className="section-title">
            <em>The case study reads as confidently honest,</em><br />
            or it doesn't read at all.
          </h2>
        </div>

        <div className="honesty-block" style={{ borderLeftColor: 'var(--coral)' }}>
          <div className="label" style={{ color: 'var(--coral)' }}>Global honesty block</div>
          <p className="body mt-md" style={{ maxWidth: 820 }}>
            Atlan Performance is a <strong>self-initiated UX concept project.</strong> The PWA is functional
            but has not been launched to users. The persona is a synthesis from secondary research and
            informal conversations — not from a recruited research panel. No quote in this case study is
            attributed to an individual. Numeric claims are tagged <strong>MEASURED</strong> or
            <strong>{' '}HYPOTHESIS</strong>; hypotheses ship with an explicit measurement plan and a
            falsification condition.
          </p>
        </div>

        <div className="cols-2 cols-2--wide mt-2xl">
          <div>
            <div className="eyebrow"><span className="num">→</span> AI-assistance disclosure</div>
            <h3 className="lead mt-md">Acceleration, not authorship.</h3>
            <p className="body mt-md">
              The implementation of this PWA used <strong>Cursor</strong>, <strong>Claude Code</strong>,
              and <strong>Codex</strong> as code-acceleration tools. The case study's web page and deck
              use Claude Design as a layout-and-render tool.
            </p>
            <p className="body">
              <strong>Strategy, IA, persona, voice rules, the reframe, the three pillars, the
              measurement plans, and every operating rule in this document — those are mine.</strong>
              {' '}AI accelerated implementation; AI did not author design strategy.
            </p>
          </div>
          <div>
            <div className="eyebrow"><span className="num">→</span> Persona & citation disclosures</div>
            <ul className="bullets mt-md">
              <li><strong>Persona.</strong> Composite synthesis. No quote attributed to an individual. Sources: SDT literature, adherence research, app-store reviews, forum threads, informal conversations.</li>
              <li><strong>Banned phrases reproduced in Fig. 03.</strong> The competitor track of the journey map deliberately reproduces "Streak broken", "[MISSED]", and "1 day behind plan." This is the language Atlan is designed against; the contrast is intentional and disclosed.</li>
              <li><strong>Citations.</strong> Every "Why" modal citation is real and verifiable. Maglischo (2003) is the threshold-modal citation; the four citation methodology rules are operating commitments, not aspirations.</li>
              <li><strong>Teixeira et al. (2012)</strong> is a research citation for the SDT effect-size range in Tile 02 — not an Atlan-measured outcome.</li>
              <li><strong>The bilingual boundary.</strong> Every word the app says is bilingual; every word the coach says is theirs. App chrome — 176 authored EN/ES pairs across ten surfaces — follows the athlete's language choice. Coach messages and session prescriptions stay in the language they were written in, because a training prescription is not chrome and machine-translating one would be a safety claim this product has not earned. Atlan is not "fully bilingual," and this case study does not claim it is.</li>
            </ul>
          </div>
        </div>

        <div className="hr"></div>

        <div className="cols-2 cols-2--wide">
          <div>
            <div className="eyebrow"><span className="num">→</span> What's not in scope</div>
            <ul className="bullets mt-md">
              <li>A recruited research panel and formal moderated interviews — secondary literature only.</li>
              <li>HealthKit / Health Connect deep integration — limited under PWA architecture.</li>
              <li>A coaches-marketplace layer — distinct product surface, intentionally separate.</li>
              <li>Live retention data — the PWA has not been launched to users.</li>
              <li>A Spanish version of this case study — the product is bilingual; the case study is English-only by lock from Phase 1.</li>
            </ul>
          </div>
          <div>
            <div className="eyebrow"><span className="num">→</span> What I'd do differently</div>
            <ol className="ordered-list mt-md">
              <li>Recruit 5–8 Optimizer-demographic participants and run unstructured interviews <em>before</em> locking the persona, not after.</li>
              <li>Run the Wet Mode time-to-action study during, not after, the Wet Mode design.</li>
              <li>Get a Spanish-native copy editor onto the Spanish before the surface area grew. The authored-pairs method is sound; the specific word choices in the 137 pairs outside onboarding are one designer's Spanish and should not be treated as final. This is the highest-value open action on the project.</li>
              <li>Spend time on a summary form of the case study, not just the full form.</li>
            </ol>
          </div>
        </div>

        <div className="hr"></div>

        <div className="closing closing--with-photo">
          <div className="closing-photo">
            <img src={window.__resources ? window.__resources.closingPhoto : "assets/photography/fig-closing-pooldeck-quiet.png"} alt="A solitary athlete on the pool deck at sunrise, looking out across the lanes" />
            <div className="closing-photo-veil"></div>
          </div>
          <div className="closing-photo-content">
            <div className="hero-tick" style={{ marginBottom: 32 }}></div>
            <div className="closing-quote">
              <em>"The case study reads as confidently honest, or it doesn't read at all.<br />
              The next step is a recruited cohort. The next step after that is the data."</em>
            </div>
            <div className="closing-sig">
              <div className="closing-name">Edgar Bonilla</div>
              <div className="closing-meta">May 2026 · <a href="mailto:erbonilla@outlook.com" className="link">erbonilla@outlook.com</a></div>
            </div>
          </div>
        </div>

        <footer className="page-foot">
          <div className="foot-left">
            <img className="foot-mark-img" src={window.__resources ? window.__resources.atlanLogo : "assets/atlan_logo_bk.svg"} alt="Atlan" width="64" height="64" />
            <div>
              <div className="rail-logo" style={{ color: 'var(--foam)' }}>atlan<span className="dot">.</span></div>
              <div className="rail-sub" style={{ color: 'var(--tide-soft)' }}>Performance · Liquid Precision &amp; The Quiet Sage</div>
            </div>
          </div>
          <div className="foot-right">
            <a href="Atlan Deck.html" className="link">View the deck<svg width="11" height="11" viewBox="0 0 11 11" fill="none" style={{ display: 'inline-block', marginLeft: 5, verticalAlign: -1 }} aria-hidden="true"><path d="M3 1.5L8 5.5L3 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
            <span className="mono" style={{ color: 'var(--foam-40)' }}>v0.1 · May 2026</span>
          </div>
        </footer>
      </div>
    </section>
  );
}

window.SolutionSection = SolutionSection;
window.OutcomesSection = OutcomesSection;
window.HonestySection = HonestySection;
