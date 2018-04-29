'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sends a message to an extension identified by its id
 * @see https://developer.chrome.com/extensions/runtime#method-sendMessage
 * @memberof runtime
 * @param  {?String} extensionId optional extension id
 * @param  {String} msg         Any JSON-ifiable object
 * @param  {[type]} options     options
 * @return {Promise<Object>}    Promise resolved with response from tab or rejected with an error
 */
function sendMessage(extensionId, msg) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return (0, _utils2.default)(chrome.runtime.sendMessage, browser.runtime.sendMessage, extensionId, msg, options);
} /* global chrome browser */
exports.default = {
  sendMessage: sendMessage
};