import{c as r,j as o,X as l,h as u}from"./index.3dd5cc01.js";import{R as p}from"./rotate-cw.f915a1bd.js";import{d as _}from"./debounce.c2d20996.js";const x="_rotate_1dspl_1",g="_isRotating_1dspl_5",d="_rotating_1dspl_1",c={rotate:x,isRotating:g,rotating:d};function I({isRotating:t}){const e=r(c.rotate,{[c.isRotating]:t});return o("span",{className:e,children:o(p,{width:16})})}const{useCallback:m,useState:R,useMemo:h}=u;function f(t){const[,e]=l(t),[n,i]=R(""),s=h(()=>_(e,300),[e]);return[m(a=>{i(a.target.value),s(a.target.value)},[s]),n]}const T="_input_16a1f_1",C={input:T};function N(t){const[e,n]=f(t.textAtom);return o("input",{className:C.input,type:"text",value:n,onChange:e,placeholder:t.placeholder})}export{I as R,N as T};
