import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/services/task.service';
import { Task } from 'src/app/Task';
// import { TASKS } from 'src/app/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe( tasks => this.tasks = tasks);
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe( () => // subscribe() works more like a js promise
      this.tasks = this.tasks.filter( eachTask => eachTask.id !== task.id )); // matches task id to delete from the server
  }

  toggleReminder(task: Task) {
    task.reminder = !(task.reminder);
    console.log("double clicked");
    //this.taskService.updateTaskReminder(task).subscribe();
  }
}
