if(!self.define){let e,t={};const i=(i,n)=>(i=new URL(i+".js",n).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(t[r])return;let s={};const d=e=>i(e,r),c={module:{uri:r},exports:s,require:d};t[r]=Promise.all(n.map((e=>c[e]||d(e)))).then((e=>(o(...e),s)))}}define(["./workbox-037aaf86"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./bundle.js",revision:"544878522b7ec2a5c3ccd524129a5a90"},{url:"./index.html",revision:"d4e229d02bcd6d21d85b83b3ad72f82f"}],{})}));
