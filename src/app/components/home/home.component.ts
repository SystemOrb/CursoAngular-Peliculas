import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from '../../services/themoviedb.service';
import { movie } from '../../interfaces/movie.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit{
  popular:movie[] = [];
  firstItem:movie[] = [];
  streamingNow:movie[] = [];
  popularKids:movie[] = [];
  firstKidItem:movie[] = [];
  constructor(public movieService:ThemoviedbService) {
      this.movieService.getPopulares().subscribe(
        (res:any)=>{
          this.popular = res.results;
          this.firstItem = res.results[10];
        }
      );
  }
  ngOnInit()
  {
    this.movieService.getNowPlayin().subscribe(
      (res:any)=>{
         this.streamingNow = res.results;
      }
    );
    this.movieService.getPopularKids().subscribe(
      (res:any)=>{
         this.popularKids = res.results;
         this.firstKidItem = res.results[14];
      }
    );
  }

}
