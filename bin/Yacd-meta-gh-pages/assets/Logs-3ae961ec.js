import{r as f,R as y,i as d,u as T,j as a,b as p,d as j,O as R,P as w,x as L,Q as W,C as k,S as N,T as C,U as O,g as I,V as z,h as E}from"./index-177aaf6e.js";import{r as $,s as M,f as A}from"./logs-0b7bd8ce.js";import{d as B}from"./debounce-c1ba2006.js";import{u as F}from"./useRemainingViewPortHeight-d05e2613.js";import{F as H,p as D}from"./Fab-85c6fd1d.js";import{P as V,a as Q}from"./play-68fc9b62.js";function v(){return v=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},v.apply(this,arguments)}function U(e,r){if(e==null)return{};var t=Y(e,r),n,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function Y(e,r){if(e==null)return{};var t={},n=Object.keys(e),o,s;for(s=0;s<n.length;s++)o=n[s],!(r.indexOf(o)>=0)&&(t[o]=e[o]);return t}var b=f.forwardRef(function(e,r){var t=e.color,n=t===void 0?"currentColor":t,o=e.size,s=o===void 0?24:o,i=U(e,["color","size"]);return y.createElement("svg",v({ref:r,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),y.createElement("circle",{cx:"11",cy:"11",r:"8"}),y.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))});b.propTypes={color:d.string,size:d.oneOfType([d.string,d.number])};b.displayName="Search";const q=b,G="_RuleSearch_jkjcs_1",J="_RuleSearchContainer_jkjcs_10",K="_inputWrapper_jkjcs_20",X="_input_jkjcs_20",Z="_iconWrapper_jkjcs_45",g={RuleSearch:G,RuleSearchContainer:J,inputWrapper:K,input:X,iconWrapper:Z};function ee({dispatch:e,searchText:r,updateSearchText:t}){const{t:n}=T(),[o,s]=f.useState(r),i=f.useCallback(c=>{e(t(c))},[e,t]),h=f.useMemo(()=>B(i,300),[i]),m=c=>{s(c.target.value),h(c.target.value)};return a("div",{className:g.RuleSearch,children:p("div",{className:g.RuleSearchContainer,children:[a("div",{className:g.inputWrapper,children:a("input",{type:"text",value:o,onChange:m,className:g.input,placeholder:n("Search")})}),a("div",{className:g.iconWrapper,children:a(q,{size:20})})]})})}const te=e=>({searchText:R(e),updateSearchText:w}),oe=j(te)(ee),re="_logMeta_pycfb_1",ne="_logType_pycfb_8",ae="_logTime_pycfb_17",se="_logText_pycfb_22",ce="_logsWrapper_pycfb_37",le="_logPlaceholder_pycfb_54",ie="_logPlaceholderIcon_pycfb_67",l={logMeta:re,logType:ne,logTime:ae,logText:se,logsWrapper:ce,logPlaceholder:le,logPlaceholderIcon:ie},{useCallback:x,useEffect:pe}=E,S=30,ge={debug:"#389d3d",info:"#58c3f2",warning:"#cc5abb",error:"#c11c1c"},he={debug:"debug",info:"info",warning:"warn",error:"error"};function ue({time:e,payload:r,type:t}){return p("div",{className:l.logMeta,children:[a("span",{className:l.logTime,children:e}),p("span",{className:l.logType,style:{color:ge[t]},children:["[ ",he[t]," ]"]}),a("span",{className:l.logText,children:r})]})}function de({dispatch:e,logLevel:r,apiConfig:t,logs:n,logStreamingPaused:o}){const s=L(),i=x(()=>{o?$({...t,logLevel:r}):M(),s.app.updateAppConfig("logStreamingPaused",!o)},[t,r,o,s.app]),h=x(_=>e(W(_)),[e]);pe(()=>{A({...t,logLevel:r},h)},[t,r,h]);const[m,c]=F(),{t:u}=T();return p("div",{children:[a(k,{title:u("Logs")}),a(oe,{}),a("div",{ref:m,children:n.length===0?p("div",{className:l.logPlaceholder,style:{height:c-S*2},children:[a("div",{className:l.logPlaceholderIcon,children:a(N,{width:200,height:200})}),a("div",{children:u("no_logs")})]}):p("div",{className:l.logsWrapper,style:{height:c-S*2},children:[n.map((_,P)=>a("div",{className:"",children:a(ue,{..._})},P)),a(H,{icon:o?a(V,{size:16}):a(Q,{size:16}),mainButtonStyles:o?{background:"#e74c3c"}:{},style:D,text:u(o?"Resume Refresh":"Pause Refresh"),onClick:i})]})})]})}const fe=e=>({logs:C(e),logLevel:O(e),apiConfig:I(e),logStreamingPaused:z(e)}),Se=j(fe)(de);export{Se as default};
