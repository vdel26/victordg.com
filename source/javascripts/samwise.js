"use strict";function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _get=function(e,t,n){for(var i=!0;i;){var r=e,s=t,o=n;u=c=a=void 0,i=!1;var u=Object.getOwnPropertyDescriptor(r,s);if(void 0!==u){if("value"in u)return u.value;var a=u.get;return void 0===a?void 0:a.call(o)}var c=Object.getPrototypeOf(r);if(null===c)return void 0;e=c,t=s,n=o,i=!0}},_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();!function(e){function t(e,t){function i(e){return this&&this.constructor===i?(this._keys=[],this._values=[],this._itp=[],this.objectOnly=t,void(e&&n.call(this,e))):new i(e)}return t||m(e,"size",{get:w}),e.constructor=i,i.prototype=e,i}function n(e){this.add?e.forEach(this.add,this):e.forEach(function(e){this.set(e[0],e[1])},this)}function i(e){return this.has(e)&&(this._keys.splice(_,1),this._values.splice(_,1),this._itp.forEach(function(e){_<e[0]&&e[0]--})),_>-1}function r(e){return this.has(e)?this._values[_]:void 0}function s(e,t){if(this.objectOnly&&t!==Object(t))throw new TypeError("Invalid value used as weak collection key");if(t!=t||0===t)for(_=e.length;_--&&!k(e[_],t););else _=e.indexOf(t);return _>-1}function o(e){return s.call(this,this._values,e)}function u(e){return s.call(this,this._keys,e)}function a(e,t){return this.has(e)?this._values[_]=t:this._values[this._keys.push(e)-1]=t,this}function c(e){return this.has(e)||this._values.push(e),this}function l(){this._values.length=0}function h(){return v(this._itp,this._keys)}function f(){return v(this._itp,this._values)}function d(){return v(this._itp,this._keys,this._values)}function p(){return v(this._itp,this._values,this._values)}function v(e,t,n){var i=[0],r=!1;return e.push(i),{next:function(){var s,o=i[0];return!r&&o<t.length?(s=n?[t[o],n[o]]:t[o],i[0]++):(r=!0,e.splice(e.indexOf(i),1)),{done:r,value:s}}}}function w(){return this._values.length}function y(e,t){for(var n=this.entries();;){var i=n.next();if(i.done)break;e.call(t,i.value[1],i.value[0],this)}}var _,m=Object.defineProperty,k=function(e,t){return isNaN(e)?isNaN(t):e===t};"undefined"==typeof WeakMap&&(e.WeakMap=t({"delete":i,clear:l,get:r,has:u,set:a},!0)),"undefined"!=typeof Map&&(new Map).values().next||(e.Map=t({"delete":i,has:u,get:r,set:a,keys:h,values:f,entries:d,forEach:y,clear:l})),"undefined"!=typeof Set&&(new Set).values().next||(e.Set=t({has:o,add:c,"delete":i,clear:l,keys:f,values:f,entries:p,forEach:y})),"undefined"==typeof WeakSet&&(e.WeakSet=t({"delete":i,add:c,clear:l,has:o},!0))}("undefined"!=typeof exports&&"undefined"!=typeof global?global:window);var samwise=function(){var e=new Map,t={},n=function(e,t){return Object.keys(t).forEach(function(n){return e[n]=t[n]})},i=function(e,t){var n=document.createElement(e);return t&&t.forEach(function(e){return n.classList.add(e)}),n},r=function(){return document.createDocumentFragment()},s=function(e,t){return Object.prototype.hasOwnProperty.call(t,e)},o=(function(){return"function"==typeof window.Event?function(e){return new Event(e)}:function(e){var t=document.createEvent("Event");t.initEvent(e,!0,!0)}}(),function(e,t,n){e.addEventListener(t,n),e.swListeners||(e.swListeners=new Map),e.swListeners.has(t)||e.swListeners.set(t,n)}),u=function(e,t,n){e.removeEventListener(t,n),e.swListeners["delete"](t)},a=function(){function e(){_classCallCheck(this,e),this._view=null}return _createClass(e,[{key:"view",get:function(){return this._view},set:function(e){this._view=e}},{key:"remove",value:function(){this._view=null}},{key:"addSubview",value:function(e){this._view.appendChild(e)}}]),e}(),c=function(e){function t(e){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.render()}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){var e=i("div",["sw-outerContainer"]),t=new l;e.appendChild(t.view),this.view=e}}]),t}(a),l=function(t){function n(e){_classCallCheck(this,n),_get(Object.getPrototypeOf(n.prototype),"constructor",this).call(this),this.render()}return _inherits(n,t),_createClass(n,[{key:"createFooter",value:function(){var t=e.get("footer"),n=t.map(function(e){return new f({url:e.url,name:e.name})}).map(function(e){return e.view}),i=r();return n.forEach(function(e){return i.appendChild(e)}),i}},{key:"render",value:function(){var t=i("div",["sw"]),n=i("header",["sw-header"]),r=i("h1"),s=i("div",["sw-closeButton","js-close"]);r.textContent=e.get("section"),n.appendChild(s),n.appendChild(r);var o=new h,u=i("footer",["sw-footer"]);u.appendChild(this.createFooter()),t.appendChild(n),t.appendChild(o.view),t.appendChild(u),this.view=t}}]),n}(a),h=function(t){function n(e){_classCallCheck(this,n),_get(Object.getPrototypeOf(n.prototype),"constructor",this).call(this),this.render()}return _inherits(n,t),_createClass(n,[{key:"createListElems",value:function(t,n){var i=e.get("data"),s=i.articles.map(function(e){return new d({url:e.url,name:e.name})}).map(function(e){return e.view}),o=r();s.forEach(function(e){return o.appendChild(e)}),t.appendChild(o)}},{key:"render",value:function(){var e=i("div",["sw-main"]),t=i("div",["sw-content"]),n=i("ul",["sw-column","sw-column--left"]),r=i("ul",["sw-column","sw-column--left"]);this.createListElems(n,r),t.appendChild(n),t.appendChild(r),e.appendChild(t),this.view=e}}]),n}(a),f=function(e){function t(e){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.url=e.url,this.name=e.name,this.render()}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){var e=i("a",["sw-button"]);e.href=this.url,e.textContent=this.name,this.view=e}}]),t}(a),d=function(e){function t(e){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.url=e.url,this.name=e.name,this.render()}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){var e=i("li",["sw-listElem"]),t=i("a");t.href=this.url,t.textContent=this.name,e.appendChild(t),this.view=e}}]),t}(a),p=function(e,t){return e.sections.filter(function(e){return e.section===t})[0]},v=function(e,t){var n=new XMLHttpRequest;n.onload=function(e){t(JSON.parse(n.responseText))},n.onerror=function(e){throw new Error(n.statusText)},n.open("GET",e,!0),n.send()},w=function(e){e.classList.toggle("is-visible")},y=function(e,n,i){var r=function(){return w(n)},s=function(e){n.classList.contains("is-visible")&&27===e.keyCode&&r()},u=function(e){e.target===n&&r()};o(e,"click",r),o(i,"click",r),o(n,"click",u),o(document,"keyup",s),t.toggle=r},_=function(e,t,n){u(e,"click",e.swListeners.get("click")),u(n,"click",n.swListeners.get("click")),u(t,"click",t.swListeners.get("click")),u(document,"keyup",document.swListeners.get("keyup"))},m=function(e){if(!s("section",e))throw new Error("Missing parameter 'section'");if(!s("elem",e))throw new Error("Missing parameter 'elem'");if(!s("url",e)&&!s("data",e))throw new Error("Missing parameter: either 'url' or 'data' have to be present");return!0},k=function(t,n){var i=p(t,n);e.set("data",i),e.set("section",i.title),e.set("footer",t.footer)},C=function(e){var t=new c,n=document.body.appendChild(t.view),i=document.querySelector(e.elem),r=document.querySelector(".js-close");y(i,n,r)},g=function(e){var t=document.querySelector(".sw-outerContainer"),n=document.querySelector(e.elem),i=document.querySelector(".js-close");t.parentNode.removeChild(t),_(n,t,i)},b=function(e){var t=function(t){return"data"===t?function(){k(e.data,e.section),C(e)}:"url"===t?function(t){k(t,e.section),C(e)}:void 0};s("data",e)?t("data")():s("url",e)&&v(e.url,t("url"))};return function(e){samwise.mounted&&g(e),m(e),b(e),samwise.mounted=!0,n(samwise,t)}}();