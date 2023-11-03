import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersStudentComponent } from './admin-users-student.component';

describe('AdminUsersStudentComponent', () => {
  let component: AdminUsersStudentComponent;
  let fixture: ComponentFixture<AdminUsersStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUsersStudentComponent]
    });
    fixture = TestBed.createComponent(AdminUsersStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
