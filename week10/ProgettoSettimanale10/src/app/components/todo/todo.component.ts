import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
//importo l'interfaccia
import { Todo } from 'src/app/models/todo.interface';
//importo il service
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  inputValue: string = '';
  mioArrayTodo: Todo[] = [];
  //creo delle variabili inizializzate a false che farò apparire durante i due secondi di attesa dei vari metodi
  scrittaElimina = false;
  scrittaCompleta = false;

  constructor(private todoSrv: TodoService) {}

  ngOnInit(): void {
    this.mioArrayTodo = this.todoSrv.recuperaTodo();
  }

  aggiungiTask() {
    const miaTask: Todo = {
      id: this.mioArrayTodo.length + 1,
      title: this.inputValue,
      completed: false,
    };

    this.todoSrv.aggiungiTodo(miaTask);
    this.inputValue = '';
  }

  modificaTodo(task: Todo) {

    this.scrittaCompleta = true;

    setTimeout(() => {
      this.scrittaCompleta = false;
      this.todoSrv.modificaTodo(task);
    }, 2000);

  }

  eliminaTodo(task: Todo) {
    this.scrittaElimina = true;

    setTimeout(() => {
      this.scrittaElimina = false;
      this.todoSrv.eliminaTodo(task);
    }, 2000);
  }
}
