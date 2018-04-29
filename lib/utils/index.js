"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global chrome */

function PromiseFactory(chromeFunc, browserFunc) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  if (chrome) {
    return new Promise(function (resolve, reject) {
      chromeFunc.apply(undefined, args.concat([function (callbackValue) {
        var err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(callbackValue);
      }]));
    });
  } else {
    return browserFunc.apply(undefined, args);
  }
}

exports.default = PromiseFactory;