import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SeoService } from '@core/services/seo';
import { TranslateModule } from '@ngx-translate/core';
import { GsapService, PlatformService } from '@shared-libs/services';

import { ContactComponent } from './contact';

jest.mock('@emailjs/browser', () => ({
  __esModule: true,
  default: { send: jest.fn() },
  send: jest.fn(),
}));

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let snackBar: { open: jest.Mock };

  beforeEach(async () => {
    snackBar = { open: jest.fn() };

    await TestBed.configureTestingModule({
      imports: [ContactComponent, TranslateModule.forRoot()],
      providers: [
        { provide: SeoService, useValue: { update: jest.fn(), updateSchemas: jest.fn() } },
        { provide: GsapService, useValue: { gsap: { from: jest.fn() } } },
        { provide: PlatformService, useValue: { isBrowser: false } },
      ],
    })
      .overrideProvider(MatSnackBar, { useValue: snackBar })
      .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when all fields are empty', () => {
    expect(component.contactForm().valid()).toBe(false);
  });

  it('should mark name as required', () => {
    component.contactModel.update((m) => ({ ...m, name: '' }));
    fixture.detectChanges();
    expect(
      component.contactForm
        .name()
        .errors()
        .some((e) => e.kind === 'required'),
    ).toBe(true);
  });

  it('should mark name invalid below minLength', () => {
    component.contactModel.update((m) => ({ ...m, name: 'ab' }));
    fixture.detectChanges();
    expect(
      component.contactForm
        .name()
        .errors()
        .some((e) => e.kind === 'minLength'),
    ).toBe(true);
  });

  it('should mark email invalid with a bad format', () => {
    component.contactModel.update((m) => ({ ...m, email: 'not-an-email' }));
    fixture.detectChanges();
    expect(
      component.contactForm
        .email()
        .errors()
        .some((e) => e.kind === 'email'),
    ).toBe(true);
  });

  it('should be valid with correct data', () => {
    component.contactModel.set({
      name: 'Kriz',
      subject: 'Hola',
      email: 'kriz@example.com',
      message: 'Este es un mensaje de prueba.',
    });
    fixture.detectChanges();
    expect(component.contactForm().valid()).toBe(true);
  });

  it('should not submit when the form is invalid', async () => {
    const emailjs = (await import('@emailjs/browser')).default;

    component.contactModel.set({ name: '', subject: '', email: '', message: '' });
    fixture.detectChanges();

    await component.onSubmit(new Event('submit'));

    expect(emailjs.send).not.toHaveBeenCalled();
  });

  it('should not submit when the honeypot is filled', async () => {
    const emailjs = (await import('@emailjs/browser')).default;

    component.contactModel.set({
      name: 'Kriz',
      subject: 'Hola',
      email: 'kriz@example.com',
      message: 'Este es un mensaje de prueba.',
    });
    component.botTrap.set('spam');
    fixture.detectChanges();

    await component.onSubmit(new Event('submit'));

    expect(emailjs.send).not.toHaveBeenCalled();
  });

  it('should send the email and reset the form on success', async () => {
    const emailjs = (await import('@emailjs/browser')).default;
    (emailjs.send as jest.Mock).mockResolvedValue({ status: 200 });

    component.contactModel.set({
      name: 'Kriz',
      subject: 'Hola',
      email: 'kriz@example.com',
      message: 'Este es un mensaje de prueba.',
    });
    fixture.detectChanges();

    console.log('DEBUG valid', component.contactForm().valid(), 'botTrap', component.botTrap());
    console.log('DEBUG component snackBar is mock', (component as any).snackBar === snackBar);
    console.log(
      'DEBUG emailjs.send',
      typeof emailjs.send,
      emailjs.send.mock?.name || 'no mock name',
    );
    console.log('DEBUG snackBar open calls before', snackBar.open.mock.calls.length);

    await component.onSubmit(new Event('submit'));

    console.log('DEBUG emailjs.send calls', (emailjs.send as jest.Mock).mock.calls.length);
    console.log('DEBUG snackBar open calls after', snackBar.open.mock.calls.length);
    console.log('DEBUG snackBar open args', snackBar.open.mock.calls);

    expect(emailjs.send).toHaveBeenCalledWith(
      'service_tsklp4n',
      'template_4p83km7',
      expect.objectContaining({ from_name: 'Kriz', from_email: 'kriz@example.com' }),
      '3EljapeH9l5XEDoNi',
    );
    expect(snackBar.open).toHaveBeenCalledWith(
      expect.any(String),
      '',
      expect.objectContaining({ duration: 1000 }),
    );
    expect(component.contactModel()).toEqual({ name: '', subject: '', email: '', message: '' });
    expect(component.botTrap()).toBe('');
  });

  it('should show an error snackbar when the send fails', async () => {
    const emailjs = (await import('@emailjs/browser')).default;
    (emailjs.send as jest.Mock).mockRejectedValue(new Error('Network error'));

    component.contactModel.set({
      name: 'Kriz',
      subject: 'Hola',
      email: 'kriz@example.com',
      message: 'Este es un mensaje de prueba.',
    });
    fixture.detectChanges();

    await component.onSubmit(new Event('submit'));

    expect(snackBar.open).toHaveBeenCalledWith(
      expect.stringContaining('Network error'),
      '',
      expect.objectContaining({ duration: 1000 }),
    );
  });

  it('submitting() should be true while sending and false after', async () => {
    const emailjs = (await import('@emailjs/browser')).default;
    let resolveSend!: () => void;
    (emailjs.send as jest.Mock).mockReturnValue(
      new Promise<void>((resolve) => {
        resolveSend = () => resolve();
      }),
    );

    component.contactModel.set({
      name: 'Kriz',
      subject: 'Hola',
      email: 'kriz@example.com',
      message: 'Este es un mensaje de prueba.',
    });
    fixture.detectChanges();

    const submitPromise = component.onSubmit(new Event('submit'));
    expect(component.contactForm().submitting()).toBe(true);

    resolveSend();
    await submitPromise;

    expect(component.contactForm().submitting()).toBe(false);
  });
});
