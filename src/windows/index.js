/* global browser chrome */
import PromiseFactory from '../utils';

/**
 * Get a window by id
 * @memberof windows
 * @see [Chrome filter defaults](https://developer.chrome.com/extensions/windows#method-get) for this API
 * @see [Firefox filter defaults](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/windows/get) for this API
 * @param  {Number} windowId         Integer Id of window
 * @param  {?Boolean} includeTabs    Include array of window's associated Tab objects. Default false.
 * @param  {?Array<WindowTypes>} filterWindowTypes Array to filter window by WindowType. Chrome and Firefox support different WindowTypes.
 * @return {Promise<Window>}         Promise resolved with a Window object or rejected with an error.
 */
function getById(windowId, includeTabs, filterWindowTypes) {
  const getInfo = { populate: includeTabs, windowTypes: filterWindowTypes };
  return PromiseFactory(chrome.windows.get, browser.windows.get, windowId, getInfo);
}

/**
 * Get the current browser window
 * @memberof windows
 * @param  {?Boolean} includeTabs    Include array of window's associated Tab objects. Default false.
 * @param  {?Array<WindowTypes>} filterWindowTypes Array to filter window by WindowType. Chrome and Firefox support different WindowTypes.
 * @return {Promise<Window>}         Promise resolved with a Window object or rejected with an error.
 */
function getCurrent(includeTabs, filterWindowTypes) {
  const getInfo = { populate: includeTabs, windowTypes: filterWindowTypes };
  return PromiseFactory(chrome.windows.getCurrent, browser.windows.getCurrent, getInfo);
}

/**
 * Get the most recently focused window. Usually the window 'on top'.
 * @memberof windows
 * @param  {?Boolean} includeTabs    Include array of window's associated Tab objects. Default false.
 * @param  {?Array<WindowTypes>} filterWindowTypes Array to filter window by WindowType. Chrome and Firefox support different WindowTypes.
 * @return {Promise<Window>}         Promise resolved with a Window object or rejected with an error.
 */
function getLastFocused(includeTabs, filterWindowTypes) {
  const getInfo = { populate: includeTabs, windowTypes: filterWindowTypes };
  return PromiseFactory(chrome.windows.getLastFocused, browser.windows.getLastFocused, getInfo);
}

/**
 * Get all open windows
 * @memberof windows
 * @param  {?Boolean} includeTabs    Include array of window's associated Tab objects. Default false.
 * @param  {?Array<WindowTypes>} filterWindowTypes Array to filter window by WindowType. Chrome and Firefox support different WindowTypes.
 * @return {Promise<Window>}         Promise resolved with a Window object or rejected with an error.
 */
function getAll(includeTabs, filterWindowTypes) {
  const getInfo = { populate: includeTabs, windowTypes: filterWindowTypes };
  return PromiseFactory(chrome.windows.getAll, browser.windows.getAll, getInfo);
}

/**
 * Opens a new browser window with optional parameters.
 * @see [Full list of parameters](https://developer.chrome.com/extensions/windows#method-create)
 * @memberof windows
 * @param  {?String} url            Fully qualified url to open in new window
 * @param  {Object} params          Optional parameters like incognito, focused, positioning, and tabid. See Chrome and Firefox docs for complete list.
 * @return {Promise<Window>}        Promise resolved with a Window object or rejected with an error.
 */
function create(url, params) {
  return PromiseFactory(chrome.windows.create, browser.windows.create, { url, ...params });
}

/**
 * Update a Window's state
 * @see [Full list of parameters](https://developer.chrome.com/extensions/windows#method-update)
 * @memberof windows
 * @param  {Number} windowId  Integer Id of window to update
 * @param  {?Object} params   Optional parameters like height, width, and state.
 * @return {Promise<Window>}  Promise resolved with a Window object or rejected with an error.
 */
function update(windowId, params) {
  return PromiseFactory(chrome.windows.update, browser.windows.update, { ...params });
}

/**
 * Focus on a given window
 * @memberof windows
 * @param  {Number} windowId  Integer Id of window to focus
 * @return {Promise<Window>}  Promise resolved with a Window object or rejected with an error.
 */
function focus(windowId) {
  return update(windowId, { focused: true });
}

/**
 * Draw attention to a given window
 * @memberof windows
 * @param  {Number} windowId  Integer Id of window to focus
 * @return {Promise<Window>}  Promise resolved with a Window object or rejected with an error.
 */
function drawAttention(windowId) {
  return update(windowId, { drawAttention: true });
}

export default {
  create,
  drawAttention,
  getAll,
  getById,
  getCurrent,
  getLastFocused,
  focus,
  update
};
