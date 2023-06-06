import { Injectable } from '@angular/core';
// importo l'interfaccia che ho definito nella cartella models
import { Todo } from '../models/todo.interface';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}
  // creao una variabile di tipo interface
  mioArrayTodo: Todo[] = [];
  // creo una un metodo che recupera i todo
  recuperaTodo() {
    return this.mioArrayTodo;
  }

  aggiungiTodo(task: Todo): void {
    this.mioArrayTodo.push(task);
  }

  modificaTodo(task: Todo): void {
    task.completed = true;
  }

  eliminaTodo(task: Todo){
    let indice = this.mioArrayTodo.findIndex((i) => i.id === task.id)
    this.mioArrayTodo.splice(indice, 1)

 }
}
