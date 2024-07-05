import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor, UpperCasePipe, DatePipe } from '@angular/common';
import { TodoDataServiceService } from '../service/data/todo-data-service.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }
}
@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [NgIf, NgFor, UpperCasePipe, DatePipe],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit {

  // todos = [
  //  new Todo(1, 'Take Molly outside', false, new Date()),
  //  new Todo(2, 'Go to dance', false, new Date()),
  //  new Todo(3, 'Finish this course', false, new Date()),
  // ]

  todos: Todo[] = []
  message: String = ''

  constructor(
    private service: TodoDataServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.retrieveAllTodos('aryrosvall');

  }

  retrieveAllTodos(username: string) {
    this.service.retrieveAllTodos(username).subscribe({
      next: response => {
        this.todos = response;
      }
    }
    )
  }

  deleteTodo(id: number) {
    this.service.deleteTodo('aryrosvall', id).subscribe({
      next: () => {
        this.message = `Record ${id} deleted successfully`
        this.retrieveAllTodos('aryrosvall');
      }
    }
    )
  }
  updateTodo(id: number) {
    this.router.navigate(['todos', id])
  }
}
