import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    showAlert = true;

    constructor(private readonly router: Router) { }

    ngOnInit() {
        const langStored = localStorage.getItem('lang');
        let language: string;
        langStored ? language = langStored : language = 'en';
        this.router.config.unshift({ path: '', redirectTo: `cars/${language}/mercedes`, pathMatch: 'full' })
        this.getCookieFromStorage();
    }

    cookieSent(isCookieSet: boolean): void {
        this.toggleAlert(isCookieSet);
    }


    private getCookieFromStorage(): void {
        const cookieItem = localStorage.getItem('cookie');
        let shouldShowAlert: boolean;
        cookieItem ? shouldShowAlert = false : shouldShowAlert = true
        this.toggleAlert(shouldShowAlert);
    }

    private toggleAlert(shouldShowAlert: boolean): void {
        this.showAlert = shouldShowAlert;
    }

}
