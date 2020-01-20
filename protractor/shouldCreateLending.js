var basePage = require('./page-object/LendingPage.js');

describe('Crear préstamo', function () {
  it('creacion nuevo préstamo', function () {
    basePage.go('http://localhost:4200/home/lending/create');
    browser.sleep(2000);
    expect(basePage.elements.createlendingbutton.getAttribute('disabled')).toEqual('true');
    basePage.clickclients();
    browser.sleep(2000);
    basePage.selectclient();
    browser.sleep(3000);
    basePage.addLendingValue(350000);
    basePage.addLendingReturnDate("15-05-2020");
    expect(basePage.elements.createlendingbutton.getAttribute('disabled')).toEqual(null);
    basePage.saveLending();
    browser.sleep(5000);
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/lending/list');
  });
});
