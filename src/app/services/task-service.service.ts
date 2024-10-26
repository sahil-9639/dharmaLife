import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { formatDate } from '../utils/date.utils';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}
  private tasks: Task[] = [];
  private tasksSubject = new BehaviorSubject<Task[]>([
    { id: 1, name: 'Task 1', description: 'Task 1Description 1', dueDate: formatDate(new Date()) },
    { id: 2, name: 'Task 2', description: 'Task 2 description', dueDate: formatDate(new Date()) },
    { id: 3, name: 'Task 3', description: 'Task 3 description', dueDate: formatDate(new Date()) },
  ]);

  getTasks(): Task[] {
    return this.tasksSubject.getValue();
  }
  addTask(newTask: Task): void {
    const tasks = this.tasksSubject.getValue();
    tasks.push(newTask);
    this.tasksSubject.next(tasks);
  }
  getTaskById(id: number): Task | undefined {
    return this.tasksSubject.getValue().find(task => task.id === id);
  }
  updateTask(updatedTask: Task): void {
    const index = this.tasksSubject.getValue().findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasksSubject.getValue()[index] = updatedTask;
    }
  }
}