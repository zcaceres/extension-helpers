var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* global chrome browser */

/**
 * Get a cookie by name for a given url.
 * @see [How Chrome handles](https://developer.chrome.com/extensions/cookies#method-get) cookies with the same name
 * @memberof cookie
 * @param  {String} url             URL of site to get cookie from
 * @param  {String} name            Name of cookie to get
 * @param  {?String} optionalStoreId The ID of the cookie store in which to look for the cookie. By default, the current execution context's cookie store will be used.
 * @return {Promise<Cookie>}        Promise resolved with Cookie object or rejected with error
 */
function get(url, name, optionalStoreId) {
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

/**
 * Set a cookie by name for a given url.
 * @memberof cookie
 * @see [How Chrome handles](https://developer.chrome.com/extensions/cookies#method-set) cookies with the same name
 * @param  {String} url             URL of site to get cookie from
 * @param  {String} name            Name of cookie to get
 * @param  {String} value           Value of cookie
 * @param  {?Object} optionalParamsObj See [Chrome docs](https://developer.chrome.com/extensions/cookies#method-set) for details of this object
 * @return {Promise<Cookie>}        Promise resolved with Cookie object or rejected with error
 */
function set(url, name, value, optionalParamsObj) {
  const params = _extends({ url, name, value }, optionalParamsObj);
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

/**
 * Get all cookies by name for a given url
 * @memberof cookie
 * @param  {?String} url               Optional url to get cookies from
 * @param  {?String} name              Optional name of cookie to get from url
 * @param  {?Object} optionalParamsObj Optional parameters, see [Chrome docs](https://developer.chrome.com/extensions/cookies#method-getAll) for specifics of other params
 * @return {Promise<Array<Cookie>>}   Promise resolved with array of Cookie objects or rejected with an error
 */
function getAll(url, name, optionalParamsObj) {
  const params = _extends({ url, name }, optionalParamsObj);
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

/**
 * Remove a cookie by name for a given url
 * @param  {String} url             URL of site to remove cookie from
 * @memberof cookie
 * @param  {String} name            Name of cookie to remove
 * @param  {?String} optionalStoreId The ID of the cookie store in which to look for the cookie. By default, the current execution context's cookie store will be used.
 * @return {Promise<Object>}        Promise resolved with details of cookie that has been removed or rejected with error
 */
function remove(url, name, optionalStoreId) {
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