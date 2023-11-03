import { TestBed } from '@angular/core/testing';

import { PropertyServiceService } from './admin-property/property-service.service';

describe('PropertyServiceService', () => {
  let service: PropertyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
