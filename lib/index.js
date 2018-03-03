import cookie from './cookie';
import badgeManager from './badge';
import tabs from './tabs';
import message from './message';
import history from './history';
import localStorage from './localStorage';
import extensions from './extensions';

// Prefix for Edge/Firefox/Chrome to access browser apis
function prefixBrowser() {
  window.browser = function () {
    return window.msBrowser || window.browser || window.chrome;
  }();
}

prefixBrowser();

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

export default {
  cookie,
  badgeManager,
  tabs,
  message,
  history,
  localStorage,
  extensions
};