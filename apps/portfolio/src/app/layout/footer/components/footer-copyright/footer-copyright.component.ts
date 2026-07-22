import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer-copyright',
  imports: [RouterLink, TranslateModule],
  templateUrl: './footer-copyright.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './footer-copyright.component.scss',
})
export class FooterCopyrightComponent {
  public currentYear: number = new Date().getFullYear();
}
