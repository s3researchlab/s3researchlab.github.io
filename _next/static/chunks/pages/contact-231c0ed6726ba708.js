(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{8105:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return t(3192)}])},9210:function(e,n,t){"use strict";t.d(n,{Z:function(){return layout_Layout}});var a=t(5893),s=t(9008),i=t.n(s),l=t(682),r=t(4298),c=t.n(r);let injectGA=()=>{function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-S1P93RNMN0")};var layout_Footer=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c(),{src:"https://code.jquery.com/jquery-3.6.0.min.js",crossOrigin:"anonymous"}),(0,a.jsx)(c(),{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-S1P93RNMN0"}),(0,a.jsx)(c(),{children:injectGA()})]})},o=t(1664),d=t.n(o),h=t(4373),m=t(9291),u=t(7294);let LocalStorageUtils=class LocalStorageUtils{static setItem(e,n){localStorage.setItem(e,JSON.stringify(n))}static getItem(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=localStorage.getItem(e);return t?JSON.parse(t):n}};let g=Object.freeze({LIGHT:{id:"light",name:"Light",icon:"bi-sun-fill"},DARK:{id:"dark",name:"Dark",icon:"bi-moon-stars-fill"},AUTO:{id:"auto",name:"Auto",icon:"bi-circle-half"}});function saveColorTheme(e){LocalStorageUtils.setItem("color-theme-id",e.id)}function getSystemColorTheme(){let e=window.matchMedia("(prefers-color-scheme: dark)");return e.matches?g.DARK:g.LIGHT}function changeColorThemeTo(e){e===g.AUTO&&(e=getSystemColorTheme()),window.document.documentElement.setAttribute("data-bs-theme",e.id)}function Item(e){let{value:n,handleClick:t,selected:s=!1}=e,i=s?(0,a.jsx)("i",{className:"bi bi-check2"}):(0,a.jsx)(a.Fragment,{});return(0,a.jsx)("li",{children:(0,a.jsxs)("a",{className:"dropdown-item d-flex align-items-center rounded ".concat(s?"active":""),href:"#",onClick:e=>t(e,n),"data-theme":n.id,children:[(0,a.jsx)("i",{className:"bi ".concat(n.icon)}),(0,a.jsx)("span",{className:"ms-3 me-auto",children:n.name}),i]})})}function NavLinkDarkMode(){let[e,n]=(0,u.useState)(g.AUTO);function handleClick(e,t){n(t),changeColorThemeTo(t),saveColorTheme(t)}return(0,u.useEffect)(()=>{let t=getSystemColorTheme(),a=function(){let e=LocalStorageUtils.getItem("color-theme-id");return e==g.AUTO.id?g.AUTO:e==g.DARK.id?g.DARK:e==g.LIGHT.id?g.LIGHT:null}();a?saveColorTheme===g.AUTO?(n(t),changeColorThemeTo(t)):(n(a),changeColorThemeTo(a)):changeColorThemeTo(t);let handleDarkModeChange=n=>{e==g.AUTO&&changeColorThemeTo(getSystemColorTheme())},s=window.matchMedia("(prefers-color-scheme: dark)");return s.addEventListener("change",handleDarkModeChange),()=>{s.removeEventListener("change",handleDarkModeChange)}},[e]),(0,a.jsxs)("li",{className:"nav-item dropdown dark-mode",children:[(0,a.jsxs)("a",{className:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:[(0,a.jsx)("i",{className:"bi ".concat(e.icon)}),(0,a.jsx)("span",{className:"ms-2 d-md-none",children:e.name})]}),(0,a.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end p-1",children:[(0,a.jsx)(Item,{value:g.LIGHT,handleClick:handleClick,selected:e===g.LIGHT}),(0,a.jsx)(Item,{value:g.DARK,handleClick:handleClick,selected:e===g.DARK}),(0,a.jsx)(Item,{value:g.AUTO,handleClick:handleClick,selected:e===g.AUTO})]})]})}var f=t(1163);function NavLink(e){let{href:n,exact:t,children:s}=e,{pathname:i}=(0,f.useRouter)(),l="";return t?i===n&&(l="active"):i.startsWith(n)&&(l="active"),(0,a.jsx)(d(),{href:n,className:"nav-link ".concat(l),children:s})}function TopBar(){return(0,a.jsx)(h.Z,{expand:"md",bg:"dark",fixed:"top","data-bs-theme":"dark",children:(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(h.Z.Brand,{href:"/",className:"d-flex align-items-center",children:(0,a.jsx)("img",{src:"images/logo.png",height:"22",className:"d-inline-block align-top"})}),(0,a.jsx)(h.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,a.jsxs)(h.Z.Collapse,{id:"basic-navbar-nav",children:[(0,a.jsx)(m.Z,{className:"me-auto"}),(0,a.jsxs)(m.Z,{children:[(0,a.jsx)(NavLink,{href:"/",exact:!0,children:"Home"}),(0,a.jsx)(NavLink,{href:"/team",children:"Team"}),(0,a.jsx)(NavLink,{href:"/projects",children:"Projects"}),(0,a.jsx)(NavLink,{href:"/publications",children:"Publications"}),(0,a.jsx)(NavLink,{href:"/contact",children:"Contact"}),(0,a.jsxs)("li",{className:"nav-item",children:[(0,a.jsx)("div",{className:"vr d-none d-md-flex h-100 mx-md-2 text-white"}),(0,a.jsx)("hr",{className:"d-md-none my-2 text-white-50"})]}),(0,a.jsx)(NavLinkDarkMode,{})]})]})]})})}var layout_Layout=function(e){let{children:n,menu:t,className:s=""}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i(),{children:[(0,a.jsx)("title",{children:"".concat("Home"==t?"":"".concat(t," - ")," S3 Research Lab")}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,a.jsx)("header",{children:(0,a.jsx)(TopBar,{})}),(0,a.jsx)("main",{children:(0,a.jsxs)(l.Z,{className:s,children:[(0,a.jsx)("h3",{className:"text-dark",children:"Home"==t?"":t}),n]})}),(0,a.jsx)(layout_Footer,{})]})}},3192:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ContactPage}});var a=t(5893),s=t(4051),i=t(1555),l=t(9210);function ContactPage(){return(0,a.jsx)(l.Z,{menu:"Contact",children:(0,a.jsxs)(s.Z,{children:[(0,a.jsxs)(i.Z,{sm:"12",md:"8",children:[(0,a.jsxs)("p",{children:["We're are currently housed in the ",(0,a.jsx)("a",{href:"https://www.umflint.edu/cit/",children:"College of Innovation & Technology"})," at ",(0,a.jsx)("a",{href:"https://www.umflint.edu/",children:" University of Michigan-Flint"})]}),(0,a.jsx)("hr",{}),(0,a.jsxs)("address",{children:["510 Murchie Science Building",(0,a.jsx)("br",{}),"303 E. Kearsley Street ",(0,a.jsx)("br",{}),"Flint, Michigan 48502-1950, USA",(0,a.jsx)("br",{})]}),(0,a.jsx)("img",{className:"img-fluid mb-3 cit-logo-dark d-none",src:"images/cit-logo-dark.png",width:"400px"}),(0,a.jsx)("img",{className:"img-fluid mb-3 cit-logo-light ",src:"images/cit-logo-light.png",width:"400px"})]}),(0,a.jsx)(i.Z,{sm:"12",md:"4",children:(0,a.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8511.913487020587!2d-83.69364197666431!3d43.02046106744844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88238217c25d9827%3A0xf5cdab96dcc98e0c!2sUniversity%20of%20Michigan-Flint!5e0!3m2!1sen!2sus!4v1662905510786!5m2!1sen!2sus",width:"100%",height:"250",style:{border:"0"},allowFullScreen:"allowfullscreen",referrerPolicy:"no-referrer-when-downgrade"})})]})})}},1555:function(e,n,t){"use strict";var a=t(4184),s=t.n(a),i=t(7294),l=t(6792),r=t(5893);let c=i.forwardRef((e,n)=>{let[{className:t,...a},{as:i="div",bsPrefix:c,spans:o}]=function({as:e,bsPrefix:n,className:t,...a}){n=(0,l.vE)(n,"col");let i=(0,l.pi)(),r=(0,l.zG)(),c=[],o=[];return i.forEach(e=>{let t,s,i;let l=a[e];delete a[e],"object"==typeof l&&null!=l?{span:t,offset:s,order:i}=l:t=l;let d=e!==r?`-${e}`:"";t&&c.push(!0===t?`${n}${d}`:`${n}${d}-${t}`),null!=i&&o.push(`order${d}-${i}`),null!=s&&o.push(`offset${d}-${s}`)}),[{...a,className:s()(t,...c,...o)},{as:e,bsPrefix:n,spans:c}]}(e);return(0,r.jsx)(i,{...a,ref:n,className:s()(t,!o.length&&c)})});c.displayName="Col",n.Z=c},4051:function(e,n,t){"use strict";var a=t(4184),s=t.n(a),i=t(7294),l=t(6792),r=t(5893);let c=i.forwardRef(({bsPrefix:e,className:n,as:t="div",...a},i)=>{let c=(0,l.vE)(e,"row"),o=(0,l.pi)(),d=(0,l.zG)(),h=`${c}-cols`,m=[];return o.forEach(e=>{let n;let t=a[e];delete a[e],null!=t&&"object"==typeof t?{cols:n}=t:n=t;let s=e!==d?`-${e}`:"";null!=n&&m.push(`${h}${s}-${n}`)}),(0,r.jsx)(t,{ref:i,...a,className:s()(n,c,...m)})});c.displayName="Row",n.Z=c}},function(e){e.O(0,[983,774,888,179],function(){return e(e.s=8105)}),_N_E=e.O()}]);