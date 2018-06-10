import { Component, OnInit ,Input} from '@angular/core';
import { Movie } from '../../models/movie';
import {Store} from '@ngrx/store'
import { State } from '../../store';
import { Observable } from 'rxjs';
import { MovieService } from '../../services/movie.service';
import {SearchMovie} from '../../store/actions';
import {ViewDetails} from '../../store/actions';

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
 
  constructor(private store$: Store<State>) {

    this.movies$ = this.store$.select(state => state.movies)
    this.view$ = this.store$.select(state => state.view)
   
   // “store.select” to give access our components to the state.
  
   }
   onClickMovie(movie: Movie){
    this.store$.dispatch(new ViewDetails(movie))
  }
   onSearchMovie(movie:string)
   {
     this.store$.dispatch(new SearchMovie(movie));// we can use “store.dispatch” to call an action
     this.view$ = this.store$.select(state => state.view)
     console.log(this.view$);
   
   }
  ngOnInit() {
    
  }
  viewDetails(movie)
  {
    console.log("Akcija "+movie.title);
   this.store$.dispatch(new ViewDetails(movie));// we can use “store.dispatch” to call an action
  
  }

  
  
}
