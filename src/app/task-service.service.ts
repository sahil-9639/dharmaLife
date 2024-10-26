import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../app/models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([
    { id: 1, name: 'Task 1', description: 'Task 1 description', dueDate: new Date() },
    { id: 2, name: 'Task 2', description: 'Task 2 description', dueDate: new Date() },
  ]);

  // This method now returns an Observable of Task[]
  getTasks(): Observable<Task[]> {
    return this.tasksSubject.asObservable();
  }
  addTask(newTask: Task): void {
    const tasks = this.tasksSubject.getValue();
    tasks.push(newTask);
    this.tasksSubject.next(tasks);
  }
}
