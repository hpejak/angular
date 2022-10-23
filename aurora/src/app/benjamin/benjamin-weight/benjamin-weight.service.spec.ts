import { TestBed } from '@angular/core/testing';

import { BenjaminWeightService } from './benjamin-weight.service';

describe('BenjaminWeightService', () => {
  let service: BenjaminWeightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenjaminWeightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
