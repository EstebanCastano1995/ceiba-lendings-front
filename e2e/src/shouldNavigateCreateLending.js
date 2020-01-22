var basePage = require('./page-object/HomePage.js');

describe('Navegar a ventana crear prestamo', function () {
  it('navegar a crear prestamo', function () {
    basePage.go('http://localhost:4200/home');
    basePage.browserSleep(1000);
    basePage.goLending();
    basePage.browserSleep(1000);
    basePage.goLendingCreate();
    basePage.browserSleep(1000);
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/lending/create');
  })
});

