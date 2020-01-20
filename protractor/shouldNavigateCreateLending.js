var basePage = require('./page-object/LendingPage.js');

describe('Navegar a ventana crear prestamo', function () {
  it('navegar a crear prestamo', function () {
    basePage.go('http://localhost:4200/home');
    basePage.goLending();
    basePage.goLendingCreate();
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/lending/create');
  })
});

