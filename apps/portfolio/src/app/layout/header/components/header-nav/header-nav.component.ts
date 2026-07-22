import { Component, inject, input, output, ChangeDetectionStrategy } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ID_EXPERIENCE, ID_SKILLS } from '@core/constants/sections.constants';

import { navScrollTo } from '@core/utils/navigation.utils';
import { TranslateModule } from '@ngx-translate/core';
import { PlatformService } from '@shared-libs/services';

@Component({
  selector: 'app-header-nav',
  imports: [TranslateModule, RouterLink],
  templateUrl: './header-nav.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './header-nav.component.scss',
})
export class HeaderNavComponent {
  private readonly platformService = inject(PlatformService);
  private readonly router = inject(Router);

  readonly ID_SKILLS = ID_SKILLS;
  readonly ID_EXPERIENCE = ID_EXPERIENCE;

  vertical = input<boolean>(false);
  linkClicked = output<void>();

  scrollTo(id: string): void {
    if (!this.platformService.isBrowser) return;

    const isHome = this.router.url === '/';

    if (isHome) {
      navScrollTo(document.getElementById(id));
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          navScrollTo(document.getElementById(id));
        }, 100);
      });
    }

    this.linkClicked.emit();
  }
}
