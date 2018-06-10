import { Component, OnInit ,Input} from '@angular/core';
import { Movie } from '../../models/movie';
import {Store} from '@ngrx/store'
import { State } from '../../store';
import { Observable } from 'rxjs';
import { MovieService } from '../../services/movie.service';
import {SearchMovie} from '../../store/actions';
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
  
  
}
