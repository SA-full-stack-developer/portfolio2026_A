import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createMockGsapService, createMockPlatformService } from '@core/mocks/ai.service.mock';

import { provideZonelessChangeDetection } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GsapService } from '@core/services/gsap.service';
import { PlatformService } from '@core/services/platform.service';
import { TranslateModule } from '@ngx-translate/core';
import { ContactComponent } from './contact.component';

// Mock emailjs para evitar llamadas reales
jest.mock('@emailjs/browser', () => ({
  __esModule: true,
  default: {
    send: jest.fn().mockResolvedValue({ status: 200 }),
  },
}));

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let mockPlatformService: ReturnType<typeof createMockPlatformService>;
  let mockGsapService: ReturnType<typeof createMockGsapService>;
  let mockSnackBar: { open: jest.Mock };

  beforeEach(async () => {
    jest.clearAllMocks();
    mockPlatformService = createMockPlatformService(true);
    mockGsapService = createMockGsapService();
    mockSnackBar = { open: jest.fn() };

    await TestBed.configureTestingModule({
      imports: [ContactComponent, TranslateModule.forRoot(), NoopAnimationsModule],
      providers: [
        provideZonelessChangeDetection(),
        { provide: PlatformService, useValue: mockPlatformService },
        { provide: GsapService, useValue: mockGsapService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    component['snackBar'] = mockSnackBar;
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

  it('should not run GSAP animation on non-browser platform', async () => {
    mockPlatformService.isBrowser = false;
    mockGsapService.gsap.from.mockClear();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(mockGsapService.gsap.from).not.toHaveBeenCalled();
  });

  it('should submit the form and reset on success', async () => {
    component.updateField('name', 'Valid Name');
    component.updateField('email', 'test@example.com');
    component.updateField('subject', 'Hello');
    component.updateField('message', 'This message is long enough');

    const mockForm = { resetForm: jest.fn() } as unknown as any;
    await component.onSubmit(mockForm);

    expect(mockForm.resetForm).toHaveBeenCalled();
    expect(component.formData()).toEqual({ name: '', subject: '', email: '', message: '' });
    expect(component.isLoading()).toBe(false);
  });

  it('should show error snackbar when emailjs send fails', async () => {
    component.updateField('name', 'Valid Name');
    component.updateField('email', 'test@example.com');
    component.updateField('subject', 'Hello');
    component.updateField('message', 'This message is long enough');

    expect(component.formData().name).toBe('Valid Name');
    expect(component.formData().email).toBe('test@example.com');
    expect(component.isFormValid()).toBe(true);

    const mockForm = { resetForm: jest.fn() } as unknown as any;
    const emailjs = await import('@emailjs/browser');
    emailjs.default.send.mockClear();
    emailjs.default.send.mockRejectedValueOnce(new Error('Network issue'));

    await component.onSubmit(mockForm);

    expect(emailjs.default.send).toHaveBeenCalledTimes(1);
    expect(mockForm.resetForm).not.toHaveBeenCalled();
    expect(component.isLoading()).toBe(false);
    expect(mockSnackBar.open).toHaveBeenCalledWith(expect.stringContaining('CONTACT.ERROR'), '', {
      duration: 1000,
    });
  });

  it('should not submit when botTrap is filled', async () => {
    component.botTrap = 'spam';
    component.updateField('name', 'Valid Name');
    component.updateField('email', 'test@example.com');
    component.updateField('subject', 'Hello');
    component.updateField('message', 'This message is long enough');

    const mockForm = { resetForm: jest.fn() } as unknown as any;
    await component.onSubmit(mockForm);

    expect(mockForm.resetForm).not.toHaveBeenCalled();
    expect(component.isLoading()).toBe(false);
  });
});
