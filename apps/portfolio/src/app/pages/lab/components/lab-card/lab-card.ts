import { Component, Type, input } from '@angular/core';

import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-lab-card',
  imports: [NgComponentOutlet],
  templateUrl: './lab-card.html',
  styleUrl: './lab-card.scss',
})
export class LabCardComponent {
  title = input.required<string>();
  tag = input.required<string>();
  cssVars = input<Record<string, string> | null>();
  component = input.required<Type<unknown> | null>();
}
