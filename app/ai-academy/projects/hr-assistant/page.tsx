'use client';
import {useMemo,useState} from 'react';

const employees=[
 {id:'E-1042',name:'Aarav Shah',role:'Senior Analyst',department:'Operations',location:'Mumbai',tenure:4,leave:12,performance:'Strong'},
 {id:'E-1178',name:'Meera Kulkarni',role:'Product Manager',department:'Product',location:'Pune',tenure:3,leave:7,performance:'Strong'},
 {id:'E-1281',name:'Rohan Iyer',role:'Software Engineer',department:'Engineering',location:'Bengaluru',tenure:2,leave:15,performance:'Solid'},
 {id:'E-1337',name:'Nisha Patel',role:'HR Business Partner',department:'People',location:'Hyderabad',tenure:6,leave:9,performance:'Strong'},
 {id:'E-1404',name:'Kabir Rao',role:'Data Scientist',department:'Engineering',location:'Pune',tenure:1,leave:18,performance:'Solid'}
];
const knowledge=[
 {title:'Annual leave policy',text:'Employees receive paid annual leave according to their employment policy. Leave balances are subject to approval and local policy rules.'},
 {title:'Remote work',text:'Remote work arrangements require manager approval and must follow the employee handbook and applicable security requirements.'},
 {title:'Performance reviews',text:'Performance reviews combine role expectations, documented outcomes and manager feedback. Employees can request clarification through HR.'},
 {title:'Data privacy',text:'HR information is confidential. Only authorized users should access employee records, and assistant responses should avoid exposing unnecessary personal data.'}
];
function answer(q:string,person:any){
 const s=q.toLowerCase();
 if(s.includes('leave')||s.includes('vacation')) return person?person.name+' has '+person.leave+' days in the demo leave balance. Actual balances must be verified against the HR system before action.':knowledge[0].text;
 if(s.includes('remote')||s.includes('work from home')) return knowledge[1].text;
 if(s.includes('review')||s.includes('performance')) return person?person.name+' is marked '+person.performance+' in this demo dataset. This is training data, not an employment decision.':knowledge[2].text;
 if(s.includes('privacy')||s.includes('confidential')) return knowledge[3].text;
 return 'I found no grounded answer in the demo knowledge base. Try asking about leave, remote work, performance reviews or privacy.';
}
export default function HRAssistant(){
 const [q,setQ]=useState(''),[selected,setSelected]=useState(employees[0].id),[messages,setMessages]=useState<{role:string,text:string}[]>([{role:'assistant',text:'Welcome. I can answer grounded HR questions using the demo policy set and selected employee context.'}]);
 const person=employees.find(e=>e.id===selected); const filtered=useMemo(()=>employees.filter(e=>(e.name+' '+e.role+' '+e.department).toLowerCase().includes(q.toLowerCase())),[q]);
 function ask(){if(!q.trim())return;const question=q.trim();setMessages(m=>[...m,{role:'user',text:question},{role:'assistant',text:answer(question,person)}]);setQ('')}
 return <main className="hr-app"><nav className="nav"><a className="brand" href="/ai-academy">FullStack<span>Bible</span></a><a className="back" href="/ai-academy/projects/6">Workspace</a></nav>
 <header className="hr-hero"><span>MAJOR PROJECT 06 · AGENTIC AI</span><h1>AI-Powered HR Assistant</h1><p>A runnable, privacy-aware training application. The current model boundary is deterministic retrieval over a controlled demo knowledge base. A real model provider can be connected later without changing the product contract.</p></header>
 <section className="hr-layout"><aside className="hr-card"><small>EMPLOYEE CONTEXT</small><input className="hr-search" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search employees..." aria-label="Search employees"/><div className="employee-list">{(q?filtered:employees).map(e=><button key={e.id} className={e.id===selected?'selected':''} onClick={()=>setSelected(e.id)}><b>{e.name}</b><span>{e.role}</span><small>{e.department} · {e.location}</small></button>)}</div></aside>
 <section className="hr-main"><div className="hr-card context"><div><small>SELECTED EMPLOYEE</small><h2>{person?.name}</h2><p>{person?.role} · {person?.department} · {person?.location}</p></div><div className="metric"><b>{person?.leave}</b><span>demo leave days</span></div></div>
 <div className="hr-card chat"><div className="chat-head"><div><small>GROUNDED ASSISTANT</small><h3>HR Knowledge</h3></div><span>DEMO DATA</span></div><div className="messages">{messages.map((m,i)=><div className={'message '+m.role} key={i}><span>{m.role==='assistant'?'AI':'You'}</span><p>{m.text}</p></div>)}</div><div className="ask"><input value={q} onChange={e=>setQ(e.target.value)} onKeyDown={e=>{if(e.key==='Enter')ask()}} placeholder="Ask about leave, remote work, reviews..." aria-label="Ask HR assistant"/><button onClick={ask}>Ask</button></div></div>
 <div className="hr-card"><small>GROUNDED KNOWLEDGE</small><div className="knowledge">{knowledge.map(k=><article key={k.title}><b>{k.title}</b><p>{k.text}</p></article>)}</div></div>
 <div className="security-note"><b>Security boundary</b><span>Employee data is demo-only. The assistant cannot authorize HR actions, change records, or expose information beyond the selected context.</span></div></section></section></main>