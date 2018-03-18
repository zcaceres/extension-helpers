/* global browser chrome */
import { PromiseFactory } from '../utils';

/**
 * Set a value at a given key in the extension's local storage
 * @memberof localStorage
 * @param {String} key   Key for the set value
 * @param {Any} value    Value to serialize to local storage. Objects and functions serialized to {}. Arrays, Regex, and primitives serialize correctly.
 * @return {Promise<undefined>} Promise resolved with nothing, or rejected with error
 */
function set(key, value) {
  return PromiseFactory(chrome.storage.local.set, browser.storage.local.set, { [key]: value });
}

/**
 * Get the value for a given key in local storage
 * @memberof localStorage
 * @param  {String | Array<String> | null} key Single key to get, array of keys to get, or null to get entire contents
 * @return {Promise<Object>}     Promise resolved with object with key-value mappings or rejected with an error
 */
function get(key) {
  return PromiseFactory(chrome.storage.local.get, browser.storage.local.get, key);
}

export default {
  set,
  get
};