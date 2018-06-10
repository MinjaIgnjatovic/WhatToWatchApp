import {Movie} from '../../models/movie';
import { Action } from "@ngrx/store";

import { Http } from '@angular/http';
import { SEARCH_GENRE, SearchGenre, SEARCH_MOVIE,SearchMovie,POSITIVE_VOTE,PositiveVote,NEGATIVE_VOTE,NegativeVote } from "../actions";

const initialState: Movie[] =  [
    {
        id: 0,
        title: "Ring",
        imgsrc: "https://m.media-amazon.com/images/M/MV5BNDA2NTg2NjE4Ml5BMl5BanBnXkFtZTYwMjYxMDg5._V1_.jpg",
        description: "Teenagers Katie and Becca discuss an urban legend about a videotape; whoever watches it dies seven days later. Katie confesses that she watched the tape with her friends the previous week. That night, Katie dies and Becca goes insane.",
        genre:"Horor",
        year:"2002",
        rating:8.5,
        positive:20,
        negative:10
    },
    {
        id: 1,
        title: "The Hangover",
        imgsrc: "https://m.media-amazon.com/images/M/MV5BNDAxMTZmZGItZmM2NC00M2E1LWI1NmEtZjhhODM2MGU0ZmJlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX675_CR0,0,675,999_AL_.jpg",
        description:"The Hangover is a series of three American comedy films created by Jon Lucas and Scott Moore and directed by Todd Phillips. All three films follows the misadventures of a quartet of friends also known as 'the Wolfpack'.",
        genre:"Comedy",
        year:"2012",
        rating:8.4,
        positive:20,
        negative:10
    },
    {
        id: 2,
        title: "Remember Me",
        imgsrc: "https://m.media-amazon.com/images/M/MV5BOTA4MTg1ODkwNF5BMl5BanBnXkFtZTcwMzE5ODAxMw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        description: "Remember me is a romantic drama centered on two new lovers. First, Tyler, whose parents have split in the wake of his brother's suicide, and second, Ally, who lives each day to the fullest since witnessing her mother's murder.",
        genre:"Drama",
        year:"2009",
        rating:9.0,
        positive:20,
        negative:10

    },
    {
        id: 3,
        title: "  Infinity War",
        imgsrc: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        description: "Foul-mouthed mutant mercenary Wade Wilson (AKA. Deadpool), brings together a team of fellow mutant rogues to protect a young boy with supernatural abilities from the brutal, time-traveling cyborg, Cable.",
        genre:"Action",
        year:"2016",
        rating:8.4,
        positive:20,
        negative:10
    },
    {
        id: 4,
        title: "Walking Dead",
        imgsrc: "https://m.media-amazon.com/images/M/MV5BZTA3OGU2Y2EtYWIxNy00ZThmLWJhNjYtMmU5NDk4ZWI3Yzc3XkEyXkFqcGdeQXVyNDI4MzQ0MzQ@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
        description: "Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins, and must lead a group of survivors to stay alive.",
        genre:"Thriller",
        year:"2015",
        rating:8.1,
        positive:20,
        negative:10
    },
    {
        id: 5,
        title: "Toy Story 3",
        imgsrc: "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SY1000_SX670_AL_.jpg",
        description: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
        genre:"Animation",
        year:"2016",
        rating:8.3,
        positive:20,
        negative:10
    },
    {
        id: 6,
        title: "Toy Story 2",
        imgsrc: "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SY1000_SX670_AL_.jpg",
        description: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
        genre:"Animation",
        year:"2013",
        rating:8.0,
        positive:20,
        negative:10
    }



]
/*var initialState: Movie[]=[];
var initialStatee=[];
fetch('http://localhost:3000/movies')
      .then(response => response.json())
      .then(json => {
       // this.setState({ initialState: json });
      // this.setState( json );
       //this.initialState=json.stringify();
     initialStatee=json.deserialize();
       console.log(json);
       console.log(initialStatee);
       
      });
      console.log(initialStatee);
      ////
     var initialState: Movie[];
      const URL = 'http://localhost:3000/movies';
      var http:Http;
      http.get('http://localhost:3000/movies')
      .toPromise()
      .then(res=>{
          res.json().data;
          console.log(res);
      });*/
      

      

export default function (state: Movie[] = initialState, action: Action) {
    switch (action.type) {
        case SEARCH_GENRE:
            {
                const {genre} = (action as  SearchGenre)
                var movies:Movie[]=initialState;
                if(genre=="All"){
                    return movies;
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