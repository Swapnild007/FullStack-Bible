const foundations = [
  ['01','Web foundations','How the web actually works: browsers, DNS, HTTP, URLs, DevTools, hosting and the request/response lifecycle.','HTML · HTTP · Browser'],
  ['02','HTML & accessibility','Semantic HTML, forms, tables, media, SEO fundamentals, keyboard navigation and accessible interfaces.','HTML · A11y · SEO'],
  ['03','CSS & responsive UI','Layout, cascade, specificity, Flexbox, Grid, responsive design, typography, motion and component styling.','CSS · Grid · Motion'],
  ['04','JavaScript deeply','Syntax is only the beginning: objects, functions, closures, async programming, DOM, modules, errors and browser APIs.','JavaScript · Web APIs'],
  ['05','Git & engineering','Git workflows, branches, commits, code review, debugging, package management, testing and maintainable code.','Git · npm · Testing'],
  ['06','TypeScript','Types, narrowing, generics, utility types, modules and practical TypeScript for production applications.','TypeScript · Types'],
  ['07','React','Components, JSX, state, events, effects, forms, hooks, data flow, accessibility and component architecture.','React · UI'],
  ['08','Next.js full-stack','App Router, Server Components, routing, data fetching, mutations, caching, metadata and deployment.','Next.js · RSC'],
  ['09','Backend engineering','HTTP APIs, validation, authentication, authorization, errors, logging and service architecture.','Node · APIs · Auth'],
  ['10','SQL & PostgreSQL','Relational modeling, SQL, joins, indexes, constraints, transactions, migrations and query design.','SQL · PostgreSQL'],
  ['11','Production','Security, performance, observability, CI/CD, environment configuration, testing and deployment.','OWASP · CI/CD · Ops'],
  ['12','Capstone','Build and ship a real full-stack product from architecture to production, documenting every engineering decision.','Portfolio · Production']
] as const;

export default function Home(){
 return <main className="page">
  <nav className="nav"><div className="brand">FullStack<span>Bible</span></div><div className="navlinks"><a href="#curriculum">Curriculum</a><a href="#roadmap">Roadmap</a><a href="#principles">Principles</a></div><a className="navcta" href="#curriculum">Start learning</a></nav>
  <section className="hero"><div className="eyebrow"><i className="dot"/>Built for real-world development</div><h1>Don't just learn code.<br/><em>Learn to build.</em></h1><p>A mobile-first, project-driven full-stack curriculum built around the technologies and engineering practices used to create modern web applications.</p><div className="actions"><a className="primary" href="#curriculum">Explore the curriculum →</a><a className="secondary" href="#roadmap">See the roadmap</a></div></section>
  <section id="curriculum" className="section shell"><div className="sectionhead"><div><h2>The FullStack path.</h2></div><p>12 stages. Each stage combines concepts, hands-on exercises, implementation tasks and a project. The goal is transferable engineering skill, not framework memorization.</p></div><div className="grid">{foundations.map(([n,title,desc,pill])=><article className="card" key={n}><span className="num">{n}</span><h3>{title}</h3><p>{desc}</p><span className="pill">{pill}</span></article>)}</div></section>
  <section id="roadmap" className="section shell"><div className="sectionhead"><h2>Three layers of mastery.</h2><p>We move from browser fundamentals to application architecture, then into production engineering.</p></div><div className="roadmap"><article className="road"><small>01 · FOUNDATION</small><h3>Understand the platform.</h3><p>HTML, CSS, JavaScript, HTTP, browser APIs, Git and accessibility. You learn <b>why</b> the web behaves the way it does.</p></article><article className="road"><small>02 · APPLICATION</small><h3>Build the product.</h3><p>TypeScript, React, Next.js, APIs, authentication and PostgreSQL. You learn to connect a user interface to real data.</p></article><article className="road"><small>03 · PRODUCTION</small><h3>Ship like an engineer.</h3><p>Security, testing, performance, observability, CI/CD and deployment. You learn what happens after “it works on my machine.”</p></article><article className="road"><small>04 · CAPSTONE</small><h3>Build your own system.</h3><p>One serious product. Architecture, schema, UI, APIs, tests, deployment and documentation. Your final work becomes your portfolio.</p></article></div></section>
  <section id="principles" className="section shell"><div className="sectionhead"><h2>Our learning principles.</h2><p>Primary sources first. Build continuously. Explain the trade-offs. Keep the curriculum aligned with modern web engineering.</p></div></section>
  <footer className="footer">FullStack Bible · <strong>Built for Swapnil</strong> · Curriculum grounded in official platform documentation.</footer>
 </main>
}
