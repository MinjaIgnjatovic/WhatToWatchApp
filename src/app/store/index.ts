import moviesReducer from './reducers/movies.reducer';
import viewReducer from './reducers/view.reducer';
import {Movie} from '../models/movie';
import {ActionReducerMap} from '@ngrx/store';



export interface State {
    movies: Movie[],
   view:Movie
   
}

export const rootReducer: ActionReducerMap<State> = {
    movies: moviesReducer,
    view:viewReducer

    
}