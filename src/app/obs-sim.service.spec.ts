import { TestBed } from '@angular/core/testing';

import { ObsSimService } from './obs-sim.service';

describe('ObsSimService', () => {
  let service: ObsSimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObsSimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
