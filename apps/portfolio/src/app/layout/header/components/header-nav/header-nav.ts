import { Component, inject, input, output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ID_EXPERIENCE, ID_SKILLS } from '@core/constants/sections';

import { navScrollTo } from '@core/utils/navigation';
import { TranslatePipe } from '@ngx-translate/core';
import { PlatformService } from '@shared-libs/services';

@Component({
  selector: 'app-header-nav',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './header-nav.html',
  styleUrl: './header-nav.scss',
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
