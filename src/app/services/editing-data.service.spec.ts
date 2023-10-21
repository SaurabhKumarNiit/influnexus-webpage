import { TestBed } from '@angular/core/testing';

import { EditingDataService } from './editing-data.service';

describe('EditingDataService', () => {
  let service: EditingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
