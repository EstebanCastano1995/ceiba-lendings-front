var basePage = require('./page-object/ClientPage.js');
var homePage = require('./page-object/HomePage.js');
var clientListPage = require('./page-object/ClientListPage.js');

describe('Crear cliente', function () {
  it('creacion nuevo cliente', function () {
    homePage.goClient();
    homePage.goClientCreate();
    expect(basePage.elements.buttonSaveClient.getAttribute('disabled')).toEqual('true');
    basePage.addIdentification('1102');
    basePage.addName("UsuarioProtractor");
    basePage.addBirthDate("09-29-1995");
    basePage.addPhone(7456321);
    basePage.addAddress("Dirección usuario protractor");
    expect(basePage.elements.buttonSaveClient.getAttribute('disabled')).toEqual(null);
    basePage.saveClient();
    basePage.browserSleep(5000);
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/client/list');
    expect(clientListPage.elements.buttonDeleteClient.isPresent()).toBe(true);
  });
});
