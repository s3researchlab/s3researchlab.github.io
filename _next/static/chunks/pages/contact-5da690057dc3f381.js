(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{8105:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return t(1669)}])},8083:function(e,n,t){"use strict";var s=t(4184),c=t.n(s),a=t(7294),i=t(4728),r=t(5893);let l=a.forwardRef((e,n)=>{let[{className:t,...s},{as:a="div",bsPrefix:l,spans:o}]=function(e){let{as:n,bsPrefix:t,className:s,...a}=e;t=(0,i.vE)(t,"col");let r=(0,i.pi)(),l=(0,i.zG)(),o=[],d=[];return r.forEach(e=>{let n,s,c;let i=a[e];delete a[e],"object"==typeof i&&null!=i?{span:n,offset:s,order:c}=i:n=i;let r=e!==l?"-".concat(e):"";n&&o.push(!0===n?"".concat(t).concat(r):"".concat(t).concat(r,"-").concat(n)),null!=c&&d.push("order".concat(r,"-").concat(c)),null!=s&&d.push("offset".concat(r,"-").concat(s))}),[{...a,className:c()(s,...o,...d)},{as:n,bsPrefix:t,spans:o}]}(e);return(0,r.jsx)(a,{...s,ref:n,className:c()(t,!o.length&&l)})});l.displayName="Col",n.Z=l},8888:function(e,n,t){"use strict";var s=t(4184),c=t.n(s),a=t(7294),i=t(4728),r=t(5893);let l=a.forwardRef((e,n)=>{let{bsPrefix:t,className:s,as:a="div",...l}=e,o=(0,i.vE)(t,"row"),d=(0,i.pi)(),m=(0,i.zG)(),h="".concat(o,"-cols"),u=[];return d.forEach(e=>{let n;let t=l[e];delete l[e],null!=t&&"object"==typeof t?{cols:n}=t:n=t,null!=n&&u.push("".concat(h).concat(e!==m?"-".concat(e):"","-").concat(n))}),(0,r.jsx)(a,{ref:n,...l,className:c()(s,o,...u)})});l.displayName="Row",n.Z=l},4226:function(e,n,t){"use strict";t.d(n,{Z:function(){return A}});var s=t(5893),c=t(9008),a=t.n(c),i=t(3353),r=t(4298),l=t.n(r);let o=()=>{function e(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","G-S1P93RNMN0")};var d=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l(),{src:"https://code.jquery.com/jquery-3.6.0.min.js",crossOrigin:"anonymous"}),(0,s.jsx)(l(),{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-S1P93RNMN0"}),(0,s.jsx)(l(),{children:o()})]})},m=t(1664),h=t.n(m),u=t(4847),f=t(6383),x=t(7294);class j{static setItem(e,n){localStorage.setItem(e,JSON.stringify(n))}static getItem(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=localStorage.getItem(e);return t?JSON.parse(t):n}}let g=Object.freeze({LIGHT:{id:"light",name:"Light",icon:"bi-sun-fill"},DARK:{id:"dark",name:"Dark",icon:"bi-moon-stars-fill"},AUTO:{id:"auto",name:"Auto",icon:"bi-circle-half"}});function w(e){j.setItem("color-theme-id",e.id)}function p(){return window.matchMedia("(prefers-color-scheme: dark)").matches?g.DARK:g.LIGHT}function v(e){e===g.AUTO&&(e=p()),window.document.documentElement.setAttribute("data-bs-theme",e.id)}function N(e){let{value:n,handleClick:t,selected:c=!1}=e,a=c?(0,s.jsx)("i",{className:"bi bi-check2"}):(0,s.jsx)(s.Fragment,{});return(0,s.jsx)("li",{children:(0,s.jsxs)("a",{className:"dropdown-item d-flex align-items-center rounded ".concat(c?"active":""),href:"#",onClick:e=>t(e,n),"data-theme":n.id,children:[(0,s.jsx)("i",{className:"bi ".concat(n.icon)}),(0,s.jsx)("span",{className:"ms-3 me-auto",children:n.name}),a]})})}function b(){let[e,n]=(0,x.useState)(g.AUTO);function t(e,t){n(t),v(t),w(t)}return(0,x.useEffect)(()=>{let t=p(),s=function(){let e=j.getItem("color-theme-id");return e==g.AUTO.id?g.AUTO:e==g.DARK.id?g.DARK:e==g.LIGHT.id?g.LIGHT:null}();s?w===g.AUTO?(n(t),v(t)):(n(s),v(s)):v(t);let c=n=>{e==g.AUTO&&v(p())},a=window.matchMedia("(prefers-color-scheme: dark)");return a.addEventListener("change",c),()=>{a.removeEventListener("change",c)}},[e]),(0,s.jsxs)("li",{className:"nav-item dropdown dark-mode",children:[(0,s.jsxs)("a",{className:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:[(0,s.jsx)("i",{className:"bi ".concat(e.icon)}),(0,s.jsx)("span",{className:"ms-2 d-md-none",children:e.name})]}),(0,s.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end p-1",children:[(0,s.jsx)(N,{value:g.LIGHT,handleClick:t,selected:e===g.LIGHT}),(0,s.jsx)(N,{value:g.DARK,handleClick:t,selected:e===g.DARK}),(0,s.jsx)(N,{value:g.AUTO,handleClick:t,selected:e===g.AUTO})]})]})}var k=t(1163);function y(e){let{href:n,exact:t,children:c}=e,{pathname:a}=(0,k.useRouter)(),i="";return t?a===n&&(i="active"):a.startsWith(n)&&(i="active"),(0,s.jsx)(h(),{href:n,className:"nav-link ".concat(i),children:c})}function T(){return(0,s.jsx)(u.Z,{expand:"md",bg:"dark",fixed:"top","data-bs-theme":"dark",children:(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(u.Z.Brand,{href:"/",className:"d-flex align-items-center",children:(0,s.jsx)("img",{src:"/images/logo.png",height:"22",className:"d-inline-block align-top"})}),(0,s.jsx)(u.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,s.jsxs)(u.Z.Collapse,{id:"basic-navbar-nav",children:[(0,s.jsx)(f.Z,{className:"me-auto"}),(0,s.jsxs)(f.Z,{children:[(0,s.jsx)(y,{href:"/",exact:!0,children:"Home"}),(0,s.jsx)(y,{href:"/team",children:"Team"}),(0,s.jsx)(y,{href:"/projects",children:"Projects"}),(0,s.jsx)(y,{href:"/publications",children:"Publications"}),(0,s.jsx)(y,{href:"/contact",children:"Contact"}),(0,s.jsxs)("li",{className:"nav-item",children:[(0,s.jsx)("div",{className:"vr d-none d-md-flex h-100 mx-md-2 text-white"}),(0,s.jsx)("hr",{className:"d-md-none my-2 text-white-50"})]}),(0,s.jsx)(b,{})]})]})]})})}var A=function(e){let{children:n,menu:t,className:c=""}=e,r="Home"==t?"":"".concat(t," - ");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a(),{children:[(0,s.jsx)("title",{children:"".concat(r," S3 Research Lab")}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,s.jsx)("header",{children:(0,s.jsx)(T,{})}),(0,s.jsx)("main",{children:(0,s.jsxs)(i.Z,{className:c,children:[(0,s.jsx)("h3",{className:"text-dark",children:"Home"==t?"":t}),n]})}),(0,s.jsx)(d,{})]})}},1669:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return r}});var s=t(5893),c=t(8888),a=t(8083),i=t(4226);function r(){return(0,s.jsx)(i.Z,{menu:"Contact",children:(0,s.jsxs)(c.Z,{children:[(0,s.jsxs)(a.Z,{sm:"12",md:"8",children:[(0,s.jsxs)("p",{children:["We're are currently housed in the ",(0,s.jsx)("a",{href:"https://www.umflint.edu/cit/",children:"College of Innovation & Technology"})," at ",(0,s.jsx)("a",{href:"https://www.umflint.edu/",children:" University of Michigan-Flint"})]}),(0,s.jsx)("hr",{}),(0,s.jsxs)("address",{children:["510 Murchie Science Building",(0,s.jsx)("br",{}),"303 E. Kearsley Street ",(0,s.jsx)("br",{}),"Flint, Michigan 48502-1950, USA",(0,s.jsx)("br",{})]}),(0,s.jsx)("img",{className:"img-fluid mb-3 cit-logo-dark d-none",src:"images/cit-logo-dark.png",width:"400px"}),(0,s.jsx)("img",{className:"img-fluid mb-3 cit-logo-light ",src:"images/cit-logo-light.png",width:"400px"})]}),(0,s.jsx)(a.Z,{sm:"12",md:"4",children:(0,s.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8511.913487020587!2d-83.69364197666431!3d43.02046106744844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88238217c25d9827%3A0xf5cdab96dcc98e0c!2sUniversity%20of%20Michigan-Flint!5e0!3m2!1sen!2sus!4v1662905510786!5m2!1sen!2sus",width:"100%",height:"250",style:{border:"0"},allowFullScreen:"allowfullscreen",referrerPolicy:"no-referrer-when-downgrade"})})]})})}}},function(e){e.O(0,[531,888,774,179],function(){return e(e.s=8105)}),_N_E=e.O()}]);