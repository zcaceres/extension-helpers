/* global chrome browser */
import tabs from '../tabs';

/**
 * Send a message directly to tab by id
 * @memberof message
 * @param  {Number} tabId   Browser-assigned id of target tab
 * @param  {Object} message Any valid JSON-ifiable object
 * @return {Promise<Object>} Promise resolved with response or rejected with error
 */
function tab(tabId, message) {
  return sendMessage(tabId, message);
}

/**
 * Sends a message to all tabs in any window
 * @memberof message
 * @param  {Object} message Any valid JSON-ifiable object
 * @return {Promise<Array<Tab>>} Promise resolved with array of tabs that were sent the message or rejected with an error
 */
function allTabs(message) {
  return tabs.getAll().then(tabs => {
    tabs.forEach(tab => {
      sendMessage(tab.id, message);
    });
    return tabs;
  });
}

/**
 * Sends a message to tabs that are considered 'active' (focused) for all open browser windows
 * @memberof message
 * @param  {Object} message Any valid JSON-ifiable object
 * @return {Promise<Array<Tab>>} Promise resolved with array of tabs that were sent the message or rejected with an error
 */
function activeTabs(message) {
  return tabs.getAllActive().then(tabs => {
    tabs.forEach(tab => {
      sendMessage(tab.id, message);
    });
    return tabs;
  });
}

/**
 * Send a message to an array of tabs
 * @memberof message
 * @param  {Array<Tab>} tabArr                Array of Tab objects to send message to
 * @param  {Object} message                   Any valid JSON-ifiable object
 * @return {Promise<Array<Object>>}           Promise resolved with array of responses from messages or rejected with an error
 */
function manyTabs(tabArr, message) {
  return Promise.all(tabArr.map(tab => sendMessage(tab.id, message)));
}

/**
 * Send message to active (focused) tab in the current window.
 * @memberof message
 * @param  {Object} message Any valid JSON-ifiable object
 * @return {Promise<Object>} Promise resolved with response from tab or rejected with an error
 */
function activeTab(message) {
  return tabs.getActive().then(tab => sendMessage(tab.id, message));
}

/**
 * Helper for sending message to a tab by id
 * @private
 * @memberof message
 * @param  {String} tabId   Browser-assigned id of target tab
 * @param  {Object} message Any valid JSON-ifiable object
 * @return {Promise<Object>} Promise resolved with response from tab or rejected with an error
 */
function sendMessage(tabId, message) {
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.tabs.sendMessage(tabId, message, function(response) {
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
  manyTabs,
  activeTabs
};
