'use client';
import {useState} from 'react';
import {projects} from '../../../data';

const phases=['Plan','Data','Core feature','AI/ML layer','Evaluation','Security','Deployment'];

export default function ProjectWorkspace({params}:{params:{id:string}}){
 const project=projects.find(p=>p.id===Number(params.id))||projects[0];
 const [phase,setPhase]=useState(0),[files,setFiles]=useState(['README.md','package.json','src/README.md','tests/README.md']),[log,setLog]=useState(['Workspace initialized','Project specification loaded']);
 const progress=Math.round(phase/(phases.length-1)*100);
 function advance(){const next=Math.min(phase+1,phases.length-1);setPhase(next);setLog(x=>[...x,'Phase advanced: '+phases[next]])}
 return <main className="workspace-page"><nav className="nav"><a className="brand" href="/ai-academy">FullStack<span>Bible</span></a><span className="workspace-pill">PROJECT WORKSPACE</span></nav>
 <header className="workspace-hero"><span>PROJECT {String(project.id).padStart(2,'0')} · {project.track}</span><h1>{project.title}</h1><p>Build the application, not just the exercise. This workspace connects curriculum, source, execution, evaluation and deployment.</p></header>
 <section className="workspace-grid"><aside className="workspace-sidebar"><div className="workspace-card"><small>PROJECT PROGRESS</small><b>{progress}%</b><div className="progressbar"><i style={{width:progress+'%'}}/></div></div><div className="phase-list">{phases.map((x,i)=><button key={x} onClick={()=>setPhase(i)} className={i===phase?'active':''}><span>{String(i+1).padStart(2,'0')}</span>{x}{i<phase?' ✓':''}</button>)}</div></aside>
 <section className="workspace-main"><div className="workspace-card phase-card"><span>PHASE {phase+1} / {phases.length}</span><h2>{phases[phase]}</h2><p>{['Define the business problem, users, success criteria, architecture and acceptance criteria.','Design data contracts, sources, schema, validation and preprocessing.','Implement the core product flow with real application boundaries and reviewable source changes.','Add the model, retrieval, agent or other AI capability with explicit inputs, outputs and failure handling.','Create representative, edge and adversarial evaluation cases and measure quality, latency and cost.','Harden authentication, authorization, secrets, data boundaries, prompt/tool security and observability.','Package, deploy, monitor and document the production system.'][phase]}</p><button className="primary" onClick={advance}>{phase===phases.length-1?'Project complete':'Complete phase →'}</button></div>
 <div className="workspace-card"><div className="workspace-title"><div><small>SOURCE WORKSPACE</small><h3>Project files</h3></div><button onClick={()=>setFiles(x=>[...x,'src/feature-'+x.length+'.ts'])}>+ New file</button></div><div className="file-list">{files.map((f,i)=><div key={f}><span>{i===0?'◇':'◻'}</span><b>{f}</b><small>{i===0?'project specification':'workspace file'}</small></div>)}</div></div>
 <div className="workspace-card"><div className="workspace-title"><div><small>ENGINEERING LOG</small><h3>Build activity</h3></div></div><div className="activity">{log.map((x,i)=><div key={i}><span>•</span>{x}</div>)}</div></div>
 <div className="workspace-card acceptance"><small>DEFINITION OF DONE</small><ul><li>Core user flow works end to end</li><li>Data and model boundaries are explicit</li><li>Automated tests cover critical paths</li><li>Security and failure paths are addressed</li><li>Evaluation evidence is recorded</li><li>Deployment and operations are documented</li></ul></div></section></section>
 <footer className="footer"><a href="/ai-academy">← Back to AI Academy</a></footer></main>
}