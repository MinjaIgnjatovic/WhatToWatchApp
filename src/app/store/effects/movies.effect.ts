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

    @Effect()
    searchedMovie$=this.actions$.ofType(movieActions.SEARCH_MOVIE)
    .pipe(
        map(movie => (movie as movieActions.SearchMovie).title),
        switchMap(movie=>{
            return this.movieService.searchMovie(movie)
            .pipe(
                map(movie=>new movieActions.SearchMovieSuccess(movie))
            )
        })
    )

    @Effect()
    searchedGenre$=this.actions$.ofType(movieActions.SEARCH_GENRE)
    .pipe(
        map(genre=> (genre as movieActions.SearchGenre).genre),
        switchMap(genre=>{
            return this.movieService.searchGenre(genre)
            .pipe(
                map(movies=>new movieActions.SearchGenreSuccess(movies))
            )
        })
    )
    
}