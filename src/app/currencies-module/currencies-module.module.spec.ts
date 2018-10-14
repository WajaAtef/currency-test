import { CurrenciesModuleModule } from './currencies-module.module';

describe('CurrenciesModuleModule', () => {
  let currenciesModuleModule: CurrenciesModuleModule;

  beforeEach(() => {
    currenciesModuleModule = new CurrenciesModuleModule();
  });

  it('should create an instance', () => {
    expect(currenciesModuleModule).toBeTruthy();
  });
});
