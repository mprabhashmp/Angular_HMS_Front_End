import { TestBed } from '@angular/core/testing';

import { AddcomplainServiceService } from './student-addcomplain/addcomplain.service.service';

describe('AddcomplainServiceService', () => {
  let service: AddcomplainServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddcomplainServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
