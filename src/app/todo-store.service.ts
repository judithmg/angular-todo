import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './model/Todo';

@Injectable({
  providedIn: 'root', //esto implica que es global
})
export class TodoStoreService {
  todo$ = new BehaviorSubject<Todo[]>([]); // se pueden suscribir a nuestro estado
  // lo que viene entre () es lo que hay por default

  // necesitamos setter y getter para obtener los valores del servicio

  getTodos(): Todo[] {
    return this.todo$.getValue();
    //esto nos devuelve el último valor al que le hemos asignado el Todo
  }

  setTodos(todos: Todo[]): void {
    this.todo$.next(todos);
  }

  addTodo(text: string): void {
    const todos = [
      ...this.getTodos(),
      { id: this.getTodos().length + 1, text },
    ];
    this.setTodos(todos);
  }
  // creamos una nueva const con todos los todos que ya teníamos, añadiéndole el nuevo, con el nuevo id

  removeTodo(id: number): void {
    const todos = this.getTodos().filter((todo) => todo.id !== id);
    this.setTodos(todos);
  }

  removeAllTodos(): void {
    this.setTodos([]);
  }
  constructor() {}
}
