(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[308,404,40],{4388:function(e,t,n){Promise.resolve().then(n.bind(n,9327)),Promise.resolve().then(n.bind(n,3961)),Promise.resolve().then(n.bind(n,7457)),Promise.resolve().then(n.bind(n,943)),Promise.resolve().then(n.t.bind(n,1749,23))},3961:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var i=n(3827),r=n(4090),a=n(1036);let c=e=>new Promise(t=>{let n=new Image;n.src=e,n.onload=()=>{t(n)}});async function s(e){let t=Math.max(e.width,e.height),n=e.width=Math.round(100*e.width/t),i=e.height=Math.round(100*e.height/t),r=document.createElement("canvas"),c=r.getContext("2d");if(r.width=n,r.height=i,!c)throw Error("Canvas error");c.drawImage(e,0,0,n,i);let s=c.getImageData(0,0,n,i);return btoa(String.fromCodePoint(...(0,a.DI)(n,i,s.data)))}let o=e=>{let t=atob(e),n=Uint8Array.from(t,e=>e.codePointAt(0));return{aspectRatio:(0,a.UN)(n),src:(0,a.xS)(n)}};var l=()=>{let[e,t]=(0,r.useState)("/_next/static/media/example.5857c282.jpg"),[n,a]=(0,r.useState)("6WgKHQiFhXCIZ3eId4Z4eHdwiQh2"),{src:l,aspectRatio:h}=(0,r.useMemo)(()=>o(n),[n]),[d,u]=(0,r.useState)(l),[g,m]=(0,r.useState)(!1),p=(0,r.useCallback)(async()=>{let{src:t}=o(n);u(t),m(!0);let i=await c(e);await new Promise(e=>setTimeout(e,1500)),u(e),a(await s(i)),m(!1)},[e,n]);return(0,r.useEffect)(()=>{p()},[p]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("button",{onClick:async()=>{p()},children:"Simulate slow internet"}),(0,i.jsx)("br",{}),(0,i.jsx)("img",{width:200,src:d,loading:"lazy",style:{aspectRatio:h}})]})}},1769:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeContext:function(){return a},ThemeProvider:function(){return c},useTheme:function(){return s}});var i=n(3827),r=n(4090);let a=(0,r.createContext)({theme:"light",changeTheme:()=>{}}),c=e=>{let{children:t}=e,[n,c]=(0,r.useState)("dark");(0,r.useEffect)(()=>{let e=window.matchMedia("(prefers-color-scheme: dark)"),t=window.matchMedia("(prefers-color-scheme: light)"),n=()=>{var n;let i=null===(n=window)||void 0===n?void 0:n.localStorage.getItem("selectedTheme"),r=e=>{document.documentElement.setAttribute("data-theme",e),c(e)};if(null!==i)r(i);else switch(!0){case e.matches:r("dark");break;case t.matches:r("light")}};return n(),e.addEventListener("change",n),t.addEventListener("change",n),()=>{e.removeEventListener("change",n),t.removeEventListener("change",n)}},[]);let s=(0,r.useCallback)(e=>{c(e),document.documentElement.setAttribute("data-theme",e),localStorage.setItem("selectedTheme",e)},[]);return(0,i.jsx)(a.Provider,{value:{theme:n,changeTheme:s},children:t})},s=()=>{let{theme:e,changeTheme:t}=(0,r.useContext)(a);return{theme:e,changeTheme:t}}},943:function(e,t,n){"use strict";n.r(t),n.d(t,{CodeHighlight:function(){return p},CodeSnippet:function(){return x},default:function(){return v}});var i=n(3827),r=n(4090),a=n(1128),c=n(6480),s=n.n(c),o=n(480),l=n.n(o),h=n(1769);let d=async e=>{window.navigator.clipboard.writeText(e)};var u=e=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20px",height:"20px",fill:"#26A2C1",className:"react_svg__FileName-icon-i4M61",viewBox:"0 0 16 16",...e,children:(0,i.jsx)("path",{d:"M16 8c0-1.06-1.32-2.06-3.36-2.68.46-2.08.26-3.72-.66-4.26a1.5 1.5 0 0 0-.74-.18v.72c.16 0 .28.02.38.08.44.26.64 1.22.48 2.46l-.16.96a15.5 15.5 0 0 0-2.08-.36c-.44-.6-.9-1.16-1.36-1.64 1.08-.96 2.08-1.5 2.76-1.5V.88c-.9 0-2.08.64-3.26 1.74C6.8 1.52 5.64.88 4.74.88v.72c.68 0 1.68.54 2.74 1.52-.46.48-.92 1.02-1.34 1.62-.74.08-1.44.2-2.08.36a5.4 5.4 0 0 1-.16-.94c-.16-1.24.04-2.22.48-2.48.1-.06.22-.08.38-.08V.9c-.28 0-.52.06-.74.18-.92.52-1.12 2.18-.64 4.24C1.32 5.94 0 6.94 0 8s1.32 2.06 3.36 2.68c-.46 2.08-.26 3.72.66 4.26.22.12.46.18.74.18.9 0 2.08-.64 3.26-1.74 1.18 1.1 2.36 1.74 3.26 1.74.28 0 .52-.06.74-.18.92-.52 1.12-2.18.64-4.24C14.68 10.06 16 9.06 16 8m-4.24-2.18c-.12.42-.28.86-.44 1.28l-.42-.78c-.16-.26-.3-.52-.46-.76.44.08.88.16 1.32.26m-1.5 3.48c-.26.44-.52.86-.78 1.24a18 18 0 0 1-2.94 0A16 16 0 0 1 5.08 8a16 16 0 0 1 1.46-2.54 18 18 0 0 1 2.94 0A16 16 0 0 1 10.94 8c-.2.44-.44.88-.68 1.3m1.06-.42c.18.44.32.88.46 1.3-.42.1-.88.2-1.34.26.16-.26.32-.5.46-.78zM8 12.36c-.3-.32-.6-.66-.9-1.04.3.02.6.02.9.02s.6 0 .9-.02c-.28.38-.6.72-.9 1.04m-2.42-1.92c-.46-.06-.9-.16-1.34-.26.12-.42.28-.86.44-1.28l.42.78zM8 3.64c.3.32.6.66.9 1.04-.3-.02-.6-.02-.9-.02s-.6 0-.9.02c.28-.38.6-.72.9-1.04M5.58 5.56c-.16.26-.32.5-.46.78q-.24.39-.42.78c-.18-.44-.32-.88-.46-1.3.42-.1.88-.18 1.34-.26m-2.96 4.1C1.46 9.16.72 8.52.72 8s.74-1.16 1.9-1.66c.28-.12.58-.22.9-.32.18.64.44 1.3.74 1.98q-.45 1.02-.72 1.98c-.32-.1-.62-.2-.92-.32m1.76 4.66c-.44-.26-.64-1.22-.48-2.46l.16-.96c.64.16 1.34.28 2.08.36.44.6.9 1.16 1.36 1.64-1.08.96-2.08 1.5-2.74 1.5a1 1 0 0 1-.38-.08m7.74-2.5c.16 1.24-.04 2.22-.48 2.48a.7.7 0 0 1-.38.08c-.68 0-1.68-.54-2.74-1.52.46-.48.92-1.02 1.34-1.62.74-.08 1.44-.2 2.08-.36.08.32.14.64.18.94m1.26-2.16c-.28.12-.58.22-.9.32-.18-.64-.44-1.3-.74-1.98q.45-1.02.72-1.98c.32.1.62.22.92.34 1.16.5 1.9 1.14 1.9 1.66 0 .5-.76 1.14-1.9 1.64M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"})}),g=e=>(0,i.jsx)("svg",{width:"20px",height:"20px",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,"aria-hidden":"true",className:"copy_svg__with-icon_icon__MHUeb","data-testid":"geist-icon",shapeRendering:"geometricPrecision",style:{color:"currentcolor",width:20,height:20},viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{d:"M6 17a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7a2 2 0 0 1 1.732 1M11 21h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2"})});let m={...a.np.oneDark,plain:{...a.np.oneDark.plain,background:"rgb(18 14 31)"}},p=e=>{let{code:t,language:n="tsx",highlightedLines:r,className:c}=e,{theme:o}=(0,h.useTheme)();return(0,i.jsx)(a.y$,{code:t.trim().replace(/\t/g,"  "),language:n,theme:"dark"===o?m:a.np.oneLight,children:e=>{let{style:t,tokens:n,getLineProps:a,getTokenProps:o}=e;return(0,i.jsx)("div",{style:t,className:s()(l().codeHighlight,c,"flex overflow-x-auto py-3 font-code"),children:(0,i.jsx)("div",{className:"w-auto",children:n.map((e,t)=>(0,i.jsx)("div",{...a({line:e,className:s()("px-4",{[l().highlightedLine]:null==r?void 0:r.includes(t)}),style:{background:"var(--code-line-bg)"}}),children:e.map((e,t)=>(0,i.jsx)("span",{...o({token:e})},t))},t))})})}})},A={ts:e=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20px",height:"20px","aria-hidden":"true",className:"ts_svg__icon",viewBox:"0 0 32 32",...e,children:(0,i.jsx)("path",{fill:"#007acc",d:"M23.827 8.243a4.42 4.42 0 0 1 2.223 1.281 5.9 5.9 0 0 1 .852 1.143c.011.045-1.534 1.083-2.471 1.662-.034.023-.169-.124-.322-.35a2.01 2.01 0 0 0-1.67-1c-1.077-.074-1.771.49-1.766 1.433a1.3 1.3 0 0 0 .153.666c.237.49.677.784 2.059 1.383 2.544 1.095 3.636 1.817 4.31 2.843a5.16 5.16 0 0 1 .416 4.333 4.76 4.76 0 0 1-3.932 2.815 11 11 0 0 1-2.708-.028 6.53 6.53 0 0 1-3.616-1.884 6.3 6.3 0 0 1-.926-1.371 3 3 0 0 1 .327-.208c.158-.09.756-.434 1.32-.761l1.024-.6.214.312a4.8 4.8 0 0 0 1.35 1.292 3.3 3.3 0 0 0 3.458-.175 1.545 1.545 0 0 0 .2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8 8.8 0 0 1-3.349-2.055 4.7 4.7 0 0 1-.976-1.777 7.1 7.1 0 0 1-.062-2.268 4.33 4.33 0 0 1 3.644-3.374 9 9 0 0 1 2.691.084m-8.343 1.483.011 1.454h-4.63v13.148H7.6V11.183H2.97V9.755a14 14 0 0 1 .04-1.466c.017-.023 2.832-.034 6.245-.028l6.211.017Z"})}),tsx:u,jsx:u,js:e=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20px",height:"20px",fill:"#E79627",className:"js_svg__FileName-icon-i4M61",viewBox:"-40 -40 586 586",...e,children:(0,i.jsx)("path",{d:"M412.226 385.563c28.065 37.511-46.893 64.77-77.11 10.559l-41.05 23.822 2.516 4.167c15.464 26.04 39.62 41.294 72.27 45.673 71.481 8.55 118.148-37.034 92.817-101.767C443.667 331 396.5 324 369 305.75c-16.172-9.422-12.806-29.364.183-37.365 10.102-6.222 33.317-7.01 45.274 17.786l39.28-25.317C422.75 205 349.5 216.25 327.544 241.627 297.688 276.702 306.228 315.85 332.5 341c20.434 19.561 52.501 26.202 79.726 44.563m-185.588 79.069c22.63-9.153 35.904-28.074 39.416-56.202.305-2.848.508-184.599.508-184.599h-49.788l-.36 179.779c-1.164 11.64-8.122 19.983-18.289 21.619-17.347 2.791-28.911-2.26-40.963-24.826l-40.535 24.508c17.373 40.839 69.745 55.838 110.011 39.72zM44.873 0h422.254C491.987 0 512 20.013 512 44.873v422.254c0 24.86-20.013 44.873-44.873 44.873H44.873C20.013 512 0 491.987 0 467.127V44.873C0 20.013 20.013 0 44.873 0"})}),html:e=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20px",height:"20px",className:"html_svg__FileName-icon-i4M61",viewBox:"0 0 16 16",...e,children:(0,i.jsx)("path",{fill:"#F4BF75",d:"m11.631 5.1.136-1.531H4.233l.4 4.672h5.216l-.187 2-1.679.459-1.67-.464L6.2 9.015H4.71l.19 2.433 3.085.875h.032v-.009l3.06-.866.423-4.76H6.014L5.886 5.1h5.744ZM2 1h12l-1.091 12.583L7.983 15l-4.892-1.417Z",className:"html_svg__i-color"})}),css:e=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20px",height:"20px",className:"css_svg__FileName-icon-i4M61",viewBox:"0 -1 16 16",...e,children:(0,i.jsx)("path",{fill:"#1E9CEF",d:"M3.785 2H14l-1.805 9.164L6.738 13 2 11.164l.482-2.447H4.5l-.2 1.011 2.864 1.107 3.3-1.107.461-2.328h-8.2l.395-2.045h8.206l.258-1.313h-8.2Z",className:"css_svg__i-color"})})},x=e=>{let{code:t,language:n,className:a,caption:c,highlightedLines:o,...h}=e;return(0,i.jsxs)("div",{className:s()(a,l().codeSnippet,"text-body1 border border-gray-100 dark:border-gray-700 rounded-sm overflow-hidden"),"data-lang":n,"data-caption":c,...h,children:[(0,i.jsxs)("div",{className:s()(l().caption,"flex items-center gap-1 text-gray-700 dark:text-white rounded-t overflow-hidden px-4 py-2 bg-gray-100 dark:bg-[#201b31]"),children:[A[n]?r.createElement(A[n],{className:"w-5"}):null,c,(0,i.jsx)("button",{className:"ml-auto",children:(0,i.jsx)(g,{onClick:()=>d(t)})})]}),(0,i.jsx)(p,{className:l().codeSnippetCode,code:t,language:n,highlightedLines:o})]})};var v=x},6993:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return i}});let i=n(6921)._(n(4090)).default.createContext(null)},480:function(e){e.exports={codeHighlight:"CodeSnippet_codeHighlight___tLcF",codeSnippet:"CodeSnippet_codeSnippet__HLTMQ",highlightedLine:"CodeSnippet_highlightedLine__gkOy8",caption:"CodeSnippet_caption__zsguP",codeSnippetCode:"CodeSnippet_codeSnippetCode__3Lzu3"}},9327:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/actions-type-hightlight.ef33adb0.png",height:299,width:702,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAABlBMVEUhIiMqKyuPB9T3AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAFUlEQVR4nGNgBAEGBgYGMAPKApEMAAD3AA7CaVLhAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:3}},7457:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/telegram-example.84e34859.png",height:210,width:209,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAe1BMVEWFfGbVydpmaCWcY03Rs3mBclWjm2pvTiy0TzSfj3OSVjy1W0C8hGHAt7ezZ0RvY1dPOCa0onehZj6YNS2SQzm/i2DPakDGXjeEX0NsXVCUhXWlbUy2c1OgmY6HZDiYeVuoooaqgF/TxIzIpXrAtpOdSC68kYrOo4yKfX6e0rW5AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAARklEQVR4nAXBhQGAMAADsA7mPtzd/r+QBMTNwNAHEJVlwo4CbuOLnmyH66C59qZConTNG1kipHM3bSEQ1XvLmjPE75Fegf2FBAPqce88LQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},6480:function(e,t){"use strict";var n;!/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/function(){var i={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=a(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)i.call(e,n)&&e[n]&&(t=a(t,n));return t}(n)))}return e}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0!==(n=(function(){return r}).apply(t,[]))&&(e.exports=n)}()}},function(e){e.O(0,[911,16,971,69,744],function(){return e(e.s=4388)}),_N_E=e.O()}]);