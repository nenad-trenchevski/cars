import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from 'src/app/interface/data.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(private readonly dataService: DataService) { }

    navigationItems: Data[] = [];
    supportedLanguages: Data[] = [];

    ngOnInit() {
        // Assume we're receiving a dynamic data and we don't know how many items will arrive...
        this.navigationItems = this.dataService.getItems('car');
        this.supportedLanguages = this.dataService.getItems('language');
    }

}
