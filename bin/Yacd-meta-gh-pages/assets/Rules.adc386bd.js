import{ai as re,aj as A,ak as Re,al as ne,am as _e,R as z,an as Me,ao as $,ap as be,aq as Oe,ar as K,r as D,L as B,as as Te,D as ie,X as Ce,b as C,j as p,W as we,B as xe,u as se,d as ze,g as Ne,C as Pe}from"./index.93e942d2.js";import{R as ae,T as Ee}from"./TextFitler.83cd3fa6.js";import{f as ke}from"./index.b1654b94.js";import{F as Le,p as De}from"./Fab.ad697340.js";import{u as Ae}from"./useRemainingViewPortHeight.a129ad60.js";import"./rotate-cw.9c203226.js";import"./debounce.c2d20996.js";function V(r,e){if(r==null)return{};var t={},i=Object.keys(r),n,s;for(s=0;s<i.length;s++)n=i[s],!(e.indexOf(n)>=0)&&(t[n]=r[n]);return t}var Fe=function(r){re(e,r);function e(i,n){var s;return s=r.call(this)||this,s.client=i,s.setOptions(n),s.bindMethods(),s.updateResult(),s}var t=e.prototype;return t.bindMethods=function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)},t.setOptions=function(n){this.options=this.client.defaultMutationOptions(n)},t.onUnsubscribe=function(){if(!this.listeners.length){var n;(n=this.currentMutation)==null||n.removeObserver(this)}},t.onMutationUpdate=function(n){this.updateResult();var s={listeners:!0};n.type==="success"?s.onSuccess=!0:n.type==="error"&&(s.onError=!0),this.notify(s)},t.getCurrentResult=function(){return this.currentResult},t.reset=function(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})},t.mutate=function(n,s){return this.mutateOptions=s,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,A({},this.options,{variables:typeof n<"u"?n:this.options.variables})),this.currentMutation.addObserver(this),this.currentMutation.execute()},t.updateResult=function(){var n=this.currentMutation?this.currentMutation.state:Re(),s=A({},n,{isLoading:n.status==="loading",isSuccess:n.status==="success",isError:n.status==="error",isIdle:n.status==="idle",mutate:this.mutate,reset:this.reset});this.currentResult=s},t.notify=function(n){var s=this;ne.batch(function(){s.mutateOptions&&(n.onSuccess?(s.mutateOptions.onSuccess==null||s.mutateOptions.onSuccess(s.currentResult.data,s.currentResult.variables,s.currentResult.context),s.mutateOptions.onSettled==null||s.mutateOptions.onSettled(s.currentResult.data,null,s.currentResult.variables,s.currentResult.context)):n.onError&&(s.mutateOptions.onError==null||s.mutateOptions.onError(s.currentResult.error,s.currentResult.variables,s.currentResult.context),s.mutateOptions.onSettled==null||s.mutateOptions.onSettled(void 0,s.currentResult.error,s.currentResult.variables,s.currentResult.context))),n.listeners&&s.listeners.forEach(function(o){o(s.currentResult)})})},e}(_e);function oe(r,e,t){var i=z.useRef(!1),n=z.useState(0),s=n[1],o=Me(r,e,t),d=$(),c=z.useRef();c.current?c.current.setOptions(o):c.current=new Fe(d,o);var v=c.current.getCurrentResult();z.useEffect(function(){i.current=!0;var _=c.current.subscribe(ne.batchCalls(function(){i.current&&s(function(M){return M+1})}));return function(){i.current=!1,_()}},[]);var R=z.useCallback(function(_,M){c.current.mutate(_,M).catch(be)},[]);if(v.error&&Oe(void 0,c.current.options.useErrorBoundary,[v.error]))throw v.error;return A({},v,{mutate:R,mutateAsync:v.mutate})}var G=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function We(r,e){return!!(r===e||G(r)&&G(e))}function Ue(r,e){if(r.length!==e.length)return!1;for(var t=0;t<r.length;t++)if(!We(r[t],e[t]))return!1;return!0}function W(r,e){e===void 0&&(e=Ue);var t,i=[],n,s=!1;function o(){for(var d=[],c=0;c<arguments.length;c++)d[c]=arguments[c];return s&&t===this&&e(d,i)||(n=r.apply(this,d),s=!0,t=this,i=d),n}return o}var $e=typeof performance=="object"&&typeof performance.now=="function",J=$e?function(){return performance.now()}:function(){return Date.now()};function X(r){cancelAnimationFrame(r.id)}function Be(r,e){var t=J();function i(){J()-t>=e?r.call(null):n.id=requestAnimationFrame(i)}var n={id:requestAnimationFrame(i)};return n}var w=null;function Z(r){if(r===void 0&&(r=!1),w===null||r){var e=document.createElement("div"),t=e.style;t.width="50px",t.height="50px",t.overflow="scroll",t.direction="rtl";var i=document.createElement("div"),n=i.style;return n.width="100px",n.height="100px",e.appendChild(i),document.body.appendChild(e),e.scrollLeft>0?w="positive-descending":(e.scrollLeft=1,e.scrollLeft===0?w="negative":w="positive-ascending"),document.body.removeChild(e),w}return w}var qe=150,je=function(e,t){return e};function He(r){var e,t=r.getItemOffset,i=r.getEstimatedTotalSize,n=r.getItemSize,s=r.getOffsetForIndexAndAlignment,o=r.getStartIndexForOffset,d=r.getStopIndexForStartIndex,c=r.initInstanceProps,v=r.shouldResetStyleCacheOnItemSizeChange,R=r.validateProps;return e=function(_){re(M,_);function M(g){var a;return a=_.call(this,g)||this,a._instanceProps=c(a.props,K(a)),a._outerRef=void 0,a._resetIsScrollingTimeoutId=null,a.state={instance:K(a),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof a.props.initialScrollOffset=="number"?a.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},a._callOnItemsRendered=void 0,a._callOnItemsRendered=W(function(l,u,f,m){return a.props.onItemsRendered({overscanStartIndex:l,overscanStopIndex:u,visibleStartIndex:f,visibleStopIndex:m})}),a._callOnScroll=void 0,a._callOnScroll=W(function(l,u,f){return a.props.onScroll({scrollDirection:l,scrollOffset:u,scrollUpdateWasRequested:f})}),a._getItemStyle=void 0,a._getItemStyle=function(l){var u=a.props,f=u.direction,m=u.itemSize,y=u.layout,h=a._getItemStyleCache(v&&m,v&&y,v&&f),I;if(h.hasOwnProperty(l))I=h[l];else{var S=t(a.props,l,a._instanceProps),O=n(a.props,l,a._instanceProps),T=f==="horizontal"||y==="horizontal",k=f==="rtl",L=T?S:0;h[l]=I={position:"absolute",left:k?void 0:L,right:k?L:void 0,top:T?0:S,height:T?"100%":O,width:T?O:"100%"}}return I},a._getItemStyleCache=void 0,a._getItemStyleCache=W(function(l,u,f){return{}}),a._onScrollHorizontal=function(l){var u=l.currentTarget,f=u.clientWidth,m=u.scrollLeft,y=u.scrollWidth;a.setState(function(h){if(h.scrollOffset===m)return null;var I=a.props.direction,S=m;if(I==="rtl")switch(Z()){case"negative":S=-m;break;case"positive-descending":S=y-f-m;break}return S=Math.max(0,Math.min(S,y-f)),{isScrolling:!0,scrollDirection:h.scrollOffset<m?"forward":"backward",scrollOffset:S,scrollUpdateWasRequested:!1}},a._resetIsScrollingDebounced)},a._onScrollVertical=function(l){var u=l.currentTarget,f=u.clientHeight,m=u.scrollHeight,y=u.scrollTop;a.setState(function(h){if(h.scrollOffset===y)return null;var I=Math.max(0,Math.min(y,m-f));return{isScrolling:!0,scrollDirection:h.scrollOffset<I?"forward":"backward",scrollOffset:I,scrollUpdateWasRequested:!1}},a._resetIsScrollingDebounced)},a._outerRefSetter=function(l){var u=a.props.outerRef;a._outerRef=l,typeof u=="function"?u(l):u!=null&&typeof u=="object"&&u.hasOwnProperty("current")&&(u.current=l)},a._resetIsScrollingDebounced=function(){a._resetIsScrollingTimeoutId!==null&&X(a._resetIsScrollingTimeoutId),a._resetIsScrollingTimeoutId=Be(a._resetIsScrolling,qe)},a._resetIsScrolling=function(){a._resetIsScrollingTimeoutId=null,a.setState({isScrolling:!1},function(){a._getItemStyleCache(-1,null)})},a}M.getDerivedStateFromProps=function(a,l){return Qe(a,l),R(a),null};var b=M.prototype;return b.scrollTo=function(a){a=Math.max(0,a),this.setState(function(l){return l.scrollOffset===a?null:{scrollDirection:l.scrollOffset<a?"forward":"backward",scrollOffset:a,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},b.scrollToItem=function(a,l){l===void 0&&(l="auto");var u=this.props.itemCount,f=this.state.scrollOffset;a=Math.max(0,Math.min(a,u-1)),this.scrollTo(s(this.props,a,l,f,this._instanceProps))},b.componentDidMount=function(){var a=this.props,l=a.direction,u=a.initialScrollOffset,f=a.layout;if(typeof u=="number"&&this._outerRef!=null){var m=this._outerRef;l==="horizontal"||f==="horizontal"?m.scrollLeft=u:m.scrollTop=u}this._callPropsCallbacks()},b.componentDidUpdate=function(){var a=this.props,l=a.direction,u=a.layout,f=this.state,m=f.scrollOffset,y=f.scrollUpdateWasRequested;if(y&&this._outerRef!=null){var h=this._outerRef;if(l==="horizontal"||u==="horizontal")if(l==="rtl")switch(Z()){case"negative":h.scrollLeft=-m;break;case"positive-ascending":h.scrollLeft=m;break;default:var I=h.clientWidth,S=h.scrollWidth;h.scrollLeft=S-I-m;break}else h.scrollLeft=m;else h.scrollTop=m}this._callPropsCallbacks()},b.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&X(this._resetIsScrollingTimeoutId)},b.render=function(){var a=this.props,l=a.children,u=a.className,f=a.direction,m=a.height,y=a.innerRef,h=a.innerElementType,I=a.innerTagName,S=a.itemCount,O=a.itemData,T=a.itemKey,k=T===void 0?je:T,L=a.layout,me=a.outerElementType,he=a.outerTagName,ve=a.style,pe=a.useIsScrolling,ge=a.width,q=this.state.isScrolling,F=f==="horizontal"||L==="horizontal",Ie=F?this._onScrollHorizontal:this._onScrollVertical,j=this._getRangeToRender(),ye=j[0],Se=j[1],H=[];if(S>0)for(var P=ye;P<=Se;P++)H.push(D.exports.createElement(l,{data:O,key:k(P,O),index:P,isScrolling:pe?q:void 0,style:this._getItemStyle(P)}));var Q=i(this.props,this._instanceProps);return D.exports.createElement(me||he||"div",{className:u,onScroll:Ie,ref:this._outerRefSetter,style:A({position:"relative",height:m,width:ge,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:f},ve)},D.exports.createElement(h||I||"div",{children:H,ref:y,style:{height:F?"100%":Q,pointerEvents:q?"none":void 0,width:F?Q:"100%"}}))},b._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var a=this.props.itemCount;if(a>0){var l=this._getRangeToRender(),u=l[0],f=l[1],m=l[2],y=l[3];this._callOnItemsRendered(u,f,m,y)}}if(typeof this.props.onScroll=="function"){var h=this.state,I=h.scrollDirection,S=h.scrollOffset,O=h.scrollUpdateWasRequested;this._callOnScroll(I,S,O)}},b._getRangeToRender=function(){var a=this.props,l=a.itemCount,u=a.overscanCount,f=this.state,m=f.isScrolling,y=f.scrollDirection,h=f.scrollOffset;if(l===0)return[0,0,0,0];var I=o(this.props,h,this._instanceProps),S=d(this.props,I,h,this._instanceProps),O=!m||y==="backward"?Math.max(1,u):1,T=!m||y==="forward"?Math.max(1,u):1;return[Math.max(0,I-O),Math.max(0,Math.min(l-1,S+T)),I,S]},M}(D.exports.PureComponent),e.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},e}var Qe=function(e,t){e.children,e.direction,e.height,e.layout,e.innerTagName,e.outerTagName,e.width,t.instance},Ke=50,N=function(e,t,i){var n=e,s=n.itemSize,o=i.itemMetadataMap,d=i.lastMeasuredIndex;if(t>d){var c=0;if(d>=0){var v=o[d];c=v.offset+v.size}for(var R=d+1;R<=t;R++){var _=s(R);o[R]={offset:c,size:_},c+=_}i.lastMeasuredIndex=t}return o[t]},Ve=function(e,t,i){var n=t.itemMetadataMap,s=t.lastMeasuredIndex,o=s>0?n[s].offset:0;return o>=i?le(e,t,s,0,i):Ge(e,t,Math.max(0,s),i)},le=function(e,t,i,n,s){for(;n<=i;){var o=n+Math.floor((i-n)/2),d=N(e,o,t).offset;if(d===s)return o;d<s?n=o+1:d>s&&(i=o-1)}return n>0?n-1:0},Ge=function(e,t,i,n){for(var s=e.itemCount,o=1;i<s&&N(e,i,t).offset<n;)i+=o,o*=2;return le(e,t,Math.min(i,s-1),Math.floor(i/2),n)},Y=function(e,t){var i=e.itemCount,n=t.itemMetadataMap,s=t.estimatedItemSize,o=t.lastMeasuredIndex,d=0;if(o>=i&&(o=i-1),o>=0){var c=n[o];d=c.offset+c.size}var v=i-o-1,R=v*s;return d+R},Je=He({getItemOffset:function(e,t,i){return N(e,t,i).offset},getItemSize:function(e,t,i){return i.itemMetadataMap[t].size},getEstimatedTotalSize:Y,getOffsetForIndexAndAlignment:function(e,t,i,n,s){var o=e.direction,d=e.height,c=e.layout,v=e.width,R=o==="horizontal"||c==="horizontal",_=R?v:d,M=N(e,t,s),b=Y(e,s),g=Math.max(0,Math.min(b-_,M.offset)),a=Math.max(0,M.offset-_+M.size);switch(i==="smart"&&(n>=a-_&&n<=g+_?i="auto":i="center"),i){case"start":return g;case"end":return a;case"center":return Math.round(a+(g-a)/2);case"auto":default:return n>=a&&n<=g?n:n<a?a:g}},getStartIndexForOffset:function(e,t,i){return Ve(e,i,t)},getStopIndexForStartIndex:function(e,t,i,n){for(var s=e.direction,o=e.height,d=e.itemCount,c=e.layout,v=e.width,R=s==="horizontal"||c==="horizontal",_=R?v:o,M=N(e,t,n),b=i+_,g=M.offset+M.size,a=t;a<d-1&&g<b;)a++,g+=N(e,a,n).size;return a},initInstanceProps:function(e,t){var i=e,n=i.estimatedItemSize,s={itemMetadataMap:{},estimatedItemSize:n||Ke,lastMeasuredIndex:-1};return t.resetAfterIndex=function(o,d){d===void 0&&(d=!0),s.lastMeasuredIndex=Math.min(s.lastMeasuredIndex,o-1),t._getItemStyleCache(-1),d&&t.forceUpdate()},s},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(e){e.itemSize}});function ee(r,e){for(var t in r)if(!(t in e))return!0;for(var i in e)if(r[i]!==e[i])return!0;return!1}var Xe=["style"],Ze=["style"];function Ye(r,e){var t=r.style,i=V(r,Xe),n=e.style,s=V(e,Ze);return!ee(t,n)&&!ee(i,s)}function et(r){const e=r.providers,t=Object.keys(e),i={};for(let n=0;n<t.length;n++){const s=t[n];i[s]={...e[s],idx:n}}return{byName:i,names:t}}async function tt(r,e){const{url:t,init:i}=B(e);let n={providers:{}};try{const s=await fetch(t+r,i);s.ok&&(n=await s.json())}catch(s){console.log("failed to GET /providers/rules",s)}return et(n)}async function ue({name:r,apiConfig:e}){const{url:t,init:i}=B(e);try{return(await fetch(t+`/providers/rules/${r}`,{method:"PUT",...i})).ok}catch(n){return console.log("failed to PUT /providers/rules/:name",n),!1}}async function rt({names:r,apiConfig:e}){for(let t=0;t<r.length;t++)await ue({name:r[t],apiConfig:e})}var nt=function(r,e,t,i,n,s,o,d){if(!r){var c;if(e===void 0)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var v=[t,i,n,s,o,d],R=0;c=new Error(e.replace(/%s/g,function(){return v[R++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}},it=nt;function st(r){return it(r.rules&&r.rules.length>=0,"there is no valid rules list in the rules API response"),r.rules.map((e,t)=>({...e,id:t}))}async function at(r,e){let t={rules:[]};try{const{url:i,init:n}=B(e),s=await fetch(i+r,n);s.ok&&(t=await s.json())}catch(i){console.log("failed to fetch rules",i)}return st(t)}const ce=Te({key:"ruleFilterText",default:""});function ot(r,e){const t=$(),{mutate:i,isLoading:n}=oe(ue,{onSuccess:()=>{t.invalidateQueries("/providers/rules")}});return[o=>{o.preventDefault(),i({name:r,apiConfig:e})},n]}function lt(r){const e=$(),{data:t}=de(r),{mutate:i,isLoading:n}=oe(rt,{onSuccess:()=>{e.invalidateQueries("/providers/rules")}});return[o=>{o.preventDefault(),i({names:t.names,apiConfig:r})},n]}function de(r){return ie(["/providers/rules",r],()=>tt("/providers/rules",r))}function ut(r){const{data:e,isFetching:t}=ie(["/rules",r],()=>at("/rules",r)),{data:i}=de(r),[n]=Ce(ce);if(n==="")return{rules:e,provider:i,isFetching:t};{const s=n.toLowerCase();return{rules:e.filter(o=>o.payload.toLowerCase().indexOf(s)>=0),isFetching:t,provider:{byName:i.byName,names:i.names.filter(o=>o.toLowerCase().indexOf(s)>=0)}}}}const ct="_RuleProviderItem_ly9yn_1",dt="_left_ly9yn_7",ft="_middle_ly9yn_14",mt="_gray_ly9yn_20",ht="_refreshButtonWrapper_ly9yn_24",x={RuleProviderItem:ct,left:dt,middle:ft,gray:mt,refreshButtonWrapper:ht};function vt({idx:r,name:e,vehicleType:t,behavior:i,updatedAt:n,ruleCount:s,apiConfig:o}){const[d,c]=ot(e,o),v=ke(new Date(n),new Date);return C("div",{className:x.RuleProviderItem,children:[p("span",{className:x.left,children:r}),C("div",{className:x.middle,children:[p(we,{name:e,type:`${t} / ${i}`}),p("div",{className:x.gray,children:s<2?`${s} rule`:`${s} rules`}),C("small",{className:x.gray,children:["Updated ",v," ago"]})]}),p("span",{className:x.refreshButtonWrapper,children:p(xe,{onClick:d,disabled:c,children:p(ae,{isRotating:c})})})]})}function pt({apiConfig:r}){const[e,t]=lt(r),{t:i}=se();return p(Le,{icon:p(ae,{isRotating:t}),text:i("update_all_rule_provider"),style:De,onClick:e})}const gt="_rule_14p9p_1",It="_left_14p9p_12",yt="_a_14p9p_19",St="_b_14p9p_26",Rt="_type_14p9p_37",E={rule:gt,left:It,a:yt,b:St,type:Rt},U={_default:"#59caf9",DIRECT:"#f5bc41",REJECT:"#cb3166"};function _t({proxy:r}){let e=U._default;return U[r]&&(e=U[r]),{color:e}}function Mt({type:r,payload:e,proxy:t,id:i}){const n=_t({proxy:t});return C("div",{className:E.rule,children:[p("div",{className:E.left,children:i}),C("div",{children:[p("div",{className:E.b,children:e}),C("div",{className:E.a,children:[p("div",{className:E.type,children:r}),p("div",{style:n,children:t})]})]})]})}const bt="_header_1j1w3_1",Ot="_RuleProviderItemWrapper_1j1w3_17",fe={header:bt,RuleProviderItemWrapper:Ot},{memo:Tt}=z,te=30;function Ct(r,{rules:e,provider:t}){const i=t.names.length;return r<i?t.names[r]:e[r-i].id}function wt({provider:r}){return function(t){const i=r.names.length;return t<i?90:60}}const xt=Tt(({index:r,style:e,data:t})=>{const{rules:i,provider:n,apiConfig:s}=t,o=n.names.length;if(r<o){const c=n.names[r],v=n.byName[c];return p("div",{style:e,className:fe.RuleProviderItemWrapper,children:p(vt,{apiConfig:s,...v})})}const d=i[r-o];return p("div",{style:e,children:p(Mt,{...d})})},Ye),zt=r=>({apiConfig:Ne(r)}),Wt=ze(zt)(Nt);function Nt({apiConfig:r}){const[e,t]=Ae(),{rules:i,provider:n}=ut(r),s=wt({provider:n}),{t:o}=se();return C("div",{children:[C("div",{className:fe.header,children:[p(Pe,{title:o("Rules")}),p(Ee,{placeholder:"Filter",textAtom:ce})]}),p("div",{ref:e,style:{paddingBottom:te},children:p(Je,{height:t-te,width:"100%",itemCount:i.length+n.names.length,itemSize:s,itemData:{rules:i,provider:n,apiConfig:r},itemKey:Ct,children:xt})}),n&&n.names&&n.names.length>0?p(pt,{apiConfig:r}):null]})}export{Wt as default};
