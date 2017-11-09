import { TestBed, inject } from '@angular/core/testing';

import { SqlserverService } from './sqlserver.service';

describe('SqlserverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SqlserverService]
    });
  });

  it('should be created', inject([SqlserverService], (service: SqlserverService) => {
    expect(service).toBeTruthy();
  }));
});
