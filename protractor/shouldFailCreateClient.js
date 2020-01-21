var basePage = require('./page-object/ClientPage.js');
var homePage = require('./page-object/HomePage.js');

describe('Crear cliente fallido', function () {
  it('creacion fallida nuevo cliente por cedula', function () {
    homePage.go('http://localhost:4200/home');
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
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/client/create');

    expect(basePage.elements.createclientalert.getAttribute('textContent')).toBe('El cliente que desea guardar ya se encuentra registrado');

  });
  
  it('creacion fallida nuevo cliente por edad', function () {
    homePage.go('http://localhost:4200/home');
    homePage.goClient();
    homePage.goClientCreate();
    expect(basePage.elements.buttonSaveClient.getAttribute('disabled')).toEqual('true');
    basePage.addIdentification('1103');
    basePage.addName("UsuarioProtractor");
    basePage.addBirthDate("09-29-2020");
    basePage.addPhone(7456321);
    basePage.addAddress("Dirección usuario protractor");
    expect(basePage.elements.buttonSaveClient.getAttribute('disabled')).toEqual(null);
    basePage.saveClient();
    basePage.browserSleep(5000);
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/client/create');
    expect(basePage.elements.createclientalert.getAttribute('textContent')).toBe('El cliente debe tener minimo 18 años');
  });
});


