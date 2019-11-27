/* angular related imports */
import { Injectable } from '@angular/core';

/**
 * This service handles variables and methods defined once for here to be used throughout the application without change
 */
@Injectable({
    providedIn: 'root'
})
export class GlobalsService {

    /* ---------------------------------------------- Global variables ---------------------------------------------- */

    /* ------------------------------------------ Global Anonymous functions ---------------------------------------- */

    /**
     * Anonymous function filtering out repeat values from arrays and returning an array of distinct value when passed
     * to filter function.
     * @example
     * Usage:
     * [0, 1, 2, 3, 3, 4, 4, 4, 2, 5, 6].filter(distinct)
     *
     * @param value Value of element of the array being filtered.
     * @param index Index of element of the array being filtered.
     * @param self A reference to the array being filtered itself.
     */
    distinct = <T>(value: T, index: number, self: T[]) => {
        return self.indexOf(value) === index;
    }

}

/* ----------------------------------------------- Global enumerations ---------------------------------------------- */

/**
 * This enumeration lists of languages supported by the visconti ui application.
 */
export enum supportedLanguages {
    'de', 'en', 'fr', 'it'
}
