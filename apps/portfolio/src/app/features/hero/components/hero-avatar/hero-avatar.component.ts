import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero-avatar',
  imports: [],
  templateUrl: './hero-avatar.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './hero-avatar.component.scss',
})
export class HeroAvatarComponent {
  avatarSrc = input.required<string>();
  avatarAlt = input.required<string>();
}
