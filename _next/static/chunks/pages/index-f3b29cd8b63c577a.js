(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(507)}])},3570:function(e,t,a){"use strict";a.d(t,{Z:function(){return layout_Layout}});var n=a(5893),s=a(9008),i=a.n(s),l=a(682),r=a(1664),c=a.n(r),o=a(1163),d=a(4373),h=a(9291),m=a(7294);let LocalStorageUtils=class LocalStorageUtils{static setItem(e,t){localStorage.setItem(e,JSON.stringify(t))}static getItem(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=localStorage.getItem(e);return a?JSON.parse(a):t}};let u=Object.freeze({LIGHT:{id:"light",name:"Light",icon:"bi-sun-fill"},DARK:{id:"dark",name:"Dark",icon:"bi-moon-stars-fill"},AUTO:{id:"auto",name:"Auto",icon:"bi-circle-half"}});function saveColorTheme(e){LocalStorageUtils.setItem("color-theme-id",e.id)}function getSystemColorTheme(){let e=window.matchMedia("(prefers-color-scheme: dark)");return e.matches?u.DARK:u.LIGHT}function changeColorThemeTo(e){e===u.AUTO&&(e=getSystemColorTheme()),window.document.documentElement.setAttribute("data-bs-theme",e.id)}function Item(e){let{value:t,handleClick:a,selected:s=!1}=e,i=s?(0,n.jsx)("i",{className:"bi bi-check2"}):(0,n.jsx)(n.Fragment,{});return(0,n.jsx)("li",{children:(0,n.jsxs)("a",{className:"dropdown-item d-flex align-items-center rounded ".concat(s?"active":""),href:"#",onClick:e=>a(e,t),"data-theme":t.id,children:[(0,n.jsx)("i",{className:"bi ".concat(t.icon)}),(0,n.jsx)("span",{className:"ms-3 me-auto",children:t.name}),i]})})}function DarkModeNavItem(){let[e,t]=(0,m.useState)(u.AUTO);function handleClick(e,a){t(a),changeColorThemeTo(a),saveColorTheme(a)}return(0,m.useEffect)(()=>{let a=getSystemColorTheme(),n=function(){let e=LocalStorageUtils.getItem("color-theme-id");return e==u.AUTO.id?u.AUTO:e==u.DARK.id?u.DARK:e==u.LIGHT.id?u.LIGHT:null}();n?saveColorTheme===u.AUTO?(t(a),changeColorThemeTo(a)):(t(n),changeColorThemeTo(n)):changeColorThemeTo(a);let handleDarkModeChange=t=>{e==u.AUTO&&changeColorThemeTo(getSystemColorTheme())},s=window.matchMedia("(prefers-color-scheme: dark)");return s.addEventListener("change",handleDarkModeChange),()=>{s.removeEventListener("change",handleDarkModeChange)}},[e]),(0,n.jsxs)("li",{className:"nav-item dropdown dark-mode",children:[(0,n.jsx)("a",{className:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:(0,n.jsx)("i",{className:"bi ".concat(e.icon)})}),(0,n.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end p-1",children:[(0,n.jsx)(Item,{value:u.LIGHT,handleClick:handleClick,selected:e===u.LIGHT}),(0,n.jsx)(Item,{value:u.DARK,handleClick:handleClick,selected:e===u.DARK}),(0,n.jsx)(Item,{value:u.AUTO,handleClick:handleClick,selected:e===u.AUTO})]})]})}function NavLink(e){let{href:t,exact:a,children:s}=e,{pathname:i}=(0,o.useRouter)(),l="";return a?i===t&&(l="active"):i.startsWith(t)&&(l="active"),(0,n.jsx)(c(),{href:t,className:"nav-link ".concat(l),children:s})}var layout_NavBar=function(){return(0,n.jsx)(d.Z,{expand:"sm",bg:"light",children:(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(d.Z.Collapse,{children:(0,n.jsxs)(h.Z,{children:[(0,n.jsxs)(NavLink,{href:"/",exact:!0,children:[(0,n.jsx)("i",{className:"bi bi-house"}),"Home"]}),(0,n.jsxs)(NavLink,{href:"/team",children:[(0,n.jsx)("i",{className:"bi bi-people"}),"Team"]}),(0,n.jsxs)(NavLink,{href:"/projects",children:[(0,n.jsx)("i",{className:"bi bi-table"}),"Projects"]}),(0,n.jsxs)(NavLink,{href:"/publications",children:[(0,n.jsx)("i",{className:"bi bi-file-earmark-text"}),"Publications"]}),(0,n.jsxs)(NavLink,{href:"/contact",children:[(0,n.jsx)("i",{className:"bi bi-envelope"}),"Contact"]})]})}),(0,n.jsx)(d.Z.Toggle,{className:"text-light"}),(0,n.jsx)(h.Z,{className:"ms-auto",children:(0,n.jsx)(DarkModeNavItem,{})})]})})},g=a(4298),j=a.n(g);let injectGA=()=>{function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-S1P93RNMN0")};var layout_Footer=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(j(),{src:"https://code.jquery.com/jquery-3.6.0.min.js",crossOrigin:"anonymous"}),(0,n.jsx)(j(),{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-S1P93RNMN0"}),(0,n.jsx)(j(),{children:injectGA()})]})},x=a(5005),layout_TopBar=function(){return(0,n.jsx)("nav",{className:"topbar d-flex align-items-center",children:(0,n.jsxs)(l.Z,{className:"d-flex justify-content-between align-items-center",children:[(0,n.jsx)(c(),{href:"/",children:(0,n.jsx)("img",{className:"img-fluid",src:"images/logo-long-name.png"})}),(0,n.jsx)(x.Z,{variant:"primary",href:"/projects",className:"d-none d-md-block",children:"Join Us"})]})})},layout_Layout=function(e){let{children:t,menu:a,className:s=""}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i(),{children:[(0,n.jsx)("title",{children:"".concat("Home"==a?"":"".concat(a," - ")," S3 Research Lab")}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,n.jsxs)("header",{children:[(0,n.jsx)(layout_TopBar,{}),(0,n.jsx)(layout_NavBar,{})]}),(0,n.jsx)("main",{children:(0,n.jsxs)(l.Z,{className:s,children:[(0,n.jsx)("h3",{className:"text-dark",children:"Home"==a?"":a}),t]})}),(0,n.jsx)(layout_Footer,{})]})}},507:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return IndexPage}});var n=a(5893),s=a(3570),i=a(7294),l=a(1664),r=a.n(l);let c=["Machine Learning","Evolutionary Algorithms","Natural Language Processing","Bio-inspired Algorithms","Artificial Intelligence","Deep Learning"];function SocialIcon(e){let{href:t,icon:a,children:s}=e;return(0,n.jsxs)(r(),{href:t,target:"_blank",className:"btn",children:[(0,n.jsx)("i",{className:"".concat(a," me-2 ")})," ",s]})}function IndexPage(){let[e,t]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=setInterval(()=>{t(e=>e+1)},2500);return()=>clearInterval(e)},[]),e==c.length&&t(0),(0,n.jsx)(s.Z,{menu:"Home",children:(0,n.jsxs)("div",{className:"text-center banner",children:[(0,n.jsxs)("div",{className:"mb-5",children:[(0,n.jsx)("h1",{className:"fw-bold text-dark",children:c[e]}),(0,n.jsx)("h2",{children:"applied to software systems development"})]}),(0,n.jsx)("p",{className:"mb-5 text-center",children:"Smart technologies in all aspects of the design, implementation, evaluation, and verification of software systems"}),(0,n.jsx)("div",{className:"mb-5",children:(0,n.jsx)(r(),{href:"./projects",className:"btn btn-primary",children:"Explore Projects"})}),(0,n.jsx)("div",{children:(0,n.jsx)(SocialIcon,{icon:"bi bi-github",href:"https://github.com/s3researchlab",children:"GitHub"})})]})})}}},function(e){e.O(0,[931,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);