import { Component } from '@angular/core';
import { ThemoviedbService } from '../../services/themoviedb.service';
import {movie} from '../../interfaces/movie.interface';
@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styles: []
})
export class ExplorerComponent  {
  search:string = '';
  constructor(private movies:ThemoviedbService) { }

  searchMovies(query:string)
  {
    this.movies.searchMovie(query).subscribe(
      (movie:any)=>{
        this.movies.arrayMovies = movie.results;
      }
    );
  }

}
