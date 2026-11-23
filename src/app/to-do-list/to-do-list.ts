import { Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GestionTaches } from '../gestion-taches';

@Component({
  imports: [RouterLink],
  selector: 'app-to-do-list',
  styleUrl: './to-do-list.scss',
  templateUrl: './to-do-list.html',
})
export class ToDoList implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);
  private readonly gestionTaches = inject(GestionTaches);

  protected readonly showDone = signal(true);

  private readonly tachesAffichees = computed(() =>
    this.gestionTaches.taches().filter((tache) => (this.showDone() ? true : tache.done === false)),
  );

  ngOnInit(): void {
    this.route.queryParamMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((queryParams) => {
      const isShowDone: boolean = !(queryParams.get('done') === 'false');
      this.showDone.set(isShowDone);
    });
  }
}
