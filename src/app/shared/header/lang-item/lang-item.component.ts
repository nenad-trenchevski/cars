import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-lang-item',
    templateUrl: './lang-item.component.html',
    styleUrls: ['./lang-item.component.scss']
})
export class LangItemComponent implements OnInit {
    @Input() langItem;
    constructor() { }

    ngOnInit() {
    }

}
