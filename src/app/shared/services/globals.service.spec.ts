/* angular related imports */
import { TestBed } from '@angular/core/testing';

/* project related imports */
import { GlobalsService, supportedLanguages } from './globals.service';

describe('Testing service GlobalsService.', () => {

    beforeEach(() => TestBed.configureTestingModule({}));

    /* Testing the instantiation of GlobalsService */
    it('This test should create an instance of GlobalsService.', () => {
        const service: GlobalsService = TestBed.get(GlobalsService);
        expect(service).toBeTruthy();
    });

    /* Testing the anonymous bound method distinct */
    it('This test should filter out all repeated values out returning distinct values.', () => {
        const service: GlobalsService = TestBed.get(GlobalsService);
        const repeated = [0, 1, 2, 3, 3, 4, 4, 4, 2, 5, 6];
        expect(repeated.filter(service.distinct)).toEqual([0, 1, 2, 3, 4, 5, 6]);
    });

    /* Testing the anonymous bound method empty */
    it('This test should filter out all empty values out returning non-empty values.', () => {
        const service: GlobalsService = TestBed.get(GlobalsService);
        const repeated = ['0', '', '2', '3', '4', '5', '6'];
        expect(repeated.filter(service.empty)).toEqual(['0', '2', '3', '4', '5', '6']);
    });

});

describe('Testing enum supportedLanguages.', () => {

    /* Testing the supportedLanguages enum */
    it('This test should call the enum supportedLanguages.', () => {
        expect(supportedLanguages).toBeTruthy();
    });

    /* Testing the calling of the different values of supportedLanguages enum */
    it('This test should call value "de" of supportedLanguages enum first value of enum', () => {
        expect(supportedLanguages.de).toEqual(0);
    });
    it('This test should call value "en" of supportedLanguages enum second value of enum', () => {
        expect(supportedLanguages.en).toEqual(1);
    });
    it('This test should call value "fr" of supportedLanguages enum third value of enum', () => {
        expect(supportedLanguages.fr).toEqual(2);
    });
    it('This test should call value "it" of supportedLanguages enum fourth value of enum', () => {
        expect(supportedLanguages.it).toEqual(3);
    });

});
