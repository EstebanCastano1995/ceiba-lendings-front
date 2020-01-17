var basePage = require('./page-object/HomePage.js');

describe('Deberia tener titulo', function () {
  it('Deberia de tener titulo CPrestaFácil', function () {
    basePage.go('http://localhost:4200/home');
    expect(browser.getTitle()).toEqual('CPrestaFácil');
  });
});
