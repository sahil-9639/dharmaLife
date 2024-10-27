import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TaskService } from '../services/task-service.service';
import { Task } from '../models/task.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatTableModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  displayedColumns: string[] = ['name', 'description', 'dueDate', 'actions'];
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  searchTerm: string = '';

  constructor(private taskService: TaskService, private authService: AuthenticationService, private router: Router) {}


  ngOnInit(): void {
    this.loadTasks();
  }
  loadTasks(): void { // load default tasks
    this.tasks = this.taskService.getTasks();
    this.filteredTasks = [...this.tasks];
    // console.log('Loaded tasks:', this.tasks);
  }

  addTask (): void { // to navigate to add task page
    this.router.navigate(['/add-task']);
  }
  editTask(task: Task): void { // to navigate to edit task page
    // alert(`Editing task: ${task.id}`);
    // console.log(task);
    this.router.navigate(['/edit-task', task.id]);
  }
  logout(): void { // to logout
    this.authService.logout();
  }
  filterTasks() { // to filter tasks
    const searchLower = this.searchTerm.toLowerCase();
    this.filteredTasks = this.tasks.filter(task =>
      task.name.toLowerCase().includes(searchLower) ||
      task.description.toLowerCase().includes(searchLower) ||
      task.dueDate.includes(searchLower)
    
    );
    // this.tasks = this.filteredTasks;
    // console.log('Filtered tasks:', this.filteredTasks);
  }
  deleteTask(delTask: Task): void {// to delete task
    alert(`You are about to delete task: ${delTask.name}`);
    this.filteredTasks = this.filteredTasks.filter(task => task.id !== delTask.id);
  }
}
