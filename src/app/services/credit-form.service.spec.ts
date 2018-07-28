import { TestBed, inject } from '@angular/core/testing';

import { CreditFormService } from './credit-form.service';

describe('CreditFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreditFormService]
    });
  });

  it('should be created', inject([CreditFormService], (service: CreditFormService) => {
    expect(service).toBeTruthy();
  }));
});
