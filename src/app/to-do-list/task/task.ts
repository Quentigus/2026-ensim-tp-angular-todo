import { Component, input } from '@angular/core';
import { Task as ITask } from '../../task';

@Component({
  imports: [],
  selector: 'app-task',
  styleUrl: './task.scss',
  templateUrl: './task.html',
})
export class Task {
  readonly task = input.required<ITask>();
}
