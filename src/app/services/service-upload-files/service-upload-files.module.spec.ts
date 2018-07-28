import { ServiceUploadFilesModule } from './service-upload-files.module';

describe('ServiceUploadFilesModule', () => {
  let serviceUploadFilesModule: ServiceUploadFilesModule;

  beforeEach(() => {
    serviceUploadFilesModule = new ServiceUploadFilesModule();
  });

  it('should create an instance', () => {
    expect(serviceUploadFilesModule).toBeTruthy();
  });
});
