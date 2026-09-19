'use client';
import {useMemo,useState} from 'react';
import {stages,projects,tools} from './data';

export default function AIAcademy(){
 const [query,setQuery]=useState('');
 const [level,setLevel]=useState('All');
 const [active,setActive]=useState('00');
 const [done,setDone]=useState<string[]>([]);
 const filtered=useMemo(()=>stages.filter(s=>(level==='All'||s.level===level)&&((s.title+' '+s.topics.join(' ')).toLowerCase().includes(query.toLowerCase()))),[query,level]);
 const current=stages.find(s=>s.id===active)??stages[0];
 const currentProjects=projects.filter(p=>current.projects.includes(p.id));
 const toggle=(id:string)=>setDone(d=>d.includes(id)?d.filter(x=>x!==id):[...d,id]);
 return <main className="ai-academy-app">
  <nav className="nav"><a className="brand" href="/">FullStack<span>Bible</span></a><div className="ai-nav"><a href="/">Home</a><a className="active" href="/ai-academy">AI Academy</a><a href="/projects.html">Projects</a></div></nav>
  <header className="ai-hero"><span className="eyebrow">ACADEMY 03 · BUILD, NOT JUST STUDY</span><h1>AI from foundations<br/><em>to production.</em></h1><p>A project-first AI/ML academy covering mathematics, data, ML, deep learning, NLP, GenAI, RAG, LLM engineering, MLOps, agents, MCP, enterprise AI and a production capstone.</p>
   <div className="ai-stats"><div><b>{stages.length}</b><span>stages</span></div><div><b>{projects.length}</b><span>projects</span></div><div><b>{tools.length}+</b><span>tools</span></div><div><b>{done.length}</b><span>completed</span></div></div>
  </header>
  <section className="ai-controls"><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search the academy..." aria-label="Search academy"/><select value={level} onChange={e=>setLevel(e.target.value)} aria-label="Filter level"><option>All</option>{[...new Set(stages.map(s=>s.level))].map(x=><option key={x}>{x}</option>)}</select></section>
  <div className="ai-layout"><aside className="ai-stage-list">{filtered.map(s=><button key={s.id} onClick={()=>setActive(s.id)} className={active===s.id?'selected':''}><span>{s.id}</span><div><b>{s.title}</b><small>{s.level} · {s.topics.length} topics</small></div></button>)}</aside>
   <section className="ai-detail"><div className="ai-detail-head"><span>STAGE {current.id}</span><h2>{current.title}</h2><p>{current.topics.length} learning topics · {currentProjects.length} linked projects</p></div>
    <div className="topic-grid">{current.topics.map(t=><label key={t}><input type="checkbox" checked={done.includes(current.id+':'+t)} onChange={()=>toggle(current.id+':'+t)}/><span>{t}</span></label>)}</div>
    <div className="ai-section"><div className="section-head"><div><span>BUILD</span><h3>Major projects connected to this stage</h3></div></div><div className="project-grid">{currentProjects.map(p=><article className="project-card" key={p.id}><div><span>PROJECT {String(p.id).padStart(2,'0')}</span>{p.capstone&&<strong>CAPSTONE</strong>}</div><h4>{p.title}</h4><p>{p.track}</p><div>{p.skills.map(x=><small key={x}>{x}</small>)}</div><button onClick={()=>alert('Project workspace is the next build layer for this project.')}>Open project workspace →</button></article>)}</div></div>
    <div className="ai-section"><div className="section-head"><span>TOOLCHAIN</span><h3>Programme tool coverage</h3></div><div className="tool-cloud">{tools.map(t=><span key={t}>{t}</span>)}</div></div>
   </section>
  </div>
  <footer className="footer"><a href="/">FullStack<span>Bible</span></a><p>Learn → Build → Test → Ship</p></footer>
 </main>
}