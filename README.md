# Browser Extension Helpers

Cross-browser compatible wrappers and helpers for  extension development.

Support for: Chrome, Firefox, Edge

## Features
### Tabs
```js
import extensionHelpers from 'extension-helpers'
import { tabs } from extensionHelpers

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
```

### Message
```js
message.tab(tabId, message)

message.allTabs(message)

message.activeTab(message)

message.activeTabs(message)
```

### Local Storage
```js
localStorage.get(key)

localStorage.set(key, value)
```

### Cookies
```js
cookie.get(url, name, optionalStoreId)

cookie.set(url, name, value, optionalStoreId)

cookie.getAll(url, name, additionalParamsObj);

cookie.remove(url, name, optionalStoreId);
```

### Badges
```js
const badgeManager = new BadgeManager(chrome || browser, badgeColor);

badgeManager.add(number);
badgeManager.subtract(number);
badgeManager.clear();

```
