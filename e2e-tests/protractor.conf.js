var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/app/',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },


  //  for html screenshot reporter
  // link: https://www.npmjs.com/package/protractor-html-screenshot-reporter
  onPrepare: function() {
    // Add a screenshot reporter and store screenshots to `./screnshots`: 
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: './screenshots'
    }));
  }
};