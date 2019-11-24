import { UserModel } from './user';

describe('User', () => {

    const defaultUserResponse = {
        preferredLanguage: 'en',
        otherLanguages: ['de', 'en', 'fr', 'it']
    };
    const user = new UserModel(defaultUserResponse);
    const copy = Object.assign({}, user);
    copy.usersLanguage = 'de';
    copy.usersOtherLanguages = ['de', 'gr'];

    /* Testing class instantiation */
    it('should create an instance of class UserModel', () => {
        expect(new UserModel({})).toBeTruthy();
    });
    it('should also create an instance of class UserModel', () => {
        expect(user).toBeTruthy();
    });

    /* Testing getters */
    it('should return string value "en"', () => {
        expect(user.usersLanguage).toEqual('en');
    });
    it('should return the following array ["de", "en", "fr", "it"]', () => {
        expect(user.usersOtherLanguages).toEqual(['de', 'en', 'fr', 'it']);
    });

    /* Testing setters */
    it('should return string value "de"', () => {
        expect(copy.usersLanguage).toEqual('de');
    });
    it('should return the following array ["de", "gr"]', () => {
        expect(copy.usersOtherLanguages).toEqual(['de', 'gr']);
    });

});
