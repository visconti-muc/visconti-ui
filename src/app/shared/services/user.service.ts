/* --------------------------------------------- angular related imports -------------------------------------------- */
import { Injectable } from '@angular/core';

/* --------------------------------------- imported libraries related imports --------------------------------------- */
import { BehaviorSubject } from 'rxjs';

/* -------------------------------------------- project related imports --------------------------------------------- */
/* Models */
import { UserModel } from '../models/user';

/* Services */
import { GlobalsService, supportedLanguages } from './globals.service';

/**
 * This service handles variables and methods defined once for here to be used throughout the application without change
 */
@Injectable({
    providedIn: 'root'
})
export class UserService {

    /**
     * A JSON containing preferredLanguage and otherLanguages fields of JSON.
     */
    readonly defaultUserResponse = {
        preferredLanguage: this.getNavigatorLanguage(),
        otherLanguages: this.getAllNavigatorLanguages()
    };
    /**
     * Behavior variable that holds the current value of user an instance of class UserModel.
     */
    private userSource = new BehaviorSubject(new UserModel(this.defaultUserResponse));
    /**
     * The current value of user an instance of class UserModel as an observable.
     */
    public currentUser = this.userSource.asObservable();

    /**
     * Constructor for UserService
     * @param globalsService .
     */
    constructor(
        private globalsService: GlobalsService,
    ) {
    }

    /**
     * This method calls next on the behavior subject variable to change value of user to newUser.
     *
     * @param newUser A new instance of class UserModel to which the present user value is to be changed to.
     */
    public changeUser(newUser: UserModel): void {
        this.userSource.next(newUser);
    }

    /* --------------------------------------------- supporting methods --------------------------------------------- */
    /**
     * This method extracts all other languages of the user's browser (separate from default browser language), and
     * returns said languages.
     *
     * @returns A list of string (two letters long language short codes) describing  alternatives languages that were
     * used in the past by users browser.
     */
    public getAllNavigatorLanguages(): string [] {
        let languages: any;
        languages = window.navigator.languages || [];
        return languages.map((data) => data.split('-')[0])
            .map((language) => {
                const index = Object.keys(supportedLanguages).indexOf(language);
                return index > -1 ? '' : language.toString();
            })
            .filter(this.globalsService.distinct)
            .filter(this.globalsService.empty);
    }

    /**
     * This method extracts the user's browser language and matches it to the supported languages for this application.
     * If the language of browser is matched to supported languages, then that language is returned, else English is
     * returned by default.
     *
     * @returns A string (two letters long language short code) that is the language of the browser of the user (if said
     * language is in supportedLanguages enum) else supportedLanguages.en.
     */
    public getNavigatorLanguage(): supportedLanguages {
        let locale;
        let navigator: any;
        navigator = window.navigator;
        try {
            locale = navigator.language;
        } catch (e) {
            locale = navigator.userLanguage;
        }
        const index = Object.keys(supportedLanguages).indexOf(locale.split('-')[0]);
        return index > -1 ? locale.toString() as supportedLanguages : supportedLanguages.en;
    }

}
