import { Component, OnInit,Input } from '@angular/core';
import { Movie } from '../../models/movie';
import {Store} from '@ngrx/store'
import { State } from '../../store';
import { Observable } from 'rxjs';
import {RemoveFromWatchlist} from '../../store/actions';
import {selectors as MovieSelectors} from '../../store/reducers/watchlist.reducer';
import { MovieState } from '../../store/reducers/movies.reducer';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {

    watchlist$:Observable<MovieState>
    list:Movie[]

    constructor(private store$: Store<State>) { 
       this.watchlist$ = this.store$.select(state => state.watchlist)
       this.watchlist$.subscribe(list =>{
       if(list!=undefined)
         this.list = MovieSelectors.selectAll(list)       
    })
  }

  ngOnInit() {
  }

  removeMovie(id:number){
    this.store$.dispatch(new RemoveFromWatchlist(id))
  }

}
