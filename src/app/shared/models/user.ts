/* project related imports */
import { supportedLanguages } from '../services/globals.service';

/**
 * This module describes the class UserModel that is the blueprint from which individual user objects are created.
 *
 * Each instance of UserModel represents a physical user of the visconti ui application, and is defined by a set of
 * rights on said application. The role property of the user defining the set of rights which applies to specified user.
 * Each user is defined by:
 *  - PreferredLanguage: The user's preferred language
 *  - OtherLanguages: A set of additional languages used by the user
 */
export class UserModel {

    /**
     * A list of string (two letters long language short codes) describing  alternatives languages that were used in the past by the user.
     */
    private OtherLanguages?: string[];
    /**
     * A string (two letters long language short code) preferred by the user.
     */
    private PreferredLanguage: supportedLanguages;

    /**
     * Constructor for UserModel initiated wether with values parsed out of JSON passed to the constructor, or default
     * values passed to its properties.
     * Each instance of UserModel represents a user of the visconti UI application.
     * @param userResponse A response JSON sent back from server containing user information details.
     */
    constructor(userResponse: any) {
        this.OtherLanguages = userResponse.otherLanguages || [];
        this.PreferredLanguage = userResponse.preferredLanguage || '';
    }

    /**
     * This is a simple getter of the OtherLanguages property of UserModel.
     * @example
     * Usage:
     * new UserModel().usersOtherLanguages
     * @returns An array of strings, two letters long language short code, representing the other languages used by user
     * except his preferred language.
     */
    get usersOtherLanguages(): string[] {
        return this.OtherLanguages;
    }
    /**
     * This is a simple setter of the otherLanguages property of UserModel.
     * @example
     * Usage:
     * new UserModel().otherLanguages = ['de', 'gr']
     * @param otherLanguages An array of strings, two letters long language short code, representing the other languages
     * used by user except his preferred language.
     */
    set usersOtherLanguages(otherLanguages: string[]) {
        this.OtherLanguages = otherLanguages;
    }

    /**
     * This is a simple getter of the PreferredLanguage property of UserModel.
     * @example
     * Usage:
     * new UserModel().usersLanguage
     * @returns A member of enumeration called supportedLanguages which are a set of strings of length 2, two letters
     * long language short code, representing the preferred language of the user.
     */
    get usersLanguage(): supportedLanguages {
        return this.PreferredLanguage;
    }
    /**
     * This is a simple setter of the PreferredLanguage property of UserModel.
     * @example
     * Usage:
     * new UserModel().usersLanguage = supportedLanguages.fr
     * @param preferredLanguages A member of enumeration called supportedLanguages which are a set of strings of length
     * 2, two letters long language short code, representing the preferred language of the user.
     */
    set usersLanguage(preferredLanguages: supportedLanguages) {
        this.PreferredLanguage = preferredLanguages;
    }
}
