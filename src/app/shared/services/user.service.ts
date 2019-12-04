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
 * This service handles exchange of information of user logged to Visconti UI application between different modules
 * within said application.
 */
@Injectable({
    providedIn: 'root'
})
export class UserService {

    /**
     * A JSON containing preferredLanguage and otherLanguages fields of JSON.
     */
    readonly defaultUserResponse = {
        preferredLanguage: this.getApplicationLanguage(this.getMainNavigatorLanguage()),
        otherLanguages: this.filterForOtherLanguages()
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
     * Constructor for UserService that calls itself GlobalsService to get to methods defined into GlobalsService.
     *
     * @param globalsService an instance of the GlobalsService.
     */
    constructor(
        private globalsService: GlobalsService,
    ) {
    }

    /* ------------------------------------------- angular service methods ------------------------------------------ */
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
     * This method extracts all the languages supported by the user's browser language, then gets the user's browser main
     * language. If the the browser's main language is not supported by the application, then it is added to all the array
     * of all supported languages. At last, the resulting array of languages is filtered for any mentioned of the
     * application's default language for the current user. The resulting array is returned.
     *
     * @returns A string (two letters long language short code) that are all the language of the browser of the user that
     * is separate of the application's default language for the current user.
     */
    public filterForOtherLanguages(): string [] {
        const allNavigatorLanguages = this.getAllNavigatorLanguages();
        const navigatorLanguage = this.getMainNavigatorLanguage();
        const applicationLanguage = this.getApplicationLanguage(navigatorLanguage);
        if ( applicationLanguage.toString().toLowerCase() !== navigatorLanguage.toLowerCase() ) {
            allNavigatorLanguages.push(navigatorLanguage.toLowerCase());
        }
        return allNavigatorLanguages.filter(( lang ) => {
            return applicationLanguage.toString().toLowerCase() !== lang;
        });
    }

    /**
     * This method gets a language as input parameter and matches it to the supported languages for this application.
     * If the language of browser is matched to supported languages, then that language is returned, else English is
     * returned by default.
     *
     * @param mainNavigatorLanguage A string (two letters long language short code) that is representing a language.
     * @returns A string (two letters long language short code) that is the language passed as parameter (if said
     * language is in supportedLanguages enum) else supportedLanguages.en.
     */
    public getApplicationLanguage(mainNavigatorLanguage: any): supportedLanguages {
        const index = Object.keys(supportedLanguages).indexOf(mainNavigatorLanguage);
        return index > -1 ? mainNavigatorLanguage as supportedLanguages : supportedLanguages.en;
    }

    /**
     * This method extracts all languages of the user's browser and returns them as strings in an Array.
     *
     * @returns A list of string (two letters long language short codes) describing languages installed in the user's
     * browser.
     */
    public getAllNavigatorLanguages(): string [] {
        let languages: any;
        languages = window.navigator.languages || [];
        return languages.map((data) => data.split('-')[0].toString().toLowerCase())
            .filter(this.globalsService.distinct)
            .filter(this.globalsService.empty);
    }

    /**
     * This method extracts the user's browser main language.
     *
     * @returns A string (two letters long language short code) that is the default language of the browser of the user.
     */
    public getMainNavigatorLanguage(): string {
        let locale;
        let navigator: any;
        navigator = window.navigator;
        try {
            locale = navigator.language;
        } catch (e) {
            locale = navigator.userLanguage;
        }
        return locale.split('-')[0].toString().toLowerCase();
    }

}
