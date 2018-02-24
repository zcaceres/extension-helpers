import cookie from './cookie';
import badgeManager from './badge';
import tabs from './tabs';
import message from './message';
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
 * @author Zachary Caceres <[Website](http://zachcaceres.com) | [Twitter](www.twitter.com/zachcaceres) | [GitHub](www.github.com/zcaceres>)
 * @copyright MIT
 */

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

export default {
  cookie,
  badgeManager,
  tabs,
  message,
  localStorage,
  extensions
};