import { TestBed } from '@angular/core/testing';

import { DeanServiceService } from './dean-service.service';

describe('DeanServiceService', () => {
  let service: DeanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
