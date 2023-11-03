import { TestBed } from '@angular/core/testing';

import { UserStudentServiceService } from './user-student-service.service';

describe('UserStudentServiceService', () => {
  let service: UserStudentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserStudentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
