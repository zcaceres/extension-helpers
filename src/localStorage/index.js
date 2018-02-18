/* global browser chrome */

function set (key, value) {
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.storage.local.set({ [key]: value }, () => {
        const err = browser.runtime.lastError;
        if (err) return reject(err);
        resolve();
      });
    });
  } else {
    return browser.storage.local.set({ [key]: value });
  }
}

function get (key) {
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.storage.local.get(key, function (itemsObject) {
        const err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(itemsObject);
      });
    });
  } else {
    return browser.storage.local.get(key);
  }
}

export default {
  set,
  get
};
