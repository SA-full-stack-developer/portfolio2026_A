import { Component, HostListener, computed, inject, signal } from '@angular/core';

import { Language } from '@core/models/language';
import { LanguageService } from '@core/services/language';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss',
})
export class LanguageSwitcherComponent {
  private readonly languageService = inject(LanguageService);

  readonly isOpen = signal(false);
  readonly currentOption = computed(() => this.languageService.currentLanguageOption());
  readonly otherLanguages = computed(() =>
    this.languageService.availableLanguages.filter(
      (l) => l.code !== this.languageService.currentLang(),
    ),
  );

  toggle(): void {
    this.isOpen.update((v) => !v);
  }

  close(): void {
    this.isOpen.set(false);
  }

  selectLanguage(code: Language): void {
    this.languageService.setLanguage(code);
    this.close();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const el = event.target as HTMLElement;
    if (!el.closest('app-language-switcher')) {
      this.close();
    }
  }
}
