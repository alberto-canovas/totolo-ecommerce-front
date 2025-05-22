import { TestBed } from '@angular/core/testing';

import { TotoloService } from './totolo.service';

describe('TotoloService', () => {
  let service: TotoloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotoloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
