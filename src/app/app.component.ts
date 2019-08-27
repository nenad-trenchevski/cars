import { Component } from '@angular/core';
import { fade } from './shared/animations/fade-animation';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [fade]
})
export class AppComponent {

    constructor(translate: TranslateService) {
        translate.addLangs(['en', 'de']);
        translate.setDefaultLang('en');
    
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|de/) ? browserLang : 'en');
    }

    title = 'cars';
}
