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

/***/ "./src/button/button.js":
/*!******************************!*\
  !*** ./src/button/button.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.scss */ "./src/button/button.scss");
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_button_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_scripts_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/scripts/button */ "./src/common/scripts/button.js");
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment */ "./src/button/comment.js");



Object(_common_scripts_button__WEBPACK_IMPORTED_MODULE_1__["createBtn"])(document.querySelector('.nav-menu'), "Додати коментар", "btn", comment);

function comment() {
  Object(_comment__WEBPACK_IMPORTED_MODULE_2__["createComment"])(document.querySelector(".container"));
}

/***/ }),

/***/ "./src/button/button.scss":
/*!********************************!*\
  !*** ./src/button/button.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/button/comment.js":
/*!*******************************!*\
  !*** ./src/button/comment.js ***!
  \*******************************/
/*! exports provided: createComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComment", function() { return createComment; });
/* harmony import */ var _common_scripts_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/scripts/button.js */ "./src/common/scripts/button.js");

function createComment(place) {
  var comment = mkEl("section", "comment");
  var text = mkEl("p", "comment__text");
  text.innerText = prompt("Уведіть текст коментара");
  comment.appendChild(text);
  var footer = mkEl("footer", "comment__footer");
  comment.appendChild(footer);
  var btn = Object(_common_scripts_button_js__WEBPACK_IMPORTED_MODULE_0__["createBtn"])(footer, "Видалити", "btn", removeComment);
  var user = mkEl("section", "comment__user-name");
  user.innerText = prompt("Уведіть ваше імя");
  footer.appendChild(user);
  commentValidation(text.innerText, user.innerText);

  function removeComment() {
    comment.remove();
  }

  function commentValidation(firstValue, secondValue) {
    if (firstValue != "" && secondValue != "" && firstValue.length > 2 && secondValue.length > 2) {
      place.appendChild(comment);
    } else {
      removeComment();
    }
  }
}

function mkEl(tagName, className) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  return element;
}

/***/ }),

/***/ "./src/common/scripts/button.js":
/*!**************************************!*\
  !*** ./src/common/scripts/button.js ***!
  \**************************************/
/*! exports provided: createBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBtn", function() { return createBtn; });
/* harmony import */ var _styles_button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/button.scss */ "./src/common/styles/button.scss");
/* harmony import */ var _styles_button_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_button_scss__WEBPACK_IMPORTED_MODULE_0__);

function createBtn(place, text, style, btnFunc) {
  var btn = document.createElement('button');
  btn.textContent = text;
  btn.classList.add(style);
  btn.onclick = btnFunc;
  place.appendChild(btn);
}

/***/ }),

/***/ "./src/common/styles/button.scss":
/*!***************************************!*\
  !*** ./src/common/styles/button.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 15:
/*!************************************!*\
  !*** multi ./src/button/button.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/button/button.js */"./src/button/button.js");


/***/ })

/******/ });
//# sourceMappingURL=button.js.map