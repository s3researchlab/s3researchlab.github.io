(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[548],{9766:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/publications",function(){return a(7553)}])},3108:function(e,t,a){"use strict";var n=a(5893),s=a(2411);t.Z=function(e){let t=e.id||s.Z.generateId(e.title),a=e.collapsed?"collapsed":"",r=e.collapsed?"":"show";return(0,n.jsxs)("div",{className:"collapse-group",children:[(0,n.jsxs)("p",{"data-bs-toggle":"collapse",className:"mb-0 ".concat(a),"data-bs-target":"#".concat(t),children:[(0,n.jsx)("i",{className:"bi bi-chevron-right"}),(0,n.jsx)("span",{className:"text-dark",children:e.title})]}),(0,n.jsx)("div",{className:"content collapse mt-3 ".concat(r),id:t,children:e.children})]},t)}},9210:function(e,t,a){"use strict";a.d(t,{Z:function(){return layout_Layout}});var n=a(5893),s=a(9008),r=a.n(s),l=a(682),o=a(4298),i=a.n(o);let injectGA=()=>{function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-S1P93RNMN0")};var layout_Footer=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i(),{src:"https://code.jquery.com/jquery-3.6.0.min.js",crossOrigin:"anonymous"}),(0,n.jsx)(i(),{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-S1P93RNMN0"}),(0,n.jsx)(i(),{children:injectGA()})]})},c=a(1664),d=a.n(c),h=a(4373),m=a(9291),u=a(7294);let LocalStorageUtils=class LocalStorageUtils{static setItem(e,t){localStorage.setItem(e,JSON.stringify(t))}static getItem(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=localStorage.getItem(e);return a?JSON.parse(a):t}};let f=Object.freeze({LIGHT:{id:"light",name:"Light",icon:"bi-sun-fill"},DARK:{id:"dark",name:"Dark",icon:"bi-moon-stars-fill"},AUTO:{id:"auto",name:"Auto",icon:"bi-circle-half"}});function saveColorTheme(e){LocalStorageUtils.setItem("color-theme-id",e.id)}function getSystemColorTheme(){let e=window.matchMedia("(prefers-color-scheme: dark)");return e.matches?f.DARK:f.LIGHT}function changeColorThemeTo(e){e===f.AUTO&&(e=getSystemColorTheme()),window.document.documentElement.setAttribute("data-bs-theme",e.id)}function Item(e){let{value:t,handleClick:a,selected:s=!1}=e,r=s?(0,n.jsx)("i",{className:"bi bi-check2"}):(0,n.jsx)(n.Fragment,{});return(0,n.jsx)("li",{children:(0,n.jsxs)("a",{className:"dropdown-item d-flex align-items-center rounded ".concat(s?"active":""),href:"#",onClick:e=>a(e,t),"data-theme":t.id,children:[(0,n.jsx)("i",{className:"bi ".concat(t.icon)}),(0,n.jsx)("span",{className:"ms-3 me-auto",children:t.name}),r]})})}function NavLinkDarkMode(){let[e,t]=(0,u.useState)(f.AUTO);function handleClick(e,a){t(a),changeColorThemeTo(a),saveColorTheme(a)}return(0,u.useEffect)(()=>{let a=getSystemColorTheme(),n=function(){let e=LocalStorageUtils.getItem("color-theme-id");return e==f.AUTO.id?f.AUTO:e==f.DARK.id?f.DARK:e==f.LIGHT.id?f.LIGHT:null}();n?saveColorTheme===f.AUTO?(t(a),changeColorThemeTo(a)):(t(n),changeColorThemeTo(n)):changeColorThemeTo(a);let handleDarkModeChange=t=>{e==f.AUTO&&changeColorThemeTo(getSystemColorTheme())},s=window.matchMedia("(prefers-color-scheme: dark)");return s.addEventListener("change",handleDarkModeChange),()=>{s.removeEventListener("change",handleDarkModeChange)}},[e]),(0,n.jsxs)("li",{className:"nav-item dropdown dark-mode",children:[(0,n.jsxs)("a",{className:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:[(0,n.jsx)("i",{className:"bi ".concat(e.icon)}),(0,n.jsx)("span",{className:"ms-2 d-md-none",children:"Color Scheme"})]}),(0,n.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end p-1",children:[(0,n.jsx)(Item,{value:f.LIGHT,handleClick:handleClick,selected:e===f.LIGHT}),(0,n.jsx)(Item,{value:f.DARK,handleClick:handleClick,selected:e===f.DARK}),(0,n.jsx)(Item,{value:f.AUTO,handleClick:handleClick,selected:e===f.AUTO})]})]})}var g=a(1163);function NavLink(e){let{href:t,exact:a,children:s}=e,{pathname:r}=(0,g.useRouter)(),l="";return a?r===t&&(l="active"):r.startsWith(t)&&(l="active"),(0,n.jsx)(d(),{href:t,className:"nav-link ".concat(l),children:s})}function TopBar(){return(0,n.jsx)(h.Z,{expand:"md",bg:"dark",fixed:"top","data-bs-theme":"dark",children:(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(h.Z.Brand,{href:"/",children:(0,n.jsx)("img",{src:"images/logo.png",width:"169",height:"32",className:"d-inline-block align-top"})}),(0,n.jsx)(h.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,n.jsxs)(h.Z.Collapse,{id:"basic-navbar-nav",children:[(0,n.jsx)(m.Z,{className:"me-auto"}),(0,n.jsxs)(m.Z,{children:[(0,n.jsx)(NavLink,{href:"/",exact:!0,children:"Home"}),(0,n.jsx)(NavLink,{href:"/team",children:"Team"}),(0,n.jsx)(NavLink,{href:"/projects",children:"Projects"}),(0,n.jsx)(NavLink,{href:"/publications",children:"Publications"}),(0,n.jsx)(NavLink,{href:"/contact",children:"Contact"}),(0,n.jsxs)("li",{className:"nav-item",children:[(0,n.jsx)("div",{className:"vr d-none d-md-flex h-100 mx-md-2 text-white"}),(0,n.jsx)("hr",{className:"d-md-none my-2 text-white-50"})]}),(0,n.jsx)(NavLinkDarkMode,{})]})]})]})})}var layout_Layout=function(e){let{children:t,menu:a,className:s=""}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r(),{children:[(0,n.jsx)("title",{children:"".concat("Home"==a?"":"".concat(a," - ")," S3 Research Lab")}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,n.jsx)("header",{children:(0,n.jsx)(TopBar,{})}),(0,n.jsx)("main",{children:(0,n.jsxs)(l.Z,{className:s,children:[(0,n.jsx)("h3",{className:"text-dark",children:"Home"==a?"":a}),t]})}),(0,n.jsx)(layout_Footer,{})]})}},7553:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return d}});var n=a(5893),s=a(7294),r=a(1163),l=a(9210),o=a(3108),i=a(1555);let c={journal:{order:1,title:"Refereed Journal Papers"},conference:{order:2,title:"Refereed Conference Papers"},book:{order:3,title:"Book Chapters"},"short-paper":{order:4,title:"Refereed Short Papers, Videos, Demos, and Posters"},"no-proceedings":{order:5,title:"Workshop and Conferences without Proceedings"},unrefereed:{order:6,title:"Unrefereed Publications"},"invited-talks":{order:7,title:"Major Invited Talks"},thesis:{order:8,title:"Thesis"},"under-review":{order:9,title:"Under Review"}};for(let e=2e3;e<2040;e++)c[e]={order:2040-e,title:e+""};var d=!0;t.default=function(e){var t;let a,{entries:d}=e,h=(0,r.useRouter)(),[m,u]=(0,s.useState)("year"),[f,g]=(0,s.useState)(""),x=Array.from((t=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.filter(e=>!t||e.HTML.toLowerCase().includes(t.toLowerCase()))}(d.formatted,f),a=new Map,t.forEach(e=>{let t=e[m.toUpperCase()];a.has(t)||a.set(t,[]),a.get(t).push(e)}),a).keys()).sort((e,t)=>c[e].order-c[t].order).map(e=>{var t,s;let r;return t=e,s=a.get(e),t=c[t].title,r=s.map(e=>(0,n.jsx)("li",{className:"ms-1",children:(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:e.HTML}})},e.key)),(0,n.jsx)(o.Z,{title:t,children:(0,n.jsx)("ul",{children:r})},t)});return(0,n.jsxs)(l.Z,{menu:"Publications",className:"publications",children:[(0,n.jsx)("p",{children:"This is not the full list. We will update it as soon as possible."}),(0,n.jsxs)("form",{className:"row g-1 mb-3",children:[(0,n.jsx)(i.Z,{xs:"12",sm:"3",md:"2",lg:"2",xl:"1",children:(0,n.jsxs)("select",{className:"form-select",value:m,onChange:function(e){u(e.target.value)},children:[(0,n.jsx)("option",{value:"year",children:"Year"}),(0,n.jsx)("option",{value:"annote",children:"Type"})]})}),(0,n.jsx)(i.Z,{xs:"12",sm:"9",md:"10",lg:"10",xl:"11",children:(0,n.jsx)("input",{type:"search",className:"form-control",placeholder:"Search papers",autoComplete:"off",value:f,onChange:function(e){let t=e.target.value;h.replace({query:{...h.query,q:t}}),g(t)}})})]}),x]})}},2411:function(e,t){"use strict";t.Z=class{static generateId(e){return"p-"+e.toLowerCase().replace(/[^a-zA-Z0-9]+/g,"-")}}},1555:function(e,t,a){"use strict";var n=a(4184),s=a.n(n),r=a(7294),l=a(6792),o=a(5893);let i=r.forwardRef((e,t)=>{let[{className:a,...n},{as:r="div",bsPrefix:i,spans:c}]=function({as:e,bsPrefix:t,className:a,...n}){t=(0,l.vE)(t,"col");let r=(0,l.pi)(),o=(0,l.zG)(),i=[],c=[];return r.forEach(e=>{let a,s,r;let l=n[e];delete n[e],"object"==typeof l&&null!=l?{span:a,offset:s,order:r}=l:a=l;let d=e!==o?`-${e}`:"";a&&i.push(!0===a?`${t}${d}`:`${t}${d}-${a}`),null!=r&&c.push(`order${d}-${r}`),null!=s&&c.push(`offset${d}-${s}`)}),[{...n,className:s()(a,...i,...c)},{as:e,bsPrefix:t,spans:i}]}(e);return(0,o.jsx)(r,{...n,ref:t,className:s()(a,!c.length&&i)})});i.displayName="Col",t.Z=i}},function(e){e.O(0,[983,774,888,179],function(){return e(e.s=9766)}),_N_E=e.O()}]);