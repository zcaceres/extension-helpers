var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* global chrome browser */

/**
 * Creates a new alarm.
 * @memberof alarms
 * @see [Firefox Alarms](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/alarms/create) or [Chrome Alarms](https://developer.chrome.com/extensions/alarms#method-create)
 * @param  {?String} name           Optional name to identify alarm.
 * @param  {?Object} optionalParams Object of shape { when: {Number}, delayInMinutes: {Number}, periodInMinutes: {Number} }. Describes when the alarm should fire. The initial time must be specified by either when or delayInMinutes (but not both). If periodInMinutes is set, the alarm will repeat every periodInMinutes minutes after the initial event. If neither when or delayInMinutes is set for a repeating alarm, periodInMinutes is used as the default for delayInMinutes.
 * @return {Promise<undefined>}     Promise resolved with undefined or rejected with an error.
 */
function create(name, optionalParams) {
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.alarms.create(name, _extends({}, optionalParams));
      const err = chrome.runtime.lastError;
      if (err) return reject(err);
      resolve();
    });
  } else {
    return browser.alarms.create(name, _extends({}, optionalParams));
  }
}

/**
 * Gets an alarm, given its name.
 * @memberof alarms
 * @param  {?String} name        Optional. The name of the alarm to get. Defaults to the empty string.
 * @return {Promise<Alarm>}      A Promise resolved with an Alarm object or rejected with an error. If resolved, value represents the alarm whose name matches name. If no alarms match, this will be undefined.
 */
function get(name) {
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.alarms.get(name, function (alarm) {
        const err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(alarm);
      });
    });
  } else {
    return browser.alarms.get(name);
  }
}

/**
 * Gets all active alarms for the extension.
 * @memberof alarms
 * @return {Promise<Array<Alarm>>} Promise resolved with an array of Alarm objects or rejected with an error. Resolves with empty array if no alarms are active.
 */
function getAll() {
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.alarms.getAll(function (alarms) {
        const err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(alarms);
      });
    });
  } else {
    return browser.alarms.getAll();
  }
}

/**
 * Clears the alarm with the given name.
 * @memberof alarms
 * @param  {String} name           Name of the alarm to cancel. Default is empty string.
 * @return {Promise<Boolean>}      Promise resolved with true if alarm was cleared or false if not cleared, or rejected with an error.
 */
function clear(name) {
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.alarms.clear(name, function (wasCleared) {
        const err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(wasCleared);
      });
    });
  } else {
    return browser.alarms.clear(name);
  }
}

/**
 * Cancels all active alarms.
 * @memberof alarms
 * @see [MDN on clearAll](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/alarms/clearAll)
 * @return {Promise<Boolean>} Promise resolved with true if any alarms were cleared or false otherwise. Or, rejected with an error.
 */
function clearAll() {
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.alarms.clearAll(function (wasCleared) {
        const err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(wasCleared);
      });
    });
  } else {
    return browser.alarms.clearAll();
  }
}

export default {
  clear,
  clearAll,
  create,
  get,
  getAll
};