(this.webpackJsonpkymlicka=this.webpackJsonpkymlicka||[]).push([[5],{114:function(e,t,a){"use strict";var r=a(1),n=a(2),l=a(4),s=a.n(l),i=a(0),c=a.n(i),o=a(5),u=c.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,i=e.fluid,u=e.rounded,m=e.roundedCircle,p=e.thumbnail,d=Object(n.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);a=Object(o.b)(a,"img");var b=s()(i&&a+"-fluid",u&&"rounded",m&&"rounded-circle",p&&a+"-thumbnail");return c.a.createElement("img",Object(r.a)({ref:t},d,{className:s()(l,b)}))}));u.displayName="Image",u.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.a=u},121:function(e,t,a){"use strict";var r=a(1),n=a(2),l=a(4),s=a.n(l),i=a(0),c=a.n(i),o=a(5),u=a(75),m=c.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,i=e.listProps,u=e.children,m=e.label,p=e.as,d=void 0===p?"nav":p,b=Object(n.a)(e,["bsPrefix","className","listProps","children","label","as"]),f=Object(o.b)(a,"breadcrumb");return c.a.createElement(d,Object(r.a)({"aria-label":m,className:l,ref:t},b),c.a.createElement("ol",Object(r.a)({},i,{className:s()(f,i.className)}),u))}));m.displayName="Breadcrumb",m.defaultProps={label:"breadcrumb",listProps:{}},m.Item=u.a,t.a=m},122:function(e,t,a){"use strict";var r=a(1),n=a(2),l=a(4),s=a.n(l),i=a(0),c=a.n(i),o=a(5),u=c.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.noGutters,i=e.as,u=void 0===i?"div":i,m=e.className,p=Object(n.a)(e,["bsPrefix","noGutters","as","className"]),d=Object(o.b)(a,"row");return c.a.createElement(u,Object(r.a)({ref:t},p,{className:s()(m,d,l&&"no-gutters")}))}));u.defaultProps={noGutters:!1},t.a=u},130:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(69),s=a(73),i=a(70),c=a(121),o=a(75),u=a(65),m=a(122),p=a(1),d=a(2),b=a(4),f=a.n(b),v=a(5),h=["xl","lg","md","sm","xs"],g=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,l=e.as,s=void 0===l?"div":l,i=Object(d.a)(e,["bsPrefix","className","as"]),c=Object(v.b)(a,"col"),o=[],u=[];return h.forEach((function(e){var t,a,r,n=i[e];if(delete i[e],null!=n&&"object"===typeof n){var l=n.span;t=void 0===l||l,a=n.offset,r=n.order}else t=n;var s="xs"!==e?"-"+e:"";null!=t&&o.push(!0===t?""+c+s:""+c+s+"-"+t),null!=r&&u.push("order"+s+"-"+r),null!=a&&u.push("offset"+s+"-"+a)})),o.length||o.push(c),n.a.createElement(s,Object(p.a)({},i,{ref:t,className:f.a.apply(void 0,[r].concat(o,u))}))}));g.displayName="Col";var E=g,w=a(12),O=a(114),j=function(e){return n.a.createElement("picture",{onError:function(e){return e.target.style.display="none"}},n.a.createElement("source",{width:"301",loading:"lazy",srcSet:e.ImgURL+".webp",type:"image/webp"}),n.a.createElement("source",{width:"301",loading:"lazy",srcSet:e.ImgURL+".jpg",type:"image/jpeg"}),n.a.createElement(O.a,{loading:"lazy",src:e.ImgURL+".jpg",className:"shadow-lg bg-white float-left mr-4",style:{width:"301px"},width:"301",alt:e.id+": cover"}))},y=a(74),N=a(76),C=a(27);function x(){var e,t,a,r=Object(w.h)(),p=Object(w.g)(),d=Object(l.a)("/contents/"+[r.id?"publications/"+r.id:"publications"]+[r.sub?"/"+r.sub:null]+".md"),b=d?d.match(/# (.*)/)[1]:"";e="/contents/images/books/lg/"+[p.pathname.includes("books")?"books/":"edited/"]+[p.pathname.split("\\")[1]?p.pathname.split("\\")[1]:p.pathname.split("/")[3]],t={overrides:{h2:{props:{className:"small"}},BCS:{component:c.a},bc:{component:o.a},tr:{props:{className:"w-100"}},a:{component:s.a,props:{target:"_blank",rel:"noopener"}}}},a=e.includes("broadview-anthology-social")?function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(j,{id:"broadview-anthology-social",ImgURL:e+"-v1"}),n.a.createElement(j,{id:"broadview-anthology-social",ImgURL:e+"-v2"}))}:function(){return n.a.createElement(j,{id:r.id,ImgURL:e})},(e.includes("undefined")||e.split("/")[6].length<1)&&(a=function(){return n.a.createElement(n.a.Fragment,null)});var f=Object(y.a)(r,p,b),v=f.BCLevel2,h=f.BCLevel3,g=f.BCLevel4,O=Object(N.a)(p,v,h,g),x=p.pathname.split(/[/\\-]/);return x=x.length>=4?["",x[1].toUpperCase()[0]+x[1].substr(1),x[2].toUpperCase()[0]+x[2].substr(1)+" "+x[3].toUpperCase()[0]+x[3].substr(1)]:["",x[1]?x[1].toUpperCase()[0]+x[1].substr(1):"",x[2]?x[2].toUpperCase()[0]+x[2].substr(1):"",x[3]?x[3].toUpperCase()[0]+x[3].substr(1):""],n.a.createElement(u.a,null,n.a.createElement(C.a,null,n.a.createElement("title",null,b+" - ",x[3]&&!b.includes(x[3].substr(0,3))?x[3]+" - ":"",x[2]&&!b.includes(x[2].substr(0,3))?x[2]+" - ":"",x[1]&&!b.includes(x[1].substr(0,3))?x[1]+" - ":"","Will Kymlicka"),n.a.createElement("meta",{name:"description",content:"Listings and detailed content of Will Kymlicka's publications. \r Sections include: Books, Edited Volumes, Articles / Chapters, Interviews, \r Reviews, Related, Art / Travel, Translated, and Citations."})),n.a.createElement(m.a,{className:"sticky-top bg-white",style:{top:"45px",zIndex:10}},n.a.createElement(O,null)),n.a.createElement(m.a,{className:"pt-5"},n.a.createElement(E,null,n.a.createElement(a,null),n.a.createElement(i.a,{options:t},""+(d||"")))))}a.d(t,"default",(function(){return x}))},69:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(71),n=a(0),l=a.n(n),s=a(72),i=a(42),c=a(129);function o(e){var t=Object(s.a)(e||null),a=Object(r.a)(t,1)[0],n=a.data,o=a.loading,u=a.error;return o&&l.a.createElement(i.a,null),u&&l.a.createElement(c.a,{variant:"danger"},"Something went wrong"),n||null}},73:function(e,t,a){"use strict";function r(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var n=a(0),l=a.n(n),s=a(9);a.d(t,"a",(function(){return i}));var i=function(e){var t=e.children,a=r(e,["children"]);return a.href.startsWith("http")||a.href.startsWith("www")||a.href.includes("@")?l.a.createElement("a",a,t):l.a.createElement(s.b,{to:a.href},t)}},74:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(0),n=a.n(r),l=a(75),s=a(9);function i(e,t,a){var r=t.pathname.replace("\\","/"),i=r.split("/").length;return{BCLevel2:function(){return r?2!==i?n.a.createElement(s.b,{to:"/"+r.split("/")[1],className:"breadcrumb-item"},r.split("/")[1][0].toUpperCase()+r.split("/")[1].slice(1)):n.a.createElement(l.a,{active:!0},r.split("/")[1][0].toUpperCase()+r.split("/")[1].slice(1)):null},BCLevel3:function(){return r?3!==i&&a?n.a.createElement(s.b,{to:"/"+r.split("/")[1]+"/"+r.split("/")[2],className:"breadcrumb-item"},r.includes("edited-volumes")?r.split("/")[2].split("-")[0][0].toUpperCase()+r.split("/")[2].split("-")[0].slice(1)+" "+r.split("/")[2].split("-")[1][0].toUpperCase()+r.split("/")[2].split("-")[1].slice(1):r.split("/")[2][0].toUpperCase()+r.split("/")[2].slice(1)):n.a.createElement(l.a,{active:!0},a||(void 0!==r.split("/")[2]?r.split("/")[2].replace(/-/g," "):null)):null},BCLevel4:function(t){return r&&(4===i||5===i)?n.a.createElement(n.a.Fragment,null,a?n.a.createElement(l.a,{active:!0,style:{maxWidth:"33vw",display:"inline-block",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",OTextOverflow:"ellipsis",verticalAlign:"bottom",MSTextOverflow:"ellipsis"}},a):n.a.createElement(l.a,{active:!0},e.year),e.no?n.a.createElement(l.a,{active:!0},e.month):null):null}}}},75:function(e,t,a){"use strict";var r=a(1),n=a(2),l=a(4),s=a.n(l),i=a(0),c=a.n(i),o=a(26),u=a(5),m=c.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.active,i=e.className,m=e.as,p=void 0===m?"li":m,d=Object(n.a)(e,["bsPrefix","active","className","as"]),b=Object(u.b)(a,"breadcrumb-item"),f=d.href,v=d.title,h=d.target,g=Object(n.a)(d,["href","title","target"]),E={href:f,title:v,target:h};return c.a.createElement(p,{ref:t,className:s()(b,i,{active:l}),"aria-current":l?"page":void 0},l?c.a.createElement("span",Object(r.a)({},g,{className:s()({active:l})})):c.a.createElement(o.a,Object(r.a)({},g,E)))}));m.displayName="BreadcrumbItem",m.defaultProps={active:!1},t.a=m},76:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(0),n=a.n(r),l=a(121),s=a(9);function i(e,t,a,r){return function(){return e.pathname.split("/").length>2?n.a.createElement(l.a,{bsPrefix:"breadcrumb mb-0 pb-0 bg-transparent"},n.a.createElement(s.b,{className:"breadcrumb-item",to:"/"},"Home"),n.a.createElement(t,null),n.a.createElement(a,null),n.a.createElement(r,null)):null}}}}]);
//# sourceMappingURL=5.da6b1ff2.chunk.js.map