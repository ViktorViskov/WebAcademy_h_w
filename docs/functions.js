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

/***/ "./src/functions/appEight.js":
/*!***********************************!*\
  !*** ./src/functions/appEight.js ***!
  \***********************************/
/*! exports provided: appEight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appEight", function() { return appEight; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);

function appEight() {
  var array = [];
  var num = 0;

  while (Object(util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(num) && !isNaN(num)) {
    num = parseInt(getNumber());
    array.push(num);
  }

  array.pop();
  alert(calc(array));
}

function getNumber() {
  return prompt("Уведіть число");
}

function calc(array) {
  var summ = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;
      summ += item;
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

  return summ;
}

/***/ }),

/***/ "./src/functions/appEleven.js":
/*!************************************!*\
  !*** ./src/functions/appEleven.js ***!
  \************************************/
/*! exports provided: pow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pow", function() { return pow; });
function pow(x, n) {
  for (var i = 0; i < n - 1; i++) {
    x *= x;
  }

  console.log(x);
  return x;
}

/***/ }),

/***/ "./src/functions/appFive.js":
/*!**********************************!*\
  !*** ./src/functions/appFive.js ***!
  \**********************************/
/*! exports provided: appFive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appFive", function() { return appFive; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);

function appFive(obj) {
  var salary = 0;
  var name;

  for (var item in obj) {
    if (salary < obj[item] && Object(util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(obj[item])) {
      salary = obj[item];
      name = item;
    }
  }

  console.log(name);
}

/***/ }),

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

function calcSalary(obj) {
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

/***/ "./src/functions/appNine.js":
/*!**********************************!*\
  !*** ./src/functions/appNine.js ***!
  \**********************************/
/*! exports provided: find */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
function find(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == value) {
      console.log(i);
      return i;
    }
  }

  console.log('-1');
  return -1;
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

/***/ "./src/functions/appSeven.js":
/*!***********************************!*\
  !*** ./src/functions/appSeven.js ***!
  \***********************************/
/*! exports provided: appSeven */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appSeven", function() { return appSeven; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);

function appSeven(array) {
  console.log(array);
  alert(array[randomNumber(array.length)]);
}

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

/***/ }),

/***/ "./src/functions/appSix.js":
/*!*********************************!*\
  !*** ./src/functions/appSix.js ***!
  \*********************************/
/*! exports provided: appSix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appSix", function() { return appSix; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);

function appSix(obj) {
  for (var item in obj) {
    if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(obj[item])) {
      obj[item] *= 2;
    }
  }

  console.log(obj);
}

/***/ }),

/***/ "./src/functions/appTen.js":
/*!*********************************!*\
  !*** ./src/functions/appTen.js ***!
  \*********************************/
/*! exports provided: filterRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterRange", function() { return filterRange; });
function filterRange(arr, a, b) {
  var newArr = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (a <= item && item <= b) {
        newArr.push(item);
      }
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

  console.log(newArr);
  return newArr;
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

/***/ "./src/functions/appTwelve.js":
/*!************************************!*\
  !*** ./src/functions/appTwelve.js ***!
  \************************************/
/*! exports provided: appTwelve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appTwelve", function() { return appTwelve; });
function appTwelve() {
  var date = {
    day: 20,
    month: 2,
    year: 2012,
    hour: 3,
    minut: 12
  };
  console.log(Date(2012, 0, 3));
  return date;
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
/* harmony import */ var _appFive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./appFive */ "./src/functions/appFive.js");
/* harmony import */ var _appSix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appSix */ "./src/functions/appSix.js");
/* harmony import */ var _appSeven__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appSeven */ "./src/functions/appSeven.js");
/* harmony import */ var _appEight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./appEight */ "./src/functions/appEight.js");
/* harmony import */ var _appNine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./appNine */ "./src/functions/appNine.js");
/* harmony import */ var _appTen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./appTen */ "./src/functions/appTen.js");
/* harmony import */ var _appEleven__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./appEleven */ "./src/functions/appEleven.js");
/* harmony import */ var _appTwelve__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./appTwelve */ "./src/functions/appTwelve.js");












var obj = {
  John: 400,
  Jack: 20000,
  test: "agfgsd"
};
var array = [1, 3, 345, 532465, 634567, 37674, 4674, 467467, 464213451, 1342];
var programs = [_appOne__WEBPACK_IMPORTED_MODULE_0__["randomInteger"], _appTwo__WEBPACK_IMPORTED_MODULE_1__["appTwo"], _appThree__WEBPACK_IMPORTED_MODULE_2__["ifEmpty"], _appFour__WEBPACK_IMPORTED_MODULE_3__["calcSalary"], _appFive__WEBPACK_IMPORTED_MODULE_4__["appFive"], _appSix__WEBPACK_IMPORTED_MODULE_5__["appSix"], _appSeven__WEBPACK_IMPORTED_MODULE_6__["appSeven"], _appEight__WEBPACK_IMPORTED_MODULE_7__["appEight"], _appNine__WEBPACK_IMPORTED_MODULE_8__["find"], _appTen__WEBPACK_IMPORTED_MODULE_9__["filterRange"], _appEleven__WEBPACK_IMPORTED_MODULE_10__["pow"], _appTwelve__WEBPACK_IMPORTED_MODULE_11__["appTwelve"]];
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
  } else if (Number(elementNumber) === 4) {
    programs[Number(elementNumber) - 1](obj);
  } else if (Number(elementNumber) === 5) {
    programs[Number(elementNumber) - 1](obj);
  } else if (Number(elementNumber) === 6) {
    programs[Number(elementNumber) - 1](obj);
  } else if (Number(elementNumber) === 7) {
    programs[Number(elementNumber) - 1](array);
  } else if (Number(elementNumber) === 9) {
    programs[Number(elementNumber) - 1](array, 37674);
  } else if (Number(elementNumber) === 10) {
    programs[Number(elementNumber) - 1](array, 1, 10000);
  } else if (Number(elementNumber) === 11) {
    programs[Number(elementNumber) - 1](2, 3);
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