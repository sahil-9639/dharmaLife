import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

export const routes: Routes = [
  // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'edit-task/:id', component: EditTaskComponent, canActivate: [AuthGuard] },
  { path: 'edit-task/:id', component: EditTaskComponent},
    // { path: 'add-task', component: AddTaskComponent, canActivate: [AuthGuard]  },
    { path: 'add-task', component: AddTaskComponent},
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
  ];
