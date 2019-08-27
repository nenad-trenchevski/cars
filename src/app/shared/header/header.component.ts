import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Navigation } from 'src/app/interface/nav.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(private readonly dataService: DataService) { }

    navigationItems: Navigation[] = [];
    supportedLanguages: string[] = [];

    ngOnInit() {
        // Assume we're receiving a dynamic data and we don't know how many items will arrive...
        this.navigationItems = this.dataService.getNavItems();
        this.supportedLanguages = this.dataService.getSupportedLanguages();
    }

}
