'use strict';

module.exports = {

  elements: {
    buttonlending: element(by.id('nav-lending')),
    buttonlendingcreate: element(by.id('nav-lending-create')),
    buttonlendinglist: element(by.id('nav-lending-list'))
  },

  go: function (route) {
    browser.get(route);
    browser.waitForAngular();
  },

  goLending: function () {
    var todo = this.elements;
    todo.buttonlending.click();
  },

  goLendingCreate: function () {
    var todo = this.elements;
    todo.buttonlendingcreate.click();
  },

  goLendingList: function () {
    var todo = this.elements;
    todo.buttonlendinglist.click();
  },
};
