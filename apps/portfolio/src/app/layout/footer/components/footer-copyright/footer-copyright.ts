import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer-copyright',
  imports: [RouterLink, TranslateModule],
  templateUrl: './footer-copyright.html',
  styleUrl: './footer-copyright.scss',
})
export class FooterCopyrightComponent {
  public currentYear = signal<number>(new Date().getFullYear());
}
