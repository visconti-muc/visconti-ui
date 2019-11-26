import { UserModel } from './user';

describe('Testing class Model Users', () => {

    const defaultUserResponse = {
        preferredLanguage: 'en',
        otherLanguages: ['de', 'en', 'fr', 'it']
    };
    const user = new UserModel(defaultUserResponse);

    /* Testing class instantiation with default values. */
    it('This test should create an instance of class User with default property values.', () => {
        expect(new UserModel({})).toBeTruthy();
    });
    /* Testing class instantiation without custom values for class properties. */
    it('This test should create an instance of class User with property values defined in defaultUserResponse.', () => {
        expect(user).toBeTruthy();
    });

    /* Testing PreferredLanguage property getters and setters */
    it('This test should return the value of PreferredLanguage property of instance of class UserModel which is equal to "en".', () => {
        spyOnProperty(user, 'usersLanguage', 'get').and.returnValue('en');
        expect(user.usersLanguage).toBe('en');
    });

    it('This test should set the PreferredLanguage property of an instance of the class UserModel to "fr".', () => {
        const spy = spyOnProperty(user, 'usersLanguage', 'set');
        user.usersLanguage = 'fr';
        expect(spy).toHaveBeenCalled();
    });

    /* Testing OtherLanguages property getters and setters */
    it('This test should return the value of OtherLanguages property of instance of class UserModel which is ' +
        'equal to ["de", "en", "fr", "it"].', () => {
        spyOnProperty(user, 'usersOtherLanguages', 'get').and.returnValue(['de', 'en', 'fr', 'it']);
        expect(user.usersOtherLanguages).toEqual(['de', 'en', 'fr', 'it']);
    });

    it('This test should set the OtherLanguages property of an instance of the class UserModel to ["de", "gr"].', () => {
        const spy = spyOnProperty(user, 'usersOtherLanguages', 'set');
        user.usersOtherLanguages = ['de', 'gr'];
        expect(spy).toHaveBeenCalled();
    });

});
