/* --------------------------------------------- angular related imports -------------------------------------------- */
import { Injectable } from '@angular/core';

/* --------------------------------------- imported libraries related imports --------------------------------------- */
import { BehaviorSubject } from 'rxjs';

/* -------------------------------------------- project related imports --------------------------------------------- */
/* Models */
import { UserModel } from '../models/user';

/* Services */
import { GlobalsService } from './globals.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    defaultUserResponse = {
        preferredLanguage: this.getNavigatorLanguage(),
        otherLanguages: this.getAllNavigatorLanguages(this.getNavigatorLanguage())
    };

    private userSource = new BehaviorSubject( new UserModel(this.defaultUserResponse) );
    public currentUser = this.userSource.asObservable();

    constructor(
        private globalsService: GlobalsService,
    ) {}

    public changeUser(newUser: UserModel): void {
        this.userSource.next(newUser);
    }

    /* ------------------------------------------- service related methods ------------------------------------------ */
    public getAllNavigatorLanguages(usersNavigatorLanguage: string): string [] {
        return navigator.languages
            .map((data) => data.split('-')[0])
            .map((language) => this.globalsService.supportedLanguages.indexOf(language) > -1 ? language : 'en')
            .filter(this.globalsService.distinct)
            .filter((language) => language !== usersNavigatorLanguage);
    }

    public getNavigatorLanguage(): string {
        return navigator.language.split('-')[0];
    }

}
