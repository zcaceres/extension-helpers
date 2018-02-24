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

export default {
  cookie: cookie,
  badgeManager: badgeManager,
  tabs: tabs,
  message: message,
  localStorage: localStorage,
  extensions: extensions
};