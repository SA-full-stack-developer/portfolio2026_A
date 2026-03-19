export type Language = 'es' | 'en';

export interface LanguageOption {
  code: Language;
  label: string;
  flag: string;
}

export const AVAILABLE_LANGUAGES: LanguageOption[] = [
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
];

export const DEFAULT_LANGUAGE: Language = 'es';
export const FALLBACK_LANGUAGE: Language = 'en';
