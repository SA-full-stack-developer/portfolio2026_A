import { Type } from '@angular/core';

export interface LabConfig {
  tag: string;
  title: string;
  remoteName: string;
  exposedModule: string;
  exportName: string;
  component: Type<unknown> | null;
  inputs?: Record<string, unknown>;
}
