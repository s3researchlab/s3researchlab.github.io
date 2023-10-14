(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(507)}])},3433:function(e,a,n){"use strict";n.d(a,{Z:function(){return layout_Layout}});var t=n(5893),i=n(9008),s=n.n(i),r=n(682),c=n(4298),l=n.n(c);let injectGA=()=>{function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-S1P93RNMN0")};var layout_Footer=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l(),{src:"https://code.jquery.com/jquery-3.6.0.min.js",crossOrigin:"anonymous"}),(0,t.jsx)(l(),{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-S1P93RNMN0"}),(0,t.jsx)(l(),{children:injectGA()})]})},o=n(1664),d=n.n(o),h=n(4373),m=n(9291),u=n(7294);let LocalStorageUtils=class LocalStorageUtils{static setItem(e,a){localStorage.setItem(e,JSON.stringify(a))}static getItem(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=localStorage.getItem(e);return n?JSON.parse(n):a}};let g=Object.freeze({LIGHT:{id:"light",name:"Light",icon:"bi-sun-fill"},DARK:{id:"dark",name:"Dark",icon:"bi-moon-stars-fill"},AUTO:{id:"auto",name:"Auto",icon:"bi-circle-half"}});function saveColorTheme(e){LocalStorageUtils.setItem("color-theme-id",e.id)}function getSystemColorTheme(){let e=window.matchMedia("(prefers-color-scheme: dark)");return e.matches?g.DARK:g.LIGHT}function changeColorThemeTo(e){e===g.AUTO&&(e=getSystemColorTheme()),window.document.documentElement.setAttribute("data-bs-theme",e.id)}function Item(e){let{value:a,handleClick:n,selected:i=!1}=e,s=i?(0,t.jsx)("i",{className:"bi bi-check2"}):(0,t.jsx)(t.Fragment,{});return(0,t.jsx)("li",{children:(0,t.jsxs)("a",{className:"dropdown-item d-flex align-items-center rounded ".concat(i?"active":""),href:"#",onClick:e=>n(e,a),"data-theme":a.id,children:[(0,t.jsx)("i",{className:"bi ".concat(a.icon)}),(0,t.jsx)("span",{className:"ms-3 me-auto",children:a.name}),s]})})}function DarkModeNavItem(){let[e,a]=(0,u.useState)(g.AUTO);function handleClick(e,n){a(n),changeColorThemeTo(n),saveColorTheme(n)}return(0,u.useEffect)(()=>{let n=getSystemColorTheme(),t=function(){let e=LocalStorageUtils.getItem("color-theme-id");return e==g.AUTO.id?g.AUTO:e==g.DARK.id?g.DARK:e==g.LIGHT.id?g.LIGHT:null}();t?saveColorTheme===g.AUTO?(a(n),changeColorThemeTo(n)):(a(t),changeColorThemeTo(t)):changeColorThemeTo(n);let handleDarkModeChange=a=>{e==g.AUTO&&changeColorThemeTo(getSystemColorTheme())},i=window.matchMedia("(prefers-color-scheme: dark)");return i.addEventListener("change",handleDarkModeChange),()=>{i.removeEventListener("change",handleDarkModeChange)}},[e]),(0,t.jsxs)("li",{className:"nav-item dropdown dark-mode",children:[(0,t.jsx)("a",{className:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:(0,t.jsx)("i",{className:"bi ".concat(e.icon)})}),(0,t.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end p-1",children:[(0,t.jsx)(Item,{value:g.LIGHT,handleClick:handleClick,selected:e===g.LIGHT}),(0,t.jsx)(Item,{value:g.DARK,handleClick:handleClick,selected:e===g.DARK}),(0,t.jsx)(Item,{value:g.AUTO,handleClick:handleClick,selected:e===g.AUTO})]})]})}var j=n(1163);function NavLink(e){let{href:a,exact:n,children:i}=e,{pathname:s}=(0,j.useRouter)(),r="";return n?s===a&&(r="active"):s.startsWith(a)&&(r="active"),(0,t.jsx)(d(),{href:a,className:"nav-link ".concat(r),children:i})}var layout_TopBar=function(){return(0,t.jsx)(h.Z,{expand:"md",bg:"dark",fixed:"top",children:(0,t.jsxs)(r.Z,{fluid:!0,children:[(0,t.jsx)(h.Z.Brand,{href:"/",children:(0,t.jsx)("img",{src:"images/logo.png",width:"169",height:"32",className:"d-inline-block align-top"})}),(0,t.jsx)(h.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,t.jsxs)(h.Z.Collapse,{id:"basic-navbar-nav",children:[(0,t.jsxs)(m.Z,{className:"me-auto",children:[(0,t.jsxs)(NavLink,{href:"/",exact:!0,children:[(0,t.jsx)("i",{className:"bi bi-house"}),"Home"]}),(0,t.jsxs)(NavLink,{href:"/team",children:[(0,t.jsx)("i",{className:"bi bi-people"}),"Team"]}),(0,t.jsxs)(NavLink,{href:"/projects",children:[(0,t.jsx)("i",{className:"bi bi-table"}),"Projects"]}),(0,t.jsxs)(NavLink,{href:"/publications",children:[(0,t.jsx)("i",{className:"bi bi-file-earmark-text"}),"Publications"]}),(0,t.jsxs)(NavLink,{href:"/contact",children:[(0,t.jsx)("i",{className:"bi bi-envelope"}),"Contact"]})]}),(0,t.jsx)(m.Z,{children:(0,t.jsx)(DarkModeNavItem,{})})]})]})})},layout_Layout=function(e){let{children:a,menu:n,className:i=""}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s(),{children:[(0,t.jsx)("title",{children:"".concat("Home"==n?"":"".concat(n," - ")," S3 Research Lab")}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,t.jsx)("header",{children:(0,t.jsx)(layout_TopBar,{})}),(0,t.jsx)("main",{children:(0,t.jsxs)(r.Z,{className:i,children:[(0,t.jsx)("h3",{className:"text-dark",children:"Home"==n?"":n}),a]})}),(0,t.jsx)(layout_Footer,{})]})}},507:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return IndexPage}});var t=n(5893),i=n(3433),s=n(7294),r=n(1664),c=n.n(r);let l=["Machine Learning","Evolutionary Algorithms","Natural Language Processing","Bio-inspired Algorithms","Artificial Intelligence","Deep Learning"];function SocialIcon(e){let{href:a,icon:n,children:i}=e;return(0,t.jsxs)(c(),{href:a,target:"_blank",className:"btn",children:[(0,t.jsx)("i",{className:"".concat(n," me-2 ")})," ",i]})}function IndexPage(){let[e,a]=(0,s.useState)(0);return(0,s.useEffect)(()=>{let e=setInterval(()=>{a(e=>e+1)},2500);return()=>clearInterval(e)},[]),e==l.length&&a(0),(0,t.jsx)(i.Z,{menu:"Home",children:(0,t.jsxs)("div",{className:"text-center banner",children:[(0,t.jsxs)("div",{className:"mb-5",children:[(0,t.jsx)("h1",{className:"fw-bold text-dark",children:l[e]}),(0,t.jsx)("h2",{children:"applied to software systems development"})]}),(0,t.jsx)("p",{className:"mb-5 text-center",children:"We are a research lab specializing in Computational Search for advancing Software Engineering methodologies and technologies"}),(0,t.jsx)("div",{className:"mb-5",children:(0,t.jsx)(c(),{href:"./projects",className:"btn btn-primary",children:"Explore Projects"})}),(0,t.jsx)("div",{children:(0,t.jsx)(SocialIcon,{icon:"bi bi-github",href:"https://github.com/s3researchlab",children:"GitHub"})})]})})}}},function(e){e.O(0,[983,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);