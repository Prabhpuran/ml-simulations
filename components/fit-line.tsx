"use client";

import { useState } from "react";

const points = [[1, 2], [2, 3.2], [3, 2.7], [4, 4.5], [5, 4.1], [6, 5.8], [7, 5.4], [8, 7.2], [9, 6.7]] as const;
const x = (value: number) => 50 + value * 49;
const y = (value: number) => 300 - value * 27;
const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

export default function FitLine() {
  const [slope, setSlope] = useState(0);
  const [intercept, setIntercept] = useState(2);
  const [steps, setSteps] = useState(0);
  const error = points.reduce((sum, [px, py]) => sum + (slope * px + intercept - py) ** 2, 0) / points.length;
  function train() {
    let gradientSlope = 0, gradientIntercept = 0;
    for (const [px, py] of points) {
      const difference = slope * px + intercept - py;
      gradientSlope += 2 * difference * px / points.length;
      gradientIntercept += 2 * difference / points.length;
    }
    setSlope(clamp(slope - 0.01 * gradientSlope, -1, 2));
    setIntercept(clamp(intercept - 0.01 * gradientIntercept, -2, 8));
    setSteps(steps + 1);
  }
  function reset() { setSlope(0); setIntercept(2); setSteps(0); }
  return <div className="experiment">
    <div className="chart-area"><div className="chart-top"><div><strong>Your model</strong><span>Move the sliders to find a better fit</span></div><div className="legend"><span className="dot" /> Data <span className="line" /> Prediction</div></div>
      <svg className="chart" viewBox="0 0 560 340" role="img" aria-label={`Scatterplot showing data and prediction line. Mean squared error ${error.toFixed(2)}.`}>
        <defs><clipPath id="plot-clip"><rect x="50" y="30" width="490" height="270" /></clipPath></defs>
        {[0, 2, 4, 6, 8, 10].map(t => <g key={t}><line className="grid-line" x1="50" x2="540" y1={y(t)} y2={y(t)} /><text className="tick" x="36" y={y(t) + 4} textAnchor="end">{t}</text><text className="tick" x={x(t)} y="322" textAnchor="middle">{t}</text></g>)}
        <g clipPath="url(#plot-clip)">{points.map(([px, py]) => <line key={`e${px}`} className="residual" x1={x(px)} x2={x(px)} y1={y(py)} y2={y(slope * px + intercept)} />)}<line className="prediction" x1={x(0)} y1={y(intercept)} x2={x(10)} y2={y(10 * slope + intercept)} />{points.map(([px, py]) => <circle key={px} className="data-point" cx={x(px)} cy={y(py)} r="5" />)}</g>
      </svg><div className="axis-title">INPUT FEATURE</div>
    </div>
    <div className="controls"><div className="controls-title"><div><span className="section-label">MODEL CONTROLS</span><h3>Adjust the line</h3></div><button className="reset" onClick={reset}>Reset</button></div>
      <label className="slider-label" htmlFor="slope"><span>Slope <small>How steep is the line?</small></span><output>{slope.toFixed(2)}</output></label><input id="slope" type="range" min="-1" max="2" step="0.01" value={slope} onChange={e => setSlope(Number(e.target.value))} />
      <label className="slider-label" htmlFor="intercept"><span>Intercept <small>Where does the line start?</small></span><output>{intercept.toFixed(2)}</output></label><input id="intercept" type="range" min="-2" max="8" step="0.01" value={intercept} onChange={e => setIntercept(Number(e.target.value))} />
      <div className="error-box"><div><span>MEAN SQUARED ERROR</span><strong aria-live="polite">{error.toFixed(2)}</strong></div><p>Lower is better</p></div>
      <button className="train" onClick={train}>Train one step</button><p className="train-note">Gradient descent adjusts the line to reduce error. {steps > 0 && `${steps} ${steps === 1 ? "step" : "steps"} taken.`}</p>
    </div>
  </div>;
}
