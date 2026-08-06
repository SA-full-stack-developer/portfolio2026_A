import { Component, signal } from '@angular/core';

import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer-copyright',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './footer-copyright.html',
  styleUrl: './footer-copyright.scss',
})
export class FooterCopyrightComponent {
  currentYear = signal<number>(new Date().getFullYear());
}
