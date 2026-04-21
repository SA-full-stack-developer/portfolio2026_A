import { Component, effect, input, signal } from '@angular/core';
import {
  OFFLINE,
  OFFLINE_COLOR,
  OFFLINE_OFFSET_COLOR,
  ONLINE_COLOR,
  ONLINE_OFFSET_COLOR,
} from '@core/constants/status.constants';

@Component({
  selector: 'app-status-dot',
  imports: [],
  templateUrl: './status-dot.component.html',
  styleUrl: './status-dot.component.scss',
})
export class StatusDotComponent {
  status = input<string>();

  selectedColor = signal<string>('');
  selectedOffsetColor = signal<string>('');

  constructor() {
    effect(() => {
      const statusChanged = this.status();

      if (statusChanged === OFFLINE) {
        this.selectedColor.set(OFFLINE_COLOR);
        this.selectedOffsetColor.set(OFFLINE_OFFSET_COLOR);
      } else {
        this.selectedColor.set(ONLINE_COLOR);
        this.selectedOffsetColor.set(ONLINE_OFFSET_COLOR);
      }
    });
  }
}
