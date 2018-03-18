/* global describe it */
const chai = require('chai');
const { expect } = chai;
const { message } = require('../src');

describe('message', () => {
  describe('tab', () => {
    it('should return a promise', () => {
      expect(message.tab(1)).to.be.a('string');
    })
  });
  describe('allTabs', () => {

  });
  describe('activeTabs', () => {

  });
  describe('manyTabs', () => {

  });
  describe('activeTab', () => {

  });
});
