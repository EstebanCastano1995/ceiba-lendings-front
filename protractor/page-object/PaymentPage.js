'use strict';

module.exports = {

  elements: {
  
    clicklendings: element(by.tagName("select#lendingid")),
    selectlending: element(by.css("#lendingid [value='1']")),
    addPaymentValue: element(by.id('paymentvalue')),
    createPaymentButton:element(by.id('createPaymentButton')),
  },

  go: function (route) {
    browser.get(route);
    browser.waitForAngular();
  },

  browserSleep: function (time) {
    browser.sleep(time);
  },

  addPaymentValue: function (value) {
    this.elements.addPaymentValue.sendKeys(value);
  },

  clickLendings: function () {
    this.elements.clicklendings.click();
  },

  selectLending: function () {
    this.elements.selectlending.click();
  },

  createPayment: function () {
    this.elements.createPaymentButton.click();
  },
};
