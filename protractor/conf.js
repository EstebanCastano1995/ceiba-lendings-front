exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['shouldHaveTitle.js', 'shouldCreateClient.js', 'shouldNavigateCreateClient.js',
    'shouldNavigateListClient.js', 'shouldNavigateCreatePayment.js', 'shouldNavigateCreateLending.js',
  'shouldNavigateListLendings.js']
};
