module.exports = function(config) {
  config.set({

    basePath: './',

    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/components/**/*.js',
      'app/view*/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],
    //browsers: ['PhantomJS', 'Chrome', 'Firefox'],

    // you can define custom flags 
    customLaunchers: {
      'PhantomJS_custom': {
        base: 'PhantomJS',
        options: {
          windowName: 'my-window',
          settings: {
            webSecurityEnabled: false
          },
        },
        flags: ['--load-images=true'],
        debug: true
      }
    },

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom) 
      exitOnResourceError: true
    },

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine',
	  'karma-coverage',
      'karma-junit-reporter'
    ],
    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'app/components/**/*.js': ['coverage'],
	  'app/view*/**/*.js': ['coverage']
    },
    reporters: ['progress', 'junit', 'coverage'],
    junitReporter: {
      outputFile: 'build/unit/unit.xml',
      suite: 'unit'
    },
    coverageReporter: {
      // specify a common output directory
      dir: 'build/reports/coverage',
      reporters: [
        // reporters not supporting the `file` property
        {
          type: 'html',
          subdir: 'report-html'
        }, {
          type: 'lcov',
          subdir: 'report-lcov'
        },
        // reporters supporting the `file` property, use `subdir` to directly
        // output them in the `dir` directory
        {
          type: 'cobertura',
          subdir: '.',
          file: 'cobertura.txt'
        }, {
          type: 'lcovonly',
          subdir: '.',
          file: 'report-lcovonly.txt'
        }, {
          type: 'teamcity',
          subdir: '.',
          file: 'teamcity.txt'
        }, {
          type: 'text',
          subdir: '.',
          file: 'text.txt'
        }, {
          type: 'text-summary',
          subdir: '.',
          file: 'text-summary.txt'
        },
      ]
    }

  });
};