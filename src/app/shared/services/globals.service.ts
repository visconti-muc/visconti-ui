import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GlobalsService {

    /* ---------------------------------------------- Global variables ---------------------------------------------- */
    supportedLanguages = ['de', 'en', 'fr', 'it'];

    constructor() {}

    /* ------------------------------------------ Global Anonymous functions ---------------------------------------- */
    distinct = (value: any, index: number, self: any[]) => {
        return self.indexOf(value) === index;
    };
}
