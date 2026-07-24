import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SplitTextLab } from './components/split-text-lab/split-text-lab';

@Component({
  imports: [RouterModule, SplitTextLab],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
