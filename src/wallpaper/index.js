/* global chrome browser */
import PromiseFactory from '../utils';

/**
 * CHROME ONLY. Sets wallpaper to an image (url) or Array buffer (data).
 * @see [WallpaperLayout enum from Chrome](https://developer.chrome.com/extensions/wallpaper#type-WallpaperLayout)
 * @memberof wallpaper
 * @param {String} filename          File name of saved wallpaper
 * @param {WallpaperLayout} layout   A WallpaperLayout Enum value
 * @param {?Object} params           Optional thumbnail, binary image source and url. See Chrome API docs for options(https://developer.chrome.com/extensions/wallpaper)
 */
function set(filename, layout, params) {
  return PromiseFactory(chrome.wallpaper.setWallpaper, browser.wallpaper.setWallpaper, { filename, layout, ...params });
}

export default {
  set
};
