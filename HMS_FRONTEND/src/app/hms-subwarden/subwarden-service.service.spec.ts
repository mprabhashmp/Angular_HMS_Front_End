import { TestBed } from '@angular/core/testing';

import { SubwardenServiceService } from './subwarden-service.service';

describe('SubwardenServiceService', () => {
  let service: SubwardenServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubwardenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
