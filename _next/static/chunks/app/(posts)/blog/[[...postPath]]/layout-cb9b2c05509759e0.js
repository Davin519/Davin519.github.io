(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[202],{8198:function(n,e,t){Promise.resolve().then(t.bind(t,8842))},8842:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return B},useBptContext:function(){return W}});var r=t(230),o=t(7437),i=t(802),l=t(2265);let c="1.1rem",s="2.5rem";var a=t(1396),u=t.n(a);function d(){let n=(0,r._)(["\n  text-decoration: none;\n  color: black;\n  width: 100%;\n"]);return d=function(){return n},n}function h(){let n=(0,r._)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  font-size: ",";\n  border: none;\n  outline: none;\n  background-color: transparent;\n  min-width: 90%;\n  width: 100%;\n"]);return h=function(){return n},n}function f(){let n=(0,r._)(["\n  width: 1rem;\n  height: 100%;\n  background-color: #515151;\n"]);return f=function(){return n},n}function m(){let n=(0,r._)(["\n  border: none;\n  outline: none;\n  background-color: transparent;\n  width: 10%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return m=function(){return n},n}function p(){let n=(0,r._)(["\n  display: flex;\n  align-items: center;\n  background-color: transparent;\n  height: ",";\n  width: 100%;\n  justify-content: space-between;\n  border: none;\n  outline: none;\n"]);return p=function(){return n},n}let g=(0,i.ZP)(u()).withConfig({componentId:"sc-3776e0da-0"})(d()),x=i.ZP.button.withConfig({componentId:"sc-3776e0da-1"})(h(),c),v=i.ZP.div.withConfig({componentId:"sc-3776e0da-2"})(f()),y=i.ZP.button.withConfig({componentId:"sc-3776e0da-3"})(m()),j=i.ZP.div.withConfig({componentId:"sc-3776e0da-4"})(p(),s);var b=t(2410);let w="./posts/blog";function C(){let n=(0,r._)(["\n  color: black;\n  font-size: ",";\n  font-weight: normal;\n  list-style: none;\n  overflow: hidden;\n  max-height: 0;\n  transition: max-height 0.5s ease-in-out;\n"]);return C=function(){return n},n}let k=i.ZP.ul.withConfig({componentId:"sc-a00e3cfd-0"})(C(),c);var O=n=>{let{name:e,path:t,branches:r}=n,i=(0,l.useRef)(null),[c,s]=(0,l.useState)(!1),a=W(),u=()=>{s(n=>!n)};return(0,l.useEffect)(()=>{let n=i.current;c?(n.style.maxHeight=n.scrollHeight+"px",setTimeout(()=>{n.style.maxHeight="fit-content"},500)):(n.style.maxHeight=n.scrollHeight+"px",setTimeout(()=>{n.style.maxHeight=0},5))},[c]),(0,o.jsxs)("div",{children:[(0,o.jsxs)(j,{children:[(0,o.jsx)(g,{href:"/blog".concat(t.slice(w.length),"/index"),children:(0,o.jsxs)(x,{onClick:n=>{u(),a(n)},children:[Array.from({length:t.slice(w.length).split("/").length-2}).map((n,e)=>(0,o.jsx)(v,{},e)),e]})}),(0,o.jsx)(y,{onClick:u,children:c?(0,o.jsx)(b.OId,{size:15}):(0,o.jsx)(b.hjJ,{size:15})})]}),(0,o.jsx)(k,{ref:i,children:r})]})};function _(){let n=(0,r._)(["\n  color: black;\n  font-size: ",";\n  font-weight: normal;\n  list-style: none;\n  overflow: hidden;\n  padding: 0;\n"]);return _=function(){return n},n}let P=i.ZP.ul.withConfig({componentId:"sc-6d62dfbc-0"})(_(),c);var I=n=>{let{name:e,path:t,branches:r}=n;return(0,o.jsxs)("div",{children:["root"!==e?(0,o.jsx)(j,{children:(0,o.jsx)(g,{href:"/blog".concat(t.slice(w.length),"/index"),children:(0,o.jsx)(x,{onClick:W,style:{fontSize:"1.3rem",fontWeight:"600"},children:e})})}):null,(0,o.jsx)(P,{children:r})]})};function z(){let n=(0,r._)(["\n  display: flex;\n  align-items: center;\n  font-size: ",";\n  font-weight: normal;\n  height: ",";\n"]);return z=function(){return n},n}let E=i.ZP.li.withConfig({componentId:"sc-473d61bf-0"})(z(),c,s);var N=n=>{let{tree:e}=n,t=W();if("index.mdx"===e.name)return null;let r="/blog".concat(e.path.slice(0,e.path.lastIndexOf(".")).slice(w.length));return(0,o.jsx)(E,{children:(0,o.jsx)(g,{href:r,children:(0,o.jsxs)(x,{onClick:t,children:[Array.from({length:e.path.slice(w.length).split("/").length-2}).map((n,e)=>(0,o.jsx)(v,{},e)),e.name.slice(0,e.name.lastIndexOf("."))]})})})};function Z(){let n=(0,r._)(["\n  position: relative;\n  & > div {\n    position: absolute;\n    width: 15rem;\n    top: 10rem;\n    right: 3rem;\n  }\n"]);return Z=function(){return n},n}let H=i.ZP.div.withConfig({componentId:"sc-a8d0da94-0"})(Z()),S=n=>{let{tree:e}=n,t=n=>{var e;return null==n?void 0:null===(e=n.children)||void 0===e?void 0:e.map(n=>(0,o.jsx)(A,{tree:n},n.name))};return"category"===e.type?(0,o.jsx)(I,{name:e.name,path:e.path,branches:t(e)}):(0,o.jsx)(O,{name:e.name,path:e.path,branches:t(e)})},A=n=>{let{tree:e}=n;return"post"===e.type?(0,o.jsx)(N,{tree:e}):(0,o.jsx)(S,{tree:e})},T=(0,l.createContext)(),W=()=>(0,l.useContext)(T);var B=n=>{let{tree:e}=n,[t,r]=(0,l.useState)(null);return(0,l.useEffect)(()=>{t&&(t.style.color="#6fadc2")},[t]),(0,o.jsx)(T.Provider,{value:n=>{let{target:e}=n;null!==t&&t!==e&&(t.style.color="black"),r(e)},children:(0,o.jsx)(H,{children:(0,o.jsx)("div",{children:(0,o.jsx)(A,{tree:e})})})})}},1172:function(n,e,t){"use strict";t.d(e,{w_:function(){return s}});var r=t(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),l=function(){return(l=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}).apply(this,arguments)},c=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&0>e.indexOf(r)&&(t[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)0>e.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]]);return t};function s(n){return function(e){return r.createElement(a,l({attr:l({},n.attr)},e),function n(e){return e&&e.map(function(e,t){return r.createElement(e.tag,l({key:t},e.attr),n(e.child))})}(n.child))}}function a(n){var e=function(e){var t,o=n.attr,i=n.size,s=n.title,a=c(n,["attr","size","title"]),u=i||e.size||"1em";return e.className&&(t=e.className),n.className&&(t=(t?t+" ":"")+n.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,a,{className:t,style:l(l({color:n.color||e.color},e.style),n.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),n.children)};return void 0!==i?r.createElement(i.Consumer,null,function(n){return e(n)}):e(o)}}},function(n){n.O(0,[400,343,396,971,596,744],function(){return n(n.s=8198)}),_N_E=n.O()}]);