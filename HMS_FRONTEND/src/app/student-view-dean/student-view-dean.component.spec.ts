import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewDeanComponent } from './student-view-dean.component';

describe('StudentViewDeanComponent', () => {
  let component: StudentViewDeanComponent;
  let fixture: ComponentFixture<StudentViewDeanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentViewDeanComponent]
    });
    fixture = TestBed.createComponent(StudentViewDeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
