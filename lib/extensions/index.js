'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get information about the calling extension
 * @memberof extension
 * @return {Promise<ExtensionInfo>} Object with info about the extension
 */
function self() {
  return (0, _utils2.default)(chrome.management.getSelf, browser.management.getSelf);
}

/**
 * Get a list of permission warnings for the given extension id
 * @memberof extension
 * @param  {String} id                 The browser-assigned id of the extension
 * @return {Promise<Array<String>>}    Promised resolved with array of permission warnings or rejected with error
 */
/* global browser chrome */
function permissionWarningsById(id) {
  return (0, _utils2.default)(chrome.management.getPermissionWarningsById, browser.management.getPermissionWarningsById, id);
}

/**
 * Get a list of permission warnings for the given extension manifest string
 * @memberof extension
 * @param  {String} manifestStr         Extension manifest JSON string.
 * @return {Promise<Array<String>>}     Promised resolved with array of permission warnings or rejected with error
 */
function permissionWarningsByManifest(manifestStr) {
  return (0, _utils2.default)(chrome.management.getPermissionWarningsByManifest, browser.management.getPermissionWarningsByManifest, manifestStr);
}

/**
 * Enable (activate) a browser extension
 * @memberof extension
 * @param  {String} id The browser-assigned id of the extension
 * @return {Promise<Boolean>} Promise resolved with true if successful or rejected with error
 */
function enable(id) {
  return (0, _utils2.default)(chrome.management.setEnabled, browser.management.setEnabled, id, true);
}

/**
 * Disable (deactivate) a browser extension
 * @memberof extension
 * @param  {String} id The Browser-assigned id of the extension
 * @return {Promise<Boolean>} Promise resolved with false if successful or rejected with error
 */
function disable(id) {
  return (0, _utils2.default)(chrome.management.setEnabled, browser.management.setEnabled, id, false);
}

/**
 * Get all currently installed browser extension
 * @memberof extension
 * @return {Promise<Array<ExtensionInfo>>} Promise resolved with array of browser extension information objects, or rejected with error
 */
function getAll() {
  return (0, _utils2.default)(chrome.management.getAll, browser.management.getAll);
}

/**
 * Get a browser by extension id
 * @memberof extension
 * @param  {String} id Browser-assigned extension id
 * @return {Promise<ExtensionInfo>} Promise resolved with browser extension information object or rejected with an error
 */
function get(id) {
  return (0, _utils2.default)(chrome.management.get, browser.management.get, id);
}

exports.default = {
  get: get,
  getAll: getAll,
  disable: disable,
  enable: enable,
  self: self,
  permissionWarningsById: permissionWarningsById,
  permissionWarningsByManifest: permissionWarningsByManifest
  // uninstall,
  // launch
};