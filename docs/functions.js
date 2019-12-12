/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"functions": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([11,"vendors~functions"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/functions/appFour.js":
/*!**********************************!*\
  !*** ./src/functions/appFour.js ***!
  \**********************************/
/*! exports provided: calcSalary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcSalary", function() { return calcSalary; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);

function calcSalary() {
  var obj = {
    John: 400,
    Jeka: 20000,
    Oleg: "agfgsd"
  };
  var totalSalary = 0;

  for (var item in obj) {
    if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(obj[item])) {
      totalSalary += Number(obj[item]);
    } else {
      continue;
    }
  }

  console.log(obj);
  console.log(totalSalary);
}

/***/ }),

/***/ "./src/functions/appOne.js":
/*!*********************************!*\
  !*** ./src/functions/appOne.js ***!
  \*********************************/
/*! exports provided: randomInteger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomInteger", function() { return randomInteger; });
function validation(text) {
  var inValue = prompt("Введіть " + text + " число");

  while (inValue === null || inValue === '' || isNaN(inValue)) {
    inValue = prompt("Помилка! Введіть число");
  }

  return Number(inValue);
}

function randomInteger(min, max) {
  alert('Програма для генерації випадкового числа. Введіть min мінімальне число включно від якого почнеться генерація і max максимальне число до якого відбудеться генерація');
  min = validation('мінімальне');
  max = validation('максимальне');

  if (min > max) {
    alert('Помилка. Мінімальне число не може бути більше максимального!');
  } else {
    alert(Math.round(Math.random() * (max - min) + min));
  }
}

/***/ }),

/***/ "./src/functions/appThree.js":
/*!***********************************!*\
  !*** ./src/functions/appThree.js ***!
  \***********************************/
/*! exports provided: ifEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifEmpty", function() { return ifEmpty; });
function ifEmpty(obj) {
  if (obj === undefined) {
    alert("Передайте функції обєкт!");
    return true;
  } else if (obj === {}) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

/***/ }),

/***/ "./src/functions/appTwo.js":
/*!*********************************!*\
  !*** ./src/functions/appTwo.js ***!
  \*********************************/
/*! exports provided: appTwo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appTwo", function() { return appTwo; });
function appTwo() {
  var obj = {};
  console.log(obj);
  obj.name = 'Вася';
  console.log(obj);
  obj.surname = 'Петров';
  console.log(obj);
  obj.name = 'Сергей';
  console.log(obj);
  delete obj.name;
  console.log(obj);
}

/***/ }),

/***/ "./src/functions/functions.js":
/*!************************************!*\
  !*** ./src/functions/functions.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.scss */ "./src/functions/functions.scss");
/* harmony import */ var _functions_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_functions_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _startApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startApp */ "./src/functions/startApp.js");



/***/ }),

/***/ "./src/functions/functions.scss":
/*!**************************************!*\
  !*** ./src/functions/functions.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/functions/startApp.js":
/*!***********************************!*\
  !*** ./src/functions/startApp.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _appOne__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appOne */ "./src/functions/appOne.js");
/* harmony import */ var _appTwo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appTwo */ "./src/functions/appTwo.js");
/* harmony import */ var _appThree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appThree */ "./src/functions/appThree.js");
/* harmony import */ var _appFour__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appFour */ "./src/functions/appFour.js");




var programs = [_appOne__WEBPACK_IMPORTED_MODULE_0__["randomInteger"], _appTwo__WEBPACK_IMPORTED_MODULE_1__["appTwo"], _appThree__WEBPACK_IMPORTED_MODULE_2__["ifEmpty"], _appFour__WEBPACK_IMPORTED_MODULE_3__["calcSalary"]];
var elements = document.querySelectorAll('.main__element');

function eventApp() {
  var _loop = function _loop(i) {
    var element = elements[i];
    element.addEventListener('click', function () {
      startApp(element);
    });
  };

  for (var i = 0; i < elements.length; i++) {
    _loop(i);
  }
}

function startApp(element) {
  var contentElement = element.textContent;
  var elementNumber = '';

  for (var i = 0; i < contentElement.length; i++) {
    if (contentElement[i] === ' ') {
      elementNumber += contentElement[i + 1];

      if (contentElement[i + 2] != undefined) {
        elementNumber += contentElement[i + 2];
      }
    }
  }

  if (Number(elementNumber) === 3) {
    programs[Number(elementNumber) - 1]({});
  } else {
    programs[Number(elementNumber) - 1]();
  }
}

eventApp();

/***/ }),

/***/ 11:
/*!******************************************!*\
  !*** multi ./src/functions/functions.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/functions/functions.js */"./src/functions/functions.js");


/***/ })

/******/ });
//# sourceMappingURL=functions.js.map