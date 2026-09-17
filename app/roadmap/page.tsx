const roadmap = [
  ['01', 'Start here', ['Computer basics', 'How the web works', 'Browser & developer tools', 'Files, folders & terminal']],
  ['02', 'Build the web', ['HTML', 'CSS', 'JavaScript basics', 'Semantic pages & accessibility']],
  ['03', 'Make it work', ['JavaScript in depth', 'DOM & browser APIs', 'Forms & validation', 'Async JavaScript & data']],
  ['04', 'Work like a developer', ['Git', 'GitHub', 'Debugging', 'Testing & code quality']],
  ['05', 'Add TypeScript', ['Types', 'Functions & objects', 'Generics', 'Type-safe application code']],
  ['06', 'Build interfaces', ['React', 'Components', 'State & events', 'Forms & reusable UI']],
  ['07', 'Build full-stack apps', ['Next.js', 'Routing', 'Server & client code', 'Application flows']],
  ['08', 'Work with data', ['SQL', 'PostgreSQL', 'Data modelling', 'Queries & relationships']],
  ['09', 'Build the backend', ['APIs', 'Authentication', 'Authorization', 'Validation & errors']],
  ['10', 'Make it production-ready', ['Security', 'Performance', 'Testing', 'Deployment & monitoring']],
  ['11', 'Build with AI', ['AI-assisted development', 'Model APIs', 'AI features', 'Safe & responsible use']],
  ['12', 'Build your product', ['Plan', 'Build', 'Test', 'Launch & improve']],
] as const;

export default function Roadmap() {
  return (
    <main className="roadmap-page">
      <nav className="nav">
        <a className="brand" href="/">FullStack<span>Bible</span></a>
        <a className="navcta" href="/">Home</a>
      </nav>

      <header className="roadmap-hero">
        <span className="label">FULLSTACK BIBLE</span>
        <h1>The roadmap.</h1>
        <p>From your first web page to a complete full-stack product.</p>
      </header>

      <section className="roadmap-list" aria-label="Full-stack development roadmap">
        {roadmap.map(([number, title, topics]) => (
          <article className="roadmap-stage" key={number}>
            <div className="stage-number">{number}</div>
            <div className="stage-content">
              <h2>{title}</h2>
              <div className="topic-list">
                {topics.map((topic) => <span key={topic}>{topic}</span>)}
              </div>
            </div>
            <span className="stage-arrow">→</span>
          </article>
        ))}
      </section>

      <footer className="footer">
        <a href="/">FullStack<span>Bible</span></a>
        <p>Learn → Build → Practice → Grow</p>
      </footer>
    </main>
  );
}
