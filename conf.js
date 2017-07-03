var JasmineHtmlReporter = require('protractor-jasmine2-html-reporter');
var reportConfig = {
  savePath: './reports',
  screenshotsFolder: 'failed screenshots', //By default the screenshots are stored in a folder inside the default path
  takeScreenshots: true,
  takeScreenshotsOnlyOnFailures: true,
  fixedScreenshotName: true, //Choose between random names and fixed ones(show test case name)
  fileName: 'Report', //report name
  fileNamePrefix: '_', // Filename for html report.
  fileNameSuffix: '_',
  fileNameSeparator: '_', //set the separator between filename elements, for example, prefix, sufix etc
  fileNameDateSuffix: true, //Datetime information to be added in the name of the report.
  showPassed: true, //This option, if false, will show only failures.Default is true
  //cleanDestination: false, //This option, if false, will not delete the reports or screenshots before each test run.
  // fileName: 'MyReportName', //This will be the name used for the html file generated thanks to this tool.
};

//cosole report
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;


exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  suites: {
    //home: './tests/home.spec.js',
    //notif: './tests/notif_reg.spec.js',
    //register_modal: './tests/register_modal.spec.js',
    products: './tests/products.spec.js',
    //shop: './tests/shop.spec.js',
    //sets:'./tests/sets.spec.js',
    //exclusives: './tests/exclusives.spec.js',
    //wish: './tests/wish_list.spec.js',
    login: './tests/login.spec.js',
  },

  //specs: ['./tests/login.spec.js'],

  framework: 'jasmine2',

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 2500000,
    showColors: true, // Use colors in the command line report.
  },

  onPrepare: function() {
    //maximize window
    browser.driver.manage().window().maximize();
    //HTML report
    jasmine.getEnv().addReporter(
      new JasmineHtmlReporter(reportConfig) //create instance of class
    );
    //console report
    jasmine.getEnv().addReporter(
      new SpecReporter({
        spec: {
          displayStacktrace: true
        }
      }));

  },

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome', //'firefox' or 'safari'
    'chromeOptions': {
      'args': ['no-sandbox']
    }
  },

};
