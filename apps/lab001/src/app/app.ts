import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BorderGradient } from './components/border-gradient/border-gradient';
import { CardEffects } from './components/cards-effects/cards-effects';

@Component({
  imports: [RouterModule, BorderGradient, CardEffects],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
