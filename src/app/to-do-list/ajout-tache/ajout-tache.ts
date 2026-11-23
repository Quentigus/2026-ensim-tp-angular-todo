import { Component, inject, signal } from '@angular/core';
import { form, FormField, FormRoot, maxLength, minLength, required } from '@angular/forms/signals';
import { GestionTaches } from '../../gestion-taches';

@Component({
  imports: [FormField, FormRoot],
  selector: 'app-ajout-tache',
  styleUrl: './ajout-tache.scss',
  templateUrl: './ajout-tache.html',
})
export class AjoutTache {
  private readonly gestionTaches = inject(GestionTaches);

  private readonly model = signal({
    libelle: '',
    description: '',
  });

  protected readonly form = form(
    // Le signal qui contient les valeurs
    this.model,

    // La validation
    (schema) => {
      required(schema.libelle, { message: 'Le libellé est obligatoire'});
      minLength(schema.libelle, 5, { message: 'Le libellé doit contenir plus de 5 caractères' });
      maxLength(schema.libelle, 30, { message: 'Le libellé doit contenir mois de 30 caractères' });
    },

    // La soumission
    {
      submission: {
        action: async (schema) => {
          const { libelle, description } = schema().value();
          this.gestionTaches.ajouter(libelle, description);
          this.form().reset();
        },
      },
    },
  );
}
