(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var zf={exports:{}},Mo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function FS(){if(jg)return Mo;jg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Mo.Fragment=e,Mo.jsx=i,Mo.jsxs=i,Mo}var Kg;function HS(){return Kg||(Kg=1,zf.exports=FS()),zf.exports}var He=HS(),Pf={exports:{}},te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function GS(){if(Qg)return te;Qg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),x=Symbol.iterator;function M(L){return L===null||typeof L!="object"?null:(L=x&&L[x]||L["@@iterator"],typeof L=="function"?L:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function _(L,$,yt){this.props=L,this.context=$,this.refs=y,this.updater=yt||R}_.prototype.isReactComponent={},_.prototype.setState=function(L,$){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,$,"setState")},_.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function B(){}B.prototype=_.prototype;function O(L,$,yt){this.props=L,this.context=$,this.refs=y,this.updater=yt||R}var U=O.prototype=new B;U.constructor=O,C(U,_.prototype),U.isPureReactComponent=!0;var K=Array.isArray;function G(){}var z={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function w(L,$,yt){var Y=yt.ref;return{$$typeof:o,type:L,key:$,ref:Y!==void 0?Y:null,props:yt}}function A(L,$){return w(L.type,$,L.props)}function I(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function lt(L){var $={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(yt){return $[yt]})}var it=/\/+/g;function ft(L,$){return typeof L=="object"&&L!==null&&L.key!=null?lt(""+L.key):$.toString(36)}function ot(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(G,G):(L.status="pending",L.then(function($){L.status==="pending"&&(L.status="fulfilled",L.value=$)},function($){L.status==="pending"&&(L.status="rejected",L.reason=$)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function N(L,$,yt,Y,ct){var Et=typeof L;(Et==="undefined"||Et==="boolean")&&(L=null);var xt=!1;if(L===null)xt=!0;else switch(Et){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(L.$$typeof){case o:case e:xt=!0;break;case v:return xt=L._init,N(xt(L._payload),$,yt,Y,ct)}}if(xt)return ct=ct(L),xt=Y===""?"."+ft(L,0):Y,K(ct)?(yt="",xt!=null&&(yt=xt.replace(it,"$&/")+"/"),N(ct,$,yt,"",function(ee){return ee})):ct!=null&&(I(ct)&&(ct=A(ct,yt+(ct.key==null||L&&L.key===ct.key?"":(""+ct.key).replace(it,"$&/")+"/")+xt)),$.push(ct)),1;xt=0;var Bt=Y===""?".":Y+":";if(K(L))for(var zt=0;zt<L.length;zt++)Y=L[zt],Et=Bt+ft(Y,zt),xt+=N(Y,$,yt,Et,ct);else if(zt=M(L),typeof zt=="function")for(L=zt.call(L),zt=0;!(Y=L.next()).done;)Y=Y.value,Et=Bt+ft(Y,zt++),xt+=N(Y,$,yt,Et,ct);else if(Et==="object"){if(typeof L.then=="function")return N(ot(L),$,yt,Y,ct);throw $=String(L),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return xt}function V(L,$,yt){if(L==null)return L;var Y=[],ct=0;return N(L,Y,"","",function(Et){return $.call(yt,Et,ct++)}),Y}function Z(L){if(L._status===-1){var $=L._result;$=$(),$.then(function(yt){(L._status===0||L._status===-1)&&(L._status=1,L._result=yt)},function(yt){(L._status===0||L._status===-1)&&(L._status=2,L._result=yt)}),L._status===-1&&(L._status=0,L._result=$)}if(L._status===1)return L._result.default;throw L._result}var St=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},Tt={map:V,forEach:function(L,$,yt){V(L,function(){$.apply(this,arguments)},yt)},count:function(L){var $=0;return V(L,function(){$++}),$},toArray:function(L){return V(L,function($){return $})||[]},only:function(L){if(!I(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return te.Activity=S,te.Children=Tt,te.Component=_,te.Fragment=i,te.Profiler=l,te.PureComponent=O,te.StrictMode=r,te.Suspense=m,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,te.__COMPILER_RUNTIME={__proto__:null,c:function(L){return z.H.useMemoCache(L)}},te.cache=function(L){return function(){return L.apply(null,arguments)}},te.cacheSignal=function(){return null},te.cloneElement=function(L,$,yt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Y=C({},L.props),ct=L.key;if($!=null)for(Et in $.key!==void 0&&(ct=""+$.key),$)!j.call($,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&$.ref===void 0||(Y[Et]=$[Et]);var Et=arguments.length-2;if(Et===1)Y.children=yt;else if(1<Et){for(var xt=Array(Et),Bt=0;Bt<Et;Bt++)xt[Bt]=arguments[Bt+2];Y.children=xt}return w(L.type,ct,Y)},te.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},te.createElement=function(L,$,yt){var Y,ct={},Et=null;if($!=null)for(Y in $.key!==void 0&&(Et=""+$.key),$)j.call($,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(ct[Y]=$[Y]);var xt=arguments.length-2;if(xt===1)ct.children=yt;else if(1<xt){for(var Bt=Array(xt),zt=0;zt<xt;zt++)Bt[zt]=arguments[zt+2];ct.children=Bt}if(L&&L.defaultProps)for(Y in xt=L.defaultProps,xt)ct[Y]===void 0&&(ct[Y]=xt[Y]);return w(L,Et,ct)},te.createRef=function(){return{current:null}},te.forwardRef=function(L){return{$$typeof:d,render:L}},te.isValidElement=I,te.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:Z}},te.memo=function(L,$){return{$$typeof:p,type:L,compare:$===void 0?null:$}},te.startTransition=function(L){var $=z.T,yt={};z.T=yt;try{var Y=L(),ct=z.S;ct!==null&&ct(yt,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(G,St)}catch(Et){St(Et)}finally{$!==null&&yt.types!==null&&($.types=yt.types),z.T=$}},te.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},te.use=function(L){return z.H.use(L)},te.useActionState=function(L,$,yt){return z.H.useActionState(L,$,yt)},te.useCallback=function(L,$){return z.H.useCallback(L,$)},te.useContext=function(L){return z.H.useContext(L)},te.useDebugValue=function(){},te.useDeferredValue=function(L,$){return z.H.useDeferredValue(L,$)},te.useEffect=function(L,$){return z.H.useEffect(L,$)},te.useEffectEvent=function(L){return z.H.useEffectEvent(L)},te.useId=function(){return z.H.useId()},te.useImperativeHandle=function(L,$,yt){return z.H.useImperativeHandle(L,$,yt)},te.useInsertionEffect=function(L,$){return z.H.useInsertionEffect(L,$)},te.useLayoutEffect=function(L,$){return z.H.useLayoutEffect(L,$)},te.useMemo=function(L,$){return z.H.useMemo(L,$)},te.useOptimistic=function(L,$){return z.H.useOptimistic(L,$)},te.useReducer=function(L,$,yt){return z.H.useReducer(L,$,yt)},te.useRef=function(L){return z.H.useRef(L)},te.useState=function(L){return z.H.useState(L)},te.useSyncExternalStore=function(L,$,yt){return z.H.useSyncExternalStore(L,$,yt)},te.useTransition=function(){return z.H.useTransition()},te.version="19.2.7",te}var Jg;function rd(){return Jg||(Jg=1,Pf.exports=GS()),Pf.exports}var Dn=rd(),Bf={exports:{}},Eo={},If={exports:{}},Ff={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function VS(){return $g||($g=1,(function(o){function e(N,V){var Z=N.length;N.push(V);t:for(;0<Z;){var St=Z-1>>>1,Tt=N[St];if(0<l(Tt,V))N[St]=V,N[Z]=Tt,Z=St;else break t}}function i(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var V=N[0],Z=N.pop();if(Z!==V){N[0]=Z;t:for(var St=0,Tt=N.length,L=Tt>>>1;St<L;){var $=2*(St+1)-1,yt=N[$],Y=$+1,ct=N[Y];if(0>l(yt,Z))Y<Tt&&0>l(ct,yt)?(N[St]=ct,N[Y]=Z,St=Y):(N[St]=yt,N[$]=Z,St=$);else if(Y<Tt&&0>l(ct,Z))N[St]=ct,N[Y]=Z,St=Y;else break t}}return V}function l(N,V){var Z=N.sortIndex-V.sortIndex;return Z!==0?Z:N.id-V.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,S=null,x=3,M=!1,R=!1,C=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function U(N){for(var V=i(p);V!==null;){if(V.callback===null)r(p);else if(V.startTime<=N)r(p),V.sortIndex=V.expirationTime,e(m,V);else break;V=i(p)}}function K(N){if(C=!1,U(N),!R)if(i(m)!==null)R=!0,G||(G=!0,lt());else{var V=i(p);V!==null&&ot(K,V.startTime-N)}}var G=!1,z=-1,j=5,w=-1;function A(){return y?!0:!(o.unstable_now()-w<j)}function I(){if(y=!1,G){var N=o.unstable_now();w=N;var V=!0;try{t:{R=!1,C&&(C=!1,B(z),z=-1),M=!0;var Z=x;try{e:{for(U(N),S=i(m);S!==null&&!(S.expirationTime>N&&A());){var St=S.callback;if(typeof St=="function"){S.callback=null,x=S.priorityLevel;var Tt=St(S.expirationTime<=N);if(N=o.unstable_now(),typeof Tt=="function"){S.callback=Tt,U(N),V=!0;break e}S===i(m)&&r(m),U(N)}else r(m);S=i(m)}if(S!==null)V=!0;else{var L=i(p);L!==null&&ot(K,L.startTime-N),V=!1}}break t}finally{S=null,x=Z,M=!1}V=void 0}}finally{V?lt():G=!1}}}var lt;if(typeof O=="function")lt=function(){O(I)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,ft=it.port2;it.port1.onmessage=I,lt=function(){ft.postMessage(null)}}else lt=function(){_(I,0)};function ot(N,V){z=_(function(){N(o.unstable_now())},V)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(N){switch(x){case 1:case 2:case 3:var V=3;break;default:V=x}var Z=x;x=V;try{return N()}finally{x=Z}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(N,V){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Z=x;x=N;try{return V()}finally{x=Z}},o.unstable_scheduleCallback=function(N,V,Z){var St=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?St+Z:St):Z=St,N){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=Z+Tt,N={id:v++,callback:V,priorityLevel:N,startTime:Z,expirationTime:Tt,sortIndex:-1},Z>St?(N.sortIndex=Z,e(p,N),i(m)===null&&N===i(p)&&(C?(B(z),z=-1):C=!0,ot(K,Z-St))):(N.sortIndex=Tt,e(m,N),R||M||(R=!0,G||(G=!0,lt()))),N},o.unstable_shouldYield=A,o.unstable_wrapCallback=function(N){var V=x;return function(){var Z=x;x=V;try{return N.apply(this,arguments)}finally{x=Z}}}})(Ff)),Ff}var t_;function XS(){return t_||(t_=1,If.exports=VS()),If.exports}var Hf={exports:{}},Tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function kS(){if(e_)return Tn;e_=1;var o=rd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:p,implementation:v}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Tn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,v)},Tn.flushSync=function(m){var p=h.T,v=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=v,r.d.f()}},Tn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Tn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Tn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,S=d(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:S,integrity:x,fetchPriority:M}):v==="script"&&r.d.X(m,{crossOrigin:S,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Tn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Tn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,S=d(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Tn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Tn.requestFormReset=function(m){r.d.r(m)},Tn.unstable_batchedUpdates=function(m,p){return m(p)},Tn.useFormState=function(m,p,v){return h.H.useFormState(m,p,v)},Tn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Tn.version="19.2.7",Tn}var n_;function qS(){if(n_)return Hf.exports;n_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Hf.exports=kS(),Hf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function WS(){if(i_)return Eo;i_=1;var o=XS(),e=rd(),i=qS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var g=!1,E=u.child;E;){if(E===a){g=!0,a=u,s=f;break}if(E===s){g=!0,s=u,a=f;break}E=E.sibling}if(!g){for(E=f.child;E;){if(E===a){g=!0,a=f,s=u;break}if(E===s){g=!0,s=f,a=u;break}E=E.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var S=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),O=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),A=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function lt(t){return t===null||typeof t!="object"?null:(t=I&&t[I]||t["@@iterator"],typeof t=="function"?t:null)}var it=Symbol.for("react.client.reference");function ft(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===it?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case _:return"Profiler";case y:return"StrictMode";case K:return"Suspense";case G:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case O:return t.displayName||"Context";case B:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:ft(t.type)||"Memo";case j:n=t._payload,t=t._init;try{return ft(t(n))}catch{}}return null}var ot=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},St=[],Tt=-1;function L(t){return{current:t}}function $(t){0>Tt||(t.current=St[Tt],St[Tt]=null,Tt--)}function yt(t,n){Tt++,St[Tt]=t.current,t.current=n}var Y=L(null),ct=L(null),Et=L(null),xt=L(null);function Bt(t,n){switch(yt(Et,n),yt(ct,t),yt(Y,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?vg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=vg(n),t=Sg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}$(Y),yt(Y,t)}function zt(){$(Y),$(ct),$(Et)}function ee(t){t.memoizedState!==null&&yt(xt,t);var n=Y.current,a=Sg(n,t.type);n!==a&&(yt(ct,t),yt(Y,a))}function Ue(t){ct.current===t&&($(Y),$(ct)),xt.current===t&&($(xt),vo._currentValue=Z)}var ue,ke;function F(t){if(ue===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ue=n&&n[1]||"",ke=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ue+t+ke}var Mn=!1;function le(t,n){if(!t||Mn)return"";Mn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(rt){var tt=rt}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(rt){tt=rt}t.call(gt.prototype)}}else{try{throw Error()}catch(rt){tt=rt}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(rt){if(rt&&tt&&typeof rt.stack=="string")return[rt.stack,tt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],E=f[1];if(g&&E){var P=g.split(`
`),J=E.split(`
`);for(u=s=0;s<P.length&&!P[s].includes("DetermineComponentFrameRoot");)s++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(s===P.length||u===J.length)for(s=P.length-1,u=J.length-1;1<=s&&0<=u&&P[s]!==J[u];)u--;for(;1<=s&&0<=u;s--,u--)if(P[s]!==J[u]){if(s!==1||u!==1)do if(s--,u--,0>u||P[s]!==J[u]){var ht=`
`+P[s].replace(" at new "," at ");return t.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",t.displayName)),ht}while(1<=s&&0<=u);break}}}finally{Mn=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?F(a):""}function de(t,n){switch(t.tag){case 26:case 27:case 5:return F(t.type);case 16:return F("Lazy");case 13:return t.child!==n&&n!==null?F("Suspense Fallback"):F("Suspense");case 19:return F("SuspenseList");case 0:case 15:return le(t.type,!1);case 11:return le(t.type.render,!1);case 1:return le(t.type,!0);case 31:return F("Activity");default:return""}}function qt(t){try{var n="",a=null;do n+=de(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ce=Object.prototype.hasOwnProperty,kt=o.unstable_scheduleCallback,D=o.unstable_cancelCallback,T=o.unstable_shouldYield,et=o.unstable_requestPaint,dt=o.unstable_now,Mt=o.unstable_getCurrentPriorityLevel,mt=o.unstable_ImmediatePriority,Vt=o.unstable_UserBlockingPriority,Ct=o.unstable_NormalPriority,Pt=o.unstable_LowPriority,pe=o.unstable_IdlePriority,bt=o.log,It=o.unstable_setDisableYieldValue,Wt=null,Xt=null;function Lt(t){if(typeof bt=="function"&&It(t),Xt&&typeof Xt.setStrictMode=="function")try{Xt.setStrictMode(Wt,t)}catch{}}var Qt=Math.clz32?Math.clz32:X,ne=Math.log,Le=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(ne(t)/Le|0)|0}var At=256,ut=262144,_t=4194304;function Rt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function wt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?u=Rt(s):(g&=E,g!==0?u=Rt(g):a||(a=E&~t,a!==0&&(u=Rt(a))))):(E=s&~f,E!==0?u=Rt(E):g!==0?u=Rt(g):a||(a=s&~t,a!==0&&(u=Rt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Jt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function qe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ln(){var t=_t;return _t<<=1,(_t&62914560)===0&&(_t=4194304),t}function xe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function gn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function oi(t,n,a,s,u,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,P=t.expirationTimes,J=t.hiddenUpdates;for(a=g&~a;0<a;){var ht=31-Qt(a),gt=1<<ht;E[ht]=0,P[ht]=-1;var tt=J[ht];if(tt!==null)for(J[ht]=null,ht=0;ht<tt.length;ht++){var rt=tt[ht];rt!==null&&(rt.lane&=-536870913)}a&=~gt}s!==0&&Ds(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Ds(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Qt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Us(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Qt(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function Si(t,n){var a=n&-n;return a=(a&42)!==0?1:Ha(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ha(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Mr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ls(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:Vg(t.type))}function Ga(t,n){var a=V.p;try{return V.p=t,n()}finally{V.p=a}}var li=Math.random().toString(36).slice(2),Ye="__reactFiber$"+li,_n="__reactProps$"+li,wi="__reactContainer$"+li,Ns="__reactEvents$"+li,Cu="__reactListeners$"+li,wu="__reactHandles$"+li,Bo="__reactResources$"+li,Va="__reactMarker$"+li;function b(t){delete t[Ye],delete t[_n],delete t[Ns],delete t[Cu],delete t[wu]}function k(t){var n=t[Ye];if(n)return n;for(var a=t.parentNode;a;){if(n=a[wi]||a[Ye]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Ag(t);t!==null;){if(a=t[Ye])return a;t=Ag(t)}return n}t=a,a=t.parentNode}return null}function nt(t){if(t=t[Ye]||t[wi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function at(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function q(t){var n=t[Bo];return n||(n=t[Bo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function vt(t){t[Va]=!0}var Dt=new Set,Ot={};function Nt(t,n){jt(t,n),jt(t+"Capture",n)}function jt(t,n){for(Ot[t]=n,t=0;t<n.length;t++)Dt.add(n[t])}var $t=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Yt={},me={};function ye(t){return Ce.call(me,t)?!0:Ce.call(Yt,t)?!1:$t.test(t)?me[t]=!0:(Yt[t]=!0,!1)}function Ge(t,n,a){if(ye(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ie(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ie(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Ht(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tn(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Me(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Rn(t){if(!t._valueTracker){var n=tn(t)?"checked":"value";t._valueTracker=Me(t,n,""+t[n])}}function Di(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=tn(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function dn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Xa=/[\n"\\]/g;function ce(t){return t.replace(Xa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function En(t,n,a,s,u,f,g,E){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ht(n)):t.value!==""+Ht(n)&&(t.value=""+Ht(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?un(t,g,Ht(n)):a!=null?un(t,g,Ht(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Ht(E):t.removeAttribute("name")}function Cn(t,n,a,s,u,f,g,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Rn(t);return}a=a!=null?""+Ht(a):"",n=n!=null?""+Ht(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Rn(t)}function un(t,n,a){n==="number"&&dn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ke(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Ht(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Er(t,n,a){if(n!=null&&(n=""+Ht(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Ht(a):""}function xi(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ot(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Ht(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Rn(t)}function Tr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ov=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function md(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Ov.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function gd(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&md(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&md(t,f,n[f])}function Du(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Io(t){return Pv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ui(){}var Uu=null;function Lu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var br=null,Ar=null;function _d(t){var n=nt(t);if(n&&(t=n.stateNode)){var a=t[_n]||null;t:switch(t=n.stateNode,n.type){case"input":if(En(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ce(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[_n]||null;if(!u)throw Error(r(90));En(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Di(s)}break t;case"textarea":Er(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ke(t,!!a.multiple,n,!1)}}}var Nu=!1;function vd(t,n,a){if(Nu)return t(n,a);Nu=!0;try{var s=t(n);return s}finally{if(Nu=!1,(br!==null||Ar!==null)&&(bl(),br&&(n=br,t=Ar,Ar=br=null,_d(n),t)))for(n=0;n<t.length;n++)_d(t[n])}}function Os(t,n){var a=t.stateNode;if(a===null)return null;var s=a[_n]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ou=!1;if(Li)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){Ou=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{Ou=!1}var oa=null,zu=null,Fo=null;function Sd(){if(Fo)return Fo;var t,n=zu,a=n.length,s,u="value"in oa?oa.value:oa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===u[f-s];s++);return Fo=u.slice(t,1<s?1-s:void 0)}function Ho(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Go(){return!0}function xd(){return!1}function Ln(t){function n(a,s,u,f,g){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Go:xd,this.isPropagationStopped=xd,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Go)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Go)},persist:function(){},isPersistent:Go}),n}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vo=Ln(ka),Ps=S({},ka,{view:0,detail:0}),Bv=Ln(Ps),Pu,Bu,Bs,Xo=S({},Ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bs&&(Bs&&t.type==="mousemove"?(Pu=t.screenX-Bs.screenX,Bu=t.screenY-Bs.screenY):Bu=Pu=0,Bs=t),Pu)},movementY:function(t){return"movementY"in t?t.movementY:Bu}}),yd=Ln(Xo),Iv=S({},Xo,{dataTransfer:0}),Fv=Ln(Iv),Hv=S({},Ps,{relatedTarget:0}),Iu=Ln(Hv),Gv=S({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),Vv=Ln(Gv),Xv=S({},ka,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),kv=Ln(Xv),qv=S({},ka,{data:0}),Md=Ln(qv),Wv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Zv[t])?!!n[t]:!1}function Fu(){return jv}var Kv=S({},Ps,{key:function(t){if(t.key){var n=Wv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ho(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Yv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fu,charCode:function(t){return t.type==="keypress"?Ho(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ho(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Qv=Ln(Kv),Jv=S({},Xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ed=Ln(Jv),$v=S({},Ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fu}),t0=Ln($v),e0=S({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),n0=Ln(e0),i0=S({},Xo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),a0=Ln(i0),r0=S({},ka,{newState:0,oldState:0}),s0=Ln(r0),o0=[9,13,27,32],Hu=Li&&"CompositionEvent"in window,Is=null;Li&&"documentMode"in document&&(Is=document.documentMode);var l0=Li&&"TextEvent"in window&&!Is,Td=Li&&(!Hu||Is&&8<Is&&11>=Is),bd=" ",Ad=!1;function Rd(t,n){switch(t){case"keyup":return o0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rr=!1;function u0(t,n){switch(t){case"compositionend":return Cd(n);case"keypress":return n.which!==32?null:(Ad=!0,bd);case"textInput":return t=n.data,t===bd&&Ad?null:t;default:return null}}function c0(t,n){if(Rr)return t==="compositionend"||!Hu&&Rd(t,n)?(t=Sd(),Fo=zu=oa=null,Rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Td&&n.locale!=="ko"?null:n.data;default:return null}}var f0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!f0[t.type]:n==="textarea"}function Dd(t,n,a,s){br?Ar?Ar.push(s):Ar=[s]:br=s,n=Ll(n,"onChange"),0<n.length&&(a=new Vo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Fs=null,Hs=null;function h0(t){hg(t,0)}function ko(t){var n=at(t);if(Di(n))return t}function Ud(t,n){if(t==="change")return n}var Ld=!1;if(Li){var Gu;if(Li){var Vu="oninput"in document;if(!Vu){var Nd=document.createElement("div");Nd.setAttribute("oninput","return;"),Vu=typeof Nd.oninput=="function"}Gu=Vu}else Gu=!1;Ld=Gu&&(!document.documentMode||9<document.documentMode)}function Od(){Fs&&(Fs.detachEvent("onpropertychange",zd),Hs=Fs=null)}function zd(t){if(t.propertyName==="value"&&ko(Hs)){var n=[];Dd(n,Hs,t,Lu(t)),vd(h0,n)}}function d0(t,n,a){t==="focusin"?(Od(),Fs=n,Hs=a,Fs.attachEvent("onpropertychange",zd)):t==="focusout"&&Od()}function p0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ko(Hs)}function m0(t,n){if(t==="click")return ko(n)}function g0(t,n){if(t==="input"||t==="change")return ko(n)}function _0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Gn=typeof Object.is=="function"?Object.is:_0;function Gs(t,n){if(Gn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Ce.call(n,u)||!Gn(t[u],n[u]))return!1}return!0}function Pd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bd(t,n){var a=Pd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Pd(a)}}function Id(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Id(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Fd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=dn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=dn(t.document)}return n}function Xu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var v0=Li&&"documentMode"in document&&11>=document.documentMode,Cr=null,ku=null,Vs=null,qu=!1;function Hd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qu||Cr==null||Cr!==dn(s)||(s=Cr,"selectionStart"in s&&Xu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Vs&&Gs(Vs,s)||(Vs=s,s=Ll(ku,"onSelect"),0<s.length&&(n=new Vo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Cr)))}function qa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var wr={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},Wu={},Gd={};Li&&(Gd=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function Wa(t){if(Wu[t])return Wu[t];if(!wr[t])return t;var n=wr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Gd)return Wu[t]=n[a];return t}var Vd=Wa("animationend"),Xd=Wa("animationiteration"),kd=Wa("animationstart"),S0=Wa("transitionrun"),x0=Wa("transitionstart"),y0=Wa("transitioncancel"),qd=Wa("transitionend"),Wd=new Map,Yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yu.push("scrollEnd");function ui(t,n){Wd.set(t,n),Nt(n,[t])}var qo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Jn=[],Dr=0,Zu=0;function Wo(){for(var t=Dr,n=Zu=Dr=0;n<t;){var a=Jn[n];Jn[n++]=null;var s=Jn[n];Jn[n++]=null;var u=Jn[n];Jn[n++]=null;var f=Jn[n];if(Jn[n++]=null,s!==null&&u!==null){var g=s.pending;g===null?u.next=u:(u.next=g.next,g.next=u),s.pending=u}f!==0&&Yd(a,u,f)}}function Yo(t,n,a,s){Jn[Dr++]=t,Jn[Dr++]=n,Jn[Dr++]=a,Jn[Dr++]=s,Zu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function ju(t,n,a,s){return Yo(t,n,a,s),Zo(t)}function Ya(t,n){return Yo(t,null,null,n),Zo(t)}function Yd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Qt(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function Zo(t){if(50<co)throw co=0,rf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ur={};function M0(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,n,a,s){return new M0(t,n,a,s)}function Ku(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ni(t,n){var a=t.alternate;return a===null?(a=Vn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Zd(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function jo(t,n,a,s,u,f){var g=0;if(s=t,typeof t=="function")Ku(t)&&(g=1);else if(typeof t=="string")g=RS(t,a,Y.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=Vn(31,a,n,u),t.elementType=w,t.lanes=f,t;case C:return Za(a.children,u,f,n);case y:g=8,u|=24;break;case _:return t=Vn(12,a,n,u|2),t.elementType=_,t.lanes=f,t;case K:return t=Vn(13,a,n,u),t.elementType=K,t.lanes=f,t;case G:return t=Vn(19,a,n,u),t.elementType=G,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:g=10;break t;case B:g=9;break t;case U:g=11;break t;case z:g=14;break t;case j:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Vn(g,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function Za(t,n,a,s){return t=Vn(7,t,s,n),t.lanes=a,t}function Qu(t,n,a){return t=Vn(6,t,null,n),t.lanes=a,t}function jd(t){var n=Vn(18,null,null,0);return n.stateNode=t,n}function Ju(t,n,a){return n=Vn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Kd=new WeakMap;function $n(t,n){if(typeof t=="object"&&t!==null){var a=Kd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:qt(n)},Kd.set(t,n),n)}return{value:t,source:n,stack:qt(n)}}var Lr=[],Nr=0,Ko=null,Xs=0,ti=[],ei=0,la=null,yi=1,Mi="";function Oi(t,n){Lr[Nr++]=Xs,Lr[Nr++]=Ko,Ko=t,Xs=n}function Qd(t,n,a){ti[ei++]=yi,ti[ei++]=Mi,ti[ei++]=la,la=t;var s=yi;t=Mi;var u=32-Qt(s)-1;s&=~(1<<u),a+=1;var f=32-Qt(n)+u;if(30<f){var g=u-u%5;f=(s&(1<<g)-1).toString(32),s>>=g,u-=g,yi=1<<32-Qt(n)+u|a<<u|s,Mi=f+t}else yi=1<<f|a<<u|s,Mi=t}function $u(t){t.return!==null&&(Oi(t,1),Qd(t,1,0))}function tc(t){for(;t===Ko;)Ko=Lr[--Nr],Lr[Nr]=null,Xs=Lr[--Nr],Lr[Nr]=null;for(;t===la;)la=ti[--ei],ti[ei]=null,Mi=ti[--ei],ti[ei]=null,yi=ti[--ei],ti[ei]=null}function Jd(t,n){ti[ei++]=yi,ti[ei++]=Mi,ti[ei++]=la,yi=n.id,Mi=n.overflow,la=t}var vn=null,Ve=null,ve=!1,ua=null,ni=!1,ec=Error(r(519));function ca(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ks($n(n,t)),ec}function $d(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Ye]=t,n[_n]=s,a){case"dialog":he("cancel",n),he("close",n);break;case"iframe":case"object":case"embed":he("load",n);break;case"video":case"audio":for(a=0;a<ho.length;a++)he(ho[a],n);break;case"source":he("error",n);break;case"img":case"image":case"link":he("error",n),he("load",n);break;case"details":he("toggle",n);break;case"input":he("invalid",n),Cn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":he("invalid",n);break;case"textarea":he("invalid",n),xi(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||gg(n.textContent,a)?(s.popover!=null&&(he("beforetoggle",n),he("toggle",n)),s.onScroll!=null&&he("scroll",n),s.onScrollEnd!=null&&he("scrollend",n),s.onClick!=null&&(n.onclick=Ui),n=!0):n=!1,n||ca(t,!0)}function tp(t){for(vn=t.return;vn;)switch(vn.tag){case 5:case 31:case 13:ni=!1;return;case 27:case 3:ni=!0;return;default:vn=vn.return}}function Or(t){if(t!==vn)return!1;if(!ve)return tp(t),ve=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||xf(t.type,t.memoizedProps)),a=!a),a&&Ve&&ca(t),tp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ve=bg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ve=bg(t)}else n===27?(n=Ve,Ta(t.type)?(t=bf,bf=null,Ve=t):Ve=n):Ve=vn?ai(t.stateNode.nextSibling):null;return!0}function ja(){Ve=vn=null,ve=!1}function nc(){var t=ua;return t!==null&&(Pn===null?Pn=t:Pn.push.apply(Pn,t),ua=null),t}function ks(t){ua===null?ua=[t]:ua.push(t)}var ic=L(null),Ka=null,zi=null;function fa(t,n,a){yt(ic,n._currentValue),n._currentValue=a}function Pi(t){t._currentValue=ic.current,$(ic)}function ac(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function rc(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var g=u.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=u;for(var P=0;P<n.length;P++)if(E.context===n[P]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),ac(f.return,a,t),s||(g=null);break t}f=E.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),ac(g,a,t),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===t){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function zr(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var E=u.type;Gn(u.pendingProps.value,g.value)||(t!==null?t.push(E):t=[E])}}else if(u===xt.current){if(g=u.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(vo):t=[vo])}u=u.return}t!==null&&rc(n,t,a,s),n.flags|=262144}function Qo(t){for(t=t.firstContext;t!==null;){if(!Gn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Qa(t){Ka=t,zi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Sn(t){return ep(Ka,t)}function Jo(t,n){return Ka===null&&Qa(t),ep(t,n)}function ep(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},zi===null){if(t===null)throw Error(r(308));zi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else zi=zi.next=n;return a}var E0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},T0=o.unstable_scheduleCallback,b0=o.unstable_NormalPriority,en={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sc(){return{controller:new E0,data:new Map,refCount:0}}function qs(t){t.refCount--,t.refCount===0&&T0(b0,function(){t.controller.abort()})}var Ws=null,oc=0,Pr=0,Br=null;function A0(t,n){if(Ws===null){var a=Ws=[];oc=0,Pr=ff(),Br={status:"pending",value:void 0,then:function(s){a.push(s)}}}return oc++,n.then(np,np),n}function np(){if(--oc===0&&Ws!==null){Br!==null&&(Br.status="fulfilled");var t=Ws;Ws=null,Pr=0,Br=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function R0(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var ip=N.S;N.S=function(t,n){Hm=dt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&A0(t,n),ip!==null&&ip(t,n)};var Ja=L(null);function lc(){var t=Ja.current;return t!==null?t:Fe.pooledCache}function $o(t,n){n===null?yt(Ja,Ja.current):yt(Ja,n.pool)}function ap(){var t=lc();return t===null?null:{parent:en._currentValue,pool:t}}var Ir=Error(r(460)),uc=Error(r(474)),tl=Error(r(542)),el={then:function(){}};function rp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function sp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ui,Ui),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,lp(t),t;default:if(typeof n.status=="string")n.then(Ui,Ui);else{if(t=Fe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,lp(t),t}throw tr=n,Ir}}function $a(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(tr=a,Ir):a}}var tr=null;function op(){if(tr===null)throw Error(r(459));var t=tr;return tr=null,t}function lp(t){if(t===Ir||t===tl)throw Error(r(483))}var Fr=null,Ys=0;function nl(t){var n=Ys;return Ys+=1,Fr===null&&(Fr=[]),sp(Fr,t,n)}function Zs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function il(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function up(t){function n(W,H){if(t){var Q=W.deletions;Q===null?(W.deletions=[H],W.flags|=16):Q.push(H)}}function a(W,H){if(!t)return null;for(;H!==null;)n(W,H),H=H.sibling;return null}function s(W){for(var H=new Map;W!==null;)W.key!==null?H.set(W.key,W):H.set(W.index,W),W=W.sibling;return H}function u(W,H){return W=Ni(W,H),W.index=0,W.sibling=null,W}function f(W,H,Q){return W.index=Q,t?(Q=W.alternate,Q!==null?(Q=Q.index,Q<H?(W.flags|=67108866,H):Q):(W.flags|=67108866,H)):(W.flags|=1048576,H)}function g(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function E(W,H,Q,pt){return H===null||H.tag!==6?(H=Qu(Q,W.mode,pt),H.return=W,H):(H=u(H,Q),H.return=W,H)}function P(W,H,Q,pt){var Zt=Q.type;return Zt===C?ht(W,H,Q.props.children,pt,Q.key):H!==null&&(H.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===j&&$a(Zt)===H.type)?(H=u(H,Q.props),Zs(H,Q),H.return=W,H):(H=jo(Q.type,Q.key,Q.props,null,W.mode,pt),Zs(H,Q),H.return=W,H)}function J(W,H,Q,pt){return H===null||H.tag!==4||H.stateNode.containerInfo!==Q.containerInfo||H.stateNode.implementation!==Q.implementation?(H=Ju(Q,W.mode,pt),H.return=W,H):(H=u(H,Q.children||[]),H.return=W,H)}function ht(W,H,Q,pt,Zt){return H===null||H.tag!==7?(H=Za(Q,W.mode,pt,Zt),H.return=W,H):(H=u(H,Q),H.return=W,H)}function gt(W,H,Q){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=Qu(""+H,W.mode,Q),H.return=W,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case M:return Q=jo(H.type,H.key,H.props,null,W.mode,Q),Zs(Q,H),Q.return=W,Q;case R:return H=Ju(H,W.mode,Q),H.return=W,H;case j:return H=$a(H),gt(W,H,Q)}if(ot(H)||lt(H))return H=Za(H,W.mode,Q,null),H.return=W,H;if(typeof H.then=="function")return gt(W,nl(H),Q);if(H.$$typeof===O)return gt(W,Jo(W,H),Q);il(W,H)}return null}function tt(W,H,Q,pt){var Zt=H!==null?H.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Zt!==null?null:E(W,H,""+Q,pt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:return Q.key===Zt?P(W,H,Q,pt):null;case R:return Q.key===Zt?J(W,H,Q,pt):null;case j:return Q=$a(Q),tt(W,H,Q,pt)}if(ot(Q)||lt(Q))return Zt!==null?null:ht(W,H,Q,pt,null);if(typeof Q.then=="function")return tt(W,H,nl(Q),pt);if(Q.$$typeof===O)return tt(W,H,Jo(W,Q),pt);il(W,Q)}return null}function rt(W,H,Q,pt,Zt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return W=W.get(Q)||null,E(H,W,""+pt,Zt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case M:return W=W.get(pt.key===null?Q:pt.key)||null,P(H,W,pt,Zt);case R:return W=W.get(pt.key===null?Q:pt.key)||null,J(H,W,pt,Zt);case j:return pt=$a(pt),rt(W,H,Q,pt,Zt)}if(ot(pt)||lt(pt))return W=W.get(Q)||null,ht(H,W,pt,Zt,null);if(typeof pt.then=="function")return rt(W,H,Q,nl(pt),Zt);if(pt.$$typeof===O)return rt(W,H,Q,Jo(H,pt),Zt);il(H,pt)}return null}function Ft(W,H,Q,pt){for(var Zt=null,Ee=null,Gt=H,re=H=0,_e=null;Gt!==null&&re<Q.length;re++){Gt.index>re?(_e=Gt,Gt=null):_e=Gt.sibling;var Te=tt(W,Gt,Q[re],pt);if(Te===null){Gt===null&&(Gt=_e);break}t&&Gt&&Te.alternate===null&&n(W,Gt),H=f(Te,H,re),Ee===null?Zt=Te:Ee.sibling=Te,Ee=Te,Gt=_e}if(re===Q.length)return a(W,Gt),ve&&Oi(W,re),Zt;if(Gt===null){for(;re<Q.length;re++)Gt=gt(W,Q[re],pt),Gt!==null&&(H=f(Gt,H,re),Ee===null?Zt=Gt:Ee.sibling=Gt,Ee=Gt);return ve&&Oi(W,re),Zt}for(Gt=s(Gt);re<Q.length;re++)_e=rt(Gt,W,re,Q[re],pt),_e!==null&&(t&&_e.alternate!==null&&Gt.delete(_e.key===null?re:_e.key),H=f(_e,H,re),Ee===null?Zt=_e:Ee.sibling=_e,Ee=_e);return t&&Gt.forEach(function(wa){return n(W,wa)}),ve&&Oi(W,re),Zt}function Kt(W,H,Q,pt){if(Q==null)throw Error(r(151));for(var Zt=null,Ee=null,Gt=H,re=H=0,_e=null,Te=Q.next();Gt!==null&&!Te.done;re++,Te=Q.next()){Gt.index>re?(_e=Gt,Gt=null):_e=Gt.sibling;var wa=tt(W,Gt,Te.value,pt);if(wa===null){Gt===null&&(Gt=_e);break}t&&Gt&&wa.alternate===null&&n(W,Gt),H=f(wa,H,re),Ee===null?Zt=wa:Ee.sibling=wa,Ee=wa,Gt=_e}if(Te.done)return a(W,Gt),ve&&Oi(W,re),Zt;if(Gt===null){for(;!Te.done;re++,Te=Q.next())Te=gt(W,Te.value,pt),Te!==null&&(H=f(Te,H,re),Ee===null?Zt=Te:Ee.sibling=Te,Ee=Te);return ve&&Oi(W,re),Zt}for(Gt=s(Gt);!Te.done;re++,Te=Q.next())Te=rt(Gt,W,re,Te.value,pt),Te!==null&&(t&&Te.alternate!==null&&Gt.delete(Te.key===null?re:Te.key),H=f(Te,H,re),Ee===null?Zt=Te:Ee.sibling=Te,Ee=Te);return t&&Gt.forEach(function(IS){return n(W,IS)}),ve&&Oi(W,re),Zt}function ze(W,H,Q,pt){if(typeof Q=="object"&&Q!==null&&Q.type===C&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:t:{for(var Zt=Q.key;H!==null;){if(H.key===Zt){if(Zt=Q.type,Zt===C){if(H.tag===7){a(W,H.sibling),pt=u(H,Q.props.children),pt.return=W,W=pt;break t}}else if(H.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===j&&$a(Zt)===H.type){a(W,H.sibling),pt=u(H,Q.props),Zs(pt,Q),pt.return=W,W=pt;break t}a(W,H);break}else n(W,H);H=H.sibling}Q.type===C?(pt=Za(Q.props.children,W.mode,pt,Q.key),pt.return=W,W=pt):(pt=jo(Q.type,Q.key,Q.props,null,W.mode,pt),Zs(pt,Q),pt.return=W,W=pt)}return g(W);case R:t:{for(Zt=Q.key;H!==null;){if(H.key===Zt)if(H.tag===4&&H.stateNode.containerInfo===Q.containerInfo&&H.stateNode.implementation===Q.implementation){a(W,H.sibling),pt=u(H,Q.children||[]),pt.return=W,W=pt;break t}else{a(W,H);break}else n(W,H);H=H.sibling}pt=Ju(Q,W.mode,pt),pt.return=W,W=pt}return g(W);case j:return Q=$a(Q),ze(W,H,Q,pt)}if(ot(Q))return Ft(W,H,Q,pt);if(lt(Q)){if(Zt=lt(Q),typeof Zt!="function")throw Error(r(150));return Q=Zt.call(Q),Kt(W,H,Q,pt)}if(typeof Q.then=="function")return ze(W,H,nl(Q),pt);if(Q.$$typeof===O)return ze(W,H,Jo(W,Q),pt);il(W,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,H!==null&&H.tag===6?(a(W,H.sibling),pt=u(H,Q),pt.return=W,W=pt):(a(W,H),pt=Qu(Q,W.mode,pt),pt.return=W,W=pt),g(W)):a(W,H)}return function(W,H,Q,pt){try{Ys=0;var Zt=ze(W,H,Q,pt);return Fr=null,Zt}catch(Gt){if(Gt===Ir||Gt===tl)throw Gt;var Ee=Vn(29,Gt,null,W.mode);return Ee.lanes=pt,Ee.return=W,Ee}finally{}}}var er=up(!0),cp=up(!1),ha=!1;function cc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function da(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function pa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Re&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=Zo(t),Yd(t,null,a),n}return Yo(t,s,n,a),Zo(t)}function js(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Us(t,a)}}function hc(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var dc=!1;function Ks(){if(dc){var t=Br;if(t!==null)throw t}}function Qs(t,n,a,s){dc=!1;var u=t.updateQueue;ha=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var P=E,J=P.next;P.next=null,g===null?f=J:g.next=J,g=P;var ht=t.alternate;ht!==null&&(ht=ht.updateQueue,E=ht.lastBaseUpdate,E!==g&&(E===null?ht.firstBaseUpdate=J:E.next=J,ht.lastBaseUpdate=P))}if(f!==null){var gt=u.baseState;g=0,ht=J=P=null,E=f;do{var tt=E.lane&-536870913,rt=tt!==E.lane;if(rt?(ge&tt)===tt:(s&tt)===tt){tt!==0&&tt===Pr&&(dc=!0),ht!==null&&(ht=ht.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Ft=t,Kt=E;tt=n;var ze=a;switch(Kt.tag){case 1:if(Ft=Kt.payload,typeof Ft=="function"){gt=Ft.call(ze,gt,tt);break t}gt=Ft;break t;case 3:Ft.flags=Ft.flags&-65537|128;case 0:if(Ft=Kt.payload,tt=typeof Ft=="function"?Ft.call(ze,gt,tt):Ft,tt==null)break t;gt=S({},gt,tt);break t;case 2:ha=!0}}tt=E.callback,tt!==null&&(t.flags|=64,rt&&(t.flags|=8192),rt=u.callbacks,rt===null?u.callbacks=[tt]:rt.push(tt))}else rt={lane:tt,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ht===null?(J=ht=rt,P=gt):ht=ht.next=rt,g|=tt;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;rt=E,E=rt.next,rt.next=null,u.lastBaseUpdate=rt,u.shared.pending=null}}while(!0);ht===null&&(P=gt),u.baseState=P,u.firstBaseUpdate=J,u.lastBaseUpdate=ht,f===null&&(u.shared.lanes=0),Sa|=g,t.lanes=g,t.memoizedState=gt}}function fp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function hp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)fp(a[t],n)}var Hr=L(null),al=L(0);function dp(t,n){t=qi,yt(al,t),yt(Hr,n),qi=t|n.baseLanes}function pc(){yt(al,qi),yt(Hr,Hr.current)}function mc(){qi=al.current,$(Hr),$(al)}var Xn=L(null),ii=null;function ma(t){var n=t.alternate;yt(Qe,Qe.current&1),yt(Xn,t),ii===null&&(n===null||Hr.current!==null||n.memoizedState!==null)&&(ii=t)}function gc(t){yt(Qe,Qe.current),yt(Xn,t),ii===null&&(ii=t)}function pp(t){t.tag===22?(yt(Qe,Qe.current),yt(Xn,t),ii===null&&(ii=t)):ga()}function ga(){yt(Qe,Qe.current),yt(Xn,Xn.current)}function kn(t){$(Xn),ii===t&&(ii=null),$(Qe)}var Qe=L(0);function rl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ef(a)||Tf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Bi=0,ae=null,Ne=null,nn=null,sl=!1,Gr=!1,nr=!1,ol=0,Js=0,Vr=null,C0=0;function Ze(){throw Error(r(321))}function _c(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Gn(t[a],n[a]))return!1;return!0}function vc(t,n,a,s,u,f){return Bi=f,ae=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=t===null||t.memoizedState===null?Qp:Nc,nr=!1,f=a(s,u),nr=!1,Gr&&(f=gp(n,a,s,u)),mp(t),f}function mp(t){N.H=eo;var n=Ne!==null&&Ne.next!==null;if(Bi=0,nn=Ne=ae=null,sl=!1,Js=0,Vr=null,n)throw Error(r(300));t===null||an||(t=t.dependencies,t!==null&&Qo(t)&&(an=!0))}function gp(t,n,a,s){ae=t;var u=0;do{if(Gr&&(Vr=null),Js=0,Gr=!1,25<=u)throw Error(r(301));if(u+=1,nn=Ne=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=Jp,f=n(a,s)}while(Gr);return f}function w0(){var t=N.H,n=t.useState()[0];return n=typeof n.then=="function"?$s(n):n,t=t.useState()[0],(Ne!==null?Ne.memoizedState:null)!==t&&(ae.flags|=1024),n}function Sc(){var t=ol!==0;return ol=0,t}function xc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function yc(t){if(sl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}sl=!1}Bi=0,nn=Ne=ae=null,Gr=!1,Js=ol=0,Vr=null}function wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?ae.memoizedState=nn=t:nn=nn.next=t,nn}function Je(){if(Ne===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=Ne.next;var n=nn===null?ae.memoizedState:nn.next;if(n!==null)nn=n,Ne=t;else{if(t===null)throw ae.alternate===null?Error(r(467)):Error(r(310));Ne=t,t={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},nn===null?ae.memoizedState=nn=t:nn=nn.next=t}return nn}function ll(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $s(t){var n=Js;return Js+=1,Vr===null&&(Vr=[]),t=sp(Vr,t,n),n=ae,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?Qp:Nc),t}function ul(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return $s(t);if(t.$$typeof===O)return Sn(t)}throw Error(r(438,String(t)))}function Mc(t){var n=null,a=ae.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ae.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ll(),ae.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=A;return n.index++,a}function Ii(t,n){return typeof n=="function"?n(t):n}function cl(t){var n=Je();return Ec(n,Ne,t)}function Ec(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var E=g=null,P=null,J=n,ht=!1;do{var gt=J.lane&-536870913;if(gt!==J.lane?(ge&gt)===gt:(Bi&gt)===gt){var tt=J.revertLane;if(tt===0)P!==null&&(P=P.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),gt===Pr&&(ht=!0);else if((Bi&tt)===tt){J=J.next,tt===Pr&&(ht=!0);continue}else gt={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(E=P=gt,g=f):P=P.next=gt,ae.lanes|=tt,Sa|=tt;gt=J.action,nr&&a(f,gt),f=J.hasEagerState?J.eagerState:a(f,gt)}else tt={lane:gt,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(E=P=tt,g=f):P=P.next=tt,ae.lanes|=gt,Sa|=gt;J=J.next}while(J!==null&&J!==n);if(P===null?g=f:P.next=E,!Gn(f,t.memoizedState)&&(an=!0,ht&&(a=Br,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=P,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Tc(t){var n=Je(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do f=t(f,g.action),g=g.next;while(g!==u);Gn(f,n.memoizedState)||(an=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function _p(t,n,a){var s=ae,u=Je(),f=ve;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Gn((Ne||u).memoizedState,a);if(g&&(u.memoizedState=a,an=!0),u=u.queue,Rc(xp.bind(null,s,u,t),[t]),u.getSnapshot!==n||g||nn!==null&&nn.memoizedState.tag&1){if(s.flags|=2048,Xr(9,{destroy:void 0},Sp.bind(null,s,u,a,n),null),Fe===null)throw Error(r(349));f||(Bi&127)!==0||vp(s,n,a)}return a}function vp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ae.updateQueue,n===null?(n=ll(),ae.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Sp(t,n,a,s){n.value=a,n.getSnapshot=s,yp(n)&&Mp(t)}function xp(t,n,a){return a(function(){yp(n)&&Mp(t)})}function yp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Gn(t,a)}catch{return!0}}function Mp(t){var n=Ya(t,2);n!==null&&Bn(n,t,2)}function bc(t){var n=wn();if(typeof t=="function"){var a=t;if(t=a(),nr){Lt(!0);try{a()}finally{Lt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:t},n}function Ep(t,n,a,s){return t.baseState=a,Ec(t,Ne,typeof s=="function"?s:Ii)}function D0(t,n,a,s,u){if(dl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};N.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Tp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Tp(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=N.T,g={};N.T=g;try{var E=a(u,s),P=N.S;P!==null&&P(g,E),bp(t,n,E)}catch(J){Ac(t,n,J)}finally{f!==null&&g.types!==null&&(f.types=g.types),N.T=f}}else try{f=a(u,s),bp(t,n,f)}catch(J){Ac(t,n,J)}}function bp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Ap(t,n,s)},function(s){return Ac(t,n,s)}):Ap(t,n,a)}function Ap(t,n,a){n.status="fulfilled",n.value=a,Rp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Tp(t,a)))}function Ac(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Rp(n),n=n.next;while(n!==s)}t.action=null}function Rp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Cp(t,n){return n}function wp(t,n){if(ve){var a=Fe.formState;if(a!==null){t:{var s=ae;if(ve){if(Ve){e:{for(var u=Ve,f=ni;u.nodeType!==8;){if(!f){u=null;break e}if(u=ai(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ve=ai(u.nextSibling),s=u.data==="F!";break t}}ca(s)}s=!1}s&&(n=a[0])}}return a=wn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cp,lastRenderedState:n},a.queue=s,a=Zp.bind(null,ae,s),s.dispatch=a,s=bc(!1),f=Lc.bind(null,ae,!1,s.queue),s=wn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=D0.bind(null,ae,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function Dp(t){var n=Je();return Up(n,Ne,t)}function Up(t,n,a){if(n=Ec(t,n,Cp)[0],t=cl(Ii)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=$s(n)}catch(g){throw g===Ir?tl:g}else s=n;n=Je();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ae.flags|=2048,Xr(9,{destroy:void 0},U0.bind(null,u,a),null)),[s,f,t]}function U0(t,n){t.action=n}function Lp(t){var n=Je(),a=Ne;if(a!==null)return Up(n,a,t);Je(),n=n.memoizedState,a=Je();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Xr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ae.updateQueue,n===null&&(n=ll(),ae.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Np(){return Je().memoizedState}function fl(t,n,a,s){var u=wn();ae.flags|=t,u.memoizedState=Xr(1|n,{destroy:void 0},a,s===void 0?null:s)}function hl(t,n,a,s){var u=Je();s=s===void 0?null:s;var f=u.memoizedState.inst;Ne!==null&&s!==null&&_c(s,Ne.memoizedState.deps)?u.memoizedState=Xr(n,f,a,s):(ae.flags|=t,u.memoizedState=Xr(1|n,f,a,s))}function Op(t,n){fl(8390656,8,t,n)}function Rc(t,n){hl(2048,8,t,n)}function L0(t){ae.flags|=4;var n=ae.updateQueue;if(n===null)n=ll(),ae.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function zp(t){var n=Je().memoizedState;return L0({ref:n,nextImpl:t}),function(){if((Re&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Pp(t,n){return hl(4,2,t,n)}function Bp(t,n){return hl(4,4,t,n)}function Ip(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Fp(t,n,a){a=a!=null?a.concat([t]):null,hl(4,4,Ip.bind(null,n,t),a)}function Cc(){}function Hp(t,n){var a=Je();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&_c(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Gp(t,n){var a=Je();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&_c(n,s[1]))return s[0];if(s=t(),nr){Lt(!0);try{t()}finally{Lt(!1)}}return a.memoizedState=[s,n],s}function wc(t,n,a){return a===void 0||(Bi&1073741824)!==0&&(ge&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Vm(),ae.lanes|=t,Sa|=t,a)}function Vp(t,n,a,s){return Gn(a,n)?a:Hr.current!==null?(t=wc(t,a,s),Gn(t,n)||(an=!0),t):(Bi&42)===0||(Bi&1073741824)!==0&&(ge&261930)===0?(an=!0,t.memoizedState=a):(t=Vm(),ae.lanes|=t,Sa|=t,n)}function Xp(t,n,a,s,u){var f=V.p;V.p=f!==0&&8>f?f:8;var g=N.T,E={};N.T=E,Lc(t,!1,n,a);try{var P=u(),J=N.S;if(J!==null&&J(E,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ht=R0(P,s);to(t,n,ht,Yn(t))}else to(t,n,s,Yn(t))}catch(gt){to(t,n,{then:function(){},status:"rejected",reason:gt},Yn())}finally{V.p=f,g!==null&&E.types!==null&&(g.types=E.types),N.T=g}}function N0(){}function Dc(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=kp(t).queue;Xp(t,u,n,Z,a===null?N0:function(){return qp(t),a(s)})}function kp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function qp(t){var n=kp(t);n.next===null&&(n=t.alternate.memoizedState),to(t,n.next.queue,{},Yn())}function Uc(){return Sn(vo)}function Wp(){return Je().memoizedState}function Yp(){return Je().memoizedState}function O0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Yn();t=da(a);var s=pa(n,t,a);s!==null&&(Bn(s,n,a),js(s,n,a)),n={cache:sc()},t.payload=n;return}n=n.return}}function z0(t,n,a){var s=Yn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},dl(t)?jp(n,a):(a=ju(t,n,a,s),a!==null&&(Bn(a,t,s),Kp(a,n,s)))}function Zp(t,n,a){var s=Yn();to(t,n,a,s)}function to(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(dl(t))jp(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,E=f(g,a);if(u.hasEagerState=!0,u.eagerState=E,Gn(E,g))return Yo(t,n,u,0),Fe===null&&Wo(),!1}catch{}finally{}if(a=ju(t,n,u,s),a!==null)return Bn(a,t,s),Kp(a,n,s),!0}return!1}function Lc(t,n,a,s){if(s={lane:2,revertLane:ff(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},dl(t)){if(n)throw Error(r(479))}else n=ju(t,a,s,2),n!==null&&Bn(n,t,2)}function dl(t){var n=t.alternate;return t===ae||n!==null&&n===ae}function jp(t,n){Gr=sl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Kp(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Us(t,a)}}var eo={readContext:Sn,use:ul,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze,useHostTransitionStatus:Ze,useFormState:Ze,useActionState:Ze,useOptimistic:Ze,useMemoCache:Ze,useCacheRefresh:Ze};eo.useEffectEvent=Ze;var Qp={readContext:Sn,use:ul,useCallback:function(t,n){return wn().memoizedState=[t,n===void 0?null:n],t},useContext:Sn,useEffect:Op,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,fl(4194308,4,Ip.bind(null,n,t),a)},useLayoutEffect:function(t,n){return fl(4194308,4,t,n)},useInsertionEffect:function(t,n){fl(4,2,t,n)},useMemo:function(t,n){var a=wn();n=n===void 0?null:n;var s=t();if(nr){Lt(!0);try{t()}finally{Lt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=wn();if(a!==void 0){var u=a(n);if(nr){Lt(!0);try{a(n)}finally{Lt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=z0.bind(null,ae,t),[s.memoizedState,t]},useRef:function(t){var n=wn();return t={current:t},n.memoizedState=t},useState:function(t){t=bc(t);var n=t.queue,a=Zp.bind(null,ae,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Cc,useDeferredValue:function(t,n){var a=wn();return wc(a,t,n)},useTransition:function(){var t=bc(!1);return t=Xp.bind(null,ae,t.queue,!0,!1),wn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ae,u=wn();if(ve){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Fe===null)throw Error(r(349));(ge&127)!==0||vp(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Op(xp.bind(null,s,f,t),[t]),s.flags|=2048,Xr(9,{destroy:void 0},Sp.bind(null,s,f,a,n),null),a},useId:function(){var t=wn(),n=Fe.identifierPrefix;if(ve){var a=Mi,s=yi;a=(s&~(1<<32-Qt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ol++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=C0++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Uc,useFormState:wp,useActionState:wp,useOptimistic:function(t){var n=wn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Lc.bind(null,ae,!0,a),a.dispatch=n,[t,n]},useMemoCache:Mc,useCacheRefresh:function(){return wn().memoizedState=O0.bind(null,ae)},useEffectEvent:function(t){var n=wn(),a={impl:t};return n.memoizedState=a,function(){if((Re&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Nc={readContext:Sn,use:ul,useCallback:Hp,useContext:Sn,useEffect:Rc,useImperativeHandle:Fp,useInsertionEffect:Pp,useLayoutEffect:Bp,useMemo:Gp,useReducer:cl,useRef:Np,useState:function(){return cl(Ii)},useDebugValue:Cc,useDeferredValue:function(t,n){var a=Je();return Vp(a,Ne.memoizedState,t,n)},useTransition:function(){var t=cl(Ii)[0],n=Je().memoizedState;return[typeof t=="boolean"?t:$s(t),n]},useSyncExternalStore:_p,useId:Wp,useHostTransitionStatus:Uc,useFormState:Dp,useActionState:Dp,useOptimistic:function(t,n){var a=Je();return Ep(a,Ne,t,n)},useMemoCache:Mc,useCacheRefresh:Yp};Nc.useEffectEvent=zp;var Jp={readContext:Sn,use:ul,useCallback:Hp,useContext:Sn,useEffect:Rc,useImperativeHandle:Fp,useInsertionEffect:Pp,useLayoutEffect:Bp,useMemo:Gp,useReducer:Tc,useRef:Np,useState:function(){return Tc(Ii)},useDebugValue:Cc,useDeferredValue:function(t,n){var a=Je();return Ne===null?wc(a,t,n):Vp(a,Ne.memoizedState,t,n)},useTransition:function(){var t=Tc(Ii)[0],n=Je().memoizedState;return[typeof t=="boolean"?t:$s(t),n]},useSyncExternalStore:_p,useId:Wp,useHostTransitionStatus:Uc,useFormState:Lp,useActionState:Lp,useOptimistic:function(t,n){var a=Je();return Ne!==null?Ep(a,Ne,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Mc,useCacheRefresh:Yp};Jp.useEffectEvent=zp;function Oc(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:S({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var zc={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Yn(),u=da(s);u.payload=n,a!=null&&(u.callback=a),n=pa(t,u,s),n!==null&&(Bn(n,t,s),js(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Yn(),u=da(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=pa(t,u,s),n!==null&&(Bn(n,t,s),js(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Yn(),s=da(a);s.tag=2,n!=null&&(s.callback=n),n=pa(t,s,a),n!==null&&(Bn(n,t,a),js(n,t,a))}};function $p(t,n,a,s,u,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Gs(a,s)||!Gs(u,f):!0}function tm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&zc.enqueueReplaceState(n,n.state,null)}function ir(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=S({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function em(t){qo(t)}function nm(t){console.error(t)}function im(t){qo(t)}function pl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function am(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Pc(t,n,a){return a=da(a),a.tag=3,a.payload={element:null},a.callback=function(){pl(t,n)},a}function rm(t){return t=da(t),t.tag=3,t}function sm(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){am(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){am(n,a,s),typeof u!="function"&&(xa===null?xa=new Set([this]):xa.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function P0(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&zr(n,a,u,!0),a=Xn.current,a!==null){switch(a.tag){case 31:case 13:return ii===null?Al():a.alternate===null&&je===0&&(je=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===el?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),lf(t,s,u)),!1;case 22:return a.flags|=65536,s===el?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),lf(t,s,u)),!1}throw Error(r(435,a.tag))}return lf(t,s,u),Al(),!1}if(ve)return n=Xn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==ec&&(t=Error(r(422),{cause:s}),ks($n(t,a)))):(s!==ec&&(n=Error(r(423),{cause:s}),ks($n(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=$n(s,a),u=Pc(t.stateNode,s,u),hc(t,u),je!==4&&(je=2)),!1;var f=Error(r(520),{cause:s});if(f=$n(f,a),uo===null?uo=[f]:uo.push(f),je!==4&&(je=2),n===null)return!0;s=$n(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Pc(a.stateNode,s,t),hc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(xa===null||!xa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=rm(u),sm(u,t,a,s),hc(a,u),!1}a=a.return}while(a!==null);return!1}var Bc=Error(r(461)),an=!1;function xn(t,n,a,s){n.child=t===null?cp(n,null,a,s):er(n,t.child,a,s)}function om(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var E in s)E!=="ref"&&(g[E]=s[E])}else g=s;return Qa(n),s=vc(t,n,a,g,f,u),E=Sc(),t!==null&&!an?(xc(t,n,u),Fi(t,n,u)):(ve&&E&&$u(n),n.flags|=1,xn(t,n,s,u),n.child)}function lm(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!Ku(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,um(t,n,f,s,u)):(t=jo(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!qc(t,u)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Gs,a(g,s)&&t.ref===n.ref)return Fi(t,n,u)}return n.flags|=1,t=Ni(f,s),t.ref=n.ref,t.return=n,n.child=t}function um(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(Gs(f,s)&&t.ref===n.ref)if(an=!1,n.pendingProps=s=f,qc(t,u))(t.flags&131072)!==0&&(an=!0);else return n.lanes=t.lanes,Fi(t,n,u)}return Ic(t,n,a,s,u)}function cm(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return fm(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&$o(n,f!==null?f.cachePool:null),f!==null?dp(n,f):pc(),pp(n);else return s=n.lanes=536870912,fm(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?($o(n,f.cachePool),dp(n,f),ga(),n.memoizedState=null):(t!==null&&$o(n,null),pc(),ga());return xn(t,n,u,a),n.child}function no(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function fm(t,n,a,s,u){var f=lc();return f=f===null?null:{parent:en._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&$o(n,null),pc(),pp(n),t!==null&&zr(t,n,s,!0),n.childLanes=u,null}function ml(t,n){return n=_l({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function hm(t,n,a){return er(n,t.child,null,a),t=ml(n,n.pendingProps),t.flags|=2,kn(n),n.memoizedState=null,t}function B0(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ve){if(s.mode==="hidden")return t=ml(n,s),n.lanes=536870912,no(null,t);if(gc(n),(t=Ve)?(t=Tg(t,ni),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:la!==null?{id:yi,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},a=jd(t),a.return=n,n.child=a,vn=n,Ve=null)):t=null,t===null)throw ca(n);return n.lanes=536870912,null}return ml(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(gc(n),u)if(n.flags&256)n.flags&=-257,n=hm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(an||zr(t,n,a,!1),u=(a&t.childLanes)!==0,an||u){if(s=Fe,s!==null&&(g=Si(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,Ya(t,g),Bn(s,t,g),Bc;Al(),n=hm(t,n,a)}else t=f.treeContext,Ve=ai(g.nextSibling),vn=n,ve=!0,ua=null,ni=!1,t!==null&&Jd(n,t),n=ml(n,s),n.flags|=4096;return n}return t=Ni(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function gl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Ic(t,n,a,s,u){return Qa(n),a=vc(t,n,a,s,void 0,u),s=Sc(),t!==null&&!an?(xc(t,n,u),Fi(t,n,u)):(ve&&s&&$u(n),n.flags|=1,xn(t,n,a,u),n.child)}function dm(t,n,a,s,u,f){return Qa(n),n.updateQueue=null,a=gp(n,s,a,u),mp(t),s=Sc(),t!==null&&!an?(xc(t,n,f),Fi(t,n,f)):(ve&&s&&$u(n),n.flags|=1,xn(t,n,a,f),n.child)}function pm(t,n,a,s,u){if(Qa(n),n.stateNode===null){var f=Ur,g=a.contextType;typeof g=="object"&&g!==null&&(f=Sn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=zc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},cc(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Sn(g):Ur,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Oc(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&zc.enqueueReplaceState(f,f.state,null),Qs(n,s,f,u),Ks(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,P=ir(a,E);f.props=P;var J=f.context,ht=a.contextType;g=Ur,typeof ht=="object"&&ht!==null&&(g=Sn(ht));var gt=a.getDerivedStateFromProps;ht=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||J!==g)&&tm(n,f,s,g),ha=!1;var tt=n.memoizedState;f.state=tt,Qs(n,s,f,u),Ks(),J=n.memoizedState,E||tt!==J||ha?(typeof gt=="function"&&(Oc(n,a,gt,s),J=n.memoizedState),(P=ha||$p(n,a,P,s,tt,J,g))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=J),f.props=s,f.state=J,f.context=g,s=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,fc(t,n),g=n.memoizedProps,ht=ir(a,g),f.props=ht,gt=n.pendingProps,tt=f.context,J=a.contextType,P=Ur,typeof J=="object"&&J!==null&&(P=Sn(J)),E=a.getDerivedStateFromProps,(J=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==gt||tt!==P)&&tm(n,f,s,P),ha=!1,tt=n.memoizedState,f.state=tt,Qs(n,s,f,u),Ks();var rt=n.memoizedState;g!==gt||tt!==rt||ha||t!==null&&t.dependencies!==null&&Qo(t.dependencies)?(typeof E=="function"&&(Oc(n,a,E,s),rt=n.memoizedState),(ht=ha||$p(n,a,ht,s,tt,rt,P)||t!==null&&t.dependencies!==null&&Qo(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,rt,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,rt,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=rt),f.props=s,f.state=rt,f.context=P,s=ht):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,gl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=er(n,t.child,null,u),n.child=er(n,null,a,u)):xn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Fi(t,n,u),t}function mm(t,n,a,s){return ja(),n.flags|=256,xn(t,n,a,s),n.child}var Fc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hc(t){return{baseLanes:t,cachePool:ap()}}function Gc(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Wn),t}function gm(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(Qe.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(ve){if(u?ma(n):ga(),(t=Ve)?(t=Tg(t,ni),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:la!==null?{id:yi,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},a=jd(t),a.return=n,n.child=a,vn=n,Ve=null)):t=null,t===null)throw ca(n);return Tf(t)?n.lanes=32:n.lanes=536870912,null}var E=s.children;return s=s.fallback,u?(ga(),u=n.mode,E=_l({mode:"hidden",children:E},u),s=Za(s,u,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,s=n.child,s.memoizedState=Hc(a),s.childLanes=Gc(t,g,a),n.memoizedState=Fc,no(null,s)):(ma(n),Vc(n,E))}var P=t.memoizedState;if(P!==null&&(E=P.dehydrated,E!==null)){if(f)n.flags&256?(ma(n),n.flags&=-257,n=Xc(t,n,a)):n.memoizedState!==null?(ga(),n.child=t.child,n.flags|=128,n=null):(ga(),E=s.fallback,u=n.mode,s=_l({mode:"visible",children:s.children},u),E=Za(E,u,a,null),E.flags|=2,s.return=n,E.return=n,s.sibling=E,n.child=s,er(n,t.child,null,a),s=n.child,s.memoizedState=Hc(a),s.childLanes=Gc(t,g,a),n.memoizedState=Fc,n=no(null,s));else if(ma(n),Tf(E)){if(g=E.nextSibling&&E.nextSibling.dataset,g)var J=g.dgst;g=J,s=Error(r(419)),s.stack="",s.digest=g,ks({value:s,source:null,stack:null}),n=Xc(t,n,a)}else if(an||zr(t,n,a,!1),g=(a&t.childLanes)!==0,an||g){if(g=Fe,g!==null&&(s=Si(g,a),s!==0&&s!==P.retryLane))throw P.retryLane=s,Ya(t,s),Bn(g,t,s),Bc;Ef(E)||Al(),n=Xc(t,n,a)}else Ef(E)?(n.flags|=192,n.child=t.child,n=null):(t=P.treeContext,Ve=ai(E.nextSibling),vn=n,ve=!0,ua=null,ni=!1,t!==null&&Jd(n,t),n=Vc(n,s.children),n.flags|=4096);return n}return u?(ga(),E=s.fallback,u=n.mode,P=t.child,J=P.sibling,s=Ni(P,{mode:"hidden",children:s.children}),s.subtreeFlags=P.subtreeFlags&65011712,J!==null?E=Ni(J,E):(E=Za(E,u,a,null),E.flags|=2),E.return=n,s.return=n,s.sibling=E,n.child=s,no(null,s),s=n.child,E=t.child.memoizedState,E===null?E=Hc(a):(u=E.cachePool,u!==null?(P=en._currentValue,u=u.parent!==P?{parent:P,pool:P}:u):u=ap(),E={baseLanes:E.baseLanes|a,cachePool:u}),s.memoizedState=E,s.childLanes=Gc(t,g,a),n.memoizedState=Fc,no(t.child,s)):(ma(n),a=t.child,t=a.sibling,a=Ni(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function Vc(t,n){return n=_l({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function _l(t,n){return t=Vn(22,t,null,n),t.lanes=0,t}function Xc(t,n,a){return er(n,t.child,null,a),t=Vc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function _m(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),ac(t.return,n,a)}function kc(t,n,a,s,u,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=u,g.treeForkCount=f)}function vm(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var g=Qe.current,E=(g&2)!==0;if(E?(g=g&1|2,n.flags|=128):g&=1,yt(Qe,g),xn(t,n,s,a),s=ve?Xs:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_m(t,a,n);else if(t.tag===19)_m(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&rl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),kc(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&rl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}kc(n,!0,a,null,f,s);break;case"together":kc(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Fi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Sa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(zr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ni(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ni(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function qc(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Qo(t)))}function I0(t,n,a){switch(n.tag){case 3:Bt(n,n.stateNode.containerInfo),fa(n,en,t.memoizedState.cache),ja();break;case 27:case 5:ee(n);break;case 4:Bt(n,n.stateNode.containerInfo);break;case 10:fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,gc(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?gm(t,n,a):(ma(n),t=Fi(t,n,a),t!==null?t.sibling:null);ma(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(zr(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return vm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),yt(Qe,Qe.current),s)break;return null;case 22:return n.lanes=0,cm(t,n,a,n.pendingProps);case 24:fa(n,en,t.memoizedState.cache)}return Fi(t,n,a)}function Sm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)an=!0;else{if(!qc(t,a)&&(n.flags&128)===0)return an=!1,I0(t,n,a);an=(t.flags&131072)!==0}else an=!1,ve&&(n.flags&1048576)!==0&&Qd(n,Xs,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=$a(n.elementType),n.type=t,typeof t=="function")Ku(t)?(s=ir(t,s),n.tag=1,n=pm(null,n,t,s,a)):(n.tag=0,n=Ic(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===U){n.tag=11,n=om(null,n,t,s,a);break t}else if(u===z){n.tag=14,n=lm(null,n,t,s,a);break t}}throw n=ft(t)||t,Error(r(306,n,""))}}return n;case 0:return Ic(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=ir(s,n.pendingProps),pm(t,n,s,u,a);case 3:t:{if(Bt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,fc(t,n),Qs(n,s,null,a);var g=n.memoizedState;if(s=g.cache,fa(n,en,s),s!==f.cache&&rc(n,[en],a,!0),Ks(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=mm(t,n,s,a);break t}else if(s!==u){u=$n(Error(r(424)),n),ks(u),n=mm(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ve=ai(t.firstChild),vn=n,ve=!0,ua=null,ni=!0,a=cp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ja(),s===u){n=Fi(t,n,a);break t}xn(t,n,s,a)}n=n.child}return n;case 26:return gl(t,n),t===null?(a=Dg(n.type,null,n.pendingProps,null))?n.memoizedState=a:ve||(a=n.type,t=n.pendingProps,s=Nl(Et.current).createElement(a),s[Ye]=n,s[_n]=t,yn(s,a,t),vt(s),n.stateNode=s):n.memoizedState=Dg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ee(n),t===null&&ve&&(s=n.stateNode=Rg(n.type,n.pendingProps,Et.current),vn=n,ni=!0,u=Ve,Ta(n.type)?(bf=u,Ve=ai(s.firstChild)):Ve=u),xn(t,n,n.pendingProps.children,a),gl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ve&&((u=s=Ve)&&(s=pS(s,n.type,n.pendingProps,ni),s!==null?(n.stateNode=s,vn=n,Ve=ai(s.firstChild),ni=!1,u=!0):u=!1),u||ca(n)),ee(n),u=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,xf(u,f)?s=null:g!==null&&xf(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=vc(t,n,w0,null,null,a),vo._currentValue=u),gl(t,n),xn(t,n,s,a),n.child;case 6:return t===null&&ve&&((t=a=Ve)&&(a=mS(a,n.pendingProps,ni),a!==null?(n.stateNode=a,vn=n,Ve=null,t=!0):t=!1),t||ca(n)),null;case 13:return gm(t,n,a);case 4:return Bt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=er(n,null,s,a):xn(t,n,s,a),n.child;case 11:return om(t,n,n.type,n.pendingProps,a);case 7:return xn(t,n,n.pendingProps,a),n.child;case 8:return xn(t,n,n.pendingProps.children,a),n.child;case 12:return xn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,fa(n,n.type,s.value),xn(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,Qa(n),u=Sn(u),s=s(u),n.flags|=1,xn(t,n,s,a),n.child;case 14:return lm(t,n,n.type,n.pendingProps,a);case 15:return um(t,n,n.type,n.pendingProps,a);case 19:return vm(t,n,a);case 31:return B0(t,n,a);case 22:return cm(t,n,a,n.pendingProps);case 24:return Qa(n),s=Sn(en),t===null?(u=lc(),u===null&&(u=Fe,f=sc(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},cc(n),fa(n,en,u)):((t.lanes&a)!==0&&(fc(t,n),Qs(n,null,null,a),Ks()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),fa(n,en,s)):(s=f.cache,fa(n,en,s),s!==u.cache&&rc(n,[en],a,!0))),xn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Hi(t){t.flags|=4}function Wc(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Wm())t.flags|=8192;else throw tr=el,uc}else t.flags&=-16777217}function xm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!zg(n))if(Wm())t.flags|=8192;else throw tr=el,uc}function vl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ln():536870912,t.lanes|=n,Yr|=n)}function io(t,n){if(!ve)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Xe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function F0(t,n,a){var s=n.pendingProps;switch(tc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(n),null;case 1:return Xe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Pi(en),zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Or(n)?Hi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,nc())),Xe(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(Hi(n),f!==null?(Xe(n),xm(n,f)):(Xe(n),Wc(n,u,null,s,a))):f?f!==t.memoizedState?(Hi(n),Xe(n),xm(n,f)):(Xe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Hi(n),Xe(n),Wc(n,u,t,s,a)),null;case 27:if(Ue(n),a=Et.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Hi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Xe(n),null}t=Y.current,Or(n)?$d(n):(t=Rg(u,s,a),n.stateNode=t,Hi(n))}return Xe(n),null;case 5:if(Ue(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Hi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Xe(n),null}if(f=Y.current,Or(n))$d(n);else{var g=Nl(Et.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(u,{is:s.is}):g.createElement(u)}}f[Ye]=n,f[_n]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(yn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Hi(n)}}return Xe(n),Wc(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Hi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Et.current,Or(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=vn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[Ye]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||gg(t.nodeValue,a)),t||ca(n,!0)}else t=Nl(t).createTextNode(s),t[Ye]=n,n.stateNode=t}return Xe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Or(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Ye]=n}else ja(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),t=!1}else a=nc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(kn(n),n):(kn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Xe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Or(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Ye]=n}else ja(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),u=!1}else u=nc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(kn(n),n):(kn(n),null)}return kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),vl(n,n.updateQueue),Xe(n),null);case 4:return zt(),t===null&&mf(n.stateNode.containerInfo),Xe(n),null;case 10:return Pi(n.type),Xe(n),null;case 19:if($(Qe),s=n.memoizedState,s===null)return Xe(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)io(s,!1);else{if(je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=rl(t),f!==null){for(n.flags|=128,io(s,!1),t=f.updateQueue,n.updateQueue=t,vl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Zd(a,t),a=a.sibling;return yt(Qe,Qe.current&1|2),ve&&Oi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&dt()>El&&(n.flags|=128,u=!0,io(s,!1),n.lanes=4194304)}else{if(!u)if(t=rl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,vl(n,t),io(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!ve)return Xe(n),null}else 2*dt()-s.renderingStartTime>El&&a!==536870912&&(n.flags|=128,u=!0,io(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=dt(),t.sibling=null,a=Qe.current,yt(Qe,u?a&1|2:a&1),ve&&Oi(n,s.treeForkCount),t):(Xe(n),null);case 22:case 23:return kn(n),mc(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Xe(n),n.subtreeFlags&6&&(n.flags|=8192)):Xe(n),a=n.updateQueue,a!==null&&vl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&$(Ja),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Pi(en),Xe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function H0(t,n){switch(tc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Pi(en),zt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ue(n),null;case 31:if(n.memoizedState!==null){if(kn(n),n.alternate===null)throw Error(r(340));ja()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(kn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ja()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return $(Qe),null;case 4:return zt(),null;case 10:return Pi(n.type),null;case 22:case 23:return kn(n),mc(),t!==null&&$(Ja),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Pi(en),null;case 25:return null;default:return null}}function ym(t,n){switch(tc(n),n.tag){case 3:Pi(en),zt();break;case 26:case 27:case 5:Ue(n);break;case 4:zt();break;case 31:n.memoizedState!==null&&kn(n);break;case 13:kn(n);break;case 19:$(Qe);break;case 10:Pi(n.type);break;case 22:case 23:kn(n),mc(),t!==null&&$(Ja);break;case 24:Pi(en)}}function ao(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==u)}}catch(E){De(n,n.return,E)}}function _a(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var g=s.inst,E=g.destroy;if(E!==void 0){g.destroy=void 0,u=n;var P=a,J=E;try{J()}catch(ht){De(u,P,ht)}}}s=s.next}while(s!==f)}}catch(ht){De(n,n.return,ht)}}function Mm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{hp(n,a)}catch(s){De(t,t.return,s)}}}function Em(t,n,a){a.props=ir(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){De(t,n,s)}}function ro(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){De(t,n,u)}}function Ei(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){De(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){De(t,n,u)}else a.current=null}function Tm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){De(t,t.return,u)}}function Yc(t,n,a){try{var s=t.stateNode;lS(s,t.type,a,n),s[_n]=n}catch(u){De(t,t.return,u)}}function bm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ta(t.type)||t.tag===4}function Zc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||bm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ta(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jc(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ui));else if(s!==4&&(s===27&&Ta(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(jc(t,n,a),t=t.sibling;t!==null;)jc(t,n,a),t=t.sibling}function Sl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ta(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Sl(t,n,a),t=t.sibling;t!==null;)Sl(t,n,a),t=t.sibling}function Am(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);yn(n,s,a),n[Ye]=t,n[_n]=a}catch(f){De(t,t.return,f)}}var Gi=!1,rn=!1,Kc=!1,Rm=typeof WeakSet=="function"?WeakSet:Set,pn=null;function G0(t,n){if(t=t.containerInfo,vf=Hl,t=Fd(t),Xu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,E=-1,P=-1,J=0,ht=0,gt=t,tt=null;e:for(;;){for(var rt;gt!==a||u!==0&&gt.nodeType!==3||(E=g+u),gt!==f||s!==0&&gt.nodeType!==3||(P=g+s),gt.nodeType===3&&(g+=gt.nodeValue.length),(rt=gt.firstChild)!==null;)tt=gt,gt=rt;for(;;){if(gt===t)break e;if(tt===a&&++J===u&&(E=g),tt===f&&++ht===s&&(P=g),(rt=gt.nextSibling)!==null)break;gt=tt,tt=gt.parentNode}gt=rt}a=E===-1||P===-1?null:{start:E,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Sf={focusedElem:t,selectionRange:a},Hl=!1,pn=n;pn!==null;)if(n=pn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,pn=t;else for(;pn!==null;){switch(n=pn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Ft=ir(a.type,u);t=s.getSnapshotBeforeUpdate(Ft,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Kt){De(a,a.return,Kt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Mf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Mf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,pn=t;break}pn=n.return}}function Cm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Xi(t,a),s&4&&ao(5,a);break;case 1:if(Xi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){De(a,a.return,g)}else{var u=ir(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){De(a,a.return,g)}}s&64&&Mm(a),s&512&&ro(a,a.return);break;case 3:if(Xi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{hp(t,n)}catch(g){De(a,a.return,g)}}break;case 27:n===null&&s&4&&Am(a);case 26:case 5:Xi(t,a),n===null&&s&4&&Tm(a),s&512&&ro(a,a.return);break;case 12:Xi(t,a);break;case 31:Xi(t,a),s&4&&Um(t,a);break;case 13:Xi(t,a),s&4&&Lm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=K0.bind(null,a),gS(t,a))));break;case 22:if(s=a.memoizedState!==null||Gi,!s){n=n!==null&&n.memoizedState!==null||rn,u=Gi;var f=rn;Gi=s,(rn=n)&&!f?ki(t,a,(a.subtreeFlags&8772)!==0):Xi(t,a),Gi=u,rn=f}break;case 30:break;default:Xi(t,a)}}function wm(t){var n=t.alternate;n!==null&&(t.alternate=null,wm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&b(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var We=null,Nn=!1;function Vi(t,n,a){for(a=a.child;a!==null;)Dm(t,n,a),a=a.sibling}function Dm(t,n,a){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(Wt,a)}catch{}switch(a.tag){case 26:rn||Ei(a,n),Vi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:rn||Ei(a,n);var s=We,u=Nn;Ta(a.type)&&(We=a.stateNode,Nn=!1),Vi(t,n,a),mo(a.stateNode),We=s,Nn=u;break;case 5:rn||Ei(a,n);case 6:if(s=We,u=Nn,We=null,Vi(t,n,a),We=s,Nn=u,We!==null)if(Nn)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(a.stateNode)}catch(f){De(a,n,f)}else try{We.removeChild(a.stateNode)}catch(f){De(a,n,f)}break;case 18:We!==null&&(Nn?(t=We,Mg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),es(t)):Mg(We,a.stateNode));break;case 4:s=We,u=Nn,We=a.stateNode.containerInfo,Nn=!0,Vi(t,n,a),We=s,Nn=u;break;case 0:case 11:case 14:case 15:_a(2,a,n),rn||_a(4,a,n),Vi(t,n,a);break;case 1:rn||(Ei(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Em(a,n,s)),Vi(t,n,a);break;case 21:Vi(t,n,a);break;case 22:rn=(s=rn)||a.memoizedState!==null,Vi(t,n,a),rn=s;break;default:Vi(t,n,a)}}function Um(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{es(t)}catch(a){De(n,n.return,a)}}}function Lm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{es(t)}catch(a){De(n,n.return,a)}}function V0(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Rm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Rm),n;default:throw Error(r(435,t.tag))}}function xl(t,n){var a=V0(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=Q0.bind(null,t,s);s.then(u,u)}})}function On(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,g=n,E=g;t:for(;E!==null;){switch(E.tag){case 27:if(Ta(E.type)){We=E.stateNode,Nn=!1;break t}break;case 5:We=E.stateNode,Nn=!1;break t;case 3:case 4:We=E.stateNode.containerInfo,Nn=!0;break t}E=E.return}if(We===null)throw Error(r(160));Dm(f,g,u),We=null,Nn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Nm(n,t),n=n.sibling}var ci=null;function Nm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:On(n,t),zn(t),s&4&&(_a(3,t,t.return),ao(3,t),_a(5,t,t.return));break;case 1:On(n,t),zn(t),s&512&&(rn||a===null||Ei(a,a.return)),s&64&&Gi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=ci;if(On(n,t),zn(t),s&512&&(rn||a===null||Ei(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Va]||f[Ye]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),yn(f,s,a),f[Ye]=t,vt(f),s=f;break t;case"link":var g=Ng("link","href",u).get(s+(a.href||""));if(g){for(var E=0;E<g.length;E++)if(f=g[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(E,1);break e}}f=u.createElement(s),yn(f,s,a),u.head.appendChild(f);break;case"meta":if(g=Ng("meta","content",u).get(s+(a.content||""))){for(E=0;E<g.length;E++)if(f=g[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(E,1);break e}}f=u.createElement(s),yn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[Ye]=t,vt(f),s=f}t.stateNode=s}else Og(u,t.type,t.stateNode);else t.stateNode=Lg(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Og(u,t.type,t.stateNode):Lg(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Yc(t,t.memoizedProps,a.memoizedProps)}break;case 27:On(n,t),zn(t),s&512&&(rn||a===null||Ei(a,a.return)),a!==null&&s&4&&Yc(t,t.memoizedProps,a.memoizedProps);break;case 5:if(On(n,t),zn(t),s&512&&(rn||a===null||Ei(a,a.return)),t.flags&32){u=t.stateNode;try{Tr(u,"")}catch(Ft){De(t,t.return,Ft)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,Yc(t,u,a!==null?a.memoizedProps:u)),s&1024&&(Kc=!0);break;case 6:if(On(n,t),zn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Ft){De(t,t.return,Ft)}}break;case 3:if(Pl=null,u=ci,ci=Ol(n.containerInfo),On(n,t),ci=u,zn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{es(n.containerInfo)}catch(Ft){De(t,t.return,Ft)}Kc&&(Kc=!1,Om(t));break;case 4:s=ci,ci=Ol(t.stateNode.containerInfo),On(n,t),zn(t),ci=s;break;case 12:On(n,t),zn(t);break;case 31:On(n,t),zn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,xl(t,s)));break;case 13:On(n,t),zn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ml=dt()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,xl(t,s)));break;case 22:u=t.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,J=Gi,ht=rn;if(Gi=J||u,rn=ht||P,On(n,t),rn=ht,Gi=J,zn(t),s&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||P||Gi||rn||ar(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,u)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{E=P.stateNode;var gt=P.memoizedProps.style,tt=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;E.style.display=tt==null||typeof tt=="boolean"?"":(""+tt).trim()}}catch(Ft){De(P,P.return,Ft)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=u?"":P.memoizedProps}catch(Ft){De(P,P.return,Ft)}}}else if(n.tag===18){if(a===null){P=n;try{var rt=P.stateNode;u?Eg(rt,!0):Eg(P.stateNode,!1)}catch(Ft){De(P,P.return,Ft)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,xl(t,a))));break;case 19:On(n,t),zn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,xl(t,s)));break;case 30:break;case 21:break;default:On(n,t),zn(t)}}function zn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(bm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Zc(t);Sl(t,f,u);break;case 5:var g=a.stateNode;a.flags&32&&(Tr(g,""),a.flags&=-33);var E=Zc(t);Sl(t,E,g);break;case 3:case 4:var P=a.stateNode.containerInfo,J=Zc(t);jc(t,J,P);break;default:throw Error(r(161))}}catch(ht){De(t,t.return,ht)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Om(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Om(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Xi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Cm(t,n.alternate,n),n=n.sibling}function ar(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:_a(4,n,n.return),ar(n);break;case 1:Ei(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Em(n,n.return,a),ar(n);break;case 27:mo(n.stateNode);case 26:case 5:Ei(n,n.return),ar(n);break;case 22:n.memoizedState===null&&ar(n);break;case 30:ar(n);break;default:ar(n)}t=t.sibling}}function ki(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:ki(u,f,a),ao(4,f);break;case 1:if(ki(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){De(s,s.return,J)}if(s=f,u=s.updateQueue,u!==null){var E=s.stateNode;try{var P=u.shared.hiddenCallbacks;if(P!==null)for(u.shared.hiddenCallbacks=null,u=0;u<P.length;u++)fp(P[u],E)}catch(J){De(s,s.return,J)}}a&&g&64&&Mm(f),ro(f,f.return);break;case 27:Am(f);case 26:case 5:ki(u,f,a),a&&s===null&&g&4&&Tm(f),ro(f,f.return);break;case 12:ki(u,f,a);break;case 31:ki(u,f,a),a&&g&4&&Um(u,f);break;case 13:ki(u,f,a),a&&g&4&&Lm(u,f);break;case 22:f.memoizedState===null&&ki(u,f,a),ro(f,f.return);break;case 30:break;default:ki(u,f,a)}n=n.sibling}}function Qc(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&qs(a))}function Jc(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qs(t))}function fi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)zm(t,n,a,s),n=n.sibling}function zm(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:fi(t,n,a,s),u&2048&&ao(9,n);break;case 1:fi(t,n,a,s);break;case 3:fi(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qs(t)));break;case 12:if(u&2048){fi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,E=f.onPostCommit;typeof E=="function"&&E(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(P){De(n,n.return,P)}}else fi(t,n,a,s);break;case 31:fi(t,n,a,s);break;case 13:fi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?fi(t,n,a,s):so(t,n):f._visibility&2?fi(t,n,a,s):(f._visibility|=2,kr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Qc(g,n);break;case 24:fi(t,n,a,s),u&2048&&Jc(n.alternate,n);break;default:fi(t,n,a,s)}}function kr(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,E=a,P=s,J=g.flags;switch(g.tag){case 0:case 11:case 15:kr(f,g,E,P,u),ao(8,g);break;case 23:break;case 22:var ht=g.stateNode;g.memoizedState!==null?ht._visibility&2?kr(f,g,E,P,u):so(f,g):(ht._visibility|=2,kr(f,g,E,P,u)),u&&J&2048&&Qc(g.alternate,g);break;case 24:kr(f,g,E,P,u),u&&J&2048&&Jc(g.alternate,g);break;default:kr(f,g,E,P,u)}n=n.sibling}}function so(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:so(a,s),u&2048&&Qc(s.alternate,s);break;case 24:so(a,s),u&2048&&Jc(s.alternate,s);break;default:so(a,s)}n=n.sibling}}var oo=8192;function qr(t,n,a){if(t.subtreeFlags&oo)for(t=t.child;t!==null;)Pm(t,n,a),t=t.sibling}function Pm(t,n,a){switch(t.tag){case 26:qr(t,n,a),t.flags&oo&&t.memoizedState!==null&&CS(a,ci,t.memoizedState,t.memoizedProps);break;case 5:qr(t,n,a);break;case 3:case 4:var s=ci;ci=Ol(t.stateNode.containerInfo),qr(t,n,a),ci=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=oo,oo=16777216,qr(t,n,a),oo=s):qr(t,n,a));break;default:qr(t,n,a)}}function Bm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function lo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,Fm(s,t)}Bm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Im(t),t=t.sibling}function Im(t){switch(t.tag){case 0:case 11:case 15:lo(t),t.flags&2048&&_a(9,t,t.return);break;case 3:lo(t);break;case 12:lo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,yl(t)):lo(t);break;default:lo(t)}}function yl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,Fm(s,t)}Bm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:_a(8,n,n.return),yl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,yl(n));break;default:yl(n)}t=t.sibling}}function Fm(t,n){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:_a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:qs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,pn=s;else t:for(a=t;pn!==null;){s=pn;var u=s.sibling,f=s.return;if(wm(s),s===a){pn=null;break t}if(u!==null){u.return=f,pn=u;break t}pn=f}}}var X0={getCacheForType:function(t){var n=Sn(en),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Sn(en).controller.signal}},k0=typeof WeakMap=="function"?WeakMap:Map,Re=0,Fe=null,fe=null,ge=0,we=0,qn=null,va=!1,Wr=!1,$c=!1,qi=0,je=0,Sa=0,rr=0,tf=0,Wn=0,Yr=0,uo=null,Pn=null,ef=!1,Ml=0,Hm=0,El=1/0,Tl=null,xa=null,cn=0,ya=null,Zr=null,Wi=0,nf=0,af=null,Gm=null,co=0,rf=null;function Yn(){return(Re&2)!==0&&ge!==0?ge&-ge:N.T!==null?ff():Ls()}function Vm(){if(Wn===0)if((ge&536870912)===0||ve){var t=ut;ut<<=1,(ut&3932160)===0&&(ut=262144),Wn=t}else Wn=536870912;return t=Xn.current,t!==null&&(t.flags|=32),Wn}function Bn(t,n,a){(t===Fe&&(we===2||we===9)||t.cancelPendingCommit!==null)&&(jr(t,0),Ma(t,ge,Wn,!1)),gn(t,a),((Re&2)===0||t!==Fe)&&(t===Fe&&((Re&2)===0&&(rr|=a),je===4&&Ma(t,ge,Wn,!1)),Ti(t))}function Xm(t,n,a){if((Re&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Jt(t,n),u=s?Y0(t,n):of(t,n,!0),f=s;do{if(u===0){Wr&&!s&&Ma(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!q0(a)){u=of(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var E=t;u=uo;var P=E.current.memoizedState.isDehydrated;if(P&&(jr(E,g).flags|=256),g=of(E,g,!1),g!==2){if($c&&!P){E.errorRecoveryDisabledLanes|=f,rr|=f,u=4;break t}f=Pn,Pn=u,f!==null&&(Pn===null?Pn=f:Pn.push.apply(Pn,f))}u=g}if(f=!1,u!==2)continue}}if(u===1){jr(t,0),Ma(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ma(s,n,Wn,!va);break t;case 2:Pn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Ml+300-dt(),10<u)){if(Ma(s,n,Wn,!va),wt(s,0,!0)!==0)break t;Wi=n,s.timeoutHandle=xg(km.bind(null,s,a,Pn,Tl,ef,n,Wn,rr,Yr,va,f,"Throttled",-0,0),u);break t}km(s,a,Pn,Tl,ef,n,Wn,rr,Yr,va,f,null,-0,0)}}break}while(!0);Ti(t)}function km(t,n,a,s,u,f,g,E,P,J,ht,gt,tt,rt){if(t.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ui},Pm(n,f,gt);var Ft=(f&62914560)===f?Ml-dt():(f&4194048)===f?Hm-dt():0;if(Ft=wS(gt,Ft),Ft!==null){Wi=f,t.cancelPendingCommit=Ft(Jm.bind(null,t,n,f,a,s,u,g,E,P,ht,gt,null,tt,rt)),Ma(t,f,g,!J);return}}Jm(t,n,f,a,s,u,g,E,P)}function q0(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Gn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ma(t,n,a,s){n&=~tf,n&=~rr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Qt(u),g=1<<f;s[f]=-1,u&=~g}a!==0&&Ds(t,a,n)}function bl(){return(Re&6)===0?(fo(0),!1):!0}function sf(){if(fe!==null){if(we===0)var t=fe.return;else t=fe,zi=Ka=null,yc(t),Fr=null,Ys=0,t=fe;for(;t!==null;)ym(t.alternate,t),t=t.return;fe=null}}function jr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,fS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Wi=0,sf(),Fe=t,fe=a=Ni(t.current,null),ge=n,we=0,qn=null,va=!1,Wr=Jt(t,n),$c=!1,Yr=Wn=tf=rr=Sa=je=0,Pn=uo=null,ef=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-Qt(s),f=1<<u;n|=t[u],s&=~f}return qi=n,Wo(),a}function qm(t,n){ae=null,N.H=eo,n===Ir||n===tl?(n=op(),we=3):n===uc?(n=op(),we=4):we=n===Bc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qn=n,fe===null&&(je=1,pl(t,$n(n,t.current)))}function Wm(){var t=Xn.current;return t===null?!0:(ge&4194048)===ge?ii===null:(ge&62914560)===ge||(ge&536870912)!==0?t===ii:!1}function Ym(){var t=N.H;return N.H=eo,t===null?eo:t}function Zm(){var t=N.A;return N.A=X0,t}function Al(){je=4,va||(ge&4194048)!==ge&&Xn.current!==null||(Wr=!0),(Sa&134217727)===0&&(rr&134217727)===0||Fe===null||Ma(Fe,ge,Wn,!1)}function of(t,n,a){var s=Re;Re|=2;var u=Ym(),f=Zm();(Fe!==t||ge!==n)&&(Tl=null,jr(t,n)),n=!1;var g=je;t:do try{if(we!==0&&fe!==null){var E=fe,P=qn;switch(we){case 8:sf(),g=6;break t;case 3:case 2:case 9:case 6:Xn.current===null&&(n=!0);var J=we;if(we=0,qn=null,Kr(t,E,P,J),a&&Wr){g=0;break t}break;default:J=we,we=0,qn=null,Kr(t,E,P,J)}}W0(),g=je;break}catch(ht){qm(t,ht)}while(!0);return n&&t.shellSuspendCounter++,zi=Ka=null,Re=s,N.H=u,N.A=f,fe===null&&(Fe=null,ge=0,Wo()),g}function W0(){for(;fe!==null;)jm(fe)}function Y0(t,n){var a=Re;Re|=2;var s=Ym(),u=Zm();Fe!==t||ge!==n?(Tl=null,El=dt()+500,jr(t,n)):Wr=Jt(t,n);t:do try{if(we!==0&&fe!==null){n=fe;var f=qn;e:switch(we){case 1:we=0,qn=null,Kr(t,n,f,1);break;case 2:case 9:if(rp(f)){we=0,qn=null,Km(n);break}n=function(){we!==2&&we!==9||Fe!==t||(we=7),Ti(t)},f.then(n,n);break t;case 3:we=7;break t;case 4:we=5;break t;case 7:rp(f)?(we=0,qn=null,Km(n)):(we=0,qn=null,Kr(t,n,f,7));break;case 5:var g=null;switch(fe.tag){case 26:g=fe.memoizedState;case 5:case 27:var E=fe;if(g?zg(g):E.stateNode.complete){we=0,qn=null;var P=E.sibling;if(P!==null)fe=P;else{var J=E.return;J!==null?(fe=J,Rl(J)):fe=null}break e}}we=0,qn=null,Kr(t,n,f,5);break;case 6:we=0,qn=null,Kr(t,n,f,6);break;case 8:sf(),je=6;break t;default:throw Error(r(462))}}Z0();break}catch(ht){qm(t,ht)}while(!0);return zi=Ka=null,N.H=s,N.A=u,Re=a,fe!==null?0:(Fe=null,ge=0,Wo(),je)}function Z0(){for(;fe!==null&&!T();)jm(fe)}function jm(t){var n=Sm(t.alternate,t,qi);t.memoizedProps=t.pendingProps,n===null?Rl(t):fe=n}function Km(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=dm(a,n,n.pendingProps,n.type,void 0,ge);break;case 11:n=dm(a,n,n.pendingProps,n.type.render,n.ref,ge);break;case 5:yc(n);default:ym(a,n),n=fe=Zd(n,qi),n=Sm(a,n,qi)}t.memoizedProps=t.pendingProps,n===null?Rl(t):fe=n}function Kr(t,n,a,s){zi=Ka=null,yc(n),Fr=null,Ys=0;var u=n.return;try{if(P0(t,u,n,a,ge)){je=1,pl(t,$n(a,t.current)),fe=null;return}}catch(f){if(u!==null)throw fe=u,f;je=1,pl(t,$n(a,t.current)),fe=null;return}n.flags&32768?(ve||s===1?t=!0:Wr||(ge&536870912)!==0?t=!1:(va=t=!0,(s===2||s===9||s===3||s===6)&&(s=Xn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Qm(n,t)):Rl(n)}function Rl(t){var n=t;do{if((n.flags&32768)!==0){Qm(n,va);return}t=n.return;var a=F0(n.alternate,n,qi);if(a!==null){fe=a;return}if(n=n.sibling,n!==null){fe=n;return}fe=n=t}while(n!==null);je===0&&(je=5)}function Qm(t,n){do{var a=H0(t.alternate,t);if(a!==null){a.flags&=32767,fe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){fe=t;return}fe=t=a}while(t!==null);je=6,fe=null}function Jm(t,n,a,s,u,f,g,E,P){t.cancelPendingCommit=null;do Cl();while(cn!==0);if((Re&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Zu,oi(t,a,f,g,E,P),t===Fe&&(fe=Fe=null,ge=0),Zr=n,ya=t,Wi=a,nf=f,af=u,Gm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,J0(Ct,function(){return ig(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=N.T,N.T=null,u=V.p,V.p=2,g=Re,Re|=4;try{G0(t,n,a)}finally{Re=g,V.p=u,N.T=s}}cn=1,$m(),tg(),eg()}}function $m(){if(cn===1){cn=0;var t=ya,n=Zr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var s=V.p;V.p=2;var u=Re;Re|=4;try{Nm(n,t);var f=Sf,g=Fd(t.containerInfo),E=f.focusedElem,P=f.selectionRange;if(g!==E&&E&&E.ownerDocument&&Id(E.ownerDocument.documentElement,E)){if(P!==null&&Xu(E)){var J=P.start,ht=P.end;if(ht===void 0&&(ht=J),"selectionStart"in E)E.selectionStart=J,E.selectionEnd=Math.min(ht,E.value.length);else{var gt=E.ownerDocument||document,tt=gt&&gt.defaultView||window;if(tt.getSelection){var rt=tt.getSelection(),Ft=E.textContent.length,Kt=Math.min(P.start,Ft),ze=P.end===void 0?Kt:Math.min(P.end,Ft);!rt.extend&&Kt>ze&&(g=ze,ze=Kt,Kt=g);var W=Bd(E,Kt),H=Bd(E,ze);if(W&&H&&(rt.rangeCount!==1||rt.anchorNode!==W.node||rt.anchorOffset!==W.offset||rt.focusNode!==H.node||rt.focusOffset!==H.offset)){var Q=gt.createRange();Q.setStart(W.node,W.offset),rt.removeAllRanges(),Kt>ze?(rt.addRange(Q),rt.extend(H.node,H.offset)):(Q.setEnd(H.node,H.offset),rt.addRange(Q))}}}}for(gt=[],rt=E;rt=rt.parentNode;)rt.nodeType===1&&gt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<gt.length;E++){var pt=gt[E];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Hl=!!vf,Sf=vf=null}finally{Re=u,V.p=s,N.T=a}}t.current=n,cn=2}}function tg(){if(cn===2){cn=0;var t=ya,n=Zr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var s=V.p;V.p=2;var u=Re;Re|=4;try{Cm(t,n.alternate,n)}finally{Re=u,V.p=s,N.T=a}}cn=3}}function eg(){if(cn===4||cn===3){cn=0,et();var t=ya,n=Zr,a=Wi,s=Gm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?cn=5:(cn=0,Zr=ya=null,ng(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(xa=null),Mr(a),n=n.stateNode,Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(Wt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=N.T,u=V.p,V.p=2,N.T=null;try{for(var f=t.onRecoverableError,g=0;g<s.length;g++){var E=s[g];f(E.value,{componentStack:E.stack})}}finally{N.T=n,V.p=u}}(Wi&3)!==0&&Cl(),Ti(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===rf?co++:(co=0,rf=t):co=0,fo(0)}}function ng(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,qs(n)))}function Cl(){return $m(),tg(),eg(),ig()}function ig(){if(cn!==5)return!1;var t=ya,n=nf;nf=0;var a=Mr(Wi),s=N.T,u=V.p;try{V.p=32>a?32:a,N.T=null,a=af,af=null;var f=ya,g=Wi;if(cn=0,Zr=ya=null,Wi=0,(Re&6)!==0)throw Error(r(331));var E=Re;if(Re|=4,Im(f.current),zm(f,f.current,g,a),Re=E,fo(0,!1),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(Wt,f)}catch{}return!0}finally{V.p=u,N.T=s,ng(t,n)}}function ag(t,n,a){n=$n(a,n),n=Pc(t.stateNode,n,2),t=pa(t,n,2),t!==null&&(gn(t,2),Ti(t))}function De(t,n,a){if(t.tag===3)ag(t,t,a);else for(;n!==null;){if(n.tag===3){ag(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(xa===null||!xa.has(s))){t=$n(a,t),a=rm(2),s=pa(n,a,2),s!==null&&(sm(a,s,n,t),gn(s,2),Ti(s));break}}n=n.return}}function lf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new k0;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||($c=!0,u.add(a),t=j0.bind(null,t,n,a),n.then(t,t))}function j0(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Fe===t&&(ge&a)===a&&(je===4||je===3&&(ge&62914560)===ge&&300>dt()-Ml?(Re&2)===0&&jr(t,0):tf|=a,Yr===ge&&(Yr=0)),Ti(t)}function rg(t,n){n===0&&(n=ln()),t=Ya(t,n),t!==null&&(gn(t,n),Ti(t))}function K0(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),rg(t,a)}function Q0(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),rg(t,a)}function J0(t,n){return kt(t,n)}var wl=null,Qr=null,uf=!1,Dl=!1,cf=!1,Ea=0;function Ti(t){t!==Qr&&t.next===null&&(Qr===null?wl=Qr=t:Qr=Qr.next=t),Dl=!0,uf||(uf=!0,tS())}function fo(t,n){if(!cf&&Dl){cf=!0;do for(var a=!1,s=wl;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var g=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Qt(42|t)+1)-1,f&=u&~(g&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,ug(s,f))}else f=ge,f=wt(s,s===Fe?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Jt(s,f)||(a=!0,ug(s,f));s=s.next}while(a);cf=!1}}function $0(){sg()}function sg(){Dl=uf=!1;var t=0;Ea!==0&&cS()&&(t=Ea);for(var n=dt(),a=null,s=wl;s!==null;){var u=s.next,f=og(s,n);f===0?(s.next=null,a===null?wl=u:a.next=u,u===null&&(Qr=a)):(a=s,(t!==0||(f&3)!==0)&&(Dl=!0)),s=u}cn!==0&&cn!==5||fo(t),Ea!==0&&(Ea=0)}function og(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Qt(f),E=1<<g,P=u[g];P===-1?((E&a)===0||(E&s)!==0)&&(u[g]=qe(E,n)):P<=n&&(t.expiredLanes|=E),f&=~E}if(n=Fe,a=ge,a=wt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(we===2||we===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&D(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Jt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&D(s),Mr(a)){case 2:case 8:a=Vt;break;case 32:a=Ct;break;case 268435456:a=pe;break;default:a=Ct}return s=lg.bind(null,t),a=kt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&D(s),t.callbackPriority=2,t.callbackNode=null,2}function lg(t,n){if(cn!==0&&cn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Cl()&&t.callbackNode!==a)return null;var s=ge;return s=wt(t,t===Fe?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Xm(t,s,n),og(t,dt()),t.callbackNode!=null&&t.callbackNode===a?lg.bind(null,t):null)}function ug(t,n){if(Cl())return null;Xm(t,n,!0)}function tS(){hS(function(){(Re&6)!==0?kt(mt,$0):sg()})}function ff(){if(Ea===0){var t=Pr;t===0&&(t=At,At<<=1,(At&261888)===0&&(At=256)),Ea=t}return Ea}function cg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Io(""+t)}function fg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function eS(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=cg((u[_n]||null).action),g=s.submitter;g&&(n=(n=g[_n]||null)?cg(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var E=new Vo("action","action",null,s,u);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ea!==0){var P=g?fg(u,g):new FormData(u);Dc(a,{pending:!0,data:P,method:u.method,action:f},null,P)}}else typeof f=="function"&&(E.preventDefault(),P=g?fg(u,g):new FormData(u),Dc(a,{pending:!0,data:P,method:u.method,action:f},f,P))},currentTarget:u}]})}}for(var hf=0;hf<Yu.length;hf++){var df=Yu[hf],nS=df.toLowerCase(),iS=df[0].toUpperCase()+df.slice(1);ui(nS,"on"+iS)}ui(Vd,"onAnimationEnd"),ui(Xd,"onAnimationIteration"),ui(kd,"onAnimationStart"),ui("dblclick","onDoubleClick"),ui("focusin","onFocus"),ui("focusout","onBlur"),ui(S0,"onTransitionRun"),ui(x0,"onTransitionStart"),ui(y0,"onTransitionCancel"),ui(qd,"onTransitionEnd"),jt("onMouseEnter",["mouseout","mouseover"]),jt("onMouseLeave",["mouseout","mouseover"]),jt("onPointerEnter",["pointerout","pointerover"]),jt("onPointerLeave",["pointerout","pointerover"]),Nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ho));function hg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var E=s[g],P=E.instance,J=E.currentTarget;if(E=E.listener,P!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=J;try{f(u)}catch(ht){qo(ht)}u.currentTarget=null,f=P}else for(g=0;g<s.length;g++){if(E=s[g],P=E.instance,J=E.currentTarget,E=E.listener,P!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=J;try{f(u)}catch(ht){qo(ht)}u.currentTarget=null,f=P}}}}function he(t,n){var a=n[Ns];a===void 0&&(a=n[Ns]=new Set);var s=t+"__bubble";a.has(s)||(dg(n,t,2,!1),a.add(s))}function pf(t,n,a){var s=0;n&&(s|=4),dg(a,t,s,n)}var Ul="_reactListening"+Math.random().toString(36).slice(2);function mf(t){if(!t[Ul]){t[Ul]=!0,Dt.forEach(function(a){a!=="selectionchange"&&(aS.has(a)||pf(a,!1,t),pf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ul]||(n[Ul]=!0,pf("selectionchange",!1,n))}}function dg(t,n,a,s){switch(Vg(n)){case 2:var u=LS;break;case 8:u=NS;break;default:u=Df}a=u.bind(null,n,a,t),u=void 0,!Ou||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function gf(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var E=s.stateNode.containerInfo;if(E===u)break;if(g===4)for(g=s.return;g!==null;){var P=g.tag;if((P===3||P===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;E!==null;){if(g=k(E),g===null)return;if(P=g.tag,P===5||P===6||P===26||P===27){s=f=g;continue t}E=E.parentNode}}s=s.return}vd(function(){var J=f,ht=Lu(a),gt=[];t:{var tt=Wd.get(t);if(tt!==void 0){var rt=Vo,Ft=t;switch(t){case"keypress":if(Ho(a)===0)break t;case"keydown":case"keyup":rt=Qv;break;case"focusin":Ft="focus",rt=Iu;break;case"focusout":Ft="blur",rt=Iu;break;case"beforeblur":case"afterblur":rt=Iu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=Fv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=t0;break;case Vd:case Xd:case kd:rt=Vv;break;case qd:rt=n0;break;case"scroll":case"scrollend":rt=Bv;break;case"wheel":rt=a0;break;case"copy":case"cut":case"paste":rt=kv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=Ed;break;case"toggle":case"beforetoggle":rt=s0}var Kt=(n&4)!==0,ze=!Kt&&(t==="scroll"||t==="scrollend"),W=Kt?tt!==null?tt+"Capture":null:tt;Kt=[];for(var H=J,Q;H!==null;){var pt=H;if(Q=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||Q===null||W===null||(pt=Os(H,W),pt!=null&&Kt.push(po(H,pt,Q))),ze)break;H=H.return}0<Kt.length&&(tt=new rt(tt,Ft,null,a,ht),gt.push({event:tt,listeners:Kt}))}}if((n&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",rt=t==="mouseout"||t==="pointerout",tt&&a!==Uu&&(Ft=a.relatedTarget||a.fromElement)&&(k(Ft)||Ft[wi]))break t;if((rt||tt)&&(tt=ht.window===ht?ht:(tt=ht.ownerDocument)?tt.defaultView||tt.parentWindow:window,rt?(Ft=a.relatedTarget||a.toElement,rt=J,Ft=Ft?k(Ft):null,Ft!==null&&(ze=c(Ft),Kt=Ft.tag,Ft!==ze||Kt!==5&&Kt!==27&&Kt!==6)&&(Ft=null)):(rt=null,Ft=J),rt!==Ft)){if(Kt=yd,pt="onMouseLeave",W="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Kt=Ed,pt="onPointerLeave",W="onPointerEnter",H="pointer"),ze=rt==null?tt:at(rt),Q=Ft==null?tt:at(Ft),tt=new Kt(pt,H+"leave",rt,a,ht),tt.target=ze,tt.relatedTarget=Q,pt=null,k(ht)===J&&(Kt=new Kt(W,H+"enter",Ft,a,ht),Kt.target=Q,Kt.relatedTarget=ze,pt=Kt),ze=pt,rt&&Ft)e:{for(Kt=rS,W=rt,H=Ft,Q=0,pt=W;pt;pt=Kt(pt))Q++;pt=0;for(var Zt=H;Zt;Zt=Kt(Zt))pt++;for(;0<Q-pt;)W=Kt(W),Q--;for(;0<pt-Q;)H=Kt(H),pt--;for(;Q--;){if(W===H||H!==null&&W===H.alternate){Kt=W;break e}W=Kt(W),H=Kt(H)}Kt=null}else Kt=null;rt!==null&&pg(gt,tt,rt,Kt,!1),Ft!==null&&ze!==null&&pg(gt,ze,Ft,Kt,!0)}}t:{if(tt=J?at(J):window,rt=tt.nodeName&&tt.nodeName.toLowerCase(),rt==="select"||rt==="input"&&tt.type==="file")var Ee=Ud;else if(wd(tt))if(Ld)Ee=g0;else{Ee=p0;var Gt=d0}else rt=tt.nodeName,!rt||rt.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?J&&Du(J.elementType)&&(Ee=Ud):Ee=m0;if(Ee&&(Ee=Ee(t,J))){Dd(gt,Ee,a,ht);break t}Gt&&Gt(t,tt,J),t==="focusout"&&J&&tt.type==="number"&&J.memoizedProps.value!=null&&un(tt,"number",tt.value)}switch(Gt=J?at(J):window,t){case"focusin":(wd(Gt)||Gt.contentEditable==="true")&&(Cr=Gt,ku=J,Vs=null);break;case"focusout":Vs=ku=Cr=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,Hd(gt,a,ht);break;case"selectionchange":if(v0)break;case"keydown":case"keyup":Hd(gt,a,ht)}var re;if(Hu)t:{switch(t){case"compositionstart":var _e="onCompositionStart";break t;case"compositionend":_e="onCompositionEnd";break t;case"compositionupdate":_e="onCompositionUpdate";break t}_e=void 0}else Rr?Rd(t,a)&&(_e="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(Td&&a.locale!=="ko"&&(Rr||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Rr&&(re=Sd()):(oa=ht,zu="value"in oa?oa.value:oa.textContent,Rr=!0)),Gt=Ll(J,_e),0<Gt.length&&(_e=new Md(_e,t,null,a,ht),gt.push({event:_e,listeners:Gt}),re?_e.data=re:(re=Cd(a),re!==null&&(_e.data=re)))),(re=l0?u0(t,a):c0(t,a))&&(_e=Ll(J,"onBeforeInput"),0<_e.length&&(Gt=new Md("onBeforeInput","beforeinput",null,a,ht),gt.push({event:Gt,listeners:_e}),Gt.data=re)),eS(gt,t,J,a,ht)}hg(gt,n)})}function po(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ll(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Os(t,a),u!=null&&s.unshift(po(t,u,f)),u=Os(t,n),u!=null&&s.push(po(t,u,f))),t.tag===3)return s;t=t.return}return[]}function rS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function pg(t,n,a,s,u){for(var f=n._reactName,g=[];a!==null&&a!==s;){var E=a,P=E.alternate,J=E.stateNode;if(E=E.tag,P!==null&&P===s)break;E!==5&&E!==26&&E!==27||J===null||(P=J,u?(J=Os(a,f),J!=null&&g.unshift(po(a,J,P))):u||(J=Os(a,f),J!=null&&g.push(po(a,J,P)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var sS=/\r\n?/g,oS=/\u0000|\uFFFD/g;function mg(t){return(typeof t=="string"?t:""+t).replace(sS,`
`).replace(oS,"")}function gg(t,n){return n=mg(n),mg(t)===n}function Oe(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Tr(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Tr(t,""+s);break;case"className":Ie(t,"class",s);break;case"tabIndex":Ie(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ie(t,a,s);break;case"style":gd(t,s,f);break;case"data":if(n!=="object"){Ie(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Io(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Oe(t,n,"name",u.name,u,null),Oe(t,n,"formEncType",u.formEncType,u,null),Oe(t,n,"formMethod",u.formMethod,u,null),Oe(t,n,"formTarget",u.formTarget,u,null)):(Oe(t,n,"encType",u.encType,u,null),Oe(t,n,"method",u.method,u,null),Oe(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Io(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Ui);break;case"onScroll":s!=null&&he("scroll",t);break;case"onScrollEnd":s!=null&&he("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Io(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":he("beforetoggle",t),he("toggle",t),Ge(t,"popover",s);break;case"xlinkActuate":ie(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ie(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ie(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ie(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ie(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ie(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ie(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ie(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ie(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ge(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=zv.get(a)||a,Ge(t,a,s))}}function _f(t,n,a,s,u,f){switch(a){case"style":gd(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Tr(t,s):(typeof s=="number"||typeof s=="bigint")&&Tr(t,""+s);break;case"onScroll":s!=null&&he("scroll",t);break;case"onScrollEnd":s!=null&&he("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Ui);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ot.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[_n]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Ge(t,a,s)}}}function yn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",t),he("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(t,n,f,g,a,null)}}u&&Oe(t,n,"srcSet",a.srcSet,a,null),s&&Oe(t,n,"src",a.src,a,null);return;case"input":he("invalid",t);var E=f=g=u=null,P=null,J=null;for(s in a)if(a.hasOwnProperty(s)){var ht=a[s];if(ht!=null)switch(s){case"name":u=ht;break;case"type":g=ht;break;case"checked":P=ht;break;case"defaultChecked":J=ht;break;case"value":f=ht;break;case"defaultValue":E=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:Oe(t,n,s,ht,a,null)}}Cn(t,f,E,P,J,g,u,!1);return;case"select":he("invalid",t),s=g=f=null;for(u in a)if(a.hasOwnProperty(u)&&(E=a[u],E!=null))switch(u){case"value":f=E;break;case"defaultValue":g=E;break;case"multiple":s=E;default:Oe(t,n,u,E,a,null)}n=f,a=g,t.multiple=!!s,n!=null?Ke(t,!!s,n,!1):a!=null&&Ke(t,!!s,a,!0);return;case"textarea":he("invalid",t),f=u=s=null;for(g in a)if(a.hasOwnProperty(g)&&(E=a[g],E!=null))switch(g){case"value":s=E;break;case"defaultValue":u=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Oe(t,n,g,E,a,null)}xi(t,s,u,f);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(s=a[P],s!=null))switch(P){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Oe(t,n,P,s,a,null)}return;case"dialog":he("beforetoggle",t),he("toggle",t),he("cancel",t),he("close",t);break;case"iframe":case"object":he("load",t);break;case"video":case"audio":for(s=0;s<ho.length;s++)he(ho[s],t);break;case"image":he("error",t),he("load",t);break;case"details":he("toggle",t);break;case"embed":case"source":case"link":he("error",t),he("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(s=a[J],s!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(t,n,J,s,a,null)}return;default:if(Du(n)){for(ht in a)a.hasOwnProperty(ht)&&(s=a[ht],s!==void 0&&_f(t,n,ht,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&Oe(t,n,E,s,a,null))}function lS(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,g=null,E=null,P=null,J=null,ht=null;for(rt in a){var gt=a[rt];if(a.hasOwnProperty(rt)&&gt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":P=gt;default:s.hasOwnProperty(rt)||Oe(t,n,rt,null,s,gt)}}for(var tt in s){var rt=s[tt];if(gt=a[tt],s.hasOwnProperty(tt)&&(rt!=null||gt!=null))switch(tt){case"type":f=rt;break;case"name":u=rt;break;case"checked":J=rt;break;case"defaultChecked":ht=rt;break;case"value":g=rt;break;case"defaultValue":E=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:rt!==gt&&Oe(t,n,tt,rt,s,gt)}}En(t,g,E,P,J,ht,f,u);return;case"select":rt=g=E=tt=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":rt=P;default:s.hasOwnProperty(f)||Oe(t,n,f,null,s,P)}for(u in s)if(f=s[u],P=a[u],s.hasOwnProperty(u)&&(f!=null||P!=null))switch(u){case"value":tt=f;break;case"defaultValue":E=f;break;case"multiple":g=f;default:f!==P&&Oe(t,n,u,f,s,P)}n=E,a=g,s=rt,tt!=null?Ke(t,!!a,tt,!1):!!s!=!!a&&(n!=null?Ke(t,!!a,n,!0):Ke(t,!!a,a?[]:"",!1));return;case"textarea":rt=tt=null;for(E in a)if(u=a[E],a.hasOwnProperty(E)&&u!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Oe(t,n,E,null,s,u)}for(g in s)if(u=s[g],f=a[g],s.hasOwnProperty(g)&&(u!=null||f!=null))switch(g){case"value":tt=u;break;case"defaultValue":rt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Oe(t,n,g,u,s,f)}Er(t,tt,rt);return;case"option":for(var Ft in a)if(tt=a[Ft],a.hasOwnProperty(Ft)&&tt!=null&&!s.hasOwnProperty(Ft))switch(Ft){case"selected":t.selected=!1;break;default:Oe(t,n,Ft,null,s,tt)}for(P in s)if(tt=s[P],rt=a[P],s.hasOwnProperty(P)&&tt!==rt&&(tt!=null||rt!=null))switch(P){case"selected":t.selected=tt&&typeof tt!="function"&&typeof tt!="symbol";break;default:Oe(t,n,P,tt,s,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Kt in a)tt=a[Kt],a.hasOwnProperty(Kt)&&tt!=null&&!s.hasOwnProperty(Kt)&&Oe(t,n,Kt,null,s,tt);for(J in s)if(tt=s[J],rt=a[J],s.hasOwnProperty(J)&&tt!==rt&&(tt!=null||rt!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(r(137,n));break;default:Oe(t,n,J,tt,s,rt)}return;default:if(Du(n)){for(var ze in a)tt=a[ze],a.hasOwnProperty(ze)&&tt!==void 0&&!s.hasOwnProperty(ze)&&_f(t,n,ze,void 0,s,tt);for(ht in s)tt=s[ht],rt=a[ht],!s.hasOwnProperty(ht)||tt===rt||tt===void 0&&rt===void 0||_f(t,n,ht,tt,s,rt);return}}for(var W in a)tt=a[W],a.hasOwnProperty(W)&&tt!=null&&!s.hasOwnProperty(W)&&Oe(t,n,W,null,s,tt);for(gt in s)tt=s[gt],rt=a[gt],!s.hasOwnProperty(gt)||tt===rt||tt==null&&rt==null||Oe(t,n,gt,tt,s,rt)}function _g(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function uS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,g=u.initiatorType,E=u.duration;if(f&&E&&_g(g)){for(g=0,E=u.responseEnd,s+=1;s<a.length;s++){var P=a[s],J=P.startTime;if(J>E)break;var ht=P.transferSize,gt=P.initiatorType;ht&&_g(gt)&&(P=P.responseEnd,g+=ht*(P<E?1:(E-J)/(P-J)))}if(--s,n+=8*(f+g)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var vf=null,Sf=null;function Nl(t){return t.nodeType===9?t:t.ownerDocument}function vg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function xf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var yf=null;function cS(){var t=window.event;return t&&t.type==="popstate"?t===yf?!1:(yf=t,!0):(yf=null,!1)}var xg=typeof setTimeout=="function"?setTimeout:void 0,fS=typeof clearTimeout=="function"?clearTimeout:void 0,yg=typeof Promise=="function"?Promise:void 0,hS=typeof queueMicrotask=="function"?queueMicrotask:typeof yg<"u"?function(t){return yg.resolve(null).then(t).catch(dS)}:xg;function dS(t){setTimeout(function(){throw t})}function Ta(t){return t==="head"}function Mg(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),es(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")mo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,mo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,E=f.nodeName;f[Va]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&mo(t.ownerDocument.body);a=u}while(a);es(n)}function Eg(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Mf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Mf(a),b(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function pS(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Va])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ai(t.nextSibling),t===null)break}return null}function mS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ai(t.nextSibling),t===null))return null;return t}function Tg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ai(t.nextSibling),t===null))return null;return t}function Ef(t){return t.data==="$?"||t.data==="$~"}function Tf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function gS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ai(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var bf=null;function bg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ai(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Ag(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Rg(t,n,a){switch(n=Nl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function mo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);b(t)}var ri=new Map,Cg=new Set;function Ol(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Yi=V.d;V.d={f:_S,r:vS,D:SS,C:xS,L:yS,m:MS,X:TS,S:ES,M:bS};function _S(){var t=Yi.f(),n=bl();return t||n}function vS(t){var n=nt(t);n!==null&&n.tag===5&&n.type==="form"?qp(n):Yi.r(t)}var Jr=typeof document>"u"?null:document;function wg(t,n,a){var s=Jr;if(s&&typeof n=="string"&&n){var u=ce(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Cg.has(u)||(Cg.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),yn(n,"link",t),vt(n),s.head.appendChild(n)))}}function SS(t){Yi.D(t),wg("dns-prefetch",t,null)}function xS(t,n){Yi.C(t,n),wg("preconnect",t,n)}function yS(t,n,a){Yi.L(t,n,a);var s=Jr;if(s&&t&&n){var u='link[rel="preload"][as="'+ce(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ce(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ce(a.imageSizes)+'"]')):u+='[href="'+ce(t)+'"]';var f=u;switch(n){case"style":f=$r(t);break;case"script":f=ts(t)}ri.has(f)||(t=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ri.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(go(f))||n==="script"&&s.querySelector(_o(f))||(n=s.createElement("link"),yn(n,"link",t),vt(n),s.head.appendChild(n)))}}function MS(t,n){Yi.m(t,n);var a=Jr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ce(s)+'"][href="'+ce(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ts(t)}if(!ri.has(f)&&(t=S({rel:"modulepreload",href:t},n),ri.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_o(f)))return}s=a.createElement("link"),yn(s,"link",t),vt(s),a.head.appendChild(s)}}}function ES(t,n,a){Yi.S(t,n,a);var s=Jr;if(s&&t){var u=q(s).hoistableStyles,f=$r(t);n=n||"default";var g=u.get(f);if(!g){var E={loading:0,preload:null};if(g=s.querySelector(go(f)))E.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ri.get(f))&&Af(t,a);var P=g=s.createElement("link");vt(P),yn(P,"link",t),P._p=new Promise(function(J,ht){P.onload=J,P.onerror=ht}),P.addEventListener("load",function(){E.loading|=1}),P.addEventListener("error",function(){E.loading|=2}),E.loading|=4,zl(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:E},u.set(f,g)}}}function TS(t,n){Yi.X(t,n);var a=Jr;if(a&&t){var s=q(a).hoistableScripts,u=ts(t),f=s.get(u);f||(f=a.querySelector(_o(u)),f||(t=S({src:t,async:!0},n),(n=ri.get(u))&&Rf(t,n),f=a.createElement("script"),vt(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function bS(t,n){Yi.M(t,n);var a=Jr;if(a&&t){var s=q(a).hoistableScripts,u=ts(t),f=s.get(u);f||(f=a.querySelector(_o(u)),f||(t=S({src:t,async:!0,type:"module"},n),(n=ri.get(u))&&Rf(t,n),f=a.createElement("script"),vt(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Dg(t,n,a,s){var u=(u=Et.current)?Ol(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=$r(a.href),a=q(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=$r(a.href);var f=q(u).hoistableStyles,g=f.get(t);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=u.querySelector(go(t)))&&!f._p&&(g.instance=f,g.state.loading=5),ri.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ri.set(t,a),f||AS(u,t,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ts(a),a=q(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function $r(t){return'href="'+ce(t)+'"'}function go(t){return'link[rel="stylesheet"]['+t+"]"}function Ug(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function AS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),yn(n,"link",a),vt(n),t.head.appendChild(n))}function ts(t){return'[src="'+ce(t)+'"]'}function _o(t){return"script[async]"+t}function Lg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+ce(a.href)+'"]');if(s)return n.instance=s,vt(s),s;var u=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),vt(s),yn(s,"style",u),zl(s,a.precedence,t),n.instance=s;case"stylesheet":u=$r(a.href);var f=t.querySelector(go(u));if(f)return n.state.loading|=4,n.instance=f,vt(f),f;s=Ug(a),(u=ri.get(u))&&Af(s,u),f=(t.ownerDocument||t).createElement("link"),vt(f);var g=f;return g._p=new Promise(function(E,P){g.onload=E,g.onerror=P}),yn(f,"link",s),n.state.loading|=4,zl(f,a.precedence,t),n.instance=f;case"script":return f=ts(a.src),(u=t.querySelector(_o(f)))?(n.instance=u,vt(u),u):(s=a,(u=ri.get(f))&&(s=S({},a),Rf(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),vt(u),yn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,zl(s,a.precedence,t));return n.instance}function zl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,g=0;g<s.length;g++){var E=s[g];if(E.dataset.precedence===n)f=E;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Af(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Rf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Pl=null;function Ng(t,n,a){if(Pl===null){var s=new Map,u=Pl=new Map;u.set(a,s)}else u=Pl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Va]||f[Ye]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var E=s.get(g);E?E.push(f):s.set(g,[f])}}return s}function Og(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function RS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function zg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function CS(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=$r(s.href),f=n.querySelector(go(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Bl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,vt(f);return}f=n.ownerDocument||n,s=Ug(s),(u=ri.get(u))&&Af(s,u),f=f.createElement("link"),vt(f);var g=f;g._p=new Promise(function(E,P){g.onload=E,g.onerror=P}),yn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Bl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Cf=0;function wS(t,n){return t.stylesheets&&t.count===0&&Fl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Fl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Cf===0&&(Cf=62500*uS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Fl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Cf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Bl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Fl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Il=null;function Fl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Il=new Map,n.forEach(DS,t),Il=null,Bl.call(t))}function DS(t,n){if(!(n.state.loading&4)){var a=Il.get(t);if(a)var s=a.get(null);else{a=new Map,Il.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var g=u[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}u=n.instance,g=u.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,u),a.set(g,u),this.count++,s=Bl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var vo={$$typeof:O,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function US(t,n,a,s,u,f,g,E,P){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xe(0),this.hiddenUpdates=xe(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.incompleteTransitions=new Map}function Pg(t,n,a,s,u,f,g,E,P,J,ht,gt){return t=new US(t,n,a,g,P,J,ht,gt,E),n=1,f===!0&&(n|=24),f=Vn(3,null,null,n),t.current=f,f.stateNode=t,n=sc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},cc(f),t}function Bg(t){return t?(t=Ur,t):Ur}function Ig(t,n,a,s,u,f){u=Bg(u),s.context===null?s.context=u:s.pendingContext=u,s=da(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=pa(t,s,n),a!==null&&(Bn(a,t,n),js(a,t,n))}function Fg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function wf(t,n){Fg(t,n),(t=t.alternate)&&Fg(t,n)}function Hg(t){if(t.tag===13||t.tag===31){var n=Ya(t,67108864);n!==null&&Bn(n,t,67108864),wf(t,67108864)}}function Gg(t){if(t.tag===13||t.tag===31){var n=Yn();n=Ha(n);var a=Ya(t,n);a!==null&&Bn(a,t,n),wf(t,n)}}var Hl=!0;function LS(t,n,a,s){var u=N.T;N.T=null;var f=V.p;try{V.p=2,Df(t,n,a,s)}finally{V.p=f,N.T=u}}function NS(t,n,a,s){var u=N.T;N.T=null;var f=V.p;try{V.p=8,Df(t,n,a,s)}finally{V.p=f,N.T=u}}function Df(t,n,a,s){if(Hl){var u=Uf(s);if(u===null)gf(t,n,s,Gl,a),Xg(t,s);else if(zS(u,t,n,a,s))s.stopPropagation();else if(Xg(t,s),n&4&&-1<OS.indexOf(t)){for(;u!==null;){var f=nt(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Rt(f.pendingLanes);if(g!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;g;){var P=1<<31-Qt(g);E.entanglements[1]|=P,g&=~P}Ti(f),(Re&6)===0&&(El=dt()+500,fo(0))}}break;case 31:case 13:E=Ya(f,2),E!==null&&Bn(E,f,2),bl(),wf(f,2)}if(f=Uf(s),f===null&&gf(t,n,s,Gl,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else gf(t,n,s,null,a)}}function Uf(t){return t=Lu(t),Lf(t)}var Gl=null;function Lf(t){if(Gl=null,t=k(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Gl=t,null}function Vg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mt()){case mt:return 2;case Vt:return 8;case Ct:case Pt:return 32;case pe:return 268435456;default:return 32}default:return 32}}var Nf=!1,ba=null,Aa=null,Ra=null,So=new Map,xo=new Map,Ca=[],OS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Xg(t,n){switch(t){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":So.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(n.pointerId)}}function yo(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=nt(n),n!==null&&Hg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function zS(t,n,a,s,u){switch(n){case"focusin":return ba=yo(ba,t,n,a,s,u),!0;case"dragenter":return Aa=yo(Aa,t,n,a,s,u),!0;case"mouseover":return Ra=yo(Ra,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return So.set(f,yo(So.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,xo.set(f,yo(xo.get(f)||null,t,n,a,s,u)),!0}return!1}function kg(t){var n=k(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Ga(t.priority,function(){Gg(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Ga(t.priority,function(){Gg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Uf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Uu=s,a.target.dispatchEvent(s),Uu=null}else return n=nt(a),n!==null&&Hg(n),t.blockedOn=a,!1;n.shift()}return!0}function qg(t,n,a){Vl(t)&&a.delete(n)}function PS(){Nf=!1,ba!==null&&Vl(ba)&&(ba=null),Aa!==null&&Vl(Aa)&&(Aa=null),Ra!==null&&Vl(Ra)&&(Ra=null),So.forEach(qg),xo.forEach(qg)}function Xl(t,n){t.blockedOn===n&&(t.blockedOn=null,Nf||(Nf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,PS)))}var kl=null;function Wg(t){kl!==t&&(kl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){kl===t&&(kl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(Lf(s||a)===null)continue;break}var f=nt(a);f!==null&&(t.splice(n,3),n-=3,Dc(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function es(t){function n(P){return Xl(P,t)}ba!==null&&Xl(ba,t),Aa!==null&&Xl(Aa,t),Ra!==null&&Xl(Ra,t),So.forEach(n),xo.forEach(n);for(var a=0;a<Ca.length;a++){var s=Ca[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ca.length&&(a=Ca[0],a.blockedOn===null);)kg(a),a.blockedOn===null&&Ca.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],g=u[_n]||null;if(typeof f=="function")g||Wg(a);else if(g){var E=null;if(f&&f.hasAttribute("formAction")){if(u=f,g=f[_n]||null)E=g.formAction;else if(Lf(u)!==null)continue}else E=g.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),Wg(a)}}}function Yg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Of(t){this._internalRoot=t}ql.prototype.render=Of.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Yn();Ig(a,s,t,n,null,null)},ql.prototype.unmount=Of.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Ig(t.current,2,null,t,null,null),bl(),n[wi]=null}};function ql(t){this._internalRoot=t}ql.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ls();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ca.length&&n!==0&&n<Ca[a].priority;a++);Ca.splice(a,0,t),a===0&&kg(t)}};var Zg=e.version;if(Zg!=="19.2.7")throw Error(r(527,Zg,"19.2.7"));V.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var BS={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{Wt=Wl.inject(BS),Xt=Wl}catch{}}return Eo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=em,f=nm,g=im;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=Pg(t,1,!1,null,null,a,s,null,u,f,g,Yg),t[wi]=n.current,mf(t),new Of(n)},Eo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=em,g=nm,E=im,P=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(P=a.formState)),n=Pg(t,1,!0,n,a??null,s,u,P,f,g,E,Yg),n.context=Bg(null),a=n.current,s=Yn(),s=Ha(s),u=da(s),u.callback=null,pa(a,u,s),a=s,n.current.lanes=a,gn(n,a),Ti(n),t[wi]=n.current,mf(t),new ql(n)},Eo.version="19.2.7",Eo}var a_;function YS(){if(a_)return Bf.exports;a_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Bf.exports=WS(),Bf.exports}var ZS=YS();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sd="171",jS=0,r_=1,KS=2,ev=1,QS=2,$i=3,Fa=0,Fn=1,ta=2,Ba=0,vs=1,s_=2,o_=3,l_=4,JS=5,pr=100,$S=101,tx=102,ex=103,nx=104,ix=200,ax=201,rx=202,sx=203,vh=204,Sh=205,ox=206,lx=207,ux=208,cx=209,fx=210,hx=211,dx=212,px=213,mx=214,xh=0,yh=1,Mh=2,ys=3,Eh=4,Th=5,bh=6,Ah=7,nv=0,gx=1,_x=2,Ia=0,vx=1,Sx=2,xx=3,yx=4,Mx=5,Ex=6,Tx=7,iv=300,Ms=301,Es=302,Rh=303,Ch=304,bu=306,wh=1e3,gr=1001,Dh=1002,vi=1003,bx=1004,Yl=1005,Ai=1006,Gf=1007,_r=1008,aa=1009,av=1010,rv=1011,Do=1012,od=1013,Sr=1014,ea=1015,Uo=1016,ld=1017,ud=1018,Ts=1020,sv=35902,ov=1021,lv=1022,_i=1023,uv=1024,cv=1025,Ss=1026,bs=1027,fv=1028,cd=1029,hv=1030,fd=1031,hd=1033,mu=33776,gu=33777,_u=33778,vu=33779,Uh=35840,Lh=35841,Nh=35842,Oh=35843,zh=36196,Ph=37492,Bh=37496,Ih=37808,Fh=37809,Hh=37810,Gh=37811,Vh=37812,Xh=37813,kh=37814,qh=37815,Wh=37816,Yh=37817,Zh=37818,jh=37819,Kh=37820,Qh=37821,Su=36492,Jh=36494,$h=36495,dv=36283,td=36284,ed=36285,nd=36286,Ax=3200,Rx=3201,Cx=0,wx=1,Pa="",Kn="srgb",As="srgb-linear",Mu="linear",Pe="srgb",ns=7680,u_=519,Dx=512,Ux=513,Lx=514,pv=515,Nx=516,Ox=517,zx=518,Px=519,c_=35044,f_="300 es",na=2e3,Eu=2001;class Cs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vf=Math.PI/180,id=180/Math.PI;function Lo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bn[o&255]+bn[o>>8&255]+bn[o>>16&255]+bn[o>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[i&63|128]+bn[i>>8&255]+"-"+bn[i>>16&255]+bn[i>>24&255]+bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]).toLowerCase()}function Se(o,e,i){return Math.max(e,Math.min(i,o))}function Bx(o,e){return(o%e+e)%e}function Xf(o,e,i){return(1-i)*o+i*e}function To(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function In(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ae{constructor(e=0,i=0){Ae.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Se(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class se{constructor(e,i,r,l,c,h,d,m,p){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p)}set(e,i,r,l,c,h,d,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=m,v[6]=r,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],v=r[4],S=r[7],x=r[2],M=r[5],R=r[8],C=l[0],y=l[3],_=l[6],B=l[1],O=l[4],U=l[7],K=l[2],G=l[5],z=l[8];return c[0]=h*C+d*B+m*K,c[3]=h*y+d*O+m*G,c[6]=h*_+d*U+m*z,c[1]=p*C+v*B+S*K,c[4]=p*y+v*O+S*G,c[7]=p*_+v*U+S*z,c[2]=x*C+M*B+R*K,c[5]=x*y+M*O+R*G,c[8]=x*_+M*U+R*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8];return i*h*v-i*d*p-r*c*v+r*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],S=v*h-d*p,x=d*m-v*c,M=p*c-h*m,R=i*S+r*x+l*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=S*C,e[1]=(l*p-v*r)*C,e[2]=(d*r-l*h)*C,e[3]=x*C,e[4]=(v*i-l*m)*C,e[5]=(l*c-d*i)*C,e[6]=M*C,e[7]=(r*m-p*i)*C,e[8]=(h*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(kf.makeScale(e,i)),this}rotate(e){return this.premultiply(kf.makeRotation(-e)),this}translate(e,i){return this.premultiply(kf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kf=new se;function mv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Tu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Ix(){const o=Tu("canvas");return o.style.display="block",o}const h_={};function gs(o){o in h_||(h_[o]=!0,console.warn(o))}function Fx(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function Hx(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Gx(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const d_=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),p_=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vx(){const o={enabled:!0,workingColorSpace:As,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Pe&&(l.r=ia(l.r),l.g=ia(l.g),l.b=ia(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Pe&&(l.r=xs(l.r),l.g=xs(l.g),l.b=xs(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Pa?Mu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[As]:{primaries:e,whitePoint:r,transfer:Mu,toXYZ:d_,fromXYZ:p_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:e,whitePoint:r,transfer:Pe,toXYZ:d_,fromXYZ:p_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),o}const be=Vx();function ia(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function xs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let is;class Xx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{is===void 0&&(is=Tu("canvas")),is.width=e.width,is.height=e.height;const r=is.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=is}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Tu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ia(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ia(i[r]/255)*255):i[r]=ia(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kx=0;class gv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=Lo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(qf(l[h].image)):c.push(qf(l[h]))}else c=qf(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function qf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Xx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qx=0;class Hn extends Cs{constructor(e=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,r=gr,l=gr,c=Ai,h=_r,d=_i,m=aa,p=Hn.DEFAULT_ANISOTROPY,v=Pa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=Lo(),this.name="",this.source=new gv(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==iv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wh:e.x=e.x-Math.floor(e.x);break;case gr:e.x=e.x<0?0:1;break;case Dh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wh:e.y=e.y-Math.floor(e.y);break;case gr:e.y=e.y<0?0:1;break;case Dh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=iv;Hn.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,i=0,r=0,l=1){$e.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],v=m[4],S=m[8],x=m[1],M=m[5],R=m[9],C=m[2],y=m[6],_=m[10];if(Math.abs(v-x)<.01&&Math.abs(S-C)<.01&&Math.abs(R-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(S+C)<.1&&Math.abs(R+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,U=(M+1)/2,K=(_+1)/2,G=(v+x)/4,z=(S+C)/4,j=(R+y)/4;return O>U&&O>K?O<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(O),l=G/r,c=z/r):U>K?U<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),r=G/l,c=j/l):K<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(K),r=z/c,l=j/c),this.set(r,l,c,i),this}let B=Math.sqrt((y-R)*(y-R)+(S-C)*(S-C)+(x-v)*(x-v));return Math.abs(B)<.001&&(B=1),this.x=(y-R)/B,this.y=(S-C)/B,this.z=(x-v)/B,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this.w=Se(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this.w=Se(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wx extends Cs{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new $e(0,0,e,i),this.scissorTest=!1,this.viewport=new $e(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Hn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,l=e.textures.length;r<l;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new gv(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends Wx{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class _v extends Hn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yx extends Hn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class No{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],v=r[l+2],S=r[l+3];const x=c[h+0],M=c[h+1],R=c[h+2],C=c[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=S;return}if(d===1){e[i+0]=x,e[i+1]=M,e[i+2]=R,e[i+3]=C;return}if(S!==C||m!==x||p!==M||v!==R){let y=1-d;const _=m*x+p*M+v*R+S*C,B=_>=0?1:-1,O=1-_*_;if(O>Number.EPSILON){const K=Math.sqrt(O),G=Math.atan2(K,_*B);y=Math.sin(y*G)/K,d=Math.sin(d*G)/K}const U=d*B;if(m=m*y+x*U,p=p*y+M*U,v=v*y+R*U,S=S*y+C*U,y===1-d){const K=1/Math.sqrt(m*m+p*p+v*v+S*S);m*=K,p*=K,v*=K,S*=K}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=S}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],v=r[l+3],S=c[h],x=c[h+1],M=c[h+2],R=c[h+3];return e[i]=d*R+v*S+m*M-p*x,e[i+1]=m*R+v*x+p*S-d*M,e[i+2]=p*R+v*M+d*x-m*S,e[i+3]=v*R-d*S-m*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),v=d(l/2),S=d(c/2),x=m(r/2),M=m(l/2),R=m(c/2);switch(h){case"XYZ":this._x=x*v*S+p*M*R,this._y=p*M*S-x*v*R,this._z=p*v*R+x*M*S,this._w=p*v*S-x*M*R;break;case"YXZ":this._x=x*v*S+p*M*R,this._y=p*M*S-x*v*R,this._z=p*v*R-x*M*S,this._w=p*v*S+x*M*R;break;case"ZXY":this._x=x*v*S-p*M*R,this._y=p*M*S+x*v*R,this._z=p*v*R+x*M*S,this._w=p*v*S-x*M*R;break;case"ZYX":this._x=x*v*S-p*M*R,this._y=p*M*S+x*v*R,this._z=p*v*R-x*M*S,this._w=p*v*S+x*M*R;break;case"YZX":this._x=x*v*S+p*M*R,this._y=p*M*S+x*v*R,this._z=p*v*R-x*M*S,this._w=p*v*S-x*M*R;break;case"XZY":this._x=x*v*S-p*M*R,this._y=p*M*S-x*v*R,this._z=p*v*R+x*M*S,this._w=p*v*S+x*M*R;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],S=i[10],x=r+d+S;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(r>d&&r>S){const M=2*Math.sqrt(1+r-d-S);this._w=(v-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>S){const M=2*Math.sqrt(1+d-r-S);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+S-r-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Se(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+h*d+l*p-c*m,this._y=l*v+h*m+c*d-r*p,this._z=c*v+h*p+r*m-l*d,this._w=h*v-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,d),S=Math.sin((1-i)*v)/p,x=Math.sin(i*v)/p;return this._w=h*S+this._w*x,this._x=r*S+this._x*x,this._y=l*S+this._y*x,this._z=c*S+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class st{constructor(e=0,i=0,r=0){st.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(m_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(m_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),v=2*(d*i-c*l),S=2*(c*r-h*i);return this.x=i+m*p+h*S-d*v,this.y=r+m*v+d*p-c*S,this.z=l+m*S+c*v-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Wf.copy(this).projectOnVector(e),this.sub(Wf)}reflect(e){return this.sub(Wf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Se(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wf=new st,m_=new No;class Oo{constructor(e=new st(1/0,1/0,1/0),i=new st(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(hi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(hi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=hi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,hi):hi.fromBufferAttribute(c,h),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Zl.copy(r.boundingBox)),Zl.applyMatrix4(e.matrixWorld),this.union(Zl)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bo),jl.subVectors(this.max,bo),as.subVectors(e.a,bo),rs.subVectors(e.b,bo),ss.subVectors(e.c,bo),Da.subVectors(rs,as),Ua.subVectors(ss,rs),sr.subVectors(as,ss);let i=[0,-Da.z,Da.y,0,-Ua.z,Ua.y,0,-sr.z,sr.y,Da.z,0,-Da.x,Ua.z,0,-Ua.x,sr.z,0,-sr.x,-Da.y,Da.x,0,-Ua.y,Ua.x,0,-sr.y,sr.x,0];return!Yf(i,as,rs,ss,jl)||(i=[1,0,0,0,1,0,0,0,1],!Yf(i,as,rs,ss,jl))?!1:(Kl.crossVectors(Da,Ua),i=[Kl.x,Kl.y,Kl.z],Yf(i,as,rs,ss,jl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zi=[new st,new st,new st,new st,new st,new st,new st,new st],hi=new st,Zl=new Oo,as=new st,rs=new st,ss=new st,Da=new st,Ua=new st,sr=new st,bo=new st,jl=new st,Kl=new st,or=new st;function Yf(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){or.fromArray(o,c);const d=l.x*Math.abs(or.x)+l.y*Math.abs(or.y)+l.z*Math.abs(or.z),m=e.dot(or),p=i.dot(or),v=r.dot(or);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const Zx=new Oo,Ao=new st,Zf=new st;class dd{constructor(e=new st,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):Zx.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ao.subVectors(e,this.center);const i=Ao.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ao,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ao.copy(e.center).add(Zf)),this.expandByPoint(Ao.copy(e.center).sub(Zf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ji=new st,jf=new st,Ql=new st,La=new st,Kf=new st,Jl=new st,Qf=new st;class jx{constructor(e=new st,i=new st(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ji.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,i),ji.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){jf.copy(e).add(i).multiplyScalar(.5),Ql.copy(i).sub(e).normalize(),La.copy(this.origin).sub(jf);const c=e.distanceTo(i)*.5,h=-this.direction.dot(Ql),d=La.dot(this.direction),m=-La.dot(Ql),p=La.lengthSq(),v=Math.abs(1-h*h);let S,x,M,R;if(v>0)if(S=h*m-d,x=h*d-m,R=c*v,S>=0)if(x>=-R)if(x<=R){const C=1/v;S*=C,x*=C,M=S*(S+h*x+2*d)+x*(h*S+x+2*m)+p}else x=c,S=Math.max(0,-(h*x+d)),M=-S*S+x*(x+2*m)+p;else x=-c,S=Math.max(0,-(h*x+d)),M=-S*S+x*(x+2*m)+p;else x<=-R?(S=Math.max(0,-(-h*c+d)),x=S>0?-c:Math.min(Math.max(-c,-m),c),M=-S*S+x*(x+2*m)+p):x<=R?(S=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(S=Math.max(0,-(h*c+d)),x=S>0?c:Math.min(Math.max(-c,-m),c),M=-S*S+x*(x+2*m)+p);else x=h>0?-c:c,S=Math.max(0,-(h*x+d)),M=-S*S+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(jf).addScaledVector(Ql,x),M}intersectSphere(e,i){ji.subVectors(e.center,this.origin);const r=ji.dot(this.direction),l=ji.dot(ji)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),v>=0?(c=(e.min.y-x.y)*v,h=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,h=(e.min.y-x.y)*v),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),S>=0?(d=(e.min.z-x.z)*S,m=(e.max.z-x.z)*S):(d=(e.max.z-x.z)*S,m=(e.min.z-x.z)*S),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,i,r,l,c){Kf.subVectors(i,e),Jl.subVectors(r,e),Qf.crossVectors(Kf,Jl);let h=this.direction.dot(Qf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;La.subVectors(this.origin,e);const m=d*this.direction.dot(Jl.crossVectors(La,Jl));if(m<0)return null;const p=d*this.direction.dot(Kf.cross(La));if(p<0||m+p>h)return null;const v=-d*La.dot(Qf);return v<0?null:this.at(v/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on{constructor(e,i,r,l,c,h,d,m,p,v,S,x,M,R,C,y){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p,v,S,x,M,R,C,y)}set(e,i,r,l,c,h,d,m,p,v,S,x,M,R,C,y){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=v,_[10]=S,_[14]=x,_[3]=M,_[7]=R,_[11]=C,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/os.setFromMatrixColumn(e,0).length(),c=1/os.setFromMatrixColumn(e,1).length(),h=1/os.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const x=h*v,M=h*S,R=d*v,C=d*S;i[0]=m*v,i[4]=-m*S,i[8]=p,i[1]=M+R*p,i[5]=x-C*p,i[9]=-d*m,i[2]=C-x*p,i[6]=R+M*p,i[10]=h*m}else if(e.order==="YXZ"){const x=m*v,M=m*S,R=p*v,C=p*S;i[0]=x+C*d,i[4]=R*d-M,i[8]=h*p,i[1]=h*S,i[5]=h*v,i[9]=-d,i[2]=M*d-R,i[6]=C+x*d,i[10]=h*m}else if(e.order==="ZXY"){const x=m*v,M=m*S,R=p*v,C=p*S;i[0]=x-C*d,i[4]=-h*S,i[8]=R+M*d,i[1]=M+R*d,i[5]=h*v,i[9]=C-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const x=h*v,M=h*S,R=d*v,C=d*S;i[0]=m*v,i[4]=R*p-M,i[8]=x*p+C,i[1]=m*S,i[5]=C*p+x,i[9]=M*p-R,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const x=h*m,M=h*p,R=d*m,C=d*p;i[0]=m*v,i[4]=C-x*S,i[8]=R*S+M,i[1]=S,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=M*S+R,i[10]=x-C*S}else if(e.order==="XZY"){const x=h*m,M=h*p,R=d*m,C=d*p;i[0]=m*v,i[4]=-S,i[8]=p*v,i[1]=x*S+C,i[5]=h*v,i[9]=M*S-R,i[2]=R*S-M,i[6]=d*v,i[10]=C*S+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kx,e,Qx)}lookAt(e,i,r){const l=this.elements;return Zn.subVectors(e,i),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Na.crossVectors(r,Zn),Na.lengthSq()===0&&(Math.abs(r.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Na.crossVectors(r,Zn)),Na.normalize(),$l.crossVectors(Zn,Na),l[0]=Na.x,l[4]=$l.x,l[8]=Zn.x,l[1]=Na.y,l[5]=$l.y,l[9]=Zn.y,l[2]=Na.z,l[6]=$l.z,l[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],v=r[1],S=r[5],x=r[9],M=r[13],R=r[2],C=r[6],y=r[10],_=r[14],B=r[3],O=r[7],U=r[11],K=r[15],G=l[0],z=l[4],j=l[8],w=l[12],A=l[1],I=l[5],lt=l[9],it=l[13],ft=l[2],ot=l[6],N=l[10],V=l[14],Z=l[3],St=l[7],Tt=l[11],L=l[15];return c[0]=h*G+d*A+m*ft+p*Z,c[4]=h*z+d*I+m*ot+p*St,c[8]=h*j+d*lt+m*N+p*Tt,c[12]=h*w+d*it+m*V+p*L,c[1]=v*G+S*A+x*ft+M*Z,c[5]=v*z+S*I+x*ot+M*St,c[9]=v*j+S*lt+x*N+M*Tt,c[13]=v*w+S*it+x*V+M*L,c[2]=R*G+C*A+y*ft+_*Z,c[6]=R*z+C*I+y*ot+_*St,c[10]=R*j+C*lt+y*N+_*Tt,c[14]=R*w+C*it+y*V+_*L,c[3]=B*G+O*A+U*ft+K*Z,c[7]=B*z+O*I+U*ot+K*St,c[11]=B*j+O*lt+U*N+K*Tt,c[15]=B*w+O*it+U*V+K*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],v=e[2],S=e[6],x=e[10],M=e[14],R=e[3],C=e[7],y=e[11],_=e[15];return R*(+c*m*S-l*p*S-c*d*x+r*p*x+l*d*M-r*m*M)+C*(+i*m*M-i*p*x+c*h*x-l*h*M+l*p*v-c*m*v)+y*(+i*p*S-i*d*M-c*h*S+r*h*M+c*d*v-r*p*v)+_*(-l*d*v-i*m*S+i*d*x+l*h*S-r*h*x+r*m*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],S=e[9],x=e[10],M=e[11],R=e[12],C=e[13],y=e[14],_=e[15],B=S*y*p-C*x*p+C*m*M-d*y*M-S*m*_+d*x*_,O=R*x*p-v*y*p-R*m*M+h*y*M+v*m*_-h*x*_,U=v*C*p-R*S*p+R*d*M-h*C*M-v*d*_+h*S*_,K=R*S*m-v*C*m-R*d*x+h*C*x+v*d*y-h*S*y,G=i*B+r*O+l*U+c*K;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/G;return e[0]=B*z,e[1]=(C*x*c-S*y*c-C*l*M+r*y*M+S*l*_-r*x*_)*z,e[2]=(d*y*c-C*m*c+C*l*p-r*y*p-d*l*_+r*m*_)*z,e[3]=(S*m*c-d*x*c-S*l*p+r*x*p+d*l*M-r*m*M)*z,e[4]=O*z,e[5]=(v*y*c-R*x*c+R*l*M-i*y*M-v*l*_+i*x*_)*z,e[6]=(R*m*c-h*y*c-R*l*p+i*y*p+h*l*_-i*m*_)*z,e[7]=(h*x*c-v*m*c+v*l*p-i*x*p-h*l*M+i*m*M)*z,e[8]=U*z,e[9]=(R*S*c-v*C*c-R*r*M+i*C*M+v*r*_-i*S*_)*z,e[10]=(h*C*c-R*d*c+R*r*p-i*C*p-h*r*_+i*d*_)*z,e[11]=(v*d*c-h*S*c-v*r*p+i*S*p+h*r*M-i*d*M)*z,e[12]=K*z,e[13]=(v*C*l-R*S*l+R*r*x-i*C*x-v*r*y+i*S*y)*z,e[14]=(R*d*l-h*C*l-R*r*m+i*C*m+h*r*y-i*d*y)*z,e[15]=(h*S*l-v*d*l+v*r*m-i*S*m-h*r*x+i*d*x)*z,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,m=e.z,p=c*h,v=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+r,v*m-l*h,0,p*m-l*d,v*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,v=h+h,S=d+d,x=c*p,M=c*v,R=c*S,C=h*v,y=h*S,_=d*S,B=m*p,O=m*v,U=m*S,K=r.x,G=r.y,z=r.z;return l[0]=(1-(C+_))*K,l[1]=(M+U)*K,l[2]=(R-O)*K,l[3]=0,l[4]=(M-U)*G,l[5]=(1-(x+_))*G,l[6]=(y+B)*G,l[7]=0,l[8]=(R+O)*z,l[9]=(y-B)*z,l[10]=(1-(x+C))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=os.set(l[0],l[1],l[2]).length();const h=os.set(l[4],l[5],l[6]).length(),d=os.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],di.copy(this);const p=1/c,v=1/h,S=1/d;return di.elements[0]*=p,di.elements[1]*=p,di.elements[2]*=p,di.elements[4]*=v,di.elements[5]*=v,di.elements[6]*=v,di.elements[8]*=S,di.elements[9]*=S,di.elements[10]*=S,i.setFromRotationMatrix(di),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=na){const m=this.elements,p=2*c/(i-e),v=2*c/(r-l),S=(i+e)/(i-e),x=(r+l)/(r-l);let M,R;if(d===na)M=-(h+c)/(h-c),R=-2*h*c/(h-c);else if(d===Eu)M=-h/(h-c),R=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=S,m[12]=0,m[1]=0,m[5]=v,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=R,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=na){const m=this.elements,p=1/(i-e),v=1/(r-l),S=1/(h-c),x=(i+e)*p,M=(r+l)*v;let R,C;if(d===na)R=(h+c)*S,C=-2*S;else if(d===Eu)R=c*S,C=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*v,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=C,m[14]=-R,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const os=new st,di=new on,Kx=new st(0,0,0),Qx=new st(1,1,1),Na=new st,$l=new st,Zn=new st,g_=new on,__=new No;class ra{constructor(e=0,i=0,r=0,l=ra.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],S=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(Se(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Se(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return g_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(g_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return __.setFromEuler(this),this.setFromQuaternion(__,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ra.DEFAULT_ORDER="XYZ";class vv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jx=0;const v_=new st,ls=new No,Ki=new on,tu=new st,Ro=new st,$x=new st,ty=new No,S_=new st(1,0,0),x_=new st(0,1,0),y_=new st(0,0,1),M_={type:"added"},ey={type:"removed"},us={type:"childadded",child:null},Jf={type:"childremoved",child:null};class Qn extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=Lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qn.DEFAULT_UP.clone();const e=new st,i=new ra,r=new No,l=new st(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new se}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ls.setFromAxisAngle(e,i),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,i){return ls.setFromAxisAngle(e,i),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(S_,e)}rotateY(e){return this.rotateOnAxis(x_,e)}rotateZ(e){return this.rotateOnAxis(y_,e)}translateOnAxis(e,i){return v_.copy(e).applyQuaternion(this.quaternion),this.position.add(v_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(S_,e)}translateY(e){return this.translateOnAxis(x_,e)}translateZ(e){return this.translateOnAxis(y_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?tu.copy(e):tu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Ro,tu,this.up):Ki.lookAt(tu,Ro,this.up),this.quaternion.setFromRotationMatrix(Ki),l&&(Ki.extractRotation(l.matrixWorld),ls.setFromRotationMatrix(Ki),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(M_),us.child=e,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(ey),Jf.child=e,this.dispatchEvent(Jf),Jf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(M_),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,e,$x),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,ty,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const S=m[p];c(e.shapes,S)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),v=h(e.images),S=h(e.shapes),x=h(e.skeletons),M=h(e.animations),R=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),S.length>0&&(r.shapes=S),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),R.length>0&&(r.nodes=R)}return r.object=l,r;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Qn.DEFAULT_UP=new st(0,1,0);Qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new st,Qi=new st,$f=new st,Ji=new st,cs=new st,fs=new st,E_=new st,th=new st,eh=new st,nh=new st,ih=new $e,ah=new $e,rh=new $e;class gi{constructor(e=new st,i=new st,r=new st){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),pi.subVectors(e,i),l.cross(pi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){pi.subVectors(l,i),Qi.subVectors(r,i),$f.subVectors(e,i);const h=pi.dot(pi),d=pi.dot(Qi),m=pi.dot($f),p=Qi.dot(Qi),v=Qi.dot($f),S=h*p-d*d;if(S===0)return c.set(0,0,0),null;const x=1/S,M=(p*m-d*v)*x,R=(h*v-d*m)*x;return c.set(1-M-R,R,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,i,r,l,c,h,d,m){return this.getBarycoord(e,i,r,l,Ji)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ji.x),m.addScaledVector(h,Ji.y),m.addScaledVector(d,Ji.z),m)}static getInterpolatedAttribute(e,i,r,l,c,h){return ih.setScalar(0),ah.setScalar(0),rh.setScalar(0),ih.fromBufferAttribute(e,i),ah.fromBufferAttribute(e,r),rh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(ih,c.x),h.addScaledVector(ah,c.y),h.addScaledVector(rh,c.z),h}static isFrontFacing(e,i,r,l){return pi.subVectors(r,i),Qi.subVectors(e,i),pi.cross(Qi).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),pi.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return gi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return gi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;cs.subVectors(l,r),fs.subVectors(c,r),th.subVectors(e,r);const m=cs.dot(th),p=fs.dot(th);if(m<=0&&p<=0)return i.copy(r);eh.subVectors(e,l);const v=cs.dot(eh),S=fs.dot(eh);if(v>=0&&S<=v)return i.copy(l);const x=m*S-v*p;if(x<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(r).addScaledVector(cs,h);nh.subVectors(e,c);const M=cs.dot(nh),R=fs.dot(nh);if(R>=0&&M<=R)return i.copy(c);const C=M*p-m*R;if(C<=0&&p>=0&&R<=0)return d=p/(p-R),i.copy(r).addScaledVector(fs,d);const y=v*R-M*S;if(y<=0&&S-v>=0&&M-R>=0)return E_.subVectors(c,l),d=(S-v)/(S-v+(M-R)),i.copy(l).addScaledVector(E_,d);const _=1/(y+C+x);return h=C*_,d=x*_,i.copy(r).addScaledVector(cs,h).addScaledVector(fs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oa={h:0,s:0,l:0},eu={h:0,s:0,l:0};function sh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Be{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,be.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=be.workingColorSpace){return this.r=e,this.g=i,this.b=r,be.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=be.workingColorSpace){if(e=Bx(e,1),i=Se(i,0,1),r=Se(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=sh(h,c,e+1/3),this.g=sh(h,c,e),this.b=sh(h,c,e-1/3)}return be.toWorkingColorSpace(this,l),this}setStyle(e,i=Kn){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Kn){const r=Sv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return be.fromWorkingColorSpace(An.copy(this),e),Math.round(Se(An.r*255,0,255))*65536+Math.round(Se(An.g*255,0,255))*256+Math.round(Se(An.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=be.workingColorSpace){be.fromWorkingColorSpace(An.copy(this),i);const r=An.r,l=An.g,c=An.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const S=h-d;switch(p=v<=.5?S/(h+d):S/(2-h-d),h){case r:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-r)/S+2;break;case c:m=(r-l)/S+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=be.workingColorSpace){return be.fromWorkingColorSpace(An.copy(this),i),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=Kn){be.fromWorkingColorSpace(An.copy(this),e);const i=An.r,r=An.g,l=An.b;return e!==Kn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Oa),this.setHSL(Oa.h+e,Oa.s+i,Oa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Oa),e.getHSL(eu);const r=Xf(Oa.h,eu.h,i),l=Xf(Oa.s,eu.s,i),c=Xf(Oa.l,eu.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new Be;Be.NAMES=Sv;let ny=0;class Au extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=Lo(),this.name="",this.type="Material",this.blending=vs,this.side=Fa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vh,this.blendDst=Sh,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=u_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(r.blending=this.blending),this.side!==Fa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==vh&&(r.blendSrc=this.blendSrc),this.blendDst!==Sh&&(r.blendDst=this.blendDst),this.blendEquation!==pr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==u_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xv extends Au{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ra,this.combine=nv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new st,nu=new Ae;class Ci{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=c_,this.updateRanges=[],this.gpuType=ea,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)nu.fromBufferAttribute(this,i),nu.applyMatrix3(e),this.setXY(i,nu.x,nu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix3(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=To(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=In(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=To(i,this.array)),i}setX(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=To(i,this.array)),i}setY(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=To(i,this.array)),i}setZ(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=To(i,this.array)),i}setW(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array),c=In(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==c_&&(e.usage=this.usage),e}}class yv extends Ci{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Mv extends Ci{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class vr extends Ci{constructor(e,i,r){super(new Float32Array(e),i,r)}}let iy=0;const si=new on,oh=new Qn,hs=new st,jn=new Oo,Co=new Oo,mn=new st;class yr extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=Lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mv(e)?Mv:yv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new se().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,i,r){return si.makeTranslation(e,i,r),this.applyMatrix4(si),this}scale(e,i,r){return si.makeScale(e,i,r),this.applyMatrix4(si),this}lookAt(e){return oh.lookAt(e),oh.updateMatrix(),this.applyMatrix4(oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new vr(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new st(-1/0,-1/0,-1/0),new st(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];jn.setFromBufferAttribute(c),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new st,1/0);return}if(e){const r=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Co.setFromBufferAttribute(d),this.morphTargetsRelative?(mn.addVectors(jn.min,Co.min),jn.expandByPoint(mn),mn.addVectors(jn.max,Co.max),jn.expandByPoint(mn)):(jn.expandByPoint(Co.min),jn.expandByPoint(Co.max))}jn.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)mn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(mn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)mn.fromBufferAttribute(d,p),m&&(hs.fromBufferAttribute(e,p),mn.add(hs)),l=Math.max(l,r.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<r.count;j++)d[j]=new st,m[j]=new st;const p=new st,v=new st,S=new st,x=new Ae,M=new Ae,R=new Ae,C=new st,y=new st;function _(j,w,A){p.fromBufferAttribute(r,j),v.fromBufferAttribute(r,w),S.fromBufferAttribute(r,A),x.fromBufferAttribute(c,j),M.fromBufferAttribute(c,w),R.fromBufferAttribute(c,A),v.sub(p),S.sub(p),M.sub(x),R.sub(x);const I=1/(M.x*R.y-R.x*M.y);isFinite(I)&&(C.copy(v).multiplyScalar(R.y).addScaledVector(S,-M.y).multiplyScalar(I),y.copy(S).multiplyScalar(M.x).addScaledVector(v,-R.x).multiplyScalar(I),d[j].add(C),d[w].add(C),d[A].add(C),m[j].add(y),m[w].add(y),m[A].add(y))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let j=0,w=B.length;j<w;++j){const A=B[j],I=A.start,lt=A.count;for(let it=I,ft=I+lt;it<ft;it+=3)_(e.getX(it+0),e.getX(it+1),e.getX(it+2))}const O=new st,U=new st,K=new st,G=new st;function z(j){K.fromBufferAttribute(l,j),G.copy(K);const w=d[j];O.copy(w),O.sub(K.multiplyScalar(K.dot(w))).normalize(),U.crossVectors(G,w);const I=U.dot(m[j])<0?-1:1;h.setXYZW(j,O.x,O.y,O.z,I)}for(let j=0,w=B.length;j<w;++j){const A=B[j],I=A.start,lt=A.count;for(let it=I,ft=I+lt;it<ft;it+=3)z(e.getX(it+0)),z(e.getX(it+1)),z(e.getX(it+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ci(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new st,c=new st,h=new st,d=new st,m=new st,p=new st,v=new st,S=new st;if(e)for(let x=0,M=e.count;x<M;x+=3){const R=e.getX(x+0),C=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(i,R),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),v.subVectors(h,c),S.subVectors(l,c),v.cross(S),d.fromBufferAttribute(r,R),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,y),d.add(v),m.add(v),p.add(v),r.setXYZ(R,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),v.subVectors(h,c),S.subVectors(l,c),v.cross(S),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)mn.fromBufferAttribute(e,i),mn.normalize(),e.setXYZ(i,mn.x,mn.y,mn.z)}toNonIndexed(){function e(d,m){const p=d.array,v=d.itemSize,S=d.normalized,x=new p.constructor(m.length*v);let M=0,R=0;for(let C=0,y=m.length;C<y;C++){d.isInterleavedBufferAttribute?M=m[C]*d.data.stride+d.offset:M=m[C]*v;for(let _=0;_<v;_++)x[R++]=p[M++]}return new Ci(x,v,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new yr,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let v=0,S=p.length;v<S;v++){const x=p[v],M=e(x,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let S=0,x=p.length;S<x;S++){const M=p[S];v.push(M.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=e.morphAttributes;for(const p in c){const v=[],S=c[p];for(let x=0,M=S.length;x<M;x++)v.push(S[x].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,v=h.length;p<v;p++){const S=h[p];this.addGroup(S.start,S.count,S.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const T_=new on,lr=new jx,iu=new dd,b_=new st,au=new st,ru=new st,su=new st,lh=new st,ou=new st,A_=new st,lu=new st;class Ri extends Qn{constructor(e=new yr,i=new xv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){ou.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=d[m],S=c[m];v!==0&&(lh.fromBufferAttribute(S,e),h?ou.addScaledVector(lh,v):ou.addScaledVector(lh.sub(i),v))}i.add(ou)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),iu.copy(r.boundingSphere),iu.applyMatrix4(c),lr.copy(e.ray).recast(e.near),!(iu.containsPoint(lr.origin)===!1&&(lr.intersectSphere(iu,b_)===null||lr.origin.distanceToSquared(b_)>(e.far-e.near)**2))&&(T_.copy(c).invert(),lr.copy(e.ray).applyMatrix4(T_),!(r.boundingBox!==null&&lr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,lr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,S=c.attributes.normal,x=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let R=0,C=x.length;R<C;R++){const y=x[R],_=h[y.materialIndex],B=Math.max(y.start,M.start),O=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let U=B,K=O;U<K;U+=3){const G=d.getX(U),z=d.getX(U+1),j=d.getX(U+2);l=uu(this,_,e,r,p,v,S,G,z,j),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let y=R,_=C;y<_;y+=3){const B=d.getX(y),O=d.getX(y+1),U=d.getX(y+2);l=uu(this,h,e,r,p,v,S,B,O,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let R=0,C=x.length;R<C;R++){const y=x[R],_=h[y.materialIndex],B=Math.max(y.start,M.start),O=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let U=B,K=O;U<K;U+=3){const G=U,z=U+1,j=U+2;l=uu(this,_,e,r,p,v,S,G,z,j),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=R,_=C;y<_;y+=3){const B=y,O=y+1,U=y+2;l=uu(this,h,e,r,p,v,S,B,O,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function ay(o,e,i,r,l,c,h,d){let m;if(e.side===Fn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,e.side===Fa,d),m===null)return null;lu.copy(d),lu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(lu);return p<i.near||p>i.far?null:{distance:p,point:lu.clone(),object:o}}function uu(o,e,i,r,l,c,h,d,m,p){o.getVertexPosition(d,au),o.getVertexPosition(m,ru),o.getVertexPosition(p,su);const v=ay(o,e,i,r,au,ru,su,A_);if(v){const S=new st;gi.getBarycoord(A_,au,ru,su,S),l&&(v.uv=gi.getInterpolatedAttribute(l,d,m,p,S,new Ae)),c&&(v.uv1=gi.getInterpolatedAttribute(c,d,m,p,S,new Ae)),h&&(v.normal=gi.getInterpolatedAttribute(h,d,m,p,S,new st),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new st,materialIndex:0};gi.getNormal(au,ru,su,x.normal),v.face=x,v.barycoord=S}return v}class zo extends yr{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],v=[],S=[];let x=0,M=0;R("z","y","x",-1,-1,r,i,e,h,c,0),R("z","y","x",1,-1,r,i,-e,h,c,1),R("x","z","y",1,1,e,r,i,l,h,2),R("x","z","y",1,-1,e,r,-i,l,h,3),R("x","y","z",1,-1,e,i,r,l,c,4),R("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new vr(p,3)),this.setAttribute("normal",new vr(v,3)),this.setAttribute("uv",new vr(S,2));function R(C,y,_,B,O,U,K,G,z,j,w){const A=U/z,I=K/j,lt=U/2,it=K/2,ft=G/2,ot=z+1,N=j+1;let V=0,Z=0;const St=new st;for(let Tt=0;Tt<N;Tt++){const L=Tt*I-it;for(let $=0;$<ot;$++){const yt=$*A-lt;St[C]=yt*B,St[y]=L*O,St[_]=ft,p.push(St.x,St.y,St.z),St[C]=0,St[y]=0,St[_]=G>0?1:-1,v.push(St.x,St.y,St.z),S.push($/z),S.push(1-Tt/j),V+=1}}for(let Tt=0;Tt<j;Tt++)for(let L=0;L<z;L++){const $=x+L+ot*Tt,yt=x+L+ot*(Tt+1),Y=x+(L+1)+ot*(Tt+1),ct=x+(L+1)+ot*Tt;m.push($,yt,ct),m.push(yt,Y,ct),Z+=6}d.addGroup(M,Z,w),M+=Z,x+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Un(o){const e={};for(let i=0;i<o.length;i++){const r=Rs(o[i]);for(const l in r)e[l]=r[l]}return e}function ry(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Ev(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:be.workingColorSpace}const sy={clone:Rs,merge:Un};var oy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ly=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sa extends Au{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oy,this.fragmentShader=ly,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=ry(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Tv extends Qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=na}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const za=new st,R_=new Ae,C_=new Ae;class mi extends Tv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=id*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return id*2*Math.atan(Math.tan(Vf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(za.x,za.y).multiplyScalar(-e/za.z),za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(za.x,za.y).multiplyScalar(-e/za.z)}getViewSize(e,i){return this.getViewBounds(e,R_,C_),i.subVectors(C_,R_)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Vf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ds=-90,ps=1;class uy extends Qn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new mi(ds,ps,e,i);l.layers=this.layers,this.add(l);const c=new mi(ds,ps,e,i);c.layers=this.layers,this.add(c);const h=new mi(ds,ps,e,i);h.layers=this.layers,this.add(h);const d=new mi(ds,ps,e,i);d.layers=this.layers,this.add(d);const m=new mi(ds,ps,e,i);m.layers=this.layers,this.add(m);const p=new mi(ds,ps,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===na)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Eu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,v]=this.children,S=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,v),e.setRenderTarget(S,x,M),e.xr.enabled=R,r.texture.needsPMREMUpdate=!0}}class bv extends Hn{constructor(e,i,r,l,c,h,d,m,p,v){e=e!==void 0?e:[],i=i!==void 0?i:Ms,super(e,i,r,l,c,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cy extends xr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new bv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ai}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new zo(5,5,5),c=new sa({name:"CubemapFromEquirect",uniforms:Rs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:Ba});c.uniforms.tEquirect.value=i;const h=new Ri(l,c),d=i.minFilter;return i.minFilter===_r&&(i.minFilter=Ai),new uy(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,r,l){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}class fy extends Qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ra,this.environmentIntensity=1,this.environmentRotation=new ra,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const uh=new st,hy=new st,dy=new se;class hr{constructor(e=new st(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=uh.subVectors(r,i).cross(hy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(uh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||dy.getNormalMatrix(e),l=this.coplanarPoint(uh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new dd,cu=new st;class Av{constructor(e=new hr,i=new hr,r=new hr,l=new hr,c=new hr,h=new hr){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=na){const r=this.planes,l=e.elements,c=l[0],h=l[1],d=l[2],m=l[3],p=l[4],v=l[5],S=l[6],x=l[7],M=l[8],R=l[9],C=l[10],y=l[11],_=l[12],B=l[13],O=l[14],U=l[15];if(r[0].setComponents(m-c,x-p,y-M,U-_).normalize(),r[1].setComponents(m+c,x+p,y+M,U+_).normalize(),r[2].setComponents(m+h,x+v,y+R,U+B).normalize(),r[3].setComponents(m-h,x-v,y-R,U-B).normalize(),r[4].setComponents(m-d,x-S,y-C,U-O).normalize(),i===na)r[5].setComponents(m+d,x+S,y+C,U+O).normalize();else if(i===Eu)r[5].setComponents(d,S,C,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ur.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(cu.x=l.normal.x>0?e.max.x:e.min.x,cu.y=l.normal.y>0?e.max.y:e.min.y,cu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(cu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fu extends Qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Rv extends Hn{constructor(e,i,r,l,c,h,d,m,p,v=Ss){if(v!==Ss&&v!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Ss&&(r=Sr),r===void 0&&v===bs&&(r=Ts),super(null,l,c,h,d,m,v,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:vi,this.minFilter=m!==void 0?m:vi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Po extends yr{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,v=m+1,S=e/d,x=i/m,M=[],R=[],C=[],y=[];for(let _=0;_<v;_++){const B=_*x-h;for(let O=0;O<p;O++){const U=O*S-c;R.push(U,-B,0),C.push(0,0,1),y.push(O/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let B=0;B<d;B++){const O=B+p*_,U=B+p*(_+1),K=B+1+p*(_+1),G=B+1+p*_;M.push(O,U,G),M.push(U,K,G)}this.setIndex(M),this.setAttribute("position",new vr(R,3)),this.setAttribute("normal",new vr(C,3)),this.setAttribute("uv",new vr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.width,e.height,e.widthSegments,e.heightSegments)}}class py extends Au{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ax,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class my extends Au{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Cv extends Tv{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class gy extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _y{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=w_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=w_();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function w_(){return performance.now()}function D_(o,e,i,r){const l=vy(r);switch(i){case ov:return o*e;case uv:return o*e;case cv:return o*e*2;case fv:return o*e/l.components*l.byteLength;case cd:return o*e/l.components*l.byteLength;case hv:return o*e*2/l.components*l.byteLength;case fd:return o*e*2/l.components*l.byteLength;case lv:return o*e*3/l.components*l.byteLength;case _i:return o*e*4/l.components*l.byteLength;case hd:return o*e*4/l.components*l.byteLength;case mu:case gu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case _u:case vu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Lh:case Oh:return Math.max(o,16)*Math.max(e,8)/4;case Uh:case Nh:return Math.max(o,8)*Math.max(e,8)/2;case zh:case Ph:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Bh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case kh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case qh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Wh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case jh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Qh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Su:case Jh:case $h:return Math.ceil(o/4)*Math.ceil(e/4)*16;case dv:case td:return Math.ceil(o/4)*Math.ceil(e/4)*8;case ed:case nd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function vy(o){switch(o){case aa:case av:return{byteLength:1,components:1};case Do:case rv:case Uo:return{byteLength:2,components:1};case ld:case ud:return{byteLength:2,components:4};case Sr:case od:case ea:return{byteLength:4,components:1};case sv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sd);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wv(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function Sy(o){const e=new WeakMap;function i(d,m){const p=d.array,v=d.usage,S=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:S}}function r(d,m,p){const v=m.array,S=m.updateRanges;if(o.bindBuffer(p,d),S.length===0)o.bufferSubData(p,0,v);else{S.sort((M,R)=>M.start-R.start);let x=0;for(let M=1;M<S.length;M++){const R=S[x],C=S[M];C.start<=R.start+R.count+1?R.count=Math.max(R.count,C.start+C.count-R.start):(++x,S[x]=C)}S.length=x+1;for(let M=0,R=S.length;M<R;M++){const C=S[M];o.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var xy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,My=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ey=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ty=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,by=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ay=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ry=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,wy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ly=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ny=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Oy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,By=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Iy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ky=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Wy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ky="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$y=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,eM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_M=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,SM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,MM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,UM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,PM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,IM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,FM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,XM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$M=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,nE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,aE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ME=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,AE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,RE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,CE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,OE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,IE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,HE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,GE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ZE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,QE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:xy,alphahash_pars_fragment:yy,alphamap_fragment:My,alphamap_pars_fragment:Ey,alphatest_fragment:Ty,alphatest_pars_fragment:by,aomap_fragment:Ay,aomap_pars_fragment:Ry,batching_pars_vertex:Cy,batching_vertex:wy,begin_vertex:Dy,beginnormal_vertex:Uy,bsdfs:Ly,iridescence_fragment:Ny,bumpmap_pars_fragment:Oy,clipping_planes_fragment:zy,clipping_planes_pars_fragment:Py,clipping_planes_pars_vertex:By,clipping_planes_vertex:Iy,color_fragment:Fy,color_pars_fragment:Hy,color_pars_vertex:Gy,color_vertex:Vy,common:Xy,cube_uv_reflection_fragment:ky,defaultnormal_vertex:qy,displacementmap_pars_vertex:Wy,displacementmap_vertex:Yy,emissivemap_fragment:Zy,emissivemap_pars_fragment:jy,colorspace_fragment:Ky,colorspace_pars_fragment:Qy,envmap_fragment:Jy,envmap_common_pars_fragment:$y,envmap_pars_fragment:tM,envmap_pars_vertex:eM,envmap_physical_pars_fragment:hM,envmap_vertex:nM,fog_vertex:iM,fog_pars_vertex:aM,fog_fragment:rM,fog_pars_fragment:sM,gradientmap_pars_fragment:oM,lightmap_pars_fragment:lM,lights_lambert_fragment:uM,lights_lambert_pars_fragment:cM,lights_pars_begin:fM,lights_toon_fragment:dM,lights_toon_pars_fragment:pM,lights_phong_fragment:mM,lights_phong_pars_fragment:gM,lights_physical_fragment:_M,lights_physical_pars_fragment:vM,lights_fragment_begin:SM,lights_fragment_maps:xM,lights_fragment_end:yM,logdepthbuf_fragment:MM,logdepthbuf_pars_fragment:EM,logdepthbuf_pars_vertex:TM,logdepthbuf_vertex:bM,map_fragment:AM,map_pars_fragment:RM,map_particle_fragment:CM,map_particle_pars_fragment:wM,metalnessmap_fragment:DM,metalnessmap_pars_fragment:UM,morphinstance_vertex:LM,morphcolor_vertex:NM,morphnormal_vertex:OM,morphtarget_pars_vertex:zM,morphtarget_vertex:PM,normal_fragment_begin:BM,normal_fragment_maps:IM,normal_pars_fragment:FM,normal_pars_vertex:HM,normal_vertex:GM,normalmap_pars_fragment:VM,clearcoat_normal_fragment_begin:XM,clearcoat_normal_fragment_maps:kM,clearcoat_pars_fragment:qM,iridescence_pars_fragment:WM,opaque_fragment:YM,packing:ZM,premultiplied_alpha_fragment:jM,project_vertex:KM,dithering_fragment:QM,dithering_pars_fragment:JM,roughnessmap_fragment:$M,roughnessmap_pars_fragment:tE,shadowmap_pars_fragment:eE,shadowmap_pars_vertex:nE,shadowmap_vertex:iE,shadowmask_pars_fragment:aE,skinbase_vertex:rE,skinning_pars_vertex:sE,skinning_vertex:oE,skinnormal_vertex:lE,specularmap_fragment:uE,specularmap_pars_fragment:cE,tonemapping_fragment:fE,tonemapping_pars_fragment:hE,transmission_fragment:dE,transmission_pars_fragment:pE,uv_pars_fragment:mE,uv_pars_vertex:gE,uv_vertex:_E,worldpos_vertex:vE,background_vert:SE,background_frag:xE,backgroundCube_vert:yE,backgroundCube_frag:ME,cube_vert:EE,cube_frag:TE,depth_vert:bE,depth_frag:AE,distanceRGBA_vert:RE,distanceRGBA_frag:CE,equirect_vert:wE,equirect_frag:DE,linedashed_vert:UE,linedashed_frag:LE,meshbasic_vert:NE,meshbasic_frag:OE,meshlambert_vert:zE,meshlambert_frag:PE,meshmatcap_vert:BE,meshmatcap_frag:IE,meshnormal_vert:FE,meshnormal_frag:HE,meshphong_vert:GE,meshphong_frag:VE,meshphysical_vert:XE,meshphysical_frag:kE,meshtoon_vert:qE,meshtoon_frag:WE,points_vert:YE,points_frag:ZE,shadow_vert:jE,shadow_frag:KE,sprite_vert:QE,sprite_frag:JE},Ut={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},bi={basic:{uniforms:Un([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:Un([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Be(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:Un([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:Un([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:Un([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Be(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:Un([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:Un([Ut.points,Ut.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:Un([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:Un([Ut.common,Ut.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:Un([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:Un([Ut.sprite,Ut.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:Un([Ut.common,Ut.displacementmap,{referencePosition:{value:new st},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:Un([Ut.lights,Ut.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};bi.physical={uniforms:Un([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const hu={r:0,b:0,g:0},cr=new ra,$E=new on;function tT(o,e,i,r,l,c,h){const d=new Be(0);let m=c===!0?0:1,p,v,S=null,x=0,M=null;function R(O){let U=O.isScene===!0?O.background:null;return U&&U.isTexture&&(U=(O.backgroundBlurriness>0?i:e).get(U)),U}function C(O){let U=!1;const K=R(O);K===null?_(d,m):K&&K.isColor&&(_(K,1),U=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(O,U){const K=R(U);K&&(K.isCubeTexture||K.mapping===bu)?(v===void 0&&(v=new Ri(new zo(1,1,1),new sa({name:"BackgroundCubeMaterial",uniforms:Rs(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(G,z,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),cr.copy(U.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,K.isCubeTexture&&K.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),v.material.uniforms.envMap.value=K,v.material.uniforms.flipEnvMap.value=K.isCubeTexture&&K.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4($E.makeRotationFromEuler(cr)),v.material.toneMapped=be.getTransfer(K.colorSpace)!==Pe,(S!==K||x!==K.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,S=K,x=K.version,M=o.toneMapping),v.layers.enableAll(),O.unshift(v,v.geometry,v.material,0,0,null)):K&&K.isTexture&&(p===void 0&&(p=new Ri(new Po(2,2),new sa({name:"BackgroundMaterial",uniforms:Rs(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Fa,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=K,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=be.getTransfer(K.colorSpace)!==Pe,K.matrixAutoUpdate===!0&&K.updateMatrix(),p.material.uniforms.uvTransform.value.copy(K.matrix),(S!==K||x!==K.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,S=K,x=K.version,M=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function _(O,U){O.getRGB(hu,Ev(o)),r.buffers.color.setClear(hu.r,hu.g,hu.b,U,h)}function B(){v!==void 0&&(v.geometry.dispose(),v.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(O,U=1){d.set(O),m=U,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,_(d,m)},render:C,addToRenderList:y,dispose:B}}function eT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,h=!1;function d(A,I,lt,it,ft){let ot=!1;const N=S(it,lt,I);c!==N&&(c=N,p(c.object)),ot=M(A,it,lt,ft),ot&&R(A,it,lt,ft),ft!==null&&e.update(ft,o.ELEMENT_ARRAY_BUFFER),(ot||h)&&(h=!1,U(A,I,lt,it),ft!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ft).buffer))}function m(){return o.createVertexArray()}function p(A){return o.bindVertexArray(A)}function v(A){return o.deleteVertexArray(A)}function S(A,I,lt){const it=lt.wireframe===!0;let ft=r[A.id];ft===void 0&&(ft={},r[A.id]=ft);let ot=ft[I.id];ot===void 0&&(ot={},ft[I.id]=ot);let N=ot[it];return N===void 0&&(N=x(m()),ot[it]=N),N}function x(A){const I=[],lt=[],it=[];for(let ft=0;ft<i;ft++)I[ft]=0,lt[ft]=0,it[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:lt,attributeDivisors:it,object:A,attributes:{},index:null}}function M(A,I,lt,it){const ft=c.attributes,ot=I.attributes;let N=0;const V=lt.getAttributes();for(const Z in V)if(V[Z].location>=0){const Tt=ft[Z];let L=ot[Z];if(L===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(L=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(L=A.instanceColor)),Tt===void 0||Tt.attribute!==L||L&&Tt.data!==L.data)return!0;N++}return c.attributesNum!==N||c.index!==it}function R(A,I,lt,it){const ft={},ot=I.attributes;let N=0;const V=lt.getAttributes();for(const Z in V)if(V[Z].location>=0){let Tt=ot[Z];Tt===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(Tt=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(Tt=A.instanceColor));const L={};L.attribute=Tt,Tt&&Tt.data&&(L.data=Tt.data),ft[Z]=L,N++}c.attributes=ft,c.attributesNum=N,c.index=it}function C(){const A=c.newAttributes;for(let I=0,lt=A.length;I<lt;I++)A[I]=0}function y(A){_(A,0)}function _(A,I){const lt=c.newAttributes,it=c.enabledAttributes,ft=c.attributeDivisors;lt[A]=1,it[A]===0&&(o.enableVertexAttribArray(A),it[A]=1),ft[A]!==I&&(o.vertexAttribDivisor(A,I),ft[A]=I)}function B(){const A=c.newAttributes,I=c.enabledAttributes;for(let lt=0,it=I.length;lt<it;lt++)I[lt]!==A[lt]&&(o.disableVertexAttribArray(lt),I[lt]=0)}function O(A,I,lt,it,ft,ot,N){N===!0?o.vertexAttribIPointer(A,I,lt,ft,ot):o.vertexAttribPointer(A,I,lt,it,ft,ot)}function U(A,I,lt,it){C();const ft=it.attributes,ot=lt.getAttributes(),N=I.defaultAttributeValues;for(const V in ot){const Z=ot[V];if(Z.location>=0){let St=ft[V];if(St===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(St=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(St=A.instanceColor)),St!==void 0){const Tt=St.normalized,L=St.itemSize,$=e.get(St);if($===void 0)continue;const yt=$.buffer,Y=$.type,ct=$.bytesPerElement,Et=Y===o.INT||Y===o.UNSIGNED_INT||St.gpuType===od;if(St.isInterleavedBufferAttribute){const xt=St.data,Bt=xt.stride,zt=St.offset;if(xt.isInstancedInterleavedBuffer){for(let ee=0;ee<Z.locationSize;ee++)_(Z.location+ee,xt.meshPerAttribute);A.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let ee=0;ee<Z.locationSize;ee++)y(Z.location+ee);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let ee=0;ee<Z.locationSize;ee++)O(Z.location+ee,L/Z.locationSize,Y,Tt,Bt*ct,(zt+L/Z.locationSize*ee)*ct,Et)}else{if(St.isInstancedBufferAttribute){for(let xt=0;xt<Z.locationSize;xt++)_(Z.location+xt,St.meshPerAttribute);A.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let xt=0;xt<Z.locationSize;xt++)y(Z.location+xt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let xt=0;xt<Z.locationSize;xt++)O(Z.location+xt,L/Z.locationSize,Y,Tt,L*ct,L/Z.locationSize*xt*ct,Et)}}else if(N!==void 0){const Tt=N[V];if(Tt!==void 0)switch(Tt.length){case 2:o.vertexAttrib2fv(Z.location,Tt);break;case 3:o.vertexAttrib3fv(Z.location,Tt);break;case 4:o.vertexAttrib4fv(Z.location,Tt);break;default:o.vertexAttrib1fv(Z.location,Tt)}}}}B()}function K(){j();for(const A in r){const I=r[A];for(const lt in I){const it=I[lt];for(const ft in it)v(it[ft].object),delete it[ft];delete I[lt]}delete r[A]}}function G(A){if(r[A.id]===void 0)return;const I=r[A.id];for(const lt in I){const it=I[lt];for(const ft in it)v(it[ft].object),delete it[ft];delete I[lt]}delete r[A.id]}function z(A){for(const I in r){const lt=r[I];if(lt[A.id]===void 0)continue;const it=lt[A.id];for(const ft in it)v(it[ft].object),delete it[ft];delete lt[A.id]}}function j(){w(),h=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:w,dispose:K,releaseStatesOfGeometry:G,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:y,disableUnusedAttributes:B}}function nT(o,e,i){let r;function l(p){r=p}function c(p,v){o.drawArrays(r,p,v),i.update(v,r,1)}function h(p,v,S){S!==0&&(o.drawArraysInstanced(r,p,v,S),i.update(v,r,S))}function d(p,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,S);let M=0;for(let R=0;R<S;R++)M+=v[R];i.update(M,r,1)}function m(p,v,S,x){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let R=0;R<p.length;R++)h(p[R],v[R],x[R]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,v,0,x,0,S);let R=0;for(let C=0;C<S;C++)R+=v[C]*x[C];i.update(R,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function iT(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==_i&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const j=z===Uo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==aa&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ea&&!j)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const S=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),K=R>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:S,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:R,maxTextureSize:C,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:B,maxVaryings:O,maxFragmentUniforms:U,vertexTextures:K,maxSamples:G}}function aT(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new hr,d=new se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,x){const M=S.length!==0||x||r!==0||l;return l=x,r=S.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,x){i=v(S,x,0)},this.setState=function(S,x,M){const R=S.clippingPlanes,C=S.clipIntersection,y=S.clipShadows,_=o.get(S);if(!l||R===null||R.length===0||c&&!y)c?v(null):p();else{const B=c?0:r,O=B*4;let U=_.clippingState||null;m.value=U,U=v(R,x,O,M);for(let K=0;K!==O;++K)U[K]=i[K];_.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(S,x,M,R){const C=S!==null?S.length:0;let y=null;if(C!==0){if(y=m.value,R!==!0||y===null){const _=M+C*4,B=x.matrixWorldInverse;d.getNormalMatrix(B),(y===null||y.length<_)&&(y=new Float32Array(_));for(let O=0,U=M;O!==C;++O,U+=4)h.copy(S[O]).applyMatrix4(B,d),h.normal.toArray(y,U),y[U+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function rT(o){let e=new WeakMap;function i(h,d){return d===Rh?h.mapping=Ms:d===Ch&&(h.mapping=Es),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Rh||d===Ch)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new cy(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const _s=4,U_=[.125,.215,.35,.446,.526,.582],mr=20,ch=new Cv,L_=new Be;let fh=null,hh=0,dh=0,ph=!1;const dr=(1+Math.sqrt(5))/2,ms=1/dr,N_=[new st(-dr,ms,0),new st(dr,ms,0),new st(-ms,0,dr),new st(ms,0,dr),new st(0,dr,-ms),new st(0,dr,ms),new st(-1,1,-1),new st(1,1,-1),new st(-1,1,1),new st(1,1,1)];class O_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){fh=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=B_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=P_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fh,hh,dh),this._renderer.xr.enabled=ph,e.scissorTest=!1,du(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ms||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fh=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:Uo,format:_i,colorSpace:As,depthBuffer:!1},l=z_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=z_(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sT(c)),this._blurMaterial=oT(c,e,i)}return l}_compileMaterial(e){const i=new Ri(this._lodPlanes[0],e);this._renderer.compile(i,ch)}_sceneToCubeUV(e,i,r,l){const d=new mi(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,x=v.toneMapping;v.getClearColor(L_),v.toneMapping=Ia,v.autoClear=!1;const M=new xv({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),R=new Ri(new zo,M);let C=!1;const y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,C=!0):(M.color.copy(L_),C=!0);for(let _=0;_<6;_++){const B=_%3;B===0?(d.up.set(0,m[_],0),d.lookAt(p[_],0,0)):B===1?(d.up.set(0,0,m[_]),d.lookAt(0,p[_],0)):(d.up.set(0,m[_],0),d.lookAt(0,0,p[_]));const O=this._cubeSize;du(l,B*O,_>2?O:0,O,O),v.setRenderTarget(l),C&&v.render(R,d),v.render(e,d)}R.geometry.dispose(),R.material.dispose(),v.toneMapping=x,v.autoClear=S,e.background=y}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ms||e.mapping===Es;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=B_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=P_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Ri(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;du(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,ch)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=N_[(l-c-1)%N_.length];this._blur(e,c-1,c,h,d)}i.autoClear=r}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,S=new Ri(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[r]-1,R=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*mr-1),C=c/R,y=isFinite(c)?1+Math.floor(v*C):mr;y>mr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${mr}`);const _=[];let B=0;for(let z=0;z<mr;++z){const j=z/C,w=Math.exp(-j*j/2);_.push(w),z===0?B+=w:z<y&&(B+=2*w)}for(let z=0;z<_.length;z++)_[z]=_[z]/B;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:O}=this;x.dTheta.value=R,x.mipInt.value=O-r;const U=this._sizeLods[l],K=3*U*(l>O-_s?l-O+_s:0),G=4*(this._cubeSize-U);du(i,K,G,3*U,2*U),m.setRenderTarget(i),m.render(S,ch)}}function sT(o){const e=[],i=[],r=[];let l=o;const c=o-_s+1+U_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-_s?m=U_[h-o+_s-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),v=-p,S=1+p,x=[v,v,S,v,S,S,v,v,S,S,v,S],M=6,R=6,C=3,y=2,_=1,B=new Float32Array(C*R*M),O=new Float32Array(y*R*M),U=new Float32Array(_*R*M);for(let G=0;G<M;G++){const z=G%3*2/3-1,j=G>2?0:-1,w=[z,j,0,z+2/3,j,0,z+2/3,j+1,0,z,j,0,z+2/3,j+1,0,z,j+1,0];B.set(w,C*R*G),O.set(x,y*R*G);const A=[G,G,G,G,G,G];U.set(A,_*R*G)}const K=new yr;K.setAttribute("position",new Ci(B,C)),K.setAttribute("uv",new Ci(O,y)),K.setAttribute("faceIndex",new Ci(U,_)),e.push(K),l>_s&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function z_(o,e,i){const r=new xr(o,e,i);return r.texture.mapping=bu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function du(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function oT(o,e,i){const r=new Float32Array(mr),l=new st(0,1,0);return new sa({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:pd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function P_(){return new sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function B_(){return new sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function pd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Rh||m===Ch,v=m===Ms||m===Es;if(p||v){let S=e.get(d);const x=S!==void 0?S.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new O_(o)),S=p?i.fromEquirectangular(d,S):i.fromCubemap(d,S),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),S.texture;if(S!==void 0)return S.texture;{const M=d.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new O_(o)),S=p?i.fromEquirectangular(d):i.fromCubemap(d),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),d.addEventListener("dispose",c),S.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function uT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&gs("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function cT(o,e,i,r){const l={},c=new WeakMap;function h(S){const x=S.target;x.index!==null&&e.remove(x.index);for(const R in x.attributes)e.remove(x.attributes[R]);x.removeEventListener("dispose",h),delete l[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(S,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(S){const x=S.attributes;for(const M in x)e.update(x[M],o.ARRAY_BUFFER)}function p(S){const x=[],M=S.index,R=S.attributes.position;let C=0;if(M!==null){const B=M.array;C=M.version;for(let O=0,U=B.length;O<U;O+=3){const K=B[O+0],G=B[O+1],z=B[O+2];x.push(K,G,G,z,z,K)}}else if(R!==void 0){const B=R.array;C=R.version;for(let O=0,U=B.length/3-1;O<U;O+=3){const K=O+0,G=O+1,z=O+2;x.push(K,G,G,z,z,K)}}else return;const y=new(mv(x)?Mv:yv)(x,1);y.version=C;const _=c.get(S);_&&e.remove(_),c.set(S,y)}function v(S){const x=c.get(S);if(x){const M=S.index;M!==null&&x.version<M.version&&p(S)}else p(S);return c.get(S)}return{get:d,update:m,getWireframeAttribute:v}}function fT(o,e,i){let r;function l(x){r=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,M){o.drawElements(r,M,c,x*h),i.update(M,r,1)}function p(x,M,R){R!==0&&(o.drawElementsInstanced(r,M,c,x*h,R),i.update(M,r,R))}function v(x,M,R){if(R===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,R);let y=0;for(let _=0;_<R;_++)y+=M[_];i.update(y,r,1)}function S(x,M,R,C){if(R===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/h,M[_],C[_]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,C,0,R);let _=0;for(let B=0;B<R;B++)_+=M[B]*C[B];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=S}function hT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function dT(o,e,i){const r=new WeakMap,l=new $e;function c(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=v!==void 0?v.length:0;let x=r.get(d);if(x===void 0||x.count!==S){let A=function(){j.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var M=A;x!==void 0&&x.texture.dispose();const R=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let U=0;R===!0&&(U=1),C===!0&&(U=2),y===!0&&(U=3);let K=d.attributes.position.count*U,G=1;K>e.maxTextureSize&&(G=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const z=new Float32Array(K*G*4*S),j=new _v(z,K,G,S);j.type=ea,j.needsUpdate=!0;const w=U*4;for(let I=0;I<S;I++){const lt=_[I],it=B[I],ft=O[I],ot=K*G*4*I;for(let N=0;N<lt.count;N++){const V=N*w;R===!0&&(l.fromBufferAttribute(lt,N),z[ot+V+0]=l.x,z[ot+V+1]=l.y,z[ot+V+2]=l.z,z[ot+V+3]=0),C===!0&&(l.fromBufferAttribute(it,N),z[ot+V+4]=l.x,z[ot+V+5]=l.y,z[ot+V+6]=l.z,z[ot+V+7]=0),y===!0&&(l.fromBufferAttribute(ft,N),z[ot+V+8]=l.x,z[ot+V+9]=l.y,z[ot+V+10]=l.z,z[ot+V+11]=ft.itemSize===4?l.w:1)}}x={count:S,texture:j,size:new Ae(K,G)},r.set(d,x),d.addEventListener("dispose",A)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let R=0;for(let y=0;y<p.length;y++)R+=p[y];const C=d.morphTargetsRelative?1:1-R;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function pT(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,v=m.geometry,S=e.get(m,v);if(l.get(S)!==p&&(e.update(S),l.set(S,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return S}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const Dv=new Hn,I_=new Rv(1,1),Uv=new _v,Lv=new Yx,Nv=new bv,F_=[],H_=[],G_=new Float32Array(16),V_=new Float32Array(9),X_=new Float32Array(4);function ws(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=F_[l];if(c===void 0&&(c=new Float32Array(l),F_[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function fn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function hn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Ru(o,e){let i=H_[e];i===void 0&&(i=new Int32Array(e),H_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function mT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function gT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2fv(this.addr,e),hn(i,e)}}function _T(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(fn(i,e))return;o.uniform3fv(this.addr,e),hn(i,e)}}function vT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4fv(this.addr,e),hn(i,e)}}function ST(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;X_.set(r),o.uniformMatrix2fv(this.addr,!1,X_),hn(i,r)}}function xT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;V_.set(r),o.uniformMatrix3fv(this.addr,!1,V_),hn(i,r)}}function yT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;G_.set(r),o.uniformMatrix4fv(this.addr,!1,G_),hn(i,r)}}function MT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function ET(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2iv(this.addr,e),hn(i,e)}}function TT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;o.uniform3iv(this.addr,e),hn(i,e)}}function bT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4iv(this.addr,e),hn(i,e)}}function AT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function RT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2uiv(this.addr,e),hn(i,e)}}function CT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;o.uniform3uiv(this.addr,e),hn(i,e)}}function wT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4uiv(this.addr,e),hn(i,e)}}function DT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(I_.compareFunction=pv,c=I_):c=Dv,i.setTexture2D(e||c,l)}function UT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Lv,l)}function LT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Nv,l)}function NT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Uv,l)}function OT(o){switch(o){case 5126:return mT;case 35664:return gT;case 35665:return _T;case 35666:return vT;case 35674:return ST;case 35675:return xT;case 35676:return yT;case 5124:case 35670:return MT;case 35667:case 35671:return ET;case 35668:case 35672:return TT;case 35669:case 35673:return bT;case 5125:return AT;case 36294:return RT;case 36295:return CT;case 36296:return wT;case 35678:case 36198:case 36298:case 36306:case 35682:return DT;case 35679:case 36299:case 36307:return UT;case 35680:case 36300:case 36308:case 36293:return LT;case 36289:case 36303:case 36311:case 36292:return NT}}function zT(o,e){o.uniform1fv(this.addr,e)}function PT(o,e){const i=ws(e,this.size,2);o.uniform2fv(this.addr,i)}function BT(o,e){const i=ws(e,this.size,3);o.uniform3fv(this.addr,i)}function IT(o,e){const i=ws(e,this.size,4);o.uniform4fv(this.addr,i)}function FT(o,e){const i=ws(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function HT(o,e){const i=ws(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function GT(o,e){const i=ws(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function VT(o,e){o.uniform1iv(this.addr,e)}function XT(o,e){o.uniform2iv(this.addr,e)}function kT(o,e){o.uniform3iv(this.addr,e)}function qT(o,e){o.uniform4iv(this.addr,e)}function WT(o,e){o.uniform1uiv(this.addr,e)}function YT(o,e){o.uniform2uiv(this.addr,e)}function ZT(o,e){o.uniform3uiv(this.addr,e)}function jT(o,e){o.uniform4uiv(this.addr,e)}function KT(o,e,i){const r=this.cache,l=e.length,c=Ru(i,l);fn(r,c)||(o.uniform1iv(this.addr,c),hn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Dv,c[h])}function QT(o,e,i){const r=this.cache,l=e.length,c=Ru(i,l);fn(r,c)||(o.uniform1iv(this.addr,c),hn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Lv,c[h])}function JT(o,e,i){const r=this.cache,l=e.length,c=Ru(i,l);fn(r,c)||(o.uniform1iv(this.addr,c),hn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Nv,c[h])}function $T(o,e,i){const r=this.cache,l=e.length,c=Ru(i,l);fn(r,c)||(o.uniform1iv(this.addr,c),hn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Uv,c[h])}function tb(o){switch(o){case 5126:return zT;case 35664:return PT;case 35665:return BT;case 35666:return IT;case 35674:return FT;case 35675:return HT;case 35676:return GT;case 5124:case 35670:return VT;case 35667:case 35671:return XT;case 35668:case 35672:return kT;case 35669:case 35673:return qT;case 5125:return WT;case 36294:return YT;case 36295:return ZT;case 36296:return jT;case 35678:case 36198:case 36298:case 36306:case 35682:return KT;case 35679:case 36299:case 36307:return QT;case 35680:case 36300:case 36308:case 36293:return JT;case 36289:case 36303:case 36311:case 36292:return $T}}class eb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=OT(i.type)}}class nb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=tb(i.type)}}class ib{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const mh=/(\w+)(\])?(\[|\.)?/g;function k_(o,e){o.seq.push(e),o.map[e.id]=e}function ab(o,e,i){const r=o.name,l=r.length;for(mh.lastIndex=0;;){const c=mh.exec(r),h=mh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){k_(i,p===void 0?new eb(d,o,e):new nb(d,o,e));break}else{let S=i.map[d];S===void 0&&(S=new ib(d),k_(i,S)),i=S}}}class xu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);ab(c,h,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function q_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const rb=37297;let sb=0;function ob(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const W_=new se;function lb(o){be._getMatrix(W_,be.workingColorSpace,o);const e=`mat3( ${W_.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(o)){case Mu:return[e,"LinearTransferOETF"];case Pe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Y_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+ob(o.getShaderSource(e),h)}else return l}function ub(o,e){const i=lb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function cb(o,e){let i;switch(e){case vx:i="Linear";break;case Sx:i="Reinhard";break;case xx:i="Cineon";break;case yx:i="ACESFilmic";break;case Ex:i="AgX";break;case Tx:i="Neutral";break;case Mx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const pu=new st;function fb(){be.getLuminanceCoefficients(pu);const o=pu.x.toFixed(4),e=pu.y.toFixed(4),i=pu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function db(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function pb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function wo(o){return o!==""}function Z_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function j_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mb=/^[ \t]*#include +<([\w\d./]+)>/gm;function ad(o){return o.replace(mb,_b)}const gb=new Map;function _b(o,e){let i=oe[e];if(i===void 0){const r=gb.get(e);if(r!==void 0)i=oe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ad(i)}const vb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function K_(o){return o.replace(vb,Sb)}function Sb(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Q_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===ev?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===QS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===$i&&(e="SHADOWMAP_TYPE_VSM"),e}function yb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ms:case Es:e="ENVMAP_TYPE_CUBE";break;case bu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Es:e="ENVMAP_MODE_REFRACTION";break}return e}function Eb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case nv:e="ENVMAP_BLENDING_MULTIPLY";break;case gx:e="ENVMAP_BLENDING_MIX";break;case _x:e="ENVMAP_BLENDING_ADD";break}return e}function Tb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function bb(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=xb(i),p=yb(i),v=Mb(i),S=Eb(i),x=Tb(i),M=hb(i),R=db(c),C=l.createProgram();let y,_,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(wo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(wo).join(`
`),_.length>0&&(_+=`
`)):(y=[Q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),_=[Q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+S:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ia?"#define TONE_MAPPING":"",i.toneMapping!==Ia?oe.tonemapping_pars_fragment:"",i.toneMapping!==Ia?cb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,ub("linearToOutputTexel",i.outputColorSpace),fb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(wo).join(`
`)),h=ad(h),h=Z_(h,i),h=j_(h,i),d=ad(d),d=Z_(d,i),d=j_(d,i),h=K_(h),d=K_(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===f_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===f_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=B+y+h,U=B+_+d,K=q_(l,l.VERTEX_SHADER,O),G=q_(l,l.FRAGMENT_SHADER,U);l.attachShader(C,K),l.attachShader(C,G),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(I){if(o.debug.checkShaderErrors){const lt=l.getProgramInfoLog(C).trim(),it=l.getShaderInfoLog(K).trim(),ft=l.getShaderInfoLog(G).trim();let ot=!0,N=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ot=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,K,G);else{const V=Y_(l,K,"vertex"),Z=Y_(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+lt+`
`+V+`
`+Z)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(it===""||ft==="")&&(N=!1);N&&(I.diagnostics={runnable:ot,programLog:lt,vertexShader:{log:it,prefix:y},fragmentShader:{log:ft,prefix:_}})}l.deleteShader(K),l.deleteShader(G),j=new xu(l,C),w=pb(l,C)}let j;this.getUniforms=function(){return j===void 0&&z(this),j};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(C,rb)),A},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=sb++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=K,this.fragmentShader=G,this}let Ab=0;class Rb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new Cb(e),i.set(e,r)),r}}class Cb{constructor(e){this.id=Ab++,this.code=e,this.usedTimes=0}}function wb(o,e,i,r,l,c,h){const d=new vv,m=new Rb,p=new Set,v=[],S=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,A,I,lt,it){const ft=lt.fog,ot=it.geometry,N=w.isMeshStandardMaterial?lt.environment:null,V=(w.isMeshStandardMaterial?i:e).get(w.envMap||N),Z=V&&V.mapping===bu?V.image.height:null,St=R[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const Tt=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,L=Tt!==void 0?Tt.length:0;let $=0;ot.morphAttributes.position!==void 0&&($=1),ot.morphAttributes.normal!==void 0&&($=2),ot.morphAttributes.color!==void 0&&($=3);let yt,Y,ct,Et;if(St){const xe=bi[St];yt=xe.vertexShader,Y=xe.fragmentShader}else yt=w.vertexShader,Y=w.fragmentShader,m.update(w),ct=m.getVertexShaderID(w),Et=m.getFragmentShaderID(w);const xt=o.getRenderTarget(),Bt=o.state.buffers.depth.getReversed(),zt=it.isInstancedMesh===!0,ee=it.isBatchedMesh===!0,Ue=!!w.map,ue=!!w.matcap,ke=!!V,F=!!w.aoMap,Mn=!!w.lightMap,le=!!w.bumpMap,de=!!w.normalMap,qt=!!w.displacementMap,Ce=!!w.emissiveMap,kt=!!w.metalnessMap,D=!!w.roughnessMap,T=w.anisotropy>0,et=w.clearcoat>0,dt=w.dispersion>0,Mt=w.iridescence>0,mt=w.sheen>0,Vt=w.transmission>0,Ct=T&&!!w.anisotropyMap,Pt=et&&!!w.clearcoatMap,pe=et&&!!w.clearcoatNormalMap,bt=et&&!!w.clearcoatRoughnessMap,It=Mt&&!!w.iridescenceMap,Wt=Mt&&!!w.iridescenceThicknessMap,Xt=mt&&!!w.sheenColorMap,Lt=mt&&!!w.sheenRoughnessMap,Qt=!!w.specularMap,ne=!!w.specularColorMap,Le=!!w.specularIntensityMap,X=Vt&&!!w.transmissionMap,At=Vt&&!!w.thicknessMap,ut=!!w.gradientMap,_t=!!w.alphaMap,Rt=w.alphaTest>0,wt=!!w.alphaHash,Jt=!!w.extensions;let qe=Ia;w.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(qe=o.toneMapping);const ln={shaderID:St,shaderType:w.type,shaderName:w.name,vertexShader:yt,fragmentShader:Y,defines:w.defines,customVertexShaderID:ct,customFragmentShaderID:Et,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:ee,batchingColor:ee&&it._colorsTexture!==null,instancing:zt,instancingColor:zt&&it.instanceColor!==null,instancingMorph:zt&&it.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:xt===null?o.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:As,alphaToCoverage:!!w.alphaToCoverage,map:Ue,matcap:ue,envMap:ke,envMapMode:ke&&V.mapping,envMapCubeUVHeight:Z,aoMap:F,lightMap:Mn,bumpMap:le,normalMap:de,displacementMap:x&&qt,emissiveMap:Ce,normalMapObjectSpace:de&&w.normalMapType===wx,normalMapTangentSpace:de&&w.normalMapType===Cx,metalnessMap:kt,roughnessMap:D,anisotropy:T,anisotropyMap:Ct,clearcoat:et,clearcoatMap:Pt,clearcoatNormalMap:pe,clearcoatRoughnessMap:bt,dispersion:dt,iridescence:Mt,iridescenceMap:It,iridescenceThicknessMap:Wt,sheen:mt,sheenColorMap:Xt,sheenRoughnessMap:Lt,specularMap:Qt,specularColorMap:ne,specularIntensityMap:Le,transmission:Vt,transmissionMap:X,thicknessMap:At,gradientMap:ut,opaque:w.transparent===!1&&w.blending===vs&&w.alphaToCoverage===!1,alphaMap:_t,alphaTest:Rt,alphaHash:wt,combine:w.combine,mapUv:Ue&&C(w.map.channel),aoMapUv:F&&C(w.aoMap.channel),lightMapUv:Mn&&C(w.lightMap.channel),bumpMapUv:le&&C(w.bumpMap.channel),normalMapUv:de&&C(w.normalMap.channel),displacementMapUv:qt&&C(w.displacementMap.channel),emissiveMapUv:Ce&&C(w.emissiveMap.channel),metalnessMapUv:kt&&C(w.metalnessMap.channel),roughnessMapUv:D&&C(w.roughnessMap.channel),anisotropyMapUv:Ct&&C(w.anisotropyMap.channel),clearcoatMapUv:Pt&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:pe&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&C(w.sheenRoughnessMap.channel),specularMapUv:Qt&&C(w.specularMap.channel),specularColorMapUv:ne&&C(w.specularColorMap.channel),specularIntensityMapUv:Le&&C(w.specularIntensityMap.channel),transmissionMapUv:X&&C(w.transmissionMap.channel),thicknessMapUv:At&&C(w.thicknessMap.channel),alphaMapUv:_t&&C(w.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(de||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!ot.attributes.uv&&(Ue||_t),fog:!!ft,useFog:w.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:S,reverseDepthBuffer:Bt,skinning:it.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:$,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&I.length>0,shadowMapType:o.shadowMap.type,toneMapping:qe,decodeVideoTexture:Ue&&w.map.isVideoTexture===!0&&be.getTransfer(w.map.colorSpace)===Pe,decodeVideoTextureEmissive:Ce&&w.emissiveMap.isVideoTexture===!0&&be.getTransfer(w.emissiveMap.colorSpace)===Pe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ta,flipSided:w.side===Fn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Jt&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&w.extensions.multiDraw===!0||ee)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ln.vertexUv1s=p.has(1),ln.vertexUv2s=p.has(2),ln.vertexUv3s=p.has(3),p.clear(),ln}function _(w){const A=[];if(w.shaderID?A.push(w.shaderID):(A.push(w.customVertexShaderID),A.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)A.push(I),A.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(B(A,w),O(A,w),A.push(o.outputColorSpace)),A.push(w.customProgramCacheKey),A.join()}function B(w,A){w.push(A.precision),w.push(A.outputColorSpace),w.push(A.envMapMode),w.push(A.envMapCubeUVHeight),w.push(A.mapUv),w.push(A.alphaMapUv),w.push(A.lightMapUv),w.push(A.aoMapUv),w.push(A.bumpMapUv),w.push(A.normalMapUv),w.push(A.displacementMapUv),w.push(A.emissiveMapUv),w.push(A.metalnessMapUv),w.push(A.roughnessMapUv),w.push(A.anisotropyMapUv),w.push(A.clearcoatMapUv),w.push(A.clearcoatNormalMapUv),w.push(A.clearcoatRoughnessMapUv),w.push(A.iridescenceMapUv),w.push(A.iridescenceThicknessMapUv),w.push(A.sheenColorMapUv),w.push(A.sheenRoughnessMapUv),w.push(A.specularMapUv),w.push(A.specularColorMapUv),w.push(A.specularIntensityMapUv),w.push(A.transmissionMapUv),w.push(A.thicknessMapUv),w.push(A.combine),w.push(A.fogExp2),w.push(A.sizeAttenuation),w.push(A.morphTargetsCount),w.push(A.morphAttributeCount),w.push(A.numDirLights),w.push(A.numPointLights),w.push(A.numSpotLights),w.push(A.numSpotLightMaps),w.push(A.numHemiLights),w.push(A.numRectAreaLights),w.push(A.numDirLightShadows),w.push(A.numPointLightShadows),w.push(A.numSpotLightShadows),w.push(A.numSpotLightShadowsWithMaps),w.push(A.numLightProbes),w.push(A.shadowMapType),w.push(A.toneMapping),w.push(A.numClippingPlanes),w.push(A.numClipIntersection),w.push(A.depthPacking)}function O(w,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),w.push(d.mask)}function U(w){const A=R[w.type];let I;if(A){const lt=bi[A];I=sy.clone(lt.uniforms)}else I=w.uniforms;return I}function K(w,A){let I;for(let lt=0,it=v.length;lt<it;lt++){const ft=v[lt];if(ft.cacheKey===A){I=ft,++I.usedTimes;break}}return I===void 0&&(I=new bb(o,A,w,c),v.push(I)),I}function G(w){if(--w.usedTimes===0){const A=v.indexOf(w);v[A]=v[v.length-1],v.pop(),w.destroy()}}function z(w){m.remove(w)}function j(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:U,acquireProgram:K,releaseProgram:G,releaseShaderCache:z,programs:v,dispose:j}}function Db(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function Ub(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function J_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function $_(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(S,x,M,R,C,y){let _=o[e];return _===void 0?(_={id:S.id,object:S,geometry:x,material:M,groupOrder:R,renderOrder:S.renderOrder,z:C,group:y},o[e]=_):(_.id=S.id,_.object=S,_.geometry=x,_.material=M,_.groupOrder=R,_.renderOrder=S.renderOrder,_.z=C,_.group=y),e++,_}function d(S,x,M,R,C,y){const _=h(S,x,M,R,C,y);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(S,x,M,R,C,y){const _=h(S,x,M,R,C,y);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(S,x){i.length>1&&i.sort(S||Ub),r.length>1&&r.sort(x||J_),l.length>1&&l.sort(x||J_)}function v(){for(let S=e,x=o.length;S<x;S++){const M=o[S];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:v,sort:p}}function Lb(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new $_,o.set(r,[h])):l>=c.length?(h=new $_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function Nb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new st,color:new Be};break;case"SpotLight":i={position:new st,direction:new st,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new st,color:new Be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new st,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":i={color:new Be,position:new st,halfWidth:new st,halfHeight:new st};break}return o[e.id]=i,i}}}function Ob(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let zb=0;function Pb(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Bb(o){const e=new Nb,i=Ob(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new st);const l=new st,c=new on,h=new on;function d(p){let v=0,S=0,x=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,R=0,C=0,y=0,_=0,B=0,O=0,U=0,K=0,G=0,z=0;p.sort(Pb);for(let w=0,A=p.length;w<A;w++){const I=p[w],lt=I.color,it=I.intensity,ft=I.distance,ot=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)v+=lt.r*it,S+=lt.g*it,x+=lt.b*it;else if(I.isLightProbe){for(let N=0;N<9;N++)r.probe[N].addScaledVector(I.sh.coefficients[N],it);z++}else if(I.isDirectionalLight){const N=e.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const V=I.shadow,Z=i.get(I);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize=V.mapSize,r.directionalShadow[M]=Z,r.directionalShadowMap[M]=ot,r.directionalShadowMatrix[M]=I.shadow.matrix,B++}r.directional[M]=N,M++}else if(I.isSpotLight){const N=e.get(I);N.position.setFromMatrixPosition(I.matrixWorld),N.color.copy(lt).multiplyScalar(it),N.distance=ft,N.coneCos=Math.cos(I.angle),N.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),N.decay=I.decay,r.spot[C]=N;const V=I.shadow;if(I.map&&(r.spotLightMap[K]=I.map,K++,V.updateMatrices(I),I.castShadow&&G++),r.spotLightMatrix[C]=V.matrix,I.castShadow){const Z=i.get(I);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize=V.mapSize,r.spotShadow[C]=Z,r.spotShadowMap[C]=ot,U++}C++}else if(I.isRectAreaLight){const N=e.get(I);N.color.copy(lt).multiplyScalar(it),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),r.rectArea[y]=N,y++}else if(I.isPointLight){const N=e.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),N.distance=I.distance,N.decay=I.decay,I.castShadow){const V=I.shadow,Z=i.get(I);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize=V.mapSize,Z.shadowCameraNear=V.camera.near,Z.shadowCameraFar=V.camera.far,r.pointShadow[R]=Z,r.pointShadowMap[R]=ot,r.pointShadowMatrix[R]=I.shadow.matrix,O++}r.point[R]=N,R++}else if(I.isHemisphereLight){const N=e.get(I);N.skyColor.copy(I.color).multiplyScalar(it),N.groundColor.copy(I.groundColor).multiplyScalar(it),r.hemi[_]=N,_++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ut.LTC_FLOAT_1,r.rectAreaLTC2=Ut.LTC_FLOAT_2):(r.rectAreaLTC1=Ut.LTC_HALF_1,r.rectAreaLTC2=Ut.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=S,r.ambient[2]=x;const j=r.hash;(j.directionalLength!==M||j.pointLength!==R||j.spotLength!==C||j.rectAreaLength!==y||j.hemiLength!==_||j.numDirectionalShadows!==B||j.numPointShadows!==O||j.numSpotShadows!==U||j.numSpotMaps!==K||j.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=y,r.point.length=R,r.hemi.length=_,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=U+K-G,r.spotLightMap.length=K,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=z,j.directionalLength=M,j.pointLength=R,j.spotLength=C,j.rectAreaLength=y,j.hemiLength=_,j.numDirectionalShadows=B,j.numPointShadows=O,j.numSpotShadows=U,j.numSpotMaps=K,j.numLightProbes=z,r.version=zb++)}function m(p,v){let S=0,x=0,M=0,R=0,C=0;const y=v.matrixWorldInverse;for(let _=0,B=p.length;_<B;_++){const O=p[_];if(O.isDirectionalLight){const U=r.directional[S];U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),S++}else if(O.isSpotLight){const U=r.spot[M];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),M++}else if(O.isRectAreaLight){const U=r.rectArea[R];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(y),h.identity(),c.copy(O.matrixWorld),c.premultiply(y),h.extractRotation(c),U.halfWidth.set(O.width*.5,0,0),U.halfHeight.set(0,O.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),R++}else if(O.isPointLight){const U=r.point[x];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(y),x++}else if(O.isHemisphereLight){const U=r.hemi[C];U.direction.setFromMatrixPosition(O.matrixWorld),U.direction.transformDirection(y),C++}}}return{setup:d,setupView:m,state:r}}function tv(o){const e=new Bb(o),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function c(v){i.push(v)}function h(v){r.push(v)}function d(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function Ib(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new tv(o),e.set(l,[d])):c>=h.length?(d=new tv(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const Fb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Gb(o,e,i){let r=new Av;const l=new Ae,c=new Ae,h=new $e,d=new py({depthPacking:Rx}),m=new my,p={},v=i.maxTextureSize,S={[Fa]:Fn,[Fn]:Fa,[ta]:ta},x=new sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:Fb,fragmentShader:Hb}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const R=new yr;R.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ri(R,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ev;let _=this.type;this.render=function(G,z,j){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||G.length===0)return;const w=o.getRenderTarget(),A=o.getActiveCubeFace(),I=o.getActiveMipmapLevel(),lt=o.state;lt.setBlending(Ba),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const it=_!==$i&&this.type===$i,ft=_===$i&&this.type!==$i;for(let ot=0,N=G.length;ot<N;ot++){const V=G[ot],Z=V.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const St=Z.getFrameExtents();if(l.multiply(St),c.copy(Z.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/St.x),l.x=c.x*St.x,Z.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/St.y),l.y=c.y*St.y,Z.mapSize.y=c.y)),Z.map===null||it===!0||ft===!0){const L=this.type!==$i?{minFilter:vi,magFilter:vi}:{};Z.map!==null&&Z.map.dispose(),Z.map=new xr(l.x,l.y,L),Z.map.texture.name=V.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const Tt=Z.getViewportCount();for(let L=0;L<Tt;L++){const $=Z.getViewport(L);h.set(c.x*$.x,c.y*$.y,c.x*$.z,c.y*$.w),lt.viewport(h),Z.updateMatrices(V,L),r=Z.getFrustum(),U(z,j,Z.camera,V,this.type)}Z.isPointLightShadow!==!0&&this.type===$i&&B(Z,j),Z.needsUpdate=!1}_=this.type,y.needsUpdate=!1,o.setRenderTarget(w,A,I)};function B(G,z){const j=e.update(C);x.defines.VSM_SAMPLES!==G.blurSamples&&(x.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new xr(l.x,l.y)),x.uniforms.shadow_pass.value=G.map.texture,x.uniforms.resolution.value=G.mapSize,x.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(z,null,j,x,C,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(z,null,j,M,C,null)}function O(G,z,j,w){let A=null;const I=j.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(I!==void 0)A=I;else if(A=j.isPointLight===!0?m:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const lt=A.uuid,it=z.uuid;let ft=p[lt];ft===void 0&&(ft={},p[lt]=ft);let ot=ft[it];ot===void 0&&(ot=A.clone(),ft[it]=ot,z.addEventListener("dispose",K)),A=ot}if(A.visible=z.visible,A.wireframe=z.wireframe,w===$i?A.side=z.shadowSide!==null?z.shadowSide:z.side:A.side=z.shadowSide!==null?z.shadowSide:S[z.side],A.alphaMap=z.alphaMap,A.alphaTest=z.alphaTest,A.map=z.map,A.clipShadows=z.clipShadows,A.clippingPlanes=z.clippingPlanes,A.clipIntersection=z.clipIntersection,A.displacementMap=z.displacementMap,A.displacementScale=z.displacementScale,A.displacementBias=z.displacementBias,A.wireframeLinewidth=z.wireframeLinewidth,A.linewidth=z.linewidth,j.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const lt=o.properties.get(A);lt.light=j}return A}function U(G,z,j,w,A){if(G.visible===!1)return;if(G.layers.test(z.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&A===$i)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,G.matrixWorld);const it=e.update(G),ft=G.material;if(Array.isArray(ft)){const ot=it.groups;for(let N=0,V=ot.length;N<V;N++){const Z=ot[N],St=ft[Z.materialIndex];if(St&&St.visible){const Tt=O(G,St,w,A);G.onBeforeShadow(o,G,z,j,it,Tt,Z),o.renderBufferDirect(j,null,it,Tt,G,Z),G.onAfterShadow(o,G,z,j,it,Tt,Z)}}}else if(ft.visible){const ot=O(G,ft,w,A);G.onBeforeShadow(o,G,z,j,it,ot,null),o.renderBufferDirect(j,null,it,ot,G,null),G.onAfterShadow(o,G,z,j,it,ot,null)}}const lt=G.children;for(let it=0,ft=lt.length;it<ft;it++)U(lt[it],z,j,w,A)}function K(G){G.target.removeEventListener("dispose",K);for(const j in p){const w=p[j],A=G.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}const Vb={[xh]:yh,[Mh]:bh,[Eh]:Ah,[ys]:Th,[yh]:xh,[bh]:Mh,[Ah]:Eh,[Th]:ys};function Xb(o,e){function i(){let X=!1;const At=new $e;let ut=null;const _t=new $e(0,0,0,0);return{setMask:function(Rt){ut!==Rt&&!X&&(o.colorMask(Rt,Rt,Rt,Rt),ut=Rt)},setLocked:function(Rt){X=Rt},setClear:function(Rt,wt,Jt,qe,ln){ln===!0&&(Rt*=qe,wt*=qe,Jt*=qe),At.set(Rt,wt,Jt,qe),_t.equals(At)===!1&&(o.clearColor(Rt,wt,Jt,qe),_t.copy(At))},reset:function(){X=!1,ut=null,_t.set(-1,0,0,0)}}}function r(){let X=!1,At=!1,ut=null,_t=null,Rt=null;return{setReversed:function(wt){if(At!==wt){const Jt=e.get("EXT_clip_control");At?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT);const qe=Rt;Rt=null,this.setClear(qe)}At=wt},getReversed:function(){return At},setTest:function(wt){wt?xt(o.DEPTH_TEST):Bt(o.DEPTH_TEST)},setMask:function(wt){ut!==wt&&!X&&(o.depthMask(wt),ut=wt)},setFunc:function(wt){if(At&&(wt=Vb[wt]),_t!==wt){switch(wt){case xh:o.depthFunc(o.NEVER);break;case yh:o.depthFunc(o.ALWAYS);break;case Mh:o.depthFunc(o.LESS);break;case ys:o.depthFunc(o.LEQUAL);break;case Eh:o.depthFunc(o.EQUAL);break;case Th:o.depthFunc(o.GEQUAL);break;case bh:o.depthFunc(o.GREATER);break;case Ah:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_t=wt}},setLocked:function(wt){X=wt},setClear:function(wt){Rt!==wt&&(At&&(wt=1-wt),o.clearDepth(wt),Rt=wt)},reset:function(){X=!1,ut=null,_t=null,Rt=null,At=!1}}}function l(){let X=!1,At=null,ut=null,_t=null,Rt=null,wt=null,Jt=null,qe=null,ln=null;return{setTest:function(xe){X||(xe?xt(o.STENCIL_TEST):Bt(o.STENCIL_TEST))},setMask:function(xe){At!==xe&&!X&&(o.stencilMask(xe),At=xe)},setFunc:function(xe,gn,oi){(ut!==xe||_t!==gn||Rt!==oi)&&(o.stencilFunc(xe,gn,oi),ut=xe,_t=gn,Rt=oi)},setOp:function(xe,gn,oi){(wt!==xe||Jt!==gn||qe!==oi)&&(o.stencilOp(xe,gn,oi),wt=xe,Jt=gn,qe=oi)},setLocked:function(xe){X=xe},setClear:function(xe){ln!==xe&&(o.clearStencil(xe),ln=xe)},reset:function(){X=!1,At=null,ut=null,_t=null,Rt=null,wt=null,Jt=null,qe=null,ln=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let v={},S={},x=new WeakMap,M=[],R=null,C=!1,y=null,_=null,B=null,O=null,U=null,K=null,G=null,z=new Be(0,0,0),j=0,w=!1,A=null,I=null,lt=null,it=null,ft=null;const ot=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,V=0;const Z=o.getParameter(o.VERSION);Z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Z)[1]),N=V>=1):Z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),N=V>=2);let St=null,Tt={};const L=o.getParameter(o.SCISSOR_BOX),$=o.getParameter(o.VIEWPORT),yt=new $e().fromArray(L),Y=new $e().fromArray($);function ct(X,At,ut,_t){const Rt=new Uint8Array(4),wt=o.createTexture();o.bindTexture(X,wt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Jt=0;Jt<ut;Jt++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(At,0,o.RGBA,1,1,_t,0,o.RGBA,o.UNSIGNED_BYTE,Rt):o.texImage2D(At+Jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Rt);return wt}const Et={};Et[o.TEXTURE_2D]=ct(o.TEXTURE_2D,o.TEXTURE_2D,1),Et[o.TEXTURE_CUBE_MAP]=ct(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[o.TEXTURE_2D_ARRAY]=ct(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Et[o.TEXTURE_3D]=ct(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),xt(o.DEPTH_TEST),h.setFunc(ys),le(!1),de(r_),xt(o.CULL_FACE),F(Ba);function xt(X){v[X]!==!0&&(o.enable(X),v[X]=!0)}function Bt(X){v[X]!==!1&&(o.disable(X),v[X]=!1)}function zt(X,At){return S[X]!==At?(o.bindFramebuffer(X,At),S[X]=At,X===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=At),X===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=At),!0):!1}function ee(X,At){let ut=M,_t=!1;if(X){ut=x.get(At),ut===void 0&&(ut=[],x.set(At,ut));const Rt=X.textures;if(ut.length!==Rt.length||ut[0]!==o.COLOR_ATTACHMENT0){for(let wt=0,Jt=Rt.length;wt<Jt;wt++)ut[wt]=o.COLOR_ATTACHMENT0+wt;ut.length=Rt.length,_t=!0}}else ut[0]!==o.BACK&&(ut[0]=o.BACK,_t=!0);_t&&o.drawBuffers(ut)}function Ue(X){return R!==X?(o.useProgram(X),R=X,!0):!1}const ue={[pr]:o.FUNC_ADD,[$S]:o.FUNC_SUBTRACT,[tx]:o.FUNC_REVERSE_SUBTRACT};ue[ex]=o.MIN,ue[nx]=o.MAX;const ke={[ix]:o.ZERO,[ax]:o.ONE,[rx]:o.SRC_COLOR,[vh]:o.SRC_ALPHA,[fx]:o.SRC_ALPHA_SATURATE,[ux]:o.DST_COLOR,[ox]:o.DST_ALPHA,[sx]:o.ONE_MINUS_SRC_COLOR,[Sh]:o.ONE_MINUS_SRC_ALPHA,[cx]:o.ONE_MINUS_DST_COLOR,[lx]:o.ONE_MINUS_DST_ALPHA,[hx]:o.CONSTANT_COLOR,[dx]:o.ONE_MINUS_CONSTANT_COLOR,[px]:o.CONSTANT_ALPHA,[mx]:o.ONE_MINUS_CONSTANT_ALPHA};function F(X,At,ut,_t,Rt,wt,Jt,qe,ln,xe){if(X===Ba){C===!0&&(Bt(o.BLEND),C=!1);return}if(C===!1&&(xt(o.BLEND),C=!0),X!==JS){if(X!==y||xe!==w){if((_!==pr||U!==pr)&&(o.blendEquation(o.FUNC_ADD),_=pr,U=pr),xe)switch(X){case vs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case s_:o.blendFunc(o.ONE,o.ONE);break;case o_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case l_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case vs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case s_:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case o_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case l_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}B=null,O=null,K=null,G=null,z.set(0,0,0),j=0,y=X,w=xe}return}Rt=Rt||At,wt=wt||ut,Jt=Jt||_t,(At!==_||Rt!==U)&&(o.blendEquationSeparate(ue[At],ue[Rt]),_=At,U=Rt),(ut!==B||_t!==O||wt!==K||Jt!==G)&&(o.blendFuncSeparate(ke[ut],ke[_t],ke[wt],ke[Jt]),B=ut,O=_t,K=wt,G=Jt),(qe.equals(z)===!1||ln!==j)&&(o.blendColor(qe.r,qe.g,qe.b,ln),z.copy(qe),j=ln),y=X,w=!1}function Mn(X,At){X.side===ta?Bt(o.CULL_FACE):xt(o.CULL_FACE);let ut=X.side===Fn;At&&(ut=!ut),le(ut),X.blending===vs&&X.transparent===!1?F(Ba):F(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const _t=X.stencilWrite;d.setTest(_t),_t&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ce(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?xt(o.SAMPLE_ALPHA_TO_COVERAGE):Bt(o.SAMPLE_ALPHA_TO_COVERAGE)}function le(X){A!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),A=X)}function de(X){X!==jS?(xt(o.CULL_FACE),X!==I&&(X===r_?o.cullFace(o.BACK):X===KS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Bt(o.CULL_FACE),I=X}function qt(X){X!==lt&&(N&&o.lineWidth(X),lt=X)}function Ce(X,At,ut){X?(xt(o.POLYGON_OFFSET_FILL),(it!==At||ft!==ut)&&(o.polygonOffset(At,ut),it=At,ft=ut)):Bt(o.POLYGON_OFFSET_FILL)}function kt(X){X?xt(o.SCISSOR_TEST):Bt(o.SCISSOR_TEST)}function D(X){X===void 0&&(X=o.TEXTURE0+ot-1),St!==X&&(o.activeTexture(X),St=X)}function T(X,At,ut){ut===void 0&&(St===null?ut=o.TEXTURE0+ot-1:ut=St);let _t=Tt[ut];_t===void 0&&(_t={type:void 0,texture:void 0},Tt[ut]=_t),(_t.type!==X||_t.texture!==At)&&(St!==ut&&(o.activeTexture(ut),St=ut),o.bindTexture(X,At||Et[X]),_t.type=X,_t.texture=At)}function et(){const X=Tt[St];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function dt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Mt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function mt(){try{o.texSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Vt(){try{o.texSubImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ct(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pe(){try{o.texStorage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function bt(){try{o.texStorage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function It(){try{o.texImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Wt(){try{o.texImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xt(X){yt.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),yt.copy(X))}function Lt(X){Y.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Y.copy(X))}function Qt(X,At){let ut=p.get(At);ut===void 0&&(ut=new WeakMap,p.set(At,ut));let _t=ut.get(X);_t===void 0&&(_t=o.getUniformBlockIndex(At,X.name),ut.set(X,_t))}function ne(X,At){const _t=p.get(At).get(X);m.get(At)!==_t&&(o.uniformBlockBinding(At,_t,X.__bindingPointIndex),m.set(At,_t))}function Le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},St=null,Tt={},S={},x=new WeakMap,M=[],R=null,C=!1,y=null,_=null,B=null,O=null,U=null,K=null,G=null,z=new Be(0,0,0),j=0,w=!1,A=null,I=null,lt=null,it=null,ft=null,yt.set(0,0,o.canvas.width,o.canvas.height),Y.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:xt,disable:Bt,bindFramebuffer:zt,drawBuffers:ee,useProgram:Ue,setBlending:F,setMaterial:Mn,setFlipSided:le,setCullFace:de,setLineWidth:qt,setPolygonOffset:Ce,setScissorTest:kt,activeTexture:D,bindTexture:T,unbindTexture:et,compressedTexImage2D:dt,compressedTexImage3D:Mt,texImage2D:It,texImage3D:Wt,updateUBOMapping:Qt,uniformBlockBinding:ne,texStorage2D:pe,texStorage3D:bt,texSubImage2D:mt,texSubImage3D:Vt,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Pt,scissor:Xt,viewport:Lt,reset:Le}}function kb(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ae,v=new WeakMap;let S;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(D,T){return M?new OffscreenCanvas(D,T):Tu("canvas")}function C(D,T,et){let dt=1;const Mt=kt(D);if((Mt.width>et||Mt.height>et)&&(dt=et/Math.max(Mt.width,Mt.height)),dt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const mt=Math.floor(dt*Mt.width),Vt=Math.floor(dt*Mt.height);S===void 0&&(S=R(mt,Vt));const Ct=T?R(mt,Vt):S;return Ct.width=mt,Ct.height=Vt,Ct.getContext("2d").drawImage(D,0,0,mt,Vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+mt+"x"+Vt+")."),Ct}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),D;return D}function y(D){return D.generateMipmaps}function _(D){o.generateMipmap(D)}function B(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(D,T,et,dt,Mt=!1){if(D!==null){if(o[D]!==void 0)return o[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let mt=T;if(T===o.RED&&(et===o.FLOAT&&(mt=o.R32F),et===o.HALF_FLOAT&&(mt=o.R16F),et===o.UNSIGNED_BYTE&&(mt=o.R8)),T===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(mt=o.R8UI),et===o.UNSIGNED_SHORT&&(mt=o.R16UI),et===o.UNSIGNED_INT&&(mt=o.R32UI),et===o.BYTE&&(mt=o.R8I),et===o.SHORT&&(mt=o.R16I),et===o.INT&&(mt=o.R32I)),T===o.RG&&(et===o.FLOAT&&(mt=o.RG32F),et===o.HALF_FLOAT&&(mt=o.RG16F),et===o.UNSIGNED_BYTE&&(mt=o.RG8)),T===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(mt=o.RG8UI),et===o.UNSIGNED_SHORT&&(mt=o.RG16UI),et===o.UNSIGNED_INT&&(mt=o.RG32UI),et===o.BYTE&&(mt=o.RG8I),et===o.SHORT&&(mt=o.RG16I),et===o.INT&&(mt=o.RG32I)),T===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(mt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(mt=o.RGB16UI),et===o.UNSIGNED_INT&&(mt=o.RGB32UI),et===o.BYTE&&(mt=o.RGB8I),et===o.SHORT&&(mt=o.RGB16I),et===o.INT&&(mt=o.RGB32I)),T===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(mt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(mt=o.RGBA16UI),et===o.UNSIGNED_INT&&(mt=o.RGBA32UI),et===o.BYTE&&(mt=o.RGBA8I),et===o.SHORT&&(mt=o.RGBA16I),et===o.INT&&(mt=o.RGBA32I)),T===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(mt=o.RGB9_E5),T===o.RGBA){const Vt=Mt?Mu:be.getTransfer(dt);et===o.FLOAT&&(mt=o.RGBA32F),et===o.HALF_FLOAT&&(mt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(mt=Vt===Pe?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(mt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(mt=o.RGB5_A1)}return(mt===o.R16F||mt===o.R32F||mt===o.RG16F||mt===o.RG32F||mt===o.RGBA16F||mt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),mt}function U(D,T){let et;return D?T===null||T===Sr||T===Ts?et=o.DEPTH24_STENCIL8:T===ea?et=o.DEPTH32F_STENCIL8:T===Do&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Sr||T===Ts?et=o.DEPTH_COMPONENT24:T===ea?et=o.DEPTH_COMPONENT32F:T===Do&&(et=o.DEPTH_COMPONENT16),et}function K(D,T){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==vi&&D.minFilter!==Ai?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function G(D){const T=D.target;T.removeEventListener("dispose",G),j(T),T.isVideoTexture&&v.delete(T)}function z(D){const T=D.target;T.removeEventListener("dispose",z),A(T)}function j(D){const T=r.get(D);if(T.__webglInit===void 0)return;const et=D.source,dt=x.get(et);if(dt){const Mt=dt[T.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&w(D),Object.keys(dt).length===0&&x.delete(et)}r.remove(D)}function w(D){const T=r.get(D);o.deleteTexture(T.__webglTexture);const et=D.source,dt=x.get(et);delete dt[T.__cacheKey],h.memory.textures--}function A(D){const T=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(T.__webglFramebuffer[dt]))for(let Mt=0;Mt<T.__webglFramebuffer[dt].length;Mt++)o.deleteFramebuffer(T.__webglFramebuffer[dt][Mt]);else o.deleteFramebuffer(T.__webglFramebuffer[dt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[dt])}else{if(Array.isArray(T.__webglFramebuffer))for(let dt=0;dt<T.__webglFramebuffer.length;dt++)o.deleteFramebuffer(T.__webglFramebuffer[dt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let dt=0;dt<T.__webglColorRenderbuffer.length;dt++)T.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[dt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const et=D.textures;for(let dt=0,Mt=et.length;dt<Mt;dt++){const mt=r.get(et[dt]);mt.__webglTexture&&(o.deleteTexture(mt.__webglTexture),h.memory.textures--),r.remove(et[dt])}r.remove(D)}let I=0;function lt(){I=0}function it(){const D=I;return D>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),I+=1,D}function ft(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function ot(D,T){const et=r.get(D);if(D.isVideoTexture&&qt(D),D.isRenderTargetTexture===!1&&D.version>0&&et.__version!==D.version){const dt=D.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(et,D,T);return}}i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+T)}function N(D,T){const et=r.get(D);if(D.version>0&&et.__version!==D.version){Y(et,D,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+T)}function V(D,T){const et=r.get(D);if(D.version>0&&et.__version!==D.version){Y(et,D,T);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+T)}function Z(D,T){const et=r.get(D);if(D.version>0&&et.__version!==D.version){ct(et,D,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+T)}const St={[wh]:o.REPEAT,[gr]:o.CLAMP_TO_EDGE,[Dh]:o.MIRRORED_REPEAT},Tt={[vi]:o.NEAREST,[bx]:o.NEAREST_MIPMAP_NEAREST,[Yl]:o.NEAREST_MIPMAP_LINEAR,[Ai]:o.LINEAR,[Gf]:o.LINEAR_MIPMAP_NEAREST,[_r]:o.LINEAR_MIPMAP_LINEAR},L={[Dx]:o.NEVER,[Px]:o.ALWAYS,[Ux]:o.LESS,[pv]:o.LEQUAL,[Lx]:o.EQUAL,[zx]:o.GEQUAL,[Nx]:o.GREATER,[Ox]:o.NOTEQUAL};function $(D,T){if(T.type===ea&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ai||T.magFilter===Gf||T.magFilter===Yl||T.magFilter===_r||T.minFilter===Ai||T.minFilter===Gf||T.minFilter===Yl||T.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,St[T.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,St[T.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,St[T.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,Tt[T.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,Tt[T.minFilter]),T.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,L[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===vi||T.minFilter!==Yl&&T.minFilter!==_r||T.type===ea&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function yt(D,T){let et=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",G));const dt=T.source;let Mt=x.get(dt);Mt===void 0&&(Mt={},x.set(dt,Mt));const mt=ft(T);if(mt!==D.__cacheKey){Mt[mt]===void 0&&(Mt[mt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),Mt[mt].usedTimes++;const Vt=Mt[D.__cacheKey];Vt!==void 0&&(Mt[D.__cacheKey].usedTimes--,Vt.usedTimes===0&&w(T)),D.__cacheKey=mt,D.__webglTexture=Mt[mt].texture}return et}function Y(D,T,et){let dt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(dt=o.TEXTURE_3D);const Mt=yt(D,T),mt=T.source;i.bindTexture(dt,D.__webglTexture,o.TEXTURE0+et);const Vt=r.get(mt);if(mt.version!==Vt.__version||Mt===!0){i.activeTexture(o.TEXTURE0+et);const Ct=be.getPrimaries(be.workingColorSpace),Pt=T.colorSpace===Pa?null:be.getPrimaries(T.colorSpace),pe=T.colorSpace===Pa||Ct===Pt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let bt=C(T.image,!1,l.maxTextureSize);bt=Ce(T,bt);const It=c.convert(T.format,T.colorSpace),Wt=c.convert(T.type);let Xt=O(T.internalFormat,It,Wt,T.colorSpace,T.isVideoTexture);$(dt,T);let Lt;const Qt=T.mipmaps,ne=T.isVideoTexture!==!0,Le=Vt.__version===void 0||Mt===!0,X=mt.dataReady,At=K(T,bt);if(T.isDepthTexture)Xt=U(T.format===bs,T.type),Le&&(ne?i.texStorage2D(o.TEXTURE_2D,1,Xt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Xt,bt.width,bt.height,0,It,Wt,null));else if(T.isDataTexture)if(Qt.length>0){ne&&Le&&i.texStorage2D(o.TEXTURE_2D,At,Xt,Qt[0].width,Qt[0].height);for(let ut=0,_t=Qt.length;ut<_t;ut++)Lt=Qt[ut],ne?X&&i.texSubImage2D(o.TEXTURE_2D,ut,0,0,Lt.width,Lt.height,It,Wt,Lt.data):i.texImage2D(o.TEXTURE_2D,ut,Xt,Lt.width,Lt.height,0,It,Wt,Lt.data);T.generateMipmaps=!1}else ne?(Le&&i.texStorage2D(o.TEXTURE_2D,At,Xt,bt.width,bt.height),X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,bt.width,bt.height,It,Wt,bt.data)):i.texImage2D(o.TEXTURE_2D,0,Xt,bt.width,bt.height,0,It,Wt,bt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ne&&Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,At,Xt,Qt[0].width,Qt[0].height,bt.depth);for(let ut=0,_t=Qt.length;ut<_t;ut++)if(Lt=Qt[ut],T.format!==_i)if(It!==null)if(ne){if(X)if(T.layerUpdates.size>0){const Rt=D_(Lt.width,Lt.height,T.format,T.type);for(const wt of T.layerUpdates){const Jt=Lt.data.subarray(wt*Rt/Lt.data.BYTES_PER_ELEMENT,(wt+1)*Rt/Lt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ut,0,0,wt,Lt.width,Lt.height,1,It,Jt)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ut,0,0,0,Lt.width,Lt.height,bt.depth,It,Lt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ut,Xt,Lt.width,Lt.height,bt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?X&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ut,0,0,0,Lt.width,Lt.height,bt.depth,It,Wt,Lt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ut,Xt,Lt.width,Lt.height,bt.depth,0,It,Wt,Lt.data)}else{ne&&Le&&i.texStorage2D(o.TEXTURE_2D,At,Xt,Qt[0].width,Qt[0].height);for(let ut=0,_t=Qt.length;ut<_t;ut++)Lt=Qt[ut],T.format!==_i?It!==null?ne?X&&i.compressedTexSubImage2D(o.TEXTURE_2D,ut,0,0,Lt.width,Lt.height,It,Lt.data):i.compressedTexImage2D(o.TEXTURE_2D,ut,Xt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?X&&i.texSubImage2D(o.TEXTURE_2D,ut,0,0,Lt.width,Lt.height,It,Wt,Lt.data):i.texImage2D(o.TEXTURE_2D,ut,Xt,Lt.width,Lt.height,0,It,Wt,Lt.data)}else if(T.isDataArrayTexture)if(ne){if(Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,At,Xt,bt.width,bt.height,bt.depth),X)if(T.layerUpdates.size>0){const ut=D_(bt.width,bt.height,T.format,T.type);for(const _t of T.layerUpdates){const Rt=bt.data.subarray(_t*ut/bt.data.BYTES_PER_ELEMENT,(_t+1)*ut/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,bt.width,bt.height,1,It,Wt,Rt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,It,Wt,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Xt,bt.width,bt.height,bt.depth,0,It,Wt,bt.data);else if(T.isData3DTexture)ne?(Le&&i.texStorage3D(o.TEXTURE_3D,At,Xt,bt.width,bt.height,bt.depth),X&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,It,Wt,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Xt,bt.width,bt.height,bt.depth,0,It,Wt,bt.data);else if(T.isFramebufferTexture){if(Le)if(ne)i.texStorage2D(o.TEXTURE_2D,At,Xt,bt.width,bt.height);else{let ut=bt.width,_t=bt.height;for(let Rt=0;Rt<At;Rt++)i.texImage2D(o.TEXTURE_2D,Rt,Xt,ut,_t,0,It,Wt,null),ut>>=1,_t>>=1}}else if(Qt.length>0){if(ne&&Le){const ut=kt(Qt[0]);i.texStorage2D(o.TEXTURE_2D,At,Xt,ut.width,ut.height)}for(let ut=0,_t=Qt.length;ut<_t;ut++)Lt=Qt[ut],ne?X&&i.texSubImage2D(o.TEXTURE_2D,ut,0,0,It,Wt,Lt):i.texImage2D(o.TEXTURE_2D,ut,Xt,It,Wt,Lt);T.generateMipmaps=!1}else if(ne){if(Le){const ut=kt(bt);i.texStorage2D(o.TEXTURE_2D,At,Xt,ut.width,ut.height)}X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,It,Wt,bt)}else i.texImage2D(o.TEXTURE_2D,0,Xt,It,Wt,bt);y(T)&&_(dt),Vt.__version=mt.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ct(D,T,et){if(T.image.length!==6)return;const dt=yt(D,T),Mt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+et);const mt=r.get(Mt);if(Mt.version!==mt.__version||dt===!0){i.activeTexture(o.TEXTURE0+et);const Vt=be.getPrimaries(be.workingColorSpace),Ct=T.colorSpace===Pa?null:be.getPrimaries(T.colorSpace),Pt=T.colorSpace===Pa||Vt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const pe=T.isCompressedTexture||T.image[0].isCompressedTexture,bt=T.image[0]&&T.image[0].isDataTexture,It=[];for(let _t=0;_t<6;_t++)!pe&&!bt?It[_t]=C(T.image[_t],!0,l.maxCubemapSize):It[_t]=bt?T.image[_t].image:T.image[_t],It[_t]=Ce(T,It[_t]);const Wt=It[0],Xt=c.convert(T.format,T.colorSpace),Lt=c.convert(T.type),Qt=O(T.internalFormat,Xt,Lt,T.colorSpace),ne=T.isVideoTexture!==!0,Le=mt.__version===void 0||dt===!0,X=Mt.dataReady;let At=K(T,Wt);$(o.TEXTURE_CUBE_MAP,T);let ut;if(pe){ne&&Le&&i.texStorage2D(o.TEXTURE_CUBE_MAP,At,Qt,Wt.width,Wt.height);for(let _t=0;_t<6;_t++){ut=It[_t].mipmaps;for(let Rt=0;Rt<ut.length;Rt++){const wt=ut[Rt];T.format!==_i?Xt!==null?ne?X&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt,0,0,wt.width,wt.height,Xt,wt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt,Qt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt,0,0,wt.width,wt.height,Xt,Lt,wt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt,Qt,wt.width,wt.height,0,Xt,Lt,wt.data)}}}else{if(ut=T.mipmaps,ne&&Le){ut.length>0&&At++;const _t=kt(It[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,At,Qt,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(bt){ne?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,It[_t].width,It[_t].height,Xt,Lt,It[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Qt,It[_t].width,It[_t].height,0,Xt,Lt,It[_t].data);for(let Rt=0;Rt<ut.length;Rt++){const Jt=ut[Rt].image[_t].image;ne?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt+1,0,0,Jt.width,Jt.height,Xt,Lt,Jt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt+1,Qt,Jt.width,Jt.height,0,Xt,Lt,Jt.data)}}else{ne?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Xt,Lt,It[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Qt,Xt,Lt,It[_t]);for(let Rt=0;Rt<ut.length;Rt++){const wt=ut[Rt];ne?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt+1,0,0,Xt,Lt,wt.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt+1,Qt,Xt,Lt,wt.image[_t])}}}y(T)&&_(o.TEXTURE_CUBE_MAP),mt.__version=Mt.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Et(D,T,et,dt,Mt,mt){const Vt=c.convert(et.format,et.colorSpace),Ct=c.convert(et.type),Pt=O(et.internalFormat,Vt,Ct,et.colorSpace),pe=r.get(T),bt=r.get(et);if(bt.__renderTarget=T,!pe.__hasExternalTextures){const It=Math.max(1,T.width>>mt),Wt=Math.max(1,T.height>>mt);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?i.texImage3D(Mt,mt,Pt,It,Wt,T.depth,0,Vt,Ct,null):i.texImage2D(Mt,mt,Pt,It,Wt,0,Vt,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),de(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,Mt,bt.__webglTexture,0,le(T)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,Mt,bt.__webglTexture,mt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function xt(D,T,et){if(o.bindRenderbuffer(o.RENDERBUFFER,D),T.depthBuffer){const dt=T.depthTexture,Mt=dt&&dt.isDepthTexture?dt.type:null,mt=U(T.stencilBuffer,Mt),Vt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=le(T);de(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ct,mt,T.width,T.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ct,mt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,mt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Vt,o.RENDERBUFFER,D)}else{const dt=T.textures;for(let Mt=0;Mt<dt.length;Mt++){const mt=dt[Mt],Vt=c.convert(mt.format,mt.colorSpace),Ct=c.convert(mt.type),Pt=O(mt.internalFormat,Vt,Ct,mt.colorSpace),pe=le(T);et&&de(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,pe,Pt,T.width,T.height):de(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,pe,Pt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Pt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Bt(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=r.get(T.depthTexture);dt.__renderTarget=T,(!dt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ot(T.depthTexture,0);const Mt=dt.__webglTexture,mt=le(T);if(T.depthTexture.format===Ss)de(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0,mt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0);else if(T.depthTexture.format===bs)de(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0,mt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function zt(D){const T=r.get(D),et=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const dt=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),dt){const Mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,dt.removeEventListener("dispose",Mt)};dt.addEventListener("dispose",Mt),T.__depthDisposeCallback=Mt}T.__boundDepthTexture=dt}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");Bt(T.__webglFramebuffer,D)}else if(et){T.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[dt]),T.__webglDepthbuffer[dt]===void 0)T.__webglDepthbuffer[dt]=o.createRenderbuffer(),xt(T.__webglDepthbuffer[dt],D,!1);else{const Mt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,mt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),xt(T.__webglDepthbuffer,D,!1);else{const dt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Mt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,dt,o.RENDERBUFFER,Mt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ee(D,T,et){const dt=r.get(D);T!==void 0&&Et(dt.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&zt(D)}function Ue(D){const T=D.texture,et=r.get(D),dt=r.get(T);D.addEventListener("dispose",z);const Mt=D.textures,mt=D.isWebGLCubeRenderTarget===!0,Vt=Mt.length>1;if(Vt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=T.version,h.memory.textures++),mt){et.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[Ct]=[];for(let Pt=0;Pt<T.mipmaps.length;Pt++)et.__webglFramebuffer[Ct][Pt]=o.createFramebuffer()}else et.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let Ct=0;Ct<T.mipmaps.length;Ct++)et.__webglFramebuffer[Ct]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Vt)for(let Ct=0,Pt=Mt.length;Ct<Pt;Ct++){const pe=r.get(Mt[Ct]);pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture(),h.memory.textures++)}if(D.samples>0&&de(D)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Ct=0;Ct<Mt.length;Ct++){const Pt=Mt[Ct];et.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Ct]);const pe=c.convert(Pt.format,Pt.colorSpace),bt=c.convert(Pt.type),It=O(Pt.internalFormat,pe,bt,Pt.colorSpace,D.isXRRenderTarget===!0),Wt=le(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Wt,It,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,et.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),xt(et.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(mt){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),$(o.TEXTURE_CUBE_MAP,T);for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0)for(let Pt=0;Pt<T.mipmaps.length;Pt++)Et(et.__webglFramebuffer[Ct][Pt],D,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Pt);else Et(et.__webglFramebuffer[Ct],D,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);y(T)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Vt){for(let Ct=0,Pt=Mt.length;Ct<Pt;Ct++){const pe=Mt[Ct],bt=r.get(pe);i.bindTexture(o.TEXTURE_2D,bt.__webglTexture),$(o.TEXTURE_2D,pe),Et(et.__webglFramebuffer,D,pe,o.COLOR_ATTACHMENT0+Ct,o.TEXTURE_2D,0),y(pe)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ct=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,dt.__webglTexture),$(Ct,T),T.mipmaps&&T.mipmaps.length>0)for(let Pt=0;Pt<T.mipmaps.length;Pt++)Et(et.__webglFramebuffer[Pt],D,T,o.COLOR_ATTACHMENT0,Ct,Pt);else Et(et.__webglFramebuffer,D,T,o.COLOR_ATTACHMENT0,Ct,0);y(T)&&_(Ct),i.unbindTexture()}D.depthBuffer&&zt(D)}function ue(D){const T=D.textures;for(let et=0,dt=T.length;et<dt;et++){const Mt=T[et];if(y(Mt)){const mt=B(D),Vt=r.get(Mt).__webglTexture;i.bindTexture(mt,Vt),_(mt),i.unbindTexture()}}}const ke=[],F=[];function Mn(D){if(D.samples>0){if(de(D)===!1){const T=D.textures,et=D.width,dt=D.height;let Mt=o.COLOR_BUFFER_BIT;const mt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Vt=r.get(D),Ct=T.length>1;if(Ct)for(let Pt=0;Pt<T.length;Pt++)i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let Pt=0;Pt<T.length;Pt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[Pt]);const pe=r.get(T[Pt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,pe,0)}o.blitFramebuffer(0,0,et,dt,0,0,et,dt,Mt,o.NEAREST),m===!0&&(ke.length=0,F.length=0,ke.push(o.COLOR_ATTACHMENT0+Pt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ke.push(mt),F.push(mt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,F)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ke))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let Pt=0;Pt<T.length;Pt++){i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[Pt]);const pe=r.get(T[Pt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,pe,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const T=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function le(D){return Math.min(l.maxSamples,D.samples)}function de(D){const T=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function qt(D){const T=h.render.frame;v.get(D)!==T&&(v.set(D,T),D.update())}function Ce(D,T){const et=D.colorSpace,dt=D.format,Mt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||et!==As&&et!==Pa&&(be.getTransfer(et)===Pe?(dt!==_i||Mt!==aa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),T}function kt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=it,this.resetTextureUnits=lt,this.setTexture2D=ot,this.setTexture2DArray=N,this.setTexture3D=V,this.setTextureCube=Z,this.rebindTextures=ee,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Mn,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=de}function qb(o,e){function i(r,l=Pa){let c;const h=be.getTransfer(l);if(r===aa)return o.UNSIGNED_BYTE;if(r===ld)return o.UNSIGNED_SHORT_4_4_4_4;if(r===ud)return o.UNSIGNED_SHORT_5_5_5_1;if(r===sv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===av)return o.BYTE;if(r===rv)return o.SHORT;if(r===Do)return o.UNSIGNED_SHORT;if(r===od)return o.INT;if(r===Sr)return o.UNSIGNED_INT;if(r===ea)return o.FLOAT;if(r===Uo)return o.HALF_FLOAT;if(r===ov)return o.ALPHA;if(r===lv)return o.RGB;if(r===_i)return o.RGBA;if(r===uv)return o.LUMINANCE;if(r===cv)return o.LUMINANCE_ALPHA;if(r===Ss)return o.DEPTH_COMPONENT;if(r===bs)return o.DEPTH_STENCIL;if(r===fv)return o.RED;if(r===cd)return o.RED_INTEGER;if(r===hv)return o.RG;if(r===fd)return o.RG_INTEGER;if(r===hd)return o.RGBA_INTEGER;if(r===mu||r===gu||r===_u||r===vu)if(h===Pe)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===mu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_u)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===mu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===gu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_u)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===vu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Uh||r===Lh||r===Nh||r===Oh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Uh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Lh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Nh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Oh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zh||r===Ph||r===Bh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===zh||r===Ph)return h===Pe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Bh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ih||r===Fh||r===Hh||r===Gh||r===Vh||r===Xh||r===kh||r===qh||r===Wh||r===Yh||r===Zh||r===jh||r===Kh||r===Qh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Ih)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Hh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Gh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Xh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===kh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===qh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Zh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Kh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Qh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Su||r===Jh||r===$h)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Su)return h===Pe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$h)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===dv||r===td||r===ed||r===nd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Su)return c.COMPRESSED_RED_RGTC1_EXT;if(r===td)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ed)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===nd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ts?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const Wb={type:"move"};class gh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new st,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new st),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new st,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new st),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,r),_=this._getHandJoint(p,C);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const v=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],x=v.position.distanceTo(S.position),M=.02,R=.005;p.inputState.pinching&&x>M+R?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-R&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Wb)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new fu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const Yb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Hn,c=e.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new sa({vertexShader:Yb,fragmentShader:Zb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ri(new Po(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kb extends Cs{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,v=null,S=null,x=null,M=null,R=null;const C=new jb,y=i.getContextAttributes();let _=null,B=null;const O=[],U=[],K=new Ae;let G=null;const z=new mi;z.viewport=new $e;const j=new mi;j.viewport=new $e;const w=[z,j],A=new gy;let I=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ct=O[Y];return ct===void 0&&(ct=new gh,O[Y]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(Y){let ct=O[Y];return ct===void 0&&(ct=new gh,O[Y]=ct),ct.getGripSpace()},this.getHand=function(Y){let ct=O[Y];return ct===void 0&&(ct=new gh,O[Y]=ct),ct.getHandSpace()};function it(Y){const ct=U.indexOf(Y.inputSource);if(ct===-1)return;const Et=O[ct];Et!==void 0&&(Et.update(Y.inputSource,Y.frame,p||h),Et.dispatchEvent({type:Y.type,data:Y.inputSource}))}function ft(){l.removeEventListener("select",it),l.removeEventListener("selectstart",it),l.removeEventListener("selectend",it),l.removeEventListener("squeeze",it),l.removeEventListener("squeezestart",it),l.removeEventListener("squeezeend",it),l.removeEventListener("end",ft),l.removeEventListener("inputsourceschange",ot);for(let Y=0;Y<O.length;Y++){const ct=U[Y];ct!==null&&(U[Y]=null,O[Y].disconnect(ct))}I=null,lt=null,C.reset(),e.setRenderTarget(_),M=null,x=null,S=null,l=null,B=null,yt.stop(),r.isPresenting=!1,e.setPixelRatio(G),e.setSize(K.width,K.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){c=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){d=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Y){p=Y},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return S},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(Y){if(l=Y,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",it),l.addEventListener("selectstart",it),l.addEventListener("selectend",it),l.addEventListener("squeeze",it),l.addEventListener("squeezestart",it),l.addEventListener("squeezeend",it),l.addEventListener("end",ft),l.addEventListener("inputsourceschange",ot),y.xrCompatible!==!0&&await i.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(K),l.renderState.layers===void 0){const ct={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,ct),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),B=new xr(M.framebufferWidth,M.framebufferHeight,{format:_i,type:aa,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ct=null,Et=null,xt=null;y.depth&&(xt=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ct=y.stencil?bs:Ss,Et=y.stencil?Ts:Sr);const Bt={colorFormat:i.RGBA8,depthFormat:xt,scaleFactor:c};S=new XRWebGLBinding(l,i),x=S.createProjectionLayer(Bt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),B=new xr(x.textureWidth,x.textureHeight,{format:_i,type:aa,depthTexture:new Rv(x.textureWidth,x.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),yt.setContext(l),yt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function ot(Y){for(let ct=0;ct<Y.removed.length;ct++){const Et=Y.removed[ct],xt=U.indexOf(Et);xt>=0&&(U[xt]=null,O[xt].disconnect(Et))}for(let ct=0;ct<Y.added.length;ct++){const Et=Y.added[ct];let xt=U.indexOf(Et);if(xt===-1){for(let zt=0;zt<O.length;zt++)if(zt>=U.length){U.push(Et),xt=zt;break}else if(U[zt]===null){U[zt]=Et,xt=zt;break}if(xt===-1)break}const Bt=O[xt];Bt&&Bt.connect(Et)}}const N=new st,V=new st;function Z(Y,ct,Et){N.setFromMatrixPosition(ct.matrixWorld),V.setFromMatrixPosition(Et.matrixWorld);const xt=N.distanceTo(V),Bt=ct.projectionMatrix.elements,zt=Et.projectionMatrix.elements,ee=Bt[14]/(Bt[10]-1),Ue=Bt[14]/(Bt[10]+1),ue=(Bt[9]+1)/Bt[5],ke=(Bt[9]-1)/Bt[5],F=(Bt[8]-1)/Bt[0],Mn=(zt[8]+1)/zt[0],le=ee*F,de=ee*Mn,qt=xt/(-F+Mn),Ce=qt*-F;if(ct.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ce),Y.translateZ(qt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Bt[10]===-1)Y.projectionMatrix.copy(ct.projectionMatrix),Y.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const kt=ee+qt,D=Ue+qt,T=le-Ce,et=de+(xt-Ce),dt=ue*Ue/D*kt,Mt=ke*Ue/D*kt;Y.projectionMatrix.makePerspective(T,et,dt,Mt,kt,D),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function St(Y,ct){ct===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ct.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(l===null)return;let ct=Y.near,Et=Y.far;C.texture!==null&&(C.depthNear>0&&(ct=C.depthNear),C.depthFar>0&&(Et=C.depthFar)),A.near=j.near=z.near=ct,A.far=j.far=z.far=Et,(I!==A.near||lt!==A.far)&&(l.updateRenderState({depthNear:A.near,depthFar:A.far}),I=A.near,lt=A.far),z.layers.mask=Y.layers.mask|2,j.layers.mask=Y.layers.mask|4,A.layers.mask=z.layers.mask|j.layers.mask;const xt=Y.parent,Bt=A.cameras;St(A,xt);for(let zt=0;zt<Bt.length;zt++)St(Bt[zt],xt);Bt.length===2?Z(A,z,j):A.projectionMatrix.copy(z.projectionMatrix),Tt(Y,A,xt)};function Tt(Y,ct,Et){Et===null?Y.matrix.copy(ct.matrixWorld):(Y.matrix.copy(Et.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ct.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ct.projectionMatrix),Y.projectionMatrixInverse.copy(ct.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=id*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(Y){m=Y,x!==null&&(x.fixedFoveation=Y),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Y)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(A)};let L=null;function $(Y,ct){if(v=ct.getViewerPose(p||h),R=ct,v!==null){const Et=v.views;M!==null&&(e.setRenderTargetFramebuffer(B,M.framebuffer),e.setRenderTarget(B));let xt=!1;Et.length!==A.cameras.length&&(A.cameras.length=0,xt=!0);for(let zt=0;zt<Et.length;zt++){const ee=Et[zt];let Ue=null;if(M!==null)Ue=M.getViewport(ee);else{const ke=S.getViewSubImage(x,ee);Ue=ke.viewport,zt===0&&(e.setRenderTargetTextures(B,ke.colorTexture,x.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(B))}let ue=w[zt];ue===void 0&&(ue=new mi,ue.layers.enable(zt),ue.viewport=new $e,w[zt]=ue),ue.matrix.fromArray(ee.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(ee.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),zt===0&&(A.matrix.copy(ue.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),xt===!0&&A.cameras.push(ue)}const Bt=l.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")){const zt=S.getDepthInformation(Et[0]);zt&&zt.isValid&&zt.texture&&C.init(e,zt,l.renderState)}}for(let Et=0;Et<O.length;Et++){const xt=U[Et],Bt=O[Et];xt!==null&&Bt!==void 0&&Bt.update(xt,ct,p||h)}L&&L(Y,ct),ct.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ct}),R=null}const yt=new wv;yt.setAnimationLoop($),this.setAnimationLoop=function(Y){L=Y},this.dispose=function(){}}}const fr=new ra,Qb=new on;function Jb(o,e){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,Ev(o)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,B,O,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(y,_):_.isMeshToonMaterial?(c(y,_),S(y,_)):_.isMeshPhongMaterial?(c(y,_),v(y,_)):_.isMeshStandardMaterial?(c(y,_),x(y,_),_.isMeshPhysicalMaterial&&M(y,_,U)):_.isMeshMatcapMaterial?(c(y,_),R(y,_)):_.isMeshDepthMaterial?c(y,_):_.isMeshDistanceMaterial?(c(y,_),C(y,_)):_.isMeshNormalMaterial?c(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,B,O):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Fn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Fn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const B=e.get(_),O=B.envMap,U=B.envMapRotation;O&&(y.envMap.value=O,fr.copy(U),fr.x*=-1,fr.y*=-1,fr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),y.envMapRotation.value.setFromMatrix4(Qb.makeRotationFromEuler(fr)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,B,O){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*B,y.scale.value=O*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function v(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function S(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,B){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Fn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=B.texture,y.transmissionSamplerSize.value.set(B.width,B.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function R(y,_){_.matcap&&(y.matcap.value=_.matcap)}function C(y,_){const B=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(B.matrixWorld),y.nearDistance.value=B.shadow.camera.near,y.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function $b(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,O){const U=O.program;r.uniformBlockBinding(B,U)}function p(B,O){let U=l[B.id];U===void 0&&(R(B),U=v(B),l[B.id]=U,B.addEventListener("dispose",y));const K=O.program;r.updateUBOMapping(B,K);const G=e.render.frame;c[B.id]!==G&&(x(B),c[B.id]=G)}function v(B){const O=S();B.__bindingPointIndex=O;const U=o.createBuffer(),K=B.__size,G=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,K,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,U),U}function S(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(B){const O=l[B.id],U=B.uniforms,K=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let G=0,z=U.length;G<z;G++){const j=Array.isArray(U[G])?U[G]:[U[G]];for(let w=0,A=j.length;w<A;w++){const I=j[w];if(M(I,G,w,K)===!0){const lt=I.__offset,it=Array.isArray(I.value)?I.value:[I.value];let ft=0;for(let ot=0;ot<it.length;ot++){const N=it[ot],V=C(N);typeof N=="number"||typeof N=="boolean"?(I.__data[0]=N,o.bufferSubData(o.UNIFORM_BUFFER,lt+ft,I.__data)):N.isMatrix3?(I.__data[0]=N.elements[0],I.__data[1]=N.elements[1],I.__data[2]=N.elements[2],I.__data[3]=0,I.__data[4]=N.elements[3],I.__data[5]=N.elements[4],I.__data[6]=N.elements[5],I.__data[7]=0,I.__data[8]=N.elements[6],I.__data[9]=N.elements[7],I.__data[10]=N.elements[8],I.__data[11]=0):(N.toArray(I.__data,ft),ft+=V.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,lt,I.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(B,O,U,K){const G=B.value,z=O+"_"+U;if(K[z]===void 0)return typeof G=="number"||typeof G=="boolean"?K[z]=G:K[z]=G.clone(),!0;{const j=K[z];if(typeof G=="number"||typeof G=="boolean"){if(j!==G)return K[z]=G,!0}else if(j.equals(G)===!1)return j.copy(G),!0}return!1}function R(B){const O=B.uniforms;let U=0;const K=16;for(let z=0,j=O.length;z<j;z++){const w=Array.isArray(O[z])?O[z]:[O[z]];for(let A=0,I=w.length;A<I;A++){const lt=w[A],it=Array.isArray(lt.value)?lt.value:[lt.value];for(let ft=0,ot=it.length;ft<ot;ft++){const N=it[ft],V=C(N),Z=U%K,St=Z%V.boundary,Tt=Z+St;U+=St,Tt!==0&&K-Tt<V.storage&&(U+=K-Tt),lt.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=U,U+=V.storage}}}const G=U%K;return G>0&&(U+=K-G),B.__size=U,B.__cache={},this}function C(B){const O={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(O.boundary=4,O.storage=4):B.isVector2?(O.boundary=8,O.storage=8):B.isVector3||B.isColor?(O.boundary=16,O.storage=12):B.isVector4?(O.boundary=16,O.storage=16):B.isMatrix3?(O.boundary=48,O.storage=48):B.isMatrix4?(O.boundary=64,O.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),O}function y(B){const O=B.target;O.removeEventListener("dispose",y);const U=h.indexOf(O.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function _(){for(const B in l)o.deleteBuffer(l[B]);h=[],l={},c={}}return{bind:m,update:p,dispose:_}}class tA{constructor(e={}){const{canvas:i=Ix(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const R=new Uint32Array(4),C=new Int32Array(4);let y=null,_=null;const B=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=Ia,this.toneMappingExposure=1;const U=this;let K=!1,G=0,z=0,j=null,w=-1,A=null;const I=new $e,lt=new $e;let it=null;const ft=new Be(0);let ot=0,N=i.width,V=i.height,Z=1,St=null,Tt=null;const L=new $e(0,0,N,V),$=new $e(0,0,N,V);let yt=!1;const Y=new Av;let ct=!1,Et=!1;const xt=new on,Bt=new on,zt=new st,ee=new $e,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function ke(){return j===null?Z:1}let F=r;function Mn(b,k){return i.getContext(b,k)}try{const b={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${sd}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",Rt,!1),i.addEventListener("webglcontextcreationerror",wt,!1),F===null){const k="webgl2";if(F=Mn(k,b),F===null)throw Mn(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let le,de,qt,Ce,kt,D,T,et,dt,Mt,mt,Vt,Ct,Pt,pe,bt,It,Wt,Xt,Lt,Qt,ne,Le,X;function At(){le=new uT(F),le.init(),ne=new qb(F,le),de=new iT(F,le,e,ne),qt=new Xb(F,le),de.reverseDepthBuffer&&x&&qt.buffers.depth.setReversed(!0),Ce=new hT(F),kt=new Db,D=new kb(F,le,qt,kt,de,ne,Ce),T=new rT(U),et=new lT(U),dt=new Sy(F),Le=new eT(F,dt),Mt=new cT(F,dt,Ce,Le),mt=new pT(F,Mt,dt,Ce),Xt=new dT(F,de,D),bt=new aT(kt),Vt=new wb(U,T,et,le,de,Le,bt),Ct=new Jb(U,kt),Pt=new Lb,pe=new Ib(le),Wt=new tT(U,T,et,qt,mt,M,m),It=new Gb(U,mt,de),X=new $b(F,Ce,de,qt),Lt=new nT(F,le,Ce),Qt=new fT(F,le,Ce),Ce.programs=Vt.programs,U.capabilities=de,U.extensions=le,U.properties=kt,U.renderLists=Pt,U.shadowMap=It,U.state=qt,U.info=Ce}At();const ut=new Kb(U,F);this.xr=ut,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=le.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=le.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(b){b!==void 0&&(Z=b,this.setSize(N,V,!1))},this.getSize=function(b){return b.set(N,V)},this.setSize=function(b,k,nt=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=b,V=k,i.width=Math.floor(b*Z),i.height=Math.floor(k*Z),nt===!0&&(i.style.width=b+"px",i.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(N*Z,V*Z).floor()},this.setDrawingBufferSize=function(b,k,nt){N=b,V=k,Z=nt,i.width=Math.floor(b*nt),i.height=Math.floor(k*nt),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(I)},this.getViewport=function(b){return b.copy(L)},this.setViewport=function(b,k,nt,at){b.isVector4?L.set(b.x,b.y,b.z,b.w):L.set(b,k,nt,at),qt.viewport(I.copy(L).multiplyScalar(Z).round())},this.getScissor=function(b){return b.copy($)},this.setScissor=function(b,k,nt,at){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,k,nt,at),qt.scissor(lt.copy($).multiplyScalar(Z).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(b){qt.setScissorTest(yt=b)},this.setOpaqueSort=function(b){St=b},this.setTransparentSort=function(b){Tt=b},this.getClearColor=function(b){return b.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor.apply(Wt,arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha.apply(Wt,arguments)},this.clear=function(b=!0,k=!0,nt=!0){let at=0;if(b){let q=!1;if(j!==null){const vt=j.texture.format;q=vt===hd||vt===fd||vt===cd}if(q){const vt=j.texture.type,Dt=vt===aa||vt===Sr||vt===Do||vt===Ts||vt===ld||vt===ud,Ot=Wt.getClearColor(),Nt=Wt.getClearAlpha(),jt=Ot.r,$t=Ot.g,Yt=Ot.b;Dt?(R[0]=jt,R[1]=$t,R[2]=Yt,R[3]=Nt,F.clearBufferuiv(F.COLOR,0,R)):(C[0]=jt,C[1]=$t,C[2]=Yt,C[3]=Nt,F.clearBufferiv(F.COLOR,0,C))}else at|=F.COLOR_BUFFER_BIT}k&&(at|=F.DEPTH_BUFFER_BIT),nt&&(at|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",Rt,!1),i.removeEventListener("webglcontextcreationerror",wt,!1),Wt.dispose(),Pt.dispose(),pe.dispose(),kt.dispose(),T.dispose(),et.dispose(),mt.dispose(),Le.dispose(),X.dispose(),Vt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Ds),ut.removeEventListener("sessionend",Us),Si.stop()};function _t(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),K=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),K=!1;const b=Ce.autoReset,k=It.enabled,nt=It.autoUpdate,at=It.needsUpdate,q=It.type;At(),Ce.autoReset=b,It.enabled=k,It.autoUpdate=nt,It.needsUpdate=at,It.type=q}function wt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Jt(b){const k=b.target;k.removeEventListener("dispose",Jt),qe(k)}function qe(b){ln(b),kt.remove(b)}function ln(b){const k=kt.get(b).programs;k!==void 0&&(k.forEach(function(nt){Vt.releaseProgram(nt)}),b.isShaderMaterial&&Vt.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,nt,at,q,vt){k===null&&(k=Ue);const Dt=q.isMesh&&q.matrixWorld.determinant()<0,Ot=Ns(b,k,nt,at,q);qt.setMaterial(at,Dt);let Nt=nt.index,jt=1;if(at.wireframe===!0){if(Nt=Mt.getWireframeAttribute(nt),Nt===void 0)return;jt=2}const $t=nt.drawRange,Yt=nt.attributes.position;let me=$t.start*jt,ye=($t.start+$t.count)*jt;vt!==null&&(me=Math.max(me,vt.start*jt),ye=Math.min(ye,(vt.start+vt.count)*jt)),Nt!==null?(me=Math.max(me,0),ye=Math.min(ye,Nt.count)):Yt!=null&&(me=Math.max(me,0),ye=Math.min(ye,Yt.count));const Ge=ye-me;if(Ge<0||Ge===1/0)return;Le.setup(q,at,Ot,nt,Nt);let Ie,ie=Lt;if(Nt!==null&&(Ie=dt.get(Nt),ie=Qt,ie.setIndex(Ie)),q.isMesh)at.wireframe===!0?(qt.setLineWidth(at.wireframeLinewidth*ke()),ie.setMode(F.LINES)):ie.setMode(F.TRIANGLES);else if(q.isLine){let Ht=at.linewidth;Ht===void 0&&(Ht=1),qt.setLineWidth(Ht*ke()),q.isLineSegments?ie.setMode(F.LINES):q.isLineLoop?ie.setMode(F.LINE_LOOP):ie.setMode(F.LINE_STRIP)}else q.isPoints?ie.setMode(F.POINTS):q.isSprite&&ie.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ie.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))ie.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ht=q._multiDrawStarts,tn=q._multiDrawCounts,Me=q._multiDrawCount,Rn=Nt?dt.get(Nt).bytesPerElement:1,Di=kt.get(at).currentProgram.getUniforms();for(let dn=0;dn<Me;dn++)Di.setValue(F,"_gl_DrawID",dn),ie.render(Ht[dn]/Rn,tn[dn])}else if(q.isInstancedMesh)ie.renderInstances(me,Ge,q.count);else if(nt.isInstancedBufferGeometry){const Ht=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,tn=Math.min(nt.instanceCount,Ht);ie.renderInstances(me,Ge,tn)}else ie.render(me,Ge)};function xe(b,k,nt){b.transparent===!0&&b.side===ta&&b.forceSinglePass===!1?(b.side=Fn,b.needsUpdate=!0,Ye(b,k,nt),b.side=Fa,b.needsUpdate=!0,Ye(b,k,nt),b.side=ta):Ye(b,k,nt)}this.compile=function(b,k,nt=null){nt===null&&(nt=b),_=pe.get(nt),_.init(k),O.push(_),nt.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),b!==nt&&b.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),_.setupLights();const at=new Set;return b.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const vt=q.material;if(vt)if(Array.isArray(vt))for(let Dt=0;Dt<vt.length;Dt++){const Ot=vt[Dt];xe(Ot,nt,q),at.add(Ot)}else xe(vt,nt,q),at.add(vt)}),O.pop(),_=null,at},this.compileAsync=function(b,k,nt=null){const at=this.compile(b,k,nt);return new Promise(q=>{function vt(){if(at.forEach(function(Dt){kt.get(Dt).currentProgram.isReady()&&at.delete(Dt)}),at.size===0){q(b);return}setTimeout(vt,10)}le.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let gn=null;function oi(b){gn&&gn(b)}function Ds(){Si.stop()}function Us(){Si.start()}const Si=new wv;Si.setAnimationLoop(oi),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(b){gn=b,ut.setAnimationLoop(b),b===null?Si.stop():Si.start()},ut.addEventListener("sessionstart",Ds),ut.addEventListener("sessionend",Us),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(K===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(k),k=ut.getCamera()),b.isScene===!0&&b.onBeforeRender(U,b,k,j),_=pe.get(b,O.length),_.init(k),O.push(_),Bt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Y.setFromProjectionMatrix(Bt),Et=this.localClippingEnabled,ct=bt.init(this.clippingPlanes,Et),y=Pt.get(b,B.length),y.init(),B.push(y),ut.enabled===!0&&ut.isPresenting===!0){const vt=U.xr.getDepthSensingMesh();vt!==null&&Ha(vt,k,-1/0,U.sortObjects)}Ha(b,k,0,U.sortObjects),y.finish(),U.sortObjects===!0&&y.sort(St,Tt),ue=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,ue&&Wt.addToRenderList(y,b),this.info.render.frame++,ct===!0&&bt.beginShadows();const nt=_.state.shadowsArray;It.render(nt,b,k),ct===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const at=y.opaque,q=y.transmissive;if(_.setupLights(),k.isArrayCamera){const vt=k.cameras;if(q.length>0)for(let Dt=0,Ot=vt.length;Dt<Ot;Dt++){const Nt=vt[Dt];Ls(at,q,b,Nt)}ue&&Wt.render(b);for(let Dt=0,Ot=vt.length;Dt<Ot;Dt++){const Nt=vt[Dt];Mr(y,b,Nt,Nt.viewport)}}else q.length>0&&Ls(at,q,b,k),ue&&Wt.render(b),Mr(y,b,k);j!==null&&(D.updateMultisampleRenderTarget(j),D.updateRenderTargetMipmap(j)),b.isScene===!0&&b.onAfterRender(U,b,k),Le.resetDefaultState(),w=-1,A=null,O.pop(),O.length>0?(_=O[O.length-1],ct===!0&&bt.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,B.pop(),B.length>0?y=B[B.length-1]:y=null};function Ha(b,k,nt,at){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)nt=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)_.pushLight(b),b.castShadow&&_.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Y.intersectsSprite(b)){at&&ee.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Bt);const Dt=mt.update(b),Ot=b.material;Ot.visible&&y.push(b,Dt,Ot,nt,ee.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Y.intersectsObject(b))){const Dt=mt.update(b),Ot=b.material;if(at&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ee.copy(b.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),ee.copy(Dt.boundingSphere.center)),ee.applyMatrix4(b.matrixWorld).applyMatrix4(Bt)),Array.isArray(Ot)){const Nt=Dt.groups;for(let jt=0,$t=Nt.length;jt<$t;jt++){const Yt=Nt[jt],me=Ot[Yt.materialIndex];me&&me.visible&&y.push(b,Dt,me,nt,ee.z,Yt)}}else Ot.visible&&y.push(b,Dt,Ot,nt,ee.z,null)}}const vt=b.children;for(let Dt=0,Ot=vt.length;Dt<Ot;Dt++)Ha(vt[Dt],k,nt,at)}function Mr(b,k,nt,at){const q=b.opaque,vt=b.transmissive,Dt=b.transparent;_.setupLightsView(nt),ct===!0&&bt.setGlobalState(U.clippingPlanes,nt),at&&qt.viewport(I.copy(at)),q.length>0&&Ga(q,k,nt),vt.length>0&&Ga(vt,k,nt),Dt.length>0&&Ga(Dt,k,nt),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function Ls(b,k,nt,at){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[at.id]===void 0&&(_.state.transmissionRenderTarget[at.id]=new xr(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?Uo:aa,minFilter:_r,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));const vt=_.state.transmissionRenderTarget[at.id],Dt=at.viewport||I;vt.setSize(Dt.z,Dt.w);const Ot=U.getRenderTarget();U.setRenderTarget(vt),U.getClearColor(ft),ot=U.getClearAlpha(),ot<1&&U.setClearColor(16777215,.5),U.clear(),ue&&Wt.render(nt);const Nt=U.toneMapping;U.toneMapping=Ia;const jt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),_.setupLightsView(at),ct===!0&&bt.setGlobalState(U.clippingPlanes,at),Ga(b,nt,at),D.updateMultisampleRenderTarget(vt),D.updateRenderTargetMipmap(vt),le.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Yt=0,me=k.length;Yt<me;Yt++){const ye=k[Yt],Ge=ye.object,Ie=ye.geometry,ie=ye.material,Ht=ye.group;if(ie.side===ta&&Ge.layers.test(at.layers)){const tn=ie.side;ie.side=Fn,ie.needsUpdate=!0,li(Ge,nt,at,Ie,ie,Ht),ie.side=tn,ie.needsUpdate=!0,$t=!0}}$t===!0&&(D.updateMultisampleRenderTarget(vt),D.updateRenderTargetMipmap(vt))}U.setRenderTarget(Ot),U.setClearColor(ft,ot),jt!==void 0&&(at.viewport=jt),U.toneMapping=Nt}function Ga(b,k,nt){const at=k.isScene===!0?k.overrideMaterial:null;for(let q=0,vt=b.length;q<vt;q++){const Dt=b[q],Ot=Dt.object,Nt=Dt.geometry,jt=at===null?Dt.material:at,$t=Dt.group;Ot.layers.test(nt.layers)&&li(Ot,k,nt,Nt,jt,$t)}}function li(b,k,nt,at,q,vt){b.onBeforeRender(U,k,nt,at,q,vt),b.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(U,k,nt,at,b,vt),q.transparent===!0&&q.side===ta&&q.forceSinglePass===!1?(q.side=Fn,q.needsUpdate=!0,U.renderBufferDirect(nt,k,at,q,b,vt),q.side=Fa,q.needsUpdate=!0,U.renderBufferDirect(nt,k,at,q,b,vt),q.side=ta):U.renderBufferDirect(nt,k,at,q,b,vt),b.onAfterRender(U,k,nt,at,q,vt)}function Ye(b,k,nt){k.isScene!==!0&&(k=Ue);const at=kt.get(b),q=_.state.lights,vt=_.state.shadowsArray,Dt=q.state.version,Ot=Vt.getParameters(b,q.state,vt,k,nt),Nt=Vt.getProgramCacheKey(Ot);let jt=at.programs;at.environment=b.isMeshStandardMaterial?k.environment:null,at.fog=k.fog,at.envMap=(b.isMeshStandardMaterial?et:T).get(b.envMap||at.environment),at.envMapRotation=at.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,jt===void 0&&(b.addEventListener("dispose",Jt),jt=new Map,at.programs=jt);let $t=jt.get(Nt);if($t!==void 0){if(at.currentProgram===$t&&at.lightsStateVersion===Dt)return wi(b,Ot),$t}else Ot.uniforms=Vt.getUniforms(b),b.onBeforeCompile(Ot,U),$t=Vt.acquireProgram(Ot,Nt),jt.set(Nt,$t),at.uniforms=Ot.uniforms;const Yt=at.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Yt.clippingPlanes=bt.uniform),wi(b,Ot),at.needsLights=wu(b),at.lightsStateVersion=Dt,at.needsLights&&(Yt.ambientLightColor.value=q.state.ambient,Yt.lightProbe.value=q.state.probe,Yt.directionalLights.value=q.state.directional,Yt.directionalLightShadows.value=q.state.directionalShadow,Yt.spotLights.value=q.state.spot,Yt.spotLightShadows.value=q.state.spotShadow,Yt.rectAreaLights.value=q.state.rectArea,Yt.ltc_1.value=q.state.rectAreaLTC1,Yt.ltc_2.value=q.state.rectAreaLTC2,Yt.pointLights.value=q.state.point,Yt.pointLightShadows.value=q.state.pointShadow,Yt.hemisphereLights.value=q.state.hemi,Yt.directionalShadowMap.value=q.state.directionalShadowMap,Yt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Yt.spotShadowMap.value=q.state.spotShadowMap,Yt.spotLightMatrix.value=q.state.spotLightMatrix,Yt.spotLightMap.value=q.state.spotLightMap,Yt.pointShadowMap.value=q.state.pointShadowMap,Yt.pointShadowMatrix.value=q.state.pointShadowMatrix),at.currentProgram=$t,at.uniformsList=null,$t}function _n(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=xu.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function wi(b,k){const nt=kt.get(b);nt.outputColorSpace=k.outputColorSpace,nt.batching=k.batching,nt.batchingColor=k.batchingColor,nt.instancing=k.instancing,nt.instancingColor=k.instancingColor,nt.instancingMorph=k.instancingMorph,nt.skinning=k.skinning,nt.morphTargets=k.morphTargets,nt.morphNormals=k.morphNormals,nt.morphColors=k.morphColors,nt.morphTargetsCount=k.morphTargetsCount,nt.numClippingPlanes=k.numClippingPlanes,nt.numIntersection=k.numClipIntersection,nt.vertexAlphas=k.vertexAlphas,nt.vertexTangents=k.vertexTangents,nt.toneMapping=k.toneMapping}function Ns(b,k,nt,at,q){k.isScene!==!0&&(k=Ue),D.resetTextureUnits();const vt=k.fog,Dt=at.isMeshStandardMaterial?k.environment:null,Ot=j===null?U.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:As,Nt=(at.isMeshStandardMaterial?et:T).get(at.envMap||Dt),jt=at.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,$t=!!nt.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Yt=!!nt.morphAttributes.position,me=!!nt.morphAttributes.normal,ye=!!nt.morphAttributes.color;let Ge=Ia;at.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ge=U.toneMapping);const Ie=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,ie=Ie!==void 0?Ie.length:0,Ht=kt.get(at),tn=_.state.lights;if(ct===!0&&(Et===!0||b!==A)){const un=b===A&&at.id===w;bt.setState(at,b,un)}let Me=!1;at.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==tn.state.version||Ht.outputColorSpace!==Ot||q.isBatchedMesh&&Ht.batching===!1||!q.isBatchedMesh&&Ht.batching===!0||q.isBatchedMesh&&Ht.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ht.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ht.instancing===!1||!q.isInstancedMesh&&Ht.instancing===!0||q.isSkinnedMesh&&Ht.skinning===!1||!q.isSkinnedMesh&&Ht.skinning===!0||q.isInstancedMesh&&Ht.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ht.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ht.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ht.instancingMorph===!1&&q.morphTexture!==null||Ht.envMap!==Nt||at.fog===!0&&Ht.fog!==vt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==bt.numPlanes||Ht.numIntersection!==bt.numIntersection)||Ht.vertexAlphas!==jt||Ht.vertexTangents!==$t||Ht.morphTargets!==Yt||Ht.morphNormals!==me||Ht.morphColors!==ye||Ht.toneMapping!==Ge||Ht.morphTargetsCount!==ie)&&(Me=!0):(Me=!0,Ht.__version=at.version);let Rn=Ht.currentProgram;Me===!0&&(Rn=Ye(at,k,q));let Di=!1,dn=!1,Xa=!1;const ce=Rn.getUniforms(),En=Ht.uniforms;if(qt.useProgram(Rn.program)&&(Di=!0,dn=!0,Xa=!0),at.id!==w&&(w=at.id,dn=!0),Di||A!==b){qt.buffers.depth.getReversed()?(xt.copy(b.projectionMatrix),Hx(xt),Gx(xt),ce.setValue(F,"projectionMatrix",xt)):ce.setValue(F,"projectionMatrix",b.projectionMatrix),ce.setValue(F,"viewMatrix",b.matrixWorldInverse);const Ke=ce.map.cameraPosition;Ke!==void 0&&Ke.setValue(F,zt.setFromMatrixPosition(b.matrixWorld)),de.logarithmicDepthBuffer&&ce.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&ce.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),A!==b&&(A=b,dn=!0,Xa=!0)}if(q.isSkinnedMesh){ce.setOptional(F,q,"bindMatrix"),ce.setOptional(F,q,"bindMatrixInverse");const un=q.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),ce.setValue(F,"boneTexture",un.boneTexture,D))}q.isBatchedMesh&&(ce.setOptional(F,q,"batchingTexture"),ce.setValue(F,"batchingTexture",q._matricesTexture,D),ce.setOptional(F,q,"batchingIdTexture"),ce.setValue(F,"batchingIdTexture",q._indirectTexture,D),ce.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&ce.setValue(F,"batchingColorTexture",q._colorsTexture,D));const Cn=nt.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&Xt.update(q,nt,Rn),(dn||Ht.receiveShadow!==q.receiveShadow)&&(Ht.receiveShadow=q.receiveShadow,ce.setValue(F,"receiveShadow",q.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(En.envMap.value=Nt,En.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&k.environment!==null&&(En.envMapIntensity.value=k.environmentIntensity),dn&&(ce.setValue(F,"toneMappingExposure",U.toneMappingExposure),Ht.needsLights&&Cu(En,Xa),vt&&at.fog===!0&&Ct.refreshFogUniforms(En,vt),Ct.refreshMaterialUniforms(En,at,Z,V,_.state.transmissionRenderTarget[b.id]),xu.upload(F,_n(Ht),En,D)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(xu.upload(F,_n(Ht),En,D),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&ce.setValue(F,"center",q.center),ce.setValue(F,"modelViewMatrix",q.modelViewMatrix),ce.setValue(F,"normalMatrix",q.normalMatrix),ce.setValue(F,"modelMatrix",q.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const un=at.uniformsGroups;for(let Ke=0,Er=un.length;Ke<Er;Ke++){const xi=un[Ke];X.update(xi,Rn),X.bind(xi,Rn)}}return Rn}function Cu(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function wu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(b,k,nt){kt.get(b.texture).__webglTexture=k,kt.get(b.depthTexture).__webglTexture=nt;const at=kt.get(b);at.__hasExternalTextures=!0,at.__autoAllocateDepthBuffer=nt===void 0,at.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),at.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,k){const nt=kt.get(b);nt.__webglFramebuffer=k,nt.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,nt=0){j=b,G=k,z=nt;let at=!0,q=null,vt=!1,Dt=!1;if(b){const Nt=kt.get(b);if(Nt.__useDefaultFramebuffer!==void 0)qt.bindFramebuffer(F.FRAMEBUFFER,null),at=!1;else if(Nt.__webglFramebuffer===void 0)D.setupRenderTarget(b);else if(Nt.__hasExternalTextures)D.rebindTextures(b,kt.get(b.texture).__webglTexture,kt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Yt=b.depthTexture;if(Nt.__boundDepthTexture!==Yt){if(Yt!==null&&kt.has(Yt)&&(b.width!==Yt.image.width||b.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(b)}}const jt=b.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Dt=!0);const $t=kt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray($t[k])?q=$t[k][nt]:q=$t[k],vt=!0):b.samples>0&&D.useMultisampledRTT(b)===!1?q=kt.get(b).__webglMultisampledFramebuffer:Array.isArray($t)?q=$t[nt]:q=$t,I.copy(b.viewport),lt.copy(b.scissor),it=b.scissorTest}else I.copy(L).multiplyScalar(Z).floor(),lt.copy($).multiplyScalar(Z).floor(),it=yt;if(qt.bindFramebuffer(F.FRAMEBUFFER,q)&&at&&qt.drawBuffers(b,q),qt.viewport(I),qt.scissor(lt),qt.setScissorTest(it),vt){const Nt=kt.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,Nt.__webglTexture,nt)}else if(Dt){const Nt=kt.get(b.texture),jt=k||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Nt.__webglTexture,nt||0,jt)}w=-1},this.readRenderTargetPixels=function(b,k,nt,at,q,vt,Dt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=kt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ot=Ot[Dt]),Ot){qt.bindFramebuffer(F.FRAMEBUFFER,Ot);try{const Nt=b.texture,jt=Nt.format,$t=Nt.type;if(!de.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-at&&nt>=0&&nt<=b.height-q&&F.readPixels(k,nt,at,q,ne.convert(jt),ne.convert($t),vt)}finally{const Nt=j!==null?kt.get(j).__webglFramebuffer:null;qt.bindFramebuffer(F.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(b,k,nt,at,q,vt,Dt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=kt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ot=Ot[Dt]),Ot){const Nt=b.texture,jt=Nt.format,$t=Nt.type;if(!de.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=b.width-at&&nt>=0&&nt<=b.height-q){qt.bindFramebuffer(F.FRAMEBUFFER,Ot);const Yt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Yt),F.bufferData(F.PIXEL_PACK_BUFFER,vt.byteLength,F.STREAM_READ),F.readPixels(k,nt,at,q,ne.convert(jt),ne.convert($t),0);const me=j!==null?kt.get(j).__webglFramebuffer:null;qt.bindFramebuffer(F.FRAMEBUFFER,me);const ye=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Fx(F,ye,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Yt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,vt),F.deleteBuffer(Yt),F.deleteSync(ye),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,k=null,nt=0){b.isTexture!==!0&&(gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1]);const at=Math.pow(2,-nt),q=Math.floor(b.image.width*at),vt=Math.floor(b.image.height*at),Dt=k!==null?k.x:0,Ot=k!==null?k.y:0;D.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,nt,0,0,Dt,Ot,q,vt),qt.unbindTexture()};const Bo=F.createFramebuffer(),Va=F.createFramebuffer();this.copyTextureToTexture=function(b,k,nt=null,at=null,q=0,vt=null){b.isTexture!==!0&&(gs("WebGLRenderer: copyTextureToTexture function signature has changed."),at=arguments[0]||null,b=arguments[1],k=arguments[2],vt=arguments[3]||0,nt=null),vt===null&&(q!==0?(gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),vt=q,q=0):vt=0);let Dt,Ot,Nt,jt,$t,Yt,me,ye,Ge;const Ie=b.isCompressedTexture?b.mipmaps[vt]:b.image;if(nt!==null)Dt=nt.max.x-nt.min.x,Ot=nt.max.y-nt.min.y,Nt=nt.isBox3?nt.max.z-nt.min.z:1,jt=nt.min.x,$t=nt.min.y,Yt=nt.isBox3?nt.min.z:0;else{const Cn=Math.pow(2,-q);Dt=Math.floor(Ie.width*Cn),Ot=Math.floor(Ie.height*Cn),b.isDataArrayTexture?Nt=Ie.depth:b.isData3DTexture?Nt=Math.floor(Ie.depth*Cn):Nt=1,jt=0,$t=0,Yt=0}at!==null?(me=at.x,ye=at.y,Ge=at.z):(me=0,ye=0,Ge=0);const ie=ne.convert(k.format),Ht=ne.convert(k.type);let tn;k.isData3DTexture?(D.setTexture3D(k,0),tn=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(D.setTexture2DArray(k,0),tn=F.TEXTURE_2D_ARRAY):(D.setTexture2D(k,0),tn=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);const Me=F.getParameter(F.UNPACK_ROW_LENGTH),Rn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Di=F.getParameter(F.UNPACK_SKIP_PIXELS),dn=F.getParameter(F.UNPACK_SKIP_ROWS),Xa=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ie.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ie.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,jt),F.pixelStorei(F.UNPACK_SKIP_ROWS,$t),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Yt);const ce=b.isDataArrayTexture||b.isData3DTexture,En=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){const Cn=kt.get(b),un=kt.get(k),Ke=kt.get(Cn.__renderTarget),Er=kt.get(un.__renderTarget);qt.bindFramebuffer(F.READ_FRAMEBUFFER,Ke.__webglFramebuffer),qt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Er.__webglFramebuffer);for(let xi=0;xi<Nt;xi++)ce&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,kt.get(b).__webglTexture,q,Yt+xi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,kt.get(k).__webglTexture,vt,Ge+xi)),F.blitFramebuffer(jt,$t,Dt,Ot,me,ye,Dt,Ot,F.DEPTH_BUFFER_BIT,F.NEAREST);qt.bindFramebuffer(F.READ_FRAMEBUFFER,null),qt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(q!==0||b.isRenderTargetTexture||kt.has(b)){const Cn=kt.get(b),un=kt.get(k);qt.bindFramebuffer(F.READ_FRAMEBUFFER,Bo),qt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Va);for(let Ke=0;Ke<Nt;Ke++)ce?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Cn.__webglTexture,q,Yt+Ke):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Cn.__webglTexture,q),En?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,un.__webglTexture,vt,Ge+Ke):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,un.__webglTexture,vt),q!==0?F.blitFramebuffer(jt,$t,Dt,Ot,me,ye,Dt,Ot,F.COLOR_BUFFER_BIT,F.NEAREST):En?F.copyTexSubImage3D(tn,vt,me,ye,Ge+Ke,jt,$t,Dt,Ot):F.copyTexSubImage2D(tn,vt,me,ye,jt,$t,Dt,Ot);qt.bindFramebuffer(F.READ_FRAMEBUFFER,null),qt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else En?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(tn,vt,me,ye,Ge,Dt,Ot,Nt,ie,Ht,Ie.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(tn,vt,me,ye,Ge,Dt,Ot,Nt,ie,Ie.data):F.texSubImage3D(tn,vt,me,ye,Ge,Dt,Ot,Nt,ie,Ht,Ie):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,vt,me,ye,Dt,Ot,ie,Ht,Ie.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,vt,me,ye,Ie.width,Ie.height,ie,Ie.data):F.texSubImage2D(F.TEXTURE_2D,vt,me,ye,Dt,Ot,ie,Ht,Ie);F.pixelStorei(F.UNPACK_ROW_LENGTH,Me),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Rn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Di),F.pixelStorei(F.UNPACK_SKIP_ROWS,dn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Xa),vt===0&&k.generateMipmaps&&F.generateMipmap(tn),qt.unbindTexture()},this.copyTextureToTexture3D=function(b,k,nt=null,at=null,q=0){return b.isTexture!==!0&&(gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),nt=arguments[0]||null,at=arguments[1]||null,b=arguments[2],k=arguments[3],q=arguments[4]||0),gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,k,nt,at,q)},this.initRenderTarget=function(b){kt.get(b).__webglFramebuffer===void 0&&D.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?D.setTextureCube(b,0):b.isData3DTexture?D.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?D.setTexture2DArray(b,0):D.setTexture2D(b,0),qt.unbindTexture()},this.resetState=function(){G=0,z=0,j=null,qt.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=be._getDrawingBufferColorSpace(e),i.unpackColorSpace=be._getUnpackColorSpace()}}const yu=8,eA=`
#define MAX_COLORS ${yu}
uniform vec2 uCanvas;
uniform float uTime;
uniform float uSpeed;
uniform vec2 uRot;
uniform int uColorCount;
uniform vec3 uColors[MAX_COLORS];
uniform int uTransparent;
uniform float uScale;
uniform float uFrequency;
uniform float uWarpStrength;
uniform vec2 uPointer; // in NDC [-1,1]
uniform float uMouseInfluence;
uniform float uParallax;
uniform float uNoise;
uniform int uIterations;
uniform float uIntensity;
uniform float uBandWidth;
varying vec2 vUv;

void main() {
  float t = uTime * uSpeed;
  vec2 p = vUv * 2.0 - 1.0;
  p += uPointer * uParallax * 0.1;
  vec2 rp = vec2(p.x * uRot.x - p.y * uRot.y, p.x * uRot.y + p.y * uRot.x);
  vec2 q = vec2(rp.x * (uCanvas.x / uCanvas.y), rp.y);
  q /= max(uScale, 0.0001);
  q /= 0.5 + 0.2 * dot(q, q);
  q += 0.2 * cos(t) - 7.56;
  vec2 toward = (uPointer - rp);
  q += toward * uMouseInfluence * 0.2;

    for (int j = 0; j < 5; j++) {
      if (j >= uIterations - 1) break;
      vec2 rr = sin(1.5 * (q.yx * uFrequency) + 2.0 * cos(q * uFrequency));
      q += (rr - q) * 0.15;
    }

    vec3 col = vec3(0.0);
    float a = 1.0;

    if (uColorCount > 0) {
      vec2 s = q;
      vec3 sumCol = vec3(0.0);
      float cover = 0.0;
      for (int i = 0; i < MAX_COLORS; ++i) {
            if (i >= uColorCount) break;
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3); // strong response across 0..1
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0); // allow >1 to amplify displacement
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float m = mix(m0, m1, kMix);
            float w = 1.0 - exp(-uBandWidth / exp(uBandWidth * m));
            sumCol += uColors[i] * w;
            cover = max(cover, w);
      }
      col = clamp(sumCol, 0.0, 1.0);
      a = uTransparent > 0 ? cover : 1.0;
    } else {
        vec2 s = q;
        for (int k = 0; k < 3; ++k) {
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3);
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float m = mix(m0, m1, kMix);
            col[k] = 1.0 - exp(-uBandWidth / exp(uBandWidth * m));
        }
        a = uTransparent > 0 ? max(max(col.r, col.g), col.b) : 1.0;
    }

    col *= uIntensity;

    if (uNoise > 0.0001) {
      float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453123);
      col += (n - 0.5) * uNoise;
      col = clamp(col, 0.0, 1.0);
    }

    vec3 rgb = (uTransparent > 0) ? col * a : col;
    gl_FragColor = vec4(rgb, a);
}
`,nA=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;function iA({className:o,style:e,rotation:i=90,speed:r=.2,colors:l=[],transparent:c=!0,autoRotate:h=0,scale:d=1,frequency:m=1,warpStrength:p=1,mouseInfluence:v=1,parallax:S=.5,noise:x=.15,iterations:M=1,intensity:R=1.5,bandWidth:C=6}){const y=Dn.useRef(null),_=Dn.useRef(null),B=Dn.useRef(null),O=Dn.useRef(null),U=Dn.useRef(null),K=Dn.useRef(i),G=Dn.useRef(h),z=Dn.useRef(new Ae(0,0)),j=Dn.useRef(new Ae(0,0)),w=Dn.useRef(8);return Dn.useEffect(()=>{const A=y.current,I=new fy,lt=new Cv(-1,1,1,-1,0,1),it=new Po(2,2),ft=Array.from({length:yu},()=>new st(0,0,0)),ot=new sa({vertexShader:nA,fragmentShader:eA,uniforms:{uCanvas:{value:new Ae(1,1)},uTime:{value:0},uSpeed:{value:r},uRot:{value:new Ae(1,0)},uColorCount:{value:0},uColors:{value:ft},uTransparent:{value:c?1:0},uScale:{value:d},uFrequency:{value:m},uWarpStrength:{value:p},uPointer:{value:new Ae(0,0)},uMouseInfluence:{value:v},uParallax:{value:S},uNoise:{value:x},uIterations:{value:M},uIntensity:{value:R},uBandWidth:{value:C}},premultipliedAlpha:!0,transparent:!0});O.current=ot;const N=new Ri(it,ot);I.add(N);const V=new tA({antialias:!1,powerPreference:"high-performance",alpha:!0});_.current=V,V.outputColorSpace=Kn,V.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),V.setClearColor(0,c?0:1),V.domElement.style.width="100%",V.domElement.style.height="100%",V.domElement.style.display="block",A.appendChild(V.domElement);const Z=new _y,St=()=>{const L=A.clientWidth||1,$=A.clientHeight||1;V.setSize(L,$,!1),ot.uniforms.uCanvas.value.set(L,$)};if(St(),"ResizeObserver"in window){const L=new ResizeObserver(St);L.observe(A),U.current=L}else window.addEventListener("resize",St);const Tt=()=>{const L=Z.getDelta(),$=Z.elapsedTime;ot.uniforms.uTime.value=$;const Y=(K.current%360+G.current*$)*Math.PI/180,ct=Math.cos(Y),Et=Math.sin(Y);ot.uniforms.uRot.value.set(ct,Et);const xt=j.current,Bt=z.current,zt=Math.min(1,L*w.current);xt.lerp(Bt,zt),ot.uniforms.uPointer.value.copy(xt),V.render(I,lt),B.current=requestAnimationFrame(Tt)};return B.current=requestAnimationFrame(Tt),()=>{B.current!==null&&cancelAnimationFrame(B.current),U.current?U.current.disconnect():window.removeEventListener("resize",St),it.dispose(),ot.dispose(),V.dispose(),V.forceContextLoss(),V.domElement&&V.domElement.parentElement===A&&A.removeChild(V.domElement)}},[C,m,R,M,v,x,S,d,r,c,p]),Dn.useEffect(()=>{const A=O.current,I=_.current;if(!A)return;K.current=i,G.current=h,A.uniforms.uSpeed.value=r,A.uniforms.uScale.value=d,A.uniforms.uFrequency.value=m,A.uniforms.uWarpStrength.value=p,A.uniforms.uMouseInfluence.value=v,A.uniforms.uParallax.value=S,A.uniforms.uNoise.value=x,A.uniforms.uIterations.value=M,A.uniforms.uIntensity.value=R,A.uniforms.uBandWidth.value=C;const lt=ft=>{const ot=ft.replace("#","").trim(),N=ot.length===3?[parseInt(ot[0]+ot[0],16),parseInt(ot[1]+ot[1],16),parseInt(ot[2]+ot[2],16)]:[parseInt(ot.slice(0,2),16),parseInt(ot.slice(2,4),16),parseInt(ot.slice(4,6),16)];return new st(N[0]/255,N[1]/255,N[2]/255)},it=(l||[]).filter(Boolean).slice(0,yu).map(lt);for(let ft=0;ft<yu;ft++){const ot=A.uniforms.uColors.value[ft];ft<it.length?ot.copy(it[ft]):ot.set(0,0,0)}A.uniforms.uColorCount.value=it.length,A.uniforms.uTransparent.value=c?1:0,I&&I.setClearColor(0,c?0:1)},[i,h,r,d,m,p,v,S,x,M,R,C,l,c]),Dn.useEffect(()=>{const A=O.current,I=y.current;if(!A||!I)return;const lt=it=>{const ft=I.getBoundingClientRect(),ot=(it.clientX-ft.left)/(ft.width||1)*2-1,N=-((it.clientY-ft.top)/(ft.height||1)*2-1);z.current.set(ot,N)};return window.addEventListener("pointermove",lt,{passive:!0}),()=>{window.removeEventListener("pointermove",lt)}},[]),He.jsx("div",{ref:y,className:`color-bends-container ${o}`,style:e})}const _h="https://www.instagram.com/hugo.uno.claw/",aA={zh:{lang:"zh-Hant",methodNav:"方法",startNav:"開始",language:"EN",eyebrow:"Private preview first",hero:["先看見，","再承諾。"],lead:"Lumo 先把業主現有素材做成私人預覽，再決定要不要完整製作。",methodEyebrow:"Working method",methodTitle:"少一點提案，多一點證明。",cta:"IG 聯絡",statement:["給素材。","收到一個能拍板的方向。"],notes:["靜態 / 後台 / 客制","私人預覽","拍板後上線"]},en:{lang:"en",methodNav:"Method",startNav:"Start",language:"中",eyebrow:"Private preview first",hero:["Preview","before","promise."],lead:"Private website drafts for local businesses before anyone commits to a full build.",methodEyebrow:"Working method",methodTitle:"Less proposal. More proof.",cta:"Contact on Instagram",statement:["Send material.","Receive a private direction."],notes:["Static / CMS / Custom","No-index preview","Launch after approval"]}};function rA(){const[o,e]=Dn.useState("en"),i=aA[o];return Dn.useEffect(()=>{document.documentElement.lang=i.lang},[i.lang]),He.jsxs("main",{className:"site-shell",children:[He.jsx(iA,{className:"bends",colors:["#22f5d3","#7fdcff","#d66cff","#7a62ff"],rotation:36,autoRotate:.45,speed:.5,scale:.72,frequency:1.28,warpStrength:1.08,mouseInfluence:2,parallax:1.8,noise:.055,iterations:4,intensity:2.35,bandWidth:8.4,transparent:!1}),He.jsxs("nav",{className:"nav","aria-label":"Primary",children:[He.jsx("a",{className:"brand",href:"/",children:"Lumo"}),He.jsxs("div",{children:[He.jsx("a",{href:"#method",children:i.methodNav}),He.jsx("a",{href:_h,target:"_blank",rel:"noreferrer",children:"IG"}),He.jsx("a",{href:_h,target:"_blank",rel:"noreferrer",children:i.startNav}),He.jsx("button",{className:"lang-toggle",type:"button",onClick:()=>e(o==="zh"?"en":"zh"),children:i.language})]})]}),He.jsxs("section",{className:"hero",children:[He.jsx("p",{className:"eyebrow",children:i.eyebrow}),He.jsx("h1",{children:i.hero.map(r=>He.jsx("span",{children:r},r))}),He.jsx("p",{className:"lead",children:i.lead})]}),He.jsxs("section",{className:"method",id:"method","aria-label":"Lumo intake system",children:[He.jsxs("div",{className:"method-copy",children:[He.jsx("p",{children:i.methodEyebrow}),He.jsx("h2",{children:i.methodTitle}),He.jsx("a",{href:_h,target:"_blank",rel:"noreferrer",children:i.cta})]}),He.jsxs("div",{className:"method-detail",children:[He.jsxs("p",{className:"method-statement",children:[i.statement[0],He.jsx("br",{}),i.statement[1]]}),He.jsxs("p",{className:"quiet-notes",children:[i.notes[0],He.jsx("span",{children:i.notes[1]}),He.jsx("span",{children:i.notes[2]})]})]})]})]})}ZS.createRoot(document.getElementById("root")).render(He.jsx(rA,{}));
