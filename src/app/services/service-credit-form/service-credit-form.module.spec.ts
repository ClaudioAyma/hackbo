import { ServiceCreditFormModule } from './service-credit-form.module';

describe('ServiceCreditFormModule', () => {
  let serviceCreditFormModule: ServiceCreditFormModule;

  beforeEach(() => {
    serviceCreditFormModule = new ServiceCreditFormModule();
  });

  it('should create an instance', () => {
    expect(serviceCreditFormModule).toBeTruthy();
  });
});
