var basePage = require('./page-object/ClientPage.js');

describe('Navegar a ventana listar cliente', function () {
  it('navegar a listar cliente', function () {
    basePage.go('http://localhost:4200/home');
    basePage.goClient();
    basePage.goClientList();
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/client/list');
  })
});

