'use strict';

module.exports = {

  elements: {

    clientselect: element(by.id('clientid')),
    selectclient: element(by.css("#clientid [value='1102']")),
    lendingValue: element(by.id('lendingvalue')),
    lendingReturnDate: element(by.id('lendingreturndate')),
    createlendingbutton: element(by.id('createLendingButton')),
    updatelendingbutton: element(by.id('btnUpdate-1')),
    createclientalert: element(by.id('alert'))
  },

  go: function (route) {
    browser.get(route);
    browser.waitForAngular();
  },

  browserSleep: function (time) {
    browser.sleep(time);
  },

  clickclients: function () {
    this.elements.clientselect.click();
  },

  selectclient: function () {
    this.elements.selectclient.click();
  },

  addLendingValue: function (value) {
    this.elements.lendingValue.sendKeys(value);
  },

  addLendingReturnDate: function (value) {
    this.elements.lendingReturnDate.sendKeys(value);
  },

  saveLending: function () {
    this.elements.createlendingbutton.click();
  },

  goToUpdateLending: function () {
    this.elements.updatelendingbutton.click();
  },
};
