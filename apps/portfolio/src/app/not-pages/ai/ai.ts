import { Component, inject, OnInit } from '@angular/core';
import { BREADCRUMB_AI, PAGE_SEO } from '@core/config/seo';

import { SeoService } from '@core/services/seo';
import { TranslatePipe } from '@ngx-translate/core';
import { ChatCvComponent } from '../../features/ai/components/chat-cv/chat-cv';
import { ContactAssistantComponent } from '../../features/ai/components/contact-assistant/contact-assistant';
import { CoverLetterComponent } from '../../features/ai/components/cover-letter/cover-letter';

@Component({
  selector: 'app-ai',
  standalone: true,
  imports: [TranslatePipe, ChatCvComponent, CoverLetterComponent, ContactAssistantComponent],
  templateUrl: './ai.html',
  styleUrl: './ai.scss',
})
export class AiComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.update(PAGE_SEO['ai']);
    this.seoService.updateSchemas([BREADCRUMB_AI]);
  }
}
