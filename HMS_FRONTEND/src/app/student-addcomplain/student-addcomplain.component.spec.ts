import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAddcomplainComponent } from './student-addcomplain.component';

describe('StudentAddcomplainComponent', () => {
  let component: StudentAddcomplainComponent;
  let fixture: ComponentFixture<StudentAddcomplainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentAddcomplainComponent]
    });
    fixture = TestBed.createComponent(StudentAddcomplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
