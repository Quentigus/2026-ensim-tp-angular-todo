import { Component, signal } from '@angular/core';
import { Task } from '../task';

@Component({
  imports: [],
  selector: 'app-to-do-list',
  styleUrl: './to-do-list.scss',
  templateUrl: './to-do-list.html',
})
export class ToDoList {
  private readonly taches = signal<Task[]>([
    { id: 1, libelle: 'Faire les courses', description: 'Acheter du pain, du lait et des fruits', done: false },
    { id: 2, libelle: 'Réviser Angular', description: 'Relire le cours sur les signals et les composants', done: true },
    { id: 3, libelle: 'Appeler le médecin', description: 'Prendre rendez-vous pour la semaine prochaine', done: false },
    { id: 4, libelle: 'Ranger le bureau', description: 'Trier les papiers et nettoyer le plan de travail', done: false },
  ]);
}
