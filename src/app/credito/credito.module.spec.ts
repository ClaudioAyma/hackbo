import { CreditoModule } from './credito.module';

describe('CreditoModule', () => {
  let creditoModule: CreditoModule;

  beforeEach(() => {
    creditoModule = new CreditoModule();
  });

  it('should create an instance', () => {
    expect(creditoModule).toBeTruthy();
  });
});
