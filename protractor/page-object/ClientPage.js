'use strict';  
  
module.exports = {

    elements: {
      addIdentification: element(by.id('identification')),
      addName: element(by.id('name')),
      addBirthDate: element(by.id('birthdate')),
      addPhone: element(by.id('phone')),
      addAddress: element(by.id('address')),
      buttonclient: element(by.id('nav-client')),
      buttonclientcreate: element(by.id('nav-client-create')),
      buttonclientlist: element(by.id('nav-client-list'))
    },  
  
    go: function(route) {  
        browser.get(route);
        browser.waitForAngular();  
    },  
      
    addIdentification: function (value) {
      var todo = this.elements;
      todo.addIdentification.sendKeys(value);  
  },

    addName: function (value) {
      var todo = this.elements;
      todo.addName.sendKeys(value);
  },

    addBirthDate: function (value) {
      var todo = this.elements;
      todo.addBirthDate.sendKeys(value);
  },

    addPhone: function (value) {
    var todo = this.elements;
    todo.addPhone.sendKeys(value);
  },

    addAddress: function (value) {
    var todo = this.elements;
    todo.addAddress.sendKeys(value);
  },
  addAddress: function (value) {
    var todo = this.elements;
    todo.addAddress.sendKeys(value);
  },

  goClient: function () {
    var todo = this.elements;
    todo.buttonclient.click();
  },

  goClientCreate: function () {
    var todo = this.elements;
    todo.buttonclientcreate.click();
  },

  goClientList: function () {
    var todo = this.elements;
    todo.buttonclientlist.click();
  },
};
