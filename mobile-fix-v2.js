(()=>{
const css=`
/* Mobile-first reader correction */
html,body{margin:0!important;width:100%!important;min-width:0!important;overflow-x:hidden!important}
body{max-width:100vw!important}
.app,.workspace,.workspace.open,.wscontent,.reader,.readerMain,.lessonSections,.learning-cockpit{width:100%!important;min-width:0!important;max-width:none!important}
.reader>*{max-width:100%!important}
@media(max-width:760px){
 .workspace.open{display:block!important;width:100vw!important}
 .wscontent{width:100vw!important;max-width:100vw!important}
 .top{width:100vw!important;max-width:100vw!important;box-sizing:border-box!important}
 .dashboard{width:100%!important;max-width:none!important;box-sizing:border-box!important}
 .reader{display:block!important;width:100%!important;box-sizing:border-box!important;padding:18px 14px 56px!important}
 .reader>*{width:100%!important;box-sizing:border-box!important}
 .reader h2{font-size:clamp(30px,9.5vw,44px)!important;letter-spacing:-.055em!important;line-height:1.04!important;overflow-wrap:break-word!important;word-break:normal!important}
 .reader .sub{max-width:100%!important;overflow-wrap:break-word!important}
 .lessonSections{display:block!important;width:100%!important;max-width:none!important}
 .lessonSections>*{width:100%!important;max-width:none!important;box-sizing:border-box!important}
 .deep-card,.concept,.step,.code-lab,.practice{width:100%!important;max-width:none!important;box-sizing:border-box!important}
 .deep-card{overflow:hidden!important}
 .deep-card p,.deep-card li,.mechanic span,.concept p,.concept li,.step span{overflow-wrap:anywhere!important;word-break:break-word!important}
 .cockpit-grid{display:block!important;width:100%!important}
 .cockpit-grid>*{width:100%!important;margin-bottom:12px!important}
 .code-lab{overflow:hidden!important}
 .lab-editor{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;overflow-x:auto!important;white-space:pre!important}
 .lab-output{width:100%!important;box-sizing:border-box!important;overflow:auto!important}
 .practice textarea{width:100%!important;max-width:100%!important;box-sizing:border-box!important}
 .lesson-map-mini{width:100%!important;max-width:100%!important;overflow-x:auto!important;box-sizing:border-box!important}
}
`;
const s=document.createElement('style');s.id='fsb-mobile-fix-v2';s.textContent=css;document.head.appendChild(s);

const KEY='fullstack-bible-route-v2';
function saveRoute(){
 try{localStorage.setItem(KEY,JSON.stringify({workspace:document.querySelector('.workspace')?.classList.contains('open'),domain:window.currentDomain??0,lesson:window.currentLesson??0}));}catch(e){}
}
function restoreRoute(){
 try{
  const r=JSON.parse(localStorage.getItem(KEY)||'null');
  if(!r?.workspace)return;
  const open=()=>{
   if(typeof window.enterWorkspace==='function') window.enterWorkspace();
   else document.querySelector('.landing')?.classList.add('hidden'),document.querySelector('.workspace')?.classList.add('open');
   const d=Number.isInteger(r.domain)?r.domain:0,l=Number.isInteger(r.lesson)?r.lesson:0;
   if(typeof window.selectDomain==='function') window.selectDomain(d,false);
   if(typeof window.openLesson==='function') window.openLesson(l);
  };
  setTimeout(open,80);
 }catch(e){}
}
function patch(){
 if(window.__fsbRouteV2)return;window.__fsbRouteV2=true;
 ['enterWorkspace','openLesson','selectDomain','goHome','nextLesson'].forEach(name=>{
  const fn=window[name];
  if(typeof fn!=='function')return;
  window[name]=function(...args){
   const result=fn.apply(this,args);saveRoute();return result;
  };
 });
 window.addEventListener('beforeunload',saveRoute);
 restoreRoute();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',patch,{once:true});else patch();
})();
