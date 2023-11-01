import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardenNavbarComponent } from './warden-navbar.component';

describe('WardenNavbarComponent', () => {
  let component: WardenNavbarComponent;
  let fixture: ComponentFixture<WardenNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WardenNavbarComponent]
    });
    fixture = TestBed.createComponent(WardenNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
