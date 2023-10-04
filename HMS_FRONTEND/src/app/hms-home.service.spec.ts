import { TestBed } from '@angular/core/testing';

import { HmsHomeService } from './hms-home/hms-home.service';

describe('HmsHomeService', () => {
  let service: HmsHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HmsHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
