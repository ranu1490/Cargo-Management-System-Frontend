import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecargoComponent } from './deletecargo.component';

describe('DeletecargoComponent', () => {
  let component: DeletecargoComponent;
  let fixture: ComponentFixture<DeletecargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletecargoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletecargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
