import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task'; // INTERFACE
// import { TASKS } from '../mock-tasks'; // Array DATA
// Also no longer needed because we are getting our information from the created API and not imported from file

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiURL = "http://localhost:5000/tasks"

  constructor(private http: HttpClient) { };

  getTasks(): Observable<Task[]> { // http because it was declared inside constructor argument
    return this.http.get<Task[]>(this.apiURL);
  };

  deleteTask(task: Task): Observable<Task>{
    const URL = `${this.apiURL}/${task.id}`; // we can use task variable because it was passed thru argument
    return this.http.delete<Task>(URL);
    
  };

  updateTaskReminder(task: Task): Observable<Task>{
    const url = `${this.apiURL}/${task.id}`
    return this.http.put<Task>(url, task, httpOptions);

  };

  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiURL, task, httpOptions);
  };

};
