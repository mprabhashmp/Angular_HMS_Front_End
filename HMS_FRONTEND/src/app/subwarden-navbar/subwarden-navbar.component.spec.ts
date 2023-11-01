import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubwardenNavbarComponent } from './subwarden-navbar.component';

describe('SubwardenNavbarComponent', () => {
  let component: SubwardenNavbarComponent;
  let fixture: ComponentFixture<SubwardenNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubwardenNavbarComponent]
    });
    fixture = TestBed.createComponent(SubwardenNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
