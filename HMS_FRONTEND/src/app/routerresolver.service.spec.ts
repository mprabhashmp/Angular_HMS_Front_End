import { TestBed } from '@angular/core/testing';

import { RouterresolverService } from './routerresolver.service';

describe('RouterresolverService', () => {
  let service: RouterresolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterresolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
