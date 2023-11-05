import { TestBed } from '@angular/core/testing';

import { StudentViewWardenService } from './student-view-warden.service';

describe('StudentViewWardenService', () => {
  let service: StudentViewWardenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentViewWardenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
