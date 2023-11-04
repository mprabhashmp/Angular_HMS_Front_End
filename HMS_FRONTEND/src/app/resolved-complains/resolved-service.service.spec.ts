import { TestBed } from '@angular/core/testing';

import { ResolvedServiceService } from './resolved-service.service';

describe('ResolvedServiceService', () => {
  let service: ResolvedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolvedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
