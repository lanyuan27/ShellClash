import{r as f,b as c,j as a,i as s}from"./index.3dd5cc01.js";function u(t,n){if(t==null)return{};var i=v(t,n),r,e;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(e=0;e<o.length;e++)r=o[e],!(n.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(i[r]=t[r]))}return i}function v(t,n){if(t==null)return{};var i={},r=Object.keys(t),e,o;for(o=0;o<r.length;o++)e=r[o],!(n.indexOf(e)>=0)&&(i[e]=t[e]);return i}var p=f.exports.forwardRef(function(t,n){var i=t.color,r=i===void 0?"currentColor":i,e=t.size,o=e===void 0?24:e,l=u(t,["color","size"]);return c("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[a("polyline",{points:"23 4 23 10 17 10"}),a("path",{d:"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"})]})});p.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};p.displayName="RotateCw";const g=p;export{g as R};
