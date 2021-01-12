module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/forum/ExpirationWarningModal.js":
/*!*********************************************!*\
  !*** ./src/forum/ExpirationWarningModal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExpirationWarningModal; });
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__);






var ExpirationWarningModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ExpirationWarningModal, _Modal);

  function ExpirationWarningModal() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Modal.call.apply(_Modal, [this].concat(args)) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "remainingSeconds", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "remainingTimeString", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "updateInterval", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "restartListener", void 0);

    return _this;
  }

  var _proto = ExpirationWarningModal.prototype;

  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);

    this.remainingSeconds = this.attrs.remainingTimeMillis / 1000;
    this.recalculateRemainingTime();
    this.updateInterval = setInterval(this.updateRemainingTime.bind(this), 1000);
  };

  _proto.onready = function onready() {
    this.restartListener = this.restartDetected.bind(this);
    window.addEventListener('autologoutRestarted', this.restartListener);
  };

  _proto.restartDetected = function restartDetected() {
    this.removeTimeUpdater();
    this.hide();
  };

  _proto.recalculateRemainingTime = function recalculateRemainingTime() {
    var minutes = Math.floor(this.remainingSeconds / 60);
    var seconds = this.remainingSeconds - minutes * 60;
    this.remainingTimeString = minutes + ":" + seconds.toString().padStart(2, '0');
  };

  _proto.updateRemainingTime = function updateRemainingTime() {
    this.remainingSeconds--;

    if (this.remainingSeconds < 0) {
      this.removeTimeUpdater();
    } else {
      this.recalculateRemainingTime();
      m.redraw();
    }
  };

  _proto.removeTimeUpdater = function removeTimeUpdater() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
      this.updateInterval = null;
    }
  };

  _proto.className = function className() {
    return 'ExpirationWarningModal Modal--small';
  };

  _proto.title = function title() {
    return app.translator.trans('tiborsulyan-autologout.forum.warning-modal.title');
  };

  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form Form--centered"
    }, m("div", {
      className: "Modal-header"
    }, m("h3", null, app.translator.trans('tiborsulyan-autologout.forum.warning-modal.remaining'), " ", this.remainingTimeString)), m("div", {
      className: "Form-group"
    }, flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      className: 'Button Button--primary Button--block',
      type: 'submit',
      loading: this.loading,
      onclick: this.stay.bind(this)
    }, app.translator.trans('tiborsulyan-autologout.forum.warning-modal.stay')), ",", flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      className: 'Button Button--primary Button--block',
      type: 'submit',
      loading: this.loading,
      onclick: this.leave.bind(this)
    }, app.translator.trans('tiborsulyan-autologout.forum.warning-modal.leave')))));
  };

  _proto.onremove = function onremove() {
    window.removeEventListener('autologoutRestarted', this.restartListener);
    this.removeTimeUpdater();
  };

  _proto.onsubmit = function onsubmit(e) {
    e.preventDefault();
  };

  _proto.stay = function stay() {
    app.request({
      method: 'POST',
      url: app.forum.attribute('baseUrl') + "/api/keepalive"
    });
    this.hide();
  };

  _proto.leave = function leave() {
    this.removeTimeUpdater();
    app.session.logout();
  };

  return ExpirationWarningModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_3___default.a);


;

/***/ }),

/***/ "./src/forum/SessionTimer.js":
/*!***********************************!*\
  !*** ./src/forum/SessionTimer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SessionTimer; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _ExpirationWarningModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpirationWarningModal */ "./src/forum/ExpirationWarningModal.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_2__);




var SessionTimer = /*#__PURE__*/function () {
  function SessionTimer(options) {
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "options", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "warnTimer", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "logoutTimer", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "storageListener", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "lastUpdate", 0);

    this.options = options;
    this.warnTimer = null;
    this.logoutTimer = null;
    this.storageListener = this.expirationTimeUpdated.bind(this);
    window.addEventListener('storage', this.storageListener);
  }

  var _proto = SessionTimer.prototype;

  _proto.warn = function warn() {
    flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.modal.show(_ExpirationWarningModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
      remainingTimeMillis: this.options.logoutAfter - this.options.warnAfter
    });
  };

  _proto.storageKey = function storageKey() {
    return "tiborsulyan.autologout";
  };

  _proto.logout = function logout() {
    if (flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.session.user) {
      this.stop();
      flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.session.logout();
    }
  };

  _proto.stopTimers = function stopTimers() {
    if (this.warnTimer) {
      clearTimeout(this.warnTimer);
      this.warnTimer = null;
    }

    if (this.logoutTimer) {
      clearTimeout(this.logoutTimer);
      this.logoutTimer = null;
    }
  };

  _proto.removeStorageListener = function removeStorageListener() {
    window.removeEventListener('storage', this.storageListener);
    this.storageListener = null;
  };

  _proto.stop = function stop() {
    this.stopTimers();
    localStorage.clear();
    this.removeStorageListener();
  };

  _proto.start = function start() {
    if (this.options.warnAfter) {
      this.warnTimer = setTimeout(this.warn.bind(this), this.options.warnAfter);
    }

    this.logoutTimer = setTimeout(this.logout.bind(this), this.options.logoutAfter);
  };

  _proto.expirationTimeUpdated = function expirationTimeUpdated(e) {
    if (flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.session.user) {
      if (e.key === "tiborsulyan.autologout") {
        if (e.newValue) {
          // Update detected from another tab, restarting timer
          this.lastUpdate = Date.now();
          this.restart();
        } else {
          // Logout happened on another tab
          this.logout();
        }
      }
    }
  };

  _proto.restart = function restart() {
    this.stopTimers();
    this.start();
    this.fireRestartedEvent();
  };

  _proto.fireRestartedEvent = function fireRestartedEvent() {
    window.dispatchEvent(new Event('autologoutRestarted'));
  };

  _proto.updateExpirationTime = function updateExpirationTime() {
    if (Date.now() - this.lastUpdate > 2000) {
      this.lastUpdate = Date.now();
      localStorage.setItem("tiborsulyan.autologout", this.lastUpdate);
      this.restart();
    }
  };

  return SessionTimer;
}();



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/models/User */ "flarum/common/models/User");
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_User__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SessionTimer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SessionTimer */ "./src/forum/SessionTimer.js");
/* harmony import */ var flarum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/SessionDropdown */ "flarum/components/SessionDropdown");
/* harmony import */ var flarum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_5__);







var createOptions = function createOptions() {
  var sessionTimeoutInMinutes = flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.forum.attribute("tiborsulyan-autologout.logoutAfter") || 120;
  var warnTimeoutInMinutes = flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.forum.attribute("tiborsulyan-autologout.warnAfter");

  if (warnTimeoutInMinutes) {
    return {
      logoutAfter:
      /*sessionTimeoutInMinutes * 60000 - 5000*/
      60000,
      warnAfter:
      /*warnTimeoutInMinutes * 60000 - 5000*/
      30000
    };
  } else {
    return {
      logoutAfter: sessionTimeoutInMinutes * 60000 - 5000
    };
  }
};

flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('tiborsulyan/autologout', function () {
  flarum_common_models_User__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.autoLogoutTimer = null;
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_3__["extend"])(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'oninit', function () {
    if (flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user) {
      if (!flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user.autoLogoutTimer) {
        flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user.autoLogoutTimer = new _SessionTimer__WEBPACK_IMPORTED_MODULE_4__["default"](createOptions());
      }

      flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user.autoLogoutTimer.updateExpirationTime();
    }
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_3__["extend"])(XMLHttpRequest.prototype, 'open', function () {
    this.addEventListener('load', function () {
      if (flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user && flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user.autoLogoutTimer) {
        flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user.autoLogoutTimer.updateExpirationTime();
      }
    });
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_3__["extend"])(flarum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_5___default.a.prototype, 'items', function (items) {
    var originalLogout = items.get('logOut');
    var originalOnclick = originalLogout.attrs.onclick;

    originalLogout.attrs.onclick = function () {
      if (flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user && flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user.autoLogoutTimer) {
        flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user.autoLogoutTimer.stop();
      }

      originalOnclick();
    };
  });
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/models/User":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/models/User']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/models/User'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/components/SessionDropdown":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['components/SessionDropdown']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SessionDropdown'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map