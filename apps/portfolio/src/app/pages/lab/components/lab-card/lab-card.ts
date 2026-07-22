import { Component, Type, input, ChangeDetectionStrategy } from '@angular/core';

import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-lab-card',
  imports: [NgComponentOutlet],
  templateUrl: './lab-card.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './lab-card.scss',
})
export class LabCardComponent {
  title = input.required<string>();
  tag = input.required<string>();
  inputs = input<Record<string, any> | null>();
  component = input.required<Type<unknown> | null>();

  getInputs(): Record<string, any> {
    return this.inputs() ?? {};
  }
}
