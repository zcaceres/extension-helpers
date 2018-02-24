/* global browser chrome */

/**
 * Enable (activate) a browser extension
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
 * @param  {String} id The Browser-assigned id of the extension
 * @return {Promise<Boolean>} Promise resolved with true if successful or rejected with error
 */
function disable(id) {
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
 * Get all currently installed browser extension
 * @return {Promise<Array<ExtensionInfo>>} Promise resolved with array of browser extension information objects, or rejected with error
 */
function getAll () {
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.management.getAll((extensionInfoArr) => {
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
 * @param  {String} id Browser-assigned extension id
 * @return {Promise<ExtensionInfo>} Promise resolved with browser extension information object or rejected with an error
 */
function get(id) {
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.management.get(id, (extensionInfo) => {
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

export default {
  get,
  getAll,
  disable,
  enable
  // uninstall,
  // launch
};
