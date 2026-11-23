import { Component, signal } from '@angular/core';
import { Compteur } from './compteur/compteur';

@Component({
  selector: 'app-root',
  imports: [Compteur],
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected myVariable = 0;
  protected readonly mySignal = signal(0);
}
