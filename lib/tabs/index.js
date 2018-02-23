/* global browser chrome */

/**
 * Forces focus on given tab
 */
function focus (tabId) {
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.tabs.update(tabId, { active: true }, function (tabDetails) {
        const err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(tabDetails);
      });
    });
  }
  return browser.tabs.update(tabId, { active: true });
}

function close (tabIds) {
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.tabs.remove(tabIds, function () {
        const err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve();
      });
    });
  }
  return browser.tabs.remove(tabIds);
}

function getActive () {
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const err = chrome.runtime.lastError;
        if (err) return reject(err);
        const [tab] = tabs;
        resolve(tab);
      });
    });
  }
  return browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
    const [tab] = tabs;
    return tab;
  });
}

function executeOnActive(toInject, typeToInject) {
  return getActive(tab => {
    executeScript(tab.id, toInject, typeToInject);
  });
}

/**
 * Open a new tab optionally blurred or focused, and return the new tab's id.
 */
function open(url, active) {
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.tabs.create({ url, active }, function (tab) {
        const err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(tab);
      });
    });
  }
  return browser.tabs.create({ url, active });
}

/**
 * Find active tabs in all browser windows
 */
function getAllActive() {
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.tabs.query({ active: true }, function (tabs) {
        const err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(tabs);
      });
    });
  }
  return browser.tabs.query({ active: true });
}

/**
 *  Returns a promise that resolves with all tabs or rejects with an error.
 */
function getAll() {
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.tabs.query({}, function (tabs) {
        const err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(tabs);
      });
    });
  }
  return browser.tabs.query({});
}

/**
 *
 */
function executeOnAll(toInject, typeToInject) {
  return getAll().then(tabs => {
    const tabIds = tabs.map(tab => tab.id);
    tabIds.forEach(tabId => {
      executeScript(tabId, toInject, typeToInject);
    });
  });
}

/**
 *  Executes a file or inline code as a string on all the active tabs of all windows.
 */
function executeOnAllActive(toInject, typeToInject) {
  return getAllActive().then(tabs => {
    const tabIds = tabs.map(tab => tab.id);
    tabIds.forEach(tabId => {
      executeScript(tabId, toInject, typeToInject);
    });
  });
}

function executeScript(tabId, toInject, typeToInject) {
  const executionObj = { [typeToInject]: toInject };
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.tabs.executeScript(tabId, executionObj, results => {
        const err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(results);
      });
    });
  }
  return browser.tabs.executeScript(tabId, executionObj);
}

export default {
  open,
  close,
  focus,
  getAll,
  getActive,
  getAllActive,
  executeOnAll,
  executeOnAllActive,
  executeOnActive
};
