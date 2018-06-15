import {Movie} from '../../models/movie';
import { Action } from "@ngrx/store";

import { Http } from '@angular/http';
import { ADD_TO_WATCHLIST, AddToWatchlist,REMOVE_MOVIE,RemoveFromWatchlist} from "../actions";



export default function (watchlist: Movie[]=[], action: Action) {
    switch (action.type) {
        case ADD_TO_WATCHLIST:
        {
             const {movie} = (action as  AddToWatchlist);
            const l=watchlist.length;
           watchlist[l]=new Movie(movie.id,movie.title,movie.imgsrc,movie.description,movie.genre,movie.rating,movie.year);
           // watchlist.push(new Movie(movie.id,movie.title,movie.imgsrc,movie.description,movie.genre,movie.rating,movie.year));
             return watchlist;
               
        }
        case REMOVE_MOVIE:
        {
            console.log("reducer");
            const {movie} = (action as  RemoveFromWatchlist);
           // delete watchlist[movie.id];
           var found:Movie[]=watchlist.filter(mov=>mov.title!=movie.title);
            
          //  watchlist.filter(mov=>mov.id!==movie.id);
            console.log(found);
           
             return found;
        }
        default:
        return watchlist;
    }
}
       