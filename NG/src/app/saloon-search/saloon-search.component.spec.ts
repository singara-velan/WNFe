import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaloonSearchComponent } from './saloon-search.component';

describe('SaloonSearchComponent', () => {
  let component: SaloonSearchComponent;
  let fixture: ComponentFixture<SaloonSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaloonSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaloonSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
