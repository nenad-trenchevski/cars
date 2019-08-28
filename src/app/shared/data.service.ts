import { Injectable } from '@angular/core';
import { Data } from '../interface/data.interface';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor() { }

    private readonly car = [
        {
            title: 'Mercedes'
        },
        {
            title: 'BWM'
        },
        {
            title: 'Yugo'
        },
        {
            title: 'Audi'
        },
        {
            title: 'Toyota'
        }
    ];

    private readonly language = [
        {
            title: 'en'
        },
        {
            title: 'de'
        }
    ];

    getItems(type: string): Data[] {
        return this[type];
    }
}
