import { Component, ElementRef, effect, inject, input } from '@angular/core';

@Component({
  selector: 'app-border-gradient',
  imports: [],
  templateUrl: './border-gradient.html',
  styleUrl: './border-gradient.scss',
})
export class BorderGradient {
  cssVars = input<Record<string, string>>();

  private el = inject(ElementRef);

  constructor() {
    effect(() => {
      const vars = this.cssVars();
      if (vars) {
        Object.entries(vars).forEach(([key, value]) => {
          this.el.nativeElement.style.setProperty(key, value);
        });
      }
    });
  }
}
