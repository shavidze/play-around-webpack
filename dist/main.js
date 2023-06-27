/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = [
    ,
    /* 0 */ /* 1 */
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = () =>
        "nav";

      /***/
    },
    /* 2 */
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ bottom: () => /* binding */ bottom,
        /* harmony export */ top: () => /* binding */ top,
        /* harmony export */
      });
      const top = "Top";
      const bottom = "Bottom";

      /***/
    },
    /* 3 */
    /***/ (module) => {
      /**
       *
       * @param {string} buttonName
       * @returns {Element}
       */
      const makeButton = (buttonName) => {
        return `Button: ${buttonName}`;
      };

      module.exports = makeButton;

      /***/
    },
    /* 4 */
    /***/ (__unused_webpack_module, exports) => {
      const red = "color:red";
      const blue = "color:blue";
      const makeColorStyle = (color) => `color:${color}`;

      exports.red = red;
      exports.blue = blue;
      exports.makeColorStyle = makeColorStyle;

      /***/
    },
    /******/
  ];
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
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
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
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  (() => {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(1);
    /* harmony import */ var _foo__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(2);
    /* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(3);
    /* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2___default =
      /*#__PURE__*/ __webpack_require__.n(_button__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var _button_styles__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(4);

    console.log(
      (0, _nav__WEBPACK_IMPORTED_MODULE_0__["default"])(),
      _foo__WEBPACK_IMPORTED_MODULE_1__.top,
      _foo__WEBPACK_IMPORTED_MODULE_1__.bottom,
      _button__WEBPACK_IMPORTED_MODULE_2___default()("My BTN"),
      _button_styles__WEBPACK_IMPORTED_MODULE_3__.makeColorStyle
    );
  })();

  /******/
})();
