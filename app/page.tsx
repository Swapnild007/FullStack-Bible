const stages = [
  ['01', 'Start here', 'Your computer, the web, browsers, files and the tools you need to begin.'],
  ['02', 'Build the web', 'HTML, CSS and JavaScript. Learn the basics by making real pages.'],
  ['03', 'Make it work', 'JavaScript in depth, browser APIs, forms, data and asynchronous code.'],
  ['04', 'Work like a developer', 'Git, GitHub, debugging, testing and a clean way to work.'],
  ['05', 'Add TypeScript', 'Write clearer, safer JavaScript for larger applications.'],
  ['06', 'Build interfaces', 'React, components, state, forms and reusable UI.'],
  ['07', 'Build full-stack apps', 'Next.js, pages, server code, data and real application flows.'],
  ['08', 'Work with data', 'SQL, PostgreSQL, data models, queries and relationships.'],
  ['09', 'Build the backend', 'APIs, users, login, permissions, validation and errors.'],
  ['10', 'Make it production-ready', 'Security, performance, testing, deployment and monitoring.'],
  ['11', 'Build with AI', 'AI-assisted development, APIs, AI features and responsible use of AI tools.'],
  ['12', 'Build your product', 'Plan, build and launch one complete full-stack application.'],
] as const;

const principles = [
  ['Learn', 'Understand the idea before using the tool.'],
  ['Build', 'Every stage ends with something you can actually use.'],
  ['Practice', 'Write code, break it, fix it and try again.'],
  ['Grow', 'Move from simple pages to complete applications.'],
];

export default function Home() {
  return (
    <main className="page">
      <nav className="nav">
        <a className="brand" href="#top" aria-label="FullStack Bible home">FullStack<span>Bible</span></a>
        <div className="navlinks">
          <a href="#path">Learning path</a>
          <a href="#how">How it works</a>
        </div>
        <a className="navcta" href="#path">Start learning</a>
      </nav>

      <section id="top" className="hero">
        <div className="eyebrow"><span className="dot" /> Learning Hub</div>
        <h1>Start from zero.<br /><em>Build for what comes next.</em></h1>
        <p className="hero-copy">
          A complete path to learn full-stack web development from the ground up, with modern tools, real projects and AI included at the right stage.
        </p>
        <div className="actions">
          <a className="primary" href="#path">Start from the beginning <span>→</span></a>
          <a className="secondary" href="#path">View the path</a>
        </div>
        <div className="hero-note"><span>12 stages</span><i /> <span>Beginner to advanced</span><i /> <span>Built around projects</span></div>
      </section>

      <section id="path" className="section shell">
        <div className="sectionhead">
          <div>
            <span className="label">THE LEARNING PATH</span>
            <h2>One step at a time.</h2>
          </div>
          <p>Start with the web itself. Then learn to build interfaces, connect data, create full applications and finally add AI to your toolkit.</p>
        </div>

        <div className="grid">
          {stages.map(([number, title, description]) => (
            <article className="card" key={number}>
              <span className="num">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="arrow">→</span>
            </article>
          ))}
        </div>
      </section>

      <section id="how" className="section shell dark-section">
        <div className="sectionhead dark-head">
          <div>
            <span className="label">HOW YOU LEARN</span>
            <h2>Learn by building.</h2>
          </div>
          <p>You will not just watch lessons. You will write code, solve problems and build projects as your skills grow.</p>
        </div>
        <div className="principles">
          {principles.map(([title, text], index) => (
            <article className="principle" key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="future shell">
        <div className="future-card">
          <span className="label">BUILT FOR THE YEARS AHEAD</span>
          <h2>Learn the foundations.<br /><em>Then learn the new tools.</em></h2>
          <p>AI will change how developers work. The fundamentals still matter. This path keeps both together so you can understand the technology instead of depending on a tool to do everything for you.</p>
          <a className="primary" href="#path">Begin the journey <span>→</span></a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">FullStack<span>Bible</span></div>
        <p>A personal learning hub for full-stack development.</p>
        <small>Learn the foundations. Build real things. Keep learning.</small>
      </footer>
    </main>
  );
}
