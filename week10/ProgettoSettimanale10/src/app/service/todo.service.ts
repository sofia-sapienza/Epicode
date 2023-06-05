import { Injectable } from '@angular/core';
// importo l'interfaccia che ho definito nella cartella models
import { InterfacciaTodo } from 'src/app/models/interfaccia-todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  // creao una variabile di tipo interface
  mioArrayTodo: InterfacciaTodo[] = [];
  // creo una un metodo che recupera i todo
  recuperaTodo() {
    return this.mioArrayTodo;
  }

  aggiornaTodo(){

  }

}
