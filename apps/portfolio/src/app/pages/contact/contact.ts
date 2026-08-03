import {
  afterNextRender,
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  Injector,
  OnInit,
  QueryList,
  signal,
  ViewChildren,
} from '@angular/core';
import { email, form, FormField, minLength, required, submit } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BREADCRUMB_CONTACT, PAGE_SEO } from '@core/config/seo.config';
import { SeoService } from '@core/services/seo';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { GsapService, PlatformService } from '@shared-libs/services';

interface ContactForm {
  name: string;
  subject: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [
    FormField,
    TranslateModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit, AfterViewInit {
  private readonly seoService = inject(SeoService);
  private readonly gsapService = inject(GsapService);
  private readonly platformService = inject(PlatformService);
  private readonly translate = inject(TranslateService);
  private snackBar = inject(MatSnackBar);
  private readonly injector = inject(Injector);

  @ViewChildren('animRow') animRows!: QueryList<ElementRef>;

  botTrap = signal('');

  contactModel = signal<ContactForm>({
    name: '',
    subject: '',
    email: '',
    message: '',
  });

  contactForm = form(this.contactModel, (schema) => {
    required(schema.name);
    minLength(schema.name, 3);

    required(schema.subject);
    minLength(schema.subject, 3);

    required(schema.email);
    email(schema.email);

    required(schema.message);
    minLength(schema.message, 10);
  });

  ngOnInit(): void {
    this.seoService.update(PAGE_SEO['contact']);
    this.seoService.updateSchemas([BREADCRUMB_CONTACT]);
  }

  ngAfterViewInit(): void {
    if (!this.platformService.isBrowser) return;

    afterNextRender(
      () => {
        const gsap = this.gsapService.gsap;
        const cards = this.animRows.map((r) => r.nativeElement);

        gsap.from(cards, {
          opacity: 0,
          x: -100,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power2.out',
        });
      },
      { injector: this.injector },
    );
  }

  async onSubmit(event: Event) {
    event.preventDefault();

    if (this.botTrap() !== '') {
      return;
    }

    await submit(this.contactForm, async () => {
      const { default: emailjs } = await import('@emailjs/browser');

      const serviceID = 'service_tsklp4n';
      const templateID = 'template_4p83km7';
      const publicKey = '3EljapeH9l5XEDoNi';

      const templateParams = {
        from_name: this.contactModel().name,
        from_email: this.contactModel().email,
        subject: this.contactModel().subject,
        message: this.contactModel().message,
        to_name: 'Cristian',
      };

      try {
        await emailjs.send(serviceID, templateID, templateParams, publicKey);

        this.snackBar.open(this.translate.instant('CONTACT.SUCCESS'), '', { duration: 1000 });
        this.contactModel.set({ name: '', subject: '', email: '', message: '' });
        this.botTrap.set('');
      } catch (error) {
        const errorMessage =
          typeof error === 'string'
            ? error
            : error instanceof Error
              ? error.message
              : String(error);

        this.snackBar.open(this.translate.instant('CONTACT.ERROR') + errorMessage, '', {
          duration: 1000,
        });
      }
    });
  }
}
