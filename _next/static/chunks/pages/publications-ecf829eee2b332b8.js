(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[548],{9766:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/publications",function(){return t(7809)}])},8714:function(e,s,t){"use strict";t.d(s,{Z:function(){return v}});var r=t(5893),n=t(9008),a=t.n(n),l=t(682),i=t(1664),c=t.n(i),o=t(1163),d=t(8331),u=t(9291);function h(e){let{href:s,exact:t,children:n}=e,{pathname:a}=(0,o.useRouter)(),l="";return t?a===s&&(l="active"):a.startsWith(s)&&(l="active"),(0,r.jsx)(c(),{href:s,className:"nav-link ".concat(l),children:n})}var j=function(){return(0,r.jsx)(d.Z,{expand:"sm",bg:"light",children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)("span",{}),(0,r.jsx)(d.Z.Toggle,{className:""}),(0,r.jsx)(d.Z.Collapse,{children:(0,r.jsxs)(u.Z,{children:[(0,r.jsxs)(h,{href:"/",exact:!0,children:[(0,r.jsx)("i",{className:"bi bi-house"}),"Home"]}),(0,r.jsxs)(h,{href:"/team",children:[(0,r.jsx)("i",{className:"bi bi-people"}),"Team"]}),(0,r.jsxs)(h,{href:"/projects",children:[(0,r.jsx)("i",{className:"bi bi-table"}),"Projects"]}),(0,r.jsxs)(h,{href:"/publications",children:[(0,r.jsx)("i",{className:"bi bi-file-earmark-text"}),"Publications"]}),(0,r.jsxs)(h,{href:"/contact",children:[(0,r.jsx)("i",{className:"bi bi-envelope"}),"Contact"]})]})})]})})},f=t(4298),x=t.n(f);let m=()=>{function e(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","G-S1P93RNMN0")};var p=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x(),{src:"https://code.jquery.com/jquery-3.6.0.min.js",crossOrigin:"anonymous"}),(0,r.jsx)(x(),{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-S1P93RNMN0"}),(0,r.jsx)(x(),{children:m()})]})},g=t(5005),N=function(){return(0,r.jsx)("nav",{className:"topbar d-flex align-items-center",children:(0,r.jsxs)(l.Z,{className:"d-flex justify-content-between align-items-center",children:[(0,r.jsx)(c(),{href:"/",children:(0,r.jsx)("img",{className:"img-fluid",src:"images/logo-long-name.png"})}),(0,r.jsx)(g.Z,{variant:"primary",href:"/projects",className:"d-none d-md-block",children:"Join Us"})]})})},v=function(e){let{children:s,menu:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"".concat("Home"==t?"":"".concat(t," - ")," S3 Research Lab")}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,r.jsxs)("header",{children:[(0,r.jsx)(N,{}),(0,r.jsx)(j,{})]}),(0,r.jsx)("main",{children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)("h3",{children:"Home"==t?"":t}),s]})}),(0,r.jsx)(p,{})]})}},7809:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSG:function(){return h},default:function(){return j}});var r=t(5893),n=t(7294),a=t(1163),l=t(8714),i=t(6811),c=function(e){let s=e.id||i.Z.generateId(e.title),t=e.collapsed?"collapsed":"",n=e.collapsed?"":"show";return(0,r.jsxs)("div",{className:"collapse-group",children:[(0,r.jsxs)("p",{"data-bs-toggle":"collapse",className:"fw-bold ".concat(t),"data-bs-target":"#".concat(s),children:[(0,r.jsx)("i",{className:"bi bi-chevron-right"}),(0,r.jsx)("span",{className:"text-white",children:e.title})]}),(0,r.jsx)("div",{className:"content collapse ".concat(n),id:s,children:e.children})]},s)},o=t(1555);let d={journal:{order:1,title:"Refereed Journal Papers"},conference:{order:2,title:"Refereed Conference Papers"},"short-paper":{order:3,title:"Refereed Short Papers, Videos, Demos, and Posters"},"no-proceedings":{order:4,title:"Workshop and Conferences without Proceedings"},unrefereed:{order:5,title:"Unrefereed Publications"},"invited-talks":{order:6,title:"Major Invited Talks"},thesis:{order:7,title:"Thesis"},"under-review":{order:8,title:"Under Review"}};for(let u=2e3;u<2040;u++)d[u]={order:2040-u,title:u+""};var h=!0,j=function(e){var s;let t,{entries:i}=e,u=(0,a.useRouter)(),[h,j]=(0,n.useState)("year"),[f,x]=(0,n.useState)(""),m=Array.from((s=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.filter(e=>!s||e.HTML.toLowerCase().includes(s.toLowerCase()))}(i.formatted,f),t=new Map,s.forEach(e=>{let s=e[h.toUpperCase()];t.has(s)||t.set(s,[]),t.get(s).push(e)}),t).keys()).sort((e,s)=>d[e].order-d[s].order).map(e=>{var s,n;let a;return s=e,n=t.get(e),s=d[s].title,a=n.map(e=>(0,r.jsx)("li",{className:"ms-1",children:(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:e.HTML}})},e.key)),(0,r.jsx)(c,{title:s,children:(0,r.jsx)("ul",{children:a})},s)});return(0,r.jsxs)(l.Z,{menu:"Publications",children:[(0,r.jsx)("p",{children:"This is not the full list. We will update it as soon as possible."}),(0,r.jsxs)("form",{className:"row g-1 mb-3",children:[(0,r.jsx)(o.Z,{xs:"12",sm:"3",md:"2",lg:"2",xl:"1",children:(0,r.jsxs)("select",{className:"form-select",value:h,onChange:function(e){j(e.target.value)},children:[(0,r.jsx)("option",{value:"year",children:"Year"}),(0,r.jsx)("option",{value:"annote",children:"Type"})]})}),(0,r.jsx)(o.Z,{xs:"12",sm:"9",md:"10",lg:"10",xl:"11",children:(0,r.jsx)("input",{type:"search",className:"form-control",placeholder:"Search papers",autoComplete:"off",value:f,onChange:function(e){let s=e.target.value;u.replace({query:{...u.query,q:s}}),x(s)}})})]}),m]})}},6811:function(e,s){"use strict";s.Z=class{static generateId(e){return"p-"+e.toLowerCase().replace(/[^a-zA-Z0-9]+/g,"-")}}},1555:function(e,s,t){"use strict";var r=t(4184),n=t.n(r),a=t(7294),l=t(6792),i=t(5893);let c=a.forwardRef((e,s)=>{let[{className:t,...r},{as:a="div",bsPrefix:c,spans:o}]=function({as:e,bsPrefix:s,className:t,...r}){s=(0,l.vE)(s,"col");let a=(0,l.pi)(),i=(0,l.zG)(),c=[],o=[];return a.forEach(e=>{let t,n,a;let l=r[e];delete r[e],"object"==typeof l&&null!=l?{span:t,offset:n,order:a}=l:t=l;let d=e!==i?`-${e}`:"";t&&c.push(!0===t?`${s}${d}`:`${s}${d}-${t}`),null!=a&&o.push(`order${d}-${a}`),null!=n&&o.push(`offset${d}-${n}`)}),[{...r,className:n()(t,...c,...o)},{as:e,bsPrefix:s,spans:c}]}(e);return(0,i.jsx)(a,{...r,ref:s,className:n()(t,!o.length&&c)})});c.displayName="Col",s.Z=c}},function(e){e.O(0,[39,774,888,179],function(){return e(e.s=9766)}),_N_E=e.O()}]);