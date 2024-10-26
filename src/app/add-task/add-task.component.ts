import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { TaskService } from '../services/task-service.service';
import { Task } from '../models/task.model';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    CommonModule,
  ],

  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  taskForm!: FormGroup;

  constructor(private taskService: TaskService, private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      name: [''],
      description: [''],
      dueDate: ['', Validators.required]
    });
  }
  onSubmit(): void {
    if (this.taskForm.valid) {
      const newTask: Task = {
        id: Math.floor(Math.random() * 1000),
        ...this.taskForm.value
      };
      debugger
      this.taskService.addTask(newTask);
      this.router.navigate(['/dashboard']);
    }
  }
}
