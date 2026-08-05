import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hero-avatar',
  imports: [],
  templateUrl: './hero-avatar.html',
  styleUrl: './hero-avatar.scss',
})
export class HeroAvatarComponent {
  avatarSrc = input.required<string>();
  avatarAlt = input.required<string>();
}
