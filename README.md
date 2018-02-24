# Browser Extension Helpers

Promisified, cross-browser wrappers and helpers for extension APIs.

-   Normalized & Promisified: no more fussing with Chrome's irregular callbacks, all functions returns a promise
-   Simple: hide the `browser.api.action` boilerplate behind function calls
-   Cross-Browser: use the same functions on Chrome, Firefox, or Edge

Note: Many APIs are not supported in Edge. Check their documentation.

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [extension](#extension)
    -   [enable](#enable)
    -   [disable](#disable)
    -   [getAll](#getall)
    -   [get](#get)
-   [localStorage](#localstorage)
    -   [set](#set)
    -   [get](#get-1)
-   [message](#message)
    -   [tab](#tab)
    -   [allTabs](#alltabs)
    -   [activeTabs](#activetabs)
    -   [activeTab](#activetab)
-   [tabs](#tabs)
    -   [focus](#focus)
    -   [close](#close)
    -   [getActive](#getactive)
    -   [executeOnActive](#executeonactive)
    -   [open](#open)
    -   [getAllActive](#getallactive)
    -   [getAll](#getall-1)
    -   [executeOnAll](#executeonall)
    -   [executeOnAllActive](#executeonallactive)
-   [cookie](#cookie)
    -   [get](#get-2)
    -   [set](#set-1)
    -   [getAll](#getall-2)
    -   [remove](#remove)
-   [index](#index)
-   [BadgeManager](#badgemanager)
    -   [add](#add)
    -   [subtract](#subtract)
    -   [clear](#clear)

### extension

Enable, disable, and manage other browser extensions

#### enable

Enable (activate) a browser extension

**Parameters**

-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The browser-assigned id of the extension

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)>** Promise resolved with true if successful or rejected with error

#### disable

Disable (deactivate) a browser extension

**Parameters**

-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The Browser-assigned id of the extension

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)>** Promise resolved with true if successful or rejected with error

#### getAll

Get all currently installed browser extension

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;ExtensionInfo>>** Promise resolved with array of browser extension information objects, or rejected with error

#### get

Get a browser by extension id

**Parameters**

-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Browser-assigned extension id

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;ExtensionInfo>** Promise resolved with browser extension information object or rejected with an error

### localStorage

Manage the local storage of your browser extension

#### set

Set a value at a given key in the extension's local storage

**Parameters**

-   `key` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Key for the set value
-   `value` **Any** Value to serialize to local storage. Objects and functions serialized to {}. Arrays, Regex, and primitives serialize correctly.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)>** Promise resolved with nothing, or rejected with error

#### get

Get the value for a given key in local storage

**Parameters**

-   `key` **([String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)> | null)** Single key to get, array of keys to get, or null to get entire contents

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>** Promise resolved with object with key-value mappings or rejected with an error

### message

Send messages to tabs

#### tab

Send a message directly to tab by id

**Parameters**

-   `tabId` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Browser-assigned id of target tab
-   `message` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any valid JSON-ifiable object

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>** Promise resolved with response or rejected with error

#### allTabs

Sends a message to all tabs in any window

**Parameters**

-   `message` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any valid JSON-ifiable object

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;Tab>>** Promise resolved with array of tabs that were sent the message or rejected with an error

#### activeTabs

Sends a message to tabs that are considered 'active' (focused) for all open browser windows

**Parameters**

-   `message` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any valid JSON-ifiable object

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;Tab>>** Promise resolved with array of tabs that were sent the message or rejected with an error

#### activeTab

Send message to active (focused) tab in the current window.

**Parameters**

-   `message` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any valid JSON-ifiable object

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>** Promise resolved with response from tab or rejected with an error

### tabs

Open, close, focus, blur and manage tabs.

#### focus

Forces browser focus on given tab

**Parameters**

-   `tabId` **([number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) \| [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)>)** id of chrome tab

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>** resolved with tabDetails object or rejected with error

#### close

Closes a tab by tab id

**Parameters**

-   `tabIds` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** an array

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)>** Promise resolved with undefined or rejected with error

#### getActive

Gets currently active tab (the tab focused in current browser window)

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>** tab object

#### executeOnActive

Execute a file or code on a given tab

**Parameters**

-   `toInject` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** file name or raw code to execute
-   `typeToInject` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** valid params are "code" or "file"

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>** any results of the injected code's execution

#### open

Open a new tab optionally blurred or focused, and return the new tab's id.

**Parameters**

-   `url` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** the url you want the new tab to show
-   `active` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** should browser focus on the new tab

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>** resolved with the newly opened tab or rejected with error

#### getAllActive

Get active tabs in all browser windows

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>>** Promise resolved with an array of all active tab objects or rejected with an error

#### getAll

Get all tabs

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>>** Promise resolved with all tabs or rejected with an error

#### executeOnAll

Execute raw js or a script by filename on all tabs

**Parameters**

-   `toInject` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** file name or raw code to execute
-   `typeToInject` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** valid params are "code" or "file"

Returns **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>>** Array Promises resolved with any results of the injected code's execution or rejected with an error

#### executeOnAllActive

Executes a file or inline code as a string on all the active tabs of all windows.

**Parameters**

-   `toInject` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** file name or raw code to execute
-   `typeToInject` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** valid params are "code" or "file"

Returns **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>>** Array Promises resolved with any results of the injected code's execution or rejected with an error

### cookie

Manage cookies in the browser

#### get

-   **See: [How Chrome handles](https://developer.chrome.com/extensions/cookies#method-get) cookies with the same name**

Get a cookie by name for a given url.

**Parameters**

-   `url` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** URL of site to get cookie from
-   `name` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Name of cookie to get
-   `optionalStoreId` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** The ID of the cookie store in which to look for the cookie. By default, the current execution context's cookie store will be used.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;Cookie>** Promise resolved with Cookie object or rejected with error

#### set

-   **See: [How Chrome handles](https://developer.chrome.com/extensions/cookies#method-set) cookies with the same name**

Set a cookie by name for a given url.

**Parameters**

-   `url` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** URL of site to get cookie from
-   `name` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Name of cookie to get
-   `value` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Value of cookie
-   `optionalParamsObj` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)?** See [Chrome docs](https://developer.chrome.com/extensions/cookies#method-set) for details of this object

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;Cookie>** Promise resolved with Cookie object or rejected with error

#### getAll

Get all cookies by name for a given url

**Parameters**

-   `url` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Optional url to get cookies from
-   `name` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Optional name of cookie to get from url
-   `optionalParamsObj` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)?** Optional parameters, see [Chrome docs](https://developer.chrome.com/extensions/cookies#method-getAll) for specifics of other params

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;Cookie>>** Promise resolved with array of Cookie objects or rejected with an error

#### remove

Remove a cookie by name for a given url

**Parameters**

-   `url` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** URL of site to remove cookie from
-   `name` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Name of cookie to remove
-   `optionalStoreId` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** The ID of the cookie store in which to look for the cookie. By default, the current execution context's cookie store will be used.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>** Promise resolved with details of cookie that has been removed or rejected with error

### index

**Meta**

-   **copyright**: MIT

-   **author**: Zachary Caceres &lt;\[Website](http&#x3A;//zachcaceres.com) | \[Twitter](www.twitter.com/zachcaceres) | \[GitHub](www.github.com/zcaceres>)

### BadgeManager

A BadgeManager object for controlling the badges on your extension's Browser Action toolbar icon.
Should be used as a singleton, since it tracks the state of your extension's badges.

**Parameters**

-   `badgeColor` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The hex code of the color for your badge

#### add

Add a number to your badge's current value

**Parameters**

-   `num` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** The number to add to your badge

Returns **[undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)** nothing

#### subtract

Subtract a number from your badge's current value

**Parameters**

-   `num` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** The number to subtract

Returns **[undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)** nothing

#### clear

Clear your badge

Returns **[undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)** nothing
