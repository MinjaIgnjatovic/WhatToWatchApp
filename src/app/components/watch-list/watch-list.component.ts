import { Component, OnInit,Input } from '@angular/core';
import { Movie } from '../../models/movie';
import {Store} from '@ngrx/store'
import { State } from '../../store';
import { Observable } from 'rxjs';
import {RemoveFromWatchlist} from '../../store/actions';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {

  movies$:Observable<Movie[]>

  constructor(private store$: Store<State>) { 

    this.movies$ = this.store$.select(state => state.watchlist)
   
  }

  ngOnInit() {
  }

  removeMovie(movie:Movie)
  {
    this.store$.dispatch(new RemoveFromWatchlist(movie))
  }

}
