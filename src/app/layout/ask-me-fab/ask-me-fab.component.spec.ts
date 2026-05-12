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
import { AskMeFabComponent } from './ask-me-fab.component';

class MockTranslateLoader implements TranslateLoader {
  getTranslation(_: string): Observable<any> {
    return of({});
  }
}

describe('AskMeFabComponent', () => {
  let component: AskMeFabComponent;
  let fixture: ComponentFixture<AskMeFabComponent>;
  let mockAiService: ReturnType<typeof createMockAiService>;
  let mockGsapService: ReturnType<typeof createMockGsapService>;

  beforeEach(async () => {
    mockAiService = createMockAiService();
    mockGsapService = createMockGsapService();

    await TestBed.configureTestingModule({
      imports: [
        AskMeFabComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader },
        }),
      ],
      providers: [
        { provide: AiService, useValue: mockAiService },
        { provide: GsapService, useValue: mockGsapService },
        { provide: PlatformService, useValue: createMockPlatformService(true) },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AskMeFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the panel open and closed', () => {
    component.toggle();

    expect(component.isOpen()).toBe(true);
    expect(mockGsapService.gsap.set).toHaveBeenCalled();

    component.toggle();

    expect(component.isOpen()).toBe(false);
    expect(mockGsapService.gsap.to).toHaveBeenCalled();
  });

  it('should send a question and append the response', () => {
    mockAiService.askMe.mockReturnValue(of('answer'));
    component.inputText.set('question');

    component.send();

    expect(mockAiService.askMe).toHaveBeenCalledWith({
      message: 'question',
      history: [{ role: 'user', content: 'question' }],
    });
    expect(component.history()).toEqual([
      { role: 'user', content: 'question' },
      { role: 'model', content: 'answer' },
    ]);
    expect(component.loading()).toBe(false);
  });

  it('should handle errors from askMe', () => {
    mockAiService.askMe.mockReturnValue(throwError(() => new Error('fail')));
    component.inputText.set('question');

    component.send();

    expect(component.error()).toBe('AI.ERROR.GENERIC');
    expect(component.loading()).toBe(false);
  });

  it('should send when pressing Enter without shift', () => {
    const event = {
      key: 'Enter',
      shiftKey: false,
      preventDefault: jest.fn(),
    } as unknown as KeyboardEvent;

    mockAiService.askMe.mockReturnValue(of('ok'));
    component.inputText.set('foo');

    component.onKeydown(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(mockAiService.askMe).toHaveBeenCalled();
  });
});
