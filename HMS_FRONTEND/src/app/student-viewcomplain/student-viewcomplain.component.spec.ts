import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewcomplainComponent } from './student-viewcomplain.component';

describe('StudentViewcomplainComponent', () => {
  let component: StudentViewcomplainComponent;
  let fixture: ComponentFixture<StudentViewcomplainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentViewcomplainComponent]
    });
    fixture = TestBed.createComponent(StudentViewcomplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
