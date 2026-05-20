import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer-links',
  imports: [RouterLink, TranslateModule],
  templateUrl: './footer-links.component.html',
  styleUrl: './footer-links.component.scss',
})
export class FooterLinksComponent {}
