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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/trafick_lights/app.js":
/*!***********************************!*\
  !*** ./src/trafick_lights/app.js ***!
  \***********************************/
/*! exports provided: app, toggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggle", function() { return toggle; });
/* harmony import */ var _switchApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switchApp */ "./src/trafick_lights/switchApp.js");

function app() {
  var elements = document.querySelectorAll(".container__element");

  var _loop = function _loop(i) {
    var item = elements[i];
    item.addEventListener('click', function () {
      Object(_switchApp__WEBPACK_IMPORTED_MODULE_0__["switchApp"])(elements, item);
    });
  };

  for (var i = 0; i < elements.length; i++) {
    _loop(i);
  }
}
function toggle() {
  var button = document.querySelector(".container__toggle");
  button.addEventListener('click', function () {
    Object(_switchApp__WEBPACK_IMPORTED_MODULE_0__["buttonFunc"])(button);
  });
}

/***/ }),

/***/ "./src/trafick_lights/switchApp.js":
/*!*****************************************!*\
  !*** ./src/trafick_lights/switchApp.js ***!
  \*****************************************/
/*! exports provided: switchApp, buttonFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchApp", function() { return switchApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonFunc", function() { return buttonFunc; });
function switchApp(elemets, item) {
  var statusItem = document.querySelector('.container__element_active');

  if (checkStatusBtn() && statusItem != item) {
    statusItemApp(item, statusItem);
  } else {
    item.classList.remove('container__element_active');
  }
}
function buttonFunc(button) {
  var statusBtn = document.querySelector('.container__toggle_active');
  var statusItem = document.querySelector('.container__element_active');

  if (statusBtn === null) {
    button.classList.add('container__toggle_active');
  } else {
    button.classList.remove('container__toggle_active');

    if (statusItem != null) {
      statusItem.classList.remove('container__element_active');
    }
  }
}

function checkStatusBtn() {
  var statusBtn = document.querySelector('.container__toggle_active');

  if (statusBtn === null) {
    return false;
  } else {
    return true;
  }
}

function statusItemApp(item, statusItem) {
  if (statusItem === null) {
    item.classList.add('container__element_active');
  } else {
    statusItem.classList.remove('container__element_active');
    item.classList.add('container__element_active');
  }
}

/***/ }),

/***/ "./src/trafick_lights/trafick_lights.js":
/*!**********************************************!*\
  !*** ./src/trafick_lights/trafick_lights.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _trafick_lights_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trafick_lights.scss */ "./src/trafick_lights/trafick_lights.scss");
/* harmony import */ var _trafick_lights_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_trafick_lights_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/trafick_lights/app.js");


Object(_app__WEBPACK_IMPORTED_MODULE_1__["app"])();
Object(_app__WEBPACK_IMPORTED_MODULE_1__["toggle"])();

/***/ }),

/***/ "./src/trafick_lights/trafick_lights.scss":
/*!************************************************!*\
  !*** ./src/trafick_lights/trafick_lights.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 12:
/*!****************************************************!*\
  !*** multi ./src/trafick_lights/trafick_lights.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/trafick_lights/trafick_lights.js */"./src/trafick_lights/trafick_lights.js");


/***/ })

/******/ });
//# sourceMappingURL=trafick_lights.js.map