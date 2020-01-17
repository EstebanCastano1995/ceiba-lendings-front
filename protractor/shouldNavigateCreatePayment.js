var basePage = require('./page-object/PaymentPage.js');

describe('Navegar a ventana registro pago', function () {
  it('navegar a registro pago', function () {
    basePage.go('http://localhost:4200/home');
    basePage.goPayment();
    basePage.goPaymentCreate();
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/payment/create');
  })
});
