import { TestBed } from '@angular/core/testing';

import { ViewcomplainServiceService } from './student-viewcomplain/viewcomplain.service.service';

describe('ViewcomplainServiceService', () => {
  let service: ViewcomplainServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewcomplainServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
