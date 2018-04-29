'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A BadgeManager object for controlling the badges on your extension's Browser Action toolbar icon.
 * Should be used as a singleton, since it tracks the state of your extension's badges.
 * @param {String} badgeColor The hex code of the color for your badge
 */
var BadgeManager = function () {
  function BadgeManager(badgeColor) {
    _classCallCheck(this, BadgeManager);

    this.badgeNum = 0;
    window.browser.browserAction.setBadgeBackgroundColor({ color: badgeColor || '#E77171' });
  }

  /**
   * Add a number to your badge's current value
   * @param {Number} num The number to add to your badge
   * @return {undefined} nothing
   */


  _createClass(BadgeManager, [{
    key: 'add',
    value: function add(num) {
      var numToAdd = Number(num) || 1;
      this.badgeNum += numToAdd;
      window.browser.browserAction.setBadgeText({ text: this.badgeNum.toString() });
    }

    /**
     * Subtract a number from your badge's current value
     * @param  {Number} num The number to subtract
     * @return {undefined}  nothing
     */

  }, {
    key: 'subtract',
    value: function subtract(num) {
      var numToAdd = Number(num) || 1;
      this.badgeNum -= numToAdd;
      window.browser.browserAction.setBadgeText({ text: this.badgeNum.toString() });
    }

    /**
     * Clear your badge
     * @return {undefined} nothing
     */

  }, {
    key: 'clear',
    value: function clear() {
      window.browser.browserAction.setBadgeText({ text: '' });
      this.badgeNum = 0;
    }
  }]);

  return BadgeManager;
}();

exports.default = BadgeManager;