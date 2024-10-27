import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { TaskService } from '../services/task-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, Location } from '@angular/common'
import { MatButtonModule } from '@angular/material/button';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent {
  editForm: FormGroup;
  taskId!: number;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.editForm = this.fb.group({ // to load task form
      name: ['', Validators.required],
      description: [''],
      dueDate: ['', Validators.required]
    });
  }

  ngOnInit(): void { // to load task form and patch values
    this.route.params.subscribe(params => {
      this.taskId = +params['id'];
      const task = this.taskService.getTaskById(this.taskId);
      if (task) {
        this.editForm.patchValue({
          name: task.name,
          description: task.description,
          dueDate: task.dueDate
        });
      } else { // handle case where task not found
        // console.error('Task not found');
        alert('Task not found');
        this.router.navigate(['/dashboard']);
      }
    });
  }
  goBack(): void { // to go back
    this.location.back();
  }
  onSubmit(): void { // to update task and navigate to dashboard
    if (this.editForm.valid) {
      const updatedTask: Task = {
        id: this.taskId,
        ...this.editForm.value
      };
      // console.log(updatedTask);
      this.taskService.updateTask(updatedTask);
      this.router.navigate(['/dashboard']); 
    }
  }
}