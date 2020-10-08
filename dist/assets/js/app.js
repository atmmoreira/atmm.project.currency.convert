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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_apiFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/apiFetch */ \"./src/helpers/apiFetch.js\");\n/* harmony import */ var _helpers_formatAmount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/formatAmount */ \"./src/helpers/formatAmount.js\");\n\n\nvar selectors = [document.querySelector('#inputSalary'), document.querySelector('#optionsCurrency'), document.querySelector('#cotation'), document.querySelector('#salaryDigited'), document.querySelector('#salaryMonth'), document.querySelector('#salaryConverted'), document.querySelector('#currency'), document.querySelector('#currency2'), 'https://economia.awesomeapi.com.br/json/all'];\nObject(_helpers_apiFetch__WEBPACK_IMPORTED_MODULE_0__[\"fetchUrl\"])(selectors[8]).then(function (response) {\n  return response.json();\n}).then(function (data) {\n  for (var key in data) {\n    selectors[1].innerHTML += \"\\n        <option value=\\\"\".concat(data[key].code, \"\\\">\").concat(data[key].name, \"</option>\\n      \");\n  }\n\n  optionsCurrency.addEventListener('change', function () {\n    selectors[2].textContent = \"\".concat(data[selectors[1].value].high);\n    selectors[6].textContent = \"\".concat(selectors[1].value);\n    selectors[7].textContent = \"\".concat(selectors[1].value);\n    selectors[3].textContent = Object(_helpers_formatAmount__WEBPACK_IMPORTED_MODULE_1__[\"formatAmount\"])(selectors[0].value);\n    selectors[4].textContent = Object(_helpers_formatAmount__WEBPACK_IMPORTED_MODULE_1__[\"formatAmount\"])(selectors[0].value) / 12;\n    selectors[5].textContent = Object(_helpers_formatAmount__WEBPACK_IMPORTED_MODULE_1__[\"formatAmount\"])(selectors[0].value / 12 * data[selectors[1].value].high);\n  });\n})[\"catch\"](function (error) {\n  console.error(error);\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/apiFetch.js":
/*!*********************************!*\
  !*** ./src/helpers/apiFetch.js ***!
  \*********************************/
/*! exports provided: fetchUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchUrl\", function() { return fetchUrl; });\nvar fetchUrl = function fetchUrl(url, response) {\n  return response = fetch(url);\n};\n\n\n\n//# sourceURL=webpack:///./src/helpers/apiFetch.js?");

/***/ }),

/***/ "./src/helpers/formatAmount.js":
/*!*************************************!*\
  !*** ./src/helpers/formatAmount.js ***!
  \*************************************/
/*! exports provided: formatAmount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatAmount\", function() { return formatAmount; });\nvar formatAmount = function formatAmount(amount) {\n  return amount.toLocaleString('pt-BR', {\n    style: 'currency',\n    currency: 'BRL'\n  });\n};\n\n\n\n//# sourceURL=webpack:///./src/helpers/formatAmount.js?");

/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./src/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/app.js */\"./src/app.js\");\n\n\n//# sourceURL=webpack:///multi_./src/app.js?");

/***/ })

/******/ });