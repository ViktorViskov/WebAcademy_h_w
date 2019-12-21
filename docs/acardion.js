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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/acardion/acardion.js":
/*!**********************************!*\
  !*** ./src/acardion/acardion.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _acardion_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acardion.scss */ "./src/acardion/acardion.scss");
/* harmony import */ var _acardion_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_acardion_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_styles_button_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/styles/button.scss */ "./src/common/styles/button.scss");
/* harmony import */ var _common_styles_button_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_styles_button_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "./src/acardion/app.js");
/* harmony import */ var _common_scripts_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/scripts/button */ "./src/common/scripts/button.js");




var mount = document.querySelector("body");
var array = [{
  title: 'Lorem ipsum dolor sit amet.',
  content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque debitis nesciunt accusantium! Iusto officia saepe doloribus consequuntur architecto aspernatur quam magnam minima, odit repudiandae rerum commodi voluptates molestiae assumenda ipsa vel nam nemo? Nisi, cumque minus aliquam explicabo repellat ab.'
}, {
  title: 'Lorem ipsum dolor sit amet.',
  content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque debitis nesciunt accusantium! Iusto officia saepe doloribus consequuntur architecto aspernatur quam magnam minima, odit repudiandae rerum commodi voluptates molestiae assumenda ipsa vel nam nemo? Nisi, cumque minus aliquam explicabo repellat ab.'
}, {
  title: 'Lorem ipsum dolor sit amet.',
  content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque debitis nesciunt accusantium! Iusto officia saepe doloribus consequuntur architecto aspernatur quam magnam minima, odit repudiandae rerum commodi voluptates molestiae assumenda ipsa vel nam nemo? Nisi, cumque minus aliquam explicabo repellat ab.'
}];
Object(_common_scripts_button__WEBPACK_IMPORTED_MODULE_3__["createBtn"])(mount, 'Створити слайдер', 'btn', function () {
  Object(_app__WEBPACK_IMPORTED_MODULE_2__["app"])(mount, array);
});

/***/ }),

/***/ "./src/acardion/acardion.scss":
/*!************************************!*\
  !*** ./src/acardion/acardion.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/acardion/app.js":
/*!*****************************!*\
  !*** ./src/acardion/app.js ***!
  \*****************************/
/*! exports provided: app */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ "./src/acardion/event.js");

function app(mountPoint, array) {
  var container = document.createElement('div');
  container.classList.add('container');
  array.forEach(function (element) {
    container.appendChild(createSection(element.title, element.content));
  });
  mountPoint.appendChild(container);
  Object(_event__WEBPACK_IMPORTED_MODULE_0__["addEvent"])();
}

function createSection(title, content) {
  var section = document.createElement('section');
  section.classList.add('section');
  var titleElement = document.createElement('h3');
  titleElement.classList.add('title');
  var contentElement = document.createElement('p');
  contentElement.classList.add('content');
  titleElement.textContent = title;
  contentElement.textContent = content;
  section.appendChild(titleElement);
  section.appendChild(contentElement);
  return section;
}

/***/ }),

/***/ "./src/acardion/event.js":
/*!*******************************!*\
  !*** ./src/acardion/event.js ***!
  \*******************************/
/*! exports provided: addEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEvent", function() { return addEvent; });
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switch */ "./src/acardion/switch.js");

function addEvent() {
  var obj = document.querySelectorAll('section');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var item = _step.value;
      item.classList.add('section');
      var elem = item.querySelector('.content');
      item.addEventListener('click', function () {
        Object(_switch__WEBPACK_IMPORTED_MODULE_0__["shitchOnOff"])(item, elem);
      });
    };

    for (var _iterator = obj[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/***/ }),

/***/ "./src/acardion/oneItemApp.js":
/*!************************************!*\
  !*** ./src/acardion/oneItemApp.js ***!
  \************************************/
/*! exports provided: oneItemApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oneItemApp", function() { return oneItemApp; });
function oneItemApp() {
  var section = document.querySelectorAll('.section');
  var items = document.querySelectorAll('.content__active');
  items.forEach(function (element) {
    element.classList.remove('content__active');
  }, section.forEach(function (itemm) {
    itemm.classList.remove('section__active');
  }));
}

/***/ }),

/***/ "./src/acardion/switch.js":
/*!********************************!*\
  !*** ./src/acardion/switch.js ***!
  \********************************/
/*! exports provided: shitchOnOff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shitchOnOff", function() { return shitchOnOff; });
/* harmony import */ var _oneItemApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./oneItemApp */ "./src/acardion/oneItemApp.js");

function shitchOnOff(item, element) {
  Object(_oneItemApp__WEBPACK_IMPORTED_MODULE_0__["oneItemApp"])();
  item.classList.add('section__active');
  element.classList.add('content__active');
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

/***/ 17:
/*!****************************************!*\
  !*** multi ./src/acardion/acardion.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/acardion/acardion.js */"./src/acardion/acardion.js");


/***/ })

/******/ });
//# sourceMappingURL=acardion.js.map