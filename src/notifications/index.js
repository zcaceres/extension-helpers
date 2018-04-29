/* global browser chrome */
import PromiseFactory from '../utils';

/**
 * Create and display a new notification
 * @see [NotificationsOptions](https://developer.chrome.com/extensions/notifications#type-NotificationOptions)
 * @param  {String?} notificationId optional id to assign notification. If empty will be automatically generated
 * @param  {Object} options         NotificationsOptions object
 * @return {Prromise<String>}       id of created notification
 */
function create(notificationId, options) {
  return PromiseFactory(chrome.notifications.create, browser.notifications.create, notificationId, options);
}

/**
 * Update existing notification
 * @see [NotificationsOptions](https://developer.chrome.com/extensions/notifications#type-NotificationOptions)
 * @param  {String} notificationId id of notification to update
 * @param  {Object} options        NotificationOptions object
 * @return {Promise<Boolean>}      Boolean wasUpdated indicating whether notification was updated
 */
function update(notificationId, options) {
  return PromiseFactory(chrome.notifications.update, browser.notifications.update, notificationId, options);
}

/**
 * Clear specified notification
 * @see [NotificationsOptions](https://developer.chrome.com/extensions/notifications#type-NotificationOptions)
 * @param  {String} notificationId id of notification to clear
 * @return {Promise<Boolean>}      Boolean wasCleared specifying whether the matching notification existed
 */
function clear(notificationId) {
  return PromiseFactory(chrome.notifications.clear, browser.notifications.clear);
}

/**
 * Get all notifications
 * @return {Promise<Object>>} Promise resolved with an object containing notification ids in the system or rejected with an error.
 */
function getAll() {
  return PromiseFactory(chrome.notifications.getAll, browser.notifications.getAll);
}

/**
 * Retrieves whether the user has enabled notifications from the app/extension
 * @return {} [description]
 */
// Not yet supported in FF
// function getPermissionLevel() {
//   return PromiseFactory(chrome.notifications.getAll, browser.notifications.getAll);
// }

export default {
  create,
  update,
  clear,
  getAll
  // getPermissionLevel
};
