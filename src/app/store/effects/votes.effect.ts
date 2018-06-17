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

    @Effect()
    post$ = this.actions$
        .ofType(movieActions.POSITIVE_VOTE)
        .pipe(
            map(info => (info as movieActions.PositiveVote).movie),
            switchMap(movie => {
                return this.movieService.postPositiveVote(movie)
                    .pipe(
                        map(movie => new movieActions.PostPositiveVoteSucces("success"))
                    )
            })
        )

        @Effect()
    postt$ = this.actions$
        .ofType(movieActions.NEGATIVE_VOTE)
        .pipe(
            map(info => (info as movieActions.NegativeVote).movie),
            switchMap(movie => {
                return this.movieService.postNegativeVote(movie)
                    .pipe(
                        map(movie => new movieActions.PostNegativeVoteSucces("success"))
                    )
            })
        )



    }