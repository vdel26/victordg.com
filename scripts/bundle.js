/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************************!*\
  !*** ./scripts/_source/main.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _fontfaceobserver = __webpack_require__(/*! fontfaceobserver */ 1);
	
	var _fontfaceobserver2 = _interopRequireDefault(_fontfaceobserver);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var $ = document.querySelector.bind(document);
	
	var App = function () {
	  function App() {
	    _classCallCheck(this, App);
	
	    this.init();
	    this.bindEvents();
	  }
	
	  _createClass(App, [{
	    key: 'bindEvents',
	    value: function bindEvents() {
	      $('.js-link--contact').addEventListener('click', this.toggleContactSection);
	      $('.js-link--projects').addEventListener('click', this.toggleProjectsSection);
	      $('.js-projects-close').addEventListener('click', this.toggleProjectsSection);
	      $('.js-projects').addEventListener('click', this.toggleProject.bind(this));
	    }
	  }, {
	    key: 'toggleContactSection',
	    value: function toggleContactSection() {
	      var link = $('.js-link--contact');
	      document.body.classList.toggle('is-showing-contact');
	      link.classList.toggle('is-active');
	    }
	  }, {
	    key: 'toggleProjectsSection',
	    value: function toggleProjectsSection() {
	      var link = $('.js-link--projects');
	      document.body.classList.toggle('is-showing-projects');
	      link.classList.toggle('is-active');
	    }
	  }, {
	    key: 'slideProjects',
	    value: function slideProjects(project, body) {
	      // 1. find all projects that are *below* this one
	      // 2. find this project's body height
	      // 3. if project was open   -> use transform to move all following elements -height px
	      // 4. if project was closed -> use transform to move all following elements +height px
	      var projects = Array.from(project.parentElement.childNodes).filter(function (el) {
	        return el.nodeType === Node.ELEMENT_NODE;
	      });
	
	      var nextProjects = [];
	      var next = project.nextElementSibling;
	      while (next) {
	        nextProjects.push(next);
	        next = next.nextElementSibling;
	      }
	
	      if (body.classList.contains('is-open')) {
	        body.classList.remove('is-open');
	      }
	
	      var first = body.getBoundingClientRect();
	      body.classList.toggle('is-expanded');
	      var last = body.getBoundingClientRect();
	      var height = last.height - first.height;
	
	      var getTranslateY = function getTranslateY(el) {
	        return Number(/\d+/.exec(el.style.transform)) || 0;
	      };
	
	      nextProjects.forEach(function (p) {
	        requestAnimationFrame(function () {
	          var delta = getTranslateY(p) + height;
	          p.classList.add('is-animating');
	          p.style.transform = 'translateY(' + delta + 'px)';
	          p.addEventListener('transitionend', function () {
	            p.classList.remove('is-animating');
	          });
	        });
	      });
	
	      body.classList.toggle('is-open');
	    }
	  }, {
	    key: 'toggleProject',
	    value: function toggleProject(evt) {
	      if (evt.target.tagName !== 'H1') return;
	      var project = evt.target.parentElement;
	      var title = project.firstElementChild;
	      var body = title.nextElementSibling;
	
	      title.classList.toggle('is-active');
	      this.slideProjects(project, body);
	    }
	  }, {
	    key: 'init',
	    value: function init() {
	      // detect touch device
	      var isTouch = 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch;
	      if (isTouch) {
	        document.body.classList.add('is-touch');
	      }
	
	      // loading fonts with progressive enhancement: use native ones first
	      // to avoid FOIT and replace with definitive font once it's loaded
	      var font = new _fontfaceobserver2.default('Apercu');
	      if (sessionStorage.fontsLoaded) {
	        document.body.classList.add('is-font-loaded');
	      }
	      font.load().then(function () {
	        sessionStorage.fontsLoaded = true;
	        document.body.classList.add('is-font-loaded');
	      }).catch(function () {
	        sessionStorage.fontsLoaded = false;
	      });
	    }
	  }]);
	
	  return App;
	}();
	
	/*
	 * bootstrap
	 */
	
	document.addEventListener('DOMContentLoaded', function () {
	  return window.app = new App();
	});

/***/ },
/* 1 */
/*!***********************************************************!*\
  !*** ./~/fontfaceobserver/fontfaceobserver.standalone.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	(function(){function l(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function m(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a()}):document.attachEvent("onreadystatechange",function k(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",k),a()})};function r(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
	this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
	function x(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:"+b+";"}function y(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function z(a,b){function c(){var a=k;y(a)&&null!==a.a.parentNode&&b(a.g)}var k=a;l(a.b,c);l(a.c,c);y(a)};function A(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var B=null,D=null,E=null;function H(){if(null===D){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}D=""!==a.style.font}return D}function I(a,b){return[a.style,a.weight,H()?a.stretch:"","100px",b].join(" ")}
	A.prototype.load=function(a,b){var c=this,k=a||"BESbswy",q=0,C=b||3E3,F=(new Date).getTime();return new Promise(function(a,b){null===E&&(E=!!document.fonts);if(E){var J=new Promise(function(a,b){function e(){(new Date).getTime()-F>=C?b():document.fonts.load(I(c,'"'+c.family+'"'),k).then(function(c){1<=c.length?a():setTimeout(e,25)},function(){b()})}e()}),K=new Promise(function(a,c){q=setTimeout(c,C)});Promise.race([K,J]).then(function(){clearTimeout(q);a(c)},function(){b(c)})}else m(function(){function t(){var b;
	if(b=-1!=f&&-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=f!=g&&f!=h&&g!=h)||(null===B&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),B=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=B&&(f==u&&g==u&&h==u||f==v&&g==v&&h==v||f==w&&g==w&&h==w)),b=!b;b&&(null!==d.parentNode&&d.parentNode.removeChild(d),clearTimeout(q),a(c))}function G(){if((new Date).getTime()-F>=C)null!==d.parentNode&&d.parentNode.removeChild(d),b(c);else{var a=document.hidden;if(!0===
	a||void 0===a)f=e.a.offsetWidth,g=n.a.offsetWidth,h=p.a.offsetWidth,t();q=setTimeout(G,50)}}var e=new r(k),n=new r(k),p=new r(k),f=-1,g=-1,h=-1,u=-1,v=-1,w=-1,d=document.createElement("div");d.dir="ltr";x(e,I(c,"sans-serif"));x(n,I(c,"serif"));x(p,I(c,"monospace"));d.appendChild(e.a);d.appendChild(n.a);d.appendChild(p.a);document.body.appendChild(d);u=e.a.offsetWidth;v=n.a.offsetWidth;w=p.a.offsetWidth;G();z(e,function(a){f=a;t()});x(e,I(c,'"'+c.family+'",sans-serif'));z(n,function(a){g=a;t()});x(n,
	I(c,'"'+c.family+'",serif'));z(p,function(a){h=a;t()});x(p,I(c,'"'+c.family+'",monospace'))})})}; true?module.exports=A:(window.FontFaceObserver=A,window.FontFaceObserver.prototype.load=A.prototype.load);}());


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map