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

export default {
  cookie: require('./lib/cookie'),
  badge: require('./lib/badge'),
  badgeManager: require('./lib/badge'),
  tabs: require('./lib/tabs'),
  message: require('./lib/message'),
  localStorage: require('./lib/localStorage'),
  extensions: require('./lib/extensions')
};
