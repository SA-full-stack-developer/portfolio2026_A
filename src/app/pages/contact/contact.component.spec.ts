import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { provideZonelessChangeDetection } from '@angular/core';

// Mock emailjs para evitar llamadas reales
jest.mock('@emailjs/browser', () => ({
  default: {
    send: jest.fn().mockResolvedValue({ status: 200 }),
  },
}));

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent, TranslateModule.forRoot(), NoopAnimationsModule],
      providers: [provideZonelessChangeDetection()],
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

  it('should be invalid when form is empty', () => {
    expect(component.isFormValid()).toBeFalsy();
  });

  it('should be valid when all fields are correct', () => {
    component.updateField('name', 'Gundam Pilot');
    component.updateField('email', 'test@domain.com');
    component.updateField('subject', 'Project Alpha');
    component.updateField('message', 'This is a long enough message for testing.');
    expect(component.isFormValid()).toBeTruthy();
  });

  it('should invalidate incorrect email format', () => {
    component.updateField('name', 'Valid Name');
    component.updateField('email', 'invalid-email');
    component.updateField('subject', 'Valid Subject');
    component.updateField('message', 'Valid message long enough');
    expect(component.isFormValid()).toBeFalsy();
  });
});
