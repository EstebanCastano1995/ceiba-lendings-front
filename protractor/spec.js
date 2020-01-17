describe('Prueba flujo inicial', function () {
  it('Deberia de haber un titulo en pestaña', function () {
    browser.get('http://localhost:4200/home');

    expect(browser.getTitle()).toEqual('CPrestaFácil');
  });
});

describe('Navegar a ventana listar cliente', function () {
  it('navegar a listar cliente', function () {
    browser.get('http://localhost:4200/home');
    element(by.id('nav-client')).click();
    element(by.id('nav-client-list')).click();
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/client/list');
  })
});

describe('Navegar a ventana crear clientes', function () {
  it('navegar a registro cliente', function () {
    browser.get('http://localhost:4200/home');
    element(by.id('nav-client')).click();
    element(by.id('nav-client-create')).click();
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/client/create');
  })
});


describe('Navegar a ventana listar prestamo', function () {
  it('navegar a listar prestamo', function () {
    browser.get('http://localhost:4200/home');
    element(by.id('nav-lending')).click();
    element(by.id('nav-lending-list')).click();
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/lending/list');
  })
});

describe('Navegar a ventana crear prestamo', function () {
  it('navegar a crear prestamo', function () {
    browser.get('http://localhost:4200/home');
    element(by.id('nav-lending')).click();
    element(by.id('nav-lending-create')).click();
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/lending/create');
  })
});

describe('Navegar a ventana registro pago', function () {
  it('navegar a registro pago', function () {
    browser.get('http://localhost:4200/home');
    element(by.id('nav-payment')).click();
    element(by.id('nav-payment-create')).click();
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/payment/create');
  })
});


describe('Crear cliente', function () {
  it('creacion nuevo cliente', function () {
    browser.get('http://localhost:4200/home/client/create');
    element(by.id('identification')).sendKeys("1102");
    element(by.id('name')).sendKeys("UsuarioProtractor");
    element(by.id('birthdate')).sendKeys("1995-10-10");
    element(by.id('phone')).sendKeys(7456321);
    element(by.id('address')).sendKeys("Dirección usuario protractor");
    element(by.id('createClientButton')).click();

    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/client/create');
  });
});


/*
describe('Crear prestamo', function () {

   it('creacion nuevo prestamo', function () {
     browser.get('http://localhost:4200/home/lending/create');

     browser.driver.wait(function () {
       
         var x = document.getElementById("clientid");
         var option = document.createElement("option");
         option.text = "1094951840";
         x.add(option);

         element(by.id('lendingvalue')).sendKeys(250000);
         element(by.id('lendingreturndate')).sendKeys("2020-01-17");
         element(by.id('createLendingButton')).click();

         expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/lending/list');

     }, 4000);
  });
});


describe('Crear pago', function () {
  it('creacion nuevo pago', function () {
    browser.get('http://localhost:4200/home/client/create');
    element(by.id('identification')).sendKeys("1102");
    element(by.id('name')).sendKeys("UsuarioProtractor");
    element(by.id('birthdate')).sendKeys("2018-10-10");
    element(by.id('phone')).sendKeys(7456321);
    element(by.id('address')).sendKeys("Dirección usuario protractor");
    element(by.id('createClientButton')).click();

    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/home/client/create');
  });
});
*/
