import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task'; // INTERFACE
import { TaskService } from '../../services/task.service';
// import { TASKS } from '../../mock-tasks'; MOVED TO task.service.ts!!


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  // NOTE now we are getting our tasks information thru an API created by using db.json file and inside task.service.ts
  // the port was set inside the package.json which acts as our backend server 

 /** PREVIOUSLY was this but now we are using a service CLASS
  * 
   we want to assign our tasks to the property of our component
   we have tasks that are a type of Task which is an array then directly set it to TASKS
   tasks: Task[] = TASKS;
   we can now use the variable name tasks in our component => see tasks.html component 
   */

  tasks: Task[] = [];

  // if you want to use a service inside the component 
  constructor( private taskService: TaskService ) { };

  ngOnInit(): void {
     this.taskService
     .getTasks()
     .subscribe( 
       (tasks) => (this.tasks = tasks) 
     );
  };

  deleteTask(task: Task){
    this.taskService
    .deleteTask(task)
    .subscribe(  // Above is going to call the deleteTask method inside the service 
      () => (this.tasks = this.tasks.filter((t) => t.id !== task.id) ) // when completed it will filter out the deleted method
    );
  };

  toggleTask(task: Task){ // now we can double click on a task and after refresh will stay the new value
    task.reminder = !task.reminder;
    this.taskService
    .updateTaskReminder(task)
    .subscribe();

    console.log(task.reminder, 'this should be either true of false!')
  };

  addTask(task: Task){
    this.taskService
    .addTask(task)
    .subscribe(
      (task) => (this.tasks.push(task))
    );
    console.log(task, 'logging the task!');
  };


};
