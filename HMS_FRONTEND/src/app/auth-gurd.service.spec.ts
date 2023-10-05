import { TestBed } from '@angular/core/testing';

import { AuthGurdService } from './auth-gurd.service';

describe('AuthGurdService', () => {
  let service: AuthGurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
