import ChapterWorkspace from "../components/chapter-workspace";

export default function Home() {
  return (
    <main className="shell" id="top">
      <header className="topbar">
        <a className="brand" href="#top"><span className="brand-icon" aria-hidden="true">✳</span><span>ML Playground<small>Learn by experimenting</small></span></a>
        <span className="top-note">An interactive learning workspace</span>
      </header>
      <ChapterWorkspace />
      <footer>ML Playground <span>·</span> Learn the concepts, one experiment at a time.</footer>
    </main>
  );
}
