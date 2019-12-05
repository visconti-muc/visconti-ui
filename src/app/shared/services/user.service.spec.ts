import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

import { GlobalsService, supportedLanguages } from './globals.service';

describe('UserService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: UserService = TestBed.get(UserService);
        expect(service).toBeTruthy();
    });

/* ------------------------------------------- Testing supporting methods ------------------------------------------- */
    /* The next four tests look at getNavigatorOtherLanguages function applied on browsers that use and do not use languages
     property with both supported and unsupported language as main browser language */
    it('This test runs getNavigatorOtherLanguages on browser that supports languages property and has a ' +
        'supported language as main language', () => {
        const service: UserService = TestBed.get(UserService);
        Object.defineProperty(navigator, 'languages', {
            get: () => ['en-US', 'en', 'fr-FR', 'fr', 'de'],
        });
        Object.defineProperty(navigator, 'language', {
            get: () => 'en-US',
        });
        expect(service.getNavigatorOtherLanguages()).toEqual([ 'de', 'fr' ]);
    });
    it('This test runs getNavigatorOtherLanguages on browser that supports languages property and has an ' +
        'unsupported language as main language', () => {
        const service: UserService = TestBed.get(UserService);
        Object.defineProperty(navigator, 'languages', {
            get: () => ['en-US', 'en', 'fr-FR', 'fr', 'de', 'gr-GR'],
        });
        Object.defineProperty(navigator, 'language', {
            get: () => 'gr-GR',
        });
        expect(service.getNavigatorOtherLanguages()).toEqual([ 'de', 'en', 'fr', 'gr' ]);
    });
    it('This test runs getNavigatorOtherLanguages on browser that does not support languages property and ' +
        'has an unsupported language as main language', () => {
        const service: UserService = TestBed.get(UserService);
        Object.defineProperty(navigator, 'languages', {
            get: () => undefined,
        });
        Object.defineProperty(navigator, 'language', {
            get: () => 'gr-GR',
        });
        expect(service.getNavigatorOtherLanguages()).toEqual([ 'gr' ]);
    });
    it('This test runs getNavigatorOtherLanguages on browser that does not support languages property and ' +
        'has an supported language as main language', () => {
        const service: UserService = TestBed.get(UserService);
        Object.defineProperty(navigator, 'languages', {
            get: () => undefined,
        });
        Object.defineProperty(navigator, 'language', {
            get: () => 'en-US',
        });
        expect(service.getAllNavigatorLanguages()).toEqual([ ]);
    });

    /* The next two tests look at getAllNavigatorLanguages function applied on both userLanguage and language feature */
    it('This test runs getAllNavigatorLanguages on browser that supports languages property', () => {
        const service: UserService = TestBed.get(UserService);
        Object.defineProperty(navigator, 'languages', {
            get: () => ['en-US', 'en', 'fr-FR', 'fr', 'de'],
        });
        expect(service.getAllNavigatorLanguages()).toEqual([ 'de', 'en', 'fr' ]);
    });
    it('This test runs getAllNavigatorLanguages on browser that does not support languages property', () => {
        const service: UserService = TestBed.get(UserService);
        Object.defineProperty(navigator, 'languages', {
            get: () => undefined,
        });
        expect(service.getAllNavigatorLanguages()).toEqual([ ]);
    });

    /* The next two tests look at getApplicationLanguage function applied on both supported an unsupported languages */
    it('This test runs getApplicationLanguage on supported language german', () => {
        const service: UserService = TestBed.get(UserService);
        const keys = Object.entries(supportedLanguages).filter(entry => entry[1] === 'de')[0][1] as unknown as supportedLanguages;
        expect(service.getApplicationLanguage('de')).toEqual(keys);
    });
    it('This test runs getApplicationLanguage on not supported language greek', () => {
        const service: UserService = TestBed.get(UserService);
        expect(service.getApplicationLanguage('gr')).toEqual(supportedLanguages.en);
    });

    /* The next two tests look at getMainNavigatorLanguage function applied on both userLanguage and language feature */
    it('This test runs getMainNavigatorLanguage on a browser property language set as en-US', () => {
        const service: UserService = TestBed.get(UserService);
        Object.defineProperty(navigator, 'language', {
            get: () => 'en-US',
        });
        expect(service.getMainNavigatorLanguage()).toEqual('en');
    });
    it('This test runs getMainNavigatorLanguage on a browser property language set as en-US', () => {
        const service: UserService = TestBed.get(UserService);
        Object.defineProperty(navigator, 'language', {
            get: () => undefined,
        });
        Object.defineProperty(navigator, 'userLanguage', {
            get: () => 'en-US',
        });
        expect(service.getMainNavigatorLanguage()).toEqual('en');
    });

});
