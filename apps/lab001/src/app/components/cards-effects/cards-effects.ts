import { Component, ElementRef, effect, inject, input, signal } from '@angular/core';

import { setCssVars } from 'federation-utils';

@Component({
  selector: 'app-card-effects',
  imports: [],
  templateUrl: './cards-effects.html',
  styleUrl: './cards-effects.scss',
})
export class CardEffects {
  cssVars = input<Record<string, string>>();
  el = inject(ElementRef);
  tilt = signal<string>('');
  transition = signal<string>('');
  spotlight = signal<string>('');

  private readonly _ = effect(() => {
    const vars = this.cssVars();
    if (vars) setCssVars(vars, this.el);
  });

  getCursor(e: MouseEvent) {
    this.transition.set('');
    const bounding = this.el.nativeElement.getBoundingClientRect();
    const x = e.offsetX / bounding.width;
    const y = e.offsetY / bounding.height;

    const rotateY = (x * 2 - 1) * 15;
    const rotateX = (y * 2 - 1) * 15;
    this.tilt.set(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);

    const centerX = x * 100;
    const centerY = y * 100;
    this.spotlight.set(`radial-gradient(circle at ${centerX}% ${centerY}%, var(--spotlight-color)`);
  }

  resetCursor() {
    this.transition.set('all 0.3s ease');
    this.tilt.set('');
    this.spotlight.set('');
  }
}
