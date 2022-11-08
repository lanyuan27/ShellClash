import{r as g,j as s,i as N,b as d,B as b,h as m,W as ze,c as E,X as je,Y as he,Z as fe,d as w,_ as Ie,F as z,$ as qe,a0 as pe,a1 as Z,D as We,x as j,a2 as He,a3 as Ge,a4 as K,G as Ue,a5 as ve,a6 as X,a7 as Q,a8 as Ve,a9 as Ke,u as J,aa as Ye,ab as ye,R as Ze,ac as Xe,g as me,C as _e,E as te,ad as Qe,m as ne,M as Je,ae as et,af as tt,ag as nt,ah as rt}from"./index.93e942d2.js";import{C as ot}from"./chevron-down.305a63f0.js";import{F as st,p as it,A as at,I as ct}from"./Fab.ad697340.js";import{R as lt,T as ut}from"./TextFitler.83cd3fa6.js";import{f as dt}from"./index.b1654b94.js";import{R as ht}from"./rotate-cw.9c203226.js";import{S as ft}from"./Select.127924d3.js";import"./debounce.c2d20996.js";function pt(e,t){if(e==null)return{};var n=vt(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function vt(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var ee=g.exports.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,o=e.size,i=o===void 0?24:o,a=pt(e,["color","size"]);return s("svg",{ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...a,children:s("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})});ee.propTypes={color:N.exports.string,size:N.exports.oneOfType([N.exports.string,N.exports.number])};ee.displayName="Zap";const R=ee,yt="_FlexCenter_1380a_1",mt={FlexCenter:yt};function _t({children:e}){return s("div",{className:mt.FlexCenter,children:e})}const{useRef:re,useEffect:bt}=m;function gt({onClickPrimaryButton:e,onClickSecondaryButton:t}){const n=re(null),r=re(null);return bt(()=>{n.current.focus()},[]),d("div",{onKeyDown:i=>{i.keyCode===39?r.current.focus():i.keyCode===37&&n.current.focus()},children:[s("h2",{children:"Close Connections?"}),s("p",{children:"Click 'Yes' to close those connections that are still using the old selected proxy in this group"}),s("div",{style:{height:30}}),d(_t,{children:[s(b,{onClick:e,ref:n,children:"Yes"}),s("div",{style:{width:20}}),s(b,{onClick:t,ref:r,children:"No"})]})]})}const xt="_header_1y9js_1",wt="_arrow_1y9js_8",Ct="_isOpen_1y9js_13",Ot="_btn_1y9js_20",Pt="_qty_1y9js_25",O={header:xt,arrow:wt,isOpen:Ct,btn:Ot,qty:Pt};function be({name:e,type:t,toggle:n,isOpen:r,qty:o}){const i=g.exports.useCallback(a=>{a.preventDefault(),(a.key==="Enter"||a.key===" ")&&n()},[n]);return d("div",{className:O.header,onClick:n,style:{cursor:"pointer"},tabIndex:0,onKeyDown:i,role:"button",children:[s("div",{children:s(ze,{name:e,type:t})}),typeof o=="number"?s("span",{className:O.qty,children:o}):null,s(b,{kind:"minimal",onClick:n,className:O.btn,title:"Toggle collapsible section",children:s("span",{className:E(O.arrow,{[O.isOpen]:r}),children:s(ot,{size:20})})})]})}const{useMemo:kt}=m;function St(e,t){return e.filter(n=>{const r=t[n];return r===void 0?!0:r.number!==0})}const D=(e,t)=>{if(e&&typeof e.number=="number"&&e.number>0)return e.number;const n=t&&t.type;return n&&fe.indexOf(n)>-1?-1:999999},Et={Natural:e=>e,LatencyAsc:(e,t,n)=>e.sort((r,o)=>{const i=D(t[r],n&&n[r]),a=D(t[o],n&&n[o]);return i-a}),LatencyDesc:(e,t,n)=>e.sort((r,o)=>{const i=D(t[r],n&&n[r]);return D(t[o],n&&n[o])-i}),NameAsc:e=>e.sort(),NameDesc:e=>e.sort((t,n)=>t>n?-1:t<n?1:0)};function Rt(e,t){const n=t.toLowerCase().split(" ").map(r=>r.trim()).filter(r=>!!r);return n.length===0?e:e.filter(r=>{let o=0;for(;o<n.length;o++){const i=n[o];if(r.toLowerCase().indexOf(i)>-1)return!0}return!1})}function At(e,t,n,r,o,i){let a=[...e];return n&&(a=St(e,t)),typeof r=="string"&&r!==""&&(a=Rt(a,r)),Et[o](a,t,i)}function ge(e,t,n,r,o){const[i]=je(he);return kt(()=>At(e,t,n,i,r,o),[e,t,n,i,r,o])}const Tt="_header_1g0y5_1",Mt="_zapWrapper_1g0y5_5",xe={header:Tt,zapWrapper:Mt},we={Right:39,Left:37,Enter:13,Space:32},Lt="_proxy_1j7mi_1",Nt="_now_1j7mi_25",Dt="_error_1j7mi_29",Bt="_selectable_1j7mi_32",$t="_proxyType_1j7mi_40",Ft="_row_1j7mi_51",zt="_proxyName_1j7mi_57",jt="_proxySmall_1j7mi_71",y={proxy:Lt,now:Nt,error:Dt,selectable:Bt,proxyType:$t,row:Ft,proxyName:zt,proxySmall:jt},It="_proxyLatency_1sj9a_1",qt={proxyLatency:It};function Wt({number:e,color:t}){return s("span",{className:qt.proxyLatency,style:{color:t},children:d("span",{children:[e," ms"]})})}const{useMemo:S}=m,P={good:"#67c23a",normal:"#d4b75c",bad:"#e67f3c",na:"#909399"};function Ce({number:e}={}){return e===0?P.na:e<200?P.good:e<400?P.normal:typeof e=="number"?P.bad:P.na}function Ht(e,t){return fe.indexOf(t)>-1?"linear-gradient(135deg, white 15%, #999 15% 30%, white 30% 45%, #999 45% 60%, white 60% 75%, #999 75% 90%, white 90% 100%)":Ce(e)}function Gt({now:e,name:t,proxy:n,latency:r,isSelectable:o,onClick:i}){const a=S(()=>Ht(r,n.type),[r,n]),c=S(()=>{let f=t;return r&&typeof r.number=="number"&&(f+=" "+r.number+" ms"),f},[t,r]),l=g.exports.useCallback(()=>{o&&i&&i(t)},[t,i,o]),u=S(()=>E(y.proxySmall,{[y.now]:e,[y.selectable]:o}),[o,e]),h=g.exports.useCallback(f=>{f.keyCode===we.Enter&&l()},[l]);return s("div",{title:c,className:u,style:{background:a},onClick:l,onKeyDown:h,role:o?"menuitem":""})}function Ut(e){return e==="Shadowsocks"?"SS":e}const Vt=e=>({left:e.left+window.scrollX-5,top:e.top+window.scrollY-38});function Kt({children:e,label:t,"aria-label":n}){const[r,o]=Ie();return d(z,{children:[g.exports.cloneElement(e,r),s(qe,{...o,label:t,"aria-label":n,position:Vt})]})}function Yt({now:e,name:t,proxy:n,latency:r,isSelectable:o,onClick:i}){const a=S(()=>Ce(r),[r]),c=g.exports.useCallback(()=>{o&&i&&i(t)},[t,i,o]),l=g.exports.useCallback(h=>{h.keyCode===we.Enter&&c()},[c]),u=S(()=>E(y.proxy,{[y.now]:e,[y.error]:r&&r.error,[y.selectable]:o}),[o,e,r]);return d("div",{tabIndex:0,className:u,onClick:c,onKeyDown:l,role:o?"menuitem":"",children:[s("div",{className:y.proxyName,children:s(Kt,{label:t,"aria-label":"proxy name: "+t,children:s("span",{children:t})})}),d("div",{className:y.row,children:[s("span",{className:y.proxyType,style:{opacity:e?.6:.2},children:Ut(n.type)}),r&&r.number?s(Wt,{number:r.number,color:a}):null]})]})}const Oe=(e,{name:t})=>{const n=pe(e),r=Z(e);return{proxy:n[t],latency:r[t]}},Zt=w(Oe)(Yt),Xt=w(Oe)(Gt),Qt="_list_10y5m_1",Jt="_listSummaryView_10y5m_8",Pe={list:Qt,listSummaryView:Jt};function ke({all:e,now:t,isSelectable:n,itemOnTapCallback:r}){const o=e;return s("div",{className:Pe.list,children:o.map(i=>s(Zt,{onClick:r,isSelectable:n,name:i,now:i===t},i))})}function Se({all:e,now:t,isSelectable:n,itemOnTapCallback:r}){return s("div",{className:Pe.listSummaryView,children:e.map(o=>s(Xt,{onClick:r,isSelectable:n,name:o,now:o===t},o))})}const{createElement:en,useCallback:G,useMemo:tn,useState:nn}=m;function rn(){return s("div",{className:xe.zapWrapper,children:s(R,{size:16})})}function on({name:e,all:t,delay:n,hideUnavailableProxies:r,proxySortBy:o,proxies:i,type:a,now:c,isOpen:l,apiConfig:u,dispatch:h}){const f=ge(t,n,r,o,i),{data:_}=We(["/version",u],()=>Ue("/version",u)),v=tn(()=>["Selector",_.meta&&"Fallback"].includes(a),[a,_.meta]),{app:{updateCollapsibleIsOpen:p},proxies:{requestDelayForProxies:A}}=j(),T=G(()=>{p("proxyGroup",e,!l)},[l,p,e]),q=G(L=>{!v||h(He(u,e,L))},[u,h,e,v]),[W,M]=nn(!1),H=G(async()=>{M(!0);try{_.meta==!0?(await Ge(u,e),await h(K(u))):(await A(u,f),await h(K(u)))}catch{}M(!1)},[f,u,h,e,_.meta]);return d("div",{className:xe.group,children:[d("div",{style:{display:"flex",alignItems:"center"},children:[s(be,{name:e,type:a,toggle:T,qty:f.length,isOpen:l}),s(b,{title:"Test latency",kind:"minimal",onClick:H,isLoading:W,children:s(rn,{})})]}),en(l?ke:Se,{all:f,now:c,isSelectable:v,itemOnTapCallback:q})]})}const sn=w((e,{name:t,delay:n})=>{const r=pe(e),o=ve(e),i=X(e),a=Q(e),c=r[t],{all:l,type:u,now:h}=c;return{all:l,delay:n,hideUnavailableProxies:a,proxySortBy:i,proxies:r,type:u,now:h,isOpen:o[`proxyGroup:${t}`]}})(on),{useCallback:Ee,useState:an}=m;function cn({dispatch:e,apiConfig:t,name:n}){return Ee(()=>e(Ve(t,n)),[t,e,n])}function ln({dispatch:e,apiConfig:t,names:n}){const[r,o]=an(!1);return[Ee(async()=>{if(!r){o(!0);try{await e(Ke(t,n))}catch{}o(!1)}},[t,e,n,r]),r]}const{useState:un,useCallback:dn}=m;function hn({isLoading:e}){return e?s(ct,{children:s(R,{width:16,height:16})}):s(R,{width:16,height:16})}function fn({dispatch:e,apiConfig:t}){const[n,r]=un(!1);return[dn(()=>{n||(r(!0),e(Ye(t)).then(()=>r(!1),()=>r(!1)))},[t,e,n]),n]}function pn({dispatch:e,apiConfig:t,proxyProviders:n}){const{t:r}=J(),[o,i]=fn({dispatch:e,apiConfig:t}),[a,c]=ln({apiConfig:t,dispatch:e,names:n.map(l=>l.name)});return s(st,{icon:s(hn,{isLoading:i}),onClick:o,text:r("Test Latency"),style:it,children:n.length>0?s(at,{text:r("update_all_proxy_provider"),onClick:a,children:s(lt,{isRotating:c})}):null})}var Re=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(o,i){return o[0]===n?(r=i,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),o=this.__entries__[r];return o&&o[1]},t.prototype.set=function(n,r){var o=e(this.__entries__,n);~o?this.__entries__[o][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,o=e(r,n);~o&&r.splice(o,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var o=0,i=this.__entries__;o<i.length;o++){var a=i[o];n.call(r,a[1],a[0])}},t}()}(),Y=typeof window<"u"&&typeof document<"u"&&window.document===document,$=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),vn=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind($):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),yn=2;function mn(e,t){var n=!1,r=!1,o=0;function i(){n&&(n=!1,e()),r&&c()}function a(){vn(i)}function c(){var l=Date.now();if(n){if(l-o<yn)return;r=!0}else n=!0,r=!1,setTimeout(a,t);o=l}return c}var _n=20,bn=["top","right","bottom","left","width","height","size","weight"],gn=typeof MutationObserver<"u",xn=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=mn(this.refresh.bind(this),_n)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!Y||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),gn?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Y||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,o=bn.some(function(i){return!!~r.indexOf(i)});o&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Ae=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var o=r[n];Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e},x=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||$},Te=I(0,0,0,0);function F(e){return parseFloat(e)||0}function oe(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,o){var i=e["border-"+o+"-width"];return r+F(i)},0)}function wn(e){for(var t=["top","right","bottom","left"],n={},r=0,o=t;r<o.length;r++){var i=o[r],a=e["padding-"+i];n[i]=F(a)}return n}function Cn(e){var t=e.getBBox();return I(0,0,t.width,t.height)}function On(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return Te;var r=x(e).getComputedStyle(e),o=wn(r),i=o.left+o.right,a=o.top+o.bottom,c=F(r.width),l=F(r.height);if(r.boxSizing==="border-box"&&(Math.round(c+i)!==t&&(c-=oe(r,"left","right")+i),Math.round(l+a)!==n&&(l-=oe(r,"top","bottom")+a)),!kn(e)){var u=Math.round(c+i)-t,h=Math.round(l+a)-n;Math.abs(u)!==1&&(c-=u),Math.abs(h)!==1&&(l-=h)}return I(o.left,o.top,c,l)}var Pn=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof x(e).SVGGraphicsElement}:function(e){return e instanceof x(e).SVGElement&&typeof e.getBBox=="function"}}();function kn(e){return e===x(e).document.documentElement}function Sn(e){return Y?Pn(e)?Cn(e):On(e):Te}function En(e){var t=e.x,n=e.y,r=e.width,o=e.height,i=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,a=Object.create(i.prototype);return Ae(a,{x:t,y:n,width:r,height:o,top:n,right:t+r,bottom:o+n,left:t}),a}function I(e,t,n,r){return{x:e,y:t,width:n,height:r}}var Rn=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=I(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=Sn(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),An=function(){function e(t,n){var r=En(n);Ae(this,{target:t,contentRect:r})}return e}(),Tn=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new Re,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof x(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new Rn(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof x(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;!n.has(t)||(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(!!this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new An(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Me=typeof WeakMap<"u"?new WeakMap:new Re,Le=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=xn.getInstance(),r=new Tn(t,n,this);Me.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Le.prototype[e]=function(){var t;return(t=Me.get(this))[e].apply(t,arguments)}});var Mn=function(){return typeof $.ResizeObserver<"u"?$.ResizeObserver:Le}();const{memo:Ln,useState:Nn,useRef:Ne,useEffect:De}=Ze;function Dn(e){const t=Ne();return De(()=>void(t.current=e),[e]),t.current}function Bn(){const e=Ne(),[t,n]=Nn({height:0});return De(()=>{const r=new Mn(([o])=>n(o.contentRect));return e.current&&r.observe(e.current),()=>r.disconnect()},[]),[e,t]}const $n={initialOpen:{height:"auto",transition:{duration:0}},open:e=>({height:e,opacity:1,visibility:"visible",transition:{duration:.3}}),closed:{height:0,opacity:0,visibility:"hidden",overflowY:"hidden",transition:{duration:.3}}},Fn={open:{},closed:{}},se=Ln(({children:e,isOpen:t})=>{const r=ye.read().motion,o=Dn(t),[i,{height:a}]=Bn();return s("div",{children:s(r.div,{animate:t&&o===t?"initialOpen":t?"open":"closed",custom:a,variants:$n,children:s(r.div,{variants:Fn,ref:i,children:e})})})}),zn="_updatedAt_1ql33_1",jn="_body_1ql33_8",In="_actionFooter_1ql33_17",qn="_refresh_1ql33_27",k={updatedAt:zn,body:jn,actionFooter:In,refresh:qn},{useState:Wn,useCallback:ie}=m;function Hn({name:e,proxies:t,delay:n,hideUnavailableProxies:r,proxySortBy:o,vehicleType:i,updatedAt:a,subscriptionInfo:c,isOpen:l,dispatch:u,apiConfig:h}){const f=ge(t,n,r,o),[_,v]=Wn(!1),p=cn({dispatch:u,apiConfig:h,name:e}),A=ie(async()=>{v(!0),await u(Xe(h,e)),v(!1)},[h,u,e,v]),{app:{updateCollapsibleIsOpen:T}}=j(),q=ie(()=>{T("proxyProvider",e,!l)},[l,T,e]),W=dt(new Date(a),new Date),M=c?ae(c.Total):0,H=c?ae(c.Total-c.Download-c.Upload):0,L=()=>{if(c.Expire===0)return"Null";const C=new Date(c.Expire*1e3),Be=C.getFullYear()+"-",$e=(C.getMonth()+1<10?"0"+(C.getMonth()+1):C.getMonth()+1)+"-",Fe=C.getDate()+" ";return Be+$e+Fe};return d("div",{className:k.body,children:[d("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:[s(be,{name:e,toggle:q,type:i,isOpen:l,qty:f.length}),s(b,{kind:"minimal",start:s(ce,{}),onClick:p}),s(b,{kind:"minimal",start:s(R,{size:16}),onClick:A,isLoading:_})]}),c&&s("div",{className:k.updatedAt,children:d("small",{children:[H," / ",M," \xA0\xA0 Expire: ",L()," "]})}),s("div",{className:k.updatedAt,children:d("small",{children:["Updated ",W," ago"]})}),d(se,{isOpen:l,children:[s(ke,{all:f}),d("div",{className:k.actionFooter,children:[s(b,{text:"Update",start:s(ce,{}),onClick:p}),s(b,{text:"Health Check",start:s(R,{size:16}),onClick:A,isLoading:_})]})]}),s(se,{isOpen:!l,children:s(Se,{all:f})})]})}const Gn={rest:{scale:1},pressed:{scale:.95}},Un={rest:{rotate:0},hover:{rotate:360,transition:{duration:.3}}};function ae(e,t=2){if(!+e)return"0 Bytes";const n=1024,r=t<0?0:t,o=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],i=Math.floor(Math.log(e)/Math.log(n));return`${parseFloat((e/Math.pow(n,i)).toFixed(r))} ${o[i]}`}function ce(){const t=ye.read().motion;return s(t.div,{className:k.refresh,variants:Gn,initial:"rest",whileHover:"hover",whileTap:"pressed",children:s(t.div,{className:"flexCenter",variants:Un,children:s(ht,{size:16})})})}const Vn=(e,{proxies:t,name:n})=>{const r=Q(e),o=Z(e),i=ve(e),a=me(e),c=X(e);return{apiConfig:a,proxies:t,delay:o,hideUnavailableProxies:r,proxySortBy:c,isOpen:i[`proxyProvider:${n}`]}},Kn=w(Vn)(Hn);function Yn({items:e}){return e.length===0?null:d(z,{children:[s(_e,{title:"Proxy Provider"}),s("div",{children:e.map(t=>s(Kn,{name:t.name,proxies:t.proxies,type:t.type,vehicleType:t.vehicleType,updatedAt:t.updatedAt,subscriptionInfo:t.subscriptionInfo},t.name))})]})}const Zn="_labeledInput_cmki0_1",U={labeledInput:Zn},Xn=[["Natural","order_natural"],["LatencyAsc","order_latency_asc"],["LatencyDesc","order_latency_desc"],["NameAsc","order_name_asc"],["NameDesc","order_name_desc"]],{useCallback:le}=m;function Qn({appConfig:e}){const{app:{updateAppConfig:t}}=j(),n=le(i=>{t("proxySortBy",i.target.value)},[t]),r=le(i=>{t("hideUnavailableProxies",i)},[t]),{t:o}=J();return d(z,{children:[d("div",{className:U.labeledInput,children:[s("span",{children:o("sort_in_grp")}),s("div",{children:s(ft,{options:Xn.map(i=>[i[0],o(i[1])]),selected:e.proxySortBy,onChange:n})})]}),s("hr",{}),d("div",{className:U.labeledInput,children:[s("span",{children:o("hide_unavail_proxies")}),s("div",{children:s(te,{name:"hideUnavailableProxies",checked:e.hideUnavailableProxies,onChange:r})})]}),d("div",{className:U.labeledInput,children:[s("span",{children:o("auto_close_conns")}),s("div",{children:s(te,{name:"autoCloseOldConns",checked:e.autoCloseOldConns,onChange:i=>t("autoCloseOldConns",i)})})]})]})}const Jn=e=>{const t=X(e),n=Q(e),r=Qe(e);return{appConfig:{proxySortBy:t,hideUnavailableProxies:n,autoCloseOldConns:r}}},er=w(Jn)(Qn),tr="_overlay_uuk3b_1",nr="_cnt_uuk3b_5",rr="_afterOpen_uuk3b_16",V={overlay:tr,cnt:nr,afterOpen:rr},{useMemo:or}=m;function ue({isOpen:e,onRequestClose:t,children:n}){const r=or(()=>({base:E(ne.content,V.cnt),afterOpen:V.afterOpen,beforeClose:""}),[]);return s(Je,{isOpen:e,onRequestClose:t,className:r,overlayClassName:E(ne.overlay,V.overlay),children:n})}function sr({color:e="currentColor",size:t=24}){return d("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:t,height:t,stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s("path",{d:"M2 6h9M18.5 6H22"}),s("circle",{cx:"16",cy:"6",r:"2"}),s("path",{d:"M22 18h-9M6 18H2"}),s("circle",{r:"2",transform:"matrix(-1 0 0 1 8 18)"})]})}const ir="_topBar_jgy4z_1",ar="_topBarRight_jgy4z_13",cr="_textFilterContainer_jgy4z_22",lr="_group_jgy4z_29",B={topBar:ir,topBarRight:ar,textFilterContainer:cr,group:lr},{useState:ur,useEffect:dr,useCallback:de,useRef:hr}=m;function fr({dispatch:e,groupNames:t,delay:n,proxyProviders:r,apiConfig:o,showModalClosePrevConns:i}){const a=hr({}),c=de(()=>{a.current.startAt=Date.now(),e(K(o)).then(()=>{a.current.completeAt=Date.now()})},[o,e]);dr(()=>{c();const p=()=>{a.current.startAt&&Date.now()-a.current.startAt>3e4&&c()};return window.addEventListener("focus",p,!1),()=>window.removeEventListener("focus",p,!1)},[c]);const[l,u]=ur(!1),h=de(()=>{u(!1)},[]),{proxies:{closeModalClosePrevConns:f,closePrevConnsAndTheModal:_}}=j(),{t:v}=J();return d(z,{children:[s(ue,{isOpen:l,onRequestClose:h,children:s(er,{})}),d("div",{className:B.topBar,children:[s(_e,{title:v("Proxies")}),d("div",{className:B.topBarRight,children:[s("div",{className:B.textFilterContainer,children:s(ut,{textAtom:he})}),s(et,{label:v("settings"),children:s(b,{kind:"minimal",onClick:()=>u(!0),children:s(sr,{size:16})})})]})]}),s("div",{children:t.map(p=>s("div",{className:B.group,children:s(sn,{name:p,delay:n,apiConfig:o,dispatch:e})},p))}),s(Yn,{items:r}),s("div",{style:{height:60}}),s(pn,{dispatch:e,apiConfig:o,proxyProviders:r}),s(ue,{isOpen:i,onRequestClose:f,children:s(gt,{onClickPrimaryButton:()=>_(o),onClickSecondaryButton:f})})]})}const pr=e=>({apiConfig:me(e),groupNames:tt(e),proxyProviders:nt(e),delay:Z(e),showModalClosePrevConns:rt(e)}),Cr=w(pr)(fr);export{Cr as default};
