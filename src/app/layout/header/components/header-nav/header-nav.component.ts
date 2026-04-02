import { Component, inject, input, output } from '@angular/core';
import { ID_EXPERIENCE, ID_PROJECTS, ID_SKILLS } from '@core/constants/sections.constants';

import { Router } from '@angular/router';
import { PlatformService } from '@core/services/platform.service';
import { navScrollTo } from '@core/utils/navigation.utils';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header-nav',
  imports: [TranslateModule],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss',
})
export class HeaderNavComponent {
  private readonly platformService = inject(PlatformService);
  private readonly router = inject(Router);

  readonly ID_SKILLS = ID_SKILLS;
  readonly ID_EXPERIENCE = ID_EXPERIENCE;
  readonly ID_PROJECTS = ID_PROJECTS;

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
