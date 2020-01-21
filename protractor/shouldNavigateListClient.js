var basePage = require('./page-object/HomePage.js');

describe('Navegar a ventana listar cliente', function () {
  it('navegar a listar cliente', function () {
    basePage.go('http://localhost:4200/home');
    basePage.browserSleep(1000);
    basePage.goClient();
    basePage.browserSleep(1000);
    basePage.goClientList();
    basePage.browserSleep(1000);
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/client/list');
  })
});

