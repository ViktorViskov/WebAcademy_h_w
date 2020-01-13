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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/firstclass/class.js":
/*!*********************************!*\
  !*** ./src/firstclass/class.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lamp */ "./src/firstclass/lamp.js");

var mp = document.querySelector(".container");
var items = new _lamp__WEBPACK_IMPORTED_MODULE_0__["garland"](mp, 50);
items.createLamps();
setInterval(function () {
  items.switcher();
}, 100);

/***/ }),

/***/ "./src/firstclass/firstclass.js":
/*!**************************************!*\
  !*** ./src/firstclass/firstclass.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firstclass_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firstclass.scss */ "./src/firstclass/firstclass.scss");
/* harmony import */ var _firstclass_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firstclass_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class */ "./src/firstclass/class.js");



/***/ }),

/***/ "./src/firstclass/firstclass.scss":
/*!****************************************!*\
  !*** ./src/firstclass/firstclass.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/firstclass/lamp.js":
/*!********************************!*\
  !*** ./src/firstclass/lamp.js ***!
  \********************************/
/*! exports provided: garland */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "garland", function() { return garland; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var garland =
/*#__PURE__*/
function () {
  function garland(mp, account) {
    _classCallCheck(this, garland);

    this.mp = mp;
    this.account = account;
  }

  _createClass(garland, [{
    key: "createLamps",
    value: function createLamps() {
      this.lamps = [];

      for (var i = 0; i < this.account; i++) {
        this.lamp = document.createElement("div");
        this.lamp.classList.add("lamp");
        this.lamp.style.backgroundColor = this.randomColor();
        this.mp.appendChild(this.lamp);
        this.lamps.push(this.lamp);
      }
    }
  }, {
    key: "randomColor",
    value: function randomColor() {
      return "rgb(" + this.randomNum(255) + "," + this.randomNum(255) + "," + this.randomNum(255) + ")";
    }
  }, {
    key: "randomNum",
    value: function randomNum(num) {
      return Math.floor(Math.random() * num);
    }
  }, {
    key: "switcher",
    value: function switcher() {
      this.lamps[this.randomNum(this.account)].style.backgroundColor = this.randomColor();
    }
  }]);

  return garland;
}();

/***/ }),

/***/ 19:
/*!********************************************!*\
  !*** multi ./src/firstclass/firstclass.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/firstclass/firstclass.js */"./src/firstclass/firstclass.js");


/***/ })

/******/ });
//# sourceMappingURL=firstclass.js.map