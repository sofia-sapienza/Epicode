import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  //creo la fetch minimale che si limita a fare la chiamata, il resto lo gestiranno i component
  async getPosts() {
    return (await fetch('assets/db.json')).json(); //ricordiamoci che .json() è un metodo che ci restiuisce una promise
  }

}
