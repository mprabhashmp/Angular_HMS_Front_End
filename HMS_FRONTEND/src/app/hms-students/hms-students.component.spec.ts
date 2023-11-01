import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmsStudentsComponent } from './hms-students.component';

describe('HmsStudentsComponent', () => {
  let component: HmsStudentsComponent;
  let fixture: ComponentFixture<HmsStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HmsStudentsComponent]
    });
    fixture = TestBed.createComponent(HmsStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
