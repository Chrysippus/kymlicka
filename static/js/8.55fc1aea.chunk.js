(this.webpackJsonpkymlicka=this.webpackJsonpkymlicka||[]).push([[8],{125:function(e,t){},126:function(e,t){},127:function(e,t){},128:function(e,t){},129:function(e,t){},154:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(63),r=a(89),i=a.n(r),o=a(68),s=a(121),u=a.n(s),m=a(137),d=a.n(m),p=a(157),f=a(151),k=a(147),b=a(138),w=a(76),v=a(12),h=a(92);u.a.GlobalWorkerOptions.workerSrc=d.a;var E=function(e){var t=e.src,a=Object(v.i)(),r=parseInt(a.id),s=Object(v.g)(),m=Object(n.useState)(),d=Object(o.a)(m,2),E=d[0],y=d[1],g=Object(n.useState)(parseInt(r)||1),N=Object(o.a)(g,2),x=N[0],C=N[1],I=Object(n.useRef)(null),O=Object(n.useState)({value:parseInt(r)}),j=Object(o.a)(O,2),P=j[0],D=j[1];return Object(n.useEffect)((function(){!function(){var e,a,n,l,c,o,s,m,d;i.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:return e=u.a.getDocument(t),p.next=3,i.a.awrap(e.promise);case 3:return a=p.sent,n=r>a.numPages||r<1||!Number.isInteger(r)?window.location.href="/kymlicka/#/cv/1":r,p.next=7,i.a.awrap(a.getPage(n||1));case 7:return l=p.sent,y(a.numPages),4,c=l.getViewport({scale:4}),o=I.current,s=o.getContext("2d"),o.height=c.height,o.width=c.width,m={canvasContext:s,viewport:c},d=l.render(m),p.next=19,i.a.awrap(d.promise);case 19:case"end":return p.stop()}}))}()}),[r,x,t]),l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{className:"text-center w-100 justify-content-center"},l.a.createElement(h.a,{className:"justify-content-center sticky-top bg-white pt-2 pb-0",style:{top:48,zIndex:10}},l.a.createElement(p.a,{className:"p-0 m-0",style:{whiteSpace:"nowrap",overflow:"none"}},l.a.createElement(p.a.First,{title:"First",disabled:1===x?"disabled":null,onClick:function(e){return 1!==x?window.location.href="/kymlicka/#/cv/1":null}}),l.a.createElement(p.a.Prev,{title:"Previous",disabled:x<=1?"disabled":null,onClick:function(e){return x>1?window.location.href="/kymlicka/#/cv/"+(x-1):null}}),x>3?l.a.createElement(p.a.Ellipsis,{className:"d-none d-md-block",disabled:!0}):null,x>2?l.a.createElement(p.a.Item,{className:"d-none d-sm-block",onClick:function(e){return window.location.href="/kymlicka/#/cv/"+(x-2)}},x-2):null,x>1?l.a.createElement(p.a.Item,{className:"d-none d-sm-block",onClick:function(e){return window.location.href="/kymlicka/#/cv/"+(x-1)}},x-1):null,l.a.createElement(p.a.Item,{active:!0},x),x<E-1?l.a.createElement(p.a.Item,{className:"d-none d-sm-block",onClick:function(e){return window.location.href="/kymlicka/#/cv/"+(x+1)}},x+1):null,x<E-2?l.a.createElement(p.a.Item,{className:"d-none d-sm-block",onClick:function(e){return window.location.href="/kymlicka/#/cv/"+(x+2)}},x+2):null,x<E-3?l.a.createElement(p.a.Ellipsis,{className:"d-none d-md-block",disabled:!0}):null,l.a.createElement(p.a.Next,{title:"Next",disabled:x>E-1?"disabled":null,onClick:function(e){return window.location.href="/kymlicka/#/cv/"+(x+1)}}),l.a.createElement(p.a.Last,{title:"Last",disabled:x===E?"disabled":null,onClick:function(e){return x!==E?window.location.href="/kymlicka/#/cv/"+E:null}}),l.a.createElement(f.a,{className:"page-item",onSubmit:function(e){D({value:parseInt(e.target.value)}),C(parseInt(P.value)),s.push("/kymlicka/#/cv/"+parseInt(P.value)),e.preventDefault()}},l.a.createElement(k.a,{className:"d-inline"},l.a.createElement(b.a,{className:"pr-0 rounded-0 d-inline border-right-0",value:P.value||"",onChange:function(e){D({value:e.target.value}),e.preventDefault()},"aria-label":"Go to page:",style:{maxWidth:"50px",borderColor:"#dee2e6"},onInput:P.value.length>2?D({value:parseInt(P.value.slice(0,2))}):null,required:!0,"aria-describedby":"inputGroup-sizing-sm",placeholder:"   ",pattern:"\\d+",min:1,max:E,type:"number",title:"Go to page"}),l.a.createElement(w.a,{title:"Go to page",className:"d-inline rounded-0 border-right-0 border-left-0 pl-1 pr-2",variant:"white",style:{verticalAlign:"top",border:"1px solid #dee2e6"},type:"submit"},"Go"))),l.a.createElement(p.a.Item,{as:"a",title:"View / Download PDF",href:"/kymlicka/contents/docs/cv-web.pdf"},"\u2913"))),l.a.createElement("canvas",{id:"cv",ref:I,width:"100%",className:"mx-auto w-100"})))};E.defaultProps={src:"/kymlicka/contents/docs/cv-web.pdf",allPages:E.allPages};var y=E,g=a(27);function N(){return l.a.createElement(c.a,{className:"w-100 text-center"},l.a.createElement(g.a,null,l.a.createElement("title",null,"CV - Will Kymlicka's Website"),l.a.createElement("meta",{name:"description",content:"Will Kymlicka's Curriculum Vitae in PDF and browsable format."})),l.a.createElement(y,{src:"/kymlicka/contents/docs/CV-web.pdf"}))}a.d(t,"default",(function(){return N}))},73:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=73}}]);
//# sourceMappingURL=8.55fc1aea.chunk.js.map