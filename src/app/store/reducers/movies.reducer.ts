import {Movie} from '../../models/movie';
import { Action, State  } from "@ngrx/store";

import { Http } from '@angular/http';
import {LOAD_MOVIES_SUCCESS,LOAD_MOVIES,LoadMovies, SEARCH_GENRE, SearchGenre, SEARCH_MOVIE,SearchMovie,POSITIVE_VOTE,PositiveVote,NEGATIVE_VOTE,NegativeVote, SearchMovieSuccess,SEARCH_MOVIE_SUCCESS, LoadMoviesSuccess } from "../actions";

import {EntityState,createEntityAdapter,EntityAdapter} from '@ngrx/entity';
import {createFeatureSelector} from '@ngrx/store';

//var initialState: Movie[] =  []

/*
export default function (state = initialState, action: Action) {
    switch (action.type) {
        case LOAD_MOVIES:
        {
            return state;
            
        }
        case LOAD_MOVIES_SUCCESS:{
           const {payload}=(action as LoadMoviesSuccess);
          initialState=payload;
          
          console.log(initialState);
            return payload;
        }
        case SEARCH_GENRE:
            {
                const {genre} = (action as  SearchGenre)
                const movies:Movie[]=initialState;
            
                if(genre=="All"){
                    return initialState;
                }
                else
                {
                      var found: Movie[]=movies.filter(movies=>movies.genre===genre );
                    return found;
                }
              
            }
        case SEARCH_MOVIE:
        {
            const {movie}=(action as SearchMovie)
            var movies:Movie[]=initialState;
            var found:Movie[]=movies.filter(mov=>mov.title==movie);
            if(found!=null)
                return found;
            else
                return null;
        }
       
        case POSITIVE_VOTE:
        {
            //treba da se izmeni u bazi
        }
        case NEGATIVE_VOTE:
        {
            //izmena
        }
        default: {
            return state
        }
    }
}

export interface Movie{
    id: number,
    title: string,
    imgsrc: string,
    description: string,
    genre:string,
    rating: number,
    year:string,
    positive:number,
    negative:number
}*/
export interface MovieState extends EntityState<Movie>{
    
}

const adapter: EntityAdapter<Movie>=createEntityAdapter<Movie>();

export const initialState: MovieState={
    ids:[],
    entities:{}
}
export const iss:MovieState={
    ids:[],
    entities:{}
}
var moviesl:Movie[]=[];

export default function (state:MovieState = initialState, action: Action) {
  
    switch (action.type) {
       
        case LOAD_MOVIES_SUCCESS:{
         
            const {movies}=(action as LoadMoviesSuccess);
           // console.log(movies);
            moviesl=movies;
           
          return (adapter.addMany(movies,state));

         }
        case SEARCH_GENRE:
            {
                const {genre} = (action as  SearchGenre)
               
            
                if(genre=="All"){
                    return (adapter.addMany(moviesl,state));
                }
                else
                {
                    const clean=adapter.removeAll(state);
                    var found: Movie[]=moviesl.filter(movies=>movies.genre===genre );
                      
                    return(adapter.addMany(found,iss));
                  
                }
              
            }
        case SEARCH_MOVIE:
        {
            
            const {movie}=(action as SearchMovie)
            var movies:Movie[]=moviesl;
            var found:Movie[]=movies.filter(mov=>mov.title==movie);
            if(found!=null)
                return adapter.addMany(found,iss);
            else
                return null;
        }
       
        
        default: {
            return state
        }
    }
}

export const selectors=adapter.getSelectors();

