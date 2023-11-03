import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersStaffComponent } from './admin-users-staff.component';

describe('AdminUsersStaffComponent', () => {
  let component: AdminUsersStaffComponent;
  let fixture: ComponentFixture<AdminUsersStaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUsersStaffComponent]
    });
    fixture = TestBed.createComponent(AdminUsersStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
