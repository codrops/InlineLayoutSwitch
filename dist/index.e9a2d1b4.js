var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},i=t.parcelRequiref540;null==i&&((i=function(t){if(t in e)return e[t].exports;if(t in n){var i=n[t];delete n[t];var r={id:t,exports:{}};return e[t]=r,i.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){n[t]=e},t.parcelRequiref540=i);var r=i("5IQP4"),s=i("1oYLf");class a{isCurrent(){return this.DOM.el.classList.contains("content__item--current")}constructor(t){var e,n,i;i={el:null,back:null,number:null,title:null},(n="DOM")in(e=this)?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,this.DOM.el=t,this.DOM.back=this.DOM.el.querySelector(".back"),this.DOM.number=this.DOM.el.querySelector(".number > .oh__inner"),this.DOM.title=this.DOM.el.querySelector(".title > .oh__inner")}}
/*!
 * Flip 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * matrix 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var o,l,u,c,h,p,f,d,m,g="transform",y=g+"Origin",v=function(t){var e=t.ownerDocument||t;!(g in t.style)&&"msTransform"in t.style&&(y=(g="msTransform")+"Origin");for(;e.parentNode&&(e=e.parentNode););if(l=window,f=new L,e){o=e,u=e.documentElement,c=e.body,(d=o.createElementNS("http://www.w3.org/2000/svg","g")).style.transform="none";var n=e.createElement("div"),i=e.createElement("div");c.appendChild(n),n.appendChild(i),n.style.position="static",n.style[g]="translate3d(0,0,1px)",m=i.offsetParent!==n,c.removeChild(n)}return e},b=[],x=[],w=function(){return l.pageYOffset||o.scrollTop||u.scrollTop||c.scrollTop||0},S=function(){return l.pageXOffset||o.scrollLeft||u.scrollLeft||c.scrollLeft||0},C=function(t){return t.ownerSVGElement||("svg"===(t.tagName+"").toLowerCase()?t:null)},k=function t(e){return"fixed"===l.getComputedStyle(e).position||((e=e.parentNode)&&1===e.nodeType?t(e):void 0)},O=function t(e,n){if(e.parentNode&&(o||v(e))){var i=C(e),r=i?i.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",s=i?n?"rect":"g":"div",a=2!==n?0:100,l=3===n?100:0,u="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",c=o.createElementNS?o.createElementNS(r.replace(/^https/,"http"),s):o.createElement(s);return n&&(i?(p||(p=t(e)),c.setAttribute("width",.01),c.setAttribute("height",.01),c.setAttribute("transform","translate("+a+","+l+")"),p.appendChild(c)):(h||((h=t(e)).style.cssText=u),c.style.cssText=u+"width:0.1px;height:0.1px;top:"+l+"px;left:"+a+"px",h.appendChild(c))),c}throw"Need document and parent."},E=function(t){var e,n=t.getCTM();return n||(e=t.style[g],t.style[g]="none",t.appendChild(d),n=d.getCTM(),t.removeChild(d),e?t.style[g]=e:t.style.removeProperty(g.replace(/([A-Z])/g,"-$1").toLowerCase())),n||f.clone()},M=function(t,e){var n,i,r,s,a,o,u=C(t),c=t===u,d=u?b:x,v=t.parentNode;if(t===l)return t;if(d.length||d.push(O(t,1),O(t,2),O(t,3)),n=u?p:h,u)c?(s=-(r=E(t)).e/r.a,a=-r.f/r.d,i=f):t.getBBox?(r=t.getBBox(),s=(i=(i=t.transform?t.transform.baseVal:{}).numberOfItems?i.numberOfItems>1?function(t){for(var e=new L,n=0;n<t.numberOfItems;n++)e.multiply(t.getItem(n).matrix);return e}(i):i.getItem(0).matrix:f).a*r.x+i.c*r.y,a=i.b*r.x+i.d*r.y):(i=new L,s=a=0),e&&"g"===t.tagName.toLowerCase()&&(s=a=0),(c?u:v).appendChild(n),n.setAttribute("transform","matrix("+i.a+","+i.b+","+i.c+","+i.d+","+(i.e+s)+","+(i.f+a)+")");else{if(s=a=0,m)for(i=t.offsetParent,r=t;r&&(r=r.parentNode)&&r!==i&&r.parentNode;)(l.getComputedStyle(r)[g]+"").length>4&&(s=r.offsetLeft,a=r.offsetTop,r=0);if("absolute"!==(o=l.getComputedStyle(t)).position&&"fixed"!==o.position)for(i=t.offsetParent;v&&v!==i;)s+=v.scrollLeft||0,a+=v.scrollTop||0,v=v.parentNode;(r=n.style).top=t.offsetTop-a+"px",r.left=t.offsetLeft-s+"px",r[g]=o[g],r[y]=o[y],r.position="fixed"===o.position?"fixed":"absolute",t.parentNode.appendChild(n)}return n},_=function(t,e,n,i,r,s,a){return t.a=e,t.b=n,t.c=i,t.d=r,t.e=s,t.f=a,t},L=function(){function t(t,e,n,i,r,s){void 0===t&&(t=1),void 0===e&&(e=0),void 0===n&&(n=0),void 0===i&&(i=1),void 0===r&&(r=0),void 0===s&&(s=0),_(this,t,e,n,i,r,s)}var e=t.prototype;return e.inverse=function(){var t=this.a,e=this.b,n=this.c,i=this.d,r=this.e,s=this.f,a=t*i-e*n||1e-10;return _(this,i/a,-e/a,-n/a,t/a,(n*s-i*r)/a,-(t*s-e*r)/a)},e.multiply=function(t){var e=this.a,n=this.b,i=this.c,r=this.d,s=this.e,a=this.f,o=t.a,l=t.c,u=t.b,c=t.d,h=t.e,p=t.f;return _(this,o*e+u*i,o*n+u*r,l*e+c*i,l*n+c*r,s+h*e+p*i,a+h*n+p*r)},e.clone=function(){return new t(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(t){var e=this.a,n=this.b,i=this.c,r=this.d,s=this.e,a=this.f;return e===t.a&&n===t.b&&i===t.c&&r===t.d&&s===t.e&&a===t.f},e.apply=function(t,e){void 0===e&&(e={});var n=t.x,i=t.y,r=this.a,s=this.b,a=this.c,o=this.d,l=this.e,u=this.f;return e.x=n*r+i*a+l||0,e.y=n*s+i*o+u||0,e},t}();function V(t,e,n,i){if(!t||!t.parentNode||(o||v(t)).documentElement===t)return new L;var r=function(t){for(var e,n;t&&t!==c;)(n=t._gsap)&&n.uncache&&n.get(t,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),e?e.push(n):e=[n]),t=t.parentNode;return e}(t),s=C(t)?b:x,a=M(t,n),l=s[0].getBoundingClientRect(),u=s[1].getBoundingClientRect(),h=s[2].getBoundingClientRect(),p=a.parentNode,f=!i&&k(t),d=new L((u.left-l.left)/100,(u.top-l.top)/100,(h.left-l.left)/100,(h.top-l.top)/100,l.left+(f?0:S()),l.top+(f?0:w()));if(p.removeChild(a),r)for(l=r.length;l--;)(u=r[l]).scaleX=u.scaleY=0,u.renderTransform(1,u);return e?d.inverse():d}var B,D,P,T,I,N,X,A=1,Y=function(t,e){return t.actions.forEach((function(t){return t.vars[e]&&t.vars[e](t)}))},q={},R=180/Math.PI,z=Math.PI/180,F={},H={},W={},j=function(t){return"string"==typeof t?t.split(" ").join("").split(","):t},U=j("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),J=j("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),Z=function(t){return B(t)[0]||console.warn("Element not found:",t)},$=function(t){return Math.round(1e4*t)/1e4||0},G=function(t,e,n){return t.forEach((function(t){return t.classList[n](e)}))},Q={zIndex:1,kill:1,simple:1,spin:1,clearProps:1,targets:1,toggleClass:1,onComplete:1,onUpdate:1,onInterrupt:1,onStart:1,delay:1,repeat:1,repeatDelay:1,yoyo:1,scale:1,fade:1,absolute:1,props:1,onEnter:1,onLeave:1,custom:1,paused:1,nested:1,prune:1,absoluteOnLeave:1},K={zIndex:1,simple:1,clearProps:1,scale:1,absolute:1,fitChild:1,getVars:1,props:1},tt=function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()},et=function(t,e){var n,i={};for(n in t)e[n]||(i[n]=t[n]);return i},nt={},it=function(t){var e=nt[t]=j(t);return W[t]=e.concat(J),e},rt=function t(e,n,i){void 0===i&&(i=0);for(var r=e.parentNode,s=1e3*Math.pow(10,i)*(n?-1:1),a=n?900*-s:0;e;)a+=s,e=e.previousSibling;return r?a+t(r,n,i+1):a},st=function(t,e,n){return t.forEach((function(t){return t.d=rt(n?t.element:t.t,e)})),t.sort((function(t,e){return t.d-e.d})),t},at=function(t,e){for(var n,i,r=t.element.style,s=t.css=t.css||[],a=e.length;a--;)i=r[n=e[a]]||r.getPropertyValue(n),s.push(i?n:H[n]||(H[n]=tt(n)),i);return r},ot=function(t){var e=t.css,n=t.element.style,i=0;for(t.cache.uncache=1;i<e.length;i+=2)e[i+1]?n[e[i]]=e[i+1]:n.removeProperty(e[i])},lt=function(t,e){t.forEach((function(t){return t.a.cache.uncache=1})),e||t.finalStates.forEach(ot)},ut="paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),ct=function(t,e,n){var i,r,s,a=t.element,o=t.width,l=t.height,u=t.uncache,c=t.getProp,h=a.style,p=4;if("object"!=typeof e&&(e=t),P&&1!==n)return P._abs.push({t:a,b:t,a:t,sd:0}),P._final.push((function(){return t.cache.uncache=1,ot(t)})),a;for(r="none"===c("display"),t.isVisible&&!r||(r&&(at(t,["display"]).display=e.display),t.matrix=e.matrix,t.width=o=t.width||e.width,t.height=l=t.height||e.height),at(t,ut),s=window.getComputedStyle(a);p--;)h[ut[p]]=s[ut[p]];if(h.gridArea="1 / 1 / 1 / 1",h.transition="none",h.position="absolute",h.width=o+"px",h.height=l+"px",h.top||(h.top="0px"),h.left||(h.left="0px"),u)i=new _t(a);else if((i=et(t,F)).position="absolute",t.simple){var f=a.getBoundingClientRect();i.matrix=new L(1,0,0,1,f.left+S(),f.top+w())}else i.matrix=V(a,!1,!1,!0);return i=yt(i,t,!0),t.x=N(i.x,.01),t.y=N(i.y,.01),a},ht=function(t,e){return!0!==e&&(e=B(e),t=t.filter((function(t){if(-1!==e.indexOf((t.sd<0?t.b:t.a).element))return!0;t.t._gsap.renderTransform(1),t.b.isVisible&&(t.t.style.width=t.b.width+"px",t.t.style.height=t.b.height+"px")}))),t},pt=function(t){return st(t,!0).forEach((function(t){return(t.a.isVisible||t.b.isVisible)&&ct(t.sd<0?t.b:t.a,t.b,1)}))},ft=function(t,e,n,i){return t instanceof _t?t:t instanceof Mt?function(t,e){return e&&t.idLookup[ft(e).id]||t.elementStates[0]}(t,i):new _t("string"==typeof t?Z(t)||console.warn(t+" not found"):t,e,n)},dt=function(t,e){var n,i=t.style||t;for(n in e)i[n]=e[n]},mt=function(t){return t.map((function(t){return t.element}))},gt=function(t,e,n){return t&&e.length&&n.add(t(mt(e),n,new Mt(e,0,!0)),0)},yt=function(t,e,n,i,r,s){var a,o,l,u,c,h,p,f=t.element,d=t.cache,m=t.parent,g=t.x,y=t.y,v=e.width,b=e.height,x=e.scaleX,w=e.scaleY,S=e.rotation,C=e.bounds,k=s&&f.style.cssText,O=s&&f.getBBox&&f.getAttribute("transform"),E=t,M=e.matrix,_=M.e,L=M.f,P=t.bounds.width!==C.width||t.bounds.height!==C.height||t.scaleX!==x||t.scaleY!==w||t.rotation!==S,T=!P&&t.simple&&e.simple&&!r;return T||!m?(x=w=1,S=a=0):(c=function(t){var e=t._gsap||D.core.getCache(t);return e.gmCache===D.ticker.frame?e.gMatrix:(e.gmCache=D.ticker.frame,e.gMatrix=V(t,!0,!1,!0))}(m),h=c.clone().multiply(e.ctm?e.matrix.clone().multiply(e.ctm):e.matrix),S=$(Math.atan2(h.b,h.a)*R),a=$(Math.atan2(h.c,h.d)*R+S)%360,x=Math.sqrt(Math.pow(h.a,2)+Math.pow(h.b,2)),w=Math.sqrt(Math.pow(h.c,2)+Math.pow(h.d,2))*Math.cos(a*z),r&&(r=B(r)[0],u=D.getProperty(r),p=r.getBBox&&"function"==typeof r.getBBox&&r.getBBox(),E={scaleX:u("scaleX"),scaleY:u("scaleY"),width:p?p.width:Math.ceil(parseFloat(u("width","px"))),height:p?p.height:parseFloat(u("height","px"))}),d.rotation=S+"deg",d.skewX=a+"deg"),n?(x*=v!==E.width&&E.width?v/E.width:1,w*=b!==E.height&&E.height?b/E.height:1,d.scaleX=x,d.scaleY=w):(v=N(v*x/E.scaleX,0),b=N(b*w/E.scaleY,0),f.style.width=v+"px",f.style.height=b+"px"),i&&dt(f,e.props),T||!m?(g+=_-t.matrix.e,y+=L-t.matrix.f):P||m!==e.parent?(d.renderTransform(1,d),h=V(r||f,!1,!1,!0),o=c.apply({x:h.e,y:h.f}),g+=(l=c.apply({x:_,y:L})).x-o.x,y+=l.y-o.y):(c.e=c.f=0,g+=(l=c.apply({x:_-t.matrix.e,y:L-t.matrix.f})).x,y+=l.y),g=N(g,.02),y=N(y,.02),!s||s instanceof _t?(d.x=g+"px",d.y=y+"px",d.renderTransform(1,d)):(f.style.cssText=k,f.getBBox&&f.setAttribute("transform",O||""),d.uncache=1),s&&(s.x=g,s.y=y,s.rotation=S,s.skewX=a,n?(s.scaleX=x,s.scaleY=w):(s.width=v,s.height=b)),s||d},vt=function(t,e){return t instanceof Mt?t:new Mt(t,e)},bt=function(t,e,n){var i=t.idLookup[n],r=t.alt[n];return!r.isVisible||(e.getElementState(r.element)||r).isVisible&&i.isVisible?i:r},xt=[],wt="width,height,overflowX,overflowY".split(","),St=function(t){if(t!==X){var e=I.style,n=I.clientWidth===window.outerWidth,i=I.clientHeight===window.outerHeight,r=4;if(t&&(n||i)){for(;r--;)xt[r]=e[wt[r]];n&&(e.width=I.clientWidth+"px",e.overflowY="hidden"),i&&(e.height=I.clientHeight+"px",e.overflowX="hidden"),X=t}else if(X){for(;r--;)xt[r]?e[wt[r]]=xt[r]:e.removeProperty(tt(wt[r]));X=t}}},Ct=function(t,e,n,i){t instanceof Mt&&e instanceof Mt||console.warn("Not a valid state object.");var r,s,a,o,l,u,c,h,p,f,d,m,g,y,v,b=n=n||{},x=b.clearProps,w=b.onEnter,S=b.onLeave,C=b.absolute,k=b.absoluteOnLeave,O=b.custom,E=b.delay,M=b.paused,_=b.repeat,L=b.repeatDelay,B=b.yoyo,T=b.toggleClass,I=b.nested,N=b.zIndex,X=b.scale,A=b.fade,Y=b.stagger,q=b.spin,R=b.prune,z=("props"in n?n:t).props,F=et(n,Q),H=D.timeline({delay:E,paused:M,repeat:_,repeatDelay:L,yoyo:B,data:"isFlip"}),j=F,Z=[],$=[],tt=[],rt=[],ot=!0===q?1:q||0,ut="function"==typeof q?q:function(){return ot},ct=t.interrupted||e.interrupted,ft=H[1!==i?"to":"from"];for(s in e.idLookup)d=e.alt[s]?bt(e,t,s):e.idLookup[s],l=d.element,f=t.idLookup[s],t.alt[s]&&l===f.element&&(t.alt[s].isVisible||!d.isVisible)&&(f=t.alt[s]),f?(u={t:l,b:f,a:d,sd:f.element===l?0:d.isVisible?1:-1},tt.push(u),u.sd&&(u.sd<0&&(u.b=d,u.a=f),ct&&at(u.b,z?W[z]:J),A&&tt.push(u.swap={t:f.element,b:u.b,a:u.a,sd:-u.sd,swap:u})),l._flip=f.element._flip=P?P.timeline:H):d.isVisible&&(tt.push({t:l,b:et(d,{isVisible:1}),a:d,sd:0,entering:1}),l._flip=P?P.timeline:H);(z&&(nt[z]||it(z)).forEach((function(t){return F[t]=function(e){return tt[e].a.props[t]}})),tt.finalStates=p=[],m=function(){for(st(tt),St(!0),o=0;o<tt.length;o++)u=tt[o],g=u.a,y=u.b,!R||g.isDifferent(y)||u.entering?(l=u.t,I&&!(u.sd<0)&&o&&(g.matrix=V(l,!1,!1,!0)),y.isVisible&&g.isVisible?(u.sd<0?(c=new _t(l,z,t.simple),yt(c,g,X,0,0,c),c.matrix=V(l,!1,!1,!0),c.css=u.b.css,u.a=g=c,A&&(l.style.opacity=ct?y.opacity:g.opacity),Y&&rt.push(l)):u.sd>0&&A&&(l.style.opacity=ct?g.opacity-y.opacity:"0"),yt(g,y,X,z)):y.isVisible!==g.isVisible&&(y.isVisible?g.isVisible||(y.css=g.css,$.push(y),tt.splice(o--,1),C&&I&&yt(g,y,X,z)):(g.isVisible&&Z.push(g),tt.splice(o--,1))),X||(l.style.maxWidth=Math.max(g.width,y.width)+"px",l.style.maxHeight=Math.max(g.height,y.height)+"px",l.style.minWidth=Math.min(g.width,y.width)+"px",l.style.minHeight=Math.min(g.height,y.height)+"px"),I&&T&&l.classList.add(T)):tt.splice(o--,1),p.push(g);var e;if(T&&(e=p.map((function(t){return t.element})),I&&e.forEach((function(t){return t.classList.remove(T)}))),St(!1),X?(F.scaleX=function(t){return tt[t].a.scaleX},F.scaleY=function(t){return tt[t].a.scaleY}):(F.width=function(t){return tt[t].a.width+"px"},F.height=function(t){return tt[t].a.height+"px"},F.autoRound=n.autoRound||!1),F.x=function(t){return tt[t].a.x+"px"},F.y=function(t){return tt[t].a.y+"px"},F.rotation=function(t){return tt[t].a.rotation+(q?360*ut(t,h[t],h):0)},F.skewX=function(t){return tt[t].a.skewX},h=tt.map((function(t){return t.t})),(N||0===N)&&(F.modifiers={zIndex:function(){return N}},F.zIndex=N,F.immediateRender=!1!==n.immediateRender),A&&(F.opacity=function(t){return tt[t].sd<0?0:tt[t].sd>0?tt[t].a.opacity:"+=0"}),rt.length){Y=D.utils.distribute(Y);var i=h.slice(rt.length);F.stagger=function(t,e){return Y(~rt.indexOf(e)?h.indexOf(tt[t].swap.t):t,e,i)}}if(U.forEach((function(t){return n[t]&&H.eventCallback(t,n[t],n[t+"Params"])})),O&&h.length)for(s in j=et(F,Q),"scale"in O&&(O.scaleX=O.scaleY=O.scale,delete O.scale),O)(r=et(O[s],K))[s]=F[s],!("duration"in r)&&"duration"in F&&(r.duration=F.duration),r.stagger=F.stagger,ft.call(H,h,r,0),delete j[s];(h.length||$.length||Z.length)&&(T&&H.add((function(){return G(e,T,H._zTime<0?"remove":"add")}),0)&&!M&&G(e,T,"add"),h.length&&ft.call(H,h,j,0)),gt(w,Z,H),gt(S,$,H);var f=P&&P.timeline;f&&(f.add(H,0),P._final.push((function(){return lt(tt,!x)}))),a=H.duration(),H.call((function(){var t=H.time()>=a;t&&!f&&lt(tt,!x),T&&G(e,T,t?"remove":"add")}))},k&&(C=tt.filter((function(t){return!t.sd&&!t.a.isVisible&&t.b.isVisible})).map((function(t){return t.a.element}))),P)?(C&&(v=P._abs).push.apply(v,ht(tt,C)),P._run.push(m)):(C&&pt(ht(tt,C)),m());var dt=P?P.timeline:H;return dt.revert=function(){return Ot(dt,1)},dt},kt=function t(e){e.vars.onInterrupt&&e.vars.onInterrupt.apply(e,e.vars.onInterruptParams||[]),e.getChildren(!0,!1,!0).forEach(t)},Ot=function(t,e){if(t&&t.progress()<1&&!t.paused())return e&&(kt(t),e<2&&t.progress(1),t.kill()),!0},Et=function(t){for(var e,n=t.idLookup={},i=t.alt={},r=t.elementStates,s=r.length;s--;)n[(e=r[s]).id]?i[e.id]=e:n[e.id]=e},Mt=function(){function t(t,e,n){if(this.props=e&&e.props,this.simple=!(!e||!e.simple),n)this.targets=mt(t),this.elementStates=t,Et(this);else{this.targets=B(t);var i=e&&(!1===e.kill||e.batch&&!e.kill);P&&!i&&P._kill.push(this),this.update(i||!!P)}}var e=t.prototype;return e.update=function(t){var e=this;return this.elementStates=this.targets.map((function(t){return new _t(t,e.props,e.simple)})),Et(this),this.interrupt(t),this.recordInlineStyles(),this},e.clear=function(){return this.targets.length=this.elementStates.length=0,Et(this),this},e.fit=function(t,e,n){for(var i,r,s=st(this.elementStates.slice(0),!1,!0),a=(t||this).idLookup,o=0;o<s.length;o++)i=s[o],n&&(i.matrix=V(i.element,!1,!1,!0)),(r=a[i.id])&&yt(i,r,e,!0,0,i),i.matrix=V(i.element,!1,!1,!0);return this},e.getProperty=function(t,e){var n=this.getElementState(t)||F;return(e in n?n:n.props||F)[e]},e.add=function(t){for(var e,n,i,r=t.targets.length,s=this.idLookup,a=this.alt;r--;)(i=s[(n=t.elementStates[r]).id])&&(n.element===i.element||a[n.id]&&a[n.id].element===n.element)?(e=this.elementStates.indexOf(n.element===i.element?i:a[n.id]),this.targets.splice(e,1,t.targets[r]),this.elementStates.splice(e,1,n)):(this.targets.push(t.targets[r]),this.elementStates.push(n));return t.interrupted&&(this.interrupted=!0),t.simple||(this.simple=!1),Et(this),this},e.compare=function(t){var e,n,i,r,s,a,o,l,u=t.idLookup,c=this.idLookup,h=[],p=[],f=[],d=[],m=[],g=t.alt,y=this.alt,v=function(t,e,n){return(t.isVisible!==e.isVisible?t.isVisible?f:d:t.isVisible?p:h).push(n)&&m.push(n)},b=function(t,e,n){return m.indexOf(n)<0&&v(t,e,n)};for(i in u)s=g[i],a=y[i],r=(e=s?bt(t,this,i):u[i]).element,n=c[i],a?(l=n.isVisible||!a.isVisible&&r===n.element?n:a,(o=!s||e.isVisible||s.isVisible||l.element!==s.element?e:s).isVisible&&l.isVisible&&o.element!==l.element?((o.isDifferent(l)?p:h).push(o.element,l.element),m.push(o.element,l.element)):v(o,l,o.element),s&&o.element===s.element&&(s=u[i]),b(o.element!==n.element&&s?s:o,n,n.element),b(s&&s.element===a.element?s:o,a,a.element),s&&b(s,a.element===s.element?a:n,s.element)):(n?n.isDifferent(e)?v(e,n,r):h.push(r):f.push(r),s&&b(s,n,s.element));for(i in c)u[i]||(d.push(c[i].element),y[i]&&d.push(y[i].element));return{changed:p,unchanged:h,enter:f,leave:d}},e.recordInlineStyles=function(){for(var t=W[this.props]||J,e=this.elementStates.length;e--;)at(this.elementStates[e],t)},e.interrupt=function(t){var e=this,n=[];this.targets.forEach((function(i){var r=i._flip,s=Ot(r,t?0:1);t&&s&&n.indexOf(r)<0&&r.add((function(){return e.updateVisibility()})),s&&n.push(r)})),!t&&n.length&&this.updateVisibility(),this.interrupted||(this.interrupted=!!n.length)},e.updateVisibility=function(){this.elementStates.forEach((function(t){var e=t.element.getBoundingClientRect();t.isVisible=!!(e.width||e.height||e.top||e.left),t.uncache=1}))},e.getElementState=function(t){return this.elementStates[this.targets.indexOf(Z(t))]},e.makeAbsolute=function(){return st(this.elementStates.slice(0),!0,!0).map(ct)},t}(),_t=function(){function t(t,e,n){this.element=t,this.update(e,n)}var e=t.prototype;return e.isDifferent=function(t){var e=this.bounds,n=t.bounds;return e.top!==n.top||e.left!==n.left||e.width!==n.width||e.height!==n.height||!this.matrix.equals(t.matrix)||this.opacity!==t.opacity||this.props&&t.props&&JSON.stringify(this.props)!==JSON.stringify(t.props)},e.update=function(t,e){var n,i,r=this,s=r.element,a=D.getProperty(s),o=D.core.getCache(s),l=s.getBoundingClientRect(),u=s.getBBox&&"function"==typeof s.getBBox&&"svg"!==s.nodeName.toLowerCase()&&s.getBBox(),c=e?new L(1,0,0,1,l.left+S(),l.top+w()):V(s,!1,!1,!0);r.getProp=a,r.element=s,r.id=((i=(n=s).getAttribute("data-flip-id"))||n.setAttribute("data-flip-id",i="auto-"+A++),i),r.matrix=c,r.cache=o,r.bounds=l,r.isVisible=!!(l.width||l.height||l.left||l.top),r.display=a("display"),r.position=a("position"),r.parent=s.parentNode,r.x=a("x"),r.y=a("y"),r.scaleX=o.scaleX,r.scaleY=o.scaleY,r.rotation=a("rotation"),r.skewX=a("skewX"),r.opacity=a("opacity"),r.width=u?u.width:N(a("width","px"),.04),r.height=u?u.height:N(a("height","px"),.04),t&&function(t,e){for(var n=D.getProperty(t.element,null,"native"),i=t.props={},r=e.length;r--;)i[e[r]]=(n(e[r])+"").trim();i.zIndex&&(i.zIndex=parseFloat(i.zIndex)||0)}(r,nt[t]||it(t)),r.ctm=s.getCTM&&"svg"===s.nodeName.toLowerCase()&&E(s).inverse(),r.simple=e||1===$(c.a)&&!$(c.b)&&!$(c.c)&&1===$(c.d),r.uncache=0},t}(),Lt=function(){function t(t,e){this.vars=t,this.batch=e,this.states=[],this.timeline=e.timeline}var e=t.prototype;return e.getStateById=function(t){for(var e=this.states.length;e--;)if(this.states[e].idLookup[t])return this.states[e]},e.kill=function(){this.batch.remove(this)},t}(),Vt=function(){function t(t){this.id=t,this.actions=[],this._kill=[],this._final=[],this._abs=[],this._run=[],this.data={},this.state=new Mt,this.timeline=D.timeline()}var e=t.prototype;return e.add=function(t){var e=this.actions.filter((function(e){return e.vars===t}));return e.length?e[0]:(e=new Lt("function"==typeof t?{animate:t}:t,this),this.actions.push(e),e)},e.remove=function(t){var e=this.actions.indexOf(t);return e>=0&&this.actions.splice(e,1),this},e.getState=function(t){var e=this,n=P,i=T;return P=this,this.state.clear(),this._kill.length=0,this.actions.forEach((function(n){n.vars.getState&&(n.states.length=0,T=n,n.state=n.vars.getState(n)),t&&n.states.forEach((function(t){return e.state.add(t)}))})),T=i,P=n,this.killConflicts(),this},e.animate=function(){var t,e,n=this,i=P,r=this.timeline,s=this.actions.length;for(P=this,r.clear(),this._abs.length=this._final.length=this._run.length=0,this.actions.forEach((function(t){t.vars.animate&&t.vars.animate(t);var e,n,i=t.vars.onEnter,r=t.vars.onLeave,s=t.targets;s&&s.length&&(i||r)&&(e=new Mt,t.states.forEach((function(t){return e.add(t)})),(n=e.compare(Bt.getState(s))).enter.length&&i&&i(n.enter),n.leave.length&&r&&r(n.leave))})),pt(this._abs),this._run.forEach((function(t){return t()})),e=r.duration(),t=this._final.slice(0),r.add((function(){e<=r.time()&&(t.forEach((function(t){return t()})),Y(n,"onComplete"))})),P=i;s--;)this.actions[s].vars.once&&this.actions[s].kill();return Y(this,"onStart"),r.restart(),this},e.loadState=function(t){t||(t=function(){return 0});var e=[];return this.actions.forEach((function(n){if(n.vars.loadState){var i,r=function r(s){s&&(n.targets=s),~(i=e.indexOf(r))&&(e.splice(i,1),e.length||t())};e.push(r),n.vars.loadState(r)}})),e.length||t(),this},e.setState=function(){return this.actions.forEach((function(t){return t.targets=t.vars.setState&&t.vars.setState(t)})),this},e.killConflicts=function(t){return this.state.interrupt(t),this._kill.forEach((function(e){return e.interrupt(t)})),this},e.run=function(t,e){var n=this;return this!==P&&(t||this.getState(e),this.loadState((function(){n._killed||(n.setState(),n.animate())}))),this},e.clear=function(t){this.state.clear(),t||(this.actions.length=0)},e.getStateById=function(t){for(var e,n=this.actions.length;n--;)if(e=this.actions[n].getStateById(t))return e;return this.state.idLookup[t]&&this.state},e.kill=function(){this._killed=1,this.clear(),delete q[this.id]},t}(),Bt=function(){function t(){}return t.getState=function(e,n){var i=vt(e,n);return T&&T.states.push(i),n&&n.batch&&t.batch(n.batch).state.add(i),i},t.from=function(t,e){return"clearProps"in(e=e||{})||(e.clearProps=!0),Ct(t,vt(e.targets||t.targets,{props:e.props||t.props,simple:e.simple,kill:!!e.kill}),e,-1)},t.to=function(t,e){return Ct(t,vt(e.targets||t.targets,{props:e.props||t.props,simple:e.simple,kill:!!e.kill}),e,1)},t.fromTo=function(t,e,n){return Ct(t,e,n)},t.fit=function(t,e,n){var i=n?et(n,K):{},r=n||i,s=r.absolute,a=r.scale,o=r.getVars,l=r.props,u=r.runBackwards,c=r.onComplete,h=r.simple,p=n&&n.fitChild&&Z(n.fitChild),f=ft(e,l,h,t),d=ft(t,0,h,f),m=l?W[l]:J;return l&&dt(i,f.props),u&&(at(d,m),"immediateRender"in i||(i.immediateRender=!0),i.onComplete=function(){ot(d),c&&c.apply(this,arguments)}),s&&ct(d,f),i=yt(d,f,a||p,l,p,i.duration||o?i:0),o?i:i.duration?D.to(d.element,i):null},t.makeAbsolute=function(t,e){return(t instanceof Mt?t:new Mt(t,e)).makeAbsolute()},t.batch=function(t){return t||(t="default"),q[t]||(q[t]=new Vt(t))},t.killFlipsOf=function(t,e){(t instanceof Mt?t.targets:B(t)).forEach((function(t){return t&&Ot(t._flip,!1!==e?1:2)}))},t.isFlipping=function(e){var n=t.getByTarget(e);return!!n&&n.isActive()},t.getByTarget=function(t){return(Z(t)||F)._flip},t.getElementState=function(t,e){return new _t(Z(t),e)},t.convertCoordinates=function(t,e,n){var i=V(e,!0,!0).multiply(V(t));return n?i.apply(n):i},t.register=function(t){if(I="undefined"!=typeof document&&document.body){D=t,v(I),B=D.utils.toArray;var e=D.utils.snap(.1);N=function(t,n){return e(parseFloat(t)+n)}}},t}();Bt.version="3.11.3","undefined"!=typeof window&&window.gsap&&window.gsap.registerPlugin(Bt),s.gsap.registerPlugin(Bt);const Dt=document.body,Pt=[...document.querySelectorAll(".content__item")],Tt=[];Pt.forEach((t=>Tt.push(new a(t))));const It=Tt.find((t=>t.isCurrent())),Nt=[...document.querySelectorAll(".image")],Xt=Nt.length,At=document.querySelector(".prime"),Yt=[...At.querySelectorAll(".image-wrap")],qt=At.querySelector(".nav__item--active"),Rt=[...At.querySelectorAll(".oh > .oh__inner")],zt=document.querySelector(".nav-wrap");let Ft;It.DOM.back.addEventListener("click",(()=>{if(Ft)return;Ft=!0;const t=Bt.getState(Nt);s.gsap.timeline({onComplete:()=>{Dt.classList.remove("content-open"),Ft=!1},defaults:{duration:1.2,ease:"power4.inOut"}}).addLabel("start",0).to([It.DOM.number,It.DOM.title],{y:"100%"},"start").to(It.DOM.back,{opacity:0},"start").to(zt,{yPercent:0},"start").to(Rt,{xPercent:0,yPercent:0},"start").add((()=>{At.prepend(Nt[0]);for(const[t,e]of Yt.entries())e.appendChild(Nt[t+1]);Bt.from(t,{duration:1,ease:"expo.inOut",absolute:!0,simple:!0,stagger:.06})}),"start+=0.15")})),qt.addEventListener("click",(()=>(()=>{if(Ft)return;Ft=!0;const t=Bt.getState(Nt),e=s.gsap.timeline({onComplete:()=>{Dt.classList.add("content-open"),Ft=!1},defaults:{duration:1.2,ease:"power4.inOut"}}).addLabel("start",0).add((()=>{for(const[t,e]of Pt.entries())e.appendChild(Nt[Xt-1-t]);Bt.from(t,{duration:1,ease:"expo.inOut",absolute:!0,simple:!0,stagger:-.06})}),"start+=0.15");for(const t of Rt){const n=s.gsap.utils.random(0,1,1);e.to(t,{xPercent:n?s.gsap.utils.random(0,1,1)%2?-100:100:0,yPercent:n?0:s.gsap.utils.random(0,1,1)%2?-100:100},"start")}e.to(zt,{yPercent:120},"start").to([It.DOM.number,It.DOM.title],{y:0},"start+=0.3").to(It.DOM.back,{opacity:1},"start+=0.3")})()));for(const t of Tt)t.isCurrent()||(t.DOM.el.addEventListener("mouseenter",(()=>{s.gsap.to([t.DOM.number,t.DOM.title],{y:0})})),t.DOM.el.addEventListener("mouseleave",(()=>{s.gsap.to([t.DOM.number,t.DOM.title],{y:"100%"})})));(0,r.preloadImages)(".image__inner").then((()=>document.body.classList.remove("loading")));