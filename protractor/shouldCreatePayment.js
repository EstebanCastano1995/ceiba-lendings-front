var basePage = require('./page-object/PaymentPage.js');
var homePage = require('./page-object/HomePage.js');
var lendingListPage = require('./page-object/LendingListPage.js');

describe('Crear pago', function () {
  it('creacion nuevo pago', function () {
    homePage.goPayment();
    homePage.goPaymentCreate();
    basePage.browserSleep(2000);
    expect(basePage.elements.createPaymentButton.getAttribute('disabled')).toEqual('true');
    basePage.clickLendings();
    basePage.browserSleep(2000);
    basePage.selectLending();
    basePage.browserSleep(3000);
    basePage.addPaymentValue(50000);
    expect(basePage.elements.createPaymentButton.getAttribute('disabled')).toEqual(null);
    basePage.createPayment();
    basePage.browserSleep(5000);
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/lending/list');
    expect(lendingListPage.elements.updatelendingbutton.isPresent()).toBe(true);
  });
});
