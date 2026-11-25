import FitLine from "../components/fit-line";
import LearningLab from "../components/learning-lab";

export default function Home() {
  return (
    <main className="shell">
      <header className="topbar"><a className="brand" href="#top"><span className="brand-icon">✳</span> ML Playground</a><span className="top-note">LEARN BY EXPERIMENTING</span></header>
      <div id="top" className="intro"><div className="eyebrow"><span /> YOUR INTERACTIVE ML WORKSPACE</div><h1>Understand the idea.<br /><em>Then play with it.</em></h1><p>Build intuition for machine learning, one experiment at a time. Change a variable, see what happens, and learn by doing.</p></div>
      <section className="lesson" aria-labelledby="lesson-title">
        <div className="lesson-heading"><div><div className="section-label">YOUR FIRST EXPERIMENT <span>·</span> REGRESSION</div><h2 id="lesson-title">Fit a line</h2><p>How can a model learn the relationship between two variables?</p></div><span className="level">Beginner friendly</span></div>
        <FitLine />
        <div className="lesson-bottom"><div><span className="step">01</span><h3>Make a prediction</h3><p>The line is the model. Its height at each point is its prediction.</p></div><div><span className="step">02</span><h3>Measure the error</h3><p>The dotted gaps are mistakes. Mean squared error combines them into one score.</p></div><div><span className="step">03</span><h3>Let it learn</h3><p>Try adjusting the sliders, then use training steps to improve the fit.</p></div></div>
      </section>
      <LearningLab />
      <footer>ML Playground <span>·</span> Learn the concepts, not just the code.</footer>
    </main>
  );
}
