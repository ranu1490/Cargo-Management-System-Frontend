import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateselfComponent } from './updateself.component';

describe('UpdateselfComponent', () => {
  let component: UpdateselfComponent;
  let fixture: ComponentFixture<UpdateselfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateselfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
