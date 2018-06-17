import { Component, OnInit ,Input} from '@angular/core';
import { Movie } from '../../models/movie';
import {Store} from '@ngrx/store'
import { State } from '../../store';
import { Observable } from 'rxjs';
import { MovieService } from '../../services/movie.service';
import * as fromMovie from '../../store/reducers/movies.reducer';
import {ViewDetails,LoadMovies,SearchMovie} from '../../store/actions';
import {selectors as MovieSelectors} from '../../store/reducers/movies.reducer';
declare var jQuery:any;
declare var $:any;
declare var $ans:any;

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  movies$: Observable<Movie[]>
  view$:Observable<Movie>
 
  constructor(private store: Store<State>) {
    this.movies$ = this.store.select((state: State) => MovieSelectors.selectAll(state.movies))
   
   this.view$ = this.store.select(state => state.view)
  
   }

   onClickMovie(movie: Movie){
    this.store.dispatch(new ViewDetails(movie))
  }

   onSearchMovie(movie:string)
   {
     this.store.dispatch(new SearchMovie(movie));
     this.view$ = this.store.select(state => state.view)
     console.log(this.view$);
   
   }

  ngOnInit() {
   
    this.store.dispatch(new LoadMovies())
    
  }
  viewDetails(movie)
  {
    console.log("Akcija "+movie.title);
   this.store.dispatch(new ViewDetails(movie));
  
  }

  
  
}
