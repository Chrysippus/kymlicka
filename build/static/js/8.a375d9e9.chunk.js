(this.webpackJsonpkymlicka=this.webpackJsonpkymlicka||[]).push([[8],{437:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(441),r=n(0),i=n.n(r),s=n(442),o=n(211),c=n(500);function l(e){var t=Object(s.a)(e||null),n=Object(a.a)(t,1)[0],r=n.data,l=n.loading,u=n.error;return l&&i.a.createElement(o.a,null),u&&i.a.createElement(c.a,{variant:"danger"},"Something went wrong"),r||null}},438:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(439),r=n(0),i=n.n(r),s=n(40),o=function(e){var t=e.children,n=Object(a.a)(e,["children"]);return n.href.startsWith("http")||n.href.startsWith("www")||n.href.includes("@")?i.a.createElement("a",n,t):i.a.createElement(s.Link,{to:n.href},t)}},439:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return a}))},499:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(437),s=n(438),o=n(440),c=n(2),l=n(4),u=n(21),d=n(15),h=n.n(d),p=n(77),v=n(137),m=n(80),f=n(135),x=Object(f.a)("carousel-caption",{Component:"div"}),b=Object(f.a)("carousel-item");var g=n(133),y=n(17),S=n(138),I=function(e){return r.a.Children.toArray(e).filter(r.a.isValidElement).length},E={slide:!0,fade:!1,interval:5e3,keyboard:!0,pauseOnHover:!0,wrap:!0,indicators:!0,controls:!0,activeIndex:0,prevIcon:r.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:r.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next",touch:!0},O=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={prevClasses:"",currentClasses:"active",touchStartX:0},t.isUnmounted=!1,t.carousel=r.a.createRef(),t.handleTouchStart=function(e){t.setState({touchStartX:e.changedTouches[0].screenX})},t.handleTouchEnd=function(e){Math.abs(e.changedTouches[0].screenX-t.state.touchStartX)<40||(e.changedTouches[0].screenX<t.state.touchStartX?t.handleNext(e):t.handlePrev(e))},t.handleSlideEnd=function(){var e=t._pendingIndex;t._isSliding=!1,t._pendingIndex=null,null!=e?t.to(e):t.cycle()},t.handleMouseOut=function(){t.cycle()},t.handleMouseOver=function(){t.props.pauseOnHover&&t.pause()},t.handleKeyDown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":e.preventDefault(),t.handlePrev(e);break;case"ArrowRight":e.preventDefault(),t.handleNext(e)}},t.handleNextWhenVisible=function(){t.isUnmounted||document.hidden||"hidden"===Object(p.a)(t.carousel.current,"visibility")||t.handleNext()},t.handleNext=function(e){if(!t._isSliding){var n=t.props,a=n.wrap,r=n.activeIndex+1;if(r>I(t.props.children)-1){if(!a)return;r=0}t.select(r,e,"next")}},t.handlePrev=function(e){if(!t._isSliding){var n=t.props,a=n.wrap,r=n.activeIndex-1;if(r<0){if(!a)return;r=I(t.props.children)-1}t.select(r,e,"prev")}},t}Object(u.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.cycle()},t.getDerivedStateFromProps=function(e,t){var n=t.activeIndex;if(e.activeIndex!==n){var a=I(e.children)-1,r=Math.max(0,Math.min(e.activeIndex,a));return{direction:0===r&&n>=a||n<=r?"next":"prev",previousActiveIndex:n,activeIndex:r}}return null},n.componentDidUpdate=function(e,t){var n=this,a=this.props,r=a.bsPrefix,i=a.slide,s=a.onSlideEnd;if(i&&this.state.activeIndex!==t.activeIndex&&!this._isSliding){var o,c,l=this.state,u=l.activeIndex,d=l.direction;"next"===d?(o=r+"-item-next",c=r+"-item-left"):"prev"===d&&(o=r+"-item-prev",c=r+"-item-right"),this._isSliding=!0,this.pause(),this.safeSetState({prevClasses:"active",currentClasses:o},(function(){var e=n.carousel.current.children[u];Object(S.a)(e),n.safeSetState({prevClasses:h()("active",c),currentClasses:h()(o,c)},(function(){return Object(v.a)(e,(function(){n.safeSetState({prevClasses:"",currentClasses:"active"},n.handleSlideEnd),s&&s()}))}))}))}},n.componentWillUnmount=function(){clearTimeout(this.timeout),this.isUnmounted=!0},n.safeSetState=function(e,t){var n=this;this.isUnmounted||this.setState(e,(function(){return!n.isUnmounted&&t()}))},n.pause=function(){this._isPaused=!0,clearInterval(this._interval),this._interval=null},n.cycle=function(){this._isPaused=!1,clearInterval(this._interval),this._interval=null,this.props.interval&&!this._isPaused&&(this._interval=setInterval(document.visibilityState?this.handleNextWhenVisible:this.handleNext,this.props.interval))},n.to=function(e,t){var n=this.props.children;e<0||e>I(n)-1||(this._isSliding?this._pendingIndex=e:this.select(e,t))},n.select=function(e,t,n){var a=this;clearTimeout(this.selectThrottle),t&&t.persist&&t.persist(),this.selectThrottle=setTimeout((function(){clearTimeout(a.timeout);var r=a.props,i=r.activeIndex,s=r.onSelect;e===i||a._isSliding||a.isUnmounted||s(e,n||(e<i?"prev":"next"),t)}),50)},n.renderControls=function(e){var t=this.props.bsPrefix,n=e.wrap,a=e.children,i=e.activeIndex,s=e.prevIcon,o=e.nextIcon,c=e.prevLabel,l=e.nextLabel,u=I(a);return[(n||0!==i)&&r.a.createElement(g.a,{key:"prev",className:t+"-control-prev",onClick:this.handlePrev},s,c&&r.a.createElement("span",{className:"sr-only"},c)),(n||i!==u-1)&&r.a.createElement(g.a,{key:"next",className:t+"-control-next",onClick:this.handleNext},o,l&&r.a.createElement("span",{className:"sr-only"},l))]},n.renderIndicators=function(e,t){var n=this,a=this.props.bsPrefix,i=[];return function(e,t){var n=0;r.a.Children.forEach(e,(function(e){r.a.isValidElement(e)&&t(e,n++)}))}(e,(function(e,a){i.push(r.a.createElement("li",{key:a,className:a===t?"active":null,onClick:function(e){return n.to(a,e)}})," ")})),r.a.createElement("ol",{className:a+"-indicators"},i)},n.render=function(){var e=this.props,t=e.as,n=void 0===t?"div":t,i=e.bsPrefix,s=e.slide,o=e.fade,u=e.indicators,d=e.controls,p=e.wrap,v=e.touch,m=e.prevIcon,f=e.prevLabel,x=e.nextIcon,b=e.nextLabel,g=e.className,y=e.children,S=e.keyboard,I=(e.activeIndex,e.pauseOnHover,e.interval,e.onSelect,e.onSlideEnd,Object(l.a)(e,["as","bsPrefix","slide","fade","indicators","controls","wrap","touch","prevIcon","prevLabel","nextIcon","nextLabel","className","children","keyboard","activeIndex","pauseOnHover","interval","onSelect","onSlideEnd"])),E=this.state,O=E.activeIndex,w=E.previousActiveIndex,C=E.prevClasses,k=E.currentClasses;return r.a.createElement(n,Object(c.a)({onTouchStart:v?this.handleTouchStart:void 0,onTouchEnd:v?this.handleTouchEnd:void 0},I,{className:h()(g,i,s&&"slide",o&&i+"-fade"),onKeyDown:S?this.handleKeyDown:void 0,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut}),u&&this.renderIndicators(y,O),r.a.createElement("div",{className:i+"-inner",ref:this.carousel},function(e,t){var n=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?t(e,n++):e}))}(y,(function(e,t){var n=t===O,r=t===w;return Object(a.cloneElement)(e,{className:h()(e.props.className,n&&k,r&&C)})}))),d&&this.renderControls({wrap:p,children:y,activeIndex:O,prevIcon:m,prevLabel:f,nextIcon:x,nextLabel:b}))},t}(r.a.Component);O.defaultProps=E;var w=Object(y.a)(Object(m.a)(O,{activeIndex:"onSelect"}),"carousel");w.Caption=x,w.Item=b;var C=w,k=n(433),N=n(134);n.d(t,"default",(function(){return P}));var j="/contents/images/books/zoopolis-carousel/zoopolis-";function P(){for(var e=Object(i.a)("/contents/home.md"),t=Object(i.a)("/contents/images/books/zoopolis-carousel/FileList.txt"),n=[],a=1;a<=t;a++)n[a]=r.a.createElement(C.Item,{key:a},r.a.createElement("picture",null,r.a.createElement("source",{srcSet:j+a+".webp",type:"image/webp"}),r.a.createElement("source",{srcSet:j+a+".png",type:"image/jpeg"}),r.a.createElement("img",{loading:"lazy",src:j+a+".png",width:"301",className:"shadow-lg mb-5 bg-white",alt:"Book Cover"})));var c={overrides:{h1:{props:{className:"d-none"}},a:{component:s.a,props:{target:"_blank",rel:"noopener noreferrer"}}}};return r.a.createElement(k.a,null,r.a.createElement(N.a,null,r.a.createElement("title",null,"Home - Will Kymlicka"),r.a.createElement("meta",{name:"description",content:"Will Kymlicka is the Canada Research Chair in Political Philosophy in the Philosophy Department at Queen's University in Kingston, Canada, where he has taught since 1998. His research interests focus on issues of democracy and diversity, and in particular on models of citizenship and social justice within multicultural societies. He has published eight books and over 200 articles, which have been translated into 34 languages, and has received several awards, most recently, Honorary Doctorates from the University of Copenhagen in 2013 and KU Leuven in 2014, and the 2019 Gold Medal from the Social Sciences and Humanities Research Council of Canada."})),r.a.createElement(C,{className:"float-sm-left mx-auto mr-sm-4 mb-2",style:{maxWidth:"301px"}},n),r.a.createElement(o.a,{options:c},""+(e||"")))}}}]);
//# sourceMappingURL=8.a375d9e9.chunk.js.map