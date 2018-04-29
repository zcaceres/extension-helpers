'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tabs = require('../tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Send a message directly to tab by id
 * @memberof message
 * @param  {Number} tabId   Browser-assigned id of target tab
 * @param  {Object} message Any valid JSON-ifiable object
 * @return {Promise<Object>} Promise resolved with response or rejected with error
 */
/* global chrome browser */
function tab(tabId, message) {
  return sendMessage(tabId, message);
}

/**
 * Sends a message to all tabs in any window
 * @memberof message
 * @param  {Object} message Any valid JSON-ifiable object
 * @return {Promise<Array<Tab>>} Promise resolved with array of responses from tabs that were sent a message or rejected with an error
 */
function allTabs(message) {
  return _tabs2.default.getAll().then(function (tabs) {
    return manyTabs(tabs, message);
  });
}

/**
 * Sends a message to tabs that are considered 'active' (focused) for all open browser windows
 * @memberof message
 * @param  {Object} message Any valid JSON-ifiable object
 * @return {Promise<Array<Tab>>} Promise resolved with array of responses from tabs that were sent a message rejected with an error
 */
function activeTabs(message) {
  return _tabs2.default.getAllActive().then(function (tabs) {
    return manyTabs(tabs, message);
  });
}

/**
 * Send a message to an array of tabs
 * @memberof message
 * @param  {Array<Tab>} tabArr                Array of Tab objects to send message to
 * @param  {Object} message                   Any valid JSON-ifiable object
 * @return {Promise<Array<Object>>}           Promise resolved with array of responses from messages or rejected with an error
 */
function manyTabs(tabArr, message) {
  return Promise.all(tabArr.map(function (tab) {
    return sendMessage(tab.id, message);
  }));
}

/**
 * Send message to active (focused) tab in the current window.
 * @memberof message
 * @param  {Object} message Any valid JSON-ifiable object
 * @return {Promise<Object>} Promise resolved with response from tab or rejected with an error
 */
function activeTab(message) {
  return _tabs2.default.getActive().then(function (tab) {
    return sendMessage(tab.id, message);
  });
}

/**
 * Helper for sending message to a tab by id
 * @private
 * @memberof message
 * @param  {String} tabId   Browser-assigned id of target tab
 * @param  {Object} message Any valid JSON-ifiable object
 * @return {Promise<Object>} Promise resolved with response from tab or rejected with an error
 */
function sendMessage(tabId, message) {
  return (0, _utils2.default)(chrome.tabs.sendMessage, browser.tabs.sendMessage, tabId, message);
}

exports.default = {
  tab: tab,
  activeTab: activeTab,
  allTabs: allTabs,
  manyTabs: manyTabs,
  activeTabs: activeTabs
};