export class UserModel {

    private OtherLanguages?: string[];
    private PreferredLanguage: string;

    constructor(userResponse: any) {
        this.OtherLanguages = userResponse.otherLanguages || [];
        this.PreferredLanguage = userResponse.preferredLanguage || '';
    }

    get usersOtherLanguages(): string[] {
        return this.OtherLanguages;
    }
    set usersOtherLanguages(otherLanguages: string[]) {
        this.OtherLanguages = otherLanguages;
    }

    get usersLanguage(): string {
        return this.PreferredLanguage;
    }
    set usersLanguage(preferredLanguages: string) {
        this.PreferredLanguage = preferredLanguages;
    }
}
