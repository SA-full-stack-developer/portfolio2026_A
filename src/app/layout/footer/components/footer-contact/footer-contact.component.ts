import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer-contact',
  imports: [RouterLink, TranslateModule],
  templateUrl: './footer-contact.component.html',
  styleUrl: './footer-contact.component.scss',
})
export class FooterContactComponent {}
