'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* global chrome browser */


var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a new alarm.
 * @see [Firefox Alarms](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/alarms/create) or [Chrome Alarms](https://developer.chrome.com/extensions/alarms#method-create)
 * @memberof alarms
 * @param  {?String} name           Optional name to identify alarm.
 * @param  {?Object} optionalParams Object of shape { when: {Number}, delayInMinutes: {Number}, periodInMinutes: {Number} }. Describes when the alarm should fire. The initial time must be specified by either when or delayInMinutes (but not both). If periodInMinutes is set, the alarm will repeat every periodInMinutes minutes after the initial event. If neither when or delayInMinutes is set for a repeating alarm, periodInMinutes is used as the default for delayInMinutes.
 * @return {Promise<undefined>}     Promise resolved with undefined or rejected with an error.
 */
function create(name, optionalParams) {
  return (0, _utils2.default)(chrome.alarms.create, browser.alarms.create, name, _extends({}, optionalParams));
}

/**
 * Gets an alarm, given its name.
 * @memberof alarms
 * @param  {?String} name        Optional. The name of the alarm to get. Defaults to the empty string.
 * @return {Promise<Alarm>}      A Promise resolved with an Alarm object or rejected with an error. If resolved, value represents the alarm whose name matches name. If no alarms match, this will be undefined.
 */
function get(name) {
  return (0, _utils2.default)(chrome.alarms.get, browser.alarms.get, name);
}

/**
 * Gets all active alarms for the extension.
 * @memberof alarms
 * @return {Promise<Array<Alarm>>} Promise resolved with an array of Alarm objects or rejected with an error. Resolves with empty array if no alarms are active.
 */
function getAll() {
  return (0, _utils2.default)(chrome.alarms.getAll, browser.alarms.getAll);
}

/**
 * Clears the alarm with the given name.
 * @memberof alarms
 * @param  {String} name           Name of the alarm to cancel. Default is empty string.
 * @return {Promise<Boolean>}      Promise resolved with true if alarm was cleared or false if not cleared, or rejected with an error.
 */
function clear(name) {
  return (0, _utils2.default)(chrome.alarms.clear, browser.alarms.clear, name);
}

/**
 * Cancels all active alarms.
 * @memberof alarms
 * @see [MDN on clearAll](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/alarms/clearAll)
 * @return {Promise<Boolean>} Promise resolved with true if any alarms were cleared or false otherwise. Or, rejected with an error.
 */
function clearAll() {
  return (0, _utils2.default)(chrome.alarms.clearAll, browser.alarms.clearAll);
}

exports.default = {
  clear: clear,
  clearAll: clearAll,
  create: create,
  get: get,
  getAll: getAll
};