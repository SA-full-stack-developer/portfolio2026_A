import { NgComponentOutlet } from '@angular/common';
import { Component, OnInit, Type, input } from '@angular/core';

@Component({
  selector: 'app-lab-card',
  imports: [NgComponentOutlet],
  templateUrl: './lab-card.html',
  styleUrl: './lab-card.scss',
})
export class LabCardComponent implements OnInit {
  title = input.required<string>();
  tag = input.required<string>();
  cssVars = input<Record<string, string> | null>();
  component = input.required<Type<unknown> | null>();

  ngOnInit(): void {}
}
