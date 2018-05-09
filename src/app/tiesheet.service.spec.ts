import { TestBed, inject } from '@angular/core/testing';

import { TiesheetService } from './tiesheet.service';

describe('TiesheetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TiesheetService]
    });
  });

  it('should be created', inject([TiesheetService], (service: TiesheetService) => {
    expect(service).toBeTruthy();
  }));
});
