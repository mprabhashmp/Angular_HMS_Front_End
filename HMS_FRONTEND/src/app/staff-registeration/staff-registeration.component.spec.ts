import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffRegisterationComponent } from './staff-registeration.component';

describe('StaffRegisterationComponent', () => {
  let component: StaffRegisterationComponent;
  let fixture: ComponentFixture<StaffRegisterationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffRegisterationComponent]
    });
    fixture = TestBed.createComponent(StaffRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
