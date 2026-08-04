import { Service } from '@angular/core';
import QRCode from 'qrcode';

@Service()
export class QrCode {
  async generate(text: string): Promise<string> {
    return QRCode.toDataURL(text, {
      width: 240,
      margin: 1,
      color: { dark: '#1a1a1a', light: '#ffffff00' },
    });
  }
}
