import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaloonListComponent } from './saloon-list.component';

describe('SaloonListComponent', () => {
  let component: SaloonListComponent;
  let fixture: ComponentFixture<SaloonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaloonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaloonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
