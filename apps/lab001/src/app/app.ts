import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BorderGradient } from './components/border-gradient/border-gradient';

@Component({
  imports: [RouterModule, BorderGradient],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
