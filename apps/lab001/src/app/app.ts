import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlipCard } from './components/flip-card/flip-card';

@Component({
  imports: [RouterModule, FlipCard],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
