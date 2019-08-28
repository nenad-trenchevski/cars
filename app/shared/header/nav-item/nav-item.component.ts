import { Component, Input } from '@angular/core';
import { Data } from 'src/app/interface/data.interface';

@Component({
    selector: 'app-nav-item',
    templateUrl: './nav-item.component.html',
    styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {
    @Input() navItem: Data;
}
