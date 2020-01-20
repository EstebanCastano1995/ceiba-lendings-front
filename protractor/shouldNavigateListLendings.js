var basePage = require('./page-object/LendingPage.js');

describe('Navegar a ventana listar prestamo', function () {
  it('navegar a listar prestamo', function () {
    basePage.go('http://localhost:4200/home');
    basePage.goLending();
    basePage.goLendingList();
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/lending/list');
  })
});


