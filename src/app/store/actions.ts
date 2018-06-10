import {Action} from '@ngrx/store'
import {Movie} from '../models/movie'

export const SEARCH_MOVIE = "Search movie";
export const SEARCH_GENRE="Search genre";
export const VIEW_DETAILS="View details";

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
        console.log("Usao u akciju");
    }
}



