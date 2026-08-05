import { Component, input } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-error',
  imports: [MatIconModule],
  templateUrl: './error.html',
  styleUrl: './error.scss',
})
export class ErrorComponent {
  readonly error = input<string | null>();
}
