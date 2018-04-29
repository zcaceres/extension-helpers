# Browser Extension Helpers

> Work in progress, PRS welcome

```js
import extensionHelpers from 'extension-helpers';

// or

const extensionHelpers = require('extension-helpers').default;
```

Promisified, cross-browser wrappers and helpers for extension APIs.

-   Normalized & Promisified: no more fussing with Chrome's irregular callbacks, all functions returns a promise
-   Simple: hide the `browser.api.action` boilerplate behind function calls
-   Cross-Browser: use the same functions on Chrome, Firefox, or Edge

Note: Many APIs are not supported in Edge. Check their documentation.

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [wallpaper](#wallpaper)
    -   [set](#set)
-   [alarms](#alarms)
    -   [create](#create)
    -   [get](#get)
    -   [getAll](#getall)
    -   [clear](#clear)
    -   [clearAll](#clearall)
-   [history](#history)
    -   [search](#search)
    -   [getVisits](#getvisits)
    -   [addUrl](#addurl)
    -   [deleteUrl](#deleteurl)
    -   [deleteRange](#deleterange)
    -   [deleteAll](#deleteall)
-   [extension](#extension)
    -   [self](#self)
    -   [permissionWarningsById](#permissionwarningsbyid)
    -   [permissionWarningsByManifest](#permissionwarningsbymanifest)
    -   [enable](#enable)
    -   [disable](#disable)
    -   [getAll](#getall-1)
    -   [get](#get-1)
-   [localStorage](#localstorage)
    -   [set](#set-1)
    -   [get](#get-2)
-   [message](#message)
    -   [tab](#tab)
    -   [allTabs](#alltabs)
    -   [activeTabs](#activetabs)
    -   [manyTabs](#manytabs)
    -   [activeTab](#activetab)
-   [tabs](#tabs)
    -   [focus](#focus)
    -   [close](#close)
    -   [getActive](#getactive)
    -   [executeOnActive](#executeonactive)
    -   [open](#open)
    -   [getAllActive](#getallactive)
    -   [getAll](#getall-2)
    -   [executeOnAll](#executeonall)
    -   [executeOnAllActive](#executeonallactive)
    -   [getCurrent](#getcurrent)
    -   [reload](#reload)
-   [windows](#windows)
    -   [getById](#getbyid)
    -   [getCurrent](#getcurrent-1)
    -   [getLastFocused](#getlastfocused)
    -   [getAll](#getall-3)
    -   [create](#create-1)
    -   [update](#update)
    -   [focus](#focus-1)
    -   [drawAttention](#drawattention)
-   [notifications](#notifications)
-   [runtime](#runtime)
    -   [sendMessage](#sendmessage)
-   [cookie](#cookie)
    -   [get](#get-3)
    -   [set](#set-2)
    -   [getAll](#getall-4)
    -   [remove](#remove)
    -   [getAllCookieStores](#getallcookiestores)
-   [BadgeManager](#badgemanager)
    -   [add](#add)
    -   [subtract](#subtract)
    -   [clear](#clear-1)

### wallpaper

Manage wallpapers

#### set

-   **See: [WallpaperLayout enum from Chrome](https://developer.chrome.com/extensions/wallpaper#type-WallpaperLayout)**

CHROME ONLY. Sets wallpaper to an image (url) or Array buffer (data).

**Parameters**

-   `filename` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** File name of saved wallpaper
-   `layout` **WallpaperLayout** A WallpaperLayout Enum value
-   `params` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)?** Optional thumbnail, binary image source and url. See Chrome API docs for options(<https://developer.chrome.com/extensions/wallpaper>)

### alarms

Schedule code to run at a specific time.

#### create

-   **See: [Firefox Alarms](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/alarms/create) or [Chrome Alarms](https://developer.chrome.com/extensions/alarms#method-create)**

Creates a new alarm.

**Parameters**

-   `name` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Optional name to identify alarm.
-   `optionalParams` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)?** Object of shape { when: {Number}, delayInMinutes: {Number}, periodInMinutes: {Number} }. Describes when the alarm should fire. The initial time must be specified by either when or delayInMinutes (but not both). If periodInMinutes is set, the alarm will repeat every periodInMinutes minutes after the initial event. If neither when or delayInMinutes is set for a repeating alarm, periodInMinutes is used as the default for delayInMinutes.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)>** Promise resolved with undefined or rejected with an error.

#### get

Gets an alarm, given its name.

**Parameters**

-   `name` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Optional. The name of the alarm to get. Defaults to the empty string.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;Alarm>** A Promise resolved with an Alarm object or rejected with an error. If resolved, value represents the alarm whose name matches name. If no alarms match, this will be undefined.

#### getAll

Gets all active alarms for the extension.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;Alarm>>** Promise resolved with an array of Alarm objects or rejected with an error. Resolves with empty array if no alarms are active.

#### clear

Clears the alarm with the given name.

**Parameters**

-   `name` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Name of the alarm to cancel. Default is empty string.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)>** Promise resolved with true if alarm was cleared or false if not cleared, or rejected with an error.

#### clearAll

-   **See: [MDN on clearAll](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/alarms/clearAll)**

Cancels all active alarms.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)>** Promise resolved with true if any alarms were cleared or false otherwise. Or, rejected with an error.

### history

Search and manage browser history

#### search

Search the browser history for last visit time of each page matching the query

**Parameters**

-   `text` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** A free-text query to the history service. Leave empty to retrieve all pages.
-   `optionalStartTime` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Double. Limit results to those visited after this date, represented in milliseconds since the epoch. If not specified, this defaults to 24 hours in the past.
-   `optionalEndTime` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Double. Limit results to those visited before this date, represented in milliseconds since the epoch.
-   `optionalMaxResults` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Integer. The maximum number of results to retrieve. Defaults to 100.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;HistoryItem>>** Promise that resolves with array of HistoryItem objects or rejects with error

#### getVisits

Gets information about visits to a url

**Parameters**

-   `url` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Must be fully qualified url including protocol

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;VisitItem>>** Promise that resolves with array of VisitItems or rejects with an error

#### addUrl

Chrome: Adds a URL to the history at the current time with a transition type of "link".
Firefox: Adds a record to the browser's history of a visit to the given URL. The visit's time is recorded as the time of the call, and the TransitionType is recorded as "link".

**Parameters**

-   `url` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The URL to add
-   `optionalParams` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Firefox only. Object with shape { title: {String}, transition: {TransitionType}, visitTime: {Number | String | Object} }. All optional.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)>** Promise resolved with undefined or rejected with an error.

#### deleteUrl

Removes all visits to the given URL from the browser history.

**Parameters**

-   `url` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The URL whose visits should be removed.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)>** Promise resolved with undefined or rejected with an error;

#### deleteRange

Removes all items within the specified date range from the history. Pages will not be removed from the history unless all visits fall within the range.

**Parameters**

-   `startTime` **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) \| [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date))** Items added to history after this date, represented in milliseconds since the epoch.
-   `endTime` **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) \| [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date))** Items added to history before this date, represented in milliseconds since the epoch.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)>** Promise resolved with undefined or rejected with an error.

#### deleteAll

Deletes all items from the history.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)>** Promise resolved with undefined or rejected with an error.

### extension

Enable, disable, and manage other browser extensions

#### self

Get information about the calling extension

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;ExtensionInfo>** Object with info about the extension

#### permissionWarningsById

Get a list of permission warnings for the given extension id

**Parameters**

-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The browser-assigned id of the extension

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>>** Promised resolved with array of permission warnings or rejected with error

#### permissionWarningsByManifest

Get a list of permission warnings for the given extension manifest string

**Parameters**

-   `manifestStr` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Extension manifest JSON string.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>>** Promised resolved with array of permission warnings or rejected with error

#### enable

Enable (activate) a browser extension

**Parameters**

-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The browser-assigned id of the extension

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)>** Promise resolved with true if successful or rejected with error

#### disable

Disable (deactivate) a browser extension

**Parameters**

-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The Browser-assigned id of the extension

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)>** Promise resolved with false if successful or rejected with error

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

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;Tab>>** Promise resolved with array of responses from tabs that were sent a message or rejected with an error

#### activeTabs

Sends a message to tabs that are considered 'active' (focused) for all open browser windows

**Parameters**

-   `message` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any valid JSON-ifiable object

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;Tab>>** Promise resolved with array of responses from tabs that were sent a message rejected with an error

#### manyTabs

Send a message to an array of tabs

**Parameters**

-   `tabArr` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;Tab>** Array of Tab objects to send message to
-   `message` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any valid JSON-ifiable object

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>>** Promise resolved with array of responses from messages or rejected with an error

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

Returns **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>>** Array of Promises resolved with any results of the injected code's execution or rejected with an error

#### getCurrent

Get tab that the script call is being made from

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;Tab>** Promise that resolves with Tab or rejects with error

#### reload

Reloads a tab by id. Optionally bypasses cache.

**Parameters**

-   `tabId` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Id of tab to reload
-   `bypassCache` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Bypass local web cache

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)>** Bypass

### windows

Manage browser windows

#### getById

-   **See: [Chrome filter defaults](https://developer.chrome.com/extensions/windows#method-get) for this API**
-   **See: [Firefox filter defaults](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/windows/get) for this API**

Get a window by id

**Parameters**

-   `windowId` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Integer Id of window
-   `includeTabs` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?** Include array of window's associated Tab objects. Default false.
-   `filterWindowTypes` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;WindowTypes>?** Array to filter window by WindowType. Chrome and Firefox support different WindowTypes.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Window](https://developer.mozilla.org/docs/Web/API/Window)>** Promise resolved with a Window object or rejected with an error.

#### getCurrent

Get the current browser window

**Parameters**

-   `includeTabs` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?** Include array of window's associated Tab objects. Default false.
-   `filterWindowTypes` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;WindowTypes>?** Array to filter window by WindowType. Chrome and Firefox support different WindowTypes.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Window](https://developer.mozilla.org/docs/Web/API/Window)>** Promise resolved with a Window object or rejected with an error.

#### getLastFocused

Get the most recently focused window. Usually the window 'on top'.

**Parameters**

-   `includeTabs` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?** Include array of window's associated Tab objects. Default false.
-   `filterWindowTypes` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;WindowTypes>?** Array to filter window by WindowType. Chrome and Firefox support different WindowTypes.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Window](https://developer.mozilla.org/docs/Web/API/Window)>** Promise resolved with a Window object or rejected with an error.

#### getAll

Get all open windows

**Parameters**

-   `includeTabs` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?** Include array of window's associated Tab objects. Default false.
-   `filterWindowTypes` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;WindowTypes>?** Array to filter window by WindowType. Chrome and Firefox support different WindowTypes.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Window](https://developer.mozilla.org/docs/Web/API/Window)>** Promise resolved with a Window object or rejected with an error.

#### create

-   **See: [Full list of parameters](https://developer.chrome.com/extensions/windows#method-create)**

Opens a new browser window with optional parameters.

**Parameters**

-   `url` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Fully qualified url to open in new window
-   `params` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Optional parameters like incognito, focused, positioning, and tabid. See Chrome and Firefox docs for complete list.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Window](https://developer.mozilla.org/docs/Web/API/Window)>** Promise resolved with a Window object or rejected with an error.

#### update

-   **See: [Full list of parameters](https://developer.chrome.com/extensions/windows#method-update)**

Update a Window's state

**Parameters**

-   `windowId` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Integer Id of window to update
-   `params` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)?** Optional parameters like height, width, and state.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Window](https://developer.mozilla.org/docs/Web/API/Window)>** Promise resolved with a Window object or rejected with an error.

#### focus

Focus on a given window

**Parameters**

-   `windowId` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Integer Id of window to focus

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Window](https://developer.mozilla.org/docs/Web/API/Window)>** Promise resolved with a Window object or rejected with an error.

#### drawAttention

Draw attention to a given window

**Parameters**

-   `windowId` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Integer Id of window to focus

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Window](https://developer.mozilla.org/docs/Web/API/Window)>** Promise resolved with a Window object or rejected with an error.

### notifications

Send and manage browser notifications

### runtime

Manage runtime tasks like messaging extensions

#### sendMessage

-   **See: <https://developer.chrome.com/extensions/runtime#method-sendMessage>**

Sends a message to an extension identified by its id

**Parameters**

-   `extensionId` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** optional extension id
-   `msg` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Any JSON-ifiable object
-   `options` **\[type]** options (optional, default `{}`)

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>** Promise resolved with response from tab or rejected with an error

### cookie

Manage cookies in the browser

#### get

-   **See: [How Chrome handles](https://developer.chrome.com/extensions/cookies#method-get) cookies with the same name**

Get a cookie by name for a given url.

**Parameters**

-   `url` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** URL of site to get cookie from
-   `name` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Name of cookie to get
-   `storeId` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** The ID of the cookie store in which to look for the cookie. By default, the current execution context's cookie store will be used.

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
-   `storeId` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** The ID of the cookie store in which to look for the cookie. By default, the current execution context's cookie store will be used.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>** Promise resolved with details of cookie that has been removed or rejected with error

#### getAllCookieStores

Lists all existing cookie stores.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;CookieStore>>** Promise resolved with an array of CookieStore objects or rejected with an error.

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

## Something broken?

Go bother:

> Zach Caceres ([Twitter](https://www.twitter.com/zachcaceres) \| [GitHub](https://www.github.com/zcaceres) \| [Website](http://zachcaceres.com) )
