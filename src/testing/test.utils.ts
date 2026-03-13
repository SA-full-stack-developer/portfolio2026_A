import { TestBed } from '@angular/core/testing';
import { Type } from '@angular/core';
import { provideZonelessChangeDetection } from '@angular/core';

export function setupTestBed(declarations: Type<any>[] = [], providers: any[] = []) {
  return TestBed.configureTestingModule({
    imports: declarations,
    providers: [provideZonelessChangeDetection(), ...providers],
  });
}
