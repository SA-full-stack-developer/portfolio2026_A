export type FeatureVisibility = 'public' | 'admin' | 'hidden';

export interface FeatureFlag {
  id: string;
  label: string;
  visibility: FeatureVisibility;
  description?: string;
}
