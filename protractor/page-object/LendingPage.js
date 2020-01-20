'use strict';

module.exports = {

  elements: {
    buttonlending: element(by.id('nav-lending')),
    buttonlendingcreate: element(by.id('nav-lending-create')),
    buttonlendinglist: element(by.id('nav-lending-list')),
    clientselect: element(by.id('clientid')),
    selectclient: element(by.css("#clientid [value='1102']")),
    lendingValue: element(by.id('lendingvalue')),
    lendingReturnDate: element(by.id('lendingreturndate')),
    createlendingbutton: element(by.id('createLendingButton')),
  },

  go: function (route) {
    browser.get(route);
    browser.waitForAngular();
  },

  goLending: function () {
    this.elements.buttonlending.click();
  },

  clickclients: function () {
    this.elements.clientselect.click();
  },

  selectclient: function () {
    this.elements.selectclient.click();
  },

  goLendingCreate: function () {
    this.elements.buttonlendingcreate.click();
  },

  goLendingList: function () {
    this.elements.buttonlendinglist.click();
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

};
