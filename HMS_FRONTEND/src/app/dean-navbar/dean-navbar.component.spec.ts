import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeanNavbarComponent } from './dean-navbar.component';

describe('DeanNavbarComponent', () => {
  let component: DeanNavbarComponent;
  let fixture: ComponentFixture<DeanNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeanNavbarComponent]
    });
    fixture = TestBed.createComponent(DeanNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
