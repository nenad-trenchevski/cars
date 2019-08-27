import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private readonly dataService: DataService) { }

  navigationItems = [];
  ngOnInit() {
    this.navigationItems = this.dataService.getNavItems();
  }

}
