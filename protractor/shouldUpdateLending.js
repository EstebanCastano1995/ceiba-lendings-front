var basePage = require('./page-object/LendingPage.js');

describe('Navegar a ventana listar prestamo', function () {
  it('navegar a listar prestamo', function () {
    basePage.go('http://localhost:4200/home');
    basePage.goLending();
    basePage.goLendingList();
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/lending/list');
    basePage.goToUpdateLending();
    basePage.addLendingValue(350000);
    basePage.addLendingReturnDate("15-05-2020");
    basePage.saveLending();
    browser.sleep(5000);
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/lending/list');
  })
});
