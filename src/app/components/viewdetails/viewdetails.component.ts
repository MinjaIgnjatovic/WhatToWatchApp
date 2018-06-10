import { Component, OnInit ,Input} from '@angular/core';
import { Movie } from '../../models/movie';
import {Store} from '@ngrx/store'
import { State } from '../../store';
import { Observable } from 'rxjs';
import { MovieService } from '../../services/movie.service';
import {SearchMovie, AddToWatchlist,NegativeVote,PositiveVote} from '../../store/actions';
import {ViewDetails} from '../../store/actions';


@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {

    @Input()
    public movie: Movie
  
  
  constructor(private store$: Store<State>) {

 
   }
 
  ngOnInit() {
    
  }

  addToWatchList( movie:Movie)
  {
    this.store$.dispatch(new AddToWatchlist(movie))
  }

  positiveVote()
  {
   // var element = <HTMLInputElement> document.getElementById("testBtn");
    //element.disabled = true;
    this.movie.positive++;
    this.store$.dispatch(new PositiveVote(this.movie))
  }
  negativeVote()
  {
    
    this.movie.negative++;
    this.store$.dispatch(new NegativeVote(this.movie))
  }
  
  
}
