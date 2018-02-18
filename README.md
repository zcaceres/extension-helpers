# Browser Extension Helpers

Promisified, cross-browser wrappers and helpers for extension APIs.

- Normalized & Promisified: no more fussing with Chrome's irregular callbacks, all functions returns a promise
- Simple: hide the `browser.api.action` boilerplate behind function calls
- Cross-Browser: use the same functions on Chrome, Firefox, or Edge

Note: Many APIs are not supported in Edge. Check their documentation.

## Features
### Tabs
```js
import extensionHelpers from 'extension-helpers'
import { tabs, extensions, cookies, localStorage, message, BadgeManager } from extensionHelpers

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

// Extension Management (management api)
extensions.enable(extensionId);
extensions.disable(extensionId);
extensions.getAll();
extensions.get(extensionId);

// Badges
// Controls badge icons attached to the browser action toolbar button
const badgeManager = new BadgeManager(badgeColor);

badgeManager.add(number);
badgeManager.subtract(number);
badgeManager.clear();
```
