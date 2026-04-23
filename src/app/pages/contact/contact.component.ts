import { AfterViewInit, Component, ElementRef, computed, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Form } from '@core/models/form.model';
import { GsapService } from '@core/services/gsap.service';
import { PlatformService } from '@core/services/platform.service';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [
    FormsModule,
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
export class ContactComponent implements AfterViewInit {
  private readonly gsapService = inject(GsapService);
  private readonly el = inject(ElementRef);
  private readonly platformService = inject(PlatformService);
  private readonly translate = inject(TranslateService);
  private snackBar = inject(MatSnackBar);
  botTrap = '';
  formData = signal<Form>({
    name: '',
    subject: '',
    email: '',
    message: '',
  });

  isLoading = signal(false);

  isFormValid = computed(() => {
    const data = this.formData();
    // Añadimos el encadenamiento opcional ?. y valores por defecto ''
    const name = data?.name ?? '';
    const email = data?.email ?? '';
    const subject = data?.subject ?? '';
    const message = data?.message ?? '';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return (
      name.trim().length >= 3 &&
      emailRegex.test(email) &&
      subject.trim().length >= 3 &&
      message.trim().length >= 10
    );
  });

  ngAfterViewInit(): void {
    if (!this.platformService.isBrowser) return;

    const gsap = this.gsapService.gsap;
    const cards = this.el.nativeElement.querySelectorAll('.contact--row');

    gsap.from(cards, {
      opacity: 0,
      x: -100,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power2.out',
    });
  }

  updateField(field: string, value: string) {
    this.formData.update((prev) => ({ ...prev, [field]: value }));
  }

  async onSubmit(form: NgForm) {
    if (this.botTrap !== '') {
      return;
    }
    if (this.isFormValid()) {
      this.isLoading.set(true);

      const serviceID = 'service_tsklp4n';
      const templateID = 'template_4p83km7';
      const publicKey = '3EljapeH9l5XEDoNi';

      const templateParams = {
        from_name: this.formData().name,
        from_email: this.formData().email,
        subject: this.formData().subject,
        message: this.formData().message,
        to_name: 'Cristian',
      };

      try {
        await emailjs.send(serviceID, templateID, templateParams, publicKey);

        this.snackBar.open(this.translate.instant('CONTACT.SUCCESS'), '', { duration: 1000 });
        form.resetForm();
        this.formData.set({ name: '', subject: '', email: '', message: '' });
        this.botTrap = '';
      } catch (error) {
        this.snackBar.open(this.translate.instant('CONTACT.ERROR') + error, '', { duration: 1000 });
      } finally {
        this.isLoading.set(false);
      }
    }
  }
}
