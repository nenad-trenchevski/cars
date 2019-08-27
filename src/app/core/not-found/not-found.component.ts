import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit, OnDestroy {

    counter = 3;
    private redirectInterval;
  
    constructor(private readonly router: Router) { }
  
    ngOnInit() {
      this.redirectActive();
    }
  
    // Redirect after 3 seconds
    private redirectActive(): void {
      this.redirectInterval = setInterval(() => {
        this.counter--;
        if (this.counter === 0) {
          this.router.navigate(['/']);
        }
      }, 1000);
    }
  
    ngOnDestroy() {
      if (this.redirectInterval) {
        clearInterval(this.redirectInterval);
      }
    }

}
