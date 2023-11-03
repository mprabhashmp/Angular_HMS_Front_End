import { TestBed } from '@angular/core/testing';

import { AddpropertyServiceService } from './admin-addproperty/addproperty-service.service';

describe('AddpropertyServiceService', () => {
  let service: AddpropertyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddpropertyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
