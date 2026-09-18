/* FullStack Bible — mobile coding terminal runtime
   Browser sandbox only: no network, no device filesystem, no arbitrary OS commands. */
(function(){
  'use strict';
  const sessions=new Map();
  const STORAGE='fsb-terminal-sessions-v2';

  const css=[
    '.fsb-terminal{margin-top:12px;border:1px solid #2d2d33;border-radius:18px;overflow:hidden;background:#101014;color:#f5f5f7;box-shadow:0 14px 35px rgba(0,0,0,.12);font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",Arial,sans-serif}',
    '.fsb-terminal-head{display:flex;align-items:center;justify-content:space-between;padding:11px 13px;background:#1b1b20;border-bottom:1px solid #303037;font-size:11px}',
    '.fsb-terminal-head strong{font-size:12px}.fsb-terminal-head span{color:#8e8e93;font-weight:700}',
    '.fsb-terminal-output{margin:0;padding:13px;min-height:130px;max-height:260px;overflow:auto;white-space:pre-wrap;word-break:break-word;background:#101014;color:#e9e9ed;font:500 11px/1.65 ui-monospace,SFMono-Regular,Menlo,monospace}',
    '.fsb-terminal-output .ok{color:#34c759}.fsb-terminal-output .err{color:#ff6b63}.fsb-terminal-output .muted{color:#8e8e93}',
    '.fsb-terminal-line{display:flex;align-items:center;gap:8px;padding:9px 10px;border-top:1px solid #303037}.fsb-terminal-line b{color:#34c759;font:700 12px ui-monospace,monospace}',
    '.fsb-terminal-line input{min-width:0;flex:1;border:0;outline:0;background:transparent;color:#fff;font:500 11px ui-monospace,monospace}',
    '.fsb-terminal-line button,.fsb-terminal-shortcuts button{border:0;border-radius:10px;padding:8px 10px;background:#2c2c32;color:#fff;font:700 10px inherit;white-space:nowrap}',
    '.fsb-terminal-shortcuts{display:flex;gap:6px;overflow:auto;padding:0 10px 10px}.fsb-terminal-shortcuts button{color:#d7d7dc}',
    '.fsb-terminal-files{display:flex;gap:6px;overflow:auto;padding:9px 10px;border-bottom:1px solid #303037;background:#17171b}.fsb-terminal-file{border:0;border-radius:9px;padding:7px 9px;background:#25252b;color:#c8c8ce;font:700 10px inherit}.fsb-terminal-file.active{background:#fff;color:#111}',
    '@media(max-width:650px){.fsb-terminal-output{max-height:210px}.fsb-terminal-line input{font-size:12px}}'
  ].join('');
  function injectStyle(){
    if(document.getElementById('fsb-terminal-style'))return;
    const s=document.createElement('style');s.id='fsb-terminal-style';s.textContent=css;document.head.appendChild(s);
  }
  function esc(v){return String(v).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));}
  function loadSaved(){
    try{return JSON.parse(localStorage.getItem(STORAGE)||'{}')}catch(e){return{}}
  }
  function saveSaved(){
    try{localStorage.setItem(STORAGE,JSON.stringify(Object.fromEntries([...sessions].map(([k,v])=>[k,{files:v.files,cwd:v.cwd,history:v.history.slice(-40)}]))))}catch(e){}
  }
  function getSession(id,seed){
    if(sessions.has(id))return sessions.get(id);
    const all=loadSaved(),saved=all[id];
    const s=saved||{cwd:'/project',files:{'index.html':seed||'<!doctype html>\n<html><body><h1>FullStack Bible</h1></body></html>'},history:[]};
    sessions.set(id,s);return s;
  }
  function hostContext(host){
    const shell=host.closest('.workspace-shell')||host.parentElement;
    return {shell,editor:shell?.querySelector('.lab-code,.code'),answer:shell?.querySelector('.lab-answer')};
  }
  function syncEditor(s,ctx){
    if(ctx.editor){
      const name=s.activeFile||'index.html';
      s.files[name]=ctx.editor.value;
    }
  }
  function mount(host){
    if(host.dataset.fsbMounted)return;
    host.dataset.fsbMounted='1';
    injectStyle();
    const id=host.dataset.terminalHost||('terminal-'+Math.random().toString(36).slice(2));
    host.dataset.terminalId=id;
    const ctx=hostContext(host);
    const seed=ctx.editor?.value||'';
    const s=getSession(id,seed);
    if(!s.files||!Object.keys(s.files).length)s.files={'index.html':seed};
    if(!s.activeFile)s.activeFile=Object.keys(s.files)[0]||'index.html';
    if(ctx.editor && !s.files[s.activeFile])s.files[s.activeFile]=ctx.editor.value;
    host.innerHTML=markup(id,s);
    refreshFiles(id);
    renderOutput(id,'$ FullStack Bible terminal ready\nType help for commands.','muted');
    if(ctx.editor)ctx.editor.addEventListener('input',()=>{syncEditor(s,ctx);saveSaved()});
  }
  function markup(id,s){
    const files=Object.keys(s.files||{});
    return '<div class="fsb-terminal" data-fsb-terminal="'+esc(id)+'">'+
      '<div class="fsb-terminal-head"><strong>Terminal</strong><span>Browser sandbox</span></div>'+
      '<div class="fsb-terminal-files" id="'+esc(id)+'-files"></div>'+
      '<pre class="fsb-terminal-output" id="'+esc(id)+'-output"></pre>'+
      '<div class="fsb-terminal-line"><b>$</b><input id="'+esc(id)+'-input" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="help"><button type="button" data-run="'+esc(id)+'">Run</button></div>'+
      '<div class="fsb-terminal-shortcuts">'+
      '<button type="button" data-cmd="'+esc(id)+'" data-command="help">help</button>'+
      '<button type="button" data-cmd="'+esc(id)+'" data-command="ls">ls</button>'+
      '<button type="button" data-cmd="'+esc(id)+'" data-command="pwd">pwd</button>'+
      '<button type="button" data-cmd="'+esc(id)+'" data-command="cat '+esc(s.activeFile||'index.html')+'">cat</button>'+
      '<button type="button" data-cmd="'+esc(id)+'" data-command="run">run</button>'+
      '</div></div>';
  }
  function find(id){return document.querySelector('[data-fsb-terminal="'+CSS.escape(id)+']')}
  function outputEl(id){return document.getElementById(id+'-output')}
  function renderOutput(id,text,kind){
    const el=outputEl(id);if(!el)return;
    const line=document.createElement('div');line.className=kind||'';
    line.textContent=text;el.appendChild(line);el.scrollTop=el.scrollHeight;
  }
  function clearOutput(id){const el=outputEl(id);if(el)el.textContent=''}
  function refreshFiles(id){
    const root=find(id),bar=document.getElementById(id+'-files'),s=sessions.get(id);if(!root||!bar||!s)return;
    bar.textContent='';
    Object.keys(s.files).forEach(name=>{
      const b=document.createElement('button');b.type='button';b.className='fsb-terminal-file'+(name===s.activeFile?' active':'');b.textContent=name;
      b.addEventListener('click',()=>selectFile(id,name));bar.appendChild(b);
    });
  }
  function selectFile(id,name){
    const s=sessions.get(id),ctx=hostContext(find(id));if(!s||!ctx.editor||!(name in s.files))return;
    syncEditor(s,ctx);s.activeFile=name;ctx.editor.value=s.files[name];refreshFiles(id);saveSaved();
    renderOutput(id,'Opened '+name,'muted');
  }
  function command(id,raw){
    const s=sessions.get(id),ctx=hostContext(find(id));if(!s)return;
    const cmd=String(raw||'').trim();if(!cmd)return;
    syncEditor(s,ctx);s.history.push(cmd);saveSaved();renderOutput(id,'$ '+cmd);
    if(cmd==='help'){renderOutput(id,'help | ls | pwd | cd <dir> | touch <file> | mkdir <dir> | cat <file> | write <file> <text> | run | node <file.js> | tsc <file.ts> | clear | reset','muted');return}
    if(cmd==='pwd'){renderOutput(id,s.cwd);return}
    if(cmd==='ls'){renderOutput(id,Object.keys(s.files).join('  ')||'(empty)');return}
    if(cmd==='clear'){clearOutput(id);return}
    if(cmd==='cd /project'||cmd==='cd .'){s.cwd='/project';renderOutput(id,s.cwd);return}
    if(cmd.startsWith('cd ')){renderOutput(id,'cd: browser sandbox has one project directory: /project','err');return}
    if(cmd.startsWith('cat ')){const name=cmd.slice(4).trim();renderOutput(id,s.files[name]??'cat: '+name+': No such file','');return}
    if(cmd.startsWith('touch ')){const name=cmd.slice(6).trim();if(!validFile(name)){renderOutput(id,'touch: invalid file name','err');return}s.files[name]=s.files[name]||'';s.activeFile=name;refreshFiles(id);saveSaved();syncEditor(s,ctx);if(ctx.editor)ctx.editor.value=s.files[name];renderOutput(id,'created '+name,'ok');return}
    if(cmd.startsWith('mkdir ')){const name=cmd.slice(6).trim();if(!name||/[\\/]/.test(name)){renderOutput(id,'mkdir: invalid directory name','err');return}s.files[name+'/.keep']='';saveSaved();refreshFiles(id);renderOutput(id,'created '+name+'/','ok');return}
    if(cmd.startsWith('write ')){const m=cmd.match(/^write\\s+(\\S+)\\s+([\\s\\S]*)$/);if(!m){renderOutput(id,'usage: write <file> <text>','err');return}s.files[m[1]]=m[2];s.activeFile=m[1];refreshFiles(id);if(ctx.editor)ctx.editor.value=s.files[s.activeFile];saveSaved();renderOutput(id,'wrote '+m[1],'ok');return}
    if(cmd==='reset'){reset(id);return}
    if(cmd==='run'){executeActive(id);return}
    if(cmd.startsWith('node ')){executeJavaScript(id,cmd.slice(5).trim());return}
    if(cmd.startsWith('tsc ')){typeCheck(id,cmd.slice(4).trim());return}
    if(cmd==='npm test'||cmd==='npm run test'){renderOutput(id,'Built-in lab test runner: use the Lab Test tab for task-specific acceptance checks.','muted');return}
    renderOutput(id,'command not found: '+cmd+'\nType help to see available commands.','err');
  }
  function validFile(name){return !!name&&!name.includes('..')&&!/^\\//.test(name)&&!/[<>]/.test(name)}
  function executeActive(id){
    const s=sessions.get(id);if(!s)return;
    const name=s.activeFile||'index.html',code=s.files[name]||'';
    if(/\\.html?$/i.test(name)||/<(!doctype|html|body)\\b/i.test(code)){executeHTML(id,code);return}
    if(/\\.m?js$/i.test(name)||/\\.cjs$/i.test(name)){executeJavaScript(id,name);return}
    if(/\\.ts$/i.test(name)){typeCheck(id,name);return}
    renderOutput(id,'No browser runner for '+name+'. Try node '+name+' or tsc '+name+'.','err');
  }
  function frameRun(id,srcdoc){
    const root=find(id);if(!root)return;
    const old=root.querySelector('iframe.fsb-runner');if(old)old.remove();
    const frame=document.createElement('iframe');frame.className='fsb-runner';frame.hidden=true;frame.sandbox='allow-scripts';
    const onMessage=e=>{if(e.source!==frame.contentWindow||e.data?.fsbTerminalId!==id)return;renderOutput(id,(e.data.level==='error'?'✗ ':'✓ ')+e.data.message,e.data.level==='error'?'err':'ok')};
    window.addEventListener('message',onMessage);
    frame.addEventListener('load',()=>{setTimeout(()=>{window.removeEventListener('message',onMessage);frame.remove()},1200)},{once:true});
    frame.srcdoc=srcdoc;root.appendChild(frame);
  }
  function bridge(id){
    return '<script>(function(){var id='+JSON.stringify(id)+';window.onerror=function(m,s,l,c,e){parent.postMessage({fsbTerminalId:id,level:"error",message:m+" (line "+l+")"},"*")};var o=console.log;console.log=function(){o.apply(console,arguments);parent.postMessage({fsbTerminalId:id,level:"log",message:Array.prototype.slice.call(arguments).join(" ")},"*")};var e=console.error;console.error=function(){e.apply(console,arguments);parent.postMessage({fsbTerminalId:id,level:"error",message:Array.prototype.slice.call(arguments).join(" ")},"*")};})();<\\/script>';
  }
  function executeHTML(id,code){
    let html=code;
    const b=bridge(id);
    if(/<\\/body>/i.test(html))html=html.replace(/<\\/body>/i,b+'</body>');else html+=b;
    frameRun(id,html);
    renderOutput(id,'Preview executed. Check the page preview in the Lab/Project workspace.','ok');
  }
  function executeJavaScript(id,name){
    const s=sessions.get(id),code=s?.files[name];if(code===undefined){renderOutput(id,'node: '+name+': No such file','err');return}
    const safe=code.replace(/<\\/script/gi,'<\\\\/script');
    frameRun(id,'<!doctype html><html><body>'+bridge(id)+'<script>'+safe+'<\\/script></body></html>');
    renderOutput(id,'Running '+name+'...','muted');
  }
  function typeCheck(id,name){
    const s=sessions.get(id),code=s?.files[name];if(code===undefined){renderOutput(id,'tsc: '+name+': No such file','err');return}
    const errors=[];
    if(!/\\b(type|interface|const|let|function|class)\\b/.test(code))errors.push('No TypeScript declarations detected.');
    if(/: *any\\b/.test(code))errors.push('explicit any detected; prefer a precise type or unknown at an external boundary.');
    if(/@ts-ignore/.test(code))errors.push('@ts-ignore detected; fix the underlying type problem.');
    if(errors.length)errors.forEach(e=>renderOutput(id,'✗ '+e,'err'));else renderOutput(id,'✓ TypeScript structural checks passed for '+name,'ok');
  }
  function reset(id){
    const s=sessions.get(id),ctx=hostContext(find(id));if(!s)return;
    const seed=ctx.editor?.defaultValue||'<!doctype html>\n<html><body><h1>FullStack Bible</h1></body></html>';
    s.files={'index.html':seed};s.activeFile='index.html';refreshFiles(id);if(ctx.editor)ctx.editor.value=seed;saveSaved();renderOutput(id,'Workspace reset.','muted');
  }
  function run(id){const input=document.getElementById(id+'-input');command(id,input?.value||'');if(input)input.value=''}
  function mountAll(){injectStyle();document.querySelectorAll('[data-terminal-host]').forEach(mount)}
  document.addEventListener('click',e=>{
    const runBtn=e.target.closest('[data-run]');if(runBtn){run(runBtn.dataset.run);return}
    const cmd=e.target.closest('[data-cmd]');if(cmd)command(cmd.dataset.cmd,cmd.dataset.command);
  });
  document.addEventListener('keydown',e=>{
    if(e.key!=='Enter')return;
    const input=e.target.closest('.fsb-terminal-line input');if(input)run(input.id.replace(/-input$/,''));
  });
  window.FSBTerminal={mountAll,run,command,reset};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mountAll);else mountAll();
})();