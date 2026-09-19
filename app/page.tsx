'use client';

import { useState } from 'react';

const menu = [
  ['Roadmap', '/roadmap.html'],
  ['Curriculum', '/curriculum.html'],
  ['Lessons', '/lessons.html'],
  ['Projects', '/projects.html'],
  ['Practice', '/practice.html'],
  ['AI', '/ai.html'],
  ['Progress', '/progress.html'],
  ['Resources', '/resources.html'],
];

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="page home-page">
      <nav className="nav">
        <a className="brand" href="/">FullStack<span>Bible</span></a>
        <button className="menu-button" onClick={() => setOpen(true)} aria-label="Open menu">
          <span /><span />
        </button>
      </nav>

      {open && (
        <div className="menu-overlay" role="dialog" aria-modal="true" aria-label="Learning Hub menu">
          <div className="menu-panel">
            <div className="menu-top">
              <span className="menu-title">Learning Hub</span>
              <button className="menu-close" onClick={() => setOpen(false)} aria-label="Close menu">×</button>
            </div>
            <div className="menu-items">
              {menu.map(([label, href]) => (
                <a key={label} href={href} onClick={() => setOpen(false)} className={label === 'Roadmap' ? 'menu-item featured' : 'menu-item'}>
                  <span>{label}</span><b>→</b>
                </a>
              ))}
            </div>
            <div className="menu-bottom">FullStack Bible · Learn from zero to advanced</div>
          </div>
        </div>
      )}

      <section className="hero home-hero">
        <div className="eyebrow"><span className="dot" /> Learning Hub</div>
        <h1>Start from zero.<br /><em>Build for what comes next.</em></h1>
        <p className="hero-copy">Full-stack development, learned step by step.</p>
        <a className="primary" href="/roadmap.html">Start learning <span>→</span></a>
      </section>

      <footer className="footer">
        <div className="footer-brand">FullStack<span>Bible</span></div>
        <small>Learn · Build · Practice · Grow</small>
      </footer>
    </main>
  );
}
