import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAssignRoomsComponent } from './admin-assign-rooms.component';

describe('AdminAssignRoomsComponent', () => {
  let component: AdminAssignRoomsComponent;
  let fixture: ComponentFixture<AdminAssignRoomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAssignRoomsComponent]
    });
    fixture = TestBed.createComponent(AdminAssignRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
