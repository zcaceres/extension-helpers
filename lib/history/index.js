'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* global browser chrome: */


var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Search the browser history for last visit time of each page matching the query
 * @memberof history
 * @param  {String} text       A free-text query to the history service. Leave empty to retrieve all pages.
 * @param  {Number} optionalStartTime  Double. Limit results to those visited after this date, represented in milliseconds since the epoch. If not specified, this defaults to 24 hours in the past.
 * @param  {Number} optionalEndTime    Double. Limit results to those visited before this date, represented in milliseconds since the epoch.
 * @param  {Number} optionalMaxResults Integer. The maximum number of results to retrieve. Defaults to 100.
 * @return {Promise<Array<HistoryItem>>}            Promise that resolves with array of HistoryItem objects or rejects with error
 */
function search(text, optionalStartTime, optionalEndTime, optionalMaxResults) {
  var queryObj = { text: text, startTime: optionalStartTime, endTime: optionalEndTime, maxResults: optionalMaxResults };
  return (0, _utils2.default)(chrome.history.search, browser.history.search, queryObj);
}

/**
 * Gets information about visits to a url
 * @memberof history
 * @param  {String} url                 Must be fully qualified url including protocol
 * @return {Promise<Array<VisitItem>>}  Promise that resolves with array of VisitItems or rejects with an error
 */
function getVisits(url) {
  return (0, _utils2.default)(chrome.history.getVisits, browser.history.getVisits, { url: url });
}

/**
 * Chrome: Adds a URL to the history at the current time with a transition type of "link".
 * Firefox: Adds a record to the browser's history of a visit to the given URL. The visit's time is recorded as the time of the call, and the TransitionType is recorded as "link".
 * @memberof history
 * @param {String} url                 The URL to add
 * @param {Object} optionalParams      Firefox only. Object with shape { title: {String}, transition: {TransitionType}, visitTime: {Number | String | Object} }. All optional.
 * @return {Promise<undefined>}        Promise resolved with undefined or rejected with an error.
 */
function addUrl(url, optionalParams) {
  return (0, _utils2.default)(chrome.history.addUrl, browser.history.addUrl, _extends({ url: url }, optionalParams));
}

/**
 * Removes all visits to the given URL from the browser history.
 * @memberof history
 * @param  {String} url The URL whose visits should be removed.
 * @return {Promise<undefined>}     Promise resolved with undefined or rejected with an error;
 */
function deleteUrl(url) {
  return (0, _utils2.default)(chrome.history.deleteUrl, browser.history.deleteUrl, { url: url });
}

/**
 * Sanitizes dates to numbers. String Object or Number.
 * @private
 */
function sanitizeDate(date) {
  return Number(date);
}

/**
 * Removes all items within the specified date range from the history. Pages will not be removed from the history unless all visits fall within the range.
 * @memberof history
 * @param  {Number | String | Date} startTime Items added to history after this date, represented in milliseconds since the epoch.
 * @param  {Number | String | Date} endTime   Items added to history before this date, represented in milliseconds since the epoch.
 * @return {Promise<undefined>}           Promise resolved with undefined or rejected with an error.
 */
function deleteRange(startTime, endTime) {
  // Must sanitize for Chrome because only Number (double) are supported but Firefox accepts String and Date objects as well.
  var sanitizedStart = sanitizeDate(startTime);
  var sanitizedEnd = sanitizeDate(endTime);
  return (0, _utils2.default)(chrome.history.deleteRange, browser.history.deleteRange, { startTime: sanitizedStart, endTime: sanitizedEnd });
}

/**
 * Deletes all items from the history.
 * @memberof history
 * @return {Promise<undefined>} Promise resolved with undefined or rejected with an error.
 */
function deleteAll() {
  return (0, _utils2.default)(chrome.history.deleteAll, browser.history.deleteAll);
}

exports.default = {
  addUrl: addUrl,
  deleteUrl: deleteUrl,
  deleteRange: deleteRange,
  deleteAll: deleteAll,
  getVisits: getVisits,
  search: search
};