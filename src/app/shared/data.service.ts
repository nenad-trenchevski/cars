import { Injectable } from '@angular/core';
import { Navigation } from '../interface/nav.interface';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor() { }

    private readonly navItems = [
        {
            title: 'Mercedes'
        },
        {
            title: 'BWM'
        }
    ];

    private readonly supportedLanguages = ['EN', 'DE'];

    getNavItems(): Navigation[] {
        return this.navItems;
    }

    getSupportedLanguages(): string[] {
        return this.supportedLanguages;
    }

}
