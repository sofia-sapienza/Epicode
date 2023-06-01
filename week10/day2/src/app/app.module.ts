import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Per gestire il routing importo {Route, RouterModule} from '@angular/router';
// dove RouterModule è un modulo fornito da Angular che offre funzionalità per il routing e
// Route è un'interfaccia, quindi un oggetto che definisce una singola route all'interno dell'applicazione, specificando il percorso corrispondente e il componente associato
// vedi riga 16!
import {Route, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PostInattiviComponent } from './components/post-inattivi/post-inattivi.component';
import { PostAttiviComponent } from './components/post-attivi/post-attivi.component';
import { from } from 'rxjs';

const routes: Route[] = [ //Qui avviene la configurazione del routing
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'post-attivi',
    component: PostAttiviComponent,
  },
  {
    path: 'post-inattivi',
    component: PostInattiviComponent,
  },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PostInattiviComponent,
    PostAttiviComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Qui importo il RouterModule nel decoratore
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
