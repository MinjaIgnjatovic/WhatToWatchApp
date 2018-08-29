import {Movie} from '../../models/movie';
import { Action, State  } from "@ngrx/store";
import { Http } from '@angular/http';
import {LOAD_MOVIES_SUCCESS,LOAD_MOVIES,LoadMovies, SEARCH_GENRE,SEARCH_GENRE_SUCCESS, SearchGenre,SearchGenreSuccess, SEARCH_MOVIE,SearchMovie,POSITIVE_VOTE,PositiveVote,NEGATIVE_VOTE,NegativeVote, SearchMovieSuccess,SEARCH_MOVIE_SUCCESS, LoadMoviesSuccess } from "../actions";
import {EntityState,createEntityAdapter,EntityAdapter} from '@ngrx/entity';
import {createFeatureSelector} from '@ngrx/store';
   
export interface MovieState extends EntityState<Movie>{
    
}

const adapter: EntityAdapter<Movie>=createEntityAdapter<Movie>();

export const initialState: MovieState={
    ids:[],
    entities:{}
}

export default function (state:MovieState = initialState, action: Action) {
  
    switch (action.type) {
       
        case LOAD_MOVIES_SUCCESS:{   
            const {movies}=(action as LoadMoviesSuccess)    
            return (adapter.addMany(movies,state))
         }
        
         case SEARCH_MOVIE_SUCCESS:{
           const {movie}=(action as SearchMovieSuccess)
            const clean=adapter.removeAll(state)
           return adapter.addOne(movie,clean)
         }
         
         case SEARCH_GENRE_SUCCESS:{
            const {movies}=(action as SearchGenreSuccess)
            adapter.removeAll(state)
            return (adapter.addMany(movies,state))
          }

         default:{

         }
        }
    }



/*var moviesList:Movie[]=[];

export default function (state:MovieState = initialState, action: Action) {
  
    switch (action.type) {
       
        case LOAD_MOVIES_SUCCESS:{    
            const {movies}=(action as LoadMoviesSuccess)
            moviesList=movies     
            return (adapter.addMany(movies,state))
         }
        
         case SEARCH_GENRE: {
             const {genre} = (action as  SearchGenre)
             if(genre=="All"){
                 return adapter.addMany(moviesList,state)
              }
             else{ 
                var found: Movie[]=moviesList.filter(movies=>movies.genre==genre );
                const clean=adapter.removeAll(state); 
                return adapter.addMany(found,clean)              
                }
              
            }
        case SEARCH_MOVIE:
        { 
            const {title}=(action as SearchMovie)
            var movies:Movie[]=moviesList
            var found:Movie[]=movies.filter(mov=>mov.title==title);
            const clean=adapter.removeAll(state);
            if(found!=null)
                return adapter.addMany(found,clean);
            else
                return null;
        }
       
        
        default: {
            return state
        }
    }
}*/

export const selectors=adapter.getSelectors();
