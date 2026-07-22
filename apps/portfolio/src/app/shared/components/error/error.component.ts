import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-error',
  imports: [MatIconModule],
  templateUrl: './error.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './error.component.scss',
})
export class ErrorComponent {
  readonly error = input<string | null>();
}
