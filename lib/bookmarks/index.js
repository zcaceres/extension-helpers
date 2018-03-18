/* global chrome browser */
import { PromiseFactory } from '../utils';

/**
 * Retrieves BookmarkTreeNode(s) by id.
 * @memberof bookmarks
 * @param  {String | Array<String>} idOrIdList A single string-valued id, or an array of string-valued ids
 * @return {Promise<Array<BookmarkTreeNode>>} Promise resolved with an array of [BookMarkTreeNode](https://developer.chrome.com/extensions/bookmarks#type-BookmarkTreeNode) or rejected with an error.
 */
function getById(idOrIdList) {
  return PromiseFactory(chrome.bookmarks.get, browser.bookmarks.get, idOrIdList);
}

/**
 * Retrieves the children of the specified BookmarkTreeNode id.
 * @memberof bookmarks
 * @see [BookmarkTreeNode]([BookMarkTreeNode](https://developer.chrome.com/extensions/bookmarks#type-BookmarkTreeNode))
 * @param  {String} id                          id of parent node
 * @return {Promise<Array<BookMarkTreeNode>>}   Promise resolved with an array of BookmarkTreeNode or rejected with an error.
 */
function getChildrenById(id) {
  return PromiseFactory(chrome.bookmarks.getChildren, browser.bookmarks.getChildren, id);
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

export default {
  getById,
  getChildrenById
};