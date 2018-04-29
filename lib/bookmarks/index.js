'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Retrieves BookmarkTreeNode(s) by id.
 * @memberof bookmarks
 * @param  {String | Array<String>} idOrIdList A single string-valued id, or an array of string-valued ids
 * @return {Promise<Array<BookmarkTreeNode>>} Promise resolved with an array of [BookMarkTreeNode](https://developer.chrome.com/extensions/bookmarks#type-BookmarkTreeNode) or rejected with an error.
 */
function getById(idOrIdList) {
  return (0, _utils2.default)(chrome.bookmarks.get, browser.bookmarks.get, idOrIdList);
}

/**
 * Retrieves the children of the specified BookmarkTreeNode id.
 * @memberof bookmarks
 * @see [BookmarkTreeNode]([BookMarkTreeNode](https://developer.chrome.com/extensions/bookmarks#type-BookmarkTreeNode))
 * @param  {String} id                          id of parent node
 * @return {Promise<Array<BookMarkTreeNode>>}   Promise resolved with an array of BookmarkTreeNode or rejected with an error.
 */
/* global chrome browser */
function getChildrenById(id) {
  return (0, _utils2.default)(chrome.bookmarks.getChildren, browser.bookmarks.getChildren, id);
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

exports.default = {
  getById: getById,
  getChildrenById: getChildrenById
};