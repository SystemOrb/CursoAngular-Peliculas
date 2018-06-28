import { Injectable } from '@angular/core';
import { Http,Jsonp } from '@angular/http';
import { map } from "rxjs/operators"; // MAP operator
import { movie } from '../interfaces/movie.interface';
@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {
  private urlMoviedb:string = "https://api.themoviedb.org/3";
  private apikey:string = "959cc82f5abac8d7e9d5ccfdd7128fbf";
  public arrayMovies:movie[] = [];
  constructor(private crossDomain:Jsonp) { }
 //image.tmdb.org/t/p/w300/
   getPopulares()
   {
      let url = this.urlMoviedb+'/discover/movie?sort_by=popularity.desc&api_key='+this.apikey+'&language=es&callback=JSONP_CALLBACK';
      return this.crossDomain.get( url ).pipe(
        map( (callback:any)=>{
            return callback.json();
        })
      );
   }
   getNowPlayin()
   {
     let url = this.urlMoviedb+"/movie/now_playing?api_key="+this.apikey+"&language=es&page=1&callback=JSONP_CALLBACK";
     return this.crossDomain.get( url ).pipe(
       map( (callback:any)=>{
         return callback.json();
       })
     );
   }
   getPopularKids()
   {
     let url = this.urlMoviedb+'/movie/popular?api_key='+this.apikey+'&language=es&page=1&adult=false&genre_ids=[16,35,12,28,10751,14,10402,878]&callback=JSONP_CALLBACK';
     return this.crossDomain.get( url ).pipe(
       map( (callback:any)=>{
         return callback.json();
       })
     );
   }
   getMovieById(id:number)
   {
     let url = this.urlMoviedb+'/movie/'+id+'?api_key='+this.apikey+'&language=es&callback=JSONP_CALLBACK';
     return this.crossDomain.get( url ).pipe(
       map( (callback:any)=>{
         return callback.json();
       })
     );
   }
   searchMovie(query:string)
   {
     let url = this.urlMoviedb+'/search/movie?query='+query+'&sort_by=popularity.desc&api_key='+this.apikey+'&language=es&callback=JSONP_CALLBACK'
     return this.crossDomain.get( url ).pipe(
       map( (callback:any)=>{
         return callback.json();
       })
     );
   }

//https://api.themoviedb.org/3/search/movie?api_key=
//<<api_key>>&language
//=en-US&page=1&include_adult=false
}
