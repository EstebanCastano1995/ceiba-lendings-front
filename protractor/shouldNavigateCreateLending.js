var basePage = require('./page-object/LendingPage.js');

describe('Navegar a ventana crear prestamo', function () {
  it('navegar a crear prestamo', function () {
    basePage.go('http://localhost:4200/home');
    basePage.goLending();
    basePage.goLendingCreate();

    //element(by.id('nav-lending')).click();
    //element(by.id('nav-lending-create')).click();
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/lending/create');
  })
});

