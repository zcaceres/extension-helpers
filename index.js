import cookie from './lib/cookie';
import badgeManager from './lib/badge';
import tabs from './lib/tabs';
import message from './lib/message';
import localStorage from './lib/localStorage';
import extensions from './lib/extensions';

// Prefix for Edge/Firefox/Chrome to access browser apis
function prefixBrowser () {
  window.browser = (
    function () {
      return window.msBrowser ||
      window.browser ||
      window.chrome;
    }());
}

prefixBrowser();

console.log(cookie, badgeManager, tabs, message, localStorage, extensions);

export default {
  cookie: cookie,
  badgeManager: badgeManager,
  tabs: tabs,
  message: message,
  localStorage: localStorage,
  extensions: extensions
};
