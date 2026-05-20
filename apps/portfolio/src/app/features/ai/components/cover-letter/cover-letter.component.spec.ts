import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  createMockAiService,
  createMockGsapService,
  createMockPlatformService,
} from '@core/mocks/ai.service.mock';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, of, throwError } from 'rxjs';

import { AiService } from '@core/services/ai.service';
import { GsapService } from '@core/services/gsap.service';
import { PlatformService } from '@core/services/platform.service';
import { CoverLetterComponent } from './cover-letter.component';

class MockTranslateLoader implements TranslateLoader {
  getTranslation(_: string): Observable<any> {
    return of({});
  }
}

describe('CoverLetterComponent', () => {
  let component: CoverLetterComponent;
  let fixture: ComponentFixture<CoverLetterComponent>;
  let mockAiService: ReturnType<typeof createMockAiService>;

  beforeEach(async () => {
    mockAiService = createMockAiService();

    await TestBed.configureTestingModule({
      imports: [
        CoverLetterComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader },
        }),
      ],
      providers: [
        { provide: AiService, useValue: mockAiService },
        { provide: GsapService, useValue: createMockGsapService() },
        { provide: PlatformService, useValue: createMockPlatformService(true) },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CoverLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not generate when company or role are missing', () => {
    component.company.set('');
    component.role.set('');
    component.generate();

    expect(mockAiService.coverLetter).not.toHaveBeenCalled();
  });

  it('should send a cover letter request with jobDescription when provided', () => {
    mockAiService.coverLetter.mockReturnValue(of('result text'));
    component.company.set('TestCorp');
    component.role.set('Developer');
    component.jobDescription.set('Describe work');

    component.generate();

    expect(mockAiService.coverLetter).toHaveBeenCalledWith({
      company: 'TestCorp',
      role: 'Developer',
      jobDescription: 'Describe work',
    });
    expect(component.result()).toBe('result text');
    expect(component.loading()).toBe(false);
  });

  it('should omit jobDescription when it is blank', () => {
    mockAiService.coverLetter.mockReturnValue(of('result text'));
    component.company.set('TestCorp');
    component.role.set('Developer');
    component.jobDescription.set('   ');

    component.generate();

    expect(mockAiService.coverLetter).toHaveBeenCalledWith({
      company: 'TestCorp',
      role: 'Developer',
    });
  });

  it('should set an error when cover letter generation fails', () => {
    mockAiService.coverLetter.mockReturnValue(throwError(() => new Error('fail')));
    component.company.set('TestCorp');
    component.role.set('Developer');

    component.generate();

    expect(component.error()).toBe('AI.ERROR.GENERIC');
    expect(component.loading()).toBe(false);
  });

  it('should not copy when there is no result', () => {
    const clipboardWrite = jest.fn();
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: clipboardWrite },
      configurable: true,
    });

    component.result.set(null);
    component.copy();

    expect(clipboardWrite).not.toHaveBeenCalled();

    delete (navigator as any).clipboard;
  });

  it('should copy the result text to clipboard and reset copied after timeout', async () => {
    jest.useFakeTimers();
    const clipboardWrite = jest.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: clipboardWrite },
      configurable: true,
    });

    component.result.set('copy me');
    component.copy();
    await Promise.resolve();

    expect(clipboardWrite).toHaveBeenCalledWith('copy me');
    expect(component.copied()).toBe(true);

    jest.advanceTimersByTime(2000);
    expect(component.copied()).toBe(false);

    delete (navigator as any).clipboard;
    jest.useRealTimers();
  });

  it('should animate entrance with GSAP on root element in browser', () => {
    const gsapService = TestBed.inject(GsapService);
    expect(gsapService.gsap.from).toHaveBeenCalled();
    expect(gsapService.gsap.from).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        opacity: 0,
        y: 40,
        scrollTrigger: expect.objectContaining({
          toggleActions: 'play none none none',
          invalidateOnRefresh: true,
        }),
      }),
    );
  });

  it('should register scrollTrigger from GSAP for teardown', () => {
    expect(component['scrollTriggers'].length).toBeGreaterThan(0);
  });

  it('should kill scroll triggers on destroy', () => {
    const kill = jest.fn();
    component['scrollTriggers'] = [{ kill }] as typeof component['scrollTriggers'];
    fixture.destroy();
    expect(kill).toHaveBeenCalled();
  });

  it('should skip GSAP setup when not in browser', async () => {
    TestBed.resetTestingModule();
    mockAiService = createMockAiService();
    await TestBed.configureTestingModule({
      imports: [
        CoverLetterComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader },
        }),
      ],
      providers: [
        { provide: AiService, useValue: mockAiService },
        { provide: GsapService, useValue: createMockGsapService() },
        { provide: PlatformService, useValue: createMockPlatformService(false) },
      ],
    }).compileComponents();

    const ssFixture = TestBed.createComponent(CoverLetterComponent);
    const gsapService = TestBed.inject(GsapService);
    jest.clearAllMocks();
    ssFixture.detectChanges();
    await ssFixture.whenStable();

    expect(gsapService.gsap.from).not.toHaveBeenCalled();
    ssFixture.destroy();
  });
});
