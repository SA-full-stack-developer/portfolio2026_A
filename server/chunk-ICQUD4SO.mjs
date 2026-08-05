import './polyfills.server.mjs';
import{s as o,t as n,u,v as s,w as m,x as c,y as d,z as p}from"./chunk-ISWOQ4IW.mjs";var g,x;var b=new Promise((e,r)=>{g=e,x=r});function v(e,r){if(typeof e=="string"&&r)return{remoteName:e,exposedModule:r};if(typeof e=="object"&&!r)return e;throw new Error("unexpected arguments: please pass options or a remoteName/exposedModule-pair")}function f(e){typeof window<"u"&&console.error(e)}async function N(e){let r=await fetch(e);if(!r.ok)throw new Error(`Failed to fetch remoteEntry at ${e}: ${r.status} ${r.statusText}`);let t=await r.json();if(!t.name)throw new Error(`remoteEntry at ${e} does not declare a 'name'`);return t.name}async function B(e,r){let t=v(e,r),{fallback:a}=t;try{let i=await b;if(!t.remoteName&&t.remoteEntry&&(t.remoteName=await N(t.remoteEntry)),t.remoteEntry&&(i=await i.initRemoteEntry(t.remoteEntry,t.remoteName)),!t.remoteName){let l="unexpected arguments: Please pass remoteName or remoteEntry";if(!a)throw new Error(l);return f(l),a}return await i.loadRemoteModule(t.remoteName,t.exposedModule)}catch(i){if(a)return f("error loading remote module: "+(i instanceof Error?i.message:String(i))),a;throw i}}var O={TagSelector:{tag:c,title:"Tag Selector - linkedSignal",remoteName:"lab001",exposedModule:"./TagSelector",exportName:"TagSelector",component:null,inputs:{cssVars:{"--color-border":"#ccc","--color-accent":"#6366f1","--color-on-accent":"#fff"},text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Vivamus ut dolor nec sapien commodo laoreet sit amet eget diam.
Mauris eget arcu in elit tincidunt egestas sed id orci.
Maecenas in elit nec quam vulputate mollis.
Nullam mollis dolor sed nulla ultricies, porta cursus magna laoreet.
Vivamus facilisis diam vitae leo maximus vestibulum.
Praesent scelerisque nunc nec erat tincidunt pretium.
Mauris elementum justo sagittis justo lacinia, a tincidunt arcu ultrices.
Quisque nec purus vitae velit vulputate interdum sit amet nec ligula.
Nulla nec est id sapien malesuada maximus non quis metus.
Nulla elementum velit a imperdiet luctus.
Mauris eleifend nibh in auctor pulvinar.
Nullam vitae magna vel neque finibus feugiat sit amet non eros.
Etiam hendrerit augue eu lacus maximus, sit amet facilisis nisi ullamcorper.`}},CountrySearch:{tag:d,title:"Country Search - debounced",remoteName:"lab001",exposedModule:"./CountrySearch",exportName:"CountrySearch",component:null,inputs:{cssVars:{"--color-border":"#ccc","--color-muted":"#888","--color-error":"#d33"},text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Vivamus ut dolor nec sapien commodo laoreet sit amet eget diam.
Mauris eget arcu in elit tincidunt egestas sed id orci.
Maecenas in elit nec quam vulputate mollis.
Nullam mollis dolor sed nulla ultricies, porta cursus magna laoreet.
Vivamus facilisis diam vitae leo maximus vestibulum.
Praesent scelerisque nunc nec erat tincidunt pretium.
Mauris elementum justo sagittis justo lacinia, a tincidunt arcu ultrices.
Quisque nec purus vitae velit vulputate interdum sit amet nec ligula.
Nulla nec est id sapien malesuada maximus non quis metus.
Nulla elementum velit a imperdiet luctus.
Mauris eleifend nibh in auctor pulvinar.
Nullam vitae magna vel neque finibus feugiat sit amet non eros.
Etiam hendrerit augue eu lacus maximus, sit amet facilisis nisi ullamcorper.`}},QrGenerator:{tag:p,title:"QR Generator - injectAsync",remoteName:"lab001",exposedModule:"./QrGenerator",exportName:"QrGenerator",component:null,inputs:{cssVars:{"--color-border":"#ccc","--color-primary":"#1a1a1a","--color":"#fff"},text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Vivamus ut dolor nec sapien commodo laoreet sit amet eget diam.
Mauris eget arcu in elit tincidunt egestas sed id orci.
Maecenas in elit nec quam vulputate mollis.
Nullam mollis dolor sed nulla ultricies, porta cursus magna laoreet.
Vivamus facilisis diam vitae leo maximus vestibulum.
Praesent scelerisque nunc nec erat tincidunt pretium.
Mauris elementum justo sagittis justo lacinia, a tincidunt arcu ultrices.
Quisque nec purus vitae velit vulputate interdum sit amet nec ligula.
Nulla nec est id sapien malesuada maximus non quis metus.
Nulla elementum velit a imperdiet luctus.
Mauris eleifend nibh in auctor pulvinar.
Nullam vitae magna vel neque finibus feugiat sit amet non eros.
Etiam hendrerit augue eu lacus maximus, sit amet facilisis nisi ullamcorper.`}},BorderGradient:{tag:o,title:"Border Gradient",remoteName:"lab001",exposedModule:"./BorderGradient",exportName:"BorderGradient",component:null,inputs:{cssVars:{"--bg-color":"#161616","--conic-gradient":"conic-gradient(#4f8ef7, #7c5cbf, #f44336, #ffb100, #00d26a, #f5c518, #4f8ef7)","--inset":"4px","--border-radius":"8px","--text-color":"#f0f0f0","--animation-time":"3s"}}},BorderGradientBlur:{tag:o,title:"Border Gradient Blur",remoteName:"lab001",exposedModule:"./BorderGradient",exportName:"BorderGradient",component:null,inputs:{cssVars:{"--bg-color":"#161616","--conic-gradient":"conic-gradient(#4f8ef7, #7c5cbf, #f44336, #ffb100, transparent, #4f8ef7)","--inset":"4px","--border-radius":"8px","--text-color":"#f0f0f0","--animation-time":"1s"}}},BorderGradienttTest:{tag:o,title:"Border Gradient Mini",remoteName:"lab001",exposedModule:"./BorderGradient",exportName:"BorderGradient",component:null,inputs:{cssVars:{"--bg-color":"#161616","--conic-gradient":"conic-gradient(#4f8ef7, #7c5cbf, #f44336, #ffb100, #00d26a, #f5c518, #4f8ef7)","--inset":"1px","--border-radius":"8px","--text-color":"#f0f0f0","--animation-time":"3s"}}},CardEffects:{tag:n,title:"Tilt - Spotlight Effects",remoteName:"lab001",exposedModule:"./CardEffects",exportName:"CardEffects",component:null,inputs:{cssVars:{"--bg-color":"#161616","--text-color":"#f0f0f0"}}},CardEffectsBlue:{tag:n,title:"Tilt - Spotlight Effects (blue)",remoteName:"lab001",exposedModule:"./CardEffects",exportName:"CardEffects",component:null,inputs:{cssVars:{"--bg-color":"#161616","--text-color":"#f0f0f0","--spotlight-color":"#4f8ef7,transparent, transparent"}}},CardEffectsCenterTransparent:{tag:n,title:"Tilt - Spotlight (center transparent)",remoteName:"lab001",exposedModule:"./CardEffects",exportName:"CardEffects",component:null,inputs:{cssVars:{"--bg-color":"#161616","--text-color":"#f0f0f0","--spotlight-color":"transparent,#4f8ef7,transparent"}}},LiquidProgressBar:{tag:u,title:"Liquid progress bar",remoteName:"lab001",exposedModule:"./LiquidProgressBar",exportName:"LiquidProgressBar",component:null,inputs:{cssVars:{"--height":"100px","--fill":"#7c5cbf"}}},FlipCard:{tag:s,title:"Flip card click",remoteName:"lab001",exposedModule:"./FlipCard",exportName:"FlipCard",component:null,inputs:{cssVars:{"--width":"100px","--height":"100px","--bg-color-front":"#161616","--bg-color-back":"#9e9e9e","--border-front":"solid 2px #4f8ef7","--border-back":"solid 2px #f44336","--border-radius":"10px"}}},FlipCardHover:{tag:s,title:"Flip card hover",remoteName:"lab001",exposedModule:"./FlipCard",exportName:"FlipCard",component:null,inputs:{cssVars:{"--width":"100px","--height":"100px","--bg-color-front":"#161616","--bg-color-back":"#9e9e9e","--border-front":"solid 2px #4f8ef7","--border-back":"solid 2px #f44336","--border-radius":"10px"},isHover:!0}},SplitText:{tag:m,title:"Split text",remoteName:"lab001",exposedModule:"./SplitTextLab",exportName:"SplitTextLab",component:null,inputs:{cssVars:{"--margin":"0.2rem","--bg-color":"#161616","--color":"#9e9e9e"},text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Vivamus ut dolor nec sapien commodo laoreet sit amet eget diam.
Mauris eget arcu in elit tincidunt egestas sed id orci.
Maecenas in elit nec quam vulputate mollis.
Nullam mollis dolor sed nulla ultricies, porta cursus magna laoreet.
Vivamus facilisis diam vitae leo maximus vestibulum.
Praesent scelerisque nunc nec erat tincidunt pretium.
Mauris elementum justo sagittis justo lacinia, a tincidunt arcu ultrices.
Quisque nec purus vitae velit vulputate interdum sit amet nec ligula.
Nulla nec est id sapien malesuada maximus non quis metus.
Nulla elementum velit a imperdiet luctus.
Mauris eleifend nibh in auctor pulvinar.
Nullam vitae magna vel neque finibus feugiat sit amet non eros.
Etiam hendrerit augue eu lacus maximus, sit amet facilisis nisi ullamcorper.`}}};export{B as a,O as b};
