import { Movie } from '../models/movie'
import {Injectable} from '@angular/core'
import {Http, Response} from "@angular/http";
 import {Observable} from "rxjs";
 import {map} from 'rxjs/operators';

@Injectable()
export class MovieService {

    private baseUrl="http://localhost:3000/movies";

    constructor(private http:Http) {

    }

    public getAll():Observable<Movie[]>{
       return this.http.get(this.baseUrl)
       .pipe(map(res=> res.json()))
    }

    public searchMovie(movie):Observable<Movie>{
      return this.http.get(this.baseUrl+"?title="+movie)
      .pipe(map(res=> res.json()))
   }
   
    public searchGenre(genre):Observable<Movie[]>{
     if(genre=="All"){
      return this.http.get(this.baseUrl)
      .pipe(map(res=> res.json()))
     }
     else{
      return this.http.get(this.baseUrl+"?genre="+genre)
      .pipe(map(res=> res.json()))
     }
 }

    public postPositiveVote(movie:Movie){
    console.log(movie);
      return  this.http.put(this.baseUrl+"/"+movie.id,movie).pipe(
         
        )
    }

    public postNegativeVote(movie:Movie){
        console.log(movie);
          return  this.http.put(this.baseUrl+"/"+movie.id,movie).pipe(
             
            )
        }

    
} 