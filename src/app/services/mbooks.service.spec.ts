import { TestBed } from '@angular/core/testing';

import { MbooksService } from './mbooks.service';

describe('MbooksService', () => {
  let service: MbooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MbooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
