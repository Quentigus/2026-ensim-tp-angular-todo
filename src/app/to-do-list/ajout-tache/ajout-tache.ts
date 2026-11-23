import { Component, inject, signal } from '@angular/core';
import { form, FormField, FormRoot } from '@angular/forms/signals';
import { GestionTaches } from '../../gestion-taches';

@Component({
  imports: [FormField, FormRoot],
  selector: 'app-ajout-tache',
  styleUrl: './ajout-tache.scss',
  templateUrl: './ajout-tache.html',
})
export class AjoutTache {
  private readonly gestionTaches = inject(GestionTaches);

  private readonly formModel = signal({
    libelle: '',
    description: '',
  });

  protected readonly form = form(
    // Le signal qui contient les valeurs
    this.formModel,

    // La soumission
    {
      submission: {
        action: async (field) => {
          const { libelle, description } = field().value();
          this.gestionTaches.ajouter(libelle, description);
          this.form().reset();
        },
      },
    },
  );
}
