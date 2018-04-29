'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* global chrome browser */


var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * CHROME ONLY. Sets wallpaper to an image (url) or Array buffer (data).
 * @see [WallpaperLayout enum from Chrome](https://developer.chrome.com/extensions/wallpaper#type-WallpaperLayout)
 * @memberof wallpaper
 * @param {String} filename          File name of saved wallpaper
 * @param {WallpaperLayout} layout   A WallpaperLayout Enum value
 * @param {?Object} params           Optional thumbnail, binary image source and url. See Chrome API docs for options(https://developer.chrome.com/extensions/wallpaper)
 */
function set(filename, layout, params) {
  return (0, _utils2.default)(chrome.wallpaper.setWallpaper, browser.wallpaper.setWallpaper, _extends({ filename: filename, layout: layout }, params));
}

exports.default = {
  set: set
};