/* global chrome browser */
import PromiseFactory from '../utils';

/**
 * Sends a message to an extension identified by its id
 * @see https://developer.chrome.com/extensions/runtime#method-sendMessage
 * @memberof runtime
 * @param  {?String} extensionId optional extension id
 * @param  {String} msg         Any JSON-ifiable object
 * @param  {[type]} options     options
 * @return {Promise<Object>}    Promise resolved with response from tab or rejected with an error
 */
function sendMessage(extensionId, msg, options) {
  return PromiseFactory(chrome.runtime.sendMessage, browser.runtime.sendMessage, extensionId, msg, options);
}

export default {
  sendMessage
};
