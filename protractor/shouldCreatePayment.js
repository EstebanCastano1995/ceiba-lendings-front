var basePage = require('./page-object/PaymentPage.js');

describe('Crear pago', function () {
  it('creacion nuevo pago', function () {
    basePage.go('http://localhost:4200/home/payment/create');
    browser.sleep(2000);
    expect(basePage.elements.createPaymentButton.getAttribute('disabled')).toEqual('true');
    basePage.clickLendings();
    browser.sleep(2000);
    basePage.selectLending();
    browser.sleep(3000);
    basePage.addPaymentValue(50000);
    expect(basePage.elements.createPaymentButton.getAttribute('disabled')).toEqual(null);
    basePage.createPayment();
    browser.sleep(5000);
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/lending/list');
  });
});
