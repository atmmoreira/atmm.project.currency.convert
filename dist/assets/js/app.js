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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_apiFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/apiFetch */ \"./src/helpers/apiFetch.js\");\n/* harmony import */ var _helpers_formatAmount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/formatAmount */ \"./src/helpers/formatAmount.js\");\n/* harmony import */ var _helpers_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/selectors */ \"./src/helpers/selectors.js\");\n\n\n\nObject(_helpers_apiFetch__WEBPACK_IMPORTED_MODULE_0__[\"fetchUrl\"])(_helpers_selectors__WEBPACK_IMPORTED_MODULE_2__[\"url\"]).then(function (response) {\n  return response.json();\n}).then(function (data) {\n  for (var key in data) {\n    _helpers_selectors__WEBPACK_IMPORTED_MODULE_2__[\"optionsCurrency\"].innerHTML += \"\\n        <option value=\\\"\".concat(data[key].code, \"\\\">\").concat(data[key].name, \"</option>\\n      \");\n  }\n\n  _helpers_selectors__WEBPACK_IMPORTED_MODULE_2__[\"optionsCurrency\"].addEventListener('change', function () {\n    _helpers_selectors__WEBPACK_IMPORTED_MODULE_2__[\"cotation\"].textContent = \"\".concat(data[_helpers_selectors__WEBPACK_IMPORTED_MODULE_2__[\"optionsCurrency\"].value].high);\n    _helpers_selectors__WEBPACK_IMPORTED_MODULE_2__[\"currency\"].textContent = \"\".concat(_helpers_selectors__WEBPACK_IMPORTED_MODULE_2__[\"optionsCurrency\"].value);\n    _helpers_selectors__WEBPACK_IMPORTED_MODULE_2__[\"currency2\"].textContent = \"\".concat(_helpers_selectors__WEBPACK_IMPORTED_MODULE_2__[\"optionsCurrency\"].value);\n    _helpers_selectors__WEBPACK_IMPORTED_MODULE_2__[\"salaryDigited\"].textContent = _helpers_selectors__WEBPACK_IMPORTED_MODULE_2__[\"inputSalary\"].value;\n    _helpers_selectors__WEBPACK_IMPORTED_MODULE_2__[\"salaryMonth\"].textContent = (_helpers_selectors__WEBPACK_IMPORTED_MODULE_2__[\"inputSalary\"].value / 12).toFixed(2);\n    _helpers_selectors__WEBPACK_IMPORTED_MODULE_2__[\"salaryConverted\"].textContent = Object(_helpers_formatAmount__WEBPACK_IMPORTED_MODULE_1__[\"formatAmount\"])(_helpers_selectors__WEBPACK_IMPORTED_MODULE_2__[\"inputSalary\"].value / 12 * data[_helpers_selectors__WEBPACK_IMPORTED_MODULE_2__[\"optionsCurrency\"].value].high);\n  });\n})[\"catch\"](function (error) {\n  console.error(error);\n});\n\n//# sourceURL=webpack:///./src/app.js?");

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

/***/ "./src/helpers/selectors.js":
/*!**********************************!*\
  !*** ./src/helpers/selectors.js ***!
  \**********************************/
/*! exports provided: url, inputSalary, optionsCurrency, cotation, salaryDigited, salaryMonth, salaryConverted, currency, currency2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"url\", function() { return url; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputSalary\", function() { return inputSalary; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"optionsCurrency\", function() { return optionsCurrency; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cotation\", function() { return cotation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"salaryDigited\", function() { return salaryDigited; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"salaryMonth\", function() { return salaryMonth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"salaryConverted\", function() { return salaryConverted; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"currency\", function() { return currency; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"currency2\", function() { return currency2; });\nvar url = 'https://economia.awesomeapi.com.br/json/all';\nvar inputSalary = document.querySelector('#inputSalary');\nvar optionsCurrency = document.querySelector('#optionsCurrency');\nvar cotation = document.querySelector('#cotation');\nvar salaryDigited = document.querySelector('#salaryDigited');\nvar salaryMonth = document.querySelector('#salaryMonth');\nvar salaryConverted = document.querySelector('#salaryConverted');\nvar currency = document.querySelector('#currency');\nvar currency2 = document.querySelector('#currency2');\n\n//# sourceURL=webpack:///./src/helpers/selectors.js?");

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