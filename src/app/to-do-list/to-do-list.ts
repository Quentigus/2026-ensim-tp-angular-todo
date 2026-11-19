import { Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { Task } from '../task';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  imports: [RouterLink],
  selector: 'app-to-do-list',
  styleUrl: './to-do-list.scss',
  templateUrl: './to-do-list.html',
})
export class ToDoList implements OnInit {

  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  private readonly taches = signal<Task[]>([
    { id: 1, libelle: 'Faire les courses', description: 'Acheter du pain, du lait et des fruits', done: false },
    { id: 2, libelle: 'Réviser Angular', description: 'Relire le cours sur les signals et les composants', done: true },
    { id: 3, libelle: 'Appeler le médecin', description: 'Prendre rendez-vous pour la semaine prochaine', done: false },
    { id: 4, libelle: 'Ranger le bureau', description: 'Trier les papiers et nettoyer le plan de travail', done: false },
  ]);
  protected readonly showDone = signal(true);

  private readonly tachesAffichees = computed( () => 
    this.taches().filter( (tache) => this.showDone() ? true : tache.done === false )
  );

  ngOnInit(): void {
    this.route.queryParamMap
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe( queryParams => {
      const isShowDone :boolean = !(queryParams.get('done') === 'false');
      this.showDone.set(isShowDone);
    })
  }

}
