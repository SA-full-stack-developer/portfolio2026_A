import { ElementRef } from '@angular/core';

export function setCssVars(cssVars: Record<string, string>, el: ElementRef) {
  if (cssVars) {
    Object.entries(cssVars).forEach(([key, value]) => {
      el.nativeElement.style.setProperty(key, value);
    });
  }
}
