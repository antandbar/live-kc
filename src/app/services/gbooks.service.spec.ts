import { TestBed } from '@angular/core/testing';

import { GbooksService } from './gbooks.service';

describe('GbooksService', () => {
  let service: GbooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GbooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
