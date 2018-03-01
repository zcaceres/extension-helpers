/* global browser chrome: */

/**
 * Search the browser history for last visit time of each page matching the query
 * @param  {String} text       A free-text query to the history service. Leave empty to retrieve all pages.
 * @param  {Number} optionalStartTime  Double. Limit results to those visited after this date, represented in milliseconds since the epoch. If not specified, this defaults to 24 hours in the past.
 * @param  {Number} optionalEndTime    Double. Limit results to those visited before this date, represented in milliseconds since the epoch.
 * @param  {Number} optionalMaxResults Integer. The maximum number of results to retrieve. Defaults to 100.
 * @return {Promise<Array<HistoryItem>>}            Promise that resolves with array of HistoryItem objects or rejects with error
 */
function search(text, optionalStartTime, optionalEndTime, optionalMaxResults) {
  const queryObj = { text, startTime: optionalStartTime, endTime: optionalEndTime, maxResults: optionalMaxResults };
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.history.search(queryObj, function (results) {
        const err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(results);
      });
    });
  } else {
    return browser.history.search(queryObj);
  }
}

/**
 * Gets information about visits to a url
 * @param  {String} url                 Must be fully qualified url including protocol
 * @return {Promise<Array<VisitItem>>}  Promise that resolves with array of VisitItems or rejects with an error
 */
function getVisits(url) {
  const details = { url };
  if (chrome) {
    return new Promise((resolve, reject) => {
      chrome.history.getVisits(details, function (results) {
        const err = chrome.runtime.lastError;
        if (err) return reject(err);
        resolve(results);
      });
    });
  }
  return browser.history.getVisits(details);
}

function addUrl() {}

function deleteUrl() {}

function deleteRange() {}

function deleteAll() {}

export default {
  search,
  getVisits
};