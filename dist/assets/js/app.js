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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  'use strict';\n\n  var formata = function formata(num) {\n    var p = Number(num).toFixed(2).split(\".\");\n    return \"\" + p[0].split(\"\").reverse().reduce(function (acc, num, i, orig) {\n      return num + (i && !(i % 3) ? \".\" : \"\") + acc;\n    }, \"\") + \",\" + p[1];\n  };\n\n  var apiCurrent = new XMLHttpRequest();\n  apiCurrent.open('GET', 'https://economia.awesomeapi.com.br/json/all');\n  apiCurrent.send();\n\n  var isApiOk = function isApiOk() {\n    return apiCurrent.readyState === 4 && apiCurrent.status === 200;\n  };\n\n  var getData = function getData() {\n    var result;\n\n    try {\n      result = JSON.parse(apiCurrent.responseText);\n    } catch (error) {\n      result = null;\n    }\n\n    return result;\n  };\n\n  var makeWork = function makeWork() {\n    if (isApiOk()) return;\n  };\n\n  apiCurrent.addEventListener('readystatechange', makeWork);\n  var inputSalary = document.querySelector('[data-js=\"inputSalary\"]');\n\n  var cleanFields = function cleanFields() {\n    return inputSalary.value = '';\n  };\n\n  var dolar = document.querySelector('[data-js=\"dolar\"]');\n  var dolarcanadense = document.querySelector('[data-js=\"dolarcanadense\"]');\n  var euro = document.querySelector('[data-js=\"euro\"]');\n  var libra = document.querySelector('[data-js=\"libra\"]');\n  var textSalary = document.querySelector('[data-js=\"salary\"]');\n  var textSalaryMonth = document.querySelector('[data-js=\"salaryMonth\"]');\n  var textSalaryReal = document.querySelector('[data-js=\"salaryConverted\"]');\n  var cotation = document.querySelector('[data-js=\"cotation\"]');\n\n  var formatCurrency = function formatCurrency(n) {\n    return n = formata(inputSalary.value);\n  };\n\n  var divideCurrency = function divideCurrency() {\n    var resultDivide = inputSalary.value / 12;\n    return resultDivide;\n  };\n\n  var funcDolar = function funcDolar(event) {\n    event.preventDefault();\n    var round = formatCurrency();\n    var divide = divideCurrency();\n    var data = getData();\n    var dataResult = data.USD.high;\n    var usd = dataResult.replace(',', '.');\n    textSalary.textContent = '$USD ' + round;\n    textSalaryMonth.textContent = '$USD ' + formata(divide);\n    textSalaryReal.textContent = 'R$ ' + formata(divide * usd);\n    cotation.textContent = '$USD ' + usd;\n    cleanFields();\n  };\n\n  dolar.addEventListener('click', funcDolar);\n\n  var funcDolarCanadense = function funcDolarCanadense(event) {\n    event.preventDefault();\n    var round = formatCurrency();\n    var divide = divideCurrency();\n    var data = getData();\n    var dataResult = data.CAD.high;\n    var cad = dataResult.replace(',', '.');\n    textSalary.textContent = '$CAD ' + round;\n    textSalaryMonth.textContent = '$CAD ' + formata(divide);\n    textSalaryReal.textContent = 'R$ ' + formata(divide * cad);\n    cotation.textContent = '$CAD ' + cad;\n    cleanFields();\n  };\n\n  dolarcanadense.addEventListener('click', funcDolarCanadense);\n\n  var funcEuro = function funcEuro(event) {\n    event.preventDefault();\n    var round = formatCurrency();\n    var divide = divideCurrency();\n    var data = getData();\n    var dataResult = data.EUR.high;\n    var euro = dataResult.replace(',', '.');\n    textSalary.textContent = '€EUR ' + round;\n    textSalaryMonth.textContent = '€EUR ' + formata(divide);\n    textSalaryReal.textContent = 'R$ ' + formata(divide * euro);\n    cotation.textContent = '€EUR ' + euro;\n    cleanFields();\n  };\n\n  euro.addEventListener('click', funcEuro);\n\n  var funcLibra = function funcLibra(event) {\n    event.preventDefault();\n    var round = formatCurrency();\n    var divide = divideCurrency();\n    var data = getData();\n    var dataResult = data.GBP.high;\n    var libra = dataResult.replace(',', '.');\n    textSalary.textContent = '£GBP ' + round;\n    textSalaryMonth.textContent = '£GBP ' + formata(divide);\n    textSalaryReal.textContent = 'R$ ' + formata(divide * libra);\n    cotation.textContent = '£GBP ' + libra;\n    cleanFields();\n  };\n\n  libra.addEventListener('click', funcLibra);\n})();\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });