import *  as movieActions from '../../store/actions';
import {Movie} from '../../models/movie';
import {Injectable} from '@angular/core';
import {Effect,Actions} from '@ngrx/effects';
import {MovieService} from '../../services/movie.service';
import { switchMap } from 'rxjs/operators';
import {map} from 'rxjs/operators';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable()
export class VotesEffects{

    constructor(
        private actions$: Actions,
        private movieService: MovieService

    )
    {}

  /*  @Effect()
    addVote$=this.actions$.ofType(movieActions.POSITIVE_VOTE).pipe(
        switchMap(()=>{
            
            return this.movieService.addVote().pipe(
               // map(movies=>new movieActions.LoadMoviesSuccess(movies))

            )
        })
    )*/
    
}