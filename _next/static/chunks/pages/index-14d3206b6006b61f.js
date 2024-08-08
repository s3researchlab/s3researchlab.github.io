(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5253)}])},4226:function(e,n,t){"use strict";t.d(n,{Z:function(){return I}});var s=t(5893),a=t(9008),c=t.n(a),r=t(3353),i=t(4298),l=t.n(i);let d=()=>{function e(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","G-S1P93RNMN0")};var o=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l(),{src:"https://code.jquery.com/jquery-3.6.0.min.js",crossOrigin:"anonymous"}),(0,s.jsx)(l(),{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-S1P93RNMN0"}),(0,s.jsx)(l(),{children:d()})]})},h=t(1664),m=t.n(h),u=t(4847),x=t(6383),j=t(7294);class f{static setItem(e,n){localStorage.setItem(e,JSON.stringify(n))}static getItem(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=localStorage.getItem(e);return t?JSON.parse(t):n}}let g=Object.freeze({LIGHT:{id:"light",name:"Light",icon:"bi-sun-fill"},DARK:{id:"dark",name:"Dark",icon:"bi-moon-stars-fill"},AUTO:{id:"auto",name:"Auto",icon:"bi-circle-half"}});function N(e){f.setItem("color-theme-id",e.id)}function p(){return window.matchMedia("(prefers-color-scheme: dark)").matches?g.DARK:g.LIGHT}function b(e){e===g.AUTO&&(e=p()),window.document.documentElement.setAttribute("data-bs-theme",e.id)}function v(e){let{value:n,handleClick:t,selected:a=!1}=e,c=a?(0,s.jsx)("i",{className:"bi bi-check2"}):(0,s.jsx)(s.Fragment,{});return(0,s.jsx)("li",{children:(0,s.jsxs)("a",{className:"dropdown-item d-flex align-items-center rounded ".concat(a?"active":""),href:"#",onClick:e=>t(e,n),"data-theme":n.id,children:[(0,s.jsx)("i",{className:"bi ".concat(n.icon)}),(0,s.jsx)("span",{className:"ms-3 me-auto",children:n.name}),c]})})}function w(){let[e,n]=(0,j.useState)(g.AUTO);function t(e,t){n(t),b(t),N(t)}return(0,j.useEffect)(()=>{let t=p(),s=function(){let e=f.getItem("color-theme-id");return e==g.AUTO.id?g.AUTO:e==g.DARK.id?g.DARK:e==g.LIGHT.id?g.LIGHT:null}();s?N===g.AUTO?(n(t),b(t)):(n(s),b(s)):b(t);let a=n=>{e==g.AUTO&&b(p())},c=window.matchMedia("(prefers-color-scheme: dark)");return c.addEventListener("change",a),()=>{c.removeEventListener("change",a)}},[e]),(0,s.jsxs)("li",{className:"nav-item dropdown dark-mode",children:[(0,s.jsxs)("a",{className:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:[(0,s.jsx)("i",{className:"bi ".concat(e.icon)}),(0,s.jsx)("span",{className:"ms-2 d-md-none",children:e.name})]}),(0,s.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end p-1",children:[(0,s.jsx)(v,{value:g.LIGHT,handleClick:t,selected:e===g.LIGHT}),(0,s.jsx)(v,{value:g.DARK,handleClick:t,selected:e===g.DARK}),(0,s.jsx)(v,{value:g.AUTO,handleClick:t,selected:e===g.AUTO})]})]})}var k=t(1163);function T(e){let{href:n,exact:t,children:a}=e,{pathname:c}=(0,k.useRouter)(),r="";return t?c===n&&(r="active"):c.startsWith(n)&&(r="active"),(0,s.jsx)(m(),{href:n,className:"nav-link ".concat(r),children:a})}function A(){return(0,s.jsx)(u.Z,{expand:"md",bg:"dark",fixed:"top","data-bs-theme":"dark",children:(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(u.Z.Brand,{href:"/",className:"d-flex align-items-center",children:(0,s.jsx)("img",{src:"/images/logo.png",height:"22",className:"d-inline-block align-top"})}),(0,s.jsx)(u.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,s.jsxs)(u.Z.Collapse,{id:"basic-navbar-nav",children:[(0,s.jsx)(x.Z,{className:"me-auto"}),(0,s.jsxs)(x.Z,{children:[(0,s.jsx)(T,{href:"/",exact:!0,children:"Home"}),(0,s.jsx)(T,{href:"/team",children:"Team"}),(0,s.jsx)(T,{href:"/projects",children:"Projects"}),(0,s.jsx)(T,{href:"/publications",children:"Publications"}),(0,s.jsx)(T,{href:"/contact",children:"Contact"}),(0,s.jsxs)("li",{className:"nav-item",children:[(0,s.jsx)("div",{className:"vr d-none d-md-flex h-100 mx-md-2 text-white"}),(0,s.jsx)("hr",{className:"d-md-none my-2 text-white-50"})]}),(0,s.jsx)(w,{})]})]})]})})}var I=function(e){let{children:n,menu:t,className:a=""}=e,i="Home"==t?"":"".concat(t," - ");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(c(),{children:[(0,s.jsx)("title",{children:"".concat(i," S3 Research Lab")}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,s.jsx)("header",{children:(0,s.jsx)(A,{})}),(0,s.jsx)("main",{children:(0,s.jsxs)(r.Z,{className:a,children:[(0,s.jsx)("h3",{className:"text-dark",children:"Home"==t?"":t}),n]})}),(0,s.jsx)(o,{})]})}},5253:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return h},default:function(){return m}});var s=t(5893),a=t(4226),c=t(7294),r=t(1664),i=t.n(r),l=JSON.parse('{"WL":"We are a research lab focused on Computational Search for advancing Software Engineering methodologies and technologies"}');class d{static nextInt(e,n){return Math.floor(Math.random()*(n-e+1))+e}static nextEl(e){let n=d.nextInt(0,e.length-1);return e[n]}}function o(e){let{href:n,icon:t,children:a}=e;return(0,s.jsxs)(i(),{href:n,target:"_blank",className:"btn",children:[(0,s.jsx)("i",{className:"".concat(t," me-2 ")})," ",a]})}var h=!0;function m(e){let{areas:n,technologies:t}=e,[r,h]=(0,c.useState)(n[0]),[m,u]=(0,c.useState)(t[0]);return(0,c.useEffect)(()=>{let e=setInterval(()=>{h(d.nextEl(n)),u(d.nextEl(t))},1500);return()=>clearInterval(e)},[]),(0,s.jsx)(a.Z,{menu:"Home",children:(0,s.jsxs)("div",{className:"text-center banner",children:[(0,s.jsxs)("div",{className:"pt-5",children:[(0,s.jsx)("h2",{className:"fw-bold text-dark",children:m}),(0,s.jsx)("h3",{className:"my-2",children:"applied to"}),(0,s.jsx)("h2",{className:"fw-bold text-dark",children:r})]}),(0,s.jsx)("p",{className:"pt-3 text-center",children:l.WL}),(0,s.jsx)("div",{className:"pt-3",children:(0,s.jsx)(i(),{href:"./projects",className:"btn btn-primary",children:"Explore Projects"})}),(0,s.jsx)("div",{className:"pt-3",children:(0,s.jsx)(o,{icon:"bi bi-github",href:"https://github.com/s3researchlab",children:"GitHub"})})]})})}}},function(e){e.O(0,[531,888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);