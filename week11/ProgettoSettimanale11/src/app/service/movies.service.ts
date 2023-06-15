import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'; //importo environment per poter utilizzare le variabili d'ambiente
import { HttpClient } from '@angular/common/http'; //importo HttpClient per poter effettuare chiamate HTTP
import { Movies } from 'src/app/models/movies.interface'; // importo l'interfaccia che ho definito per i film

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseURL = environment.baseURL;

  constructor(private http: HttpClient) { }

  recupera() {
    return this.http.get<Movies[]>(`${this.baseURL}movies-popular`);
  }
}
