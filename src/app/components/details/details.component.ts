import { Component,OnInit } from '@angular/core';
import { ThemoviedbService } from '../../services/themoviedb.service';
import { movie } from '../../interfaces/movie.interface';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: []
})
export class DetailsComponent implements OnInit{

  constructor(private route:ActivatedRoute,private movie:ThemoviedbService) {}
  movieDetails:movie[] = [];
  ngOnInit()
  {
    this.route.params.subscribe(
      (get:any)=>{
        this.movie.getMovieById(get['id']).subscribe(
          (object:any)=>{
            this.movieDetails = object;
            console.log(this.movieDetails)
          }
        );
      }
    );
  }

}
