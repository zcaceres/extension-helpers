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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cookie = __webpack_require__(3);

var _cookie2 = _interopRequireDefault(_cookie);

var _badge = __webpack_require__(4);

var _badge2 = _interopRequireDefault(_badge);

var _tabs = __webpack_require__(1);

var _tabs2 = _interopRequireDefault(_tabs);

var _message = __webpack_require__(5);

var _message2 = _interopRequireDefault(_message);

var _localStorage = __webpack_require__(6);

var _localStorage2 = _interopRequireDefault(_localStorage);

var _extensions = __webpack_require__(7);

var _extensions2 = _interopRequireDefault(_extensions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Prefix for Edge/Firefox/Chrome to access browser apis
function prefixBrowser() {
  window.browser = function () {
    return window.msBrowser || window.browser || window.chrome;
  }();
}

prefixBrowser();

console.log(_cookie2.default, _badge2.default, _tabs2.default, _message2.default, _localStorage2.default, _extensions2.default);

exports.default = {
  cookie: _cookie2.default,
  badgeManager: _badge2.default,
  tabs: _tabs2.default,
  message: _message2.default,
  localStorage: _localStorage2.default,
  extensions: _extensions2.default
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global browser chrome */

/**
 * Forces focus on given tab
 */
function focusTab(tabId) {
  browser.tabs.update(tabId, { active: true });
}

function closeTab(tabId) {
  browser.tabs.remove(tabId);
}

function getActiveTab() {
  if (chrome) {
    return new Promise(function (resolve, reject) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var err = chrome.runtime.lastError;
        if (err) return reject(err);

        var _tabs = _slicedToArray(tabs, 1),
            tab = _tabs[0];

        resolve(tab);
      });
    });
  }
  return browser.tabs.query({ active: true, currentWindow: true }).then(function (tabs) {
    var _tabs2 = _slicedToArray(tabs, 1),
        tab = _tabs2[0];

    return tab;
  });
}

function executeOnActiveTab(toInject, typeToInject) {
  return getActiveTab(function (tab) {
    executeScript(tab.id, toInject, typeToInject);
  });
}

/**
 * Open a new tab optionally blurred or focused, and return the new tab's id.
 */
function openTab(url, active) {
  if (chrome) {
    return new Promise(function (resolve, reject) {
      chrome.tabs.create({ url: url, active: active }, function (tab) {
        var err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(tab);
      });
    });
  }
  return browser.tabs.create({ url: url, active: active });
}

/**
 * Find active tabs in all browser windows
 */
function getActiveTabs() {
  if (chrome) {
    return new Promise(function (resolve, reject) {
      chrome.tabs.query({ active: true }, function (tabs) {
        var err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(tabs);
      });
    });
  }
  return browser.tabs.query({ active: true });
}

/**
 *  Returns a promise that resolves with all tabs or rejects with an error.
 */
function getAllTabs() {
  if (chrome) {
    return new Promise(function (resolve, reject) {
      chrome.tabs.query({}, function (tabs) {
        var err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(tabs);
      });
    });
  }
  return browser.tabs.query({});
}

/**
 *
 */
function executeOnAllTabs(toInject, typeToInject) {
  return getAllTabs().then(function (tabs) {
    var tabIds = tabs.map(function (tab) {
      return tab.id;
    });
    tabIds.forEach(function (tabId) {
      executeScript(tabId, toInject, typeToInject);
    });
  });
}

/**
 *  Executes a file or inline code as a string on all the active tabs of all windows.
 */
function executeOnActiveTabs(toInject, typeToInject) {
  return getActiveTabs().then(function (tabs) {
    var tabIds = tabs.map(function (tab) {
      return tab.id;
    });
    tabIds.forEach(function (tabId) {
      executeScript(tabId, toInject, typeToInject);
    });
  });
}

function executeScript(tabId, toInject, typeToInject) {
  var executionObj = _defineProperty({}, typeToInject, toInject);
  if (chrome) {
    return new Promise(function (resolve, reject) {
      chrome.tabs.executeScript(tabId, executionObj, function (results) {
        var err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(results);
      });
    });
  }
  return browser.tabs.executeScript(tabId, executionObj);
}

exports.default = {
  openTab: openTab,
  closeTab: closeTab,
  focusTab: focusTab,
  getAllTabs: getAllTabs,
  getActiveTab: getActiveTab,
  getActiveTabs: getActiveTabs,
  executeOnAllTabs: executeOnAllTabs,
  executeOnActiveTab: executeOnActiveTab,
  executeOnActiveTabs: executeOnActiveTabs
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(0);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* global chrome browser */

function get(url, name, optionalStoreId) {
  if (chrome) {
    return new Promise(function (resolve, reject) {
      chrome.cookies.get({ url: url, name: name, storeId: optionalStoreId }, function (cookie) {
        var err = browser.runtime.lastError;
        if (err) return reject(err);
        resolve(cookie);
      });
    });
  } else {
    return browser.cookies.get({ url: url, name: name, storeId: optionalStoreId });
  }
}

function set(url, name, value, optionalParamsObj) {
  var params = _extends({ url: url, name: name, value: value }, optionalParamsObj);
  if (chrome) {
    return new Promise(function (resolve, reject) {
      chrome.cookies.set(params, function (cookie) {
        var err = chrome.runtime.lastError;
        if (!cookie || err) return reject(err);
        resolve(cookie);
      });
    });
  } else {
    return browser.cookies.set(params);
  }
}

function getAll(url, name, optionalParamsObj) {
  var params = _extends({ url: url, name: name }, optionalParamsObj);
  if (chrome) {
    return new Promise(function (resolve, reject) {
      chrome.cookies.getAll(params, function (cookies) {
        var err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(cookies);
      });
    });
  } else {
    return browser.cookies.getAll(params);
  }
}

function remove(url, name, optionalStoreId) {
  var params = { url: url, name: name, storeId: optionalStoreId };
  if (chrome) {
    return new Promise(function (resolve, reject) {
      chrome.cookies.remove(params, function (details) {
        var err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(details);
      });
    });
  } else {
    return browser.cookies.remove(params);
  }
}

exports.default = {
  get: get,
  getAll: getAll,
  set: set,
  remove: remove
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BadgeManager = function () {
  function BadgeManager(badgeColor) {
    _classCallCheck(this, BadgeManager);

    this.badgeNum = 0;
    window.browser.browserAction.setBadgeBackgroundColor({ color: badgeColor || '#E77171' });
  }

  _createClass(BadgeManager, [{
    key: 'add',
    value: function add(num) {
      var numToAdd = Number(num) || 1;
      this.badgeNum += numToAdd;
      window.browser.browserAction.setBadgeText({ text: this.badgeNum.toString() });
    }
  }, {
    key: 'subtract',
    value: function subtract(num) {
      var numToAdd = Number(num) || 1;
      this.badgeNum -= numToAdd;
      window.browser.browserAction.setBadgeText({ text: this.badgeNum.toString() });
    }
  }, {
    key: 'clear',
    value: function clear() {
      window.browser.browserAction.setBadgeText({ text: '' });
      this.badgeNum = 0;
    }
  }]);

  return BadgeManager;
}();

exports.default = BadgeManager;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tabs = __webpack_require__(1);

/**
 *
 */
function tab(tabId, message) {
  return sendMessage(tabId, message);
}

/**
 *  Sends a message to all tabs in any window
 */
/* global chrome browser */

function allTabs(message) {
  return (0, _tabs.getAllTabs)().then(function (tabs) {
    tabs.forEach(function (tab) {
      sendMessage(tab.id, message);
    });
    return tabs;
  });
}

function activeTabs(message) {
  return (0, _tabs.getActiveTabs)().then(function (tabs) {
    tabs.forEach(function (tab) {
      sendMessage(tab.id, message);
    });
    return tabs;
  });
}

/**
 *
 */
function activeTab(message) {
  return (0, _tabs.getActiveTab)().then(function (tab) {
    return sendMessage(tab.id, message);
  });
}

/**
 *
 */
function sendMessage(tabId, message) {
  if (chrome) {
    return new Promise(function (resolve, reject) {
      chrome.tabs.sendMessage(tabId, message, function (response) {
        var err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(response);
      });
    });
  } else {
    return browser.tabs.sendMessage(tabId, message);
  }
}

exports.default = {
  tab: tab,
  activeTab: activeTab,
  allTabs: allTabs,
  activeTabs: activeTabs
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global browser chrome */

function set(key, value) {
  if (chrome) {
    return new Promise(function (resolve, reject) {
      chrome.storage.local.set(_defineProperty({}, key, value), function () {
        var err = browser.runtime.lastError;
        if (err) return reject(err);
        resolve();
      });
    });
  } else {
    return browser.storage.local.set(_defineProperty({}, key, value));
  }
}

function get(key) {
  if (chrome) {
    return new Promise(function (resolve, reject) {
      chrome.storage.local.get(key, function (itemsObject) {
        var err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(itemsObject);
      });
    });
  } else {
    return browser.storage.local.get(key);
  }
}

exports.default = {
  set: set,
  get: get
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global browser chrome */

function enable(id) {
  if (chrome) {
    return new Promise(function (resolve, reject) {
      chrome.management.setEnabled(id, true);
      resolve(true);
    });
  } else {
    return browser.management.setEnabled(id, true);
  }
}

function disable(id) {
  if (chrome) {
    return new Promise(function (resolve, reject) {
      chrome.management.setEnabled(id, false);
      resolve(false);
    });
  } else {
    return browser.management.setEnabled(id, false);
  }
}

function getAll() {
  if (chrome) {
    return new Promise(function (resolve, reject) {
      chrome.management.getAll(function (extensionInfoArr) {
        var err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(extensionInfoArr);
      });
    });
  } else {
    return browser.management.getAll();
  }
}

function get(id) {
  if (chrome) {
    return new Promise(function (resolve, reject) {
      chrome.management.get(id, function (extensionInfo) {
        // ExtensionInfo object
        var err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(extensionInfo);
      });
    });
  } else {
    return browser.management.get(id);
  }
}

exports.default = {
  get: get,
  getAll: getAll,
  disable: disable,
  enable: enable
  // uninstall,
  // launch
};

/***/ })
/******/ ]);