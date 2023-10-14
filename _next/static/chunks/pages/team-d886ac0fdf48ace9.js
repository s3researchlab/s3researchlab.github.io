(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38],{7015:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team",function(){return a(9616)}])},3570:function(e,t,a){"use strict";a.d(t,{Z:function(){return layout_Layout}});var r=a(5893),n=a(9008),s=a.n(n),l=a(682),i=a(1664),c=a.n(i),o=a(1163),d=a(7294);let LocalStorageUtils=class LocalStorageUtils{static setItem(e,t){localStorage.setItem(e,JSON.stringify(t))}static getItem(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=localStorage.getItem(e);return a?JSON.parse(a):t}};let u=Object.freeze({LIGHT:{id:"light",name:"Light",icon:"bi-sun-fill"},DARK:{id:"dark",name:"Dark",icon:"bi-moon-stars-fill"},AUTO:{id:"auto",name:"Auto",icon:"bi-circle-half"}});function saveColorTheme(e){LocalStorageUtils.setItem("color-theme-id",e.id)}function getSystemColorTheme(){let e=window.matchMedia("(prefers-color-scheme: dark)");return e.matches?u.DARK:u.LIGHT}function changeColorThemeTo(e){e===u.AUTO&&(e=getSystemColorTheme()),window.document.documentElement.setAttribute("data-bs-theme",e.id)}function Item(e){let{value:t,handleClick:a,selected:n=!1}=e,s=n?(0,r.jsx)("i",{className:"bi bi-check2"}):(0,r.jsx)(r.Fragment,{});return(0,r.jsx)("li",{children:(0,r.jsxs)("a",{className:"dropdown-item d-flex align-items-center rounded ".concat(n?"active":""),href:"#",onClick:e=>a(e,t),"data-theme":t.id,children:[(0,r.jsx)("i",{className:"bi ".concat(t.icon)}),(0,r.jsx)("span",{className:"ms-3 me-auto",children:t.name}),s]})})}function DarkModeNavItem_DarkModeNavItem(){let[e,t]=(0,d.useState)(u.AUTO);function handleClick(e,a){t(a),changeColorThemeTo(a),saveColorTheme(a)}return(0,d.useEffect)(()=>{let a=getSystemColorTheme(),r=function(){let e=LocalStorageUtils.getItem("color-theme-id");return e==u.AUTO.id?u.AUTO:e==u.DARK.id?u.DARK:e==u.LIGHT.id?u.LIGHT:null}();r?saveColorTheme===u.AUTO?(t(a),changeColorThemeTo(a)):(t(r),changeColorThemeTo(r)):changeColorThemeTo(a);let handleDarkModeChange=t=>{e==u.AUTO&&changeColorThemeTo(getSystemColorTheme())},n=window.matchMedia("(prefers-color-scheme: dark)");return n.addEventListener("change",handleDarkModeChange),()=>{n.removeEventListener("change",handleDarkModeChange)}},[e]),(0,r.jsxs)("li",{className:"nav-item dropdown dark-mode",children:[(0,r.jsx)("a",{className:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:(0,r.jsx)("i",{className:"bi ".concat(e.icon)})}),(0,r.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end p-1",children:[(0,r.jsx)(Item,{value:u.LIGHT,handleClick:handleClick,selected:e===u.LIGHT}),(0,r.jsx)(Item,{value:u.DARK,handleClick:handleClick,selected:e===u.DARK}),(0,r.jsx)(Item,{value:u.AUTO,handleClick:handleClick,selected:e===u.AUTO})]})]})}var h=a(4298),m=a.n(h);let injectGA=()=>{function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-S1P93RNMN0")};var layout_Footer=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m(),{src:"https://code.jquery.com/jquery-3.6.0.min.js",crossOrigin:"anonymous"}),(0,r.jsx)(m(),{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-S1P93RNMN0"}),(0,r.jsx)(m(),{children:injectGA()})]})},x=a(4373),j=a(9291);function TopBar_NavLink(e){let{href:t,exact:a,children:n}=e,{pathname:s}=(0,o.useRouter)(),l="";return a?s===t&&(l="active"):s.startsWith(t)&&(l="active"),(0,r.jsx)(c(),{href:t,className:"nav-link ".concat(l),children:n})}var layout_TopBar=function(){return(0,r.jsx)(x.Z,{expand:"md",bg:"dark",children:(0,r.jsxs)(l.Z,{fluid:!0,children:[(0,r.jsx)(x.Z.Brand,{href:"/",children:(0,r.jsx)("img",{src:"images/logo.png",width:"169",height:"32",className:"d-inline-block align-top"})}),(0,r.jsx)(x.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,r.jsxs)(x.Z.Collapse,{id:"basic-navbar-nav",children:[(0,r.jsxs)(j.Z,{className:"me-auto",children:[(0,r.jsxs)(TopBar_NavLink,{href:"/",exact:!0,children:[(0,r.jsx)("i",{className:"bi bi-house"}),"Home"]}),(0,r.jsxs)(TopBar_NavLink,{href:"/team",children:[(0,r.jsx)("i",{className:"bi bi-people"}),"Team"]}),(0,r.jsxs)(TopBar_NavLink,{href:"/projects",children:[(0,r.jsx)("i",{className:"bi bi-table"}),"Projects"]}),(0,r.jsxs)(TopBar_NavLink,{href:"/publications",children:[(0,r.jsx)("i",{className:"bi bi-file-earmark-text"}),"Publications"]}),(0,r.jsxs)(TopBar_NavLink,{href:"/contact",children:[(0,r.jsx)("i",{className:"bi bi-envelope"}),"Contact"]})]}),(0,r.jsx)(j.Z,{children:(0,r.jsx)(DarkModeNavItem_DarkModeNavItem,{})})]})]})})},layout_Layout=function(e){let{children:t,menu:a,className:n=""}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:"".concat("Home"==a?"":"".concat(a," - ")," S3 Research Lab")}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,r.jsx)("header",{children:(0,r.jsx)(layout_TopBar,{})}),(0,r.jsx)("main",{children:(0,r.jsxs)(l.Z,{className:n,children:[(0,r.jsx)("h3",{className:"text-dark",children:"Home"==a?"":a}),t]})}),(0,r.jsx)(layout_Footer,{})]})}},9616:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return i}});var r=a(5893),n=a(1555),s=a(4051),l=a(3570);function Member(e){let{id:t,name:a,position:n,img:s,url:l,when:i}=e;return(0,r.jsxs)("div",{className:"member",children:[(0,r.jsx)("a",{href:l,target:"_blank",children:(0,r.jsx)("img",{className:"rounded mb-2 img-fluid",src:"images/profile-photo/".concat(s),width:180})}),(0,r.jsx)("p",{className:"text-dark fw-bold mb-0",children:a}),(0,r.jsx)("p",{className:"small mb-0 text-start",children:n}),(0,r.jsx)("p",{className:"small mb-3 text-start text-secondary",children:i})]},t)}function Group(e){let{children:t}=e;t&&0!==t.length||(t=(0,r.jsx)("p",{children:"To be Announced"})),Array.isArray(t)||(t=[t]);let a=t.map((e,t)=>(0,r.jsx)(n.Z,{xs:6,sm:4,md:2,children:e},t));return(0,r.jsx)(s.Z,{children:a})}function filterOutFaculty(e,t){return e.filter(e=>e.status===t).map(e=>(0,r.jsx)(Member,{name:e.name,position:e.position,img:e.image,when:e.affiliation,url:e.url}))}function filterOutStudents(e,t,a){return e.filter(e=>e.status===t&&e.degree===a).map((e,t)=>(0,r.jsx)(Member,{id:t,name:e.name,position:e.position,img:e.image,when:e.when,url:e.url}))}var i=!0;t.default=function(e){let{students:t,faculty:a}=e;return(0,r.jsxs)(l.Z,{menu:"Team",children:[(0,r.jsx)("p",{children:"Meet our team! Click on profile picture to open their personal websites."}),(0,r.jsx)("h4",{className:"text-dark",children:"Principal Investigator"}),(0,r.jsx)("hr",{}),(0,r.jsx)(Group,{children:filterOutFaculty(a,"pi")}),(0,r.jsx)("h4",{className:"text-dark",children:"Affiliated Faculty Members"}),(0,r.jsx)("hr",{}),(0,r.jsx)(Group,{children:filterOutFaculty(a,"affiliated")}),(0,r.jsx)("h4",{className:"text-dark",children:"Current Ph.D. Students"}),(0,r.jsx)("hr",{}),(0,r.jsx)(Group,{children:filterOutStudents(t,"current","phd")}),(0,r.jsx)("h4",{className:"text-dark",children:"Current Master's Students"}),(0,r.jsx)("hr",{}),(0,r.jsx)(Group,{children:filterOutStudents(t,"current","master")}),(0,r.jsx)("h4",{className:"text-dark",children:"Current Undergraduate Students"}),(0,r.jsx)("hr",{}),(0,r.jsx)(Group,{children:filterOutStudents(t,"current","undergraduate")}),(0,r.jsx)("h4",{className:"text-dark",children:"Alumni"}),(0,r.jsx)("hr",{}),(0,r.jsx)("p",{className:"mb-3 mt-3 text-light",children:"Undergraduate Students"}),(0,r.jsx)(Group,{children:filterOutStudents(t,"former","undergraduate")})]})}},1555:function(e,t,a){"use strict";var r=a(4184),n=a.n(r),s=a(7294),l=a(6792),i=a(5893);let c=s.forwardRef((e,t)=>{let[{className:a,...r},{as:s="div",bsPrefix:c,spans:o}]=function({as:e,bsPrefix:t,className:a,...r}){t=(0,l.vE)(t,"col");let s=(0,l.pi)(),i=(0,l.zG)(),c=[],o=[];return s.forEach(e=>{let a,n,s;let l=r[e];delete r[e],"object"==typeof l&&null!=l?{span:a,offset:n,order:s}=l:a=l;let d=e!==i?`-${e}`:"";a&&c.push(!0===a?`${t}${d}`:`${t}${d}-${a}`),null!=s&&o.push(`order${d}-${s}`),null!=n&&o.push(`offset${d}-${n}`)}),[{...r,className:n()(a,...c,...o)},{as:e,bsPrefix:t,spans:c}]}(e);return(0,i.jsx)(s,{...r,ref:t,className:n()(a,!o.length&&c)})});c.displayName="Col",t.Z=c},4051:function(e,t,a){"use strict";var r=a(4184),n=a.n(r),s=a(7294),l=a(6792),i=a(5893);let c=s.forwardRef(({bsPrefix:e,className:t,as:a="div",...r},s)=>{let c=(0,l.vE)(e,"row"),o=(0,l.pi)(),d=(0,l.zG)(),u=`${c}-cols`,h=[];return o.forEach(e=>{let t;let a=r[e];delete r[e],null!=a&&"object"==typeof a?{cols:t}=a:t=a;let n=e!==d?`-${e}`:"";null!=t&&h.push(`${u}${n}-${t}`)}),(0,i.jsx)(a,{ref:s,...r,className:n()(t,c,...h)})});c.displayName="Row",t.Z=c}},function(e){e.O(0,[983,774,888,179],function(){return e(e.s=7015)}),_N_E=e.O()}]);