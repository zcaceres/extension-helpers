/* global chrome browser */

/**
 * Retrieves BookmarkTreeNode(s) by id.
 * @memberof bookmarks
 * @param  {String | Array<String>} idOrIdList A single string-valued id, or an array of string-valued ids
 * @return {Promise<Array<BookmarkTreeNode>>} Promise resolved with an array of [BookMarkTreeNode](https://developer.chrome.com/extensions/bookmarks#type-BookmarkTreeNode) or rejected with an error.
 */
function getById(idOrIdList) {
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.bookmarks.get(idOrIdList, function (bookmarkTreeNodes) {
        const err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(bookmarkTreeNodes);
      });
    });
  } else {
    return browser.bookmark.get(idOrIdList);
  }
}

/**
 * Retrieves the children of the specified BookmarkTreeNode id.
 * @memberof bookmarks
 * @see [BookmarkTreeNode]([BookMarkTreeNode](https://developer.chrome.com/extensions/bookmarks#type-BookmarkTreeNode))
 * @param  {String} id                          id of parent node
 * @return {Promise<Array<BookMarkTreeNode>>}   Promise resolved with an array of BookmarkTreeNode or rejected with an error.
 */
function getChildrenById(id) {
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.bookmarks.getChildren(function (bookmarkTreeNodes) {
        const err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(bookmarkTreeNodes);
      });
    });
  } else {
    return browser.bookmarks.getChildrenById(id);
  }
}

// function getRecent() {
//
// }
//
// function getSubtree() {
//
// }
//
// function getTree() {
//
// }
//
// function move() {
//
// }
//
// function remove() {
//
// }
//
// function removeTree() {
//
// }
//
// function search() {
//
// }
//
// function update() {
//
// }

module.exports = {
  getById,
  getChildrenById
};