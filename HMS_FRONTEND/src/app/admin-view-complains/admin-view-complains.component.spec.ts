import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewComplainsComponent } from './admin-view-complains.component';

describe('AdminViewComplainsComponent', () => {
  let component: AdminViewComplainsComponent;
  let fixture: ComponentFixture<AdminViewComplainsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminViewComplainsComponent]
    });
    fixture = TestBed.createComponent(AdminViewComplainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
