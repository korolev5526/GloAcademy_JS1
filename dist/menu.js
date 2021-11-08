/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth */ \"./src/modules/auth.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n\r\n\r\n\r\n(0,_modules_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBa0M7QUFDQTtBQUNsQztBQUNBLHlEQUFJO0FBQ0oseURBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9hY2FkZW15X2pzMS8uL3NyYy9tZW51LmpzP2FiMDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF1dGggZnJvbSBcIi4vbW9kdWxlcy9hdXRoXCI7XHJcbmltcG9ydCBtZW51IGZyb20gXCIuL21vZHVsZXMvbWVudVwiO1xyXG5cclxuYXV0aCgpO1xyXG5tZW51KCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst auth = () => {\r\n  const buttonAuth = document.querySelector(\".button-auth\");\r\n  const buttonAuthOut = document.querySelector(\".button-out\");\r\n  const modalAuth = document.querySelector(\".modal-auth\");\r\n  const closeAuth = document.querySelector(\".close-auth\");\r\n  const loginForm = document.getElementById(\"logInForm\");\r\n  const inputLogin = document.getElementById(\"login\");\r\n  const inputPassword = document.getElementById(\"password\");\r\n  const userName = document.querySelector(\".user-name\");\r\n\r\n  const login = (user) => {\r\n    buttonAuth.style.display = \"none\";\r\n\r\n    buttonAuthOut.style.display = \"flex\";\r\n    userName.textContent = user.login;\r\n    userName.style.display = \"flex\";\r\n    modalAuth.style.display = \"none\";\r\n  };\r\n\r\n  const logout = () => {\r\n    buttonAuth.style.display = \"flex\";\r\n\r\n    buttonAuthOut.style.display = \"none\";\r\n    userName.textContent = \"\";\r\n    userName.style.display = \"none\";\r\n    localStorage.removeItem(\"user\");\r\n  };\r\n\r\n  buttonAuth.addEventListener(\"click\", () => {\r\n    modalAuth.style.display = \"flex\";\r\n  });\r\n\r\n  closeAuth.addEventListener(\"click\", () => {\r\n    modalAuth.style.display = \"none\";\r\n  });\r\n\r\n  buttonAuthOut.addEventListener(\"click\", () => {\r\n    logout();\r\n  });\r\n\r\n  loginForm.addEventListener(\"submit\", (event) => {\r\n    event.preventDefault();\r\n    if (inputLogin.value != \"\") {\r\n      const user = {\r\n        login: inputLogin.value,\r\n        password: inputPassword.value,\r\n      };\r\n\r\n      localStorage.setItem(\"user\", JSON.stringify(user));\r\n      login(user);\r\n    } else alert(\"Заполните поле ЛОГИН!!!\");\r\n  });\r\n\r\n  if (localStorage.getItem(\"user\")) {\r\n    login(JSON.parse(localStorage.getItem(\"user\")));\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9hY2FkZW15X2pzMS8uL3NyYy9tb2R1bGVzL2F1dGguanM/ZTdiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhdXRoID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJ1dHRvbkF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1hdXRoXCIpO1xyXG4gIGNvbnN0IGJ1dHRvbkF1dGhPdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1vdXRcIik7XHJcbiAgY29uc3QgbW9kYWxBdXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1hdXRoXCIpO1xyXG4gIGNvbnN0IGNsb3NlQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtYXV0aFwiKTtcclxuICBjb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ0luRm9ybVwiKTtcclxuICBjb25zdCBpbnB1dExvZ2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblwiKTtcclxuICBjb25zdCBpbnB1dFBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFwiKTtcclxuICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlci1uYW1lXCIpO1xyXG5cclxuICBjb25zdCBsb2dpbiA9ICh1c2VyKSA9PiB7XHJcbiAgICBidXR0b25BdXRoLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgICBidXR0b25BdXRoT3V0LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gdXNlci5sb2dpbjtcclxuICAgIHVzZXJOYW1lLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgYnV0dG9uQXV0aC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcblxyXG4gICAgYnV0dG9uQXV0aE91dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB1c2VyTmFtZS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICB1c2VyTmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XHJcbiAgfTtcclxuXHJcbiAgYnV0dG9uQXV0aC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgbW9kYWxBdXRoLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICB9KTtcclxuXHJcbiAgY2xvc2VBdXRoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH0pO1xyXG5cclxuICBidXR0b25BdXRoT3V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBsb2dvdXQoKTtcclxuICB9KTtcclxuXHJcbiAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGlucHV0TG9naW4udmFsdWUgIT0gXCJcIikge1xyXG4gICAgICBjb25zdCB1c2VyID0ge1xyXG4gICAgICAgIGxvZ2luOiBpbnB1dExvZ2luLnZhbHVlLFxyXG4gICAgICAgIHBhc3N3b3JkOiBpbnB1dFBhc3N3b3JkLnZhbHVlLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgICAgbG9naW4odXNlcik7XHJcbiAgICB9IGVsc2UgYWxlcnQoXCLQl9Cw0L/QvtC70L3QuNGC0LUg0L/QvtC70LUg0JvQntCT0JjQnSEhIVwiKTtcclxuICB9KTtcclxuXHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSkge1xyXG4gICAgbG9naW4oSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/auth.js\n");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const restourant = \"food-band\";\r\n\r\n  const renderItems = (data) => {\r\n    console.log(data);\r\n  };\r\n\r\n  fetch(`./db/${restourant}.json`)\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      renderItems(data);\r\n    })\r\n    .catch((error) => {\r\n      console.log(error);\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxpRUFBZSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9hY2FkZW15X2pzMS8uL3NyYy9tb2R1bGVzL21lbnUuanM/MmZhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtZW51ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3RvdXJhbnQgPSBcImZvb2QtYmFuZFwiO1xyXG5cclxuICBjb25zdCByZW5kZXJJdGVtcyA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICB9O1xyXG5cclxuICBmZXRjaChgLi9kYi8ke3Jlc3RvdXJhbnR9Lmpzb25gKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZW5kZXJJdGVtcyhkYXRhKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVudTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/menu.js\n");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;