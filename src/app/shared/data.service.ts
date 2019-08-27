import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  private readonly navItems = [
      {
          title: 'Mercedes'
      },
      {
          title: 'BWM'
      }
  ];

  getNavItems() {
      return this.navItems;
  }

}
