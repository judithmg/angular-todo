import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { TodoStoreService } from '../app/todo-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private todosStore: TodoStoreService) {}
  //todos los imports van dentro del constructor
  text = new FormControl(null);
  addTaskValue: string = '';

  clickHandler(inputData: string) {
    this.todosStore.addTodo(inputData);
    this.addTaskValue = '';
  }
  todos: any = this.todosStore.todo$.subscribe((todo) => (this.todos = todo));
  // a los observables te tienes que suscribir, y esto lo que indica es que la variable va a ser escuchada, y cualquier cambio, como de añadir o borrar todos, será escuchado

  deleteButton(inputData: number) {
    this.todosStore.removeTodo(inputData);
  }

  deleteAll() {
    this.todosStore.removeAllTodos();
  }
}
