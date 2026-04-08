import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `
    <svg [attr.width]="size()" [attr.height]="size()" aria-hidden="true" class="icon">
      <use [attr.href]="'/assets/icons/sprite.svg#ph-' + name()" />
    </svg>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        align-items: center;
      }
      svg {
        display: block;
        fill: currentColor;
      }
    `,
  ],
})
export class IconComponent {
  name = input.required<string>();
  size = input<number>(24);
}
