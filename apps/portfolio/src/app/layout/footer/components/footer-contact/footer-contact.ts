import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer-contact',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './footer-contact.html',
  styleUrl: './footer-contact.scss',
})
export class FooterContactComponent {}
