# Browser Extension Helpers

Promisified, cross-browser wrappers and helpers for extension APIs.

Support for: Chrome, Firefox, Edge.

Note: Many APIs are not supported in Edge. Check their documentation.

## Features
### Tabs
```js
import extensionHelpers from 'extension-helpers'
import { tabs, cookies, localStorage, message, BadgeManager } from extensionHelpers

tabs.focusTab(tabId)

tabs.closeTab(tabId)

tabs.openTab('http://google.com', true)
  .then(tab => /* do something */)

tabs.getActiveTabs()
  .then(arrayOfTabs => /* do something */)

tabs.getAllTabs()
  .then(arrayOfTabs => /* do something */)

tabs.executeOnAllTabs(fileOrCodeToInject, fileOrCode)

tabs.executeOnActiveTabs(fileOrCodeToInject, fileOrCode)

tabs.executeScript(tabId, fileOrCodeToInject, fileOrCode)

// Message
message.tab(tabId, message)

message.allTabs(message)

message.activeTab(message)

message.activeTabs(message)

// Local Storage
localStorage.get(key)

localStorage.set(key, value)

// Cookies
cookie.get(url, name, optionalStoreId)

cookie.set(url, name, value, optionalStoreId)

cookie.getAll(url, name, additionalParamsObj);

cookie.remove(url, name, optionalStoreId);

// Badges
const badgeManager = new BadgeManager(chrome || browser, badgeColor);

badgeManager.add(number);
badgeManager.subtract(number);
badgeManager.clear();
```
