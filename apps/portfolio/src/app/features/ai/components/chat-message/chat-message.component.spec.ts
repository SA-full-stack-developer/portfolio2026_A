import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMessageComponent } from './chat-message.component';

describe('ChatMessageComponent', () => {
  let component: ChatMessageComponent;
  let fixture: ComponentFixture<ChatMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatMessageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatMessageComponent);
    component = fixture.componentInstance;
  });

  it('should create', async () => {
    component.message = (() => ({ role: 'user', content: 'initial' })) as any;
    fixture.detectChanges();
    await fixture.whenStable();

    expect(component).toBeTruthy();
  });

  it('should render a user message', async () => {
    component.message = (() => ({ role: 'user', content: 'Hello user' })) as any;
    fixture.detectChanges();
    await fixture.whenStable();

    const element = fixture.nativeElement.querySelector('.chat-message');
    expect(element.classList).toContain('chat-message--user');
    expect(element.textContent.trim()).toContain('Hello user');
  });

  it('should render a model message with the correct class', async () => {
    component.message = (() => ({ role: 'model', content: 'Model reply' })) as any;
    fixture.detectChanges();
    await fixture.whenStable();

    const element = fixture.nativeElement.querySelector('.chat-message');
    expect(element.classList).toContain('chat-message--model');
    expect(element.textContent.trim()).toContain('Model reply');
  });
});
