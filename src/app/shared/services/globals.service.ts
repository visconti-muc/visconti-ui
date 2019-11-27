import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GlobalsService {

    /* ---------------------------------------------- Global variables ---------------------------------------------- */
    // readonly supportedLanguages = ['de', 'en', 'fr', 'it'];

    constructor() {}

    /* ------------------------------------------ Global Anonymous functions ---------------------------------------- */
    distinct = <T>(value: T, index: number, self: T[]) => {
        return self.indexOf(value) === index;
    }

}

/* ----------------------------------------------- Global enumerations ---------------------------------------------- */
export enum supportedLanguages {

    'de', 'en', 'fr', 'it'
}
