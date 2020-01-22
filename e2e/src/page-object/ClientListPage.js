'use strict';

module.exports = {

  elements: {
    buttonDeleteClient: element(by.id('btnEliminar-1102')),
    listclientalert: element(by.id('alert')),
  },

  browserSleep: function (time) {
    browser.sleep(time);
  },

  go: function (route) {
    browser.get(route);
    browser.waitForAngular();
  },

  deleteClient: function () {
    this.elements.buttonDeleteClient.click();
  },
};
