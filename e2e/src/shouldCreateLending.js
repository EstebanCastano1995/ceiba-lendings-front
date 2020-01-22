var basePage = require('./page-object/LendingPage.js');
var homePage = require('./page-object/HomePage.js');
var lendingListPage = require('./page-object/LendingListPage.js');

describe('Crear préstamo', function () {
  it('creacion nuevo préstamo', function () {
    homePage.goLending();
    homePage.goLendingCreate();
    basePage.browserSleep(2000);
    expect(basePage.elements.createlendingbutton.getAttribute('disabled')).toEqual('true');
    basePage.clickclients();
    basePage.browserSleep(2000);
    basePage.selectclient();
    basePage.browserSleep(3000);
    basePage.addLendingValue(350000);
    basePage.addLendingReturnDate("15-05-2020");
    expect(basePage.elements.createlendingbutton.getAttribute('disabled')).toEqual(null);
    basePage.saveLending();
    basePage.browserSleep(5000);
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/lending/list');
    expect(lendingListPage.elements.updatelendingbutton.isPresent()).toBe(true);
  });
});
