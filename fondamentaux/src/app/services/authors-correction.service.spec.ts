import { TestBed } from '@angular/core/testing';

import { AuthorsCorrectionService } from './authors-correction.service';

describe('AuthorsCorrectionService', () => {
  let service: AuthorsCorrectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorsCorrectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
