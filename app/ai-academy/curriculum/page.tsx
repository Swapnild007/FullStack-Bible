'use client';

import {useMemo,useState} from 'react';
import {benchmark,projects,stages} from '../data';

type View='curriculum'|'benchmark'|'projects';

export default function CurriculumEngine(){
 const [view,setView]=useState<View>('curriculum');
 const [query,setQuery]=useState('');
 const filtered=useMemo(()=>{
  const q=query.trim().toLowerCase();
  if(!q)return stages;
  return stages.filter(s=>(s.title+' '+s.level+' '+s.topics.join(' ')).toLowerCase().includes(q));
 },[query]);

 return <main className="curriculum-page">
  <nav className="nav"><a className="brand" href="/ai-academy">FullStack<span>Bible</span></a><div className="ai-nav"><a href="/ai-academy">Academy</a><a className="active" href="/ai-academy/curriculum">Curriculum Engine</a></div></nav>
  <header className="curriculum-hero">
   <span className="eyebrow">ACADEMY 03 · CURRICULUM ENGINE</span>
   <h1>Learn the <em>system.</em></h1>
   <p>This is the curriculum control plane: progression, project evidence, external benchmark mapping and production outcomes in one place.</p>
   <div className="curriculum-stats"><div><b>{stages.length}</b><span>stages</span></div><div><b>{projects.length}</b><span>projects</span></div><div><b>{benchmark.length}</b><span>benchmark themes</span></div><div><b>100%</b><span>portfolio evidence</span></div></div>
  </header>
  <section className="curriculum-toolbar">
   <div className="view-tabs">{(['curriculum','benchmark','projects'] as View[]).map(x=><button key={x} className={view===x?'active':''} onClick={()=>setView(x)}>{x[0].toUpperCase()+x.slice(1)}</button>)}</div>
   {view==='curriculum'&&<input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search topics, tools or stages..." aria-label="Search curriculum"/>}
  </section>

  {view==='curriculum'&&<section className="curriculum-list">
   {filtered.map(s=><article className="curriculum-stage" key={s.id}>
    <div className="curriculum-number">{s.id}</div>
    <div className="curriculum-main"><div className="curriculum-stage-top"><span>{s.level}</span><small>{s.projects.length} project{s.projects.length===1?'':'s'}</small></div>
     <h2>{s.title}</h2>
     <a className="lesson-launch" href={"/ai-academy/learn/"+s.id}>Open interactive lesson →</a>
     <div className="curriculum-topics">{s.topics.map(t=><span key={t}>{t}</span>)}</div>
     {s.projects.length>0&&<div className="linked-projects"><b>Build evidence</b>{s.projects.map(id=>{const p=projects.find(x=>x.id===id);return p?<a key={id} href={'/ai-academy/projects/'+p.id}>Project {String(id).padStart(2,'0')} · {p.title} →</a>:null})}</div>}
    </div>
   </article>)}
  </section>}

  {view==='benchmark'&&<section className="benchmark-list">
   <div className="benchmark-intro"><b>Benchmark rule</b><p>External programme themes are used as a coverage reference, not copied course material. FullStack Bible turns each theme into independently authored lessons, executable projects and portfolio evidence.</p></div>
   {benchmark.map(b=><article className="benchmark-row" key={b.id}><div><span>{b.id}</span><h2>{b.externalTheme}</h2></div><div><small>ACADEMY STAGE</small><b>{b.academyStage}</b></div><div><small>EVIDENCE</small><p>{b.evidence}</p></div><div><small>IMPLEMENTATION</small><p>{b.implementation}</p></div></article>)}
  </section>}

  {view==='projects'&&<section className="catalog-grid">
   {projects.map(p=><article className="catalog-project" key={p.id}><div><span>PROJECT {String(p.id).padStart(2,'0')}</span>{p.capstone&&<b>CAPSTONE</b>}</div><h2>{p.title}</h2><p>{p.track}</p><div>{p.skills.map(x=><small key={x}>{x}</small>)}</div><a href={'/ai-academy/projects/'+p.id}>Open workspace →</a></article>)}
  </section>}

  <footer className="footer"><a href="/ai-academy">← Back to AI Academy</a></footer>
 </main>;
}
