var basePage = require('./page-object/ClientPage.js');

describe('Navegar a ventana crear clientes', function () {
  it('navegar a registro cliente', function () {
    basePage.go('http://localhost:4200/home');
    basePage.goClient();
    basePage.goClientCreate();
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/client/create');
  })
});


