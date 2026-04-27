import { AfterViewInit, Component, ElementRef, OnInit, inject } from '@angular/core';

import { PAGE_SEO } from '@core/config/seo.config';
import { GsapService } from '@core/services/gsap.service';
import { PlatformService } from '@core/services/platform.service';
import { SeoService } from '@core/services/seo.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent implements OnInit, AfterViewInit {
  private readonly seoService = inject(SeoService);
  private readonly gsapService = inject(GsapService);
  private readonly el = inject(ElementRef);
  private readonly platformService = inject(PlatformService);

  ngOnInit(): void {
    this.seoService.update(PAGE_SEO['aboutMe']);
  }

  ngAfterViewInit(): void {
    if (!this.platformService.isBrowser) return;
    const gsap = this.gsapService.gsap;
    const cards = this.el.nativeElement.querySelectorAll('.about-me--row');
    gsap.from(cards, {
      opacity: 0,
      x: -100,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power2.out',
    });
  }
}
