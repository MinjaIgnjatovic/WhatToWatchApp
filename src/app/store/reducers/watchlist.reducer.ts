import {Movie} from '../../models/movie';
import { Action } from "@ngrx/store";
import { Http } from '@angular/http';
import { ADD_TO_WATCHLIST, AddToWatchlist,REMOVE_MOVIE,RemoveFromWatchlist} from "../actions";
import {EntityState,createEntityAdapter,EntityAdapter} from '@ngrx/entity';
import {createFeatureSelector} from '@ngrx/store';
import {MovieState} from './movies.reducer';

const adapter: EntityAdapter<Movie>=createEntityAdapter<Movie>();

export const initialState: MovieState={
    ids:[],
    entities:{}
}

export default function (state:MovieState = initialState, action: Action) {
   
    switch (action.type) {
        case ADD_TO_WATCHLIST: {
            const {movie} = (action as  AddToWatchlist)
            const newState= (adapter.addOne(movie,state))
            return newState;     
        }
        case REMOVE_MOVIE:{
           const {id}=(action as RemoveFromWatchlist)
           return adapter.removeOne(id,state)
        }
        default:
             return state;
    }
}

export const selectors=adapter.getSelectors();
