"use strict";(self.webpackChunkhya_fiuner_github_io=self.webpackChunkhya_fiuner_github_io||[]).push([[2868],{8478:(n,t,e)=>{e.d(t,{A:()=>a});e(6540);var i=e(2303),o=e(4848);function a(n){let{children:t,fallback:e}=n;return(0,i.A)()?(0,o.jsx)(o.Fragment,{children:t?.()}):e??null}},3217:(n,t,e)=>{e.d(t,{GT:()=>pn,WZ:()=>dn});var i=e(6540),o=function(n,t){return Number(n.toFixed(t))},a=function(n,t,e){e&&"function"==typeof e&&e(n,t)},r={easeOut:function(n){return-Math.cos(n*Math.PI)/2+.5},linear:function(n){return n},easeInQuad:function(n){return n*n},easeOutQuad:function(n){return n*(2-n)},easeInOutQuad:function(n){return n<.5?2*n*n:(4-2*n)*n-1},easeInCubic:function(n){return n*n*n},easeOutCubic:function(n){return--n*n*n+1},easeInOutCubic:function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},easeInQuart:function(n){return n*n*n*n},easeOutQuart:function(n){return 1- --n*n*n*n},easeInOutQuart:function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},easeInQuint:function(n){return n*n*n*n*n},easeOutQuint:function(n){return 1+--n*n*n*n*n},easeInOutQuint:function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}},s=function(n){"number"==typeof n&&cancelAnimationFrame(n)},l=function(n){n.mounted&&(s(n.animation),n.animate=!1,n.animation=null,n.velocity=null)};function u(n,t,e,i){if(n.mounted){var o=(new Date).getTime();l(n),n.animation=function(){if(!n.mounted)return s(n.animation);var a=(new Date).getTime()-o,l=a/e,u=(0,r[t])(l);a>=e?(i(1),n.animation=null):n.animation&&(i(u),requestAnimationFrame(n.animation))},requestAnimationFrame(n.animation)}}function c(n,t,e,i){var o=function(n){var t=n.scale,e=n.positionX,i=n.positionY;return!(Number.isNaN(t)||Number.isNaN(e)||Number.isNaN(i))}(t);if(n.mounted&&o){var a=n.setTransformState,r=n.transformState,s=r.scale,l=r.positionX,c=r.positionY,p=t.scale-s,f=t.positionX-l,m=t.positionY-c;0===e?a(t.scale,t.positionX,t.positionY):u(n,i,e,(function(n){a(s+p*n,l+f*n,c+m*n)}))}}var p=function(n,t){var e=n.wrapperComponent,i=n.contentComponent,o=n.setup.centerZoomedOut;if(!e||!i)throw new Error("Components are not mounted");var a=function(n,t,e){var i=n.offsetWidth,o=n.offsetHeight,a=t.offsetWidth*e,r=t.offsetHeight*e;return{wrapperWidth:i,wrapperHeight:o,newContentWidth:a,newDiffWidth:i-a,newContentHeight:r,newDiffHeight:o-r}}(e,i,t),r=a.wrapperWidth,s=a.wrapperHeight,l=function(n,t,e,i,o,a,r){var s=n>t?e*(r?1:.5):0,l=i>o?a*(r?1:.5):0;return{minPositionX:n-t-s,maxPositionX:s,minPositionY:i-o-l,maxPositionY:l}}(r,a.newContentWidth,a.newDiffWidth,s,a.newContentHeight,a.newDiffHeight,Boolean(o));return l},f=function(n,t,e,i){return o(i?n<t?t:n>e?e:n:n,2)},m=function(n,t){var e=p(n,t);return n.bounds=e,e};function d(n,t,e,i,o,a,r){var s=e.minPositionX,l=e.minPositionY,u=e.maxPositionX,c=e.maxPositionY,p=0,m=0;return r&&(p=o,m=a),{x:f(n,s-p,u+p,i),y:f(t,l-m,c+m,i)}}function v(n,t,e,i,o,a){var r=n.transformState,s=r.scale,l=r.positionX,u=r.positionY,c=i-s;return"number"!=typeof t||"number"!=typeof e?(console.error("Mouse X and Y position were not provided!"),{x:l,y:u}):d(l-t*c,u-e*c,o,a,0,0,null)}function h(n,t,e,i,o){var a=t-(o?i:0);return!Number.isNaN(e)&&n>=e?e:!Number.isNaN(t)&&n<=a?a:n}var g=function(n,t){var e=n.setup.panning.excluded,i=n.isInitialized,o=n.wrapperComponent,a=t.target,r="shadowRoot"in a&&"composedPath"in t?t.composedPath().some((function(n){return n instanceof Element&&(null==o?void 0:o.contains(n))})):null==o?void 0:o.contains(a);return!!(i&&a&&r)&&!J(a,e)},S=function(n){var t=n.isInitialized,e=n.isPanning,i=n.setup.panning.disabled;return!(!t||!e||i)};function w(n,t,e,i,o){var a=n.setup.limitToBounds,r=n.wrapperComponent,s=n.bounds,l=n.transformState,u=l.scale,c=l.positionX,p=l.positionY;if(null!==r&&null!==s&&(t!==c||e!==p)){var f=d(t,e,s,a,i,o,r),m=f.x,v=f.y;n.setTransformState(u,m,v)}}var y=function(n,t){var e=n.setup,i=n.transformState.scale,o=e.minScale,a=e.disablePadding;return t>0&&i>=o&&!a?t:0},b=function(n){var t=n.mounted,e=n.setup,i=e.disabled,o=e.velocityAnimation,a=n.transformState.scale;return!(o.disabled&&!(a>1)&&i&&!t)},C=function(n){var t=n.mounted,e=n.velocity,i=n.bounds,o=n.setup,a=o.disabled,r=o.velocityAnimation,s=n.transformState.scale;return!(r.disabled&&!(s>1)&&a&&!t)&&!(!e||!i)};function P(n,t,e,i,o,a,r,s,l,u){if(o){var c;if(t>r&&e>r)return(c=r+(n-r)*u)>l?l:c<r?r:c;if(t<a&&e<a)return(c=a+(n-a)*u)<s?s:c>a?a:c}return i?t:f(n,a,r,o)}function T(n,t){if(b(n)){var e=n.lastMousePosition,i=n.velocityTime,o=n.setup,a=n.wrapperComponent,r=o.velocityAnimation.equalToMove,s=Date.now();if(e&&i&&a){var l=function(n,t){return t?Math.min(1,n.offsetWidth/window.innerWidth):1}(a,r),u=t.x-e.x,c=t.y-e.y,p=u/l,f=c/l,m=s-i,d=u*u+c*c,v=Math.sqrt(d)/m;n.velocity={velocityX:p,velocityY:f,total:v}}n.lastMousePosition=t,n.velocityTime=s}}function x(n,t){var e=n.transformState.scale;l(n),m(n,e),void 0!==window.TouchEvent&&t instanceof TouchEvent?function(n,t){var e=t.touches,i=n.transformState,o=i.positionX,a=i.positionY;if(n.isPanning=!0,1===e.length){var r=e[0].clientX,s=e[0].clientY;n.startCoords={x:r-o,y:s-a}}}(n,t):function(n,t){var e=n.transformState,i=e.positionX,o=e.positionY;n.isPanning=!0;var a=t.clientX,r=t.clientY;n.startCoords={x:a-i,y:r-o}}(n,t)}function Y(n){var t=n.transformState.scale,e=n.setup,i=e.minScale,o=e.alignmentAnimation,a=o.disabled,r=o.sizeX,s=o.sizeY,l=o.animationTime,u=o.animationType;if(!(a||t<i||!r&&!s)){var p=function(n){var t=n.transformState,e=t.positionX,i=t.positionY,o=t.scale,a=n.setup,r=a.disabled,s=a.limitToBounds,l=a.centerZoomedOut,u=n.wrapperComponent;if(!r&&u&&n.bounds){var c=n.bounds,p=c.maxPositionX,f=c.minPositionX,m=c.maxPositionY,d=c.minPositionY,h=e>p||e<f,g=i>m||i<d,S=v(n,e>p?u.offsetWidth:n.setup.minPositionX||0,i>m?u.offsetHeight:n.setup.minPositionY||0,o,n.bounds,s||l),w=S.x,y=S.y;return{scale:o,positionX:h?w:e,positionY:g?y:i}}}(n);p&&c(n,p,l,u)}}function E(n,t,e){var i=n.startCoords,o=n.setup.alignmentAnimation,a=o.sizeX,r=o.sizeY;if(i){var s=function(n,t,e){var i=n.startCoords,o=n.transformState,a=n.setup.panning,r=a.lockAxisX,s=a.lockAxisY,l=o.positionX,u=o.positionY;if(!i)return{x:l,y:u};var c=t-i.x,p=e-i.y;return{x:r?l:c,y:s?u:p}}(n,t,e),l=s.x,u=s.y,c=y(n,a),p=y(n,r);T(n,{x:l,y:u}),w(n,l,u,c,p)}}function X(n){if(n.isPanning){var t=n.setup.panning.velocityDisabled,e=n.velocity,i=n.wrapperComponent,o=n.contentComponent;n.isPanning=!1,n.animate=!1,n.animation=null;var a=null==i?void 0:i.getBoundingClientRect(),s=null==o?void 0:o.getBoundingClientRect(),l=(null==a?void 0:a.width)||0,c=(null==a?void 0:a.height)||0,p=(null==s?void 0:s.width)||0,f=(null==s?void 0:s.height)||0,m=l<p||c<f;!t&&e&&(null==e?void 0:e.total)>.1&&m?function(n){var t=n.velocity,e=n.bounds,i=n.setup,o=n.wrapperComponent;if(C(n)&&t&&e&&o){var a=t.velocityX,s=t.velocityY,l=t.total,c=e.maxPositionX,p=e.minPositionX,f=e.maxPositionY,m=e.minPositionY,d=i.limitToBounds,v=i.alignmentAnimation,h=i.zoomAnimation,g=i.panning,S=g.lockAxisY,w=g.lockAxisX,b=h.animationType,T=v.sizeX,x=v.sizeY,Y=v.velocityAlignmentTime,E=function(n,t){var e=n.setup.velocityAnimation,i=e.equalToMove,o=e.animationTime,a=e.sensitivity;return i?o*t*a:o}(n,l),X=Math.max(E,Y),k=y(n,T),N=y(n,x),z=k*o.offsetWidth/100,W=N*o.offsetHeight/100,A=c+z,D=p-z,O=f+W,I=m-W,M=n.transformState,B=(new Date).getTime();u(n,b,X,(function(t){var e=n.transformState,i=e.scale,o=e.positionX,l=e.positionY,u=((new Date).getTime()-B)/Y,h=1-(0,r[v.animationType])(Math.min(1,u)),g=1-t,y=o+a*g,b=l+s*g,C=P(y,M.positionX,o,w,d,p,c,D,A,h),T=P(b,M.positionY,l,S,d,m,f,I,O,h);o===y&&l===b||n.setTransformState(i,C,T)}))}}(n):Y(n)}}function k(n,t,e,i){var a=n.setup,r=a.minScale,s=a.maxScale,l=a.limitToBounds,u=h(o(t,2),r,s,0,!1),c=v(n,e,i,u,m(n,u),l);return{scale:u,positionX:c.x,positionY:c.y}}function N(n,t,e){var i=n.transformState.scale,o=n.wrapperComponent,a=n.setup,r=a.minScale,s=a.limitToBounds,l=a.zoomAnimation,u=l.disabled,p=l.animationTime,f=l.animationType,m=u||i>=r;if((i>=1||s)&&Y(n),!m&&o&&n.mounted){var d=k(n,r,t||o.offsetWidth/2,e||o.offsetHeight/2);d&&c(n,d,p,f)}}var z=function(){return z=Object.assign||function(n){for(var t,e=1,i=arguments.length;e<i;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},z.apply(this,arguments)};function W(n,t,e){if(e||2===arguments.length)for(var i,o=0,a=t.length;o<a;o++)!i&&o in t||(i||(i=Array.prototype.slice.call(t,0,o)),i[o]=t[o]);return n.concat(i||Array.prototype.slice.call(t))}var A=1,D=0,O=0,I={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,smooth:!0,wheel:{step:.2,disabled:!1,smoothStep:.001,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,allowLeftClickPan:!0,allowMiddleClickPan:!0,allowRightClickPan:!0,wheelPanning:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},M=function(n){var t,e,i,o;return{previousScale:null!==(t=n.initialScale)&&void 0!==t?t:A,scale:null!==(e=n.initialScale)&&void 0!==e?e:A,positionX:null!==(i=n.initialPositionX)&&void 0!==i?i:D,positionY:null!==(o=n.initialPositionY)&&void 0!==o?o:O}},B=function(n){var t=z({},I);return Object.keys(n).forEach((function(e){var i=void 0!==n[e];if(void 0!==I[e]&&i){var o=Object.prototype.toString.call(I[e]),a="[object Object]"===o,r="[object Array]"===o;t[e]=a?z(z({},I[e]),n[e]):r?W(W([],I[e],!0),n[e],!0):n[e]}})),t},K=function(n,t,e){var i=n.transformState.scale,a=n.wrapperComponent,r=n.setup,s=r.maxScale,l=r.minScale,u=r.zoomAnimation,c=r.smooth,p=u.size;if(!a)throw new Error("Wrapper is not mounted");var f=c?i*Math.exp(t*e):i+t*e;return h(o(f,3),l,s,p,!1)};function L(n,t,e,i,o){var a=n.wrapperComponent,r=n.transformState,s=r.scale,l=r.positionX,u=r.positionY;if(!a)return console.error("No WrapperComponent found");var p=(a.offsetWidth/2-l)/s,f=(a.offsetHeight/2-u)/s,m=k(n,K(n,t,e),p,f);if(!m)return console.error("Error during zoom event. New transformation state was not calculated.");c(n,m,i,o)}function _(n,t,e,i){var o=n.setup,a=n.wrapperComponent,r=o.limitToBounds,s=M(n.props),l=n.transformState,u=l.scale,f=l.positionX,m=l.positionY;if(a){var v=p(n,s.scale),h=d(s.positionX,s.positionY,v,r,0,0,a),g={scale:s.scale,positionX:h.x,positionY:h.y};u===s.scale&&f===s.positionX&&m===s.positionY||(null==i||i(),c(n,g,t,e))}}var R=function(n){return function(t,e,i){void 0===t&&(t=.5),void 0===e&&(e=300),void 0===i&&(i="easeOut"),L(n,1,t,e,i)}},Z=function(n){return function(t,e,i){void 0===t&&(t=.5),void 0===e&&(e=300),void 0===i&&(i="easeOut"),L(n,-1,t,e,i)}},H=function(n){return function(t,e,i,o,a){void 0===o&&(o=300),void 0===a&&(a="easeOut");var r=n.transformState,s=r.positionX,l=r.positionY,u=r.scale,p=n.wrapperComponent,f=n.contentComponent;if(!n.setup.disabled&&p&&f){var m={positionX:Number.isNaN(t)?s:t,positionY:Number.isNaN(e)?l:e,scale:Number.isNaN(i)?u:i};c(n,m,o,a)}}},F=function(n){return function(t,e){void 0===t&&(t=200),void 0===e&&(e="easeOut"),_(n,t,e)}},j=function(n){return function(t,e,i){void 0===e&&(e=200),void 0===i&&(i="easeOut");var o=n.transformState,a=n.wrapperComponent,r=n.contentComponent;if(a&&r){var s=nn(t||o.scale,a,r);c(n,s,e,i)}}},Q=function(n){return function(t,e,i,o){void 0===i&&(i=600),void 0===o&&(o="easeOut"),l(n);var a=n.wrapperComponent,r="string"==typeof t?document.getElementById(t):t;if(a&&r&&a.contains(r)){var s=function(n,t,e){var i=n.wrapperComponent,o=n.contentComponent,a=n.transformState,r=n.setup,s=r.limitToBounds,l=r.minScale,u=r.maxScale;if(!i||!o)return a;var c,f,m,v,g,S,w,y,b=i.getBoundingClientRect(),C=t.getBoundingClientRect(),P=(c=i,f=o,m=a,v=t.getBoundingClientRect(),g=c.getBoundingClientRect(),S=f.getBoundingClientRect(),w=g.x*m.scale,y=g.y*m.scale,{x:(v.x-S.x+w)/m.scale,y:(v.y-S.y+y)/m.scale}),T=P.x,x=P.y,Y=C.width/a.scale,E=C.height/a.scale,X=i.offsetWidth/Y,k=i.offsetHeight/E,N=h(e||Math.min(X,k),l,u,0,!1),z=(b.width-Y*N)/2,W=(b.height-E*N)/2,A=d((b.left-T)*N+z,(b.top-x)*N+W,p(n,N),s,0,0,i);return{positionX:A.x,positionY:A.y,scale:N}}(n,r,e);c(n,s,i,o)}}},q=function(n){return{instance:n,zoomIn:R(n),zoomOut:Z(n),setTransform:H(n),resetTransform:F(n),centerView:j(n),zoomToElement:Q(n)}},U=function(n){return{instance:n,state:n.transformState}},V=function(n){var t={};return Object.assign(t,U(n)),Object.assign(t,q(n)),t};function G(){try{return{get passive(){return!0,!1}}}catch(n){return!1}}var J=function(n,t){return t.some((function(t){return n.matches("".concat(t,", .").concat(t,", ").concat(t," *, .").concat(t," *"))}))},$=function(n){n&&clearTimeout(n)},nn=function(n,t,e){var i=e.offsetWidth*n,o=e.offsetHeight*n;return{scale:n,positionX:(t.offsetWidth-i)/2,positionY:(t.offsetHeight-o)/2}};function tn(n,t,e){var i=t.getBoundingClientRect(),o=0,a=0;if("clientX"in n)o=(n.clientX-i.left)/e,a=(n.clientY-i.top)/e;else{var r=n.touches[0];o=(r.clientX-i.left)/e,a=(r.clientY-i.top)/e}return(Number.isNaN(o)||Number.isNaN(a))&&console.error("No mouse or touch offset found"),{x:o,y:a}}var en=function(n){return Math.sqrt(Math.pow(n.touches[0].pageX-n.touches[1].pageX,2)+Math.pow(n.touches[0].pageY-n.touches[1].pageY,2))},on=function(n,t){var e=n.props,i=e.onWheel,r=e.onZoom,s=n.contentComponent,l=n.setup,u=n.transformState.scale,c=l.limitToBounds,p=l.centerZoomedOut,f=l.zoomAnimation,d=l.wheel,g=l.disablePadding,S=l.smooth,w=f.size,y=f.disabled,b=d.step,C=d.smoothStep;if(!s)throw new Error("Component not mounted");t.preventDefault(),t.stopPropagation();var P=function(n,t){var e,i,o=function(n){return n?n.deltaY<0?1:-1:0}(n);return i=o,"number"==typeof(e=t)?e:i}(t,null),T=function(n,t,e,i,a){var r=n.transformState.scale,s=n.wrapperComponent,l=n.setup,u=l.maxScale,c=l.minScale,p=l.zoomAnimation,f=l.disablePadding,m=p.size,d=p.disabled;if(!s)throw new Error("Wrapper is not mounted");var v=r+t*e;if(a)return v;var g=!i&&!d;return h(o(v,3),c,u,m,g&&!f)}(n,P,S?C*Math.abs(t.deltaY):b,!t.ctrlKey);if(u!==T){var x=m(n,T),Y=tn(t,s,u),E=c&&(y||0===w||p||g),X=v(n,Y.x,Y.y,T,x,E),k=X.x,N=X.y;n.previousWheelEvent=t,n.setTransformState(T,k,N),a(V(n),t,i),a(V(n),t,r)}},an=function(n,t){var e=n.props,i=e.onWheelStop,o=e.onZoomStop;$(n.wheelAnimationTimer),n.wheelAnimationTimer=setTimeout((function(){n.mounted&&(N(n,t.x,t.y),n.wheelAnimationTimer=null)}),100);var r=function(n,t){var e=n.previousWheelEvent,i=n.transformState.scale,o=n.setup,a=o.maxScale,r=o.minScale;return!!e&&(i<a||i>r||Math.sign(e.deltaY)!==Math.sign(t.deltaY)||e.deltaY>0&&e.deltaY<t.deltaY||e.deltaY<0&&e.deltaY>t.deltaY||Math.sign(e.deltaY)!==Math.sign(t.deltaY))}(n,t);r&&($(n.wheelStopEventTimer),n.wheelStopEventTimer=setTimeout((function(){n.mounted&&(n.wheelStopEventTimer=null,a(V(n),t,i),a(V(n),t,o))}),160))},rn=function(n,t){var e=n.contentComponent,i=n.pinchStartDistance,a=n.transformState.scale,r=n.setup,s=r.limitToBounds,l=r.centerZoomedOut,u=r.zoomAnimation,c=u.disabled,p=u.size;if(null!==i&&e){var f=function(n,t,e){var i=e.getBoundingClientRect(),a=n.touches,r=o(a[0].clientX-i.left,5),s=o(a[0].clientY-i.top,5);return{x:(r+o(a[1].clientX-i.left,5))/2/t,y:(s+o(a[1].clientY-i.top,5))/2/t}}(t,a,e);if(Number.isFinite(f.x)&&Number.isFinite(f.y)){var d=en(t),g=function(n,t){var e=n.pinchStartScale,i=n.pinchStartDistance,a=n.setup,r=a.maxScale,s=a.minScale,l=a.zoomAnimation,u=a.disablePadding,c=l.size,p=l.disabled;if(!e||null===i||!t)throw new Error("Pinch touches distance was not provided");return t<0?n.transformState.scale:h(o(t/i*e,2),s,r,c,!p&&!u)}(n,d);if(g!==a){var S=m(n,g),w=s&&(c||0===p||l),y=v(n,f.x,f.y,g,S,w),b=y.x,C=y.y;n.pinchMidpoint=f,n.lastDistance=d,n.setTransformState(g,b,C)}}}},sn=function(n,t){var e=n.props.onZoomStop,i=n.setup.doubleClick.animationTime;$(n.doubleClickStopEventTimer),n.doubleClickStopEventTimer=setTimeout((function(){n.doubleClickStopEventTimer=null,a(V(n),t,e)}),i)};function ln(n,t){var e=n.setup,i=n.doubleClickStopEventTimer,o=n.transformState,r=n.contentComponent,s=o.scale,l=n.props,u=l.onZoomStart,p=l.onZoom,f=e.doubleClick,m=f.disabled,d=f.mode,v=f.step,h=f.animationTime,g=f.animationType;if(!m&&!i){if("reset"===d)return function(n,t){var e=n.props,i=e.onZoomStart,o=e.onZoom,r=n.setup.doubleClick,s=r.animationTime,l=r.animationType;a(V(n),t,i),_(n,s,l,(function(){return a(V(n),t,o)})),sn(n,t)}(n,t);if(!r)return console.error("No ContentComponent found");var S=function(n,t){return"toggle"===n?1===t?1:-1:"zoomOut"===n?-1:1}(d,n.transformState.scale),w=K(n,S,v);if(s!==w){a(V(n),t,u);var y=tn(t,r,s),b=k(n,w,y.x,y.y);if(!b)return console.error("Error during zoom event. New transformation state was not calculated.");a(V(n),t,p),c(n,b,h,g),sn(n,t)}}}var un=function(n){var t=this;this.mounted=!0,this.onChangeCallbacks=new Set,this.onInitCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.isWheelPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){t.initializeWindowEvents()},this.unmount=function(){t.cleanupWindowEvents()},this.update=function(n){t.props=n,m(t,t.transformState.scale),t.setup=B(n)},this.initializeWindowEvents=function(){var n,e,i=G(),o=null===(n=t.wrapperComponent)||void 0===n?void 0:n.ownerDocument,a=null==o?void 0:o.defaultView;null===(e=t.wrapperComponent)||void 0===e||e.addEventListener("wheel",t.onWheelPanning,i),null==a||a.addEventListener("mousedown",t.onPanningStart,i),null==a||a.addEventListener("mousemove",t.onPanning,i),null==a||a.addEventListener("mouseup",t.onPanningStop,i),null==o||o.addEventListener("mouseleave",t.clearPanning,i),null==a||a.addEventListener("keyup",t.setKeyUnPressed,i),null==a||a.addEventListener("keydown",t.setKeyPressed,i)},this.cleanupWindowEvents=function(){var n,e,i=G(),o=null===(n=t.wrapperComponent)||void 0===n?void 0:n.ownerDocument,a=null==o?void 0:o.defaultView;null==a||a.removeEventListener("mousedown",t.onPanningStart,i),null==a||a.removeEventListener("mousemove",t.onPanning,i),null==a||a.removeEventListener("mouseup",t.onPanningStop,i),null==o||o.removeEventListener("mouseleave",t.clearPanning,i),null==a||a.removeEventListener("keyup",t.setKeyUnPressed,i),null==a||a.removeEventListener("keydown",t.setKeyPressed,i),document.removeEventListener("mouseleave",t.clearPanning,i),l(t),null===(e=t.observer)||void 0===e||e.disconnect()},this.handleInitializeWrapperEvents=function(n){var e=G();n.addEventListener("wheel",t.onWheelZoom,e),n.addEventListener("dblclick",t.onDoubleClick,e),n.addEventListener("touchstart",t.onTouchPanningStart,e),n.addEventListener("touchmove",t.onTouchPanning,e),n.addEventListener("touchend",t.onTouchPanningStop,e)},this.handleInitialize=function(n){var e=t.setup.centerOnInit;t.applyTransformation(),t.onInitCallbacks.forEach((function(n){return n(V(t))})),e&&(t.setCenter(),t.observer=new ResizeObserver((function(){var e,i=n.offsetWidth,o=n.offsetHeight;(i>0||o>0)&&(t.onInitCallbacks.forEach((function(n){return n(V(t))})),t.setCenter(),null===(e=t.observer)||void 0===e||e.disconnect())})),setTimeout((function(){var n;null===(n=t.observer)||void 0===n||n.disconnect()}),5e3),t.observer.observe(n))},this.onWheelZoom=function(n){if(!t.setup.disabled){var e=function(n,t){var e=n.setup.wheel,i=e.disabled,o=e.wheelDisabled,a=e.touchPadDisabled,r=e.excluded,s=n.isInitialized,l=n.isPanning,u=t.target;return!(!s||l||i||!u||o&&!t.ctrlKey||a&&t.ctrlKey||J(u,r))}(t,n);e&&t.isPressingKeys(t.setup.wheel.activationKeys)&&(function(n,t){var e=n.props,i=e.onWheelStart,o=e.onZoomStart;n.wheelStopEventTimer||(l(n),a(V(n),t,i),a(V(n),t,o))}(t,n),on(t,n),an(t,n))}},this.onWheelPanning=function(n){var e=t.setup,i=e.disabled,o=e.wheel,a=e.panning;if(t.wrapperComponent&&t.contentComponent&&!i&&o.wheelDisabled&&!a.disabled&&a.wheelPanning&&!n.ctrlKey){n.preventDefault(),n.stopPropagation();var r=t.transformState,s=r.positionX,l=r.positionY,u=s-n.deltaX,c=l-n.deltaY,p=a.lockAxisX?s:u,f=a.lockAxisY?l:c,m=t.setup.alignmentAnimation,d=m.sizeX,v=m.sizeY,h=y(t,d),g=y(t,v);p===s&&f===l||w(t,p,f,h,g)}},this.onPanningStart=function(n){var e=t.setup.disabled,i=t.props.onPanningStart;e||g(t,n)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(0!==n.button||t.setup.panning.allowLeftClickPan)&&(1!==n.button||t.setup.panning.allowMiddleClickPan)&&(2!==n.button||t.setup.panning.allowRightClickPan)&&(n.preventDefault(),n.stopPropagation(),l(t),x(t,n),a(V(t),n,i))},this.onPanning=function(n){var e=t.setup.disabled,i=t.props.onPanning;e||S(t)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(n.preventDefault(),n.stopPropagation(),E(t,n.clientX,n.clientY),a(V(t),n,i))},this.onPanningStop=function(n){var e=t.props.onPanningStop;t.isPanning&&(X(t),a(V(t),n,e))},this.onPinchStart=function(n){var e=t.setup.disabled,i=t.props,o=i.onPinchingStart,r=i.onZoomStart;if(!e){var s=function(n,t){var e=n.setup.pinch,i=e.disabled,o=e.excluded,a=n.isInitialized,r=t.target;return!(!a||i||!r||J(r,o))}(t,n);s&&(function(n,t){var e=en(t);n.pinchStartDistance=e,n.lastDistance=e,n.pinchStartScale=n.transformState.scale,n.isPanning=!1,l(n)}(t,n),l(t),a(V(t),n,o),a(V(t),n,r))}},this.onPinch=function(n){var e=t.setup.disabled,i=t.props,o=i.onPinching,r=i.onZoom;if(!e){var s=function(n){var t=n.setup.pinch.disabled,e=n.isInitialized,i=n.pinchStartDistance;return!(!e||t||!i)}(t);s&&(n.preventDefault(),n.stopPropagation(),rn(t,n),a(V(t),n,o),a(V(t),n,r))}},this.onPinchStop=function(n){var e,i,o=t.props,r=o.onPinchingStop,s=o.onZoomStop;t.pinchStartScale&&(i=(e=t).pinchMidpoint,e.velocity=null,e.lastDistance=null,e.pinchMidpoint=null,e.pinchStartScale=null,e.pinchStartDistance=null,N(e,null==i?void 0:i.x,null==i?void 0:i.y),a(V(t),n,r),a(V(t),n,s))},this.onTouchPanningStart=function(n){var e=t.setup.disabled,i=t.props.onPanningStart;if(!e&&g(t,n))if(t.lastTouch&&+new Date-t.lastTouch<200&&1===n.touches.length)t.onDoubleClick(n);else{t.lastTouch=+new Date,l(t);var o=n.touches,r=1===o.length,s=2===o.length;r&&(l(t),x(t,n),a(V(t),n,i)),s&&t.onPinchStart(n)}},this.onTouchPanning=function(n){var e=t.setup.disabled,i=t.props.onPanning;if(t.isPanning&&1===n.touches.length){if(e)return;if(!S(t))return;n.preventDefault(),n.stopPropagation();var o=n.touches[0];E(t,o.clientX,o.clientY),a(V(t),n,i)}else n.touches.length>1&&t.onPinch(n)},this.onTouchPanningStop=function(n){t.onPanningStop(n),t.onPinchStop(n)},this.onDoubleClick=function(n){if(!t.setup.disabled){var e=function(n,t){var e=n.isInitialized,i=n.setup,o=n.wrapperComponent,a=i.doubleClick,r=a.disabled,s=a.excluded,l=t.target,u=null==o?void 0:o.contains(l);return!(!(e&&l&&u)||r||J(l,s))}(t,n);e&&ln(t,n)}},this.clearPanning=function(n){t.isPanning&&t.onPanningStop(n)},this.setKeyPressed=function(n){t.pressedKeys[n.key]=!0},this.setKeyUnPressed=function(n){t.pressedKeys[n.key]=!1},this.isPressingKeys=function(n){return!n.length||Boolean(n.find((function(n){return t.pressedKeys[n]})))},this.setTransformState=function(n,e,i){var o=t.props.onTransformed;if(Number.isNaN(n)||Number.isNaN(e)||Number.isNaN(i))console.error("Detected NaN set state values");else{n!==t.transformState.scale&&(t.transformState.previousScale=t.transformState.scale,t.transformState.scale=n),t.transformState.positionX=e,t.transformState.positionY=i,t.applyTransformation();var r=V(t);t.onChangeCallbacks.forEach((function(n){return n(r)})),a(r,{scale:n,positionX:e,positionY:i},o)}},this.setCenter=function(){if(t.wrapperComponent&&t.contentComponent){var n=nn(t.transformState.scale,t.wrapperComponent,t.contentComponent);t.setTransformState(n.scale,n.positionX,n.positionY)}},this.handleTransformStyles=function(n,e,i){return t.props.customTransform?t.props.customTransform(n,e,i):function(n,t,e){return"translate(".concat(n,"px, ").concat(t,"px) scale(").concat(e,")")}(n,e,i)},this.applyTransformation=function(){if(t.mounted&&t.contentComponent){var n=t.transformState,e=n.scale,i=n.positionX,o=n.positionY,a=t.handleTransformStyles(i,o,e);t.contentComponent.style.transform=a}},this.getContext=function(){return V(t)},this.onChange=function(n){return t.onChangeCallbacks.has(n)||t.onChangeCallbacks.add(n),function(){t.onChangeCallbacks.delete(n)}},this.onInit=function(n){return t.onInitCallbacks.has(n)||t.onInitCallbacks.add(n),function(){t.onInitCallbacks.delete(n)}},this.init=function(n,e){t.cleanupWindowEvents(),t.wrapperComponent=n,t.contentComponent=e,m(t,t.transformState.scale),t.handleInitializeWrapperEvents(n),t.handleInitialize(e),t.initializeWindowEvents(),t.isInitialized=!0;var i=V(t);a(i,void 0,t.props.onInit)},this.props=n,this.setup=B(this.props),this.transformState=M(this.props)},cn=i.createContext(null),pn=i.forwardRef((function(n,t){var e,o,a=(0,i.useRef)(new un(n)).current,r=(e=n.children,o=q(a),"function"==typeof e?e(o):e);return(0,i.useImperativeHandle)(t,(function(){return q(a)}),[a]),(0,i.useEffect)((function(){a.update(n)}),[a,n]),i.createElement(cn.Provider,{value:a},r)}));i.forwardRef((function(n,t){var e,o=(0,i.useRef)(null),a=(0,i.useContext)(cn);return(0,i.useEffect)((function(){return a.onChange((function(n){if(o.current){o.current.style.transform=a.handleTransformStyles(0,0,1/n.instance.transformState.scale)}}))}),[a]),i.createElement("div",z({},n,{ref:(e=[o,t],function(n){e.forEach((function(t){"function"==typeof t?t(n):null!=t&&(t.current=n)}))})}))}));var fn="transform-component-module_wrapper__SPB86",mn="transform-component-module_content__FBWxo";!function(n,t){void 0===t&&(t={});var e=t.insertAt;if(n&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===e&&i.firstChild?i.insertBefore(o,i.firstChild):i.appendChild(o),o.styleSheet?o.styleSheet.cssText=n:o.appendChild(document.createTextNode(n))}}(".transform-component-module_wrapper__SPB86 {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n}\n.transform-component-module_content__FBWxo {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__FBWxo img {\n  pointer-events: none;\n}\n");var dn=function(n){var t=n.children,e=n.wrapperClass,o=void 0===e?"":e,a=n.contentClass,r=void 0===a?"":a,s=n.wrapperStyle,l=n.contentStyle,u=n.wrapperProps,c=void 0===u?{}:u,p=n.contentProps,f=void 0===p?{}:p,m=(0,i.useContext)(cn),d=m.init,v=m.cleanupWindowEvents,h=(0,i.useRef)(null),g=(0,i.useRef)(null);return(0,i.useEffect)((function(){var n=h.current,t=g.current;return null!==n&&null!==t&&d&&(null==d||d(n,t)),function(){null==v||v()}}),[]),i.createElement("div",z({},c,{ref:h,className:"react-transform-wrapper ".concat(fn," ").concat(o),style:s}),i.createElement("div",z({},f,{ref:g,className:"react-transform-component ".concat(mn," ").concat(r),style:l}),t))}},8453:(n,t,e)=>{e.d(t,{R:()=>r,x:()=>s});var i=e(6540);const o={},a=i.createContext(o);function r(n){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function s(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),i.createElement(a.Provider,{value:t},n.children)}}}]);