'use strict';

module.exports = {

  elements: {
    updatelendingbutton: element(by.id('btnUpdate-1'))
  },

  go: function (route) {
    browser.get(route);
    browser.waitForAngular();
  },

  goToUpdateLending: function () {
    this.elements.updatelendingbutton.click();
  },
};
