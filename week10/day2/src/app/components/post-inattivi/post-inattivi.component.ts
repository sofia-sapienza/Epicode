import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/models/posts';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-post-inattivi',
  templateUrl: './post-inattivi.component.html',
  styleUrls: ['./post-inattivi.component.scss']
})
export class PostInattiviComponent implements OnInit {

   //adesso creo una variabile di tipo `:` Posts che sarà un array[], perché il json è un'array!
   listaPost: Posts[] = []

   constructor(private postSrv: PostsService) {
     this.postSrv.getPosts().then((dati) => {
       this.listaPost = dati;
       console.log('Post Inattivi', this.listaPost)
     })
    }

  ngOnInit(): void {
  }

}
