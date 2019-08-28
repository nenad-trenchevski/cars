import { Component, Input } from '@angular/core';
import { Data } from 'src/app/interface/data.interface';

@Component({
    selector: 'app-lang-item',
    templateUrl: './lang-item.component.html',
    styleUrls: ['./lang-item.component.scss']
})
export class LangItemComponent {
    @Input() langItem: Data;
}
