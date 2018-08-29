import {Movie} from '../../models/movie';
import { Action } from "@ngrx/store";
import { Http } from '@angular/http';
import { VIEW_DETAILS, ViewDetails} from "../actions";

export default function (view: Movie=null, action: Action) {
    switch (action.type) {
        case VIEW_DETAILS: {
            const {movie} = (action as  ViewDetails);
            //view=movie;
            return movie;            
        }
        default:
        return view;
    }
}
       