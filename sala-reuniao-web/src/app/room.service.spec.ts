import { TestBed } from '@angular/core/testing';

import { salaService } from './sala.service';

describe('salaService', () => {
  let service: salaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(salaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
