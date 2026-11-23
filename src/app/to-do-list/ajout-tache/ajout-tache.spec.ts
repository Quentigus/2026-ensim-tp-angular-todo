import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionTaches } from '../../gestion-taches';
import { AjoutTache } from './ajout-tache';

describe('AjoutTache', () => {
  let component: AjoutTache;
  let fixture: ComponentFixture<AjoutTache>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutTache],
    }).compileComponents();

    fixture = TestBed.createComponent(AjoutTache);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show validation errors after an invalid submission', async () => {
    const form = fixture.nativeElement.querySelector('form') as HTMLFormElement;
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    await fixture.whenStable();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('#libelle-errors')?.textContent).toContain(
      'Le libellé est obligatoire.',
    );
  });

  it('should add a valid task and reset the form', async () => {
    const input = fixture.nativeElement.querySelector('#libelle') as HTMLInputElement;
    input.value = 'Titre de tâche valide';
    input.dispatchEvent(new Event('input', { bubbles: true }));

    const form = fixture.nativeElement.querySelector('form') as HTMLFormElement;
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    await fixture.whenStable();
    fixture.detectChanges();

    expect(TestBed.inject(GestionTaches).taches().at(-1)).toEqual({
      id: 5,
      libelle: 'Titre de tâche valide',
      description: '',
      done: false,
    });
    expect(input.value).toBe('');
  });
});
