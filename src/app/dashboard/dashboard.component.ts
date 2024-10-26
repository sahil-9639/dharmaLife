import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TaskService } from '../task-service.service';
import { Task } from '../models/task.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

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

  constructor(private taskService: TaskService, private router: Router) {}


  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  addTask (): void {
    this.router.navigate(['/add-task']);
  }
  editTask(task: Task): void {
    alert(`Editing task: ${task.name}`);
    console.log(task);
  }
  
  deleteTask(task: Task): void {
    alert(`Deleting task: ${task.name}`);
  }
}
