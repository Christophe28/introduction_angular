import { TestBed } from '@angular/core/testing';

import { AuthorsAppService } from './authors-app.service';

describe('AuthorsAppService', () => {
  let service: AuthorsAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorsAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
