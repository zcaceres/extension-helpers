'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* global browser chrome */


/**
 * Set a value at a given key in the extension's local storage
 * @memberof localStorage
 * @param {String} key   Key for the set value
 * @param {Any} value    Value to serialize to local storage. Objects and functions serialized to {}. Arrays, Regex, and primitives serialize correctly.
 * @return {Promise<undefined>} Promise resolved with nothing, or rejected with error
 */
function set(key, value) {
  return (0, _utils2.default)(chrome.storage.local.set, browser.storage.local.set, _defineProperty({}, key, value));
}

/**
 * Get the value for a given key in local storage
 * @memberof localStorage
 * @param  {String | Array<String> | null} key Single key to get, array of keys to get, or null to get entire contents
 * @return {Promise<Object>}     Promise resolved with object with key-value mappings or rejected with an error
 */
function get(key) {
  return (0, _utils2.default)(chrome.storage.local.get, browser.storage.local.get, key);
}

exports.default = {
  set: set,
  get: get
};