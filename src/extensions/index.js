/* global browser chrome */
import PromiseFactory from '../utils';

/**
 * Get information about the calling extension
 * @memberof extension
 * @return {Promise<ExtensionInfo>} Object with info about the extension
 */
function self() {
  return PromiseFactory(chrome.management.getSelf, browser.management.getSelf);
}

/**
 * Get a list of permission warnings for the given extension id
 * @memberof extension
 * @param  {String} id                 The browser-assigned id of the extension
 * @return {Promise<Array<String>>}    Promised resolved with array of permission warnings or rejected with error
 */
function permissionWarningsById(id) {
  return PromiseFactory(chrome.management.getPermissionWarningsById, browser.management.getPermissionWarningsById, id);
}

/**
 * Get a list of permission warnings for the given extension manifest string
 * @memberof extension
 * @param  {String} manifestStr         Extension manifest JSON string.
 * @return {Promise<Array<String>>}     Promised resolved with array of permission warnings or rejected with error
 */
function permissionWarningsByManifest(manifestStr) {
  return PromiseFactory(chrome.management.getPermissionWarningsByManifest, browser.management.getPermissionWarningsByManifest, manifestStr);
}

/**
 * Enable (activate) a browser extension
 * @memberof extension
 * @param  {String} id The browser-assigned id of the extension
 * @return {Promise<Boolean>} Promise resolved with true if successful or rejected with error
 */
function enable(id) {
  return PromiseFactory(chrome.management.setEnabled, browser.management.setEnabled, id, true);
}

/**
 * Disable (deactivate) a browser extension
 * @memberof extension
 * @param  {String} id The Browser-assigned id of the extension
 * @return {Promise<Boolean>} Promise resolved with false if successful or rejected with error
 */
function disable(id) {
  return PromiseFactory(chrome.management.setEnabled, browser.management.setEnabled, id, false);
}

/**
 * Get all currently installed browser extension
 * @memberof extension
 * @return {Promise<Array<ExtensionInfo>>} Promise resolved with array of browser extension information objects, or rejected with error
 */
function getAll() {
  return PromiseFactory(chrome.management.getAll, browser.management.getAll);
}

/**
 * Get a browser by extension id
 * @memberof extension
 * @param  {String} id Browser-assigned extension id
 * @return {Promise<ExtensionInfo>} Promise resolved with browser extension information object or rejected with an error
 */
function get(id) {
  return PromiseFactory(chrome.management.get, browser.management.get, id);
}

export default {
  get,
  getAll,
  disable,
  enable,
  self,
  permissionWarningsById,
  permissionWarningsByManifest
  // uninstall,
  // launch
};
