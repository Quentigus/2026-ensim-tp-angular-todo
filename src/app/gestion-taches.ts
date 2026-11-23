import { Service, signal } from '@angular/core';
import { Task } from './task';

@Service()
export class GestionTaches {
  private readonly _taches = signal<Task[]>([
    {
      id: 1,
      libelle: 'Faire les courses',
      description: 'Acheter du pain, du lait et des fruits',
      done: false,
    },
    {
      id: 2,
      libelle: 'Réviser Angular',
      description: 'Relire le cours sur les signals et les composants',
      done: true,
    },
    {
      id: 3,
      libelle: 'Appeler le médecin',
      description: 'Prendre rendez-vous pour la semaine prochaine',
      done: false,
    },
    {
      id: 4,
      libelle: 'Ranger le bureau',
      description: 'Trier les papiers et nettoyer le plan de travail',
      done: false,
    },
  ]);
  public readonly taches = this._taches.asReadonly();

  toggle(id: number) {
    this._taches.update((all) => {
      return [
        ...all.map((t) => {
          return t.id === id ? { ...t, done: !t.done } : t;
        }),
      ];
    });
  }
}
