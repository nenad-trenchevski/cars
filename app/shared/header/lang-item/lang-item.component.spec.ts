import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangItemComponent } from './lang-item.component';

describe('LangItemComponent', () => {
  let component: LangItemComponent;
  let fixture: ComponentFixture<LangItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
