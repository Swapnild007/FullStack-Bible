'use client';

import {useMemo, useState} from 'react';
import {stages, projects} from '../data';

type Lesson={title:string;objective:string;sections:{heading:string;body:string}[];lab:{title:string;prompt:string;starter:string;expected:string};checks:{q:string;options:string[];answer:number}[];evidence:string[]};

const lessons:Record<string,Lesson>={
"00":{title:"Think like an AI engineer",objective:"Build the mental model needed to turn a business problem into a measurable AI system.",sections:[
{heading:"AI → ML → deep learning",body:"AI is the broad engineering goal. Machine learning is a family of methods that learn patterns from data. Deep learning uses multi-layer neural networks and is especially useful for high-dimensional signals such as images, audio and language."},
{heading:"The AI system lifecycle",body:"Start with the decision the system must improve. Define inputs, outputs, users, constraints and a measurable success metric. Then move through data, baseline, model or LLM selection, evaluation, deployment, monitoring and iteration."},
{heading:"Problem framing before model selection",body:"Do not start by choosing a fashionable model. First decide whether the task is prediction, classification, ranking, retrieval, generation, recommendation, detection or agentic execution. A clear target makes evaluation possible."},
{heading:"Responsible AI is engineering",body:"Privacy, authorization, security, fairness, explainability and auditability are system requirements. Put them in the design and test plan, not only in documentation."}
],lab:{title:"Lab 00 · Frame an AI problem",prompt:"Convert a vague request into an engineering specification. Example: “HR wants an AI assistant.” Define the user, decision, inputs, output, success metric, failure mode and human fallback.",starter:"User: HR operations team\nProblem: __________________\nInputs: __________________\nOutput: __________________\nSuccess metric: __________________\nFailure mode: __________________\nHuman fallback: __________________",expected:"A strong specification has a single primary user, explicit inputs and output, a measurable metric, a concrete failure mode and a human escalation path."},checks:[
{q:"What should happen before selecting a model?",options:["Choose the largest model","Define the problem and evaluation metric","Deploy a vector database","Fine-tune immediately"],answer:1},
{q:"Which statement best separates ML from AI?",options:["ML is broader than AI","AI only means neural networks","ML is a subset of approaches used to achieve AI goals","They are unrelated"],answer:2},
{q:"Where should security and privacy requirements appear?",options:["Only after deployment","Only in documentation","During system design and evaluation","Only when an incident happens"],answer:2}
],evidence:["Problem statement","Input/output contract","Success metric","Failure mode + human fallback"]},
"01":{title:"Python engineering with AI assistance",objective:"Refresh Python as an engineering tool, then use AI assistance for implementation, debugging, review and tests without outsourcing understanding.",sections:[
{heading:"Write code you can explain",body:"Use Python to express data transformations, business rules and experiments. Types, functions, modules, exceptions and tests make code easier to reason about as projects grow."},
{heading:"AI assistance is a pair programmer",body:"Give an assistant a precise task, constraints and expected behavior. Ask it to explain, propose tests and identify edge cases. Review every generated change before accepting it."},
{heading:"A reliable loop",body:"Plan → implement a small change → run the code → inspect the result → write or update tests → review the diff → commit. This creates evidence that the code works rather than merely looking plausible."},
{heading:"Lab discipline",body:"Keep examples deterministic. Prefer small functions with explicit inputs and outputs. Treat exceptions and invalid input as part of the contract."}
],lab:{title:"Lab 01 · Debug, test, review",prompt:"The function below should return the average of numeric values and reject an empty list. Identify the bug, propose the corrected behavior, and write two tests.",starter:"def average(values):\n    return sum(values) / len(values)\n\n# Test ideas:\n# 1. __________________\n# 2. __________________",expected:"The implementation should explicitly handle an empty collection. Tests should cover a normal numeric case and the empty-input failure case."},checks:[
{q:"What is the safest use of AI-generated code?",options:["Merge it without review","Use it as reviewed implementation assistance","Skip tests because AI wrote it","Give it production secrets"],answer:1},
{q:"Why use small functions with explicit contracts?",options:["They make evaluation and debugging easier","They always run faster","They remove the need for tests","They prevent all bugs"],answer:0},
{q:"What should follow a code change?",options:["Only a screenshot","Execution, tests and review","Immediate deployment","Deleting the old tests"],answer:1}
],evidence:["Python lab","Test cases","AI prompt/review notes","Reviewed commit"]}
};

export default function AcademyLesson({params}:{params:{stageId:string}}){
 const stageId=params.stageId;
 const stage=stages.find(s=>s.id===stageId)??stages[0];
 const lesson=lessons[stage.id]??{
  title:"Stage "+stage.id+" learning path",
  objective:"Work through "+stage.title+" as an engineering sequence and produce evidence you can carry into the linked projects.",
  sections:[
   {heading:"Core concepts",body:"Study the stage topics: "+stage.topics.slice(0,6).join(", ")+"."},
   {heading:"Engineering application",body:"For every concept, connect it to a concrete system decision, implementation choice or evaluation method."},
   {heading:"Project connection",body:"Use the linked project workspaces to turn the lesson into implementation evidence."}
  ],
  lab:{title:"Lab "+stage.id+" · Engineering exercise",prompt:"Choose one topic from this stage and define an implementation task for it.",starter:"Topic: "+stage.topics[0]+"\nTask: __________________\nInput: __________________\nOutput: __________________\nEvaluation: __________________",expected:"A good lab has a clear input, output, implementation task and measurable evaluation."},
  checks:stage.topics.slice(0,3).map(t=>({q:"What is the engineering goal of "+t+"?",options:["Understand and apply it in a measurable workflow","Memorize the term only","Skip implementation","Use it without evaluation"],answer:0})),
  evidence:["Completed lab","Knowledge checks","Implementation notes","Linked project evidence"]
 };
 const [answers,setAnswers]=useState<Record<number,number>>({});
 const [checked,setChecked]=useState(false);
 const [lab,setLab]=useState(lesson.lab.starter);
 const [done,setDone]=useState(false);
 const score=useMemo(()=>lesson.checks.reduce((n,c,i)=>n+(answers[i]===c.answer?1:0),0),[answers,lesson.checks]);
 const linked=projects.filter(p=>stage.projects.includes(p.id));
 const complete=()=>{setDone(true);localStorage.setItem("fsb-ai-stage-"+stage.id,"complete")};
 return <main className="lesson-page">
  <nav className="nav"><a className="brand" href="/">FullStack<span>Bible</span></a><div className="ai-nav"><a href="/ai-academy">AI Academy</a><a className="active" href="/ai-academy/curriculum">Curriculum</a><a href="/ai-academy/projects/6">Projects</a></div></nav>
  <header className="lesson-hero"><a className="lesson-back" href="/ai-academy/curriculum">← Curriculum Engine</a><span>STAGE {stage.id} · {stage.level}</span><h1>{lesson.title}</h1><p>{lesson.objective}</p><div className="lesson-meta"><b>{stage.topics.length}</b><span>topics</span><b>{lesson.sections.length}</b><span>concept blocks</span><b>{lesson.checks.length}</b><span>checks</span></div></header>
  <section className="lesson-layout"><div className="lesson-main">
   <article className="lesson-card"><span className="lesson-label">LEARN</span>{lesson.sections.map(s=><section className="lesson-section" key={s.heading}><h2>{s.heading}</h2><p>{s.body}</p></section>)}</article>
   <article className="lesson-card lab-card"><span className="lesson-label">HANDS-ON LAB</span><h2>{lesson.lab.title}</h2><p>{lesson.lab.prompt}</p><textarea value={lab} onChange={e=>setLab(e.target.value)} aria-label="Lab workspace"/><div className="lab-expect"><b>Expected evidence</b><span>{lesson.lab.expected}</span></div></article>
   <article className="lesson-card"><span className="lesson-label">KNOWLEDGE CHECK</span>{lesson.checks.map((c,i)=><div className="check-block" key={c.q}><h3>{i+1}. {c.q}</h3><div className="check-options">{c.options.map((o,j)=><button key={o} className={answers[i]===j?"chosen":""} onClick={()=>{setAnswers(a=>({...a,[i]:j}));setChecked(false)}}>{o}</button>)}</div></div>)}<button className="primary lesson-check" onClick={()=>setChecked(true)}>Check answers</button>{checked&&<div className={score===lesson.checks.length?"result good":"result"}>{score}/{lesson.checks.length} correct. {score===lesson.checks.length?"Knowledge check passed.":"Review the concepts and try again."}</div>}</article>
  </div><aside className="lesson-side">
   <article className="lesson-card evidence-card"><span className="lesson-label">EVIDENCE</span><h2>Stage completion</h2><ul>{lesson.evidence.map(x=><li key={x}>○ {x}</li>)}</ul><button className="primary" onClick={complete}>{done?"Stage completed ✓":"Mark stage complete"}</button></article>
   {linked.length>0&&<article className="lesson-card"><span className="lesson-label">BUILD NEXT</span><h2>Linked projects</h2>{linked.map(p=><a className="lesson-project" href={"/ai-academy/projects/"+p.id} key={p.id}><b>PROJECT {String(p.id).padStart(2,"0")}</b><span>{p.title}</span><small>Open workspace →</small></a>)}</article>}
  </aside></section>
  <footer className="footer"><a href="/">FullStack<span>Bible</span></a><p>Learn → Build → Test → Ship</p></footer>
 </main>
}
