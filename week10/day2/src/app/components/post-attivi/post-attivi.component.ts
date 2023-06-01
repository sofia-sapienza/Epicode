import { Component, OnInit } from '@angular/core';
//Il nostro component per poter gestire quello che la fetch ci ha ritornato ha bisogno che venga
//importata sia l'interfaccia, sia il nostro service
import { Posts } from 'src/app/models/posts';
import { PostsService } from 'src/app/service/posts.service';


@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
