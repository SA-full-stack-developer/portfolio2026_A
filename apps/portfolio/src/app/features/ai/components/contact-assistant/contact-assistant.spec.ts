import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  createMockAiService,
  createMockGsapService,
  createMockPlatformService,
} from '@core/mocks/ai.service.mock';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { GsapService, PlatformService } from '@shared-libs/services';
import { Observable, of, throwError } from 'rxjs';

import { AiService } from '@core/services/ai';
import { ContactAssistantComponent } from './contact-assistant';

class MockTranslateLoader implements TranslateLoader {
  getTranslation(_: string): Observable<any> {
    return of({});
  }
}

describe('ContactAssistantComponent', () => {
  let component: ContactAssistantComponent;
  let fixture: ComponentFixture<ContactAssistantComponent>;
  let mockAiService: ReturnType<typeof createMockAiService>;

  beforeEach(async () => {
    mockAiService = createMockAiService();

    await TestBed.configureTestingModule({
      imports: [
        ContactAssistantComponent,
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

    fixture = TestBed.createComponent(ContactAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send a message and receive a model reply', () => {
    const container = fixture.nativeElement.querySelector('.contact-assistant__messages');
    Object.defineProperty(container, 'scrollHeight', { value: 200, configurable: true });

    mockAiService.contactAssistant.mockReturnValue(of('assistant reply'));
    component.inputText.set('help');

    component.send();

    expect(mockAiService.contactAssistant).toHaveBeenCalledWith({
      message: 'help',
      history: [{ role: 'user', content: 'help' }],
    });
    expect(component.history()).toEqual([
      { role: 'user', content: 'help' },
      { role: 'model', content: 'assistant reply' },
    ]);
    expect(component.error()).toBeNull();
    expect(component.loading()).toBe(false);
    expect(container.scrollTop).toBe(200);
  });

  it('should set an error when the assistant call fails', () => {
    mockAiService.contactAssistant.mockReturnValue(throwError(() => new Error('boom')));
    component.inputText.set('help');

    component.send();

    expect(component.error()).toBe('AI.ERROR.GENERIC');
    expect(component.loading()).toBe(false);
  });

  it('should not send when the input is empty', () => {
    component.inputText.set('');

    component.send();

    expect(mockAiService.contactAssistant).not.toHaveBeenCalled();
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
    expect(component['scrollTriggers']().length).toBeGreaterThan(0);
  });

  it('should update inputText when onInput is called', () => {
    component.onInput('hello');
    expect(component.inputText()).toBe('hello');
  });

  it('should send when pressing Enter without shift', () => {
    const event = {
      key: 'Enter',
      shiftKey: false,
      preventDefault: jest.fn(),
    } as unknown as KeyboardEvent;

    mockAiService.contactAssistant.mockReturnValue(of('ok'));
    component.inputText.set('question');

    component.onKeydown(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(mockAiService.contactAssistant).toHaveBeenCalled();
  });

  it('should return early from scrollToBottom when messages container is absent', () => {
    component['messagesContainer'] = undefined as unknown as typeof component.messagesContainer;
    expect(() => component['scrollToBottom']()).not.toThrow();
  });

  it('should kill scroll triggers on destroy', () => {
    const kill = jest.fn();
    component['scrollTriggers'].set([{ kill } as any]);
    fixture.destroy();
    expect(kill).toHaveBeenCalled();
  });

  it('should skip GSAP setup when not in browser', async () => {
    TestBed.resetTestingModule();
    mockAiService = createMockAiService();
    await TestBed.configureTestingModule({
      imports: [
        ContactAssistantComponent,
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

    const ssFixture = TestBed.createComponent(ContactAssistantComponent);
    const gsapService = TestBed.inject(GsapService);
    jest.clearAllMocks();
    ssFixture.detectChanges();
    await ssFixture.whenStable();

    expect(gsapService.gsap.from).not.toHaveBeenCalled();
    ssFixture.destroy();
  });
});
