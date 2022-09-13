import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoOrderdetailsComponent } from './cargo-orderdetails.component';

describe('CargoOrderdetailsComponent', () => {
  let component: CargoOrderdetailsComponent;
  let fixture: ComponentFixture<CargoOrderdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargoOrderdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoOrderdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
