import { TestBed } from '@angular/core/testing';

import { StudentResolveServiceService } from './student-resolve-service.service';

describe('StudentResolveServiceService', () => {
  let service: StudentResolveServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentResolveServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
