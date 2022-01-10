import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task; // now we have access to each individual task inside of THIS(TaskItemComponent) component
  // we can now using the tag app-task-item and make a reference to the variable above: task

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter(); 
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes; // again now we can use this property for TaskItemComponent

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task){
    this.onDeleteTask.emit(task);
    console.log(task, 'this task was DELETED!')
  }

  onToggle(task){
    this.onToggleReminder.emit(task);
    console.log(task, 'this task was TOGGLED!')
  }
  // REMEMBER this works alongside with task.componet html and ts

}
