import { Component, injectAsync, onIdle, signal } from '@angular/core';

@Component({
  selector: 'app-qr-generator',
  standalone: true,
  templateUrl: './qr-generator.html',
  styleUrl: './qr-generator.scss',
})
export class QrGenerator {
  protected readonly text = signal('https://csrangulardeveloper.nom.es/');
  protected readonly qrDataUrl = signal<string | null>(null);
  protected readonly loading = signal(false);

  private readonly loadQrCode = injectAsync(
    () => import('../../services/qr-code/qr-code').then((m) => m.QrCode),
    { prefetch: onIdle },
  );

  protected async generate(): Promise<void> {
    this.loading.set(true);
    try {
      const qrCode = await this.loadQrCode();
      this.qrDataUrl.set(await qrCode.generate(this.text()));
    } finally {
      this.loading.set(false);
    }
  }
}
