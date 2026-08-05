import './polyfills.server.mjs';
function m(o){if(!o)return;let t=window.scrollY,r=o.getBoundingClientRect().top+t,s=650,c=performance.now(),e=i=>{let a=i-c,n=Math.min(a/s,1),l=n<.5?2*n*n:-1+(4-2*n)*n;window.scrollTo(0,t+(r-t)*l),n<1&&requestAnimationFrame(e)};requestAnimationFrame(e)}export{m as a};
