import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from 'src/app/interface/data.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    navigationItems: Data[] = [];
    supportedLanguages: Data[] = [];
    selectedLang: string;
    selectedCar: string;
    language: string;
    carBrand: string;
    private subscription: Subscription;

    constructor(
        private readonly dataService: DataService,
        private readonly router: Router) { }

    ngOnInit() {
        this.getCurrentBrand();
    }

    private getCurrentBrand() {
        this.subscription = this.dataService.getCurrentCarBrand().subscribe((brand: string) => {
           this.carBrand = brand;
           this.selectedCar = brand;
           this.initialSet();
        });
    }

    private initialSet() {
        this.language = localStorage.getItem('lang');
        this.selectedLang = this.language;
        // Assuming that we're receiving a dynamic data and we don't know how many items will arrive...
        this.navigationItems = this.dataService.getItems('car');
        this.supportedLanguages = this.dataService.getItems('language');
    }

    setActiveItem(item: string, type: string) {
        this[type] = item;
    } 

    ngOnDestroy() {
        // Clear subscription
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}
