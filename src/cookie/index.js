/* global chrome browser */

function get (url, name, optionalStoreId) {
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.cookies.get({ url, name, storeId: optionalStoreId }, function (cookie) {
        const err = browser.runtime.lastError;
        if (err) return reject(err);
        resolve(cookie);
      });
    });
  } else {
    return browser.cookies.get({ url, name, storeId: optionalStoreId });
  }
}

function set (url, name, value, optionalParamsObj) {
  const params = { url, name, value, ...optionalParamsObj };
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.cookies.set(params, function (cookie) {
        const err = chrome.runtime.lastError;
        if (!cookie || err) return reject(err);
        resolve(cookie);
      });
    });
  } else {
    return browser.cookies.set(params);
  }
}

function getAll (url, name, optionalParamsObj) {
  const params = { url, name, ...optionalParamsObj };
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.cookies.getAll(params, function (cookies) {
        const err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(cookies);
      });
    });
  } else {
    return browser.cookies.getAll(params);
  }
}

function remove (url, name, optionalStoreId) {
  const params = { url, name, storeId: optionalStoreId };
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.cookies.remove(params, function (details) {
        const err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(details);
      });
    });
  } else {
    return browser.cookies.remove(params);
  }
}

export default {
  get,
  getAll,
  set,
  remove
};
