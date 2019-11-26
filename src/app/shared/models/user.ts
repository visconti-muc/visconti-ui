/**
 * This module describes the class UserModel that is the blueprint from which individual user objects are created.
 */

/* project related imports */
import { supportedLanguages } from '../services/globals.service';

export class UserModel {

    /**
     * A list of string (two letters long language short codes) describing  alternatives languages that were used in the past by the user.
     */
    private OtherLanguages?: string[];
    /**
     * A string (two letters long language short code) preferred by the user.
     */
    private PreferredLanguage: supportedLanguages;

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

    get usersLanguage(): supportedLanguages {
        return this.PreferredLanguage;
    }
    set usersLanguage(preferredLanguages: supportedLanguages) {
        this.PreferredLanguage = preferredLanguages;
    }
}
