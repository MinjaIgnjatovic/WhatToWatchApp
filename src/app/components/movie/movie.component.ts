import { Component, OnInit ,Output,Input,EventEmitter} from '@angular/core';
import {Movie} from '../../models/movie'

import {MovieService} from '../../services/movie.service'
import {Store} from '@ngrx/store'
import { State } from '../../store';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  
  view$: Observable<Movie>
    
  @Input() 
  public movie: Movie;
  @Input()
  public clicked:Movie;

  @Output()
  public clickedEvent:EventEmitter<Movie>=new EventEmitter();

  
  constructor(private store$: Store<State>) { 
    this.view$ = this.store$.select(state => state.view)
  }

  ngOnInit() {
  }

 viewDetails(){
    this.clickedEvent.emit(this.movie);
 }

}
