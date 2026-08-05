import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer-links',
  imports: [RouterLink, TranslateModule],
  templateUrl: './footer-links.html',
  styleUrl: './footer-links.scss',
})
export class FooterLinksComponent {}
