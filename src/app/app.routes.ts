import { Routes } from '@angular/router';
import { ToDoList } from './to-do-list/to-do-list';
import { Presentation } from './presentation/presentation';
import { NotFound } from './shared/not-found/not-found';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'to-do-list',
        pathMatch : 'full'
    },
    {
        path: 'to-do-list',
        component: ToDoList
    },
    {
        path: 'presentation',
        component: Presentation
    },
    {
        path: 'not-found',
        component: NotFound
    },
    {
        path: '**',
        redirectTo : '/not-found'
    }
];