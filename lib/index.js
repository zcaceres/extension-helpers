'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cookie = require('./cookie');

var _cookie2 = _interopRequireDefault(_cookie);

var _badge = require('./badge');

var _badge2 = _interopRequireDefault(_badge);

var _tabs = require('./tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _message = require('./message');

var _message2 = _interopRequireDefault(_message);

var _history = require('./history');

var _history2 = _interopRequireDefault(_history);

var _alarms = require('./alarms');

var _alarms2 = _interopRequireDefault(_alarms);

var _localStorage = require('./localStorage');

var _localStorage2 = _interopRequireDefault(_localStorage);

var _runtime = require('./runtime');

var _runtime2 = _interopRequireDefault(_runtime);

var _notifications = require('./notifications');

var _notifications2 = _interopRequireDefault(_notifications);

var _extensions = require('./extensions');

var _extensions2 = _interopRequireDefault(_extensions);

var _wallpaper = require('./wallpaper');

var _wallpaper2 = _interopRequireDefault(_wallpaper);

var _windows = require('./windows');

var _windows2 = _interopRequireDefault(_windows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Prefix for Edge/Firefox/Chrome to access browser apis

// import bookmarks from './bookmarks';
function prefixBrowser() {
  window.browser = function () {
    return window.msBrowser || window.browser || window.chrome;
  }();
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
 * Manage runtime tasks like messaging extensions
 * @module runtime
 */

/**
 * Manage wallpapers
 * @module wallpaper
 */

/**
 * Manage browser windows
 * @module windows
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
  * Send and manage browser notifications
  * @module notifications
  */

/**
 * Schedule code to run at a specific time.
 * @module alarms
 */

exports.default = {
  alarms: _alarms2.default,
  badgeManager: _badge2.default,
  // bookmarks,
  cookie: _cookie2.default,
  extensions: _extensions2.default,
  history: _history2.default,
  localStorage: _localStorage2.default,
  message: _message2.default,
  notifications: _notifications2.default,
  tabs: _tabs2.default,
  runtime: _runtime2.default,
  wallpaper: _wallpaper2.default,
  windows: _windows2.default
};