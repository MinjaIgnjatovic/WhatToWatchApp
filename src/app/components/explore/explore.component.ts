import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Movie} from '../../models/movie'
import {MovieService} from '../../services/movie.service'
import {Store} from '@ngrx/store'
import { State } from '../../store';
import {SearchGenre,SearchMovie} from '../../store/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  selectedOption:string;
  printedOption:string;
  searchMoviee:string;

  
  
  //public genre$: Observable<string>

  
  options=[
    {name:'Horor', value:'Horor'},
    {name:'Drama', value:'Drama'},
    {name:'Action', value:'Action'},
    {name:'Thriller', value:'Thriller'},
    {name:'Animation', value:'Animation'},
    {name:'Comedy', value:'Comedy'},
    {name:'All',value:'All'}

  ]
  constructor(private store$: Store<State>) { 
     // this.genre$=this.store$.select(state=>state.searchedGenre);
  }

  

  ngOnInit() {
  }

  searchGenre() {
   this.printedOption=this.selectedOption;
  // console.log(this.printedOption);
  this.searchMoviee="";
   this.store$.dispatch(new SearchGenre(this.printedOption));// we can use “store.dispatch” to call an action
  
  }

  searchMovie(){
      this.store$.dispatch(new SearchMovie(this.searchMoviee));
  }

}
