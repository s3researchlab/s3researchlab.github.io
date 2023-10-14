(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38],{7015:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team",function(){return a(9616)}])},3433:function(e,t,a){"use strict";a.d(t,{Z:function(){return layout_Layout}});var n=a(5893),r=a(9008),s=a.n(r),l=a(682),i=a(4298),c=a.n(i);let injectGA=()=>{function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-S1P93RNMN0")};var layout_Footer=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c(),{src:"https://code.jquery.com/jquery-3.6.0.min.js",crossOrigin:"anonymous"}),(0,n.jsx)(c(),{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-S1P93RNMN0"}),(0,n.jsx)(c(),{children:injectGA()})]})},o=a(1664),d=a.n(o),h=a(4373),u=a(9291),m=a(7294);let LocalStorageUtils=class LocalStorageUtils{static setItem(e,t){localStorage.setItem(e,JSON.stringify(t))}static getItem(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=localStorage.getItem(e);return a?JSON.parse(a):t}};let x=Object.freeze({LIGHT:{id:"light",name:"Light",icon:"bi-sun-fill"},DARK:{id:"dark",name:"Dark",icon:"bi-moon-stars-fill"},AUTO:{id:"auto",name:"Auto",icon:"bi-circle-half"}});function saveColorTheme(e){LocalStorageUtils.setItem("color-theme-id",e.id)}function getSystemColorTheme(){let e=window.matchMedia("(prefers-color-scheme: dark)");return e.matches?x.DARK:x.LIGHT}function changeColorThemeTo(e){e===x.AUTO&&(e=getSystemColorTheme()),window.document.documentElement.setAttribute("data-bs-theme",e.id)}function Item(e){let{value:t,handleClick:a,selected:r=!1}=e,s=r?(0,n.jsx)("i",{className:"bi bi-check2"}):(0,n.jsx)(n.Fragment,{});return(0,n.jsx)("li",{children:(0,n.jsxs)("a",{className:"dropdown-item d-flex align-items-center rounded ".concat(r?"active":""),href:"#",onClick:e=>a(e,t),"data-theme":t.id,children:[(0,n.jsx)("i",{className:"bi ".concat(t.icon)}),(0,n.jsx)("span",{className:"ms-3 me-auto",children:t.name}),s]})})}function DarkModeNavItem(){let[e,t]=(0,m.useState)(x.AUTO);function handleClick(e,a){t(a),changeColorThemeTo(a),saveColorTheme(a)}return(0,m.useEffect)(()=>{let a=getSystemColorTheme(),n=function(){let e=LocalStorageUtils.getItem("color-theme-id");return e==x.AUTO.id?x.AUTO:e==x.DARK.id?x.DARK:e==x.LIGHT.id?x.LIGHT:null}();n?saveColorTheme===x.AUTO?(t(a),changeColorThemeTo(a)):(t(n),changeColorThemeTo(n)):changeColorThemeTo(a);let handleDarkModeChange=t=>{e==x.AUTO&&changeColorThemeTo(getSystemColorTheme())},r=window.matchMedia("(prefers-color-scheme: dark)");return r.addEventListener("change",handleDarkModeChange),()=>{r.removeEventListener("change",handleDarkModeChange)}},[e]),(0,n.jsxs)("li",{className:"nav-item dropdown dark-mode",children:[(0,n.jsx)("a",{className:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:(0,n.jsx)("i",{className:"bi ".concat(e.icon)})}),(0,n.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end p-1",children:[(0,n.jsx)(Item,{value:x.LIGHT,handleClick:handleClick,selected:e===x.LIGHT}),(0,n.jsx)(Item,{value:x.DARK,handleClick:handleClick,selected:e===x.DARK}),(0,n.jsx)(Item,{value:x.AUTO,handleClick:handleClick,selected:e===x.AUTO})]})]})}var j=a(1163);function NavLink(e){let{href:t,exact:a,children:r}=e,{pathname:s}=(0,j.useRouter)(),l="";return a?s===t&&(l="active"):s.startsWith(t)&&(l="active"),(0,n.jsx)(d(),{href:t,className:"nav-link ".concat(l),children:r})}var layout_TopBar=function(){return(0,n.jsx)(h.Z,{expand:"md",bg:"dark",fixed:"top",children:(0,n.jsxs)(l.Z,{fluid:!0,children:[(0,n.jsx)(h.Z.Brand,{href:"/",children:(0,n.jsx)("img",{src:"images/logo.png",width:"169",height:"32",className:"d-inline-block align-top"})}),(0,n.jsx)(h.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,n.jsxs)(h.Z.Collapse,{id:"basic-navbar-nav",children:[(0,n.jsxs)(u.Z,{className:"me-auto",children:[(0,n.jsxs)(NavLink,{href:"/",exact:!0,children:[(0,n.jsx)("i",{className:"bi bi-house"}),"Home"]}),(0,n.jsxs)(NavLink,{href:"/team",children:[(0,n.jsx)("i",{className:"bi bi-people"}),"Team"]}),(0,n.jsxs)(NavLink,{href:"/projects",children:[(0,n.jsx)("i",{className:"bi bi-table"}),"Projects"]}),(0,n.jsxs)(NavLink,{href:"/publications",children:[(0,n.jsx)("i",{className:"bi bi-file-earmark-text"}),"Publications"]}),(0,n.jsxs)(NavLink,{href:"/contact",children:[(0,n.jsx)("i",{className:"bi bi-envelope"}),"Contact"]})]}),(0,n.jsx)(u.Z,{children:(0,n.jsx)(DarkModeNavItem,{})})]})]})})},layout_Layout=function(e){let{children:t,menu:a,className:r=""}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:"".concat("Home"==a?"":"".concat(a," - ")," S3 Research Lab")}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,n.jsx)("header",{children:(0,n.jsx)(layout_TopBar,{})}),(0,n.jsx)("main",{children:(0,n.jsxs)(l.Z,{className:r,children:[(0,n.jsx)("h3",{className:"text-dark",children:"Home"==a?"":a}),t]})}),(0,n.jsx)(layout_Footer,{})]})}},9616:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return i}});var n=a(5893),r=a(1555),s=a(4051),l=a(3433);function Member(e){let{id:t,name:a,position:r,img:s,url:l,when:i}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"member",children:(0,n.jsxs)("div",{className:"d-flex",children:[(0,n.jsx)("div",{className:"flex-shrink-0",children:(0,n.jsx)("a",{href:l,target:"_blank",children:(0,n.jsx)("img",{className:"rounded",src:"images/profile-photo/".concat(s),width:65})})}),(0,n.jsxs)("div",{className:"flex-grow-1 ms-2",children:[(0,n.jsx)("p",{className:"text-dark fw-bold mb-0",children:a}),(0,n.jsx)("p",{className:"mb-0",children:r}),(0,n.jsx)("p",{className:"small text-start text-secondary",children:i})]})]})},t)})}function Group(e){let{children:t}=e;t&&0!==t.length||(t=(0,n.jsx)("p",{children:"To be Announced"})),Array.isArray(t)||(t=[t]);let a=t.map((e,t)=>(0,n.jsx)(r.Z,{xs:12,sm:6,children:e},t));return(0,n.jsx)(s.Z,{children:a})}function filterOutFaculty(e,t){return e.filter(e=>e.status===t).map((e,t)=>(0,n.jsx)(Member,{id:t,name:e.name,position:e.position,img:e.image,when:e.affiliation,url:e.url}))}function filterOutStudents(e,t,a){return e.filter(e=>e.status===t&&e.degree===a).map((e,t)=>(0,n.jsx)(Member,{id:t,name:e.name,position:e.position,img:e.image,when:e.when,url:e.url}))}var i=!0;t.default=function(e){let{students:t,faculty:a}=e;return(0,n.jsxs)(l.Z,{menu:"Team",children:[(0,n.jsx)("p",{children:"Meet our team! Click on profile picture to open their personal websites."}),(0,n.jsx)("h4",{className:"text-dark",children:"Principal Investigator"}),(0,n.jsx)("hr",{}),(0,n.jsx)(Group,{children:filterOutFaculty(a,"pi")}),(0,n.jsx)("h4",{className:"text-dark",children:"Affiliated Faculty Members"}),(0,n.jsx)("hr",{}),(0,n.jsx)(Group,{children:filterOutFaculty(a,"affiliated")}),(0,n.jsx)("h4",{className:"text-dark",children:"Current Ph.D. Students"}),(0,n.jsx)("hr",{}),(0,n.jsx)(Group,{children:filterOutStudents(t,"current","phd")}),(0,n.jsx)("h4",{className:"text-dark",children:"Current Master's Students"}),(0,n.jsx)("hr",{}),(0,n.jsx)(Group,{children:filterOutStudents(t,"current","master")}),(0,n.jsx)("h4",{className:"text-dark",children:"Current Undergraduate Students"}),(0,n.jsx)("hr",{}),(0,n.jsx)(Group,{children:filterOutStudents(t,"current","undergraduate")}),(0,n.jsx)("h4",{className:"text-dark",children:"Alumni"}),(0,n.jsx)("hr",{}),(0,n.jsx)("p",{className:"mb-3 mt-3 text-light",children:"Undergraduate Students"}),(0,n.jsx)(Group,{children:filterOutStudents(t,"former","undergraduate")})]})}},1555:function(e,t,a){"use strict";var n=a(4184),r=a.n(n),s=a(7294),l=a(6792),i=a(5893);let c=s.forwardRef((e,t)=>{let[{className:a,...n},{as:s="div",bsPrefix:c,spans:o}]=function({as:e,bsPrefix:t,className:a,...n}){t=(0,l.vE)(t,"col");let s=(0,l.pi)(),i=(0,l.zG)(),c=[],o=[];return s.forEach(e=>{let a,r,s;let l=n[e];delete n[e],"object"==typeof l&&null!=l?{span:a,offset:r,order:s}=l:a=l;let d=e!==i?`-${e}`:"";a&&c.push(!0===a?`${t}${d}`:`${t}${d}-${a}`),null!=s&&o.push(`order${d}-${s}`),null!=r&&o.push(`offset${d}-${r}`)}),[{...n,className:r()(a,...c,...o)},{as:e,bsPrefix:t,spans:c}]}(e);return(0,i.jsx)(s,{...n,ref:t,className:r()(a,!o.length&&c)})});c.displayName="Col",t.Z=c},4051:function(e,t,a){"use strict";var n=a(4184),r=a.n(n),s=a(7294),l=a(6792),i=a(5893);let c=s.forwardRef(({bsPrefix:e,className:t,as:a="div",...n},s)=>{let c=(0,l.vE)(e,"row"),o=(0,l.pi)(),d=(0,l.zG)(),h=`${c}-cols`,u=[];return o.forEach(e=>{let t;let a=n[e];delete n[e],null!=a&&"object"==typeof a?{cols:t}=a:t=a;let r=e!==d?`-${e}`:"";null!=t&&u.push(`${h}${r}-${t}`)}),(0,i.jsx)(a,{ref:s,...n,className:r()(t,c,...u)})});c.displayName="Row",t.Z=c}},function(e){e.O(0,[983,774,888,179],function(){return e(e.s=7015)}),_N_E=e.O()}]);