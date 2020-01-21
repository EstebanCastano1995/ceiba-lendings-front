var basePage = require('./page-object/HomePage.js');

describe('Navegar a ventana listar prestamo', function () {
  it('navegar a listar prestamo', function () {
    basePage.go('http://localhost:4200/home');
    basePage.browserSleep(1000);
    basePage.goLending();
    basePage.browserSleep(1000);
    basePage.goLendingList();
    basePage.browserSleep(1000);
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/lending/list');
  })
});


