/* global browser chrome */
import { PromiseFactory } from '../utils';

/**
 * [getById description]
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

export default {
  getById
};
