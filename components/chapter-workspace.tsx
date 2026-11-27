"use client";

import { useState } from "react";
import LearningLab from "./learning-lab";
import FoundationsLab from "./foundations-lab";
import PreparationLab from "./preparation-lab";

function FoundationArtwork() {
  return <svg className="chapter-art foundation-art" viewBox="0 0 260 130" aria-hidden="true">
    <g className="art-grid"><path d="M25 30H235M25 65H235M25 100H235M60 15V115M130 15V115M200 15V115" /></g>
    <path className="art-vector" d="M60 100L130 45L200 78" />
    <circle cx="60" cy="100" r="5" /><circle cx="130" cy="45" r="6" /><circle cx="200" cy="78" r="5" />
    <circle className="art-hollow" cx="93" cy="69" r="4" /><circle className="art-hollow" cx="171" cy="42" r="4" />
  </svg>;
}

function LearningArtwork() {
  return <svg className="chapter-art learning-art" viewBox="0 0 260 130" aria-hidden="true">
    <g className="art-grid"><path d="M25 30H235M25 65H235M25 100H235" /></g>
    <path className="art-fit" d="M28 105L230 28" />
    <g><circle cx="47" cy="92" r="5" /><circle cx="76" cy="81" r="5" /><circle cx="107" cy="78" r="5" /><circle cx="136" cy="55" r="5" /><circle cx="166" cy="61" r="5" /><circle cx="201" cy="33" r="5" /><circle cx="222" cy="36" r="5" /></g>
  </svg>;
}

export default function ChapterWorkspace() {
  const [chapter, setChapter] = useState<1 | 2 | 3 | null>(null);

  if (chapter !== null) return <div className="chapter-workspace">
    <button className="back-to-chapters" type="button" onClick={() => setChapter(null)}>All chapters</button>
    {chapter === 2 ? <LearningLab /> : chapter === 1 ? <FoundationsLab /> : <PreparationLab />}
  </div>;

  return <section className="chapter-workspace chapter-index" aria-labelledby="chapters-heading">
    <div className="index-heading"><div><div className="section-label">A FIELD GUIDE TO MACHINE LEARNING</div><h1 id="chapters-heading">Learn by exploring.</h1></div><p>A collection of small experiments for building a deeper understanding of machine learning.</p></div>
    <div className="index-label"><span>THE CHAPTERS</span><span>SELECT A CHAPTER</span></div>
    <div className="chapter-index-list">
      <button type="button" className="chapter-entry" onClick={() => setChapter(1)}>
        <span className="entry-number">01</span><span className="entry-copy"><span className="entry-meta">FOUNDATIONS <span>·</span> 11 EXPERIMENTS</span><strong>Data &amp; mathematical<br className="desktop-break" /> foundations</strong><span className="entry-question">How do we describe the world to a machine?</span></span><FoundationArtwork /><span className="entry-action">Explore chapter</span>
      </button>
      <button type="button" className="chapter-entry" onClick={() => setChapter(2)}>
        <span className="entry-number">02</span><span className="entry-copy"><span className="entry-meta">THE FUNDAMENTALS <span>·</span> 13 EXPERIMENTS</span><strong>The learning process</strong><span className="entry-question">How does a model improve from experience?</span></span><LearningArtwork /><span className="entry-action">Explore chapter</span>
      </button>
      <button type="button" className="chapter-entry" onClick={() => setChapter(3)}>
        <span className="entry-number">03</span><span className="entry-copy"><span className="entry-meta">DATA PREPARATION <span>·</span> 9 EXPERIMENTS</span><strong>Preparing data</strong><span className="entry-question">How do our data choices shape what a model learns?</span></span><FoundationArtwork /><span className="entry-action">Explore chapter</span>
      </button>
    </div>
  </section>;
}
