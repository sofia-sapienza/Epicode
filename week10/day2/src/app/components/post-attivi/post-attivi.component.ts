import { Component, OnInit } from '@angular/core';
//Il nostro component per poter gestire quello che la fetch ci ha ritornato ha bisogno che venga
//importata sia l'interfaccia, sia il nostro service ↙️
import { Posts } from 'src/app/models/posts';
import { PostsService } from 'src/app/service/posts.service';


@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {

  //adesso creo una variabile di tipo `:` Posts che sarà un array[], perché il json è un'array!
  listaPost: Posts[] = []

  constructor(private postSrv: PostsService) {
    this.postSrv.getPosts().then((dati) => {
      this.listaPost = dati;
      console.log(this.listaPost)
    })
   }

  ngOnInit(): void {
  }

}
