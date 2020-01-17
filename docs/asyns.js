/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asyns/app.js":
/*!**************************!*\
  !*** ./src/asyns/app.js ***!
  \**************************/
/*! exports provided: request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony import */ var _renderPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderPage */ "./src/asyns/renderPage.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var request =
/*#__PURE__*/
function () {
  function request() {
    var mp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector("body");
    var link = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, request);

    this.mp = mp;
    this.link = link;
    this.type = "GET";
  }

  _createClass(request, [{
    key: "requstXhr",
    value: function requstXhr() {
      var _this = this;

      this.xhr = new XMLHttpRequest();
      this.xhr.open(this.type, this.link);
      this.xhr.send();

      this.xhr.onload = function () {
        _this.resp = JSON.parse(_this.xhr.response);

        _this.resp.forEach(function (element) {
          _this.render = new _renderPage__WEBPACK_IMPORTED_MODULE_0__["renderPage"](element);

          _this.render.render();
        });
      };
    }
  }]);

  return request;
}();

/***/ }),

/***/ "./src/asyns/asyns.js":
/*!****************************!*\
  !*** ./src/asyns/asyns.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _asyns_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asyns.scss */ "./src/asyns/asyns.scss");
/* harmony import */ var _asyns_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_asyns_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/asyns/app.js");
/* harmony import */ var _renderPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderPage */ "./src/asyns/renderPage.js");



var page = new _app__WEBPACK_IMPORTED_MODULE_1__["request"](document.querySelector("body"), "http://localhost:3000/ads");
page.requstXhr();

/***/ }),

/***/ "./src/asyns/asyns.scss":
/*!******************************!*\
  !*** ./src/asyns/asyns.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/asyns/renderPage.js":
/*!*********************************!*\
  !*** ./src/asyns/renderPage.js ***!
  \*********************************/
/*! exports provided: renderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderPage", function() { return renderPage; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var renderPage =
/*#__PURE__*/
function () {
  function renderPage(data) {
    _classCallCheck(this, renderPage);

    this.data = data;
    this.classes = {
      container: "container",
      title: "container__title",
      image: "container__image",
      link: "container__link",
      description: "container__description"
    };
  }

  _createClass(renderPage, [{
    key: "createElements",
    value: function createElements() {
      this.container = this.createElement("section", this.classes.container);
      this.link = this.createElement("a", this.classes.link);
      this.setAttribut(this.link, "link", this.data.productUrl);
      this.setAttribut(this.link, "title", this.data.note);
      this.title = this.createElement("h2", this.classes.title);
      this.insertContent(this.title, this.data.title);
      this.image = this.createElement("img", this.classes.image);
      this.setAttribut(this.image, "img", this.data.img);
      this.description = this.createElement("p", this.classes.description);
      this.insertContent(this.description, this.data.description);
    }
  }, {
    key: "createElement",
    value: function createElement(tagName, className) {
      var item = document.createElement(tagName);
      item.classList.add(className);
      return item;
    }
  }, {
    key: "insertContent",
    value: function insertContent(item, content) {
      return item.textContent = content;
    }
  }, {
    key: "setAttribut",
    value: function setAttribut(item, itemType, att) {
      if (itemType === "link") {
        item.href = att;
      }

      if (itemType === "img") {
        item.src = att;
      }

      if (itemType === "note") {
        item.title = att;
      }

      return item;
    }
  }, {
    key: "render",
    value: function render() {
      var mp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector("body");
      this.createElements();
      this.link.appendChild(this.image);
      this.link.appendChild(this.title);
      this.link.appendChild(this.description);
      this.container.appendChild(this.link);
      mp.appendChild(this.container);
    }
  }]);

  return renderPage;
}();

/***/ }),

/***/ 21:
/*!**********************************!*\
  !*** multi ./src/asyns/asyns.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/asyns/asyns.js */"./src/asyns/asyns.js");


/***/ })

/******/ });
//# sourceMappingURL=asyns.js.map