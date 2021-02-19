/*!
 *  name: @jswork/react-loading
 *  description: Spinner component for react.
 *  homepage: https://github.com/afeiship/react-loading#readme
 *  version: 1.0.0
 *  date: 2021-02-19T05:22:53.430Z
 *  license: MIT
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ReactLoading=t():e.ReactLoading=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("@jswork/react-visible")},function(e,t){e.exports=require("classnames")},function(e,t){e.exports=require("@jswork/react-backdrop")},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),i=r(1),a=r.n(i),c=r(3),u=r.n(c),f=r(2),l=r.n(f),s=r(4),p=r.n(s);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=x(e);if(t){var o=x(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return P(this,r)}}function P(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(a,e);var t,r,n,i=w(a);function a(){return v(this,a),i.apply(this,arguments)}return t=a,(r=[{key:"visibleElementView",get:function(){var e=this.props,t=e.className,r=e.mainClassName,n=(e.destroyable,e.backdrop),i=(e.rootable,e.value,e.onPresent,e.onDismiss,g(e,["className","mainClassName","destroyable","backdrop","rootable","value","onPresent","onDismiss"])),a=this.state,c=a.hidden,f=a.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",O({hidden:c,"data-visible":this.state.value,onAnimationEnd:this.handleAnimationEnd,className:u()(r,"react-loading",t)},i),o.a.createElement("figure",{className:"".concat("react-loading","__body")},o.a.createElement("img",{width:"32",src:"https://tva1.sinaimg.cn/large/006tNbRwgy1fvcdkbo352g303k03kq2r.gif"}),o.a.createElement("figcaption",null,f))),!!n&&o.a.createElement(p.a,O({value:this.state.value},n)))}}])&&j(t.prototype,r),n&&j(t,n),a}(l.a);S.displayName="react-loading",S.version="1.0.0",S.propTypes=d(d({},l.a.propTypes),{},{mainClassName:a.a.string,backdrop:a.a.oneOfType([a.a.bool,a.a.object])}),S.defaultProps=d(d({},l.a.defaultProps),{},{mainClassName:"wsui-loading"});t.default=S}])}));
//# sourceMappingURL=index.js.map