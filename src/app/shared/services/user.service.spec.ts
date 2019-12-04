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

    it('This test runs getApplicationLanguage on not supported language greek', () => {
        const service: UserService = TestBed.get(UserService);
        Object.defineProperty(navigator, 'language', {
            get: () => undefined,
        });
        expect(service.getMainNavigatorLanguage()).toEqual('en');
    });

    /*
    Object.defineProperty(navigator, 'language', {
        get: () => undefined,
    });
    Object.defineProperty(navigator, 'userLanguage', {
        get: () => 'en-XX',
    });
     */

});
