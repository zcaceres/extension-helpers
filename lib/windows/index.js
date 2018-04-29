'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* global browser chrome */


var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get a window by id
 * @memberof windows
 * @see [Chrome filter defaults](https://developer.chrome.com/extensions/windows#method-get) for this API
 * @see [Firefox filter defaults](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/windows/get) for this API
 * @param  {Number} windowId         Integer Id of window
 * @param  {?Boolean} includeTabs    Include array of window's associated Tab objects. Default false.
 * @param  {?Array<WindowTypes>} filterWindowTypes Array to filter window by WindowType. Chrome and Firefox support different WindowTypes.
 * @return {Promise<Window>}         Promise resolved with a Window object or rejected with an error.
 */
function getById(windowId, includeTabs, filterWindowTypes) {
  var getInfo = { populate: includeTabs, windowTypes: filterWindowTypes };
  return (0, _utils2.default)(chrome.windows.get, browser.windows.get, windowId, getInfo);
}

/**
 * Get the current browser window
 * @memberof windows
 * @param  {?Boolean} includeTabs    Include array of window's associated Tab objects. Default false.
 * @param  {?Array<WindowTypes>} filterWindowTypes Array to filter window by WindowType. Chrome and Firefox support different WindowTypes.
 * @return {Promise<Window>}         Promise resolved with a Window object or rejected with an error.
 */
function getCurrent(includeTabs, filterWindowTypes) {
  var getInfo = { populate: includeTabs, windowTypes: filterWindowTypes };
  return (0, _utils2.default)(chrome.windows.getCurrent, browser.windows.getCurrent, getInfo);
}

/**
 * Get the most recently focused window. Usually the window 'on top'.
 * @memberof windows
 * @param  {?Boolean} includeTabs    Include array of window's associated Tab objects. Default false.
 * @param  {?Array<WindowTypes>} filterWindowTypes Array to filter window by WindowType. Chrome and Firefox support different WindowTypes.
 * @return {Promise<Window>}         Promise resolved with a Window object or rejected with an error.
 */
function getLastFocused(includeTabs, filterWindowTypes) {
  var getInfo = { populate: includeTabs, windowTypes: filterWindowTypes };
  return (0, _utils2.default)(chrome.windows.getLastFocused, browser.windows.getLastFocused, getInfo);
}

/**
 * Get all open windows
 * @memberof windows
 * @param  {?Boolean} includeTabs    Include array of window's associated Tab objects. Default false.
 * @param  {?Array<WindowTypes>} filterWindowTypes Array to filter window by WindowType. Chrome and Firefox support different WindowTypes.
 * @return {Promise<Window>}         Promise resolved with a Window object or rejected with an error.
 */
function getAll(includeTabs, filterWindowTypes) {
  var getInfo = { populate: includeTabs, windowTypes: filterWindowTypes };
  return (0, _utils2.default)(chrome.windows.getAll, browser.windows.getAll, getInfo);
}

/**
 * Opens a new browser window with optional parameters.
 * @see [Full list of parameters](https://developer.chrome.com/extensions/windows#method-create)
 * @memberof windows
 * @param  {?String} url            Fully qualified url to open in new window
 * @param  {Object} params          Optional parameters like incognito, focused, positioning, and tabid. See Chrome and Firefox docs for complete list.
 * @return {Promise<Window>}        Promise resolved with a Window object or rejected with an error.
 */
function create(url, params) {
  return (0, _utils2.default)(chrome.windows.create, browser.windows.create, _extends({ url: url }, params));
}

/**
 * Update a Window's state
 * @see [Full list of parameters](https://developer.chrome.com/extensions/windows#method-update)
 * @memberof windows
 * @param  {Number} windowId  Integer Id of window to update
 * @param  {?Object} params   Optional parameters like height, width, and state.
 * @return {Promise<Window>}  Promise resolved with a Window object or rejected with an error.
 */
function update(windowId, params) {
  return (0, _utils2.default)(chrome.windows.update, browser.windows.update, _extends({}, params));
}

/**
 * Focus on a given window
 * @memberof windows
 * @param  {Number} windowId  Integer Id of window to focus
 * @return {Promise<Window>}  Promise resolved with a Window object or rejected with an error.
 */
function focus(windowId) {
  return update(windowId, { focused: true });
}

/**
 * Draw attention to a given window
 * @memberof windows
 * @param  {Number} windowId  Integer Id of window to focus
 * @return {Promise<Window>}  Promise resolved with a Window object or rejected with an error.
 */
function drawAttention(windowId) {
  return update(windowId, { drawAttention: true });
}

exports.default = {
  create: create,
  drawAttention: drawAttention,
  getAll: getAll,
  getById: getById,
  getCurrent: getCurrent,
  getLastFocused: getLastFocused,
  focus: focus,
  update: update
};