import { TestBed } from '@angular/core/testing';

import { CatageoryService } from './catageory.service';

describe('CatageoryService', () => {
  let service: CatageoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatageoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
