import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from 'src/app/interface/data.interface';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

    private subscription: Subscription;
    status = false;
    navigationItems: Data[] = [];
    supportedLanguages: Data[] = [];
    selectedLang: string;
    selectedCar: string;
    language: string;
    carBrand: string;

    constructor(private readonly dataService: DataService) { }

    ngOnInit() {
        this.getCurrentBrand();
    }

    private getCurrentBrand(): void {
        this.subscription = this.dataService.getCurrentCarBrand().subscribe((brand: string) => {
            this.carBrand = brand;
            this.selectedCar = brand;
            this.initialSet();
        });
    }

    private initialSet(): void {
        this.language = localStorage.getItem('lang');
        this.selectedLang = this.language;
        // Assuming that we're receiving a dynamic data and we don't know how many items will arrive...
        this.navigationItems = this.dataService.getItems('car');
        this.supportedLanguages = this.dataService.getItems('language');
    }

    setActiveItem(item: string, type: string): void {
        this[type] = item;
    }

    toggleMenu(): void {
        this.status = !this.status;
    }

    ngOnDestroy() {
        // Clear subscription
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}
