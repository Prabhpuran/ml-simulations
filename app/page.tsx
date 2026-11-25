import LearningLab from "../components/learning-lab";

export default function Home() {
  return (
    <main className="shell">
      <header className="topbar"><a className="brand" href="#top"><span className="brand-icon">✳</span> ML Playground</a><span className="top-note">LEARN BY EXPERIMENTING</span></header>
      <div id="top" className="intro"><div className="eyebrow"><span /> YOUR INTERACTIVE ML WORKSPACE</div><h1>Understand the idea.<br /><em>Then play with it.</em></h1><p>Build intuition for machine learning, one experiment at a time. Change a variable, see what happens, and learn by doing.</p></div>
      <LearningLab />
      <footer>ML Playground <span>·</span> Learn the concepts, not just the code.</footer>
    </main>
  );
}
