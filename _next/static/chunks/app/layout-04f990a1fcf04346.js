(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1394:function(e,t,r){Promise.resolve().then(r.t.bind(r,2445,23)),Promise.resolve().then(r.bind(r,1769)),Promise.resolve().then(r.bind(r,5630)),Promise.resolve().then(r.t.bind(r,5250,23)),Promise.resolve().then(r.t.bind(r,4227,23)),Promise.resolve().then(r.t.bind(r,1736,23)),Promise.resolve().then(r.t.bind(r,3454,23))},1769:function(e,t,r){"use strict";r.r(t),r.d(t,{ThemeContext:function(){return a},ThemeProvider:function(){return o},useTheme:function(){return c}});var n=r(3827),i=r(4090);let a=(0,i.createContext)({theme:"light",changeTheme:()=>{}}),o=e=>{let{children:t}=e,[r,o]=(0,i.useState)("dark");(0,i.useEffect)(()=>{let e=window.matchMedia("(prefers-color-scheme: dark)"),t=window.matchMedia("(prefers-color-scheme: light)"),r=()=>{var r;let n=null===(r=window)||void 0===r?void 0:r.localStorage.getItem("selectedTheme"),i=e=>{document.documentElement.setAttribute("data-theme",e),o(e)};if(null!==n)i(n);else switch(!0){case e.matches:i("dark");break;case t.matches:i("light")}};return r(),e.addEventListener("change",r),t.addEventListener("change",r),()=>{e.removeEventListener("change",r),t.removeEventListener("change",r)}},[]);let c=(0,i.useCallback)(e=>{o(e),document.documentElement.setAttribute("data-theme",e),localStorage.setItem("selectedTheme",e)},[]);return(0,n.jsx)(a.Provider,{value:{theme:r,changeTheme:c},children:t})},c=()=>{let{theme:e,changeTheme:t}=(0,i.useContext)(a);return{theme:e,changeTheme:t}}},5630:function(e,t,r){"use strict";r.r(t),r.d(t,{DarkModeToggle:function(){return h}});var n=r(3827),i=r(6480),a=r.n(i),o=r(1769),c=r(288),s=r(4090);let l=c.q.svg,m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Math.round((e+Number.EPSILON)*10**t)/10**t},h=e=>{let{theme:t,onChange:r,size:i=18,id:o="light-switch",className:h,...d}=e,u="dark"===t,f=(0,s.useCallback)(e=>{e.preventDefault(),r(u?"light":"dark")},[u,r]),v=(0,c.q_)({transform:u?"rotate(40deg)":"rotate(90deg)",immediate:!1}),g=(0,c.q_)({cx:u?10:25,cy:u?2:0,immediate:!1,config:{mass:3,friction:21}}),b=(0,c.q_)({r:u?8:5,immediate:!1}),k=[0,60,120,180,240,300],x=(0,c.NI)(k.length,{transform:u?0:1,transformOrigin:"center center",immediate:!1,config:{duration:90,tension:350,friction:30}});return(0,n.jsx)("button",{className:a()("opacity-90 relative rounded w-10 h-8 flex items-center justify-center",h),onClick:f,"aria-label":u?"Activate light mode":"Activate dark mode",title:u?"Activate light mode":"Activate dark mode",...d,children:(0,n.jsxs)(l,{className:"relative overflow-visible",width:i,height:i,viewBox:"0 0 18 18",style:{transform:v.transform},children:[(0,n.jsxs)("mask",{id:"moon-mask-".concat(o),children:[(0,n.jsx)("rect",{x:"0",y:"0",width:"18",height:"18",fill:"#FFF"}),(0,n.jsx)(c.q.circle,{...g,r:"8",fill:"black"})]}),(0,n.jsx)(c.q.circle,{cx:"9",cy:"9",fill:"rgb(var(--color-text))",mask:"url(#moon-mask-".concat(o,")"),...b}),(0,n.jsx)("g",{children:x.map((e,t)=>{let{transform:r,...i}=e,a=k[t],o=a/180*Math.PI,s=m(9+8*Math.cos(o),6),l=m(9+8*Math.sin(o),6);return(0,n.jsx)(c.q.circle,{cx:s,cy:l,r:1.5,fill:"rgb(var(--color-text))",style:{...i,transform:r.to(e=>"scale(".concat(e,")"))}},a)})})]})})};t.default=e=>{let{theme:t,changeTheme:r}=(0,o.useTheme)();return(0,n.jsx)(h,{theme:t,onChange:r,...e})}},2445:function(){}},function(e){e.O(0,[174,956,971,69,744],function(){return e(e.s=1394)}),_N_E=e.O()}]);