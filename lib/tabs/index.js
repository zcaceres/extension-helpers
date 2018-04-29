'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /* global browser chrome */


var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Forces browser focus on given tab
 * @memberof tabs
 * @param {number | Array<number>} tabId id of chrome tab
 * @returns {Promise<Object>} resolved with tabDetails object or rejected with error
 */
function focus(tabId) {
  return (0, _utils2.default)(chrome.tabs.update, browser.tabs.update, tabId, { active: true });
}

/**
 * Closes a tab by tab id
 * @memberof tabs
 * @param  {number}  tabIds an array
 * @return {Promise<undefined>} Promise resolved with undefined or rejected with error
 */
function close(tabIds) {
  return (0, _utils2.default)(chrome.tabs.remove, browser.tabs.remove, tabIds);
}

/**
 * Gets currently active tab (the tab focused in current browser window)
 * @memberof tabs
 * @return {Promise<Object>} tab object
 */
function getActive() {
  return (0, _utils2.default)(chrome.tabs.query, browser.tabs.query, { active: true, currentWindow: true }).then(function (tabs) {
    var _tabs = _slicedToArray(tabs, 1),
        tab = _tabs[0];

    return tab;
  });
}

/**
 * Execute a file or code on a given tab
 * @memberof tabs
 * @param  {String} toInject file name or raw code to execute
 * @param  {String} typeToInject valid params are "code" or "file"
 * @return {Promise<Object>} any results of the injected code's execution
 */
function executeOnActive(toInject, typeToInject) {
  return getActive().then(function (tab) {
    return executeScript(tab.id, toInject, typeToInject);
  });
}

/**
 * Open a new tab optionally blurred or focused, and return the new tab's id.
 * @memberof tabs
 * @param  {String} url the url you want the new tab to show
 * @param  {Boolean} active should browser focus on the new tab
 * @return {Promise<Object>} resolved with the newly opened tab or rejected with error
 */
function open(url, active) {
  return (0, _utils2.default)(chrome.tabs.create, browser.tabs.create, { url: url, active: active });
}

/**
 * Get active tabs in all browser windows
 * @memberof tabs
 * @return {Promise<Array<Object>>} Promise resolved with an array of all active tab objects or rejected with an error
 */
function getAllActive() {
  return (0, _utils2.default)(chrome.tabs.query, browser.tabs.query, { active: true });
}

/**
 * Get all tabs
 * @memberof tabs
 * @return {Promise<Array<Object>>} Promise resolved with all tabs or rejected with an error
 */
function getAll() {
  return (0, _utils2.default)(chrome.tabs.query, browser.tabs.query, {});
}

/**
 * Execute raw js or a script by filename on all tabs
 * @memberof tabs
 * @param  {String} toInject file name or raw code to execute
 * @param  {String} typeToInject valid params are "code" or "file"
 * @return {Array<Promise<Object>>} Array Promises resolved with any results of the injected code's execution or rejected with an error
 */
function executeOnAll(toInject, typeToInject) {
  return getAll().then(function (tabs) {
    var tabIds = tabs.map(function (tab) {
      return tab.id;
    });
    var results = [];
    tabIds.forEach(function (tabId) {
      results.push(executeScript(tabId, toInject, typeToInject));
    });
    return results;
  });
}

/**
 * Executes a file or inline code as a string on all the active tabs of all windows.
 * @memberof tabs
 * @param  {String} toInject file name or raw code to execute
 * @param  {String} typeToInject valid params are "code" or "file"
 * @return {Array<Promise<Object>>} Array of Promises resolved with any results of the injected code's execution or rejected with an error
 */
function executeOnAllActive(toInject, typeToInject) {
  return getAllActive().then(function (tabs) {
    var tabIds = tabs.map(function (tab) {
      return tab.id;
    });
    var results = [];
    tabIds.forEach(function (tabId) {
      results.push(executeScript(tabId, toInject, typeToInject));
    });
    return results;
  });
}

/**
 * Get tab that the script call is being made from
 * @memberof tabs
 * @return {Promise<Tab>} Promise that resolves with Tab or rejects with error
 */
function getCurrent() {
  return (0, _utils2.default)(chrome.tabs.getCurrent, browser.tabs.getCurrent);
}

/**
 * Reloads a tab by id. Optionally bypasses cache.
 * @memberof tabs
 * @param  {String} tabId        Id of tab to reload
 * @param  {Boolean} bypassCache Bypass local web cache
 * @return {Promise<undefined>}  Bypass
 */
function reload(tabId, bypassCache) {
  return (0, _utils2.default)(chrome.tabs.reload, browser.tabs.reload, { bypassCache: bypassCache });
}

/**
 * Executes a script.
 * @private
 * @memberof tabs
 * @param  {Number} tabId id of tab to execute script
 * @param  {String} toInject file name or raw code to execute
 * @param  {String} typeToInject valid params are "code" or "file"
 * @return {Promise<Object>} Promise resolved with results of code's execution or rejected with an error
 */
function executeScript(tabId, toInject, typeToInject) {
  var executionObj = _defineProperty({}, typeToInject, toInject);
  return (0, _utils2.default)(chrome.tabs.executeScript, browser.tabs.executeScript, tabId, executionObj);
}

exports.default = {
  open: open,
  close: close,
  focus: focus,
  reload: reload,
  getAll: getAll,
  getActive: getActive,
  getCurrent: getCurrent,
  getAllActive: getAllActive,
  executeOnAll: executeOnAll,
  executeOnAllActive: executeOnAllActive,
  executeOnActive: executeOnActive
};