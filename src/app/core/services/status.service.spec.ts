import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Status } from '@core/models/status.model';
import { environment } from '@env/environment';
import { StatusService } from './status.service';

describe('StatusService', () => {
  let service: StatusService;
  let httpMock: HttpTestingController;
  let translate: TranslateService;

  const mockStatus: Status = { status: 'Online' };
  const apiUrl = `${environment.apiUrl}/status`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [StatusService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(StatusService);
    httpMock = TestBed.inject(HttpTestingController);
    translate = TestBed.inject(TranslateService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const req = httpMock.expectOne(apiUrl);
    req.flush(mockStatus);
    expect(service).toBeTruthy();
  });

  it('should load status correctly on initialization', () => {
    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');

    req.flush(mockStatus);

    expect(service.status()).toBe('Online');
  });

  it('should handle error and set default status', () => {
    spyOn(translate, 'instant').and.returnValue('Server Error');

    const req = httpMock.expectOne(apiUrl);

    req.flush('Error de servidor', { status: 500, statusText: 'Server Error' });

    expect(service.status()).toBe('');
  });

  it('should call loadStatus manually if needed', () => {
    const req1 = httpMock.expectOne(apiUrl);
    req1.flush(mockStatus);

    service.loadStatus();
    const req2 = httpMock.expectOne(apiUrl);
    req2.flush({ status: 'Offline' });

    expect(service.status()).toBe('Offline');
  });
});
