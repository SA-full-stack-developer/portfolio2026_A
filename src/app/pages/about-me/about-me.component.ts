import {
  AfterViewInit,
  Component,
  ElementRef,
  Injector,
  OnInit,
  QueryList,
  ViewChildren,
  afterNextRender,
  inject,
} from '@angular/core';
import { BREADCRUMB_ABOUT, PAGE_SEO } from '@core/config/seo.config';

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
  private readonly platformService = inject(PlatformService);
  private readonly injector = inject(Injector);

  @ViewChildren('animRow') animRows!: QueryList<ElementRef>;

  ngOnInit(): void {
    this.seoService.update(PAGE_SEO['aboutMe']);
    this.seoService.updateSchemas([BREADCRUMB_ABOUT]);
  }

  ngAfterViewInit(): void {
    if (!this.platformService.isBrowser) return;

    afterNextRender(
      () => {
        const gsap = this.gsapService.gsap;
        const rows = this.animRows.map((r) => r.nativeElement);

        gsap.from(rows, {
          opacity: 0,
          x: -100,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power2.out',
        });
      },
      { injector: this.injector },
    );
  }
}
