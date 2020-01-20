exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['shouldHaveTitle.js',  'shouldNavigateCreateClient.js',
  'shouldNavigateListClient.js', 'shouldNavigateCreatePayment.js', 'shouldNavigateCreateLending.js',
  'shouldNavigateListLendings.js','shouldCreateClient.js','shouldCreateLending.js','shouldCreatePayment.js']
};
  
//webdriver-manager update
//webdriver-manager start

