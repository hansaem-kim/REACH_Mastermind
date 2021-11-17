/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/modal.js */ \"./src/scripts/modal.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var modal = new _scripts_modal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  var startButton = document.querySelector(\"#start-btn\");\n\n  startButton.onclick = function () {\n    modal.closeModal(\"welcome-modal\");\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFJO0FBQzlDLE1BQU1DLEtBQUssR0FBRyxJQUFJSCx5REFBSixFQUFkO0FBRUEsTUFBTUksV0FBVyxHQUFHSCxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBcEI7O0FBQ0FELEVBQUFBLFdBQVcsQ0FBQ0UsT0FBWixHQUFzQixZQUFXO0FBQzdCSCxJQUFBQSxLQUFLLENBQUNJLFVBQU4sQ0FBaUIsZUFBakI7QUFDSCxHQUZEO0FBR0gsQ0FQRCIsInNvdXJjZXMiOlsid2VicGFjazovL1JFQUNIX01hc3Rlcm1pbmQvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9kYWwgZnJvbSBcIi4vc2NyaXB0cy9tb2RhbC5qc1wiXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xyXG4gICAgY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwoKTtcclxuXHJcbiAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RhcnQtYnRuXCIpO1xyXG4gICAgc3RhcnRCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG1vZGFsLmNsb3NlTW9kYWwoXCJ3ZWxjb21lLW1vZGFsXCIpO1xyXG4gICAgfVxyXG59KVxyXG4iXSwibmFtZXMiOlsiTW9kYWwiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb2RhbCIsInN0YXJ0QnV0dG9uIiwicXVlcnlTZWxlY3RvciIsIm9uY2xpY2siLCJjbG9zZU1vZGFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/modal.js":
/*!******************************!*\
  !*** ./src/scripts/modal.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Modal = /*#__PURE__*/function () {\n  function Modal() {\n    _classCallCheck(this, Modal);\n  }\n\n  _createClass(Modal, [{\n    key: \"closeModal\",\n    value: function closeModal(modal) {\n      var popup = document.querySelector(\"#\".concat(modal));\n      popup.classList.add(\"invisible-modal\");\n      popup.classList.remove(\"visible-modal\");\n    }\n  }]);\n\n  return Modal;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb2RhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQU1BO0FBQ0YsbUJBQWE7QUFBQTtBQUVaOzs7O1dBRUQsb0JBQVdDLEtBQVgsRUFBaUI7QUFDYixVQUFNQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxZQUEyQkgsS0FBM0IsRUFBZDtBQUNBQyxNQUFBQSxLQUFLLENBQUNHLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLGlCQUFwQjtBQUNBSixNQUFBQSxLQUFLLENBQUNHLFNBQU4sQ0FBZ0JFLE1BQWhCLENBQXVCLGVBQXZCO0FBRUg7Ozs7OztBQUlMLCtEQUFlUCxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUkVBQ0hfTWFzdGVybWluZC8uL3NyYy9zY3JpcHRzL21vZGFsLmpzP2EwZWEiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTW9kYWwge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VNb2RhbChtb2RhbCl7XHJcbiAgICAgICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHttb2RhbH1gKTtcclxuICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiaW52aXNpYmxlLW1vZGFsXCIpO1xyXG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlLW1vZGFsXCIpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsOyJdLCJuYW1lcyI6WyJNb2RhbCIsIm1vZGFsIiwicG9wdXAiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/modal.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SRUFDSF9NYXN0ZXJtaW5kLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;