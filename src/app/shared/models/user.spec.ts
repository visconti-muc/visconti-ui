/* angular related imports */
import { async } from '@angular/core/testing';
/* project related imports */
import { supportedLanguages } from '../services/globals.service';
import { UserModel } from './user';

describe('Testing class Model Users', () => {

    const defaultUserResponse = {
        preferredLanguage: 'en',
        otherLanguages: ['de', 'en', 'fr', 'it']
    };
    const user = new UserModel(defaultUserResponse);

    /* Testing class instantiation with default values. */
    it('This test should create an instance of class UserModel with default property values.', () => {
        expect(new UserModel({})).toBeTruthy();
    });
    /* Testing class instantiation without custom values for class properties. */
    it('This test should create an instance of class UserModel with property values defined in defaultUserResponse.', () => {
        expect(user).toBeTruthy();
    });

    /* Testing PreferredLanguage property getters and setters */
    it('This test should set the user object, an instance of class UserModel, property usersLanguage to "fr".', async(() => {
        user.usersLanguage = supportedLanguages.fr;
        expect(user.usersLanguage).toEqual(supportedLanguages.fr);
    }));

    /* Testing OtherLanguages property getters and setters */
    it('This test should set the user object, an instance of class UserModel, property OtherLanguages to ["de", "gr"].', async(() => {
        user.usersOtherLanguages = ['de', 'gr'];
        expect(user.usersOtherLanguages).toEqual(['de', 'gr']);
    }));

});
