/**
 * A BadgeManager object for controlling the badges on your extension's Browser Action toolbar icon.
 * Should be used as a singleton, since it tracks the state of your extension's badges.
 * @param {String} badgeColor The hex code of the color for your badge
 */
class BadgeManager {
  constructor(badgeColor) {
    this.badgeNum = 0;
    window.browser.browserAction.setBadgeBackgroundColor({ color: badgeColor || '#E77171' });
  }

  /**
   * Add a number to your badge's current value
   * @param {Number} num The number to add to your badge
   * @return {undefined} nothing
   */
  add(num) {
    const numToAdd = Number(num) || 1;
    this.badgeNum += numToAdd;
    window.browser.browserAction.setBadgeText({ text: this.badgeNum.toString() });
  }

  /**
   * Subtract a number from your badge's current value
   * @param  {Number} num The number to subtract
   * @return {undefined}  nothing
   */
  subtract(num) {
    const numToAdd = Number(num) || 1;
    this.badgeNum -= numToAdd;
    window.browser.browserAction.setBadgeText({ text: this.badgeNum.toString() });
  }

  /**
   * Clear your badge
   * @return {undefined} nothing
   */
  clear() {
    window.browser.browserAction.setBadgeText({ text: '' });
    this.badgeNum = 0;
  }
}

export default BadgeManager;