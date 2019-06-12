import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public movies;
  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.getMovies()
  }
 
  getMovies(){
    this.movieService.getMovies().subscribe(
      data => {this.movies = data},
      err => {console.log(err)},
      () => {console.log('done loading')}
    );
  }
}
