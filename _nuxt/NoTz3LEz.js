import{C as o,c,D as f,E as d,G as v,H as l,I as i,J as h,K as m}from"./BrRKAZzO.js";function U(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=c(!1),n=c({});f(()=>{n.value=s.value?{}:d(a)});const r=t.push(n.value,e);return v(n,u=>{r.patch(u)}),m()&&(l(()=>{r.dispose()}),i(()=>{s.value=!0}),h(()=>{s.value=!1})),r}export{U as u};
