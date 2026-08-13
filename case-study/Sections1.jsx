/* global React, Figure */
// Atlan Case Study — Sections 2 (Problem), 3 (Persona), 4 (Process)

// ─── Section 2: Problem & Context ─────────────────────────────
function ProblemSection() {
  return (
    <section id="problem" className="section section--paper" data-screen-label="02 Problem & Context">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">
            <span className="num">01</span> Problem &amp; Context
          </div>
          <h2 className="section-title">
            The endurance-tech market has solved two problems well, and <em>neither of them</em> is The Optimizer's.
          </h2>
          <p className="section-deck">
            Deep-science platforms bury users in periodization telemetry. Social-tracking platforms
            gamify training into public performance. The Optimizer needs both sides — the rigor <em>and</em>
            the adherence support — and neither product is built for them.
          </p>
        </div>

        <div className="cols-2 cols-2--wide">
          <div>
            <div className="label mb-md">The two existing positions</div>
            <ul className="bullets">
              <li><strong>Deep-science platforms</strong> (TrainingPeaks) assume the user has the bandwidth to interpret a CTL/ATL/TSB curve at 9 PM. They have the rigor; they lack the empathy.</li>
              <li><strong>Social-tracking platforms</strong> (Strava) use kudos, streaks, and leaderboards as the adherence mechanism. They have the warmth; they lack the depth.</li>
              <li><strong>Swim-specific apps</strong> (MySwimPro) split the difference; they do not anchor either pole.</li>
              <li><strong>Sensor companions</strong> (FORM) measure beautifully but do not coach.</li>
            </ul>
          </div>
          <div>
            <div className="label mb-md">What The Optimizer actually wants</div>
            <ul className="bullets bullets--coral">
              <li><strong>Periodization without the cognitive load.</strong> Depth on demand, not depth on display.</li>
              <li><strong>Adherence support without leaderboard pressure.</strong> Autonomy, not surveillance.</li>
              <li><strong>A plan that adapts when life moves the plan.</strong> Not a plan that turns red when life intervenes.</li>
              <li><strong>Respect for two languages and two contexts</strong> — pool deck and laptop, 5:30 AM and 9 PM.</li>
            </ul>
          </div>
        </div>

        <Figure
          num="01"
          title="Where the gap sits — a competitive 2×2 across scientific depth and adherence model. The upper-right quadrant is empty."
          src={window.__resources ? window.__resources.fig01 : "figures/fig-01-competitive.html"}
          height={1080}
        />

        <div className="pullquote mt-2xl">
          The upper-right quadrant — Deep <em>and</em> Autonomy-supportive — is empty.
          That's where Atlan sits. The case study has to earn it.
        </div>

        <div className="hr"></div>

        <div className="cols-2 cols-2--wide">
          <div>
            <div className="eyebrow"><span className="num">→</span> The opening scenario</div>
            <h3 className="lead mt-md">"The meeting ran late."</h3>
            <p className="body mt-md">
              Across the rest of this case study, the design is interrogated against one specific moment:
              the user is supposed to swim at 6 AM tomorrow. The 9 PM meeting just ran 45 minutes long.
              The plan they paid for is now suddenly wrong. <strong>What does the product do?</strong>
            </p>
            <p className="body">
              Every product on the market treats this as a fail-state. The strategic reframe
              (Section&nbsp;03) treats it as the default state — and Atlan's job is to absorb it silently.
            </p>
          </div>
          <div className="methodology">
            <div className="label">Disclosure — what this section is not</div>
            <p className="body mt-md">
              The 2×2 in Fig.&nbsp;01 names four competitors directly. It also names <strong>three out-of-scope categories</strong>
              (consumer wearables, recovery apps, marketplace coaching platforms) and <strong>five omissions</strong>
              (TrueCoach, Final Surge, Garmin Coach, Zwift, Whoop Coach).
            </p>
            <p className="body">
              These are competitive teardown notes, not market-share claims. I had no access to retention curves,
              ARPU, or churn data for any of these products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 3: Persona & Research ────────────────────────────
function PersonaSection() {
  return (
    <section id="persona" className="section" data-screen-label="03 Persona & Research">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">
            <span className="num">02</span> Persona &amp; Research
          </div>
          <h2 className="section-title">
            The Optimizer is a synthesis. <em>Synthesis, not ethnography.</em>
          </h2>
        </div>

        <div className="honesty-block">
          <div className="label" style={{ color: 'var(--coral)' }}>Research-honesty disclosure</div>
          <p className="body mt-md" style={{ maxWidth: 780 }}>
            The Optimizer is a synthesis persona built from <strong>secondary research</strong> (Self-Determination Theory;
            adherence literature in endurance sports; app-store reviews and forum threads on TrainingPeaks, Strava,
            and MySwimPro) and <strong>informal conversations with athletes in my network.</strong>
          </p>
          <p className="body">
            I did <strong>not</strong> run formal moderated interviews or recruit a research panel.
            The persona is presented as <em>synthesis</em>, not ethnography. No quote in this case study
            is attributed to an individual.
          </p>
        </div>

        <div className="cols-2 cols-2--wide mt-2xl">
          <div>
            <div className="eyebrow"><span className="num">→</span> The headline insight</div>
            <div className="pullquote mt-md">
              The Optimizer is not deficient on drive or discipline. They are deficient on <em>alignment</em>
              between the two — and the dominant cost driving that misalignment is <em>cognitive,</em> not physical, fatigue.
            </div>
          </div>
          <div>
            <div className="label mb-md">Demographics</div>
            <ul className="bullets">
              <li>Executive athlete, <strong>30–50</strong>, mid-to-senior professional role</li>
              <li>Trains <strong>8–12 hours/week</strong> — committed but amateur, past beginner phase</li>
              <li><strong>3–10 years</strong> in sport; high tech literacy; tried TrainingPeaks, Strava, swim-specific apps</li>
              <li>Bilingual <strong>ES/EN</strong> — both languages used across the week</li>
              <li>High disposable income; pays premium for time savings or sharper results</li>
            </ul>
          </div>
        </div>

        <Figure
          num="02"
          title="The Optimizer — strategic persona card with synthesis disclosure footer."
          src={window.__resources ? window.__resources.fig02 : "figures/fig-02-persona.html"}
          height={1340}
        />

        <div className="cols-2 cols-2--wide mt-2xl">
          <div>
            <div className="label mb-md">What they value</div>
            <ul className="bullets">
              <li>Scientific rigor</li>
              <li>Time efficiency</li>
              <li>Adaptability to real life</li>
              <li>Sustainable consistency</li>
              <li>Bilingual respect</li>
            </ul>
          </div>
          <div>
            <div className="label mb-md">What breaks them</div>
            <ul className="bullets bullets--coral">
              <li>Shaming / fail-state copy</li>
              <li>Cluttered decision-heavy dashboards</li>
              <li>Consumer-fitness gamification</li>
              <li>Rigid scheduling</li>
              <li>Apps that don't work poolside</li>
            </ul>
          </div>
        </div>

        <div className="hr"></div>

        <div className="cols-2 cols-2--wide">
          <div>
            <div className="eyebrow"><span className="num">→</span> Synthesized voice (composite)</div>
            <div className="pullquote pullquote--small mt-md">
              I don't need more motivation. I need <em>less guilt</em> when life intervenes.
            </div>
            <div className="pullquote pullquote--small mt-lg">
              Just tell me <em>why</em> this drill matters. I can handle the science — I just don't have
              time to look it up.
            </div>
            <p className="body mt-md" style={{ fontSize: 13, color: 'var(--abyss-56)' }}>
              Composite voice patterns from secondary research and informal conversations.
              Not attributed to any individual.
            </p>
          </div>
          <div>
            <div className="eyebrow"><span className="num">→</span> The anti-persona</div>
            <h3 className="lead mt-md">Who Atlan is not for.</h3>
            <p className="body mt-md">
              <strong>The Streaker</strong> — motivated by leaderboards, kudos, and unbroken-streak streaks.
              They are well served by Strava. Adding Streak language to Atlan would dilute the
              autonomy-supportive frame and chase the wrong adherence mechanism.
            </p>
            <p className="body">
              <strong>The Coach-Client</strong> — has a paid human coach and uses TrainingPeaks as a
              prescription delivery layer. Their adherence problem is solved by accountability,
              not by autonomy support.
            </p>
            <p className="body">
              <strong>The Sprint Beginner</strong> — under 18 months in sport, still building the discipline
              base. They need a coach, a clinic, or a beginner-graded product. Atlan assumes a 3–10 year
              base; everything in the IA does.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 4: Process & Ideation ────────────────────────────
function ProcessSection() {
  return (
    <section id="process" className="section section--paper" data-screen-label="04 Process & Ideation">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">
            <span className="num">03</span> Process &amp; Ideation
          </div>
          <h2 className="section-title">
            One sentence collapsed dozens of competing screens into a <em>single strategic question.</em>
          </h2>
        </div>

        <div className="pullquote" style={{ fontSize: 'clamp(28px, 3.4vw, 40px)' }}>
          Life-interruption is the <em>default state</em> for this user, not the exception.
          The product's job is to <em>absorb disruption silently,</em> not to mark it red.
          <span className="pullquote-attribution">The reframe that did the work</span>
        </div>

        <p className="body mt-2xl" style={{ maxWidth: 760 }}>
          From that single sentence, the question every screen has to answer becomes:
          <em> what is the cheapest possible interaction that lets the user keep training when the week breaks?</em>
          Every IA decision in the product descends from this reframe. The next two figures are how
          it shows up — first as a journey, then as a dashboard.
        </p>

        <div className="hr"></div>

        <div className="cols-2 cols-2--wide">
          <div>
            <div className="eyebrow"><span className="num">→</span> Platform choice</div>
            <h3 className="lead mt-md">Why a mobile app, offline-first.</h3>
            <p className="body mt-md">
              <strong>The pool locker room has no cellular signal.</strong> An offline-first mobile app
              caches its data locally and loads instantly from storage. Connection-dependent apps
              assume signal.
            </p>
            <p className="body">
              <strong>Cross-device continuity.</strong> Phone at 5:30 AM, laptop at 9 PM — same product,
              no install.
            </p>
            <p className="body">
              <strong>App-store bypass.</strong> The app installs from a URL — no store review, no download.
            </p>
          </div>
          <div>
            <div className="label mb-md">Trade-offs accepted</div>
            <ul className="bullets">
              <li>Native gestures slightly less crisp than a true native app.</li>
              <li>iOS push notifications constrained by Safari for web-installed apps.</li>
              <li>HealthKit deep integration limited; we rely on manual entry and webview HRM bridges.</li>
            </ul>
            <p className="body mt-lg" style={{ fontSize: 13.5, color: 'var(--abyss-56)' }}>
              The three constraints above were named before the build, not discovered during it.
              They are the price of the web-based mobile-app choice.
            </p>
          </div>
        </div>

        <Figure
          num="03"
          title='Journey map — "The meeting ran late." Dual track: competitor pressure-frame vs. Atlan Session Swapper.'
          src={window.__resources ? window.__resources.fig03 : "figures/fig-03-journey.html"}
          height={1280}
        />

        <div className="honesty-block mt-2xl">
          <div className="label" style={{ color: 'var(--coral)' }}>Disclosure — banned phrases reproduced inside Fig. 03</div>
          <p className="body mt-md">
            The competitor track in Fig. 03 deliberately reproduces banned voice patterns:
            "Streak broken," the red <span className="mono" style={{ background: 'var(--coral)', color: 'var(--foam)', padding: '2px 8px', borderRadius: 2, fontSize: 11 }}>[MISSED]</span> pill,
            "You're 1 day behind plan." This is the language Atlan is designed <em>against.</em>
            The contrast is the artifact's core argument; the reproduction is intentional and disclosed.
          </p>
        </div>

        <div className="hr"></div>

        <div className="cols-2 cols-2--wide">
          <div>
            <div className="eyebrow"><span className="num">→</span> The Session Swapper</div>
            <h3 className="lead mt-md">Three properties. One gesture. Silent recalc.</h3>
            <p className="body mt-md">
              <strong>1 — Notification-reachable.</strong> The Swapper meets the user where the disruption arrives:
              push or in-app banner. No deep-link surgery.
            </p>
            <p className="body">
              <strong>2 — One-gesture commit.</strong> Swipe to accept the alternative session, or tap "Skip today."
              Neither path is a fail-state. Both update the plan.
            </p>
            <p className="body">
              <strong>3 — Silent recalc.</strong> The week's periodization rebalances without exposing the math.
              Depth on demand: tap the metric label to see the rebalanced load.
            </p>
          </div>
          <div className="methodology">
            <div className="label">Locked notification copy</div>
            <p className="body mt-md" style={{ fontStyle: 'italic', fontFamily: 'var(--display)', fontSize: 18 }}>
              "Life happens. Want to swap tomorrow's 6 AM threshold set for a 30-minute easy aerobic
              on Wednesday? The week still works."
            </p>
            <div className="hr" style={{ margin: '24px 0', background: 'var(--foam-16)' }}></div>
            <p className="body" style={{ fontSize: 13.5 }}>
              Locked from Phase 2 voice review. Sage 60 / Hero 40 on this surface — an explicit
              override of the 90/10 peak that governs the rest of the product — empathy first
              ("Life happens"), action second ("Want to swap"), reassurance third ("The week still works").
            </p>
            <div className="hr" style={{ margin: '24px 0', background: 'var(--foam-16)' }}></div>
            <div className="label">ES parity — same notification</div>
            <p className="body mt-md" style={{ fontStyle: 'italic', fontFamily: 'var(--display)', fontSize: 18 }}>
              "La vida pasa así. ¿Cambiamos el set de umbral de las 6 AM de mañana por 30 minutos
              aeróbicos suaves el miércoles? La semana sigue funcionando."
            </p>
            <p className="body mt-sm" style={{ fontSize: 13 }}>
              This replaced a first-pass Spanish rewrite that translated the English sentence structure
              literally and lost the reassurance beat — one of the discarded passes named below.
            </p>
          </div>
        </div>

        <Figure
          num="04"
          title="Before / After dashboard — 21 elements → 6, 5 charts → 1, 4 pressure mechanics → 0, 0 'Why' affordances → 4. Subtraction as a design move."
          src={window.__resources ? window.__resources.fig04 : "figures/fig-04-before-after.html"}
          height={1640}
        />

        <div className="cols-2 cols-2--wide mt-2xl">
          <div>
            <div className="eyebrow"><span className="num">→</span> The dashboard reframe</div>
            <h3 className="lead mt-md">Subtraction with redirection, not minimalism.</h3>
            <p className="body mt-md">
              The dashboard was not redesigned to be <em>simpler.</em> It was redesigned around one question:
              <strong> what does the user need to decide in the next ten seconds?</strong> Everything else
              moves one tap below the surface.
            </p>
            <p className="body">
              The "Why" affordances (four of them, all newly added) are the redirection.
              Depth did not get deleted; it got <em>relocated.</em>
            </p>
          </div>
          <div className="methodology">
            <div className="label">What this section doesn't show</div>
            <ul className="bullets" style={{ marginTop: 14 }}>
              <li>The discarded IA explorations: a calendar-first frame, a programs-first frame, a metrics-first frame.</li>
              <li>The two earlier Wet Mode prototypes that were ergonomically wrong.</li>
              <li>The Spanish copy versions that landed too literal and were rewritten in parallel.</li>
              <li>The four-week sprint where the periodization math was wrong and the dashboard lied.</li>
            </ul>
            <p className="body mt-md" style={{ fontSize: 13.5 }}>
              Process is selective by definition. The selection is mine; the alternatives existed.
            </p>
          </div>
        </div>

        <div className="decision-narrative mt-2xl">
          <div className="eyebrow"><span className="num">→</span> A decision, traced</div>
          <h3 className="lead mt-md">The Session Swapper, start to finish.</h3>
          <div className="decision-narrative-body mt-lg">
            <p>
              The brief for this feature started as "let the user edit their schedule when something comes up" —
              which is what TrainingPeaks and most training platforms already do with a drag-and-drop calendar.
              I built that version first: a <strong>calendar-first IA</strong> where the whole app organized around
              a monthly grid, sessions as draggable blocks. It technically worked. It also felt like the exact
              product this project was reacting against — a scheduling tool that happens to have workouts in it,
              not a coach.
            </p>
            <p>
              I tried two more frames before the reframe. A <strong>programs-first IA</strong> organized everything
              under named training blocks (Base, Build, Peak) — clean in principle, but it buried the one thing
              the Optimizer actually opens the app to do: see today. A <strong>metrics-first IA</strong> led with
              charts — HRV, pace, load — and made the app read like a dashboard for a coach, not an athlete managing
              their own week. Both were discarded for the same reason: they answered a question ("how is my
              training structured?") the user wasn't asking at the moment of disruption.
            </p>
            <p>
              The pivot came from the reframe sentence: <em>life-interruption is the default state, not the
              exception.</em> If that's true, the feature isn't "edit my schedule" — it's "tell me, in one gesture,
              that missing the 6 AM threshold set doesn't break the week." That's a notification-reachable,
              one-gesture commit, not an IA. It also meant the "Why" affordances I'd already been sketching for
              the dashboard didn't get deleted when I subtracted the calendar and metrics views — they got
              <strong> relocated</strong> one tap below the surface, available on demand instead of always-on.
              Subtraction with redirection, not simplification.
            </p>
            <p>
              What I traded for it: native swipe gestures are slightly less crisp inside a web-based mobile app
              than in a compiled native app; iOS constrains how the Swapper's push notification can behave
              versus a native push; and HealthKit-depth data that would make the "silent recalc" smarter isn't
              available under this architecture, so the recalculation logic is simpler than I'd want in a v2.
              Those three constraints were named before the build started, not discovered partway through —
              they're the price of the offline-first mobile-app decision made in Process, not a surprise that
              arrived later.
            </p>
            <p>
              What I kept: the one-gesture commit, the "Skip today" path treated as a legitimate outcome rather
              than a failure state, and the locked notification copy — "Life happens. Want to swap tomorrow's
              6 AM threshold set for a 30-minute easy aerobic on Wednesday? The week still works." — which is
              the only surface in the product where the voice mix deliberately shifts to Sage 60 / Hero 40.
              Three discarded IAs and two rejected gesture models is a lot of process to arrive at one sentence
              and one swipe. That's the point: the sentence is the deliverable, and it took the discarding to get there.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

window.ProblemSection = ProblemSection;
window.PersonaSection = PersonaSection;
window.ProcessSection = ProcessSection;
