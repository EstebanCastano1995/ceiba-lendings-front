'use strict';  
  
module.exports = {

  elements: {
      buttonclient: element(by.id('nav-client')),
      buttonclientcreate: element(by.id('nav-client-create')),
      buttonclientlist: element(by.id('nav-client-list')),

      addIdentification: element(by.id('identification')),
      addName: element(by.id('name')),
      addBirthDate: element(by.id('birthdate')),
      addPhone: element(by.id('phone')),
      addAddress: element(by.id('address')),

      buttonSaveClient: element(by.id('createClientButton')),
      buttonDeleteClient: element(by.id('btnEliminar-1102')),
    },  
  
    go: function(route) {  
        browser.get(route);
        browser.waitForAngular();  
    },  
      
    addIdentification: function (value) {
      this.elements.addIdentification.sendKeys(value);  
     },

     addName: function (value) {
      this.elements.addName.sendKeys(value);
     },

    addBirthDate: function (value) {
     this.elements.addBirthDate.sendKeys(value);
    },

    addPhone: function (value) {
     this.elements.addPhone.sendKeys(value);
    },

    addAddress: function (value) {
     this.elements.addAddress.sendKeys(value);
    },

    saveClient: function () {
     this.elements.buttonSaveClient.click();
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

  deleteClient: function () {
    this.elements.buttonDeleteClient.click();
  },
};
