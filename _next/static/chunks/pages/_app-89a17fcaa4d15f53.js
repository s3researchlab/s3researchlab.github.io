(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var s=o.apply(null,n);s&&e.push(s)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},1143:function(e){"use strict";e.exports=function(e,t,n,r,o,a,s,i){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,a,s,i],u=0;(c=new Error(t.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},1752:function(e,t,n){n(8027)},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1212)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,a=n(7273).Z,s=o(n(7294)),i=n(6273),c=n(2725),l=n(3462),u=n(1018),f=n(7190),d=n(1210),p=n(8684),h="undefined"!==typeof s.default.useTransition,m={};function v(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;m[t+"%"+n+(o?"%"+o:"")]=!0}}var x=s.default.forwardRef((function(e,t){var n,o=e.href,x=e.as,g=e.children,b=e.prefetch,y=e.passHref,E=e.replace,j=e.soft,w=e.shallow,C=e.scroll,N=e.locale,O=e.onClick,k=e.onMouseEnter,R=e.onTouchStart,S=e.legacyBehavior,P=void 0===S?!0!==Boolean(!1):S,T=a(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,!P||"string"!==typeof n&&"number"!==typeof n||(n=s.default.createElement("a",null,n));var L=!1!==b,_=r(h?s.default.useTransition():[],2)[1],M=s.default.useContext(l.RouterContext),$=s.default.useContext(u.AppRouterContext);$&&(M=$);var D,F=s.default.useMemo((function(){var e=r(i.resolveHref(M,o,!0),2),t=e[0],n=e[1];return{href:t,as:x?i.resolveHref(M,x):n||t}}),[M,o,x]),B=F.href,I=F.as,W=s.default.useRef(B),A=s.default.useRef(I);P&&(D=s.default.Children.only(n));var H=P?D&&"object"===typeof D&&D.ref:t,U=r(f.useIntersection({rootMargin:"200px"}),3),V=U[0],G=U[1],X=U[2],K=s.default.useCallback((function(e){A.current===I&&W.current===B||(X(),A.current=I,W.current=B),V(e),H&&("function"===typeof H?H(e):"object"===typeof H&&(H.current=e))}),[I,H,B,X,V]);s.default.useEffect((function(){var e=G&&L&&i.isLocalURL(B),t="undefined"!==typeof N?N:M&&M.locale,n=m[B+"%"+I+(t?"%"+t:"")];e&&!n&&v(M,B,I,{locale:t})}),[I,B,G,N,L,M]);var Z={ref:K,onClick:function(e){P||"function"!==typeof O||O(e),P&&D.props&&"function"===typeof D.props.onClick&&D.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,s,c,l,u){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n)){e.preventDefault();var f=function(){"softPush"in t&&"softReplace"in t?t[a?o?"softReplace":"softPush":o?"replace":"push"](n):t[o?"replace":"push"](n,r,{shallow:s,locale:l,scroll:c})};u?u(f):f()}}(e,M,B,I,E,j,w,C,N,$?_:void 0)},onMouseEnter:function(e){P||"function"!==typeof k||k(e),P&&D.props&&"function"===typeof D.props.onMouseEnter&&D.props.onMouseEnter(e),i.isLocalURL(B)&&v(M,B,I,{priority:!0})},onTouchStart:function(e){P||"function"!==typeof R||R(e),P&&D.props&&"function"===typeof D.props.onTouchStart&&D.props.onTouchStart(e),i.isLocalURL(B)&&v(M,B,I,{priority:!0})}};if(!P||y||"a"===D.type&&!("href"in D.props)){var q="undefined"!==typeof N?N:M&&M.locale,Y=M&&M.isLocaleDomain&&d.getDomainLocale(I,q,M.locales,M.domainLocales);Z.href=Y||p.addBasePath(c.addLocale(I,q,M&&M.defaultLocale))}return P?s.default.cloneElement(D,Z):s.default.createElement("a",Object.assign({},T,Z),n)}));t.default=x,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,l=e.disabled||!s,u=o.useRef(),f=r(o.useState(!1),2),d=f[0],p=f[1],h=r(o.useState(null),2),m=h[0],v=h[1];o.useEffect((function(){if(s){if(u.current&&(u.current(),u.current=void 0),l||d)return;return m&&m.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=i.get(r)))return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:o},c.push(n),i.set(n,t),t}(n),o=r.id,a=r.observer,s=r.elements;return s.set(e,t),a.observe(e),function(){if(s.delete(e),a.unobserve(e),0===s.size){a.disconnect(),i.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(m,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==u.current||u.current(),u.current=void 0}}if(!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[m,l,n,t,d]);var x=o.useCallback((function(){p(!1)}),[]);return[v,d,x]};var o=n(7294),a=n(9311),s="function"===typeof IntersectionObserver;var i=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var a=r.default.createContext(null);t.LayoutRouterContext=a;var s=r.default.createContext(null);t.GlobalLayoutRouterContext=s},1212:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}n.r(t),n.d(t,{default:function(){return Gt}});var a=n(5893),s=(n(6516),n(6968),n(5585),n(6706),n(4184)),i=n.n(s),c=n(7294);const l=["xxl","xl","lg","md","sm","xs"],u=c.createContext({prefixes:{},breakpoints:l,minBreakpoint:"xs"}),{Consumer:f,Provider:d}=u;function p(e,t){const{prefixes:n}=(0,c.useContext)(u);return e||n[t]||t}function h(){const{breakpoints:e}=(0,c.useContext)(u);return e}function m(){const{minBreakpoint:e}=(0,c.useContext)(u);return e}const v=c.forwardRef((({bsPrefix:e,fluid:t,as:n="div",className:r,...o},s)=>{const c=p(e,"container"),l="string"===typeof t?`-${t}`:"-fluid";return(0,a.jsx)(n,{ref:s,...o,className:i()(r,t?`${c}${l}`:c)})}));v.displayName="Container",v.defaultProps={fluid:!1};var x=v;const g=c.forwardRef((({bsPrefix:e,className:t,as:n="div",...r},o)=>{const s=p(e,"row"),c=h(),l=m(),u=`${s}-cols`,f=[];return c.forEach((e=>{const t=r[e];let n;delete r[e],null!=t&&"object"===typeof t?({cols:n}=t):n=t;const o=e!==l?`-${e}`:"";null!=n&&f.push(`${u}${o}-${n}`)})),(0,a.jsx)(n,{ref:o,...r,className:i()(t,s,...f)})}));g.displayName="Row";var b=g;const y=c.forwardRef(((e,t)=>{const[{className:n,...r},{as:o="div",bsPrefix:s,spans:c}]=function({as:e,bsPrefix:t,className:n,...r}){t=p(t,"col");const o=h(),a=m(),s=[],c=[];return o.forEach((e=>{const n=r[e];let o,i,l;delete r[e],"object"===typeof n&&null!=n?({span:o,offset:i,order:l}=n):o=n;const u=e!==a?`-${e}`:"";o&&s.push(!0===o?`${t}${u}`:`${t}${u}-${o}`),null!=l&&c.push(`order${u}-${l}`),null!=i&&c.push(`offset${u}-${i}`)})),[{...r,className:i()(n,...s,...c)},{as:e,bsPrefix:t,spans:s}]}(e);return(0,a.jsx)(o,{...r,ref:t,className:i()(n,!c.length&&s)})}));y.displayName="Col";var E=y,j=n(9008),w=n.n(j),C=JSON.parse('{"WL":"S3 Research Lab\'s Main Website","v":"Thiago Ferreira","Xh":"s3researchlab.github.io"}');var N=function(e){return e.page,"".concat(C.v),(0,a.jsxs)(w(),{children:[(0,a.jsx)("meta",{charSet:"utf-8"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("title",{children:"S3 Research Lab"}),(0,a.jsx)("meta",{name:"author",content:C.v}),(0,a.jsx)("meta",{name:"description",content:C.WL}),(0,a.jsx)("meta",{name:"keywords",content:C.keywords}),(0,a.jsx)("meta",{name:"robots",content:"index, follow"}),(0,a.jsx)("meta",{name:"theme-color",content:"#021329"}),(0,a.jsx)("meta",{name:"mobile-web-app-capable",content:"yes"}),(0,a.jsx)("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),(0,a.jsx)("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black"}),(0,a.jsx)("meta",{name:"apple-mobile-web-app-title",content:C.v}),(0,a.jsx)("meta",{property:"og:title",content:C.v}),(0,a.jsx)("meta",{property:"og:url",content:C.Xh}),(0,a.jsx)("meta",{property:"og:description",content:C.WL}),(0,a.jsx)("meta",{property:"og:image",content:"images/profile.jpg"}),(0,a.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,a.jsx)("meta",{property:"og:locale:alternate",content:"pt_BR"})]})},O=n(1664),k=n.n(O),R=n(1163);var S=c.createContext(null);function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}function T(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n(1143);function L(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function _(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function M(e,t){return Object.keys(t).reduce((function(n,r){var o,a=n,s=a[L(r)],i=a[r],l=T(a,[L(r),r].map(_)),u=t[r],f=function(e,t,n){var r=(0,c.useRef)(void 0!==e),o=(0,c.useState)(t),a=o[0],s=o[1],i=void 0!==e,l=r.current;return r.current=i,!i&&l&&a!==t&&s(t),[i?e:a,(0,c.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];n&&n.apply(void 0,[e].concat(r)),s(e)}),[n])]}(i,s,e[u]),d=f[0],p=f[1];return P({},l,((o={})[r]=d,o[u]=p,o))}),e)}function $(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function D(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function F(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}$.__suppressDeprecationWarning=!0,D.__suppressDeprecationWarning=!0,F.__suppressDeprecationWarning=!0;var B=/-(.)/g;const I=e=>{return e[0].toUpperCase()+(t=e,t.replace(B,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function W(e,{displayName:t=I(e),Component:n,defaultProps:r}={}){const o=c.forwardRef((({className:t,bsPrefix:r,as:o=n||"div",...s},c)=>{const l=p(r,e);return(0,a.jsx)(o,{ref:c,className:i()(t,l),...s})}));return o.defaultProps=r,o.displayName=t,o}const A=c.forwardRef((({bsPrefix:e,className:t,as:n,...r},o)=>{e=p(e,"navbar-brand");const s=n||(r.href?"a":"span");return(0,a.jsx)(s,{...r,ref:o,className:i()(t,e)})}));A.displayName="NavbarBrand";var H=A;function U(e){return e&&e.ownerDocument||document}function V(e,t){return function(e){var t=U(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var G=/([A-Z])/g;var X=/^ms-/;function K(e){return function(e){return e.replace(G,"-$1").toLowerCase()}(e).replace(X,"-ms-")}var Z=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var q=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(K(t))||V(e).getPropertyValue(K(t));Object.keys(t).forEach((function(o){var a=t[o];a||0===a?!function(e){return!(!e||!Z.test(e))}(o)?n+=K(o)+": "+a+";":r+=o+"("+a+") ":e.style.removeProperty(K(o))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n};function Y(e,t){return Y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Y(e,t)}var z=n(3935),J=!1,Q=c.createContext(null),ee="unmounted",te="exited",ne="entering",re="entered",oe="exiting",ae=function(e){var t,n;function r(t,n){var r;r=e.call(this,t,n)||this;var o,a=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?a?(o=te,r.appearStatus=ne):o=re:o=t.unmountOnExit||t.mountOnEnter?ee:te,r.state={status:o},r.nextCallback=null,r}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,Y(t,n),r.getDerivedStateFromProps=function(e,t){return e.in&&t.status===ee?{status:te}:null};var o=r.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==ne&&n!==re&&(t=ne):n!==ne&&n!==re||(t=oe)}this.updateStatus(!1,t)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},o.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===ne){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:z.findDOMNode(this);n&&function(e){e.scrollTop}(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===te&&this.setState({status:ee})},o.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[z.findDOMNode(this),r],a=o[0],s=o[1],i=this.getTimeouts(),c=r?i.appear:i.enter;!e&&!n||J?this.safeSetState({status:re},(function(){t.props.onEntered(a)})):(this.props.onEnter(a,s),this.safeSetState({status:ne},(function(){t.props.onEntering(a,s),t.onTransitionEnd(c,(function(){t.safeSetState({status:re},(function(){t.props.onEntered(a,s)}))}))})))},o.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:z.findDOMNode(this);t&&!J?(this.props.onExit(r),this.safeSetState({status:oe},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:te},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:te},(function(){e.props.onExited(r)}))},o.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},o.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},o.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:z.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=o[0],s=o[1];this.props.addEndListener(a,s)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},o.render=function(){var e=this.state.status;if(e===ee)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,T(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return c.createElement(Q.Provider,{value:null},"function"===typeof n?n(e,r):c.cloneElement(c.Children.only(n),r))},r}(c.Component);function se(){}ae.contextType=Q,ae.propTypes={},ae.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:se,onEntering:se,onEntered:se,onExit:se,onExiting:se,onExited:se},ae.UNMOUNTED=ee,ae.EXITED=te,ae.ENTERING=ne,ae.ENTERED=re,ae.EXITING=oe;var ie=ae,ce=!("undefined"===typeof window||!window.document||!window.document.createElement),le=!1,ue=!1;try{var fe={get passive(){return le=!0},get once(){return ue=le=!0}};ce&&(window.addEventListener("test",fe,fe),window.removeEventListener("test",fe,!0))}catch(Xt){}var de=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!ue){var o=r.once,a=r.capture,s=n;!ue&&o&&(s=n.__once||function e(r){this.removeEventListener(t,e,a),n.call(this,r)},n.__once=s),e.addEventListener(t,s,le?r:a)}e.addEventListener(t,n,r)};var pe=function(e,t,n,r){var o=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)};var he=function(e,t,n,r){return de(e,t,n,r),function(){pe(e,t,n,r)}};function me(e,t,n){void 0===n&&(n=5);var r=!1,o=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}(e,"transitionend",!0)}),t+n),a=he(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),a()}}function ve(e,t,n,r){null==n&&(n=function(e){var t=q(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var o=me(e,n,r),a=he(e,"transitionend",t);return function(){o(),a()}}function xe(e,t){const n=q(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function ge(e,t){const n=xe(e,"transitionDuration"),r=xe(e,"transitionDelay"),o=ve(e,(n=>{n.target===e&&(o(),t(n))}),n+r)}var be=function(...e){return e.filter((e=>null!=e)).reduce(((e,t)=>{if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(...n){e.apply(this,n),t.apply(this,n)}}),null)};function ye(e){e.offsetHeight}var Ee=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};var je=function(e,t){return(0,c.useMemo)((function(){return function(e,t){var n=Ee(e),r=Ee(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])};var we=c.forwardRef((({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:o,onExited:s,addEndListener:i,children:l,childRef:u,...f},d)=>{const p=(0,c.useRef)(null),h=je(p,u),m=e=>{var t;h((t=e)&&"setState"in t?z.findDOMNode(t):null!=t?t:null)},v=e=>t=>{e&&p.current&&e(p.current,t)},x=(0,c.useCallback)(v(e),[e]),g=(0,c.useCallback)(v(t),[t]),b=(0,c.useCallback)(v(n),[n]),y=(0,c.useCallback)(v(r),[r]),E=(0,c.useCallback)(v(o),[o]),j=(0,c.useCallback)(v(s),[s]),w=(0,c.useCallback)(v(i),[i]);return(0,a.jsx)(ie,{ref:d,...f,onEnter:x,onEntered:b,onEntering:g,onExit:y,onExited:j,onExiting:E,addEndListener:w,nodeRef:p,children:"function"===typeof l?(e,t)=>l(e,{...t,ref:m}):c.cloneElement(l,{ref:m})})}));const Ce={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function Ne(e,t){const n=t[`offset${e[0].toUpperCase()}${e.slice(1)}`],r=Ce[e];return n+parseInt(q(t,r[0]),10)+parseInt(q(t,r[1]),10)}const Oe={[te]:"collapse",[oe]:"collapsing",[ne]:"collapsing",[re]:"collapse show"},ke={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:Ne},Re=c.forwardRef((({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:o,className:s,children:l,dimension:u="height",getDimensionValue:f=Ne,...d},p)=>{const h="function"===typeof u?u():u,m=(0,c.useMemo)((()=>be((e=>{e.style[h]="0"}),e)),[h,e]),v=(0,c.useMemo)((()=>be((e=>{const t=`scroll${h[0].toUpperCase()}${h.slice(1)}`;e.style[h]=`${e[t]}px`}),t)),[h,t]),x=(0,c.useMemo)((()=>be((e=>{e.style[h]=null}),n)),[h,n]),g=(0,c.useMemo)((()=>be((e=>{e.style[h]=`${f(h,e)}px`,ye(e)}),r)),[r,f,h]),b=(0,c.useMemo)((()=>be((e=>{e.style[h]=null}),o)),[h,o]);return(0,a.jsx)(we,{ref:p,addEndListener:ge,...d,"aria-expanded":d.role?d.in:null,onEnter:m,onEntering:v,onEntered:x,onExit:g,onExiting:b,childRef:l.ref,children:(e,t)=>c.cloneElement(l,{...t,className:i()(s,l.props.className,Oe[e],"width"===h&&"collapse-horizontal")})})}));Re.defaultProps=ke;var Se=Re;const Pe=c.createContext(null);Pe.displayName="NavbarContext";var Te=Pe;const Le=c.forwardRef((({children:e,bsPrefix:t,...n},r)=>{t=p(t,"navbar-collapse");const o=(0,c.useContext)(Te);return(0,a.jsx)(Se,{in:!(!o||!o.expanded),...n,children:(0,a.jsx)("div",{ref:r,className:t,children:e})})}));Le.displayName="NavbarCollapse";var _e=Le;var Me=function(e){var t=(0,c.useRef)(e);return(0,c.useEffect)((function(){t.current=e}),[e]),t};function $e(e){var t=Me(e);return(0,c.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}const De=c.forwardRef((({bsPrefix:e,className:t,children:n,label:r,as:o="button",onClick:s,...l},u)=>{e=p(e,"navbar-toggler");const{onToggle:f,expanded:d}=(0,c.useContext)(Te)||{},h=$e((e=>{s&&s(e),f&&f()}));return"button"===o&&(l.type="button"),(0,a.jsx)(o,{...l,ref:u,onClick:h,"aria-label":r,className:i()(t,e,!d&&"collapsed"),children:n||(0,a.jsx)("span",{className:`${e}-icon`})})}));De.displayName="NavbarToggle",De.defaultProps={label:"Toggle navigation"};var Fe=De,Be="undefined"!==typeof n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product,Ie="undefined"!==typeof document||Be?c.useLayoutEffect:c.useEffect,We=new WeakMap,Ae=function(e,t){if(e&&t){var n=We.get(t)||new Map;We.set(t,n);var r=n.get(e);return r||((r=t.matchMedia(e)).refCount=0,n.set(r.media,r)),r}};function He(e,t){void 0===t&&(t="undefined"===typeof window?void 0:window);var n=Ae(e,t),r=(0,c.useState)((function(){return!!n&&n.matches})),o=r[0],a=r[1];return Ie((function(){var n=Ae(e,t);if(!n)return a(!1);var r=We.get(t),o=function(){a(n.matches)};return n.refCount++,n.addListener(o),o(),function(){n.removeListener(o),n.refCount--,n.refCount<=0&&(null==r||r.delete(n.media)),n=void 0}}),[e]),o}var Ue=function(e){var t=Object.keys(e);function n(e,t){return e===t?t:e?e+" and "+t:t}function r(n){var r=function(e){return t[Math.min(t.indexOf(e)+1,t.length-1)]}(n),o=e[r];return"(max-width: "+(o="number"===typeof o?o-.2+"px":"calc("+o+" - 0.2px)")+")"}return function(t,o,a){var s,i;"object"===typeof t?(s=t,a=o,o=!0):((i={})[t]=o=o||!0,s=i);var l=(0,c.useMemo)((function(){return Object.entries(s).reduce((function(t,o){var a=o[0],s=o[1];return"up"!==s&&!0!==s||(t=n(t,function(t){var n=e[t];return"number"===typeof n&&(n+="px"),"(min-width: "+n+")"}(a))),"down"!==s&&!0!==s||(t=n(t,r(a))),t}),"")}),[JSON.stringify(s)]);return He(l,a)}}({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});function Ve(e){void 0===e&&(e=U());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(Xt){return e.body}}function Ge(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}function Xe(e){var t=function(e){var t=(0,c.useRef)(e);return t.current=e,t}(e);(0,c.useEffect)((function(){return function(){return t.current()}}),[])}const Ke=`data-rr-ui-${"modal-open"}`;var Ze=class{constructor({ownerDocument:e,handleContainerOverflow:t=!0,isRTL:n=!1}={}){this.handleContainerOverflow=t,this.isRTL=n,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return function(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const t={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style={overflow:r.style.overflow,[n]:r.style[n]},e.scrollBarWidth&&(t[n]=`${parseInt(q(r,n)||"0",10)+e.scrollBarWidth}px`),r.setAttribute(Ke,""),q(r,t)}reset(){[...this.modals].forEach((e=>this.remove(e)))}removeContainerStyle(e){const t=this.getElement();t.removeAttribute(Ke),Object.assign(t.style,e.style)}add(e){let t=this.modals.indexOf(e);return-1!==t?t:(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==t||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),t)}remove(e){const t=this.modals.indexOf(e);-1!==t&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}};const qe=(0,c.createContext)(ce?window:void 0);qe.Provider;function Ye(){return(0,c.useContext)(qe)}const ze=(e,t)=>{var n;return ce?null==e?(t||U()).body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(n=e)&&n.nodeType&&e||null):null};const Je=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];let Qe;function et(e){const t=Ye(),n=e||function(e){return Qe||(Qe=new Ze({ownerDocument:null==e?void 0:e.document})),Qe}(t),r=(0,c.useRef)({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:(0,c.useCallback)((e=>{r.current.dialog=e}),[]),setBackdropRef:(0,c.useCallback)((e=>{r.current.backdrop=e}),[])})}const tt=(0,c.forwardRef)(((e,t)=>{let{show:n=!1,role:r="dialog",className:o,style:s,children:i,backdrop:l=!0,keyboard:u=!0,onBackdropClick:f,onEscapeKeyDown:d,transition:p,backdropTransition:h,autoFocus:m=!0,enforceFocus:v=!0,restoreFocus:x=!0,restoreFocusOptions:g,renderDialog:b,renderBackdrop:y=(e=>(0,a.jsx)("div",Object.assign({},e))),manager:E,container:j,onShow:w,onHide:C=(()=>{}),onExit:N,onExited:O,onExiting:k,onEnter:R,onEntering:S,onEntered:P}=e,T=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,Je);const L=function(e,t){const n=Ye(),[r,o]=(0,c.useState)((()=>ze(e,null==n?void 0:n.document)));if(!r){const t=ze(e);t&&o(t)}return(0,c.useEffect)((()=>{t&&r&&t(r)}),[t,r]),(0,c.useEffect)((()=>{const t=ze(e);t!==r&&o(t)}),[e,r]),r}(j),_=et(E),M=function(){var e=(0,c.useRef)(!0),t=(0,c.useRef)((function(){return e.current}));return(0,c.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),t.current}(),$=function(e){var t=(0,c.useRef)(null);return(0,c.useEffect)((function(){t.current=e})),t.current}(n),[D,F]=(0,c.useState)(!n),B=(0,c.useRef)(null);(0,c.useImperativeHandle)(t,(()=>_),[_]),ce&&!$&&n&&(B.current=Ve()),p||n||D?n&&D&&F(!1):F(!0);const I=$e((()=>{if(_.add(),G.current=he(document,"keydown",U),V.current=he(document,"focus",(()=>setTimeout(A)),!0),w&&w(),m){const e=Ve(document);_.dialog&&e&&!Ge(_.dialog,e)&&(B.current=e,_.dialog.focus())}})),W=$e((()=>{var e;(_.remove(),null==G.current||G.current(),null==V.current||V.current(),x)&&(null==(e=B.current)||null==e.focus||e.focus(g),B.current=null)}));(0,c.useEffect)((()=>{n&&L&&I()}),[n,L,I]),(0,c.useEffect)((()=>{D&&W()}),[D,W]),Xe((()=>{W()}));const A=$e((()=>{if(!v||!M()||!_.isTopModal())return;const e=Ve();_.dialog&&e&&!Ge(_.dialog,e)&&_.dialog.focus()})),H=$e((e=>{e.target===e.currentTarget&&(null==f||f(e),!0===l&&C())})),U=$e((e=>{u&&27===e.keyCode&&_.isTopModal()&&(null==d||d(e),e.defaultPrevented||C())})),V=(0,c.useRef)(),G=(0,c.useRef)(),X=(...e)=>{F(!0),null==O||O(...e)},K=p;if(!L||!(n||K&&!D))return null;const Z=Object.assign({role:r,ref:_.setDialogRef,"aria-modal":"dialog"===r||void 0},T,{style:s,className:o,tabIndex:-1});let q=b?b(Z):(0,a.jsx)("div",Object.assign({},Z,{children:c.cloneElement(i,{role:"document"})}));K&&(q=(0,a.jsx)(K,{appear:!0,unmountOnExit:!0,in:!!n,onExit:N,onExiting:k,onExited:X,onEnter:R,onEntering:S,onEntered:P,children:q}));let Y=null;if(l){const e=h;Y=y({ref:_.setBackdropRef,onClick:H}),e&&(Y=(0,a.jsx)(e,{appear:!0,in:!!n,children:Y}))}return(0,a.jsx)(a.Fragment,{children:z.createPortal((0,a.jsxs)(a.Fragment,{children:[Y,q]}),L)})}));tt.displayName="Modal";var nt=Object.assign(tt,{Manager:Ze});const rt={[ne]:"show",[re]:"show"},ot=c.forwardRef((({className:e,children:t,transitionClasses:n={},...r},o)=>{const s=(0,c.useCallback)(((e,t)=>{ye(e),null==r.onEnter||r.onEnter(e,t)}),[r]);return(0,a.jsx)(we,{ref:o,addEndListener:ge,...r,onEnter:s,childRef:t.ref,children:(r,o)=>c.cloneElement(t,{...o,className:i()("fade",e,t.props.className,rt[r],n[r])})})}));ot.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},ot.displayName="Fade";var at=ot,st=W("offcanvas-body");const it={[ne]:"show",[re]:"show"},ct=c.forwardRef((({bsPrefix:e,className:t,children:n,...r},o)=>(e=p(e,"offcanvas"),(0,a.jsx)(we,{ref:o,addEndListener:ge,...r,childRef:n.ref,children:(r,o)=>c.cloneElement(n,{...o,className:i()(t,n.props.className,(r===ne||r===oe)&&`${e}-toggling`,it[r])})}))));ct.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},ct.displayName="OffcanvasToggling";var lt=ct;var ut=c.createContext({onHide(){}}),ft=n(5697),dt=n.n(ft);const pt={"aria-label":dt().string,onClick:dt().func,variant:dt().oneOf(["white"])},ht=c.forwardRef((({className:e,variant:t,...n},r)=>(0,a.jsx)("button",{ref:r,type:"button",className:i()("btn-close",t&&`btn-close-${t}`,e),...n})));ht.displayName="CloseButton",ht.propTypes=pt,ht.defaultProps={"aria-label":"Close"};var mt=ht;const vt=c.forwardRef((({closeLabel:e,closeVariant:t,closeButton:n,onHide:r,children:o,...s},i)=>{const l=(0,c.useContext)(ut),u=$e((()=>{null==l||l.onHide(),null==r||r()}));return(0,a.jsxs)("div",{ref:i,...s,children:[o,n&&(0,a.jsx)(mt,{"aria-label":e,variant:t,onClick:u})]})}));vt.defaultProps={closeLabel:"Close",closeButton:!1};var xt=vt;const gt=c.forwardRef((({bsPrefix:e,className:t,...n},r)=>(e=p(e,"offcanvas-header"),(0,a.jsx)(xt,{ref:r,...n,className:i()(t,e)}))));gt.displayName="OffcanvasHeader",gt.defaultProps={closeLabel:"Close",closeButton:!1};var bt=gt;var yt,Et=W("offcanvas-title",{Component:(yt="h5",c.forwardRef(((e,t)=>(0,a.jsx)("div",{...e,ref:t,className:i()(e.className,yt)}))))});var jt=Function.prototype.bind.call(Function.prototype.call,[].slice);function wt(e,t){return jt(e.querySelectorAll(t))}function Ct(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}const Nt=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ot=".sticky-top",kt=".navbar-toggler";class Rt extends Ze{adjustAndStore(e,t,n){const r=t.style[e];t.dataset[e]=r,q(t,{[e]:`${parseFloat(q(t,e))+n}px`})}restore(e,t){const n=t.dataset[e];void 0!==n&&(delete t.dataset[e],q(t,{[e]:n}))}setContainerStyle(e){super.setContainerStyle(e);const t=this.getElement();if(function(e,t){e.classList?e.classList.add(t):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(e,t)||("string"===typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}(t,"modal-open"),!e.scrollBarWidth)return;const n=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";wt(t,Nt).forEach((t=>this.adjustAndStore(n,t,e.scrollBarWidth))),wt(t,Ot).forEach((t=>this.adjustAndStore(r,t,-e.scrollBarWidth))),wt(t,kt).forEach((t=>this.adjustAndStore(r,t,e.scrollBarWidth)))}removeContainerStyle(e){super.removeContainerStyle(e);const t=this.getElement();!function(e,t){e.classList?e.classList.remove(t):"string"===typeof e.className?e.className=Ct(e.className,t):e.setAttribute("class",Ct(e.className&&e.className.baseVal||"",t))}(t,"modal-open");const n=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";wt(t,Nt).forEach((e=>this.restore(n,e))),wt(t,Ot).forEach((e=>this.restore(r,e))),wt(t,kt).forEach((e=>this.restore(r,e)))}}let St;var Pt=Rt;function Tt(e){return(0,a.jsx)(lt,{...e})}function Lt(e){return(0,a.jsx)(at,{...e})}const _t=c.forwardRef((({bsPrefix:e,className:t,children:n,"aria-labelledby":r,placement:o,responsive:s,show:l,backdrop:u,keyboard:f,scroll:d,onEscapeKeyDown:h,onShow:m,onHide:v,container:x,autoFocus:g,enforceFocus:b,restoreFocus:y,restoreFocusOptions:E,onEntered:j,onExit:w,onExiting:C,onEnter:N,onEntering:O,onExited:k,backdropClassName:R,manager:S,renderStaticNode:P,...T},L)=>{const _=(0,c.useRef)();e=p(e,"offcanvas");const{onToggle:M}=(0,c.useContext)(Te)||{},[$,D]=(0,c.useState)(!1),F=Ue(s||"xs","up");(0,c.useEffect)((()=>{D(s?l&&!F:l)}),[l,s,F]);const B=$e((()=>{null==M||M(),null==v||v()})),I=(0,c.useMemo)((()=>({onHide:B})),[B]);const W=(0,c.useCallback)((t=>(0,a.jsx)("div",{...t,className:i()(`${e}-backdrop`,R)})),[R,e]),A=c=>(0,a.jsx)("div",{...c,...T,className:i()(t,s?`${e}-${s}`:e,`${e}-${o}`),"aria-labelledby":r,children:n});return(0,a.jsxs)(a.Fragment,{children:[!$&&(s||P)&&A({}),(0,a.jsx)(ut.Provider,{value:I,children:(0,a.jsx)(nt,{show:$,ref:L,backdrop:u,container:x,keyboard:f,autoFocus:g,enforceFocus:b&&!d,restoreFocus:y,restoreFocusOptions:E,onEscapeKeyDown:h,onShow:m,onHide:B,onEnter:(e,...t)=>{e&&(e.style.visibility="visible"),null==N||N(e,...t)},onEntering:O,onEntered:j,onExit:w,onExiting:C,onExited:(e,...t)=>{e&&(e.style.visibility=""),null==k||k(...t)},manager:S||(d?(_.current||(_.current=new Pt({handleContainerOverflow:!1})),_.current):function(e){return St||(St=new Rt(e)),St}()),transition:Tt,backdropTransition:Lt,renderBackdrop:W,renderDialog:A})})]})}));_t.displayName="Offcanvas",_t.defaultProps={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start",renderStaticNode:!1};var Mt=Object.assign(_t,{Body:st,Header:bt,Title:Et});const $t=c.forwardRef(((e,t)=>{const n=(0,c.useContext)(Te);return(0,a.jsx)(Mt,{ref:t,show:!(null==n||!n.expanded),...e,renderStaticNode:!0})}));$t.displayName="NavbarOffcanvas";var Dt=$t;const Ft=W("navbar-text",{Component:"span"}),Bt=c.forwardRef(((e,t)=>{const{bsPrefix:n,expand:r,variant:o,bg:s,fixed:l,sticky:u,className:f,as:d="nav",expanded:h,onToggle:m,onSelect:v,collapseOnSelect:x,...g}=M(e,{expanded:"onToggle"}),b=p(n,"navbar"),y=(0,c.useCallback)(((...e)=>{null==v||v(...e),x&&h&&(null==m||m(!1))}),[v,x,h,m]);void 0===g.role&&"nav"!==d&&(g.role="navigation");let E=`${b}-expand`;"string"===typeof r&&(E=`${E}-${r}`);const j=(0,c.useMemo)((()=>({onToggle:()=>null==m?void 0:m(!h),bsPrefix:b,expanded:!!h,expand:r})),[b,h,r,m]);return(0,a.jsx)(Te.Provider,{value:j,children:(0,a.jsx)(S.Provider,{value:y,children:(0,a.jsx)(d,{ref:t,...g,className:i()(f,b,r&&E,o&&`${b}-${o}`,s&&`bg-${s}`,u&&`sticky-${u}`,l&&`fixed-${l}`)})})})}));Bt.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},Bt.displayName="Navbar";var It=Object.assign(Bt,{Brand:H,Collapse:_e,Offcanvas:Dt,Text:Ft,Toggle:Fe});function Wt(e){var t=e.href,n=e.exact,r=e.children,o=(0,R.useRouter)().pathname,s="";return n?o===t&&(s="active"):o.startsWith(t)&&(s="active"),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(k(),{href:t,children:(0,a.jsx)("a",{className:"nav-link ".concat(s),children:r})})})})}var At=function(){return(0,a.jsx)(It,{collapseOnSelect:!0,expand:"md",fixed:"top",id:"sideNav",bg:"light",children:(0,a.jsxs)(x,{fluid:!0,children:[(0,a.jsx)(It.Brand,{href:"/",children:"S3 Research Lab"}),(0,a.jsx)(It.Toggle,{}),(0,a.jsx)(It.Collapse,{className:"justify-content-end",children:(0,a.jsxs)("ul",{className:"navbar-nav",children:[(0,a.jsx)(Wt,{href:"/",exact:!0,children:"Home"}),(0,a.jsx)(Wt,{href:"/people",children:"People"}),(0,a.jsx)(Wt,{href:"/publications",children:"Publications"}),(0,a.jsx)(Wt,{href:"/contact-us",children:"Contact Us"})]})})]})})},Ht=(n(1752),function(){var e=function(){dataLayer.push(arguments)};window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","G-EZ36G6P3MT")});var Ut=function(){return(0,a.jsxs)("div",{children:[(0,a.jsx)("script",{src:"https://code.jquery.com/jquery-3.6.0.min.js",crossOrigin:"anonymous"}),(0,a.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",integrity:"sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p",crossOrigin:"anonymous"}),(0,a.jsx)("script",{src:"js/script.js"}),(0,a.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-HNGSCV50W9"}),(0,a.jsx)("script",{children:Ht()})]})};var Vt=function(e){var t=e.children,n=e.title,r=e.menu;return r=r||n,(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(N,{page:n}),(0,a.jsx)("header",{children:(0,a.jsx)(At,{})}),(0,a.jsx)("main",{children:(0,a.jsxs)(x,{fluid:!0,className:"pt-3 px-lg-5",children:[(0,a.jsx)("h2",{className:"pb-2",children:n}),(0,a.jsx)("hr",{className:"mt-2"}),(0,a.jsx)(b,{children:(0,a.jsx)(E,{sm:"12",children:t})})]})}),(0,a.jsx)(Ut,{})]})};function Gt(e){var t=e.Component,n=e.pageProps;return(0,a.jsx)(Vt,{children:(0,a.jsx)(t,o({},n))})}},6968:function(){},5585:function(){},6516:function(){},6706:function(){},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)},2703:function(e,t,n){"use strict";var r=n(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,s){if(s!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(387)}));var n=e.O();_N_E=n}]);