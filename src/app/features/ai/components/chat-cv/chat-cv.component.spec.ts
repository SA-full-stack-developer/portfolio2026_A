import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  createMockAiService,
  createMockGsapService,
  createMockPlatformService,
} from '@core/mocks/ai.service.mock';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, of, throwError } from 'rxjs';

import { By } from '@angular/platform-browser';
import { AiService } from '@core/services/ai.service';
import { GsapService } from '@core/services/gsap.service';
import { PlatformService } from '@core/services/platform.service';
import { ChatCvComponent } from './chat-cv.component';

class MockTranslateLoader implements TranslateLoader {
  getTranslation(_: string): Observable<any> {
    return of({});
  }
}

describe('ChatCvComponent', () => {
  let component: ChatCvComponent;
  let fixture: ComponentFixture<ChatCvComponent>;
  let mockAiService: ReturnType<typeof createMockAiService>;

  beforeEach(async () => {
    mockAiService = createMockAiService();

    await TestBed.configureTestingModule({
      imports: [
        ChatCvComponent,
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

    fixture = TestBed.createComponent(ChatCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not send when input is blank', () => {
    component.inputText.set('   ');

    component.send();

    expect(mockAiService.chatCv).not.toHaveBeenCalled();
    expect(component.loading()).toBe(false);
  });

  it('should send chat message and append model response', () => {
    const container = fixture.nativeElement.querySelector('.chat-cv__messages');
    Object.defineProperty(container, 'scrollHeight', { value: 250, configurable: true });

    mockAiService.chatCv.mockReturnValue(of('model reply'));
    component.inputText.set('hello');

    component.send();

    expect(mockAiService.chatCv).toHaveBeenCalledWith({
      message: 'hello',
      history: [{ role: 'user', content: 'hello' }],
    });
    expect(component.history()).toEqual([
      { role: 'user', content: 'hello' },
      { role: 'model', content: 'model reply' },
    ]);
    expect(component.loading()).toBe(false);
    expect(component.error()).toBeNull();
    expect(container.scrollTop).toBe(250);
  });

  it('should show an error when the chat API fails', () => {
    mockAiService.chatCv.mockReturnValue(throwError(() => new Error('network')));
    component.inputText.set('hi');

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

    mockAiService.chatCv.mockReturnValue(of('ok'));
    component.inputText.set('input');

    component.onKeydown(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(mockAiService.chatCv).toHaveBeenCalled();
  });

  it('should render the empty placeholder text for no history', () => {
    component.history.set([]);
    fixture.detectChanges();

    const empty = fixture.debugElement.query(By.css('.chat-cv__empty'));
    expect(empty).toBeTruthy();
  });
});
