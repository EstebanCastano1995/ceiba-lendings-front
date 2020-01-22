var basePage = require('./page-object/ClientPage.js');
var homePage = require('./page-object/HomePage.js');
var clientListPage = require('./page-object/ClientListPage.js');

describe('Crear cliente', function () {
  it('creacion nuevo cliente', function () {
    homePage.go('http://localhost:4200/home');
    homePage.goClient();
    homePage.goClientList();
    clientListPage.deleteClient();
    basePage.browserSleep(5000);
    expect(basePage.elements.createclientalert.getAttribute('textContent')).toBe('El cliente que intenta eliminar tiene prestamos registrados');
  });
});
