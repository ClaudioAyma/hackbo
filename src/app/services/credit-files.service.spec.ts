import { TestBed, inject } from '@angular/core/testing';

import { CreditFilesService } from './credit-files.service';

describe('CreditFilesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreditFilesService]
    });
  });

  it('should be created', inject([CreditFilesService], (service: CreditFilesService) => {
    expect(service).toBeTruthy();
  }));
});
