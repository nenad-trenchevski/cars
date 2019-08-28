import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { Data } from 'src/app/interface/data.interface';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        private readonly dataService: DataService,
        private readonly translate: TranslateService
        ) { }

    ngOnInit() {
        this.initializeParams();
    }

    private initializeParams(): void {
        this.route.params.subscribe((params: Params) => {

            const language = this.paramUtil(params, 'language');
            const carBrand = this.paramUtil(params, 'car');

            localStorage.setItem('lang', language);
            this.router.navigate([`cars/${language}/${carBrand}`]);

            this.initialiseTranslation(language);
        });
    }

    private paramUtil(params: Params, paramType: string): string {
        let returnType: string;
        const def = this.dataService.getItems(paramType);
        params[paramType] ? returnType = params[paramType] : returnType = def[0].title.toLowerCase();

        return returnType;
    }

    private initialiseTranslation(language: string): void {
        const supportedLanguages = this.dataService.getItems('language');
        const languageStringArray = supportedLanguages.map(lang => lang.title);
        this.translate.addLangs(languageStringArray);
        this.translate.setDefaultLang('en');
        this.translate.use(language);
    }

}
