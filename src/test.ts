// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule,  platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

/**
 * An instance of the dependency management library.
 */
declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);

/**
 * context with the require.context() function that allows the . directory to be search, including subdirectories, to
 * load all modules finishing with pattern spec.ts, that finds all test.
 */
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
