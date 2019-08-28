import { Injectable } from '@angular/core';
import { Data } from '../interface/data.interface';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    currentBrand = new BehaviorSubject<string>(null);

    constructor() { }

    private readonly car = [
        {
            title: 'mercedes'
        },
        {
            title: 'bmw'
        },
        {
            title: 'yugo'
        },
        {
            title: 'audi'
        },
        {
            title: 'toyota'
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

    // Util to get the desired data
    getItems(type: string): Data[] {
        return this[type];
    }

    // Send data
    notifyRouteChange(carBrand: string): void {
        this.currentBrand.next(carBrand);
    }

    // Get Data
    getCurrentCarBrand(): Observable<string> {
        return this.currentBrand.asObservable();
    }
}
