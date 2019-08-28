import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import { IPAdress } from 'src/app/interface/ip-address.interface';

@Component({
    selector: 'app-cookie-disclaimer',
    templateUrl: './cookie-disclaimer.component.html',
    styleUrls: ['./cookie-disclaimer.component.scss']
})
export class CookieDisclaimerComponent implements OnInit {

    ipAddress: string;
    @Output() shouldShowAlert = new EventEmitter<boolean>();

    constructor(private readonly apiService: ApiService) { }

    ngOnInit() {
        this.getIpAddress();
    }

    // Send alert to the parent component
    setCookie() {
        localStorage.setItem('cookie', 'cookie');
        this.shouldShowAlert.emit(false);
    }

    // Api call
    private getIpAddress() {
        this.apiService.getIPAddress().subscribe(
            (result: IPAdress) => {
                this.ipAddress = result.ip;
            },
            error => {
                console.log(error);
            }
        );
    }



}
