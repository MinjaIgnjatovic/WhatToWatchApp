import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExploreComponent } from './components/explore/explore.component';
import { EventComponent } from './components/event/event.component';
import { AboutComponent } from './components/about/about.component';
import { TwitterComponent } from './components/twitter/twitter.component';
import { SponsorComponent } from './components/sponsor/sponsor.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { MovielistComponent } from './components/movielist/movielist.component';
import { rootReducer } from './store';
import { StoreModule } from "@ngrx/store"
import { FormsModule } from '@angular/forms';
import { MovieService } from './services/movie.service';
import { MovieComponent } from './components/movie/movie.component';
import {ViewdetailsComponent} from './components/viewdetails/viewdetails.component';

const appRoutes: Routes=[
 
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ExploreComponent,
    EventComponent,
    AboutComponent,
    TwitterComponent,
    SponsorComponent,
    ContactComponent,
    FooterComponent,
    MovielistComponent,
    MovieComponent,
    ViewdetailsComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    StoreModule.forRoot(rootReducer)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
