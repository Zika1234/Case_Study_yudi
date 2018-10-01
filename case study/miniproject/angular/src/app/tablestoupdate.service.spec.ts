import { TestBed, inject } from '@angular/core/testing';

import { TablestoupdateService } from './tablestoupdate.service';

describe('TablestoupdateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TablestoupdateService]
    });
  });

  it('should be created', inject([TablestoupdateService], (service: TablestoupdateService) => {
    expect(service).toBeTruthy();
  }));
});
