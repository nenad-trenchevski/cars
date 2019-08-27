import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieDesclaimerComponent } from './cookie-desclaimer.component';

describe('CookieDesclaimerComponent', () => {
  let component: CookieDesclaimerComponent;
  let fixture: ComponentFixture<CookieDesclaimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookieDesclaimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookieDesclaimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
