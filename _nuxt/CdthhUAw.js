import{aK as o,c,L as f,M as d,N as v,O as l,P as i,Q as h,aL as m}from"./BklhCERQ.js";function U(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=c(!1),n=c({});f(()=>{n.value=s.value?{}:m(a)});const r=t.push(n.value,e);return d(n,u=>{r.patch(u)}),h()&&(v(()=>{r.dispose()}),l(()=>{s.value=!0}),i(()=>{s.value=!1})),r}export{U as u};
