import { Component, Type, input } from '@angular/core';

import { NgComponentOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lab-card',
  imports: [NgComponentOutlet, RouterLink],
  templateUrl: './lab-card.html',
  styleUrl: './lab-card.scss',
})
export class LabCardComponent {
  id = input.required<string>();
  title = input.required<string>();
  tag = input.required<string>();
  inputs = input<Record<string, unknown> | null>();
  component = input.required<Type<unknown> | null>();

  getInputs(): Record<string, unknown> {
    return this.inputs() ?? {};
  }
}
