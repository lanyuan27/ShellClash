import{r as L,R as h,i as v,j as n,s as H,c as le,b as c,k as oe,l as V,n as G,o as se,h as q,d as J,q as ie,g as K,t as ce,u as de,v as ue,w as O,x as pe,y as he,z as ve,A as fe,D as me,E as ge,G as be,C as ye,H as N,F as we,B as b,J as ke,K as Ce,L as _e}from"./index-436197f2.js";import{r as Oe}from"./logs-ad26e6f4.js";import{S as w}from"./Select-41529349.js";import{R as S}from"./rotate-cw-9228dc5f.js";function j(){return j=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},j.apply(this,arguments)}function Ne(e,o){if(e==null)return{};var r=Se(e,o),a,t;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],!(o.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function Se(e,o){if(e==null)return{};var r={},a=Object.keys(e),t,l;for(l=0;l<a.length;l++)t=a[l],!(o.indexOf(t)>=0)&&(r[t]=e[t]);return r}var z=L.forwardRef(function(e,o){var r=e.color,a=r===void 0?"currentColor":r,t=e.size,l=t===void 0?24:t,p=Ne(e,["color","size"]);return h.createElement("svg",j({ref:o,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},p),h.createElement("polyline",{points:"8 17 12 21 16 17"}),h.createElement("line",{x1:"12",y1:"12",x2:"12",y2:"21"}),h.createElement("path",{d:"M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"}))});z.propTypes={color:v.string,size:v.oneOfType([v.string,v.number])};z.displayName="DownloadCloud";const xe=z;function I(){return I=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},I.apply(this,arguments)}function Pe(e,o){if(e==null)return{};var r=je(e,o),a,t;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],!(o.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function je(e,o){if(e==null)return{};var r={},a=Object.keys(e),t,l;for(l=0;l<a.length;l++)t=a[l],!(o.indexOf(t)>=0)&&(r[t]=e[t]);return r}var $=L.forwardRef(function(e,o){var r=e.color,a=r===void 0?"currentColor":r,t=e.size,l=t===void 0?24:t,p=Pe(e,["color","size"]);return h.createElement("svg",I({ref:o,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},p),h.createElement("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),h.createElement("polyline",{points:"16 17 21 12 16 7"}),h.createElement("line",{x1:"21",y1:"12",x2:"9",y2:"12"}))});$.propTypes={color:v.string,size:v.oneOfType([v.string,v.number])};$.displayName="LogOut";const Ie=$;function E(){return E=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},E.apply(this,arguments)}function Ee(e,o){if(e==null)return{};var r=Le(e,o),a,t;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],!(o.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function Le(e,o){if(e==null)return{};var r={},a=Object.keys(e),t,l;for(l=0;l<a.length;l++)t=a[l],!(o.indexOf(t)>=0)&&(r[t]=e[t]);return r}var T=L.forwardRef(function(e,o){var r=e.color,a=r===void 0?"currentColor":r,t=e.size,l=t===void 0?24:t,p=Ee(e,["color","size"]);return h.createElement("svg",E({ref:o,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},p),h.createElement("polyline",{points:"3 6 5 6 21 6"}),h.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),h.createElement("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),h.createElement("line",{x1:"14",y1:"11",x2:"14",y2:"17"}))});T.propTypes={color:v.string,size:v.oneOfType([v.string,v.number])};T.displayName="Trash2";const ze=T,{useState:$e,useRef:Te,useEffect:Re,useCallback:De}=h;function x(e){return n("input",{className:H.input,...e})}function Fe({value:e,...o}){const[r,a]=$e(e),t=Te(e);Re(()=>{t.current!==e&&a(e),t.current=e},[e]);const l=De(p=>a(p.target.value),[a]);return n("input",{className:H.input,value:r,onChange:l,...o})}const Me="_root_1vck5_4",We="_section_1vck5_5",Ae="_wrapSwitch_1vck5_30",Be="_sep_1vck5_36",Ue="_label_1vck5_49",i={root:Me,section:We,wrapSwitch:Ae,sep:Be,label:Ue},Ve="_fieldset_olb4q_1",Ge="_input_olb4q_10",He="_cnt_olb4q_10",P={fieldset:Ve,input:Ge,cnt:He};function qe({OptionComponent:e,optionPropsList:o,selectedIndex:r,onChange:a}){const t=le("visually-hidden",P.input),l=p=>{a(p.target.value)};return n("fieldset",{className:P.fieldset,children:o.map((p,d)=>c("label",{children:[n("input",{type:"radio",checked:r===d,name:"selection",value:d,"aria-labelledby":"traffic chart type "+d,onChange:l,className:t}),n("div",{className:P.cnt,children:n(e,{...p})})]},d))})}const{useMemo:Je}=q,Ke={plugins:{legend:{display:!1}},scales:{x:{display:!1,type:"category"},y:{display:!1,type:"linear"}}},Q=[23e3,35e3,46e3,33e3,9e4,68e3,23e3,45e3],Qe=[184e3,183e3,196e3,182e3,19e4,186e3,182e3,189e3],Xe=Q;function Ye({id:e}){const o=oe.read(),r=Je(()=>({labels:Xe,datasets:[{...V,...G[e].up,data:Q},{...V,...G[e].down,data:Qe}]}),[e]),a="chart-"+e;return se(o.Chart,a,r,null,Ke),n("div",{style:{width:80,padding:5},children:n("canvas",{id:a})})}const{useEffect:X,useState:Ze,useCallback:f,useRef:et}=q,tt=[{id:0},{id:1},{id:2},{id:3}],nt=[["debug","Debug"],["info","Info"],["warning","Warning"],["error","Error"],["silent","Silent"]],at=[{key:"port",label:"Http Port"},{key:"socks-port",label:"Socks5 Port"},{key:"mixed-port",label:"Mixed Port"},{key:"redir-port",label:"Redir Port"},{key:"mitm-port",label:"MITM Port"}],rt=[["zh","中文"],["en","English"]],lt=[["direct","Direct"],["rule","Rule"],["script","Script"],["global","Global"]],ot=[["gvisor","gVisor"],["system","System"],["lwip","LWIP"]],st=e=>({configs:ie(e),apiConfig:K(e)}),it=e=>({selectedChartStyleIndex:Ce(e),latencyTestUrl:_e(e),apiConfig:K(e)}),ct=J(it)(ut),mt=J(st)(dt);function dt({dispatch:e,configs:o,apiConfig:r}){return X(()=>{e(ce(r))},[e,r]),n(ct,{configs:o})}function ut({dispatch:e,configs:o,selectedChartStyleIndex:r,latencyTestUrl:a,apiConfig:t}){var W,A,B,U;const{t:l,i18n:p}=de(),[d,k]=Ze(o),R=et(o);X(()=>{R.current!==o&&k(o),R.current=o},[o]);const Y=f(()=>{e(ue("apiConfig"))},[e]),C=f((s,u)=>{k({...d,[s]:u})},[d]),D=f((s,u)=>{const m={...d.tun,[s]:u};k({...d,tun:{...m}})},[d]),g=f(({name:s,value:u})=>{switch(s){case"mode":case"log-level":case"allow-lan":case"sniffing":C(s,u),e(O(t,{[s]:u})),s==="log-level"&&Oe({...t,logLevel:u});break;case"mitm-port":case"redir-port":case"socks-port":case"mixed-port":case"port":if(u!==""){const m=parseInt(u,10);if(m<0||m>65535)return}C(s,u);break;case"enable":case"stack":D(s,u),e(O(t,{tun:{[s]:u}}));break;default:return}},[t,e,C,D]),{selectChartStyleIndex:Z,updateAppConfig:F}=pe(),y=f(s=>{const{name:u,value:m}=s.target;switch(u){case"port":case"socks-port":case"mixed-port":case"redir-port":case"mitm-port":{const _=parseInt(m,10);if(_<0||_>65535)return;e(O(t,{[u]:_}));break}case"latencyTestUrl":{F(u,m);break}case"device name":case"interface name":break;default:throw new Error(`unknown input name ${u}`)}},[t,e,F]),ee=f(()=>{e(he(t))},[t,e]),te=f(()=>{e(ve(t))},[t,e]),ne=f(()=>{e(fe(t))},[t,e]),ae=f(()=>{e(me(t))},[t,e]),re=f(()=>{e(ge(t))},[t,e]),{data:M}=be(["/version",t],()=>ke("/version",t));return c("div",{children:[n(ye,{title:l("Config")}),c("div",{className:i.root,children:[at.map(s=>d[s.key]!==void 0?c("div",{children:[n("div",{className:i.label,children:s.label}),n(x,{name:s.key,value:d[s.key],onChange:({target:{name:u,value:m}})=>g({name:u,value:m}),onBlur:y})]},s.key):null),c("div",{children:[n("div",{className:i.label,children:"Mode"}),n(w,{options:lt,selected:d.mode.toLowerCase(),onChange:s=>g({name:"mode",value:s.target.value})})]}),c("div",{children:[n("div",{className:i.label,children:"Log Level"}),n(w,{options:nt,selected:d["log-level"].toLowerCase(),onChange:s=>g({name:"log-level",value:s.target.value})})]}),c("div",{children:[n("div",{className:i.label,children:l("allow_lan")}),n("div",{className:i.wrapSwitch,children:n(N,{name:"allow-lan",checked:d["allow-lan"],onChange:s=>g({name:"allow-lan",value:s})})})]}),M.meta&&c("div",{children:[n("div",{className:i.label,children:l("tls_sniffing")}),n("div",{className:i.wrapSwitch,children:n(N,{name:"sniffing",checked:d.sniffing,onChange:s=>g({name:"sniffing",value:s})})})]})]}),n("div",{className:i.sep,children:n("div",{})}),M.meta&&c(we,{children:[c("div",{className:i.section,children:[c("div",{children:[n("div",{className:i.label,children:l("enable_tun_device")}),n("div",{className:i.wrapSwitch,children:n(N,{checked:(W=d.tun)==null?void 0:W.enable,onChange:s=>g({name:"enable",value:s})})})]}),c("div",{children:[n("div",{className:i.label,children:"TUN IP Stack"}),n(w,{options:ot,selected:(B=(A=d.tun)==null?void 0:A.stack)==null?void 0:B.toLowerCase(),onChange:s=>g({name:"stack",value:s.target.value})})]}),c("div",{children:[n("div",{className:i.label,children:"Device Name"}),n(x,{name:"device name",value:(U=d.tun)==null?void 0:U.device,onChange:y})]}),c("div",{children:[n("div",{className:i.label,children:"Interface Name"}),n(x,{name:"interface name",value:d["interface-name"]||"",onChange:y})]})]}),n("div",{className:i.sep,children:n("div",{})}),c("div",{className:i.section,children:[c("div",{children:[n("div",{className:i.label,children:"Reload"}),n(b,{start:n(S,{size:16}),label:l("reload_config_file"),onClick:ee})]}),c("div",{children:[n("div",{className:i.label,children:"GEO Databases"}),n(b,{start:n(xe,{size:16}),label:l("update_geo_databases_file"),onClick:ae})]}),c("div",{children:[n("div",{className:i.label,children:"FakeIP"}),n(b,{start:n(ze,{size:16}),label:l("flush_fake_ip_pool"),onClick:re})]}),c("div",{children:[n("div",{className:i.label,children:"Restart"}),n(b,{start:n(S,{size:16}),label:l("restart_core"),onClick:te})]}),c("div",{children:[n("div",{className:i.label,children:"⚠️ Upgrade ⚠️"}),n(b,{start:n(S,{size:16}),label:l("upgrade_core"),onClick:ne})]})]}),n("div",{className:i.sep,children:n("div",{})})]}),c("div",{className:i.section,children:[c("div",{children:[n("div",{className:i.label,children:l("latency_test_url")}),n(Fe,{name:"latencyTestUrl",type:"text",value:a,onBlur:y})]}),c("div",{children:[n("div",{className:i.label,children:l("lang")}),n("div",{children:n(w,{options:rt,selected:p.language,onChange:s=>p.changeLanguage(s.target.value)})})]}),c("div",{children:[n("div",{className:i.label,children:l("chart_style")}),n(qe,{OptionComponent:Ye,optionPropsList:tt,selectedIndex:r,onChange:Z})]}),c("div",{children:[n("div",{className:i.label,children:"Action"}),n(b,{start:n(Ie,{size:16}),label:"Switch backend",onClick:Y})]})]})]})}export{mt as default};
