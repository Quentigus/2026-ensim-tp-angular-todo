import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Presentation } from './presentation/presentation';
import { ToDoList } from './to-do-list/to-do-list';

@Component({
  imports: [RouterOutlet, Presentation, ToDoList],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('to-do-list');
}
