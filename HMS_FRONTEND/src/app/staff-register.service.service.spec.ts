import { TestBed } from '@angular/core/testing';

import { StaffRegisterServiceService } from './staff-register.service.service';

describe('StaffRegisterServiceService', () => {
  let service: StaffRegisterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffRegisterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
