var $e=Object.defineProperty,ze=Object.defineProperties;var Fe=Object.getOwnPropertyDescriptors;var ee=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable;var te=(e,t,n)=>t in e?$e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,I=(e,t)=>{for(var n in t||(t={}))je.call(t,n)&&te(e,n,t[n]);if(ee)for(var n of ee(t))Ie.call(t,n)&&te(e,n,t[n]);return e},B=(e,t)=>ze(e,Fe(t));import{r as b,j as s,P as E,b as d,B as g,h as m,W as Be,c as k,X as qe,Y as de,Z as he,d as x,_ as He,F as D,$ as We,a0 as fe,a1 as V,A as Ge,w as $,a2 as Ue,a3 as Ve,a4 as G,a5 as Ke,a6 as pe,a7 as K,a8 as Z,H as Ze,a9 as Ye,aa as Xe,u as Y,ab as Qe,ac as ve,R as Je,ad as et,g as ye,C as me,D as ne,ae as tt,m as re,M as nt,af as rt,ag as ot,ah as st,ai as it}from"./index.1ca2d13d.js";import{C as at}from"./chevron-down.35424756.js";import{F as ct,p as lt,A as ut,I as dt}from"./Fab.d363c2c3.js";import{R as ht,T as ft}from"./TextFitler.eb6072d2.js";import{f as pt}from"./index.cd34981b.js";import{R as vt}from"./rotate-cw.a7721ea7.js";import{S as yt}from"./Select.763fb4e2.js";import"./debounce.d080d5e1.js";function mt(e,t){if(e==null)return{};var n=_t(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function _t(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var X=b.exports.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,o=e.size,i=o===void 0?24:o,a=mt(e,["color","size"]);return s("svg",B(I({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),{children:s("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}))});X.propTypes={color:E.string,size:E.oneOfType([E.string,E.number])};X.displayName="Zap";var L=X;const bt="_FlexCenter_1380a_1";var gt={FlexCenter:bt};function wt({children:e}){return s("div",{className:gt.FlexCenter,children:e})}const{useRef:oe,useEffect:xt}=m;function Ct({onClickPrimaryButton:e,onClickSecondaryButton:t}){const n=oe(null),r=oe(null);return xt(()=>{n.current.focus()},[]),d("div",{onKeyDown:i=>{i.keyCode===39?r.current.focus():i.keyCode===37&&n.current.focus()},children:[s("h2",{children:"Close Connections?"}),s("p",{children:'Click "Yes" to close those connections that are still using the old selected proxy in this group'}),s("div",{style:{height:30}}),d(wt,{children:[s(g,{onClick:e,ref:n,children:"Yes"}),s("div",{style:{width:20}}),s(g,{onClick:t,ref:r,children:"No"})]})]})}const Ot="_header_1y9js_1",Pt="_arrow_1y9js_8",kt="_isOpen_1y9js_13",St="_btn_1y9js_20",Et="_qty_1y9js_25";var C={header:Ot,arrow:Pt,isOpen:kt,btn:St,qty:Et};function _e({name:e,type:t,toggle:n,isOpen:r,qty:o}){const i=b.exports.useCallback(a=>{a.preventDefault(),(a.key==="Enter"||a.key===" ")&&n()},[n]);return d("div",{className:C.header,onClick:n,style:{cursor:"pointer"},tabIndex:0,onKeyDown:i,role:"button",children:[s("div",{children:s(Be,{name:e,type:t})}),typeof o=="number"?s("span",{className:C.qty,children:o}):null,s(g,{kind:"minimal",onClick:n,className:C.btn,title:"Toggle collapsible section",children:s("span",{className:k(C.arrow,{[C.isOpen]:r}),children:s(at,{size:20})})})]})}const{useMemo:Rt}=m;function At(e,t){return e.filter(n=>{const r=t[n];return r===void 0?!0:r.number!==0})}const R=(e,t)=>{if(e&&typeof e.number=="number"&&e.number>0)return e.number;const n=t&&t.type;return n&&he.indexOf(n)>-1?-1:999999},Tt={Natural:e=>e,LatencyAsc:(e,t,n)=>e.sort((r,o)=>{const i=R(t[r],n&&n[r]),a=R(t[o],n&&n[o]);return i-a}),LatencyDesc:(e,t,n)=>e.sort((r,o)=>{const i=R(t[r],n&&n[r]);return R(t[o],n&&n[o])-i}),NameAsc:e=>e.sort(),NameDesc:e=>e.sort((t,n)=>t>n?-1:t<n?1:0)};function Lt(e,t){const n=t.toLowerCase().split(" ").map(r=>r.trim()).filter(r=>!!r);return n.length===0?e:e.filter(r=>{let o=0;for(;o<n.length;o++){const i=n[o];if(r.toLowerCase().indexOf(i)>-1)return!0}return!1})}function Nt(e,t,n,r,o,i){let a=[...e];return n&&(a=At(e,t)),typeof r=="string"&&r!==""&&(a=Lt(a,r)),Tt[o](a,t,i)}function be(e,t,n,r,o){const[i]=qe(de);return Rt(()=>Nt(e,t,n,i,r,o),[e,t,n,i,r,o])}const Mt="_header_1g0y5_1",Dt="_zapWrapper_1g0y5_5";var ge={header:Mt,zapWrapper:Dt};const we={Right:39,Left:37,Enter:13,Space:32},$t="_proxy_1j7mi_1",zt="_now_1j7mi_25",Ft="_error_1j7mi_29",jt="_selectable_1j7mi_32",It="_proxyType_1j7mi_40",Bt="_row_1j7mi_51",qt="_proxyName_1j7mi_57",Ht="_proxySmall_1j7mi_71";var y={proxy:$t,now:zt,error:Ft,selectable:jt,proxyType:It,row:Bt,proxyName:qt,proxySmall:Ht};const Wt="_proxyLatency_1sj9a_1";var Gt={proxyLatency:Wt};function Ut({number:e,color:t}){return s("span",{className:Gt.proxyLatency,style:{color:t},children:d("span",{children:[e," ms"]})})}const{useMemo:P}=m,O={good:"#67c23a",normal:"#d4b75c",bad:"#e67f3c",na:"#909399"};function xe({number:e}={}){return e===0?O.na:e<200?O.good:e<400?O.normal:typeof e=="number"?O.bad:O.na}function Vt(e,t){return he.indexOf(t)>-1?"linear-gradient(135deg, white 15%, #999 15% 30%, white 30% 45%, #999 45% 60%, white 60% 75%, #999 75% 90%, white 90% 100%)":xe(e)}function Kt({now:e,name:t,proxy:n,latency:r,isSelectable:o,onClick:i}){const a=P(()=>Vt(r,n.type),[r,n]),c=P(()=>{let f=t;return r&&typeof r.number=="number"&&(f+=" "+r.number+" ms"),f},[t,r]),l=b.exports.useCallback(()=>{o&&i&&i(t)},[t,i,o]),u=P(()=>k(y.proxySmall,{[y.now]:e,[y.selectable]:o}),[o,e]),h=b.exports.useCallback(f=>{f.keyCode===we.Enter&&l()},[l]);return s("div",{title:c,className:u,style:{background:a},onClick:l,onKeyDown:h,role:o?"menuitem":""})}function Zt(e){return e==="Shadowsocks"?"SS":e}const Yt=e=>({left:e.left+window.scrollX-5,top:e.top+window.scrollY-38});function Xt({children:e,label:t,"aria-label":n}){const[r,o]=He();return d(D,{children:[b.exports.cloneElement(e,r),s(We,B(I({},o),{label:t,"aria-label":n,position:Yt}))]})}function Qt({now:e,name:t,proxy:n,latency:r,isSelectable:o,onClick:i}){const a=P(()=>xe(r),[r]),c=b.exports.useCallback(()=>{o&&i&&i(t)},[t,i,o]),l=b.exports.useCallback(h=>{h.keyCode===we.Enter&&c()},[c]),u=P(()=>k(y.proxy,{[y.now]:e,[y.error]:r&&r.error,[y.selectable]:o}),[o,e,r]);return d("div",{tabIndex:0,className:u,onClick:c,onKeyDown:l,role:o?"menuitem":"",children:[s("div",{className:y.proxyName,children:s(Xt,{label:t,"aria-label":"proxy name: "+t,children:s("span",{children:t})})}),d("div",{className:y.row,children:[s("span",{className:y.proxyType,style:{opacity:e?.6:.2},children:Zt(n.type)}),r&&r.number?s(Ut,{number:r.number,color:a}):null]})]})}const Ce=(e,{name:t})=>{const n=fe(e),r=V(e);return{proxy:n[t],latency:r[t]}},Jt=x(Ce)(Qt),en=x(Ce)(Kt),tn="_list_10y5m_1",nn="_listSummaryView_10y5m_8";var Oe={list:tn,listSummaryView:nn};function Pe({all:e,now:t,isSelectable:n,itemOnTapCallback:r}){const o=e;return s("div",{className:Oe.list,children:o.map(i=>s(Jt,{onClick:r,isSelectable:n,name:i,now:i===t},i))})}function ke({all:e,now:t,isSelectable:n,itemOnTapCallback:r}){return s("div",{className:Oe.listSummaryView,children:e.map(o=>s(en,{onClick:r,isSelectable:n,name:o,now:o===t},o))})}const{createElement:rn,useCallback:q,useMemo:on,useState:sn}=m;function an(){return s("div",{className:ge.zapWrapper,children:s(L,{size:16})})}function cn({name:e,all:t,delay:n,hideUnavailableProxies:r,proxySortBy:o,proxies:i,type:a,now:c,isOpen:l,apiConfig:u,dispatch:h}){const f=be(t,n,r,o,i),{data:p}=Ge(["/version",u],()=>Ze("/version",u)),_=on(()=>["Selector",p.meta&&"Fallback"].includes(a),[a,p.meta]),{app:{updateCollapsibleIsOpen:v}}=$(),S=q(()=>{v("proxyGroup",e,!l)},[l,v,e]),F=q(J=>{!_||h(Ue(u,e,J))},[u,h,e,_]),[j,Q]=sn(!1),De=q(async()=>{Q(!0);try{p.meta==!0?(await Ve(u,e),await h(G(u))):(await Ke(u,f),await h(G(u)))}catch{}Q(!1)},[f,u,h,e,p.meta]);return d("div",{className:ge.group,children:[d("div",{style:{display:"flex",alignItems:"center"},children:[s(_e,{name:e,type:a,toggle:S,qty:f.length,isOpen:l}),s(g,{title:"Test latency",kind:"minimal",onClick:De,isLoading:j,children:s(an,{})})]}),rn(l?Pe:ke,{all:f,now:c,isSelectable:_,itemOnTapCallback:F})]})}const ln=x((e,{name:t,delay:n})=>{const r=fe(e),o=pe(e),i=K(e),a=Z(e),c=r[t],{all:l,type:u,now:h}=c;return{all:l,delay:n,hideUnavailableProxies:a,proxySortBy:i,proxies:r,type:u,now:h,isOpen:o[`proxyGroup:${t}`]}})(cn),{useCallback:Se,useState:un}=m;function dn({dispatch:e,apiConfig:t,name:n}){return Se(()=>e(Ye(t,n)),[t,e,n])}function hn({dispatch:e,apiConfig:t,names:n}){const[r,o]=un(!1);return[Se(async()=>{if(!r){o(!0);try{await e(Xe(t,n))}catch{}o(!1)}},[t,e,n,r]),r]}const{useState:fn,useCallback:pn}=m;function vn({isLoading:e}){return e?s(dt,{children:s(L,{width:16,height:16})}):s(L,{width:16,height:16})}function yn({dispatch:e,apiConfig:t}){const[n,r]=fn(!1);return[pn(()=>{n||(r(!0),e(Qe(t)).then(()=>r(!1),()=>r(!1)))},[t,e,n]),n]}function mn({dispatch:e,apiConfig:t,proxyProviders:n}){const{t:r}=Y(),[o,i]=yn({dispatch:e,apiConfig:t}),[a,c]=hn({apiConfig:t,dispatch:e,names:n.map(l=>l.name)});return s(ct,{icon:s(vn,{isLoading:i}),onClick:o,text:r("Test Latency"),style:lt,children:n.length>0?s(ut,{text:r("update_all_proxy_provider"),onClick:a,children:s(ht,{isRotating:c})}):null})}var Ee=function(){if(typeof Map!="undefined")return Map;function e(t,n){var r=-1;return t.some(function(o,i){return o[0]===n?(r=i,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),o=this.__entries__[r];return o&&o[1]},t.prototype.set=function(n,r){var o=e(this.__entries__,n);~o?this.__entries__[o][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,o=e(r,n);~o&&r.splice(o,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var o=0,i=this.__entries__;o<i.length;o++){var a=i[o];n.call(r,a[1],a[0])}},t}()}(),U=typeof window!="undefined"&&typeof document!="undefined"&&window.document===document,N=function(){return typeof global!="undefined"&&global.Math===Math?global:typeof self!="undefined"&&self.Math===Math?self:typeof window!="undefined"&&window.Math===Math?window:Function("return this")()}(),_n=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(N):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),bn=2;function gn(e,t){var n=!1,r=!1,o=0;function i(){n&&(n=!1,e()),r&&c()}function a(){_n(i)}function c(){var l=Date.now();if(n){if(l-o<bn)return;r=!0}else n=!0,r=!1,setTimeout(a,t);o=l}return c}var wn=20,xn=["top","right","bottom","left","width","height","size","weight"],Cn=typeof MutationObserver!="undefined",On=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=gn(this.refresh.bind(this),wn)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!U||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Cn?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!U||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,o=xn.some(function(i){return!!~r.indexOf(i)});o&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Re=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var o=r[n];Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e},w=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||N},Ae=z(0,0,0,0);function M(e){return parseFloat(e)||0}function se(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,o){var i=e["border-"+o+"-width"];return r+M(i)},0)}function Pn(e){for(var t=["top","right","bottom","left"],n={},r=0,o=t;r<o.length;r++){var i=o[r],a=e["padding-"+i];n[i]=M(a)}return n}function kn(e){var t=e.getBBox();return z(0,0,t.width,t.height)}function Sn(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return Ae;var r=w(e).getComputedStyle(e),o=Pn(r),i=o.left+o.right,a=o.top+o.bottom,c=M(r.width),l=M(r.height);if(r.boxSizing==="border-box"&&(Math.round(c+i)!==t&&(c-=se(r,"left","right")+i),Math.round(l+a)!==n&&(l-=se(r,"top","bottom")+a)),!Rn(e)){var u=Math.round(c+i)-t,h=Math.round(l+a)-n;Math.abs(u)!==1&&(c-=u),Math.abs(h)!==1&&(l-=h)}return z(o.left,o.top,c,l)}var En=function(){return typeof SVGGraphicsElement!="undefined"?function(e){return e instanceof w(e).SVGGraphicsElement}:function(e){return e instanceof w(e).SVGElement&&typeof e.getBBox=="function"}}();function Rn(e){return e===w(e).document.documentElement}function An(e){return U?En(e)?kn(e):Sn(e):Ae}function Tn(e){var t=e.x,n=e.y,r=e.width,o=e.height,i=typeof DOMRectReadOnly!="undefined"?DOMRectReadOnly:Object,a=Object.create(i.prototype);return Re(a,{x:t,y:n,width:r,height:o,top:n,right:t+r,bottom:o+n,left:t}),a}function z(e,t,n,r){return{x:e,y:t,width:n,height:r}}var Ln=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=z(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=An(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),Nn=function(){function e(t,n){var r=Tn(n);Re(this,{target:t,contentRect:r})}return e}(),Mn=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new Ee,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element=="undefined"||!(Element instanceof Object))){if(!(t instanceof w(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new Ln(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element=="undefined"||!(Element instanceof Object))){if(!(t instanceof w(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;!n.has(t)||(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(!!this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new Nn(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Te=typeof WeakMap!="undefined"?new WeakMap:new Ee,Le=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=On.getInstance(),r=new Mn(t,n,this);Te.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Le.prototype[e]=function(){var t;return(t=Te.get(this))[e].apply(t,arguments)}});var Dn=function(){return typeof N.ResizeObserver!="undefined"?N.ResizeObserver:Le}();const{memo:$n,useState:zn,useRef:Ne,useEffect:Me}=Je;function Fn(e){const t=Ne();return Me(()=>void(t.current=e),[e]),t.current}function jn(){const e=Ne(),[t,n]=zn({height:0});return Me(()=>{const r=new Dn(([o])=>n(o.contentRect));return e.current&&r.observe(e.current),()=>r.disconnect()},[]),[e,t]}const In={initialOpen:{height:"auto",transition:{duration:0}},open:e=>({height:e,opacity:1,visibility:"visible",transition:{duration:.3}}),closed:{height:0,opacity:0,visibility:"hidden",transition:{duration:.3}}},Bn={open:{x:0},closed:{x:20}},ie=$n(({children:e,isOpen:t})=>{const r=ve.read().motion,o=Fn(t),[i,{height:a}]=jn();return s("div",{children:s(r.div,{animate:t&&o===t?"initialOpen":t?"open":"closed",custom:a,variants:In,children:s(r.div,{variants:Bn,ref:i,children:e})})})}),qn="_updatedAt_1ql33_1",Hn="_body_1ql33_8",Wn="_actionFooter_1ql33_17",Gn="_refresh_1ql33_27";var T={updatedAt:qn,body:Hn,actionFooter:Wn,refresh:Gn};const{useState:Un,useCallback:ae}=m;function Vn({name:e,proxies:t,delay:n,hideUnavailableProxies:r,proxySortBy:o,vehicleType:i,updatedAt:a,isOpen:c,dispatch:l,apiConfig:u}){const h=be(t,n,r,o),[f,p]=Un(!1),_=dn({dispatch:l,apiConfig:u,name:e}),v=ae(async()=>{p(!0),await l(et(u,e)),p(!1)},[u,l,e,p]),{app:{updateCollapsibleIsOpen:S}}=$(),F=ae(()=>{S("proxyProvider",e,!c)},[c,S,e]),j=pt(new Date(a),new Date);return d("div",{className:T.body,children:[s(_e,{name:e,toggle:F,type:i,isOpen:c,qty:h.length}),s("div",{className:T.updatedAt,children:d("small",{children:["Updated ",j," ago"]})}),d(ie,{isOpen:c,children:[s(Pe,{all:h}),d("div",{className:T.actionFooter,children:[s(g,{text:"Update",start:s(Yn,{}),onClick:_}),s(g,{text:"Health Check",start:s(L,{size:16}),onClick:v,isLoading:f})]})]}),s(ie,{isOpen:!c,children:s(ke,{all:h})})]})}const Kn={rest:{scale:1},pressed:{scale:.95}},Zn={rest:{rotate:0},hover:{rotate:360,transition:{duration:.3}}};function Yn(){const t=ve.read().motion;return s(t.div,{className:T.refresh,variants:Kn,initial:"rest",whileHover:"hover",whileTap:"pressed",children:s(t.div,{className:"flexCenter",variants:Zn,children:s(vt,{size:16})})})}const Xn=(e,{proxies:t,name:n})=>{const r=Z(e),o=V(e),i=pe(e),a=ye(e),c=K(e);return{apiConfig:a,proxies:t,delay:o,hideUnavailableProxies:r,proxySortBy:c,isOpen:i[`proxyProvider:${n}`]}},Qn=x(Xn)(Vn);function Jn({items:e}){return e.length===0?null:d(D,{children:[s(me,{title:"Proxy Provider"}),s("div",{children:e.map(t=>s(Qn,{name:t.name,proxies:t.proxies,type:t.type,vehicleType:t.vehicleType,updatedAt:t.updatedAt},t.name))})]})}const er="_labeledInput_cmki0_1";var H={labeledInput:er};const tr=[["Natural","order_natural"],["LatencyAsc","order_latency_asc"],["LatencyDesc","order_latency_desc"],["NameAsc","order_name_asc"],["NameDesc","order_name_desc"]],{useCallback:ce}=m;function nr({appConfig:e}){const{app:{updateAppConfig:t}}=$(),n=ce(i=>{t("proxySortBy",i.target.value)},[t]),r=ce(i=>{t("hideUnavailableProxies",i)},[t]),{t:o}=Y();return d(D,{children:[d("div",{className:H.labeledInput,children:[s("span",{children:o("sort_in_grp")}),s("div",{children:s(yt,{options:tr.map(i=>[i[0],o(i[1])]),selected:e.proxySortBy,onChange:n})})]}),s("hr",{}),d("div",{className:H.labeledInput,children:[s("span",{children:o("hide_unavail_proxies")}),s("div",{children:s(ne,{name:"hideUnavailableProxies",checked:e.hideUnavailableProxies,onChange:r})})]}),d("div",{className:H.labeledInput,children:[s("span",{children:o("auto_close_conns")}),s("div",{children:s(ne,{name:"autoCloseOldConns",checked:e.autoCloseOldConns,onChange:i=>t("autoCloseOldConns",i)})})]})]})}const rr=e=>{const t=K(e),n=Z(e),r=tt(e);return{appConfig:{proxySortBy:t,hideUnavailableProxies:n,autoCloseOldConns:r}}};var or=x(rr)(nr);const sr="_overlay_uuk3b_1",ir="_cnt_uuk3b_5",ar="_afterOpen_uuk3b_16";var W={overlay:sr,cnt:ir,afterOpen:ar};const{useMemo:cr}=m;function le({isOpen:e,onRequestClose:t,children:n}){const r=cr(()=>({base:k(re.content,W.cnt),afterOpen:W.afterOpen,beforeClose:""}),[]);return s(nt,{isOpen:e,onRequestClose:t,className:r,overlayClassName:k(re.overlay,W.overlay),children:n})}function lr({color:e="currentColor",size:t=24}){return d("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:t,height:t,stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s("path",{d:"M2 6h9M18.5 6H22"}),s("circle",{cx:"16",cy:"6",r:"2"}),s("path",{d:"M22 18h-9M6 18H2"}),s("circle",{r:"2",transform:"matrix(-1 0 0 1 8 18)"})]})}const ur="_topBar_jgy4z_1",dr="_topBarRight_jgy4z_13",hr="_textFilterContainer_jgy4z_22",fr="_group_jgy4z_29";var A={topBar:ur,topBarRight:dr,textFilterContainer:hr,group:fr};const{useState:pr,useEffect:vr,useCallback:ue,useRef:yr}=m;function mr({dispatch:e,groupNames:t,delay:n,proxyProviders:r,apiConfig:o,showModalClosePrevConns:i}){const a=yr({}),c=ue(()=>{a.current.startAt=Date.now(),e(G(o)).then(()=>{a.current.completeAt=Date.now()})},[o,e]);vr(()=>{c();const v=()=>{a.current.startAt&&Date.now()-a.current.startAt>3e4&&c()};return window.addEventListener("focus",v,!1),()=>window.removeEventListener("focus",v,!1)},[c]);const[l,u]=pr(!1),h=ue(()=>{u(!1)},[]),{proxies:{closeModalClosePrevConns:f,closePrevConnsAndTheModal:p}}=$(),{t:_}=Y();return d(D,{children:[s(le,{isOpen:l,onRequestClose:h,children:s(or,{})}),d("div",{className:A.topBar,children:[s(me,{title:_("Proxies")}),d("div",{className:A.topBarRight,children:[s("div",{className:A.textFilterContainer,children:s(ft,{textAtom:de})}),s(rt,{label:_("settings"),children:s(g,{kind:"minimal",onClick:()=>u(!0),children:s(lr,{size:16})})})]})]}),s("div",{children:t.map(v=>s("div",{className:A.group,children:s(ln,{name:v,delay:n,apiConfig:o,dispatch:e})},v))}),s(Jn,{items:r}),s("div",{style:{height:60}}),s(mn,{dispatch:e,apiConfig:o,proxyProviders:r}),s(le,{isOpen:i,onRequestClose:f,children:s(Ct,{onClickPrimaryButton:()=>p(o),onClickSecondaryButton:f})})]})}const _r=e=>({apiConfig:ye(e),groupNames:ot(e),proxyProviders:st(e),delay:V(e),showModalClosePrevConns:it(e)});var Er=x(_r)(mr);export{Er as default};
