import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewWardenComponent } from './student-view-warden.component';

describe('StudentViewWardenComponent', () => {
  let component: StudentViewWardenComponent;
  let fixture: ComponentFixture<StudentViewWardenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentViewWardenComponent]
    });
    fixture = TestBed.createComponent(StudentViewWardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
