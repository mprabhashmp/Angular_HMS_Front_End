import { TestBed } from '@angular/core/testing';

import { WardenServiceService } from './hms-warden/warden-service.service';

describe('WardenServiceService', () => {
  let service: WardenServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WardenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
