import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BREADCRUMB_AI, PAGE_SEO } from '@core/config/seo.config';
import {
  createMockAiService,
  createMockGsapService,
  createMockPlatformService,
} from '@core/mocks/ai.service.mock';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { GsapService, PlatformService } from '@shared-libs/services';
import { Observable, of } from 'rxjs';

import { AiService } from '@core/services/ai.service';
import { SeoService } from '@core/services/seo.service';
import { AiComponent } from './ai.component';

class MockTranslateLoader implements TranslateLoader {
  getTranslation(_: string): Observable<any> {
    return of({});
  }
}

const mockSeoService = {
  update: jest.fn(),
  updateSchemas: jest.fn(),
};

describe('AiComponent', () => {
  let component: AiComponent;
  let fixture: ComponentFixture<AiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AiComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader },
        }),
      ],
      providers: [
        { provide: SeoService, useValue: mockSeoService },
        { provide: AiService, useValue: createMockAiService() },
        { provide: GsapService, useValue: createMockGsapService() },
        { provide: PlatformService, useValue: createMockPlatformService(false) },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update SEO and schemas on init', () => {
    component.ngOnInit();

    expect(mockSeoService.update).toHaveBeenCalledWith(PAGE_SEO['ai']);
    expect(mockSeoService.updateSchemas).toHaveBeenCalledWith([BREADCRUMB_AI]);
  });
});
