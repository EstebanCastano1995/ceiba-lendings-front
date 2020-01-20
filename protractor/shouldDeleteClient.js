var basePage = require('./page-object/ClientPage.js');

describe('Navegar a ventana listar cliente', function () {
  it('navegar a eliminar cliente', function () {

    basePage.go('http://localhost:4200/home/client/create');
    expect(basePage.elements.buttonSaveClient.getAttribute('disabled')).toEqual('true');
    basePage.addIdentification('1102');
    basePage.addName("UsuarioProtractor");
    basePage.addBirthDate("09-29-1995");
    basePage.addPhone(7456321);
    basePage.addAddress("Dirección usuario protractor");
    expect(basePage.elements.buttonSaveClient.getAttribute('disabled')).toEqual(null);
    basePage.saveClient();
    browser.sleep(5000);
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/client/list');

    basePage.go('http://localhost:4200/home');
    basePage.goClient();
    basePage.goClientList();
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/client/list');
    basePage.deleteClient();
    browser.sleep(5000);
    expect(basePage.elements.buttonDeleteClient.isPresent()).toBeFalsy();
  })
});
