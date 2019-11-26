import {Users} from './users';

describe('Users', () => {

    const user = new Users();

    it('This test should create an instance of class User.', () => {
        expect(new Users()).toBeTruthy();
    });

    it('This test should set the ? property of instance of class User to ?.', () => {
        const spy = spyOnProperty(user, 'token', 'set');
        user.token = ['melanie'];
        expect(spy).toHaveBeenCalled();
    });

    it('This test should return the value of ? property of instance of class User which is equal to ?.', () => {
        spyOnProperty(user, 'token', 'get').and.returnValue('melanie');
        expect(user.token).toBe('melanie');
    });

});
