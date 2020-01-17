var basePage = require('./page-object/ClientPage.js');

describe('Crear cliente', function () {
  it('creacion nuevo cliente', function () {
    basePage.go('http://localhost:4200/home/client/create');
    basePage.addIdentification('1102');
    basePage.addName("UsuarioProtractor");
    basePage.addBirthDate("1995-10-10");
    basePage.addPhone(7456321);
    basePage.addAddress("Dirección usuario protractor");
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/client/create');
  });
});
