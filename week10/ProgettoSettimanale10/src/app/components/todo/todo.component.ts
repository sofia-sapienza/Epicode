import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
//importo l'interfaccia
import { InterfacciaTodo } from 'src/app/models/interfaccia-todo';
import { TodoService } from 'src/app/service/todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  inputValue: string = '';

  constructor(private mioService: TodoService) {

   }

  ngOnInit(): void {
  }

}
