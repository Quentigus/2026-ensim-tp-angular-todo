import { Routes } from '@angular/router';
import { ToDoList } from './to-do-list/to-do-list';
import { Presentation } from './presentation/presentation';

export const routes: Routes = [
    {
        path: 'to-do-list',
        component: ToDoList
    },
    {
        path: 'presentation',
        component: Presentation
    }
];
