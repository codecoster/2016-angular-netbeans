
module.exports = function (config) {
    config.set({
        basePath: '.',
        frameworks: ['jasmine'],
        files: [
            // paths loaded by Karma
            {pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: true, watched: true},
            {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true},
            {pattern: 'node_modules/es6-shim/es6-shim.js', included: true, watched: true},
            {pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', included: true, watched: true},
            {pattern: 'node_modules/rxjs/bundles/Rx.js', included: true, watched: true},
            {pattern: 'node_modules/angular2/bundles/angular2.dev.js', included: true, watched: true},
            {pattern: 'node_modules/angular2/bundles/testing.dev.js', included: true, watched: true},
            
            {pattern: 'karma-test-shim.js', included: true, watched: true},
            {pattern: 'test/matchers.js', included: true, watched: true},
            
            // paths loaded via module imports
            {pattern: 'app/*.js', included: false, watched: true},
            {pattern: 'test/*.js', included: false, watched: true},
            
            // paths to support debugging with source maps in dev tools
            {pattern: 'app/*.ts', included: false, watched: false},
            {pattern: 'app/*.js.map', included: false, watched: false},
            {pattern: 'test/*.ts', included: false, watched: false},
            {pattern: 'test/*.js.map', included: false, watched: false}
        ],
        // proxied base paths
        proxies: {
            // required for component assests fetched by Angular's compiler
            '/app/': '/base/app/'
        },
        port: 9876,
        logLevel: config.LOG_INFO,
        colors: true,
        autoWatch: true,
        browsers: ['Chrome'],
        // Karma plugins loaded
        plugins: [
            'karma-jasmine',
            'karma-coverage',
            'karma-chrome-launcher'
        ],
        // Coverage reporter generates the coverage
        reporters: ['progress', 'coverage'],
        // Source files that you want to generate coverage for.
        // Do not include tests or libraries (these files will be instrumented by Istanbul)
        preprocessors: {
            'app/**/!(*spec).js': ['coverage']
        },
        coverageReporter: {
            reporters: [
                {type: 'json', subdir: '.', file: 'coverage-final.json'}
            ]
        },
        singleRun: true
    });
};
