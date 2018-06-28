import { Component} from '@angular/core';
import { ThemoviedbService } from '../../services/themoviedb.service';
import { movie } from '../../interfaces/movie.interface';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {
  navbar:string = '';
  constructor(private movies:ThemoviedbService,private route:Router) { }

  searchMoviesBynavbar(query:string)
  {
    this.movies.searchMovie(query).subscribe(
      (movie:any)=>{
        this.movies.arrayMovies = movie.results;
        this.route.navigate(['/explorer']);
        this.navbar = '';
      }
    );
  }


}
