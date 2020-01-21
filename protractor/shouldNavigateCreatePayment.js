var basePage = require('./page-object/HomePage.js');

describe('Navegar a ventana registro pago', function () {
  it('navegar a registro pago', function () {
    basePage.go('http://localhost:4200/home');
    basePage.browserSleep(1000);
    basePage.goPayment();
    basePage.browserSleep(1000);
    basePage.goPaymentCreate();
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/payment/create');
  })
});
