exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  //specs: ['./tests/home.spec.js'],
  //specs: ['./tests/notif_reg.spec.js'],
  //specs: ['./tests/register_modal.spec.js'],
  //specs: ['./tests/products.spec.js'],
  //specs: ['./tests/shop.spec.js'],
  specs: ['./tests/sets.spec.js'],


  framework: 'jasmine2',

  // capabilities: {
  //   'browserName': 'firefox' // or 'safari'
  // },

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['no-sandbox']
    }
  },

};
