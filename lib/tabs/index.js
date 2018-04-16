/* global browser chrome */
import PromiseFactory from '../utils';

/**
 * Forces browser focus on given tab
 * @memberof tabs
 * @param {number | Array<number>} tabId id of chrome tab
 * @returns {Promise<Object>} resolved with tabDetails object or rejected with error
 */
function focus(tabId) {
  return PromiseFactory(chrome.tabs.update, browser.tabs.update, tabId, { active: true });
}

/**
 * Closes a tab by tab id
 * @memberof tabs
 * @param  {number}  tabIds an array
 * @return {Promise<undefined>} Promise resolved with undefined or rejected with error
 */
function close(tabIds) {
  return PromiseFactory(chrome.tabs.remove, browser.tabs.remove, tabIds);
}

/**
 * Gets currently active tab (the tab focused in current browser window)
 * @memberof tabs
 * @return {Promise<Object>} tab object
 */
function getActive() {
  return PromiseFactory(chrome.tabs.query, browser.tabs.query, { active: true, currentWindow: true }).then(tabs => {
    const [tab] = tabs;
    return tab;
  });
}

/**
 * Execute a file or code on a given tab
 * @memberof tabs
 * @param  {String} toInject file name or raw code to execute
 * @param  {String} typeToInject valid params are "code" or "file"
 * @return {Promise<Object>} any results of the injected code's execution
 */
function executeOnActive(toInject, typeToInject) {
  return getActive().then(tab => {
    return executeScript(tab.id, toInject, typeToInject);
  });
}

/**
 * Open a new tab optionally blurred or focused, and return the new tab's id.
 * @memberof tabs
 * @param  {String} url the url you want the new tab to show
 * @param  {Boolean} active should browser focus on the new tab
 * @return {Promise<Object>} resolved with the newly opened tab or rejected with error
 */
function open(url, active) {
  return PromiseFactory(chrome.tabs.create, browser.tabs.create, { url, active });
}

/**
 * Get active tabs in all browser windows
 * @memberof tabs
 * @return {Promise<Array<Object>>} Promise resolved with an array of all active tab objects or rejected with an error
 */
function getAllActive() {
  return PromiseFactory(chrome.tabs.query, browser.tabs.query, { active: true });
}

/**
 * Get all tabs
 * @memberof tabs
 * @return {Promise<Array<Object>>} Promise resolved with all tabs or rejected with an error
 */
function getAll() {
  return PromiseFactory(chrome.tabs.query, browser.tabs.query, {});
}

/**
 * Execute raw js or a script by filename on all tabs
 * @memberof tabs
 * @param  {String} toInject file name or raw code to execute
 * @param  {String} typeToInject valid params are "code" or "file"
 * @return {Array<Promise<Object>>} Array Promises resolved with any results of the injected code's execution or rejected with an error
 */
function executeOnAll(toInject, typeToInject) {
  return getAll().then(tabs => {
    const tabIds = tabs.map(tab => tab.id);
    const results = [];
    tabIds.forEach(tabId => {
      results.push(executeScript(tabId, toInject, typeToInject));
    });
    return results;
  });
}

/**
 * Executes a file or inline code as a string on all the active tabs of all windows.
 * @memberof tabs
 * @param  {String} toInject file name or raw code to execute
 * @param  {String} typeToInject valid params are "code" or "file"
 * @return {Array<Promise<Object>>} Array of Promises resolved with any results of the injected code's execution or rejected with an error
 */
function executeOnAllActive(toInject, typeToInject) {
  return getAllActive().then(tabs => {
    const tabIds = tabs.map(tab => tab.id);
    const results = [];
    tabIds.forEach(tabId => {
      results.push(executeScript(tabId, toInject, typeToInject));
    });
    return results;
  });
}

/**
 * Get tab that the script call is being made from
 * @memberof tabs
 * @return {Promise<Tab>} Promise that resolves with Tab or rejects with error
 */
function getCurrent() {
  return PromiseFactory(chrome.tabs.getCurrent, browser.tabs.getCurrent);
}

/**
 * Reloads a tab by id. Optionally bypasses cache.
 * @memberof tabs
 * @param  {String} tabId        Id of tab to reload
 * @param  {Boolean} bypassCache Bypass local web cache
 * @return {Promise<undefined>}  Bypass
 */
function reload(tabId, bypassCache) {
  return PromiseFactory(chrome.tabs.reload, browser.tabs.reload, { bypassCache });
}

/**
 * Executes a script.
 * @private
 * @memberof tabs
 * @param  {Number} tabId id of tab to execute script
 * @param  {String} toInject file name or raw code to execute
 * @param  {String} typeToInject valid params are "code" or "file"
 * @return {Promise<Object>} Promise resolved with results of code's execution or rejected with an error
 */
function executeScript(tabId, toInject, typeToInject) {
  const executionObj = { [typeToInject]: toInject };
  return PromiseFactory(chrome.tabs.executeScript, browser.tabs.executeScript, tabId, executionObj);
}

export default {
  open,
  close,
  focus,
  reload,
  getAll,
  getActive,
  getCurrent,
  getAllActive,
  executeOnAll,
  executeOnAllActive,
  executeOnActive
};