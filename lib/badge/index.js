/**
 * [BadgeManager description]
 */
class BadgeManager {
  constructor(badgeColor) {
    this.badgeNum = 0;
    window.browser.browserAction.setBadgeBackgroundColor({ color: badgeColor || '#E77171' });
  }

  add(num) {
    const numToAdd = Number(num) || 1;
    this.badgeNum += numToAdd;
    window.browser.browserAction.setBadgeText({ text: this.badgeNum.toString() });
  }

  subtract(num) {
    const numToAdd = Number(num) || 1;
    this.badgeNum -= numToAdd;
    window.browser.browserAction.setBadgeText({ text: this.badgeNum.toString() });
  }

  clear() {
    window.browser.browserAction.setBadgeText({ text: '' });
    this.badgeNum = 0;
  }
}

export default BadgeManager;