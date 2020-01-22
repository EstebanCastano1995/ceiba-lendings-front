var basePage = require('./page-object/LendingPage.js');
var homePage = require('./page-object/HomePage.js');

describe('Crear préstamo', function () {
  it('creacion nuevo préstamo', function () {
    homePage.go('http://localhost:4200/home');
    homePage.goLending();
    homePage.goLendingCreate();
    basePage.browserSleep(2000);
    expect(basePage.elements.createlendingbutton.getAttribute('disabled')).toEqual('true');
    basePage.clickclients();
    basePage.browserSleep(2000);
    basePage.selectclient();
    basePage.browserSleep(3000);
    basePage.addLendingValue(600000);
    basePage.addLendingReturnDate("15-05-2020");
    expect(basePage.elements.createlendingbutton.getAttribute('disabled')).toEqual(null);
    basePage.saveLending();
    basePage.browserSleep(5000);
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/lending/create');
    expect(basePage.elements.createclientalert.getAttribute('textContent')).toBe('El prestamo debe estar entre 100000 COP y 500000 COP');
  });
});
