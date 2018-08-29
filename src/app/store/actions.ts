import {Movie} from '../models/movie'
import {Action} from '@ngrx/store'

export const LOAD_MOVIES="Load movies";
export const LOAD_MOVIES_SUCCESS="Load movies success";
export const SEARCH_MOVIE = "Search movie";
export const SEARCH_MOVIE_SUCCESS = "Search movie sucess";
export const SEARCH_GENRE="Search genre";
export const SEARCH_GENRE_SUCCESS = "Search genre sucess";
export const VIEW_DETAILS="View details";
export const ADD_TO_WATCHLIST="Add to watchlist";
export const REMOVE_MOVIE="Remove movie";
export const POSITIVE_VOTE="Positive vote";
export const NEGATIVE_VOTE="Negative vote";
export const POSITIVE_VOTE_SUCCESS="Positive vote success";
export const NEGATIVE_VOTE_SUCCESS="Positive vote success";


export class LoadMovies implements Action {
    type = LOAD_MOVIES;
   
    constructor(){

    }
}
export class LoadMoviesSuccess implements Action {
    type = LOAD_MOVIES_SUCCESS;
    
    constructor(public movies: Movie[]){
       
   
    }
}
export class SearchMovie implements Action {
    type = SEARCH_MOVIE;
   
    constructor(public title: String){

    }
}
export class SearchMovieSuccess implements Action{
    type=SEARCH_MOVIE_SUCCESS;

    constructor(public movie:Movie)
    {

    }
}

export class SearchGenre implements Action {
    type = SEARCH_GENRE;
  public Movies:Movie[];
   constructor(public genre: string){
 
   
    }
}
export class SearchGenreSuccess implements Action{
    type=SEARCH_GENRE_SUCCESS;

    constructor(public movies:Movie[])
    {

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

    constructor(public id:number){
      
    }
}
export class PositiveVote implements Action{
    type=POSITIVE_VOTE;

    constructor(public movie:Movie){
      
    }
}
export class PostPositiveVoteSucces implements Action{
    type=POSITIVE_VOTE_SUCCESS;

    constructor(public s:String)
    {

    }
}
export class NegativeVote implements Action{
    type=NEGATIVE_VOTE;

    constructor(public movie:Movie){
      
    }
}
export class PostNegativeVoteSucces implements Action{
    type=NEGATIVE_VOTE_SUCCESS;

    constructor(public s:String)
    {

    }
}


