import { Component, model } from '@angular/core';

@Component({
  selector: 'app-compteur',
  styleUrl: './compteur.scss',
  templateUrl: './compteur.html',
})
export class Compteur {
  // model = input + output
  compteur = model.required<number>();
}
