import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { AddTaskComponent } from './add-task/add-task.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'task/add', component: TaskFormComponent },
    { path: 'task/edit/:id', component: TaskFormComponent },
    { path: 'add-task', component: AddTaskComponent },
    // { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  ];
