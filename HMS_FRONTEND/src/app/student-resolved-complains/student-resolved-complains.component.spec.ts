import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentResolvedComplainsComponent } from './student-resolved-complains.component';

describe('StudentResolvedComplainsComponent', () => {
  let component: StudentResolvedComplainsComponent;
  let fixture: ComponentFixture<StudentResolvedComplainsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentResolvedComplainsComponent]
    });
    fixture = TestBed.createComponent(StudentResolvedComplainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
