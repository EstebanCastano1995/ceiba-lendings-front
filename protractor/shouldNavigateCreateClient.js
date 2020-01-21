var basePage = require('./page-object/HomePage.js');

describe('Navegar a ventana crear clientes', function () {
  it('navegar a registro cliente', function () {
    basePage.go('http://localhost:4200/home');
    basePage.browserSleep(1000);
    basePage.goClient();
    basePage.browserSleep(1000);
    basePage.goClientCreate();
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/client/create');
  })
});


