import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    showAlert = true;

    constructor(translate: TranslateService) {
        translate.addLangs(['en', 'de']);
        translate.setDefaultLang('en');
    
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|de/) ? browserLang : 'en');
    }

    ngOnInit() {
        this.getFromStorage();
    }

    onCookieSent(isCookieSet: boolean) {
        this.toggleAlert(isCookieSet);
    }

    private getFromStorage() {
        const cookieItem = localStorage.getItem('cookie');
        let shouldShowAlert: boolean;
        cookieItem ? shouldShowAlert = false : shouldShowAlert = true
        this.toggleAlert(shouldShowAlert);
     }

    private toggleAlert(shouldShowAlert: boolean) {
        this.showAlert = shouldShowAlert;
     }
    
}
