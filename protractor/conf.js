exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['shouldHaveTitle.js', 'shouldNavigateCreateClient.js',
    'shouldNavigateListClient.js', 'shouldNavigateCreateLending.js',
    'shouldNavigateListLendings.js', 'shouldNavigateCreatePayment.js', 'shouldDeleteClient.js', 'shouldCreateClient.js',
    'shouldCreateLending.js', 'shouldUpdateLending.js', 'shouldCreatePayment.js',
    'shouldFailCreateClient.js', 'shouldFailCreateLending.js', 'shouldFailDeleteClient.js']
};

/*
  webdriver-manager update
  webdriver-manager start
*/

