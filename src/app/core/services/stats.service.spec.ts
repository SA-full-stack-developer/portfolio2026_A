import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { STATS_MOCK } from '@core/mocks/stats.mock';
import { environment } from '@env/environment';
import { StatsService } from './stats.service';

describe('StatsService', () => {
  let service: StatsService;
  let httpMock: HttpTestingController;
  const apiUrl = `${environment.apiUrl}/stats`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StatsService],
    });

    service = TestBed.inject(StatsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');

    req.flush([]);

    expect(service).toBeTruthy();
  });

  it('should load stats and update the signal', () => {
    const req = httpMock.expectOne(apiUrl);
    req.flush(STATS_MOCK);

    const stats = service.stats();
    expect(stats.length).toBe(4);
    expect(stats).toEqual(STATS_MOCK);
  });
});
