import { Directive, ElementRef, effect, inject, input } from '@angular/core';

import { setCssVars } from './css-vars.util';

@Directive({
  standalone: true,
})
export class CssVarsDirective {
  cssVars = input<Record<string, string>>();
  private el = inject(ElementRef);

  private readonly _ = effect(() => {
    const vars = this.cssVars();
    if (vars) setCssVars(vars, this.el);
  });
}
