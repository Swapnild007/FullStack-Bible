(()=>{
const css=`
/* FullStack Bible — mobile reading system */
html,body{width:100%;max-width:100%;overflow-x:hidden!important}
*,*:before,*:after{max-width:100%}
img,svg,video,canvas,iframe{max-width:100%;height:auto}
button,input,textarea,select{max-width:100%}
.wscontent,.reader,.dashboard,.readerMain,.lessonSections,.learning-cockpit,.cockpit-grid,.deep-card,.concept,.step,.lessonPanel,.mapCard{min-width:0!important;max-width:100%!important}
.lessonSections,.learning-cockpit{overflow-wrap:anywhere;word-break:normal}
.deep-card p,.deep-card li,.concept p,.concept li,.step span,.reader .sub,.readerBack{overflow-wrap:anywhere}
.lab-editor{width:100%!important;min-width:0!important;white-space:pre-wrap!important;overflow-x:auto!important}
@media(max-width:760px){
  .workspace.open{display:block!important;min-height:100svh}
  .wsnav{position:relative!important;width:100%!important;height:auto!important;border-right:0!important;border-bottom:1px solid rgba(25,53,78,.10)!important;padding:10px!important}
  .wsbrand{padding:0 6px 8px!important}
  .wsnav .wssection,.wsnav .navitem:nth-of-type(n+5){display:none!important}
  .wsnav .navitem{display:inline-flex!important;width:auto!important;margin:2px!important;padding:8px 10px!important}
  .wscontent{width:100%!important;overflow:hidden!important}
  .top{height:auto!important;min-height:60px!important;padding:10px 14px!important;gap:8px!important;flex-wrap:wrap!important}
  .topRight{width:100%!important;display:flex!important}
  .search{width:100%!important;min-width:0!important}
  .homeTop{display:block!important}
  .dashboard{width:100%!important;padding:22px 14px 55px!important}
  .dashboard h2{font-size:32px!important;line-height:1.05!important}
  .intro{font-size:12px!important}
  .summary{grid-template-columns:repeat(2,minmax(0,1fr))!important}
  .domainGrid,.cockpit-grid{grid-template-columns:1fr!important}
  .reader{width:100%!important;padding:0 14px 45px!important;overflow:hidden!important}
  .reader h2{font-size:clamp(32px,10vw,46px)!important;line-height:1.02!important;overflow-wrap:anywhere}
  .reader .sub{font-size:13px!important;line-height:1.55!important}
  .lessonProgress{max-width:100%!important}
  .lessonSections{width:100%!important}
  .lessonSections>*{max-width:100%!important}
  .lesson-map-mini{max-width:100%!important;overflow-x:auto!important;overscroll-behavior-x:contain!important}
  .deep-card{padding:17px!important;border-radius:17px!important}
  .deep-card h3{font-size:16px!important;line-height:1.25!important}
  .deep-card p,.deep-card li{font-size:13px!important;line-height:1.75!important}
  .chips{max-width:100%!important}
  .chip{font-size:7px!important}
  .mechanic{align-items:flex-start!important}
  .mechanic span{font-size:12px!important;line-height:1.65!important;min-width:0!important}
  .code-lab{width:100%!important;max-width:100%!important}
  .lab-editor{min-height:220px!important;font-size:11px!important;white-space:pre!important}
  .lab-output{max-width:100%!important;overflow:auto!important}
  .practice textarea{min-height:150px!important;font-size:12px!important}
  .readerActions{display:flex!important;gap:8px!important;flex-wrap:wrap!important}
  .readerActions button{flex:1 1 120px!important}
}
`;
const apply=()=>{if(document.getElementById('fsb-mobile-layout'))return;const s=document.createElement('style');s.id='fsb-mobile-layout';s.textContent=css;document.head.appendChild(s)};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});else apply();
})();
