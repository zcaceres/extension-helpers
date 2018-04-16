/* global chrome */

function PromiseFactory(chromeFunc, browserFunc, ...args) {
  if (chrome) {
    return new Promise((resolve, reject) => {
      chromeFunc(...args, function (callbackValue) {
        const err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(callbackValue);
      });
    });
  } else {
    return browserFunc(...args);
  }
}

export default PromiseFactory;