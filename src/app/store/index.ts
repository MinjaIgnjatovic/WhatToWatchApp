import moviesReducer from './reducers/movies.reducer';
import viewReducer from './reducers/view.reducer';
import {Movie} from '../models/movie';
import {ActionReducerMap} from '@ngrx/store';
import watchlistReducer from './reducers/watchlist.reducer';
import {MovieState} from './reducers/movies.reducer';

export * from './effects';

export interface State {
    movies: MovieState ,
    view: Movie,
    watchlist: MovieState 
}

export const rootReducer: ActionReducerMap<State> = {
    movies: moviesReducer,
    view: viewReducer,
    watchlist: watchlistReducer   
}

