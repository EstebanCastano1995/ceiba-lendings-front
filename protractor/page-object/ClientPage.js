'use strict';  
  
module.exports = {

  elements: {
      addIdentification: element(by.id('identification')),
      addName: element(by.id('name')),
      addBirthDate: element(by.id('birthdate')),
      addPhone: element(by.id('phone')),
      addAddress: element(by.id('address')),
      buttonSaveClient: element(by.id('createClientButton')),
      createclientalert: element(by.id('alert')),
    },

    browserSleep: function (time) {
       browser.sleep(time);
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
};
