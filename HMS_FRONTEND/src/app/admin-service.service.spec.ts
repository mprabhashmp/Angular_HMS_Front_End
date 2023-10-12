import { TestBed } from '@angular/core/testing';

import { AdminServiceService } from './hms-admin/admin-service.service';

describe('AdminServiceService', () => {
  let service: AdminServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
