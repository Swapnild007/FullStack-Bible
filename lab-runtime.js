/* FullStack Bible — in-browser coding terminal
   Safe browser runtime: virtual files + real HTML/JavaScript execution. */
window.FSBTerminal=(()=>{
  const sessions=new Map();
  const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
  function state(id,seed){
    if(!sessions.has(id)) sessions.set(id,{cwd:'/project',files:{'index.html':seed||'<!doctype html>\n<html><body><h1>Hello FullStack Bible</h1></body></html>'},history:[]});
    return sessions.get(id);
  }
  function markup(id){
    return '<div class="terminal-wrap" data-terminal-id="'+id+'"><div class="terminal-head"><b>Terminal</b><span class="terminal-status">Browser sandbox</span></div><pre class="terminal-output" id="'+id+'-out">$ FullStack Bible terminal ready\nType <b>help</b> for commands.</pre><div class="terminal-line"><span>$</span><input id="'+id+'-in" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="help"><button onclick="FSBTerminal.run(\''+id+'\')">Run</button></div><div class="terminal-shortcuts"><button onclick="FSBTerminal.command(\''+id+'\',\'ls\')">ls</button><button onclick="FSBTerminal.command(\''+id+'\',\'pwd\')">pwd</button><button onclick="FSBTerminal.command(\''+id+'\',\'cat index.html\')">cat index.html</button><button onclick="FSBTerminal.command(\''+id+'\',\'run\')">run</button></div></div>';
  }
  function mountAll(){
    document.querySelectorAll('[data-terminal-host]').forEach(host=>{
      if(host.dataset.mounted)return;
      host.dataset.mounted='1';
      const id=host.dataset.terminalHost;
      const codeEl=host.closest('.workspace-shell')?.querySelector('.lab-code,.code');
      const seed=codeEl?.value||'';
      state(id,seed);
      host.innerHTML=markup(id);
      const input=document.getElementById(id+'-in');
      input?.addEventListener('keydown',e=>{if(e.key==='Enter')run(id)});
    });
  }
  function output(id,text,append=true){
    const el=document.getElementById(id+'-out'); if(!el)return;
    const clean=String(text);
    el.textContent=append?(el.textContent+'\n'+clean):clean;
    el.scrollTop=el.scrollHeight;
  }
  function command(id,cmd){const i=document.getElementById(id+'-in');if(i)i.value=cmd;run(id)}
  function run(id){
    const i=document.getElementById(id+'-in'),cmd=(i?.value||'').trim();
    if(!cmd)return;
    const s=sessions.get(id)||state(id);
    output(id,'$ '+cmd);
    s.history.push(cmd);
    if(cmd==='help'){output(id,'help  ls  pwd  cat <file>  run  clear  reset  echo <text>');return}
    if(cmd==='pwd'){output(id,s.cwd);return}
    if(cmd==='ls'){output(id,Object.keys(s.files).join('  '));return}
    if(cmd.startsWith('cat ')){const f=cmd.slice(4).trim();output(id,s.files[f]??'cat: '+f+': No such file');return}
    if(cmd.startsWith('echo ')){output(id,cmd.slice(5));return}
    if(cmd==='clear'){const el=document.getElementById(id+'-out');if(el)el.textContent='';return}
    if(cmd==='reset'){const codeEl=document.querySelector('[data-terminal-id="'+id+'"]')?.closest('.workspace-shell')?.querySelector('.lab-code,.code');if(codeEl){s.files['index.html']=codeEl.value;output(id,'Virtual workspace reset from editor.')}return}
    if(cmd==='run'){execute(id);return}
    output(id,'Command not available in the browser sandbox. Type help.');
  }
  function execute(id){
    const host=document.querySelector('[data-terminal-id="'+id+'"]')?.closest('.workspace-shell');
    const codeEl=host?.querySelector('.lab-code,.code');
    const code=codeEl?.value||sessions.get(id)?.files['index.html']||'';
    sessions.get(id).files['index.html']=code;
    if(/<html|<body|<!doctype/i.test(code)){
      const frame=document.createElement('iframe');
      frame.style.display='none';
      frame.sandbox='allow-scripts';
      frame.srcdoc='<!doctype html><html><body><script>const send=(t,m)=>parent.postMessage({fsbTerminal:t,msg:String(m)},"*");console.log=(...a)=>send("log",a.join(" "));console.error=(...a)=>send("error",a.join(" "));window.onerror=(m)=>send("error",m);<\\/script>'+code+'</body></html>';
      const listener=e=>{if(e.source===frame.contentWindow&&e.data?.fsbTerminal){output(id,(e.data.fsbTerminal==='error'?'✗ ':'✓ ')+e.data.msg);window.removeEventListener('message',listener)}};
      window.addEventListener('message',listener);document.body.appendChild(frame);
      setTimeout(()=>{window.removeEventListener('message',listener);frame.remove();output(id,'✓ Program finished (no console output).')},900);
    }else{
      try{const fn=new Function(code);const result=fn();output(id,'✓ JavaScript executed'+(result!==undefined?'\n'+String(result):''));}
      catch(e){output(id,'✗ '+e.name+': '+e.message)}
    }
  }
  return {mountAll,run,command,markup};
})();
document.addEventListener('DOMContentLoaded',()=>FSBTerminal.mountAll());
