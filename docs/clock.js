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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/clock/app.js":
/*!**************************!*\
  !*** ./src/clock/app.js ***!
  \**************************/
/*! exports provided: clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clock", function() { return clock; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var clock =
/*#__PURE__*/
function () {
  function clock() {
    _classCallCheck(this, clock);
  }

  _createClass(clock, [{
    key: "createDate",
    value: function createDate() {
      this.time = new Date();
      this.hours = this.time.getHours();
      this.minutes = this.time.getMinutes();
      this.seconds = this.time.getSeconds();
      this.shortTime = "".concat(this.hours, ":").concat(this.minutes, ":").concat(this.seconds);
    }
  }, {
    key: "changeTime",
    value: function changeTime() {
      this.createDate();
      this.container.textContent = this.shortTime;
    }
  }, {
    key: "render",
    value: function render() {
      var mp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector("body");
      mp.style.backgroundColor = this.randomColor();
      this.container = document.createElement("span");
      this.container.textContent = this.shortTime;
      this.container.classList.add("time");
      mp.appendChild(this.container);
    }
  }, {
    key: "randomNumber",
    value: function randomNumber(num) {
      return Math.floor(Math.random() * (num + 1));
    }
  }, {
    key: "randomColor",
    value: function randomColor() {
      return "rgb(".concat(this.randomNumber(255), ",").concat(this.randomNumber(255), ",").concat(this.randomNumber(255), ")");
    }
  }, {
    key: "startClock",
    value: function startClock() {
      var _this = this;

      this.createDate();
      this.render();
      this.timeId = setInterval(function () {
        _this.changeTime();
      }, 1000);
    }
  }, {
    key: "stopClock",
    value: function stopClock() {
      clearInterval(this.timeId);
    }
  }]);

  return clock;
}();

/***/ }),

/***/ "./src/clock/clock.js":
/*!****************************!*\
  !*** ./src/clock/clock.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clock_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clock.scss */ "./src/clock/clock.scss");
/* harmony import */ var _clock_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_clock_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/clock/app.js");


var currentTime = new _app__WEBPACK_IMPORTED_MODULE_1__["clock"]();
currentTime.startClock();

/***/ }),

/***/ "./src/clock/clock.scss":
/*!******************************!*\
  !*** ./src/clock/clock.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 20:
/*!**********************************!*\
  !*** multi ./src/clock/clock.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/clock/clock.js */"./src/clock/clock.js");


/***/ })

/******/ });
//# sourceMappingURL=clock.js.map