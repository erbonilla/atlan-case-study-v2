/* global React, ReactDOM, TopBar, CsHero, SixtySecondCase, DecisionSpine, ThreeDecisions, SystemDetail, EvidencePlan, Reflection, CreditsCondensed, CondensedFooter */
function App() {
  return (
    <React.Fragment>
      <TopBar />
      <CsHero />
      <SixtySecondCase />
      <DecisionSpine />
      <ThreeDecisions />
      <SystemDetail />
      <EvidencePlan />
      <Reflection />
      <CreditsCondensed />
      <CondensedFooter />
    </React.Fragment>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
