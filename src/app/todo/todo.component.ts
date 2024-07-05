import { Component, OnInit } from '@angular/core';
import { TodoDataServiceService } from '../service/data/todo-data-service.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {

  id: number = 0;
  todo: Todo = new Todo(this.id, '', false, new Date());

  constructor(private service: TodoDataServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.service.getTodoById('aryrosvall', 1).subscribe({
      next: response => this.todo = response
    })

  }

  saveTodo(id: number) {
    //   this.service.updateTodo('aryrosvall', id).subscribe({
    //     next: response => {
    //       //this.todo = response
    //     }
    //   })
  }

}
