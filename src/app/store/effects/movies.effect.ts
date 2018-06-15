import *  as movieActions from '../../store/actions';
import {Movie} from '../../models/movie';
import {Injectable} from '@angular/core';
import {Effect,Actions} from '@ngrx/effects';
import {MovieService} from '../../services/movie.service';
import { switchMap } from 'rxjs/operators';
import {map} from 'rxjs/operators';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable()
export class MoviesEffects{

    constructor(
        private actions$: Actions,
        private movieService: MovieService

    )
    {}

    @Effect()
    loadMovies$=this.actions$.ofType(movieActions.LOAD_MOVIES).pipe(
        switchMap(()=>{
            return this.movieService.getAll().pipe(
                map(movies=>new movieActions.LoadMoviesSuccess(movies))

            )
        })
    )
    
}