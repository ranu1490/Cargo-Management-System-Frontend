import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusteditplacesComponent } from './custeditplaces.component';

describe('CusteditplacesComponent', () => {
  let component: CusteditplacesComponent;
  let fixture: ComponentFixture<CusteditplacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusteditplacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CusteditplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
