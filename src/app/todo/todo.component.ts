import { Component, OnInit } from '@angular/core';
import { TodoDataServiceService } from '../service/data/todo-data-service.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, DatePipe, CommonModule],
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

    if (this.id != -1) {
      this.service.getTodoById('aryrosvall', this.id).subscribe({
        next: response => this.todo = response
      })
    }
  }

  saveTodo() {
    if (this.id == -1) {
      this.service.createTodo('aryrosvall', this.todo).subscribe({
        next: response => {
          this.router.navigate(['todos'])
        }
      })
    } else {
      this.service.updateTodo('aryrosvall', this.id, this.todo).subscribe({
        next: response => {
          this.router.navigate(['todos'])
        }
      })
    }
  }

}
