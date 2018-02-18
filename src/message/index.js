/* global chrome browser */

import tabs from '../tabs';

/**
 *
 */
function tab (tabId, message) {
  return sendMessage(tabId, message);
}

/**
 *  Sends a message to all tabs in any window
 */
function allTabs (message) {
  return tabs.getAllTabs()
    .then(tabs => {
      tabs.forEach((tab) => {
        sendMessage(tab.id, message);
      });
      return tabs;
    });
}

function activeTabs (message) {
  return tabs.getAllActive()
    .then(tabs => {
      tabs.forEach((tab) => {
        sendMessage(tab.id, message);
      });
      return tabs;
    });
}

/**
 *
 */
function activeTab (message) {
  return tabs.getActive()
    .then(tab => sendMessage(tab.id, message));
}

/**
 *
 */
function sendMessage (tabId, message) {
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.tabs.sendMessage(tabId, message, function (response) {
        const err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(response);
      });
    });
  } else {
    return browser.tabs.sendMessage(tabId, message);
  }
}

export default {
  tab,
  activeTab,
  allTabs,
  activeTabs
};
