import { TestBed, inject } from '@angular/core/testing';

import { MatchesListService } from './matches-list.service';

describe('MatchesListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatchesListService]
    });
  });

  it('should be created', inject([MatchesListService], (service: MatchesListService) => {
    expect(service).toBeTruthy();
  }));
});
