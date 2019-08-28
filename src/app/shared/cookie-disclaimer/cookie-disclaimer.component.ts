import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import { IPAdress } from 'src/app/interface/ip-address.interface';

@Component({
    selector: 'app-cookie-disclaimer',
    templateUrl: './cookie-disclaimer.component.html',
    styleUrls: ['./cookie-disclaimer.component.scss']
})
export class CookieDisclaimerComponent implements OnInit {

    @Output() shouldShowAlert = new EventEmitter<boolean>();
    ipAddress: string;

    constructor(private readonly apiService: ApiService) { }

    ngOnInit() {
        this.getIpAddress();
    }

    // Send alert to the parent component
    setCookie(): void {
        localStorage.setItem('cookie', 'cookie');
        this.shouldShowAlert.emit(false);
    }

    // Api call
    private getIpAddress(): void {
        this.apiService.getIPAddress().subscribe(
            (result: IPAdress) => {
                this.ipAddress = result.ip;
            },
            error => {
                // TODO: render error message somewhere on the screen...
                console.log(error);
            }
        );
    }



}
