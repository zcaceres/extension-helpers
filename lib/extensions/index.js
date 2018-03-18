/* global browser chrome */

/**
 * Get information about the calling extension
 * @memberof extension
 * @return {Promise<ExtensionInfo>} Object with info about the extension
 */
function self() {
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.management.getSelf(extensionInfo => {
        const err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(extensionInfo);
      });
    });
  } else {
    return browser.management.getSelf();
  }
}

/**
 * Get a list of permission warnings for the given extension id
 * @memberof extension
 * @param  {String} id                 The browser-assigned id of the extension
 * @return {Promise<Array<String>>}    Promised resolved with array of permission warnings or rejected with error
 */
function permissionWarningsById(id) {
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.management.getPermissionWarningsById(id, permissionWarnings => {
        const err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(permissionWarnings);
      });
    });
  } else {
    return browser.management.getPermissionWarningsById(id);
  }
}

/**
 * Get a list of permission warnings for the given extension manifest string
 * @memberof extension
 * @param  {String} manifestStr         Extension manifest JSON string.
 * @return {Promise<Array<String>>}     Promised resolved with array of permission warnings or rejected with error
 */
function permissionWarningsByManifest(manifestStr) {
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.management.getPermissionWarningsByManifest(manifestStr, permissionWarnings => {
        const err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(permissionWarnings);
      });
    });
  } else {
    return browser.management.getPermissionWarningsByManifest(manifestStr);
  }
}

/**
 * Enable (activate) a browser extension
 * @memberof extension
 * @param  {String} id The browser-assigned id of the extension
 * @return {Promise<Boolean>} Promise resolved with true if successful or rejected with error
 */
function enable(id) {
  if (chrome) {
    return new Promise((resolve, reject) => {
      const err = chrome.runtime.lastError;
      if (err) return reject(err);
      chrome.management.setEnabled(id, true);
      resolve(true);
    });
  } else {
    return browser.management.setEnabled(id, true);
  }
}

/**
 * Disable (deactivate) a browser extension
 * @memberof extension
 * @param  {String} id The Browser-assigned id of the extension
 * @return {Promise<Boolean>} Promise resolved with false if successful or rejected with error
 */
function disable(id) {
  if (chrome) {
    return new Promise((resolve, reject) => {
      const err = chrome.runtime.lastError;
      if (err) return reject(err);
      chrome.management.setEnabled(id, false);
      resolve(false);
    });
  } else {
    return browser.management.setEnabled(id, false);
  }
}

/**
 * Get all currently installed browser extension
 * @memberof extension
 * @return {Promise<Array<ExtensionInfo>>} Promise resolved with array of browser extension information objects, or rejected with error
 */
function getAll() {
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.management.getAll(extensionInfoArr => {
        const err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(extensionInfoArr);
      });
    });
  } else {
    return browser.management.getAll();
  }
}

/**
 * Get a browser by extension id
 * @memberof extension
 * @param  {String} id Browser-assigned extension id
 * @return {Promise<ExtensionInfo>} Promise resolved with browser extension information object or rejected with an error
 */
function get(id) {
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.management.get(id, extensionInfo => {
        // ExtensionInfo object
        const err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(extensionInfo);
      });
    });
  } else {
    return browser.management.get(id);
  }
}

module.exports = {
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