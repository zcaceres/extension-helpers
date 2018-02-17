class BadgeManager {
  constructor (browser, badgeColor) {
    this.badgeNum = 0;
    this.browser = browser;
    this.browser.browserAction.setBadgeBackgroundColor({ color: badgeColor || '#E77171' });
  }

  add (num) {
    const numToAdd = Number(num) || 1;
    this.badgeNum += numToAdd;
    this.browser.browserAction.setBadgeText({ text: this.badgeNum.toString() });
  }

  subtract (num) {
    const numToAdd = Number(num) || 1;
    this.badgeNum -= numToAdd;
    this.browser.browserAction.setBadgeText({ text: this.badgeNum.toString() });
  }

  clear () {
    this.browser.browserAction.setBadgeText({ text: '' });
    this.badgeNum = 0;
  }
}

export default BadgeManager;
