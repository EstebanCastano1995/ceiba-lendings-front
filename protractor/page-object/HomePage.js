'use strict';

module.exports = {

  elements: {
    buttonclient: element(by.id('nav-client')),
    buttonclientcreate: element(by.id('nav-client-create')),
    buttonclientlist: element(by.id('nav-client-list')),

    buttonlending: element(by.id('nav-lending')),
    buttonlendingcreate: element(by.id('nav-lending-create')),
    buttonlendinglist: element(by.id('nav-lending-list')),

    buttonpayment: element(by.id('nav-payment')),
    buttonpaymentcreate: element(by.id('nav-payment-create')),
  },

  go: function (route) {
    browser.get(route);
    browser.waitForAngular();
  },

  browserSleep: function (time) {
    browser.sleep(time);
  },

  goClient: function () {
    this.elements.buttonclient.click();
  },

  goClientCreate: function () {
    this.elements.buttonclientcreate.click();
  },

  goClientList: function () {
    this.elements.buttonclientlist.click();
  },

  goLendingCreate: function () {
    this.elements.buttonlendingcreate.click();
  },

  goLendingList: function () {
    this.elements.buttonlendinglist.click();
  },

  goLending: function () {
    this.elements.buttonlending.click();
  },

  goPayment: function () {
    this.elements.buttonpayment.click();
  },

  goPaymentCreate: function () {
    this.elements.buttonpaymentcreate.click();
  },
};
