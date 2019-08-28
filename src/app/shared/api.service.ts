import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from '../api.config';
import { Observable } from 'rxjs';
import { IPAdress } from '../interface/ip-address.interface';
import { AppConstants } from '../app.constants';


@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(
        private readonly httpClient: HttpClient,
        private readonly apiConfig: ApiConfig,
        private readonly appCst: AppConstants 
        ) { }

    // HTTPClient API method
    getIPAddress(): Observable<IPAdress> {
        return this.httpClient.get<IPAdress>(this.apiConfig.getValue(this.appCst.CONSTS.IP_ADDRESS));
    }
}
