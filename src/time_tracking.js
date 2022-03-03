/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable keyword-spacing */
/* eslint-disable space-before-function-paren */
/* eslint-disable padded-blocks */
/* eslint-disable no-eval */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable spaced-comment */
/* eslint-disable camelcase */
/* eslint-disable no-var */
/* eslint-disable no-tabs */
/* eslint-disable semi */
/******/ (() => {
  // webpackBootstrap
  // eslint-disable-next-line quotes
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    // eslint-disable-next-line quotes
    /***/ "./src/styles/main.css":
      /*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://time-tracking-dashboard-main/./src/styles/main.css?"
        );
        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");\n\n\n//# sourceURL=webpack://time-tracking-dashboard-main/./src/index.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
