import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
//importo l'interfaccia
import { Todo } from 'src/app/models/todo.interface';
//importo il service
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss'],
})
export class CompletatiComponent implements OnInit {
  mioArrayTodo: Todo[] = [];

  constructor(private todoSrv: TodoService) {}

  ngOnInit(): void {
    this.mioArrayTodo = this.todoSrv.recuperaTodo();
  }

  modificaTodo(task: Todo) {
    this.todoSrv.modificaTodo(task);
  }

  eliminaTodo(task: Todo) {
    setTimeout(() => {
      this.todoSrv.eliminaTodo(task);
    }, 2000);
  }
}
