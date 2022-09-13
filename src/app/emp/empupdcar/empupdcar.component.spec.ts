import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpupdcarComponent } from './empupdcar.component';

describe('EmpupdcarComponent', () => {
  let component: EmpupdcarComponent;
  let fixture: ComponentFixture<EmpupdcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpupdcarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpupdcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
