import { TestBed } from '@angular/core/testing';

import { PropertyViewService } from './property-view.service';

describe('PropertyViewService', () => {
  let service: PropertyViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
