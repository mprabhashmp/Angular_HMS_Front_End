import { TestBed } from '@angular/core/testing';

import { AdminAssignRoomService } from './admin-assign-room.service';

describe('AdminAssignRoomService', () => {
  let service: AdminAssignRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAssignRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
