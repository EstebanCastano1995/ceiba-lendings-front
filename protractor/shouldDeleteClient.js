var basePage = require('./page-object/ClientPage.js');
var homePage = require('./page-object/HomePage.js');
var listPage = require('./page-object/ClientListPage.js');

describe('Navegar a ventana listar cliente', function () {
  it('navegar a eliminar cliente', function () {

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

    homePage.go('http://localhost:4200/home');
    homePage.goClient();
    homePage.goClientList();
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/client/list');
    listPage.deleteClient();
    basePage.browserSleep(5000);
    expect(listPage.elements.buttonDeleteClient.isPresent()).toBe(false);
  })
});
