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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/new_year_tree/new_year_tree.js":
/*!********************************************!*\
  !*** ./src/new_year_tree/new_year_tree.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _new_year_tree_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new_year_tree.scss */ "./src/new_year_tree/new_year_tree.scss");
/* harmony import */ var _new_year_tree_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_new_year_tree_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _snowApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snowApp */ "./src/new_year_tree/snowApp.js");


/* startApp(); */

/***/ }),

/***/ "./src/new_year_tree/new_year_tree.scss":
/*!**********************************************!*\
  !*** ./src/new_year_tree/new_year_tree.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/new_year_tree/snowApp.js":
/*!**************************************!*\
  !*** ./src/new_year_tree/snowApp.js ***!
  \**************************************/
/*! exports provided: startApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startApp", function() { return startApp; });
function startApp() {
  setInterval(snowApp, 1000);
}

function snowApp() {
  for (var i = 0; i < 2; i++) {
    addElement();
    setTimeout(dropApp, 200);
    setTimeout(removeElement, 8000);
  }
}

function addElement() {
  var place = document.querySelector(".container");
  var element = document.createElement("span");
  element.textContent = '*';
  element.classList.add("container__snow");
  element.style.right = randomNumber(96) + 2 + "%";
  element.style.transitionDuration = randomNumber(5) + 5 + "s";
  console.log("rotate" + "(" + (randomNumber(2000) - 1000 + "deg)"));
  place.appendChild(element);
}

function dropApp() {
  var elements = document.querySelectorAll(".container__snow");

  for (var i = 0; i < elements.length; i++) {
    if (elements[i].dataDrop != true) {
      elements[i].style.transform = "translateY(93vh) " + "rotate" + "(" + (randomNumber(2000) - 1000 + "deg)");
      elements[i].dataDrop = true;
    }
  }
}

function removeElement() {
  var item = document.querySelector(".container__snow");
  item.remove();
}

function randomNumber(maxNum) {
  var number = Math.floor(Math.random() * maxNum);
  return number;
}

/***/ }),

/***/ 15:
/*!**************************************************!*\
  !*** multi ./src/new_year_tree/new_year_tree.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/new_year_tree/new_year_tree.js */"./src/new_year_tree/new_year_tree.js");


/***/ })

/******/ });
//# sourceMappingURL=new_year_tree.js.map