/* global window */
const cookie = require('./cookie');
const badgeManager = require('./badge');
// const bookmarks = require('./bookmarks');
const tabs = require('./tabs');
const message = require('./message');
const history = require('./history');
const alarms = require('./alarms');
const localStorage = require('./localStorage');
const extensions = require('./extensions');

// Prefix for Edge/Firefox/Chrome to access browser apis
function prefixBrowser() {
  if (process.env.NODE_ENV === 'test') {
    global.browser = (function() {
      return global.msBrowser || global.browser || global.chrome;
    })();
    const chrome = require('sinon-chrome');
    global.chrome = chrome;
  } else {
    window.browser = (function() {
      return window.msBrowser || window.browser || window.chrome;
    })();
  }
}

prefixBrowser();

// /**
//  * Manage bookmarks
//  * @module bookmarks
//  */

/**
 * Manage cookies in the browser
 * @module cookie
 */

/**
 * Open, close, focus, blur and manage tabs.
 * @module tabs
 */

/**
  * Send messages to tabs
  * @module message
  */

/**
  * Manage the local storage of your browser extension
  * @module localStorage
  */

/**
  * Enable, disable, and manage other browser extensions
  * @module extension
  */

/**
  * Search and manage browser history
  * @module history
  */

/**
 * Schedule code to run at a specific time.
 * @module alarms
 */

module.exports = {
  badgeManager,
  // bookmarks,
  cookie,
  tabs,
  alarms,
  message,
  history,
  localStorage,
  extensions
};
