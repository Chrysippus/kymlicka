(this.webpackJsonpkymlicka=this.webpackJsonpkymlicka||[]).push([[5],{437:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(441),r=a(0),l=a.n(r),i=a(442),o=a(211),c=a(500);function s(e){var t=Object(i.a)(e||null),a=Object(n.a)(t,1)[0],r=a.data,s=a.loading,u=a.error;return s&&l.a.createElement(o.a,null),u&&l.a.createElement(c.a,{variant:"danger"},"Something went wrong"),r||null}},438:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(439),r=a(0),l=a.n(r),i=a(40),o=function(e){var t=e.children,a=Object(n.a)(e,["children"]);return a.href.startsWith("http")||a.href.startsWith("www")||a.href.includes("@")?l.a.createElement("a",a,t):l.a.createElement(i.Link,{to:a.href},t)}},439:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,"a",(function(){return n}))},443:function(e,t,a){"use strict";t.__esModule=!0,t.LinkContainer=t.IndexLinkContainer=void 0;var n=l(a(446)),r=l(a(444));function l(e){return e&&e.__esModule?e:{default:e}}t.IndexLinkContainer=n.default,t.LinkContainer=r.default},444:function(e,t,a){"use strict";t.__esModule=!0,t.LinkContainer=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=a(0),i=s(l),o=s(a(6)),c=a(40);function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var p=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},d=t.LinkContainer=function(e){function t(){var a,n;u(this,t);for(var r=arguments.length,l=Array(r),i=0;i<r;i++)l[i]=arguments[i];return a=n=f(this,e.call.apply(e,[this].concat(l))),n.handleClick=function(e){var t=n.props,a=t.children,r=t.onClick;if(a.props.onClick&&a.props.onClick(e),r&&r(e),!e.defaultPrevented&&0===e.button&&!p(e)){e.preventDefault();var l=n.props,i=l.replace,o=l.to,c=l.history;i?c.replace(o):c.push(o)}},f(n,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.history,l=(t.location,t.match,t.staticContext,t.children),o=(t.replace,t.to),s=t.exact,u=t.strict,f=t.activeClassName,p=t.className,d=t.activeStyle,m=t.style,b=t.isActive,h=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["history","location","match","staticContext","children","replace","to","exact","strict","activeClassName","className","activeStyle","style","isActive"]),v=a.createHref("string"===typeof o?{pathname:o}:o),y=i.default.Children.only(l);return i.default.createElement(c.Route,{path:"object"===("undefined"===typeof o?"undefined":r(o))?o.pathname:o,exact:s,strict:u,children:function(t){var a=t.location,r=t.match,l=!!(b?b(r,a):r);return i.default.cloneElement(y,n({},h,{className:[p,y.props.className,l?f:null].join(" ").trim(),style:l?n({},m,d):m,href:v,onClick:e.handleClick}))}})},t}(l.Component);d.propTypes={history:o.default.shape({push:o.default.func.isRequired,replace:o.default.func.isRequired,createHref:o.default.func.isRequired}).isRequired,location:o.default.object,match:o.default.object,staticContext:o.default.object,children:o.default.element.isRequired,onClick:o.default.func,replace:o.default.bool,to:o.default.oneOfType([o.default.string,o.default.object]).isRequired,exact:o.default.bool,strict:o.default.bool,className:o.default.string,activeClassName:o.default.string,style:o.default.object,activeStyle:o.default.object,isActive:o.default.func},d.defaultProps={replace:!1,exact:!1,strict:!1,activeClassName:"active"},t.default=(0,c.withRouter)(d)},445:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),l=a(447),i=a(443);function o(e,t,a){var n=t.pathname.replace("\\","/"),o=n.split("/").length;return{BCLevel2:function(){return n?2!==o?r.a.createElement(i.LinkContainer,{to:"/"+n.split("/")[1]},r.a.createElement(l.a,null,n.split("/")[1][0].toUpperCase()+n.split("/")[1].slice(1))):r.a.createElement(l.a,{active:!0},n.split("/")[1][0].toUpperCase()+n.split("/")[1].slice(1)):null},BCLevel3:function(){return n?3!==o&&a?r.a.createElement(i.LinkContainer,{to:"/"+n.split("/")[1]+"/"+n.split("/")[2]},r.a.createElement(l.a,null,n.includes("edited-volumes")?n.split("/")[2].split("-")[0][0].toUpperCase()+n.split("/")[2].split("-")[0].slice(1)+" "+n.split("/")[2].split("-")[1][0].toUpperCase()+n.split("/")[2].split("-")[1].slice(1):n.split("/")[2][0].toUpperCase()+n.split("/")[2].slice(1))):r.a.createElement(l.a,{active:!0},a||(void 0!==n.split("/")[2]?n.split("/")[2].replace(/-/g," "):null)):null},BCLevel4:function(t){return n&&(4===o||5===o)?r.a.createElement(r.a.Fragment,null,a?r.a.createElement(l.a,{active:!0,style:{maxWidth:"25vw",display:"inline-block",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",OTextOverflow:"ellipsis",verticalAlign:"bottom",MSTextOverflow:"ellipsis"}},a):r.a.createElement(l.a,{active:!0},e.year),e.no?r.a.createElement(l.a,{active:!0},e.month):null):null}}}},446:function(e,t,a){"use strict";t.__esModule=!0,t.IndexLinkContainer=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=o(a(0)),l=a(40),i=o(a(444));function o(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var u=t.IndexLinkContainer=function(e){function t(){return c(this,t),s(this,e.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return r.default.createElement(i.default,n({},this.props,{exact:!0}))},t}(r.default.Component);t.default=(0,l.withRouter)(u)},447:function(e,t,a){"use strict";var n=a(2),r=a(4),l=a(15),i=a.n(l),o=a(0),c=a.n(o),s=a(133),u=a(17),f=c.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.active,o=e.className,f=e.as,p=void 0===f?"li":f,d=Object(r.a)(e,["bsPrefix","active","className","as"]),m=Object(u.b)(a,"breadcrumb-item"),b=d.href,h=d.title,v=d.target,y=Object(r.a)(d,["href","title","target"]),g={href:b,title:h,target:v};return c.a.createElement(p,{ref:t,className:i()(m,o,{active:l}),"aria-current":l?"page":void 0},l?c.a.createElement("span",Object(n.a)({},y,{className:i()({active:l})})):c.a.createElement(s.a,Object(n.a)({},y,g)))}));f.displayName="BreadcrumbItem",f.defaultProps={active:!1},t.a=f},448:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n),l=a(492),i=a(447),o=a(443);function c(e,t,a,n){return function(){return e.pathname.split("/").length>2?r.a.createElement(l.a,{bsPrefix:"breadcrumb mb-0 pb-0 bg-transparent"},r.a.createElement(o.LinkContainer,{to:"/"},r.a.createElement(i.a,null,"Home")),r.a.createElement(t,null),r.a.createElement(a,null),r.a.createElement(n,null)):null}}},485:function(e,t,a){"use strict";var n=a(2),r=a(4),l=a(15),i=a.n(l),o=a(0),c=a.n(o),s=a(17),u=c.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,o=e.fluid,u=e.rounded,f=e.roundedCircle,p=e.thumbnail,d=Object(r.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);a=Object(s.b)(a,"img");var m=i()(o&&a+"-fluid",u&&"rounded",f&&"rounded-circle",p&&a+"-thumbnail");return c.a.createElement("img",Object(n.a)({ref:t},d,{className:i()(l,m)}))}));u.displayName="Image",u.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.a=u},492:function(e,t,a){"use strict";var n=a(2),r=a(4),l=a(15),i=a.n(l),o=a(0),c=a.n(o),s=a(17),u=a(447),f=c.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,o=e.listProps,u=e.children,f=e.label,p=e.as,d=void 0===p?"nav":p,m=Object(r.a)(e,["bsPrefix","className","listProps","children","label","as"]),b=Object(s.b)(a,"breadcrumb");return c.a.createElement(d,Object(n.a)({"aria-label":f,className:l,ref:t},m),c.a.createElement("ol",Object(n.a)({},o,{className:i()(b,o.className)}),u))}));f.displayName="Breadcrumb",f.defaultProps={label:"breadcrumb",listProps:{}},f.Item=u.a,t.a=f},493:function(e,t,a){"use strict";var n=a(2),r=a(4),l=a(15),i=a.n(l),o=a(0),c=a.n(o),s=a(17),u=c.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.noGutters,o=e.as,u=void 0===o?"div":o,f=e.className,p=Object(r.a)(e,["bsPrefix","noGutters","as","className"]),d=Object(s.b)(a,"row");return c.a.createElement(u,Object(n.a)({ref:t},p,{className:i()(f,d,l&&"no-gutters")}))}));u.defaultProps={noGutters:!1},t.a=u},501:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(437),i=a(438),o=a(440),c=a(433),s=a(493),u=a(2),f=a(4),p=a(15),d=a.n(p),m=a(17),b=["xl","lg","md","sm","xs"],h=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,l=e.as,i=void 0===l?"div":l,o=Object(f.a)(e,["bsPrefix","className","as"]),c=Object(m.b)(a,"col"),s=[],p=[];return b.forEach((function(e){var t,a,n,r=o[e];if(delete o[e],null!=r&&"object"===typeof r){var l=r.span;t=void 0===l||l,a=r.offset,n=r.order}else t=r;var i="xs"!==e?"-"+e:"";null!=t&&s.push(!0===t?""+c+i:""+c+i+"-"+t),null!=n&&p.push("order"+i+"-"+n),null!=a&&p.push("offset"+i+"-"+a)})),s.length||s.push(c),r.a.createElement(i,Object(u.a)({},o,{ref:t,className:d.a.apply(void 0,[n].concat(s,p))}))}));h.displayName="Col";var v=h,y=a(52),g=a(485),E=function(e){return r.a.createElement("picture",{onError:function(e){return e.target.style.display="none"}},r.a.createElement("source",{srcSet:e.ImgURL+".webp",type:"image/webp"}),r.a.createElement("source",{srcSet:e.ImgURL+".jpg",type:"image/jpeg"}),r.a.createElement(g.a,{loading:"lazy",src:e.ImgURL+".jpg",className:"shadow-lg bg-white float-left mr-4 mt-3",style:{width:"301px"},width:"301",alt:e.id+": cover"}))},O=a(445),j=a(448),w=a(134);function C(){var e,t,a,n=Object(y.m)(),u=Object(y.l)(),f=Object(l.a)("/contents/"+[n.id?"publications/"+n.id:"publications"]+[n.sub?"/"+n.sub:null]+".md"),p=f?f.match(/# (.*)/)[1]:"";e="/contents/images/books/lg/"+[u.pathname.includes("books")?"books/":"edited/"]+[u.pathname.split("\\")[1]?u.pathname.split("\\")[1]:u.pathname.split("/")[3]],t={overrides:{h2:{props:{className:"small"}},tr:{props:{className:"w-100"}},a:{component:i.a,props:{target:"_blank",rel:"noopener noreferrer"}}}},a=e.includes("broadview-anthology-social")?function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{id:"broadview-anthology-social",ImgURL:e+"-v1"}),r.a.createElement(E,{id:"broadview-anthology-social",ImgURL:e+"-v2"}))}:function(){return r.a.createElement(E,{id:n.id,ImgURL:e})},(e.includes("undefined")||e.split("/")[6].length<1)&&(a=function(){return r.a.createElement(r.a.Fragment,null)}),u.pathname="/"===u.pathname[u.pathname.length-1]?u.pathname.substr(0,u.pathname.length-1):u.pathname;var d=Object(O.a)(n,u,p),m=d.BCLevel2,b=d.BCLevel3,h=d.BCLevel4,g=Object(j.a)(u,m,b,h),C=u.pathname.split(/[/\\-]/);C=C.length>=4?["",C[1].toUpperCase()[0]+C[1].substr(1),C[2].toUpperCase()[0]+C[2].substr(1)+" "+C[3].toUpperCase()[0]+C[3].substr(1)]:["",C[1]?C[1].toUpperCase()[0]+C[1].substr(1):"",C[2]?C[2].toUpperCase()[0]+C[2].substr(1):"",C[3]?C[3].toUpperCase()[0]+C[3].substr(1):""];var x=r.a.createElement("title",null,p+" - ",C[3]&&!p.includes(C[3].substr(0,3))?C[3]+" - ":"",C[2]&&!p.includes(C[2].substr(0,3))?C[2]+" - ":"",C[1]&&!p.includes(C[1].substr(0,3))?C[1]+" - ":"","Will Kymlicka");return r.a.createElement(c.a,null,r.a.createElement(w.a,null,x,r.a.createElement("meta",{name:"description",content:"Listings and detailed content of Will Kymlicka's publications. \r Sections include: Books, Edited Volumes, Articles / Chapters, Interviews, \r Reviews, Related, Art / Travel, Translated, and Citations."})),r.a.createElement(s.a,{className:"sticky-top bg-white",style:{top:"45px",zIndex:10}},r.a.createElement(g,null)),r.a.createElement(s.a,null,r.a.createElement(v,null,r.a.createElement(a,null),r.a.createElement(o.a,{options:t},""+(f||"")))))}a.d(t,"default",(function(){return C}))}}]);
//# sourceMappingURL=5.dcde2ac7.chunk.js.map