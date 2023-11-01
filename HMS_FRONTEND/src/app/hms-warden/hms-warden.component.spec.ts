import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmsWardenComponent } from './hms-warden.component';

describe('HmsWardenComponent', () => {
  let component: HmsWardenComponent;
  let fixture: ComponentFixture<HmsWardenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HmsWardenComponent]
    });
    fixture = TestBed.createComponent(HmsWardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
