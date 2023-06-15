import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service'; //importo il services per poterlo utilizzare
import { Movies } from 'src/app/models/movies.interface'; //importo l'interfaccia
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movies[] = [];
  imageURL = environment.imageURL

  constructor(private moviesSrv: MoviesService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.moviesSrv.recupera().subscribe((_movies: Movies[]) => {
        this.movies = _movies;
      })
    }, 1000);
  }

}
