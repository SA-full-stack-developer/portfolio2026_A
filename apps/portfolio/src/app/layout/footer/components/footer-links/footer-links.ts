import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer-links',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './footer-links.html',
  styleUrl: './footer-links.scss',
})
export class FooterLinksComponent {}
