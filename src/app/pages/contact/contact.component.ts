import { Component, computed, inject, signal } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Form } from '@core/models/form.model';
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
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      data.name.trim().length >= 3 &&
      emailRegex.test(data.email) &&
      data.subject.trim().length >= 3 &&
      data.message.trim().length >= 10
    );
  });

  updateField(field: string, value: string) {
    this.formData.update((prev) => ({ ...prev, [field]: value }));
  }

  async onSubmit() {
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

        this.snackBar.open(this.translate.instant('CONTACT.SUCCESS'));
        this.formData.set({ name: '', subject: '', email: '', message: '' });
      } catch (error) {
        this.snackBar.open(this.translate.instant('CONTACT.ERROR') + error);
      } finally {
        this.isLoading.set(false);
      }
    }
  }
}
