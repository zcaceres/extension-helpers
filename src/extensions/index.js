/* global browser chrome */

function enable (id) {
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.management.setEnabled(id, true);
      resolve(true);
    });
  } else {
    return browser.management.setEnabled(id, true);
  }
}

function disable (id) {
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.management.setEnabled(id, false);
      resolve(false);
    });
  } else {
    return browser.management.setEnabled(id, false);
  }
}

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

function get (id) {
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
