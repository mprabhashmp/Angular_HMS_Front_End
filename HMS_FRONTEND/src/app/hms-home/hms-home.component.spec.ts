import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmsHomeComponent } from './hms-home.component';

describe('HmsHomeComponent', () => {
  let component: HmsHomeComponent;
  let fixture: ComponentFixture<HmsHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HmsHomeComponent]
    });
    fixture = TestBed.createComponent(HmsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
