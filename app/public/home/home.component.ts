import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    private route$: Subscription;
    selectedCar: string;

    constructor(
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        private readonly dataService: DataService,
        private readonly translate: TranslateService
    ) { }

    ngOnInit() {
        this.initializeParams();
    }

    // Initialize everything, get params, navigate if needed
    private initializeParams(): void {
        this.route$ = this.route.params.subscribe((params: Params) => {

            const language = this.paramUtil(params, 'language');
            const carBrand = this.paramUtil(params, 'car');
            localStorage.setItem('lang', language);
            this.router.navigate([`cars/${language}/${carBrand}`]);
            this.initialiseTranslation(language);

            this.dataService.notifyRouteChange(carBrand);
            this.selectedCar = carBrand;
        });
    }

    // Util to get the correct url param
    private paramUtil(params: Params, paramType: string): string {
        let returnType: string;

        const def = this.dataService.getItems(paramType);
        params[paramType] ? returnType = params[paramType] : returnType = def[0].title.toLowerCase();

        return returnType;
    }

    // Set the translation to currently selected language, and add the possible languages
    private initialiseTranslation(language: string): void {
        const supportedLanguages = this.dataService.getItems('language');
        const languageStringArray = supportedLanguages.map(lang => lang.title);
        this.translate.addLangs(languageStringArray);
        this.translate.setDefaultLang('en');
        this.translate.use(language);
    }

    ngOnDestroy() {
        // Clear subscription
        if (this.route$) {
            this.route$.unsubscribe();
        }
    }

}
