import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiConfig {

    private readonly endpoints = {
        IP_ADDRESS: 'https://api.ipify.org?format=json'
    }

    // Use to get the endpoint 
    getValue(key: string): string {
        return this.endpoints[key];
    };
}
