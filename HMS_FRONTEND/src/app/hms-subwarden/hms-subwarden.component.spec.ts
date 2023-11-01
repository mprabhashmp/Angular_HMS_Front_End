import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmsSubwardenComponent } from './hms-subwarden.component';

describe('HmsSubwardenComponent', () => {
  let component: HmsSubwardenComponent;
  let fixture: ComponentFixture<HmsSubwardenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HmsSubwardenComponent]
    });
    fixture = TestBed.createComponent(HmsSubwardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
