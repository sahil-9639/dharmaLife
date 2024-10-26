import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TaskService } from '../services/task-service.service';
import { Task } from '../models/task.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatTableModule,
    MatButtonModule,
    MatIconModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  displayedColumns: string[] = ['name', 'description', 'dueDate', 'actions'];
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private authService: AuthenticationService, private router: Router) {}


  ngOnInit(): void {
    this.loadTasks();
  }
  loadTasks(): void {
    this.tasks = this.taskService.getTasks();
    console.log('Loaded tasks:', this.tasks);
  }

  addTask (): void {
    this.router.navigate(['/add-task']);
  }
  editTask(task: Task): void {
    // alert(`Editing task: ${task.id}`);
    console.log(task);
    this.router.navigate(['/edit-task', task.id]);
  }
  logout(): void {
    this.authService.logout();
  }
  
  deleteTask(delTask: Task): void {
    alert(`Are you sure you want to delete task: ${delTask.name}`);
    this.tasks = this.tasks.filter(task => task.id !== delTask.id);
  }
}
