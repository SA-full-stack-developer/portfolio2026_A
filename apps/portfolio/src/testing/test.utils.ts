import { Provider, Type } from '@angular/core';

import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';

export function setupTestBed(declarations: Type<unknown>[] = [], providers: Provider[] = []) {
  return TestBed.configureTestingModule({
    imports: declarations,
    providers: [provideZonelessChangeDetection(), ...providers],
  });
}
