import {Movie} from '../../models/movie';
import { Action } from "@ngrx/store";

import { Http } from '@angular/http';
import { ADD_TO_WATCHLIST, AddToWatchlist,REMOVE_MOVIE,RemoveFromWatchlist} from "../actions";



export default function (watchlist: Movie[]=[], action: Action) {
    switch (action.type) {
        case ADD_TO_WATCHLIST:
        {
             const {movie} = (action as  AddToWatchlist);
           // watchlist[movie.id]=new Movie(movie.id,movie.title,movie.imgsrc,movie.description,movie.genre,movie.rating,movie.year);
            watchlist.push(new Movie(movie.id,movie.title,movie.imgsrc,movie.description,movie.genre,movie.rating,movie.year));
             return watchlist;
               
        }
        case REMOVE_MOVIE:
        {
            const {movie} = (action as  AddToWatchlist);
           // delete watchlist[movie.id];
            watchlist.filter(mov=>mov!=movie);
           
             return watchlist;
        }
        default:
        return watchlist;
    }
}
       