'use strict';

module.exports = {

  elements: {
    buttonpayment: element(by.id('nav-payment')),
    buttonpaymentcreate: element(by.id('nav-payment-create'))
  },

  go: function (route) {
    browser.get(route);
    browser.waitForAngular();
  },

  goPaymentCreate: function () {
    var todo = this.elements;
    todo.buttonpaymentcreate.click();
  },

  goPayment: function () {
    var todo = this.elements;
    todo.buttonpayment.click();
  },
};
