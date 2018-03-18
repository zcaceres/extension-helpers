import cookie from './cookie';
import badgeManager from './badge';
// import bookmarks from './bookmarks';
import tabs from './tabs';
import message from './message';
import history from './history';
import alarms from './alarms';
import localStorage from './localStorage';
import extensions from './extensions';
import wallpaper from './wallpaper';
import windows from './windows';

// Prefix for Edge/Firefox/Chrome to access browser apis
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
 * Schedule code to run at a specific time.
 * @module alarms
 */

export default {
  alarms,
  badgeManager,
  // bookmarks,
  cookie,
  extensions,
  history,
  localStorage,
  message,
  tabs,
  wallpaper,
  windows
};