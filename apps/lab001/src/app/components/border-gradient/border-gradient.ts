import { Component } from '@angular/core';
import { CssVarsDirective } from 'federation-utils';

@Component({
  selector: 'app-border-gradient',
  imports: [],
  hostDirectives: [
    {
      directive: CssVarsDirective,
      inputs: ['cssVars'],
    },
  ],
  templateUrl: './border-gradient.html',
  styleUrl: './border-gradient.scss',
})
export class BorderGradient {}
