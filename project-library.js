window.FSBProjects = [
{
 id:"01", level:"Beginner", title:"Personal Portfolio", stack:"HTML · CSS · JavaScript",
 purpose:"Build a real responsive personal site and learn the browser fundamentals before introducing frameworks.",
 concepts:["semantic HTML","responsive CSS","DOM events","accessibility"],
 architecture:"index.html → styles.css → app.js",
 files:{
 "index.html":`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Your Name — Developer</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
<header class="site-header">
  <a href="/" class="logo">YN</a>
  <nav aria-label="Primary">
    <a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a>
  </nav>
</header>
<main>
  <section class="hero">
    <p class="eyebrow">FULL-STACK DEVELOPER</p>
    <h1>I build useful software.</h1>
    <p>Interfaces, APIs and data systems designed around real user needs.</p>
    <a class="button" href="#work">See my work</a>
  </section>
  <section id="work"><h2>Selected work</h2><div id="projects" class="grid"></div></section>
  <section id="about"><h2>About</h2><p>I enjoy turning ambiguous problems into small, testable software.</p></section>
  <section id="contact"><h2>Contact</h2><form id="contactForm"><label>Email<input name="email" type="email" required></label><button>Send</button></form><p id="message" role="status"></p></section>
</main>
<script src="app.js"></script>
</body>
</html>`,
 "styles.css":`:root{font-family:system-ui,sans-serif;color:#111;background:#f5f5f7}*{box-sizing:border-box}body{margin:0}header,main{width:min(1000px,calc(100% - 32px));margin:auto}.site-header{display:flex;justify-content:space-between;padding:20px 0}.site-header nav{display:flex;gap:16px}.hero{padding:100px 0 80px;max-width:720px}.hero h1{font-size:clamp(48px,8vw,88px);line-height:.95;margin:12px 0}.eyebrow{letter-spacing:.16em;font-weight:700;font-size:12px}.button,button{border:0;border-radius:999px;padding:12px 18px;background:#111;color:#fff}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.card{background:#fff;border-radius:18px;padding:20px}@media(max-width:700px){.grid{grid-template-columns:1fr}}`,
 "app.js":`const projects=[{name:"Learning Hub",text:"A curriculum and progress platform."},{name:"Analytics",text:"A dashboard for operational decisions."},{name:"Reader",text:"A long-form document experience."}];
const root=document.querySelector("#projects");
root.innerHTML=projects.map(p=>\`<article class="card"><h3>\${p.name}</h3><p>\${p.text}</p></article>\`).join("");
document.querySelector("#contactForm").addEventListener("submit",event=>{event.preventDefault();document.querySelector("#message").textContent="Thanks — the form was handled in the browser.";});`
 }
},
{
 id:"02", level:"Beginner", title:"Responsive Product Landing Page", stack:"HTML · CSS · JavaScript",
 purpose:"Build a production-style marketing page while learning layout, responsive design, forms and accessible interaction.",
 concepts:["Flexbox","Grid","responsive design","modal state"],
 architecture:"HTML structure → CSS layout system → small JavaScript interaction",
 files:{
 "index.html":`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Focus</title><link rel="stylesheet" href="styles.css"></head><body><header><strong>Focus</strong><button id="menu" aria-expanded="false">Menu</button><nav id="nav"><a href="#features">Features</a><a href="#pricing">Pricing</a><a href="#signup">Start free</a></nav></header><main><section class="hero"><span>YOUR WORK, LESS NOISE</span><h1>A calmer way to finish important work.</h1><p>Plan a small set of outcomes and make progress visible.</p><a href="#signup">Start free</a></section><section id="features"><h2>Everything you need</h2><div class="features"><article><h3>Plan</h3><p>Choose today's important work.</p></article><article><h3>Focus</h3><p>Reduce distractions while working.</p></article><article><h3>Review</h3><p>Learn from what you completed.</p></article></div></section><section id="signup"><h2>Start free</h2><form id="form"><label>Email<input required type="email"></label><button>Join</button></form><p id="status" role="status"></p></section></main><script src="app.js"></script></body></html>`,
 "styles.css":`*{box-sizing:border-box}body{margin:0;font-family:system-ui;background:#f7f7f8;color:#111}header,main{width:min(1100px,calc(100% - 32px));margin:auto}header{display:flex;justify-content:space-between;padding:20px 0}nav{display:flex;gap:18px}.hero{padding:100px 0}.hero h1{font-size:clamp(48px,8vw,90px);max-width:850px;line-height:.95}.features{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.features article{background:white;padding:24px;border-radius:20px}@media(max-width:700px){nav{display:none}.features{grid-template-columns:1fr}}`,
 "app.js":`const menu=document.querySelector("#menu"),nav=document.querySelector("#nav");menu.addEventListener("click",()=>{const open=menu.getAttribute("aria-expanded")==="true";menu.setAttribute("aria-expanded",String(!open));nav.hidden=open});document.querySelector("#form").addEventListener("submit",e=>{e.preventDefault();document.querySelector("#status").textContent="You're on the list.";});`
 }
},
{
 id:"03", level:"Beginner", title:"Task Manager", stack:"JavaScript · DOM · Local Storage",
 purpose:"Build the first real CRUD application: create, read, update, complete and delete tasks.",
 concepts:["state","CRUD","events","localStorage"],
 architecture:"UI events → state array → render → localStorage",
 files:{
 "index.html":`<!doctype html><html><body><main><h1>Tasks</h1><form id="form"><input id="title" required placeholder="What needs doing?"><button>Add</button></form><ul id="list"></ul></main><script src="app.js"></script></body></html>`,
 "app.js":`let tasks=JSON.parse(localStorage.getItem("tasks")||"[]");const list=document.querySelector("#list");function save(){localStorage.setItem("tasks",JSON.stringify(tasks));}function render(){list.innerHTML=tasks.map(t=>\`<li><label><input type="checkbox" data-id="\${t.id}" \${t.done?"checked":""}>\${t.title}</label><button data-delete="\${t.id}">Delete</button></li>\`).join("");}document.querySelector("#form").addEventListener("submit",e=>{e.preventDefault();const input=document.querySelector("#title");tasks.push({id:crypto.randomUUID(),title:input.value.trim(),done:false});input.value="";save();render();});list.addEventListener("click",e=>{const id=e.target.dataset.id||e.target.dataset.delete;if(!id)return;const task=tasks.find(t=>t.id===id);if(e.target.dataset.id)task.done=e.target.checked;if(e.target.dataset.delete)tasks=tasks.filter(t=>t.id!==id);save();render();});render();`
 }
},
{
 id:"04", level:"Beginner → Intermediate", title:"Weather Dashboard", stack:"JavaScript · Fetch · REST API",
 purpose:"Learn asynchronous browser programming by consuming a real HTTP API and designing loading, success and failure states.",
 concepts:["fetch","async/await","JSON","error handling"],
 architecture:"Search form → fetch → API response → state → UI",
 files:{
 "index.html":`<!doctype html><html><body><main><h1>Weather</h1><form id="search"><input id="city" required placeholder="City"><button>Search</button></form><p id="status"></p><article id="result"></article></main><script src="app.js"></script></body></html>`,
 "app.js":`const form=document.querySelector("#search"),status=document.querySelector("#status"),result=document.querySelector("#result");form.addEventListener("submit",async e=>{e.preventDefault();const city=document.querySelector("#city").value.trim();status.textContent="Loading…";result.innerHTML="";try{const geo=await fetch("https://geocoding-api.open-meteo.com/v1/search?name="+encodeURIComponent(city)+"&count=1&language=en&format=json");if(!geo.ok)throw new Error("Location search failed");const locations=await geo.json();if(!locations.results?.length){status.textContent="No matching location found.";return;}const place=locations.results[0];const weather=await fetch("https://api.open-meteo.com/v1/forecast?latitude="+place.latitude+"&longitude="+place.longitude+"&current=temperature_2m,weather_code&timezone=auto");if(!weather.ok)throw new Error("Weather request failed");const data=await weather.json();result.innerHTML=\`<h2>\${place.name}, \${place.country_code}</h2><p>\${data.current.temperature_2m}°C · weather code \${data.current.weather_code}</p>\`;status.textContent="";}catch(error){status.textContent=error.message;}});`
 }
},
{
 id:"05", level:"Intermediate", title:"Expense Tracker", stack:"TypeScript · React",
 purpose:"Move from browser scripts to typed application state and reusable UI components.",
 concepts:["TypeScript","React state","forms","derived data"],
 architecture:"React components → typed state → derived totals → UI",
 files:{
 "src/App.tsx":`import {useMemo,useState} from "react";
type Expense={id:string;title:string;amount:number;category:string};
const seed:Expense[]=[{id:"1",title:"Internet",amount:799,category:"Bills"},{id:"2",title:"Books",amount:1200,category:"Learning"}];
export default function App(){const [items,setItems]=useState(seed);const [title,setTitle]=useState("");const [amount,setAmount]=useState("");const total=useMemo(()=>items.reduce((sum,item)=>sum+item.amount,0),[items]);function add(e:React.FormEvent){e.preventDefault();const value=Number(amount);if(!title.trim()||!Number.isFinite(value)||value<=0)return;setItems(current=>[...current,{id:crypto.randomUUID(),title:title.trim(),amount:value,category:"Other"}]);setTitle("");setAmount("");}return <main><h1>Expenses</h1><form onSubmit={add}><input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Expense"/><input value={amount} onChange={e=>setAmount(e.target.value)} type="number"/><button>Add</button></form><h2>Total ₹{total.toFixed(2)}</h2>{items.map(item=><article key={item.id}><b>{item.title}</b><span> ₹{item.amount.toFixed(2)}</span></article>)}</main>}`,
 "src/main.tsx":`import {StrictMode} from "react";import {createRoot} from "react-dom/client";import App from "./App";createRoot(document.getElementById("root")!).render(<StrictMode><App/></StrictMode>);`
 }
},
{
 id:"06", level:"Intermediate", title:"Team Task Board", stack:"React · TypeScript · Accessibility",
 purpose:"Build a multi-column workflow board and learn state ownership, controlled inputs, component composition and keyboard-friendly interaction.",
 concepts:["component design","state ownership","drag/drop concepts","accessibility"],
 architecture:"App state → Board → Column → TaskCard",
 files:{
 "src/App.tsx":`import {useState} from "react";
type Status="todo"|"doing"|"done";type Task={id:string;title:string;status:Status};
const initial:Task[]=[{id:"1",title:"Design schema",status:"todo"},{id:"2",title:"Build API",status:"doing"},{id:"3",title:"Write tests",status:"done"}];
export default function App(){const [tasks,setTasks]=useState(initial);function move(id:string,status:Status){setTasks(xs=>xs.map(x=>x.id===id?{...x,status}:x));}return <main><h1>Team board</h1><div className="board">{(["todo","doing","done"] as Status[]).map(status=><section key={status}><h2>{status}</h2>{tasks.filter(t=>t.status===status).map(t=><article key={t.id}><p>{t.title}</p><button onClick={()=>move(t.id,status==="todo"?"doing":status==="doing"?"done":"todo")}>Move</button></article>)}</section>)}</div></main>}`
 }
},
{
 id:"07", level:"Intermediate", title:"Blog CMS", stack:"Next.js · TypeScript · PostgreSQL",
 purpose:"Build a real content workflow with public pages, an admin area, database persistence and validation.",
 concepts:["App Router","Server Components","forms","SQL","authorization"],
 architecture:"Next.js route → server data access → PostgreSQL → rendered page",
 files:{
 "app/posts/page.tsx":`import {db} from "@/lib/db";export default async function Posts(){const posts=await db.post.findMany({where:{published:true},orderBy:{createdAt:"desc"}});return <main><h1>Posts</h1>{posts.map(post=><article key={post.id}><h2>{post.title}</h2><p>{post.excerpt}</p></article>)}</main>}`,
 "app/admin/posts/actions.ts":`"use server";import {revalidatePath} from "next/cache";import {requireUser} from "@/lib/auth";import {db} from "@/lib/db";export async function createPost(formData:FormData){const user=await requireUser();if(user.role!=="editor")throw new Error("Forbidden");const title=String(formData.get("title")||"").trim();const body=String(formData.get("body")||"").trim();if(!title||!body)throw new Error("Title and body are required");await db.post.create({data:{title,body,excerpt:body.slice(0,160),published:false,authorId:user.id}});revalidatePath("/posts");}`,
 "lib/db.ts":`import {PrismaClient} from "@prisma/client";export const db=new PrismaClient();`
 }
},
{
 id:"08", level:"Intermediate", title:"Learning Platform", stack:"Next.js · PostgreSQL · Authentication",
 purpose:"Build a multi-user course platform with enrollment, lesson progress and protected learner data.",
 concepts:["relational modelling","auth","authorization","transactions"],
 architecture:"Browser → Next.js server → auth/session → PostgreSQL",
 files:{
 "schema.sql":`create table users(id uuid primary key,email text unique not null);create table courses(id bigserial primary key,title text not null);create table lessons(id bigserial primary key,course_id bigint not null references courses(id),title text not null,position int not null);create table enrollments(user_id uuid references users(id),course_id bigint references courses(id),primary key(user_id,course_id));create table lesson_progress(user_id uuid references users(id),lesson_id bigint references lessons(id),completed_at timestamptz,primary key(user_id,lesson_id));`,
 "app/api/progress/route.ts":`import {NextResponse} from "next/server";import {requireUser} from "@/lib/auth";import {db} from "@/lib/db";export async function POST(request:Request){const user=await requireUser();const {lessonId}=await request.json();const lesson=await db.lesson.findUnique({where:{id:lessonId}});if(!lesson)return NextResponse.json({error:"Not found"},{status:404});const enrolled=await db.enrollment.findUnique({where:{userId_courseId:{userId:user.id,courseId:lesson.courseId}}});if(!enrolled)return NextResponse.json({error:"Forbidden"},{status:403});await db.lessonProgress.upsert({where:{userId_lessonId:{userId:user.id,lessonId}},update:{completedAt:new Date()},create:{userId:user.id,lessonId,completedAt:new Date()}});return NextResponse.json({ok:true});}`
 }
},
{
 id:"09", level:"Intermediate → Advanced", title:"Secure SaaS API", stack:"Node.js · TypeScript · PostgreSQL",
 purpose:"Learn backend engineering by building a resource API with validation, authentication, object-level authorization and stable errors.",
 concepts:["HTTP","validation","sessions","authorization","SQL transactions"],
 architecture:"HTTP request → middleware → controller → service → database",
 files:{
 "src/server.ts":`import express from "express";import {tasks} from "./routes/tasks";const app=express();app.use(express.json());app.use("/api/tasks",tasks);app.listen(3000,()=>console.log("API on :3000"));`,
 "src/routes/tasks.ts":`import {Router} from "express";import {z} from "zod";import {requireUser} from "../auth";import {db} from "../db";export const tasks=Router();const schema=z.object({title:z.string().trim().min(1).max(200)});tasks.post("/",requireUser,async(req,res)=>{const parsed=schema.safeParse(req.body);if(!parsed.success)return res.status(400).json({error:"invalid_request",details:parsed.error.flatten()});const task=await db.task.create({data:{title:parsed.data.title,ownerId:req.user.id}});res.status(201).json(task)});tasks.delete("/:id",requireUser,async(req,res)=>{const task=await db.task.findUnique({where:{id:req.params.id}});if(!task)return res.status(404).json({error:"not_found"});if(task.ownerId!==req.user.id)return res.status(403).json({error:"forbidden"});await db.task.delete({where:{id:task.id}});res.status(204).end()});`
 }
},
{
 id:"10", level:"Advanced", title:"Production Analytics Dashboard", stack:"Next.js · PostgreSQL · Redis · Playwright",
 purpose:"Build an operational dashboard and learn caching, query design, loading states, observability and end-to-end testing.",
 concepts:["aggregation","caching","performance","E2E testing"],
 architecture:"Dashboard → server query → PostgreSQL/Redis → metrics",
 files:{
 "app/dashboard/page.tsx":`import {getMetrics} from "@/lib/metrics";export default async function Dashboard(){const metrics=await getMetrics();return <main><h1>Operations</h1><div className="grid">{metrics.map(m=><article key={m.key}><span>{m.label}</span><strong>{m.value}</strong></article>)}</div></main>}`,
 "lib/metrics.ts":`import {unstable_cache} from "next/cache";import {db} from "./db";export const getMetrics=unstable_cache(async()=>{const [users,orders,revenue]=await Promise.all([db.user.count(),db.order.count(),db.order.aggregate({_sum:{total:true},where:{status:"paid"}})]);return[{key:"users",label:"Users",value:users},{key:"orders",label:"Paid orders",value:orders},{key:"revenue",label:"Revenue",value:revenue._sum.total??0}]},["dashboard-metrics"],{revalidate:60});`,
 "tests/dashboard.spec.ts":`import {test,expect} from "@playwright/test";test("dashboard shows metrics",async({page})=>{await page.goto("/dashboard");await expect(page.getByRole("heading",{name:"Operations"})).toBeVisible();await expect(page.locator("article")).toHaveCount(3);});`
 }
},
{
 id:"11", level:"Advanced", title:"AI Study Coach", stack:"Next.js · TypeScript · AI API · PostgreSQL",
 purpose:"Build an AI feature correctly: server-side API calls, structured output, retrieval context, evaluation and authorization.",
 concepts:["LLM API","structured output","RAG","evaluation","tool authorization"],
 architecture:"User → server action → authorization → retrieval → model → validated response",
 files:{
 "app/api/coach/route.ts":`import {NextResponse} from "next/server";import OpenAI from "openai";import {requireUser} from "@/lib/auth";const client=new OpenAI({apiKey:process.env.OPENAI_API_KEY});export async function POST(req:Request){const user=await requireUser();const {question}=await req.json();if(typeof question!=="string"||question.length>2000)return NextResponse.json({error:"invalid_request"},{status:400});const context=await loadRelevantLessons(user.id,question);const response=await client.responses.create({model:process.env.OPENAI_MODEL!,input:[{role:"system",content:"You are a study coach. Use the supplied course context and do not invent course facts."},{role:"user",content:"Context:\\n"+context+"\\nQuestion:\\n"+question}]});return NextResponse.json({answer:response.output_text});}async function loadRelevantLessons(userId:string,q:string){return "authorized course context for "+userId;}`,
 "lib/eval.ts":`export type Case={input:string;mustContain:string[]};export function score(answer:string,cases:Case[]){return cases.reduce((n,c)=>n+(c.mustContain.every(x=>answer.toLowerCase().includes(x.toLowerCase()))?1:0),0)/cases.length;}`
 }
},
{
 id:"12", level:"Advanced", title:"E-commerce Store", stack:"Next.js · PostgreSQL · Payments",
 purpose:"Build a commerce flow from catalogue to cart, checkout, payment confirmation and order history.",
 concepts:["cart state","transactions","payment lifecycle","webhooks","idempotency"],
 architecture:"Storefront → cart → checkout → payment provider → webhook → order",
 files:{
 "app/checkout/actions.ts":`"use server";import {db} from "@/lib/db";import {payments} from "@/lib/payments";import {requireUser} from "@/lib/auth";export async function createCheckout(cartId:string){const user=await requireUser();const cart=await db.cart.findFirst({where:{id:cartId,userId:user.id},include:{items:true}});if(!cart||cart.items.length===0)throw new Error("Cart is empty");const order=await db.order.create({data:{userId:user.id,status:"pending",total:cart.items.reduce((n,i)=>n+i.unitPrice*i.quantity,0),items:{create:cart.items.map(i=>({productId:i.productId,quantity:i.quantity,unitPrice:i.unitPrice}))}}});const payment=await payments.create({orderId:order.id,amount:order.total,idempotencyKey:"order:"+order.id});return {checkoutUrl:payment.url};}`,
 "app/api/webhooks/payment/route.ts":`import {NextResponse} from "next/server";import {verifySignature} from "@/lib/payments";import {db} from "@/lib/db";export async function POST(req:Request){const body=await req.text();const event=verifySignature(body,req.headers.get("payment-signature"));if(!event)return NextResponse.json({error:"invalid_signature"},{status:400});const seen=await db.webhookEvent.findUnique({where:{providerEventId:event.id}});if(seen)return NextResponse.json({ok:true});await db.$transaction([db.webhookEvent.create({data:{providerEventId:event.id}}),db.order.update({where:{id:event.orderId},data:{status:event.paid?"paid":"payment_failed"}})]);return NextResponse.json({ok:true});}`
 }
},
{
 id:"13", level:"Advanced", title:"URL Shortener at Scale", stack:"Next.js · PostgreSQL · Redis · System Design",
 purpose:"Use a small product to learn identifiers, caching, rate limiting, analytics and horizontal scaling.",
 concepts:["hash/id generation","cache","rate limiting","analytics","idempotency"],
 architecture:"Redirect → cache → database → analytics queue",
 files:{
 "app/api/links/route.ts":`import {NextResponse } from "next/server";import {db} from "@/lib/db";import {requireUser} from "@/lib/auth";export async function POST(req:Request){const user=await requireUser();const {url}=await req.json();new URL(url);const code=crypto.randomUUID().slice(0,7);await db.link.create({data:{code,url,ownerId:user.id}});return NextResponse.json({code,url:"/r/"+code},{status:201});}`,
 "app/r/[code]/route.ts":`import {NextResponse} from "next/server";import {cacheGet,cacheSet} from "@/lib/cache";import {db} from "@/lib/db";export async function GET(_:Request,{params}:{params:Promise<{code:string}>}){const {code}=await params;const cached=await cacheGet(code);if(cached)return NextResponse.redirect(cached);const link=await db.link.findUnique({where:{code}});if(!link)return new Response("Not found",{status:404});await cacheSet(code,link.url,300);return NextResponse.redirect(link.url);}`
 }
},
{
 id:"14", level:"Advanced", title:"TypeScript Monorepo", stack:"TypeScript · pnpm Workspaces · CI",
 purpose:"Learn how real multi-package codebases share types and utilities without creating dependency chaos.",
 concepts:["workspaces","package boundaries","shared types","CI"],
 architecture:"apps/web + apps/api → packages/ui + packages/config + packages/types",
 files:{
 "pnpm-workspace.yaml":`packages:\n  - "apps/*"\n  - "packages/*"`,
 "packages/types/src/index.ts":`export type User={id:string;email:string;role:"learner"|"admin"};export type ApiResult<T>={ok:true;data:T}|{ok:false;error:string};`,
 "packages/ui/src/Button.tsx":`import type {ButtonHTMLAttributes} from "react";export function Button(props:ButtonHTMLAttributes<HTMLButtonElement>){return <button {...props}/>}`,
 "package.json":`{"name":"fullstack-platform","private":true,"scripts":{"build":"pnpm -r build","test":"pnpm -r test","typecheck":"pnpm -r typecheck"},"devDependencies":{"typescript":"latest"}}`
 }
},
{
 id:"15", level:"Advanced", title:"Subscription SaaS", stack:"Next.js · PostgreSQL · Payments · Webhooks",
 purpose:"Build subscription state as a durable business system instead of treating checkout as the whole feature.",
 concepts:["subscription lifecycle","entitlements","webhooks","reconciliation"],
 architecture:"Checkout → provider → signed webhook → billing state → entitlements",
 files:{
 "lib/entitlements.ts":`export type Plan="free"|"pro"|"team";export function canUse(plan:Plan,feature:string){const rules:Record<Plan,string[]>={free:["read"],pro:["read","export","ai"],team:["read","export","ai","members"]};return rules[plan].includes(feature);}`,
 "app/api/billing/webhook/route.ts":`import {NextResponse} from "next/server";import {db} from "@/lib/db";import {verifyWebhook} from "@/lib/billing";export async function POST(req:Request){const raw=await req.text();const event=verifyWebhook(raw,req.headers.get("billing-signature"));if(!event)return NextResponse.json({error:"invalid_signature"},{status:400});const existing=await db.billingEvent.findUnique({where:{providerEventId:event.id}});if(existing)return NextResponse.json({ok:true});await db.$transaction(async tx=>{await tx.billingEvent.create({data:{providerEventId:event.id,type:event.type}});if(event.type==="subscription.updated")await tx.subscription.upsert({where:{providerId:event.subscription.id},update:{status:event.subscription.status,plan:event.subscription.plan},create:{providerId:event.subscription.id,status:event.subscription.status,plan:event.subscription.plan,userId:event.subscription.userId}})});return NextResponse.json({ok:true});}`
 }
},
{
 id:"16", level:"Advanced", title:"Search Platform", stack:"PostgreSQL FTS · Search Engine Concepts · Next.js",
 purpose:"Learn indexing, tokenization, ranking, filters, synchronization and rebuilds by building search into a real content platform.",
 concepts:["inverted index","ranking","facets","pagination","index rebuilds"],
 architecture:"Source DB → indexing pipeline → search index → query API → UI",
 files:{
 "lib/search.ts":`export type SearchHit={id:string;title:string;score:number};export async function search(query:string,page=1){const clean=query.trim();if(!clean)return {hits:[],page,total:0};const offset=(page-1)*20;return searchIndex.query({text:clean,offset,limit:20,fields:["title","body"],facets:["topic"]});}`,
 "scripts/rebuild-search.ts":`import {db} from "@/lib/db";import {searchIndex} from "@/lib/search-index";const batch=100;let cursor:string|undefined;while(true){const rows=await db.lesson.findMany({take:batch,...cursor?{skip:1,cursor:{id:cursor}}:{},orderBy:{id:"asc"}});if(!rows.length)break;await searchIndex.upsert(rows.map(x=>({id:x.id,title:x.title,body:x.body})));cursor=String(rows[rows.length-1].id);}console.log("search rebuild complete");`
 }
},
{
 id:"17", level:"Professional", title:"Incident & Operations Platform", stack:"Next.js · PostgreSQL · OpenTelemetry · SRE",
 purpose:"Combine the whole curriculum into an operational product: services, releases, incidents, SLOs, audit history and recovery.",
 concepts:["observability","SLOs","incident response","audit logs","recovery"],
 architecture:"Apps/services → telemetry → dashboards → incident workflow → postmortem",
 files:{
 "app/incidents/actions.ts":`"use server";import {requireUser} from "@/lib/auth";import {db} from "@/lib/db";export async function declareIncident(input:{service:string;summary:string}){const user=await requireUser();if(!["oncall","admin"].includes(user.role))throw new Error("Forbidden");return db.incident.create({data:{service:input.service,summary:input.summary,severity:"SEV-2",status:"investigating",declaredBy:user.id}});}`,
 "lib/slo.ts":`export function errorBudget(_sli:number,target:number){if(target<0||target>1)throw new Error("target must be between 0 and 1");return 1-target;}export function burnRate(allowed:number,observed:number){if(allowed<=0)return Infinity;return observed/allowed;}`,
 "docs/incident.md":`# Incident workflow\n1. Detect and declare.\n2. Assign incident commander.\n3. Mitigate customer impact.\n4. Verify recovery with telemetry.\n5. Communicate status.\n6. Preserve timeline and evidence.\n7. Write a blameless postmortem.\n8. Track corrective actions.\n`
 }
}
];