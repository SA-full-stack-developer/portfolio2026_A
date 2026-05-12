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
import { ContactAssistantComponent } from './contact-assistant.component';

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
        { provide: PlatformService, useValue: createMockPlatformService(false) },
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
});
