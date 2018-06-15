import { Movie } from '../models/movie'
import {Injectable} from '@angular/core'
import {Http, Response} from "@angular/http";
 import {Observable} from "rxjs";
 import {map} from 'rxjs/operators';

@Injectable()
export class MovieService {
   // private movies: Movie[];
   // private searched:Movie;

    private baseUrl="http://localhost:3000/movies";


    constructor(private http:Http) {
       // this.movies = [];
              
    }
    public getAll():Observable<Movie[]>{
       return this.http.get(this.baseUrl)
       .pipe(map(res=> res.json()));

    }

    public addVote(movie:Movie){
        this.http.put(this.baseUrl+"?title='"+movie.title+"'",movie).pipe(
          //  res=>res.toJson()
        )
    }
} 