import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Per gestire il routing importo {Route, RouterModule} from '@angular/router';
// dove RouterModule è un modulo fornito da Angular che offre funzionalità per il routing e
// Route è un'interfaccia, quindi un oggetto che definisce una singola route all'interno dell'applicazione, specificando il percorso corrispondente e il componente associato
import {Route, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { CompletatiComponent } from './components/completati/completati.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { from } from 'rxjs';

//Per definire ogni singola rotta si crea una variabile di tipo : Route appunto
const routes: Route[] = [
  {
    path: 'todo',
    component: TodoComponent,
  },
  {
    path: 'completati',
    component: CompletatiComponent,
  },
]

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CompletatiComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // qui importo il RouterModule del decoratore
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
