import { TestBed } from '@angular/core/testing';

import { InscrireService } from './inscrire.service';

describe('InscrireService', () => {
  let service: InscrireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InscrireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
