!function(e){function t(t){return e.MSPointerEvent?"MSPointer"+t.charAt(9).toUpperCase()+t.substr(10):t}function n(e){return"[object Function]"===m.call(e)}function r(e){return"[object Array]"===m.call(e)}function i(e){return"undefined"==typeof e}function s(e){return"string"==typeof e}function o(e,t){if(e&&t)if(r(e))for(var n=0,i=e.length;i>n&&t.call(null,e[n],n,e)!==!1;n++);else for(var s in e)if(t.call(null,s,e[s])===!1)break}function u(e,t){if(e&&t&&"object"==typeof t){var n,r,i;for(n in t)e[n]=t[n];if(y)for(r=y.length;r--;)i=y[r],t.hasOwnProperty(i)&&(e[i]=t[i])}return e}function a(t){var n,r=e.getComputedStyle(t)[E.transform];return r&&(n=r.match(/^matrix(3d)?(.*)$/i))&&n&&n[2]?parseInt(n[2].replace(/ /g,"").split(",")[n[1]?13:5],10):0}function f(){return e.innerHeight>e.innerWidth}function l(t,n){return function(){var r=g.call(arguments,0),i=f();t.lastOrientation!==i&&(t.lastOrientation=i,t.apply(n||e,r))}}function c(e,t,n){var r=this,i=function(){e.transitionTimer&&clearTimeout(e.transitionTimer),e.transitionTimer=null,e.removeEventListener(E.transitionEndEvent,s,!1)},s=function(){i(),n&&n.call(r)};i(),e.addEventListener(E.transitionEndEvent,s,!1),e.transitionTimer=setTimeout(s,t+50)}var h=e.document,p=e.navigator.userAgent.toLowerCase(),d="ontouchstart"in e,v=e.PointerEvent||e.MSPointerEvent,m=Object.prototype.toString,g=Array.prototype.slice,y=["hasOwnProperty","valueOf","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","constructor"],b={wp:function(){return-1!==p.indexOf("windows phone ")?/\bwindows phone (?:os )?([0-9.]+)/:-1!==p.indexOf("xblwp")?/\bxblwp([0-9.]+)/:-1!==p.indexOf("zunewp")?/\bzunewp([0-9.]+)/:/\bwindows phone/}().test(p),ios:function(){return/\bcpu(?: iphone)? os /.test(p)?/\bcpu(?: iphone)? os ([0-9._]+)/:-1!==p.indexOf("iph os ")?/\biph os ([0-9_]+)/:/\bios\b/}().test(p),android:function(){return-1!==p.indexOf("android")?/\bandroid[ \/-]?([0-9.x]+)?/:-1!==p.indexOf("adr")?-1!==p.indexOf("mqqbrowser")?/\badr[ ]\(linux; u; ([0-9.]+)?/:/\badr(?:[ ]([0-9.]+))?/:/\bandroid/}().test(p)},w=function(){return{start:d?"touchstart":v?t("pointerdown"):"mousedown",move:d?"touchmove":v?t("pointermove"):"mousemove",end:d?"touchend":v?t("pointerup"):"mouseup",cancel:d?"touchcancel":v?t("pointercancel"):"mousecancel"}}(),E=function(){var e=h.createElement("div").style,t=function(){for(var t,n="webkitT,t,msT,MozT,OT".split(","),r=0,i=n.length;i>r;r++)if(t=n[r]+"ransform",t in e)return n[r].substr(0,n[r].length-1);return!1}(),n=t?"-"+t.toLowerCase()+"-":"",r=function(e){return""===t?e:(e=e.charAt(0).toUpperCase()+e.substr(1),t+e)},i=r("transform"),s=r("transition"),o=r("transitionProperty"),u=r("transitionDuration"),a=r("transformOrigin"),f=r("transitionTimingFunction"),l=r("transitionDelay"),c=function(){return"webkit"==t||"O"===t?t.toLowerCase()+"TransitionEnd":"transitionend"}(),p=r("animation"),d=r("animationName"),v=r("animationDuration"),m=r("animationTimingFunction"),g=r("animationDelay");return e=null,{propPrefix:t,cssPrefix:n,transform:i,transition:s,transitionProperty:o,transitionDuration:u,transformOrigin:a,transitionTimingFunction:f,transitionDelay:l,transitionEndEvent:c,animation:p,animationName:d,animationDuration:v,animationTimingFunction:m,animationDelay:g}}(),S=function(){function t(e){return"string"==typeof e}function n(e){return"[object Function]"===s.call(e)}function r(e){return"[object Array]"===s.call(e)}function i(e,t,n,r){return function(){return e.removeListener(t,n,r),n.apply(r,arguments)}}var s=Object.prototype.toString,o=/^(?:scope|delay|buffer|single|stopEvent|preventDefault|stopPropagation|normalized|args|delegate)$/,u=function(t,n){this.events={},this.defaultScope=n||e,t&&this.addListener(t)};return u.prototype={constructor:u,addEvents:function(e){var n,r,i=this.events;if(t(e))for(n=arguments,r=n.length;r--;)i[n[r]]=i[n[r]]||[];else for(r in e)i[r]=i[r]||[]},addListener:function(e,r,i,s){if(t(e)){var u=this.events;e=e.toLowerCase(),u[e]=u[e]||[],i=i||this.defaultScope,s=s||{},u[e].push({single:s.single,fireFn:r,listenerFn:this.createListener(e,r,i,s),scope:i})}else{var a,f;i=e.scope;for(f in e)o.test(f)||(a=e[f],n(a)?this.addListener(f,a,i):this.addListener(f,a.fn,a.scope||i))}},removeListener:function(e,t,n){e=e.toLowerCase();var i=this.events[e];if(r(i)){n=n||this.defaultScope;for(var s=0,o=i.length;o>s;s++)if(i[s].fireFn==t&&n==i[s].scope)return void i.splice(s,1)}},clearListeners:function(e){this.events[e.toLowerCase()]=[]},purgeListeners:function(){for(var e in this.events)this.clearListeners(e)},hasListener:function(e){var t=this.events[e.toLowerCase()];return r(t)&&t.length>0},fireEvent:function(e){var t=this.events[e.toLowerCase()];if(r(t)){var n,i=Array.prototype.slice.call(arguments,1),s=t.length,o=0;if(s>0)for(;s>o;o++)if(n=t[o],n&&(n.single===!0&&o--,n.listenerFn.apply(n.scope,i)===!1))return!1}},createListener:function(e,t,n,r){var s=t;return r=r||{},r.single&&(s=i(this,e,t,n)),s}},u.prototype.on=u.prototype.addListener,u.prototype.off=u.prototype.removeListener,u}(),x=function(e,t){var n={itemSelector:"",active:0,loop:!1,animation:"flow",duration:400,lockScreen:"off",rotateBody:"",beforeSlide:null,onSlide:null,onResize:null,scope:this};e&&!t&&(t=e,e=null),e?(e=s(e)?h.querySelector(e):e,e.parentNode.style.overflow="hidden"):e=h.body,e.style.overflow="hidden",this.ct=e,this.options=u(n,t),this.getLength()<3&&(this.options.loop=!1),this.initEvents(),this.onOrientationChange(),this.resize(),this.to(this.options.active,!0)};x.prototype={initEvents:function(){this.ct.addEventListener(w.start,this,!1),this.onOrientationChangeProxy=l(this.onOrientationChange,this),e.addEventListener("orientationchange",this.onOrientationChangeProxy,!1),e.addEventListener("resize",this.onOrientationChangeProxy,!1),e.addEventListener("resize",this,!1),this.ee=new S(null,this.options.scope),this.options.beforeSlide&&this.ee.on("beforeslide",this.options.beforeSlide),this.options.onSlide&&this.ee.on("slide",this.options.onSlide),this.options.onResize&&this.ee.on("resize",this.options.onResize)},on:function(){return this.ee.on.apply(this.ee,arguments),this},off:function(){return this.ee.off.apply(this.ee,arguments),this},getItems:function(){var e=this.options.itemSelector;return g.call(e?this.ct.querySelectorAll(e):this.ct.children,0)},getItem:function(e){return this.getItems()[e]},getActive:function(){return this.getItems()[this.active]},getLength:function(){return this.getItems().length},getLast:function(){return this.getLength()-1},getContext:function(e){var t,n,r=this.getLast();return i(e)&&(e=this.active),t=e-1,n=e+1,0>t&&(t=this.options.loop?r:-1),n>r&&(n=this.options.loop?0:-1),{prev:t,next:n,active:e}},resize:function(t,n){return t=t||e.innerWidth,n=n||e.innerHeight,this.ct.style.width=t+"px",this.ct.style.height=n+"px",o(g.call(this.getItems(),0),function(e){e.style.width=t+"px",e.style.height=n+"px"}),this.ee.fireEvent("resize",t,n),this},onResize:function(){var t=e.innerWidth,n=e.innerHeight;(this.lastWidth!=t||this.lastHeight!=n)&&(this.lastWidth=t,this.lastHeight=n,this.resize(t,n))},onOrientationChange:function(){var e=this.options.lockScreen;if("off"!=e){var t=f(),n=this.getLockRotateEl();"landscape"==e&&t?n.style.display="":"portrait"!=e||t?(this.onResize(),n.style.display="none"):n.style.display=""}else this.onResize()},getLockRotateEl:function(){if(!this.lockRotateEl){var e=this.options.rotateBody,t="display:none;position:fixed;left:0;top:0;bottom:0;right:0;z-index:9999998;width:100%;height:100%;",r=h.createElement("div");r.id="touchBoxRotate",r.style.cssText=t,e&&(r.innerHTML=n(e)?e():e),h.body.appendChild(r),this.lockRotateEl=r}return this.lockRotateEl},getAnimation:function(){return x.animations[this.options.animation]},setItemShow:function(e,t,n,r){if(t>-1){var i=this.getItem(t),s=this.getAnimation();s.touchStart.call(this,e,t,n,r),i.style[E.transitionTimingFunction]="ease-in-out",i.style[E.transitionDuration]="0ms"}},setItemHide:function(e,t){if(e>-1){var n=this.getItem(e);n.style[E.transform]="translate3d(0,"+t+"px,0)",n.style[E.transitionDuration]="0ms"}},onTouchStart:function(e){var t=this;if(t.sliding)return e.preventDefault(),void e.stopPropagation();if(clearTimeout(t.prepareNextViewTimer),t.ct.removeEventListener(w.move,t,!1),t.ct.removeEventListener(w.end,t,!1),t.ct.removeEventListener(w.cancel,t,!1),t.ct.addEventListener(w.move,t,!1),t.ct.addEventListener(w.end,t,!1),t.ct.addEventListener(w.cancel,t,!1),delete t.vertical,t.ee.fireEvent("touchstart",t.active)!==!1){var n=e.touches?e.touches[0]:e,r=t.getContext(),i=t.ct.offsetHeight;r.prev>-1&&t.setItemShow("prev",r.prev,-i,r),r.next>-1&&t.setItemShow("next",r.next,i,r),t.setItemShow("active",r.active,0,r),t.touchCoords={},t.touchCoords.startX=n.pageX,t.touchCoords.startY=n.pageY,t.touchCoords.timeStamp=e.timeStamp}},onTouchMove:function(e){var t=this;if(t.touchCoords&&!t.sliding){var n=e.touches?e.touches[0]:e;t.touchCoords.stopX=n.pageX,t.touchCoords.stopY=n.pageY;var r=t.touchCoords.startX-t.touchCoords.stopX,s=t.touchCoords.startY-t.touchCoords.stopY,o=Math.abs(r),u=Math.abs(s);if(i(t.vertical)){if(0!==s&&e.preventDefault(),!(u>o))return t.vertical=!1,void delete t.touchCoords;if(t.vertical=!0,0!==s&&(e.preventDefault(),t.ee.fireEvent("touchmove",t.active,s)===!1))return}else if(t.vertical&&0!==s&&(e.preventDefault(),t.ee.fireEvent("touchmove",t.active,s)===!1))return;var a,f=t.getContext(),l=t.ct.offsetHeight;l>u&&(a=t.getAnimation(),f.prev>-1&&a.touchMove.call(t,"prev",f.prev,-l-s,f),(t.options.loop||0>s&&f.prev>-1||s>0&&f.next>-1)&&a.touchMove.call(t,"active",f.active,-s,f),f.next>-1&&a.touchMove.call(t,"next",f.next,l-s,f))}},onTouchEnd:function(e){var t=this;t.ct.removeEventListener(w.move,t,!1),t.ct.removeEventListener(w.end,t,!1),t.ct.removeEventListener(w.cancel,t,!1);var n,r,i,s=t.getContext(),o=t.ct.offsetHeight;return!t.touchCoords||t.sliding?(t.setItemHide(s.prev,-o),void t.setItemHide(s.next,o)):(n=t.touchCoords.startY-t.touchCoords.stopY,r=Math.abs(n),isNaN(r)||0===r||t.ee.fireEvent("touchend",t.active,n)===!1||!isNaN(r)&&r>0&&(r>o&&(r=o),i=r>=80||e.timeStamp-t.touchCoords.timeStamp<200?t.touchCoords.startY>t.touchCoords.stopY&&s.next>-1?s.next:t.touchCoords.startY<t.touchCoords.stopY&&s.prev>-1?s.prev:s.active:s.active,i==s.active&&0===a(t.getItem(i))?(t.setItemHide(s.prev,-o),t.setItemHide(s.next,o)):(t.setItemHide(t.touchCoords.startY>t.touchCoords.stopY?s.prev:s.next,-o),t.to(i,!1,!0))),void delete t.touchCoords)},to:function(e,t,n){var r=this;if(!r.sliding){var i,s,o=r.active,u=r.getLast(),f=r.ct.offsetHeight,l=r.getContext(),c=function(s){n||(s?r.setItemShow("prev",e,-f,l):r.setItemShow("next",e,f,l),i>-1&&r.setItemShow("active",i,0,l)),r.slide(i,e,s,t)};return e>-1&&u>=e&&e!=o&&r.ee.fireEvent("beforeslide",e,o)!==!1?(i=o,s=u>1?o>e&&u>o||e==u-1&&o==u||e==u&&0===o:o>e,c(s)):(a(r.getItem(o))>0?(i=l.prev,s=!1):(i=l.next,s=!0),e=o,c(s)),r}},slide:function(e,t,n,r){var i,s,o,u,f=this,l=f.ct.offsetHeight,h=f.options.duration,p="0ms",d=f.getAnimation();f.sliding=!0;var v=function(e,t){e.removeEventListener(E.transitionEndEvent,t,!1)},m=function(){i&&(v(i,m),i.style.position="absolute",i.style[E.transitionDuration]=p)},g=function(){clearTimeout(f.resetSlideTimeout),f.resetSlideTimeout=null,v(s,g),s.style.position="relative",i&&(i.style.zIndex="11"),s.style.zIndex="12",s.style[E.transitionDuration]=p,f.lastActive=f.active,f.active=t,f.sliding=!1,f.ee.fireEvent("slide",t,f.lastActive),f.prepareNextViewTimer=setTimeout(function(){var e=f.getContext(),t=f.ct.offsetHeight;e.prev>-1&&f.setItemShow("prev",e.prev,-t,e),e.next>-1&&f.setItemShow("next",e.next,t,e)},100)},y=f.getContext();f.active==t?n?f.setItemHide(y.prev,-l):f.setItemHide(y.next,l):n?f.setItemHide(y.next,l):f.setItemHide(y.prev,-l),e>-1&&(i=f.getItem(e)),s=f.getItem(t),o=a(s),u=r?0:d.duration?d.duration.call(f,i,s,e,t,n):Math.round(Math.abs(o)/l*h),i&&(v(i,m),i.style[E.transitionDuration]=u+"ms"),v(s,g),s.style[E.transitionDuration]=u+"ms",setTimeout(function(){r||(i&&c(i,u,m),c(s,u,g)),i&&d.touchEnd.call(f,"active",e,o>0?-l:l,n),d.touchEnd.call(f,o>0?"next":"prev",t,0,n),r?(m(),g()):f.resetSlideTimeout=setTimeout(function(){m(),g()},u+400)},b.android?50:10)},prev:function(){var e=this.getContext();return e.prev>-1&&this.to(e.prev),this},next:function(){var e=this.getContext();return e.next>-1&&this.to(e.next),this},handleEvent:function(e){switch(e.type){case w.start:this.onTouchStart(e);break;case w.move:this.onTouchMove(e);break;case w.end:case w.cancel:this.onTouchEnd(e);break;case"resize":this.onResize(e)}},destroy:function(){this.destroyed||(this.destroyed=!0,this.ct.removeEventListener(w.start,this,!1),this.ct.removeEventListener(w.move,this,!1),this.ct.removeEventListener(w.end,this,!1),this.ct.removeEventListener(w.cancel,this,!1),e.removeEventListener("orientationchange",this.onOrientationChangeProxy,!1),e.removeEventListener("resize",this.onOrientationChangeProxy,!1),e.removeEventListener("resize",this,!1),this.lockRotateEl&&(this.lockRotateEl.parentNode.removeChild(this.lockRotateEl),this.lockRotateEl=null),this.ct=null)}},x.animations={slide:{touchStart:function(e,t,n){var r=this.getItem(t);"prev"===e||"next"===e?(r.style.position="absolute",r.style.left="0",r.style.top="0",r.style.zIndex="11"):(r.style.position="relative",r.style.zIndex="12"),r.style[E.transform]="translate3d(0px,"+n+"px,0px)"},touchMove:function(e,t,n){var r=this.getItem(t);this.options.loop||(0===t&&n>0||t==this.getLast()&&0>n)&&(n/=4),r.style[E.transform]="translate3d(0px,"+n+"px,0px)"},touchEnd:function(e,t,n){var r=this.getItem(t);r.style[E.transform]="translate3d(0px,"+n+"px,0px)"}},flow:{touchStart:function(e,t,n){var r=this.getItem(t);"prev"===e?(r.style.position="absolute",r.style.left="0",r.style.top="0",r.style.zIndex="11",r.style[E.transform]="translate3d(0px,"+n/4+"px,0px)"):"next"===e?(r.style.position="absolute",r.style.left="0",r.style.top="0",r.style.zIndex="13",r.style[E.transform]="translate3d(0px,"+n+"px,0px)"):(r.style.position="relative",r.style.zIndex="12",r.style[E.transform]="translate3d(0px,"+n+"px,0px)")},touchMove:function(e,t,n,r){var i=this.getItem(t),s=a(this.getItem(r.active));"prev"===e?i.style[E.transform]="translate3d(0px,"+n/4+"px,0px)":"next"===e?i.style[E.transform]="translate3d(0px,"+n+"px,0px)":(s>0?this.options.loop||(0===t&&n>0||t==this.getLast()&&0>n)&&(n/=4):n/=4,i.style[E.transform]="translate3d(0px,"+n+"px,0px)")},touchEnd:function(e,t,n,r){var i=this.getItem(t);i.style[E.transform]=!r&&"active"===e&&0>n?"translate3d(0px,"+n/4+"px,0px)":"translate3d(0px,"+n+"px,0px)"},duration:function(e,t,n,r){var i,s=this.ct.offsetHeight,o=a(t),u=0;return e&&(u=a(e)),i=0>o&&(this.options.loop||r!==this.getLast())?s-Math.abs(u):Math.abs(o),Math.round(i/s*this.options.duration)}}},x.EventEmitter=S,e.TouchBox=x}(window);
!function(e){function t(t){return e.MSPointerEvent?"MSPointer"+t.charAt(9).toUpperCase()+t.substr(10):t}function n(e){return"[object Function]"===g.call(e)}function r(e){return"[object Array]"===g.call(e)}function i(e){return"[object Number]"===g.call(e)}function s(e){return"[object String]"===g.call(e)}function o(e,t){if(e&&t)if(r(e))for(var n=0,i=e.length;i>n&&t.call(null,e[n],n,e)!==!1;n++);else for(var s in e)if(t.call(null,s,e[s])===!1)break}function u(e,t){if(e&&t&&"object"==typeof t){var n,r,i;for(n in t)e[n]=t[n];if(y)for(r=y.length;r--;)i=y[r],t.hasOwnProperty(i)&&(e[i]=t[i])}return e}function a(e,t,n){var r=this,i=function(){e.transitionTimer&&clearTimeout(e.transitionTimer),e.transitionTimer=null,e.removeEventListener(S.transitionEndEvent,s,!1)},s=function(){i(),n&&n.call(r)};i(),e.addEventListener(S.transitionEndEvent,s,!1),e.transitionTimer=setTimeout(s,t+50)}function f(e,t){var n,r,i,s;if(n=(t||"").match(/\S+/g)||[],r=1===e.nodeType&&(e.className?(" "+e.className+" ").replace(/[\t\r\n]/g," "):" ")){for(s=0;i=n[s++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");e.className=r.trim()}}function l(e,t){var n,r,i,s;if(n=(t||"").match(/\S+/g)||[],r=1===e.nodeType&&(e.className?(" "+e.className+" ").replace(/[\t\r\n]/g," "):" ")){for(s=0;i=n[s++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");e.className=r.trim()}}function c(e){var t=p.getElementsByTagName("head")[0],n=p.createElement("style");n.type="text/css",n.styleSheet?n.styleSheet.cssText=e:n.appendChild(p.createTextNode(e)),t.appendChild(n)}function h(e,t,n){e.setAttribute("data-width",-1),e.setAttribute("data-height",-1);var r=new Image;r.src=t,r.onload=function(){e&&(e.setAttribute("data-width",r.width),e.setAttribute("data-height",r.height),n&&n(r.width,r.height))}}var p=e.document,d=e.navigator.userAgent.toLowerCase(),v="ontouchstart"in e,m=e.PointerEvent||e.MSPointerEvent,g=Object.prototype.toString,y=["hasOwnProperty","valueOf","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","constructor"],b={wp:function(){return-1!==d.indexOf("windows phone ")?/\bwindows phone (?:os )?([0-9.]+)/:-1!==d.indexOf("xblwp")?/\bxblwp([0-9.]+)/:-1!==d.indexOf("zunewp")?/\bzunewp([0-9.]+)/:/\bwindows phone/}().test(d),ios:function(){return/\bcpu(?: iphone)? os /.test(d)?/\bcpu(?: iphone)? os ([0-9._]+)/:-1!==d.indexOf("iph os ")?/\biph os ([0-9_]+)/:/\bios\b/}().test(d),android:function(){return-1!==d.indexOf("android")?/\bandroid[ \/-]?([0-9.x]+)?/:-1!==d.indexOf("adr")?-1!==d.indexOf("mqqbrowser")?/\badr[ ]\(linux; u; ([0-9.]+)?/:/\badr(?:[ ]([0-9.]+))?/:/\bandroid/}().test(d)},w=b.wp||b.ios||b.android,E=function(){return{start:v?"touchstart":m?t("pointerdown"):"mousedown",move:v?"touchmove":m?t("pointermove"):"mousemove",end:v?"touchend":m?t("pointerup"):"mouseup",cancel:v?"touchcancel":m?t("pointercancel"):"mousecancel"}}(),S=function(){var e=p.createElement("div").style,t=function(){for(var t,n="webkitT,t,msT,MozT,OT".split(","),r=0,i=n.length;i>r;r++)if(t=n[r]+"ransform",t in e)return n[r].substr(0,n[r].length-1);return!1}(),n=t?"-"+t.toLowerCase()+"-":"",r=function(e){return""===t?e:(e=e.charAt(0).toUpperCase()+e.substr(1),t+e)},i=r("transform"),s=r("transition"),o=r("transitionProperty"),u=r("transitionDuration"),a=r("transformOrigin"),f=r("transitionTimingFunction"),l=r("transitionDelay"),c=function(){return"webkit"==t||"O"===t?t.toLowerCase()+"TransitionEnd":"transitionend"}(),h=r("animation"),d=r("animationName"),v=r("animationDuration"),m=r("animationTimingFunction"),g=r("animationIterationCount"),y=r("animationDelay");return e=null,{prefixStyle:r,propPrefix:t,cssPrefix:n,transform:i,transition:s,transitionProperty:o,transitionDuration:u,transformOrigin:a,transitionTimingFunction:f,transitionDelay:l,transitionEndEvent:c,animation:h,animationName:d,animationDuration:v,animationTimingFunction:m,animationIterationCount:g,animationDelay:y}}(),x=!1;!function(){var e="data:audio/mpeg;base64,/+MYxAAAAANIAUAAAASEEB/jwOFM/0MM/90b/+RhST//w4NFwOjf///PZu////9lns5GFDv//l9GlUIEEIAAAgIg8Ir/JGq3/+MYxDsLIj5QMYcoAP0dv9HIjUcH//yYSg+CIbkGP//8w0bLVjUP///3Z0x5QCAv/yLjwtGKTEFNRTMuOTeqqqqqqqqqqqqq/+MYxEkNmdJkUYc4AKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",t="data:audio/ogg;base64,T2dnUwACAAAAAAAAAADqnjMlAAAAAOyyzPIBHgF2b3JiaXMAAAAAAUAfAABAHwAAQB8AAEAfAACZAU9nZ1MAAAAAAAAAAAAA6p4zJQEAAAANJGeqCj3//////////5ADdm9yYmlzLQAAAFhpcGguT3JnIGxpYlZvcmJpcyBJIDIwMTAxMTAxIChTY2hhdWZlbnVnZ2V0KQAAAAABBXZvcmJpcw9CQ1YBAAABAAxSFCElGVNKYwiVUlIpBR1jUFtHHWPUOUYhZBBTiEkZpXtPKpVYSsgRUlgpRR1TTFNJlVKWKUUdYxRTSCFT1jFloXMUS4ZJCSVsTa50FkvomWOWMUYdY85aSp1j1jFFHWNSUkmhcxg6ZiVkFDpGxehifDA6laJCKL7H3lLpLYWKW4q91xpT6y2EGEtpwQhhc+211dxKasUYY4wxxsXiUyiC0JBVAAABAABABAFCQ1YBAAoAAMJQDEVRgNCQVQBABgCAABRFcRTHcRxHkiTLAkJDVgEAQAAAAgAAKI7hKJIjSZJkWZZlWZameZaouaov+64u667t6roOhIasBACAAAAYRqF1TCqDEEPKQ4QUY9AzoxBDDEzGHGNONKQMMogzxZAyiFssLqgQBKEhKwKAKAAAwBjEGGIMOeekZFIi55iUTkoDnaPUUcoolRRLjBmlEluJMYLOUeooZZRCjKXFjFKJscRUAABAgAMAQICFUGjIigAgCgCAMAYphZRCjCnmFHOIMeUcgwwxxiBkzinoGJNOSuWck85JiRhjzjEHlXNOSuekctBJyaQTAAAQ4AAAEGAhFBqyIgCIEwAwSJKmWZomipamiaJniqrqiaKqWp5nmp5pqqpnmqpqqqrrmqrqypbnmaZnmqrqmaaqiqbquqaquq6nqrZsuqoum65q267s+rZru77uqapsm6or66bqyrrqyrbuurbtS56nqqKquq5nqq6ruq5uq65r25pqyq6purJtuq4tu7Js664s67pmqq5suqotm64s667s2rYqy7ovuq5uq7Ks+6os+75s67ru2rrwi65r66os674qy74x27bwy7ouHJMnqqqnqq7rmarrqq5r26rr2rqmmq5suq4tm6or26os67Yry7aumaosm64r26bryrIqy77vyrJui67r66Ys67oqy8Lu6roxzLat+6Lr6roqy7qvyrKuu7ru+7JuC7umqrpuyrKvm7Ks+7auC8us27oxuq7vq7It/KosC7+u+8Iy6z5jdF1fV21ZGFbZ9n3d95Vj1nVhWW1b+V1bZ7y+bgy7bvzKrQvLstq2scy6rSyvrxvDLux8W/iVmqratum6um7Ksq/Lui60dd1XRtf1fdW2fV+VZd+3hV9pG8OwjK6r+6os68Jry8ov67qw7MIvLKttK7+r68ow27qw3L6wLL/uC8uq277v6rrStXVluX2fsSu38QsAABhwAAAIMKEMFBqyIgCIEwBAEHIOKQahYgpCCKGkEEIqFWNSMuakZM5JKaWUFEpJrWJMSuaclMwxKaGUlkopqYRSWiqlxBRKaS2l1mJKqcVQSmulpNZKSa2llGJMrcUYMSYlc05K5pyUklJrJZXWMucoZQ5K6iCklEoqraTUYuacpA46Kx2E1EoqMZWUYgupxFZKaq2kFGMrMdXUWo4hpRhLSrGVlFptMdXWWqs1YkxK5pyUzDkqJaXWSiqtZc5J6iC01DkoqaTUYiopxco5SR2ElDLIqJSUWiupxBJSia20FGMpqcXUYq4pxRZDSS2WlFosqcTWYoy1tVRTJ6XFklKMJZUYW6y5ttZqDKXEVkqLsaSUW2sx1xZjjqGkFksrsZWUWmy15dhayzW1VGNKrdYWY40x5ZRrrT2n1mJNMdXaWqy51ZZbzLXnTkprpZQWS0oxttZijTHmHEppraQUWykpxtZara3FXEMpsZXSWiypxNhirLXFVmNqrcYWW62ltVprrb3GVlsurdXcYqw9tZRrrLXmWFNtBQAADDgAAASYUAYKDVkJAEQBAADGMMYYhEYpx5yT0ijlnHNSKucghJBS5hyEEFLKnINQSkuZcxBKSSmUklJqrYVSUmqttQIAAAocAAACbNCUWByg0JCVAEAqAIDBcTRNFFXVdX1fsSxRVFXXlW3jVyxNFFVVdm1b+DVRVFXXtW3bFn5NFFVVdmXZtoWiqrqybduybgvDqKqua9uybeuorqvbuq3bui9UXVmWbVu3dR3XtnXd9nVd+Bmzbeu2buu+8CMMR9/4IeTj+3RCCAAAT3AAACqwYXWEk6KxwEJDVgIAGQAAgDFKGYUYM0gxphhjTDHGmAAAgAEHAIAAE8pAoSErAoAoAADAOeecc84555xzzjnnnHPOOeecc44xxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY0wAwE6EA8BOhIVQaMhKACAcAABACCEpKaWUUkoRU85BSSmllFKqFIOMSkoppZRSpBR1lFJKKaWUIqWgpJJSSimllElJKaWUUkoppYw6SimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaVUSimllFJKKaWUUkoppRQAYPLgAACVYOMMK0lnhaPBhYasBAByAwAAhRiDEEJpraRUUkolVc5BKCWUlEpKKZWUUqqYgxBKKqmlklJKKbXSQSihlFBKKSWUUkooJYQQSgmhlFRCK6mEUkoHoYQSQimhhFRKKSWUzkEoIYUOQkmllNRCSB10VFIpIZVSSiklpZQ6CKGUklJLLZVSWkqpdBJSKamV1FJqqbWSUgmhpFZKSSWl0lpJJbUSSkklpZRSSymFVFJJJYSSUioltZZaSqm11lJIqZWUUkqppdRSSiWlkEpKqZSSUmollZRSaiGVlEpJKaTUSimlpFRCSamlUlpKLbWUSkmptFRSSaWUlEpJKaVSSksppRJKSqmllFpJKYWSUkoplZJSSyW1VEoKJaWUUkmptJRSSymVklIBAEAHDgAAAUZUWoidZlx5BI4oZJiAAgAAQABAgAkgMEBQMApBgDACAQAAAADAAAAfAABHARAR0ZzBAUKCwgJDg8MDAAAAAAAAAAAAAACAT2dnUwAEAAAAAAAAAADqnjMlAgAAADzQPmcBAQA=";if(/micromessenger/.test(d))x=!1;else try{var n=new Audio,r=n.canPlayType("audio/ogg")?t:e;n.autoplay=!0,n.addEventListener("play",function(){x=!0},!1),n.src=r}catch(i){}}();var T=function(e,t){var n=this,r={elementWrapSelector:"",pagePosition:"",elementWrapPosition:"top",buttonColor:"rgba(255,255,255,.9)",bgImageSelector:"",originWidth:360,originHeight:568,music:!1,upArrow:!0,duration:500,disableAnimation:!1,onReady:null,onElementReady:null,onElementAnimate:null,scope:n};e&&!t&&(t=e,e=null),e=e?s(e)?p.querySelector(e):e:p.body,e.style.position="relative",n.ct=e,n.options=u(r,t),n.options.pagePosition=n.options.pagePosition||n.options.elementWrapPosition,n.elements={},n.adjustPosition();var i=n.options.boxOptions||{};n.originBeforeSlide=i.beforeSlide,n.originOnSlide=i.onSlide,n.originOnResize=i.onResize,n.originScope=i.scope,i.beforeSlide=n.beforeSlide,i.onSlide=n.onSlide,i.onResize=n.onResize,i.scope=n,n.box=new TouchBox(e,i),n.initEvents(),n.initMusic(),n.initUpArrow(),n.toggleUpArrow(n.box.active),n.box.resize(),n.ee.fireEvent("ready");var o=n.box.getContext(0);n.prepareElementReady(0),o.prev>-1&&n.prepareElementReady(o.prev),o.next>-1&&n.prepareElementReady(o.next)};T.prototype={initEvents:function(){this.ee=new TouchBox.EventEmitter(null,this.options.scope),this.options.onReady&&this.ee.on("ready",this.options.onReady),this.options.onElementReady&&this.ee.on("elementready",this.options.onElementReady),this.options.onElementAnimate&&this.ee.on("elementanimate",this.options.onElementAnimate)},on:function(){this.ee.on.apply(this.ee,arguments)},off:function(){this.ee.off.apply(this.ee,arguments)},initMusic:function(){var t=this.options.music;if(t){if(s(t)&&(t={src:t}),!t.src)return;c(".touchstyle-headphone{"+S.cssPrefix+"box-sizing:border-box;position:fixed;top:20px;right:20px;z-index:9999;width:32px;height:32px;border:2px solid "+this.options.buttonColor+";background-color:rgba(0,0,0,.3);"+S.cssPrefix+"background-size:20px 20px;"+S.cssPrefix+"border-radius:16px 16px;cursor:pointer;}.touchstyle-headphone>.icon{"+S.cssPrefix+"box-sizing:border-box;margin:4px 0 0 5px;width:18px;height:18px;border:2px solid "+this.options.buttonColor+";border-radius:50px 50px 0 0;border-bottom:none;}.touchstyle-headphone>.icon:before{"+S.cssPrefix+'box-sizing:border-box;position:absolute;content:"";top:14px;left:8px;width:4px;height:8px;background-color:'+this.options.buttonColor+";border-radius:0 2px 2px 0;}.touchstyle-headphone>.icon:after{"+S.cssPrefix+'box-sizing:border-box;position:absolute;content:"";top:14px;left:16px;width:4px;height:8px;background:'+this.options.buttonColor+";border-radius:2px 0 0 2px;}@"+S.cssPrefix+"keyframes touchstyle-music-paly-animate { from {"+S.cssPrefix+"transform:rotate(0deg);} to {"+S.cssPrefix+"transform:rotate(360deg);} }"),this.createMusicElement(),this.audio=new Audio,this.audio.preload=!1,this.audio.loop=t.loop===!0,this.audio.src=t.src,t.autoPlay!==!1&&!b.ios&&x&&(this.audio.addEventListener("canplay",this,!1),this.audio.load()),this.audio.addEventListener("ended",this,!1),this.audio.addEventListener("pause",this,!1),w&&(e.addEventListener("focus",this,!1),e.addEventListener("blur",this,!1),p.addEventListener(S.propPrefix+"visibilitychange",this,!1))}},createMusicElement:function(){var e=this.options.music;this.musicEl||(this.musicEl=p.createElement("div"),this.musicEl.className=e.css?e.css:"touchstyle-headphone",e.style&&(this.musicEl.style.cssText=e.style),this.musicEl.innerHTML='<div class="icon"></div>',this.ct.appendChild(this.musicEl),this.musicEl.addEventListener(E.start,this,!1),this.musicEl.addEventListener(E.end,this,!1),this.musicEl.addEventListener(E.cancel,this,!1))},removeMusicElement:function(){this.musicEl.removeEventListener(E.start,this,!1),this.musicEl.removeEventListener(E.end,this,!1),this.musicEl.removeEventListener(E.cancel,this,!1),this.ct.removeChild(this.musicEl),this.musicEl=null},initUpArrow:function(){var e=this.options.upArrow;e&&this.box.getLength()>1&&(e=e===!0?{}:e,c(".touchstyle-arrowup{"+S.cssPrefix+'box-sizing:border-box;position:fixed;bottom:20px;left:50%;z-index:9999;margin-left:-15px;width:34px;height:16px;opacity:0;}.touchstyle-arrowup:before{content:"";'+S.cssPrefix+"box-sizing:border-box;display:block;position:absolute;top:4px;left:7px;width:18px;height:18px;border:2px solid "+this.options.buttonColor+";border-left-width:0;border-bottom-width:0;"+S.cssPrefix+"transform:rotate(-45deg) skew(5deg,5deg);}@"+S.cssPrefix+"keyframes touchstyle-arrow-animate{ 0% {"+S.cssPrefix+"transform:translateY(0);opacity:0;} 33% {opacity:.8;} 50% {"+S.cssPrefix+"transform:translateY(-8px);opacity:.8;} 66% {opacity:.8;} 100% {"+S.cssPrefix+"transform:translateY(-16px);opacity:0;} }"),this.arrowEl=p.createElement("div"),this.arrowEl.className=e.css?e.css:"touchstyle-arrowup",e.style&&(this.arrowEl.style.cssText=e.style),this.ct.appendChild(this.arrowEl))},playMusic:function(e){(!e||this.manualPause!==!0&&this.options.music&&this.options.music.autoPlay!==!1)&&this.musicEl&&!this.playing&&(this.playing=!0,this.musicEl.style[S.animation]="touchstyle-music-paly-animate 1s linear infinite",this.audio.play())},stopMusic:function(){this.musicEl&&this.playing&&this.audio.pause()},onMusicPause:function(){this.playing=!1,this.removeMusicElement(),this.createMusicElement()},showUpArrow:function(){this.arrowEl&&(this.arrowEl.style.display="",this.arrowEl.style.opacity=0,this.arrowEl.style[S.animation]="touchstyle-arrow-animate 2s infinite")},hideUpArrow:function(){this.arrowEl&&(this.arrowEl.style.display="none",this.arrowEl.style[S.animation]="")},toggleUpArrow:function(e){this.box&&!this.box.loop&&(e===this.box.getLast()?this.hideUpArrow():this.showUpArrow())},beforeSlide:function(e){return this.playMusic(!0),this.box&&this.prepareElementReady(e),this.originBeforeSlide&&this.originBeforeSlide.apply(this.originScope||this.box,arguments)===!1?!1:void (this.box&&this.toggleUpArrow(e))},onSlide:function(e,t){e!=t&&this.animateElement(e);var n=this.box.getContext();n.prev>-1&&this.prepareElementReady(n.prev),n.next>-1&&this.prepareElementReady(n.next),this.originOnSlide&&this.originOnSlide.apply(this.originScope||this.box,arguments)},onResize:function(e,t){var n=this;n.box&&(n.adjustPosition(e,t),n.originOnResize&&n.originOnResize.apply(n.originScope||n.box,arguments))},adjustPosition:function(t,n){var r=this;t=t||e.innerWidth,n=n||e.innerHeight;var i,s,u=r.options.pagePosition,a="position:absolute;left:0;right:0;",f=t,l=Math.round(f*r.options.originHeight/r.options.originWidth);if("top"==u)a+="top:0;width:"+f+"px;",i=a,s=a+"height:"+l+"px";else if("bottom"==u)a+="bottom:0;width:"+f+"px;",i=a,s=a+"height:"+l+"px";else if("center"==u)a+="top:"+(n-l)/2+"px;width:"+f+"px;",i=a,s=a+"height:"+l+"px";else if("auto"==u){var c,h,p,d=r.options.originHeight/r.options.originWidth,v=n/t;a+="top:0;width:"+r.options.originWidth+"px;",i=a+"top:0;bottom:0;height:100%;",s=a+"height:"+r.options.originHeight+"px;",v>d?(c=t/r.options.originWidth,h="0",p=(n-r.options.originHeight*c)/2+"px"):(c=n/r.options.originHeight,p="0",h=(t-r.options.originWidth*c)/2+"px"),r.ct.style.width=r.options.originWidth+"px",r.ct.style.height=r.options.originHeight+"px",r.ct.style.top=p,r.ct.style.left=h,r.ct.style[S.transform]="scale("+c+")",r.ct.style[S.transformOrigin]="0 0"}else a+="top:0;bottom:0;width:100%;height:100%;",i=a,s=a;r.box&&o(r.box.getItems(),function(e){r.adjustItemPosition(e,{w:t,h:n,width:f,height:l},{baseCssText:a,bgImageCssText:i,elementWrapCssText:s})})},adjustItemPosition:function(e,t,n){var r,i,s=this,u=t.w,a=t.h,f=t.width,l=(t.height,n.baseCssText),c=n.bgImageCssText,p=n.elementWrapCssText,d=s.options.pagePosition;e.style.overflow="hidden","auto"==d&&(e.style.width=s.options.originWidth+"px",e.style.height=s.options.originHeight+"px"),s.options.bgImageSelector?r=e.querySelector(s.options.bgImageSelector):o(Array.prototype.slice.call(e.children,0),function(e){return/img/i.test(e.tagName)?(r=e,!1):void 0}),r&&(r.style.cssText=c,"center"==d&&h(r,r.src,function(e,t){r&&(r.style.cssText=l+"top:"+(a-u*t/e)/2+"px;width:"+f+"px;")})),s.options.elementWrapSelector&&(i=e.querySelector(s.options.elementWrapSelector),i&&(i.style.cssText=p))},getElement:function(e){var t=this.box.getItem(e),n=t.id||e,r=this.elements[n];return!r&&this.options.elements[n]&&(r=this.elements[n]=u([],this.options.elements[n])),r},prepareElementReady:function(e){var t=this,r=t.getElement(e);if(r){var i,s=t.box.getItem(e);t.options.elementWrapSelector&&(i=s.querySelector(t.options.elementWrapSelector)),i=i||s,o(r,function(e){var r=e.el;r||(r=p.createElement("div"),e.id&&(r.id=e.id),e.css&&(r.className=e.css),r.style.cssText=e.style||"",r.style.zIndex=e.zIndex||10,r.style.display="none",r.innerHTML=n(e.body)?e.body():e.body,"elementWrap"==e.relativePosition||i==s?i.appendChild(r):s.insertBefore(r,i),e.el=r,t.ee.fireEvent("elementready",r)),o(e.timer,function(e){clearTimeout(e)}),l(r,t.getAnimateFunction(e)),e.animation&&"out"!=e.animationType&&t.options.disableAnimation!==!0?(r.style.opacity=0,r.style.display="none"):r.style.display=""})}},animateElement:function(e){var t=this,n=t.getElement(e);n&&o(n,function(e){e.timer=[];var n=e.el;if(n&&e.animation&&t.options.disableAnimation!==!0){var r=i(e.duration)?e.duration:t.options.duration;n.style[S.animationDuration]=r+"ms",n.style[S.animationIterationCount]=e.infinite||0===e.animationIteration?"infinite":e.animationIteration,n.style.display="",e.timer.push(setTimeout(function(){n.style.opacity=1,a(n,r,function(){t.ee.fireEvent("elementanimate",n)}),f(n,t.getAnimateFunction(e))},e.delay||0))}})},getAnimateFunction:function(e){return(e.animation||"")+" animated"},handleEvent:function(t){if(t.currentTarget===this.audio)switch(t.type){case"ended":case"pause":this.onMusicPause(t);break;case"canplay":this.playMusic()}else if(t.currentTarget===this.musicEl)switch(t.type){case E.start:t.preventDefault(),t.stopPropagation();break;case E.end:case E.cancel:this.playing?(this.manualPause=!0,this.stopMusic()):(this.manualPause=!1,this.playMusic())}else if(t.currentTarget===e)switch(t.type){case"focus":this.firstPageShow?this.playMusic(!0):this.firstPageShow=!0;break;case"blur":this.stopMusic()}else t.currentTarget===p&&t.type===S.propPrefix+"visibilitychange"&&(p[S.prefixStyle("hidden")]?this.stopMusic():this.playMusic(!0))},destroy:function(){this.destroyed||(this.destroyed=!0,this.musicEl&&(this.audio.pause(),this.audio.removeEventListener("canplay",this,!1),this.audio.removeEventListener("ended",this,!1),this.audio.removeEventListener("pause",this,!1),this.audio=null,this.removeMusicElement()),this.ct=null,e.removeEventListener("focus",this,!1),e.removeEventListener("blur",this,!1),p.removeEventListener(S.propPrefix+"visibilitychange",this,!1))}},e.TouchStyle=T}(window);
(function() {
  // 微信分享提示
  var weixinShareEl = document.getElementById('touchStyleWeixinShare');

  function showWeixinShare() {
    if (weixinShareEl) {
      weixinShareEl.style.display = 'block';
    }
  }

  function hideWeixinShare() {
    if (weixinShareEl) {
      weixinShareEl.style.display = 'none';
    }
  }
  if (weixinShareEl) {
    weixinShareEl.addEventListener('click', hideWeixinShare, false);
  }

  // Loader
  function loadImage(src, callback) {
    var img = document.createElement("img");

    function loadComplete() {
      img = null;
      if (callback) callback();
    }
    img.onerror = loadComplete;
    img.onload = loadComplete;
    img.src = src;
  }
  var ImageLoader = {
    loadImage: loadImage,
    loadImages: function(images, callback) {
      var count = 0,
        i = 0,
        len,
        check;

      if (images && (len = images.length) > 0) {
        check = function() {
          if (count === len) {
            setTimeout(function() {
              if (callback) callback(100);
            }, 3e2);
          } else {
            ++count;
            if (callback) callback(Math.floor(count / len * 100));
          }
        };
        for (; i < len; ++i) {
          loadImage(images[i], check);
        }
      } else {
        if (callback) callback(100);
      }
    }
  };


  window.WeixinAPI = new TouchBox.EventEmitter();

  function initWeixinApi(result) {
    wx.config({
      debug: false,
      appId: result.appId,
      timestamp: result.timestamp,
      nonceStr: result.nonceStr,
      signature: result.signature,
      jsApiList: [
        'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo'
      ]
    });
    wx.ready(function() {
      // wx.checkJsApi({
      //   jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage',], // 需要检测的JS接口列表，所有JS接口列表见附录2,
      //   success: function(res) {
      //       // 以键值对的形式返回，可用的api值true，不可用为false
      //       // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
      //     // alert(JSON.stringify(res));
      //   }
      // });
      var intelData = {
        'appId': '', // 服务号可以填写appId，没有则留空
        'imgUrl': 'http://1.icubic.sinaapp.com/intel/img/fenxiang.jpg', // 分享显示的图标
        'link': window.location.href, // 分享链接
        'title': '英特尔&沃特沃德全芯手机平台发布会', // 分享标题
        'desc': '当国内最大手机方案商沃特沃德遇上英特尔凌动x3处理器，两者会擦出怎样的火花？' // 分享内容
      };
      wx.onMenuShareTimeline({
        title: intelData.desc, // 分享标题
        link: intelData.link, // 分享链接
        imgUrl: intelData.imgUrl, // 分享图标
        cancel: function(resp) {
          WeixinAPI.fireEvent('cancel');
        },
        success: function(resp) {
          WeixinAPI.fireEvent('ok');
          hideWeixinShare();
        }
      });
      document.querySelector('#onMenuShareAppMessage').onclick = function () {
          wx.onMenuShareAppMessage({
            title: '互联网之子 方倍工作室',
            desc: '在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所有事，那些所谓本来如此，注定如此的事，它们其实没有非得如此，事情是可以改变的。更重要的是，有些事既然错了，那就该做出改变。',
            link: 'http://movie.douban.com/subject/25785114/',
            imgUrl: 'http://img3.douban.com/view/movie_poster_cover/spst/public/p2166127561.jpg',
            trigger: function (res) {
              alert('用户点击发送给朋友');
            },
            success: function (res) {
              alert('已分享');
            },
            cancel: function (res) {
              alert('已取消');
            },
            fail: function (res) {
              alert(JSON.stringify(res));
            }
          });
          alert('已注册获取“发送给朋友”状态事件');
        };
      // wx.onMenuShareAppMessage({
      //   title: intelData.title,
      //   desc: intelData.desc,
      //   link: intelData.link,
      //   imgUrl: intelData.imgUrl,
      //   cancel: function(resp) {
      //     alert('已取消')
      //     WeixinAPI.fireEvent('cancel');
      //   },
      //   success: function(resp) {
      //     WeixinAPI.fireEvent('ok');
      //     hideWeixinShare();
      //   }
      // });
    });
  }

  var escapeHTML = (function() {
    var escapeMap = {
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
        "&": "&amp;"
      },
      escapeRe = /&(?![\w#]+;)|[<>"']/g,
      escapeFn = function(s) {
        return escapeMap[s];
      };
    return function(str) {
      return String(str || '').replace(escapeRe, escapeFn);
    };
  }());

  var unescapeHTML = (function() {
    var unescapeMap = {
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&apos;": "'",
        "&amp;": "&"
          // "&#60;": "<",
          // "&#62;": ">",
          // "&#34;": '"',
          // "&#39;": "'",
          // "&#38;": "&"
      },
      unescapeRe = /&\w+;/g,
      unescapeFn = function(s) {
        return unescapeMap[s] || s;
      };
    return function(str) {
      return String(str || '').replace(unescapeRe, unescapeFn);
    };
  }());


  window.TouchStyleUtil = {
    showWeixinShare: showWeixinShare,
    ImageLoader: ImageLoader,
    initWeixinApi: initWeixinApi,
    escapeHTML: escapeHTML,
    unescapeHTML: unescapeHTML
  };
}());
