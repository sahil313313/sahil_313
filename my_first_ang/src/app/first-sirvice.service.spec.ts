import { TestBed } from '@angular/core/testing';

import { FirstSirviceService } from './first-sirvice.service';

describe('FirstSirviceService', () => {
  let service: FirstSirviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstSirviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
