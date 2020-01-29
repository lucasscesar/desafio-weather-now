import { HttpErrorResponse } from '@angular/common/http';

export class AppCore {

    static handleError = (err: HttpErrorResponse) => {
        throw new Error(`${err.message} Status: ${err.status}`);
    }

    static setCookies = (key: string, value, option = 'local') => {
        if (typeof (Storage) !== "undefined") {
            switch (option) {
                case 'local':
                    localStorage.setItem(key, value);
                    break;

                case 'section':
                    sessionStorage.setItem(key, value);
                    break;

                default:
                    break;
            }
        }
        return false;
    }

    static getCookies = (key: string, option = 'local') => {
        if (typeof (Storage) !== "undefined") {
            switch (option) {
                case 'local':
                    return localStorage.getItem(key) === null ? false : localStorage.getItem(key);

                case 'section':
                    return sessionStorage.getItem(key) === null ? false : sessionStorage.getItem(key);

                default:
                    break;
            }
        }
        return false;
    }

}
