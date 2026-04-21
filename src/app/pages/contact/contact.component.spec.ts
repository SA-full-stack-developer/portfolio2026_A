import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent, TranslateModule.forRoot(), BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty form data', () => {
    const initialData = component.formData();
    expect(initialData).toEqual({ name: '', subject: '', email: '', message: '' });
  });

  it('should validate form correctly (isFormValid)', () => {
    expect(component.isFormValid()).toBeFalsy();

    component.updateField('name', 'Gundam Pilot');
    component.updateField('email', 'test@domain.com');
    component.updateField('subject', 'Project Alpha');
    component.updateField('message', 'This is a long enough message for testing.');

    expect(component.isFormValid()).toBeFalsy();
  });

  it('should invalidate incorrect email format', () => {
    component.updateField('name', 'Valid Name');
    component.updateField('email', 'invalid-email');
    component.updateField('subject', 'Valid Subject');
    component.updateField('message', 'Valid message long enough');

    expect(component.isFormValid()).toBeFalsy();
  });

  it('should set isLoading to true on submit', (done) => {
    component.updateField('name', 'Test User');
    component.updateField('email', 'test@test.com');
    component.updateField('subject', 'Test Subject');
    component.updateField('message', 'Test message with more than ten characters');

    component.onSubmit();
    expect(component.isLoading()).toBeTruthy();
    setTimeout(() => {
      expect(component.isLoading()).toBeFalsy();
      expect(component.formData().name).toBe('');
      done();
    }, 2100);
  });
});
