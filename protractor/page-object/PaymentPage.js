'use strict';

module.exports = {

  elements: {
    buttonpayment: element(by.id('nav-payment')),
    buttonpaymentcreate: element(by.id('nav-payment-create')),
    clicklendings: element(by.tagName("select#lendingid")),
    selectlending: element(by.css("#lendingid [value='1']")),
    addPaymentValue: element(by.id('paymentvalue')),
    createPaymentButton:element(by.id('createPaymentButton')),
  },

  go: function (route) {
    browser.get(route);
    browser.waitForAngular();
  },

  addPaymentValue: function (value) {
    this.elements.addPaymentValue.sendKeys(value);
  },

  goPayment: function () {
    this.elements.buttonpayment.click();
  },

  goPaymentCreate: function () {
    this.elements.buttonpaymentcreate.click();
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
