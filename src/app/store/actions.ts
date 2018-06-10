import {Action} from '@ngrx/store'
import {Movie} from '../models/movie'

export const SEARCH_MOVIE = "Search movie";
export const SEARCH_GENRE="Search genre";
export const VIEW_DETAILS="View details";
export const ADD_TO_WATCHLIST="Add to watchlist";
export const REMOVE_MOVIE="Remove movie";
export const POSITIVE_VOTE="Positive vote";
export const NEGATIVE_VOTE="Negative vote";

export class SearchMovie implements Action {
    type = SEARCH_MOVIE;
   
    constructor(public movie: String){

    }
}

export class SearchGenre implements Action {
    type = SEARCH_GENRE;
 //  public Movies:Movie[];
   constructor(public genre: string){
 
   
    }
}

export class ViewDetails implements Action{
    type=VIEW_DETAILS;

    constructor(public movie:Movie){
        
    }
}

export class AddToWatchlist implements Action{
    type=ADD_TO_WATCHLIST;

    constructor(public movie:Movie){
        
    }
}

export class RemoveFromWatchlist implements Action{
    type=REMOVE_MOVIE;

    constructor(public movie:Movie){
      
    }
}
export class PositiveVote implements Action{
    type=POSITIVE_VOTE;

    constructor(public movie:Movie){
      
    }
}
export class NegativeVote implements Action{
    type=NEGATIVE_VOTE;

    constructor(public movie:Movie){
      
    }
}


