import { TestBed } from '@angular/core/testing';

import { UsersStaffServiceService } from './users-staff-service.service';

describe('UsersStaffServiceService', () => {
  let service: UsersStaffServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersStaffServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
