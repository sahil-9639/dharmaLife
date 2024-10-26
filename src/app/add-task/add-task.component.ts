import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { TaskService } from '../task-service.service';
import { Task } from '../models/task.model';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    // BrowserModule,
    FormsModule,
    // BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    CommonModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
  ],

  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  task: Task = { id: 0, name: 'Sahil', description: 'Genius', dueDate: new Date() };

  constructor(private taskService: TaskService, private router: Router) {}


  onSubmit(): void {
    debugger
    this.task.id = Math.floor(Math.random() * 1000);
    this.taskService.addTask(this.task);
    this.router.navigate(['/dashboard']);
  }
}
