import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccommodationListComponent } from './accommodation-list/accommodation-list.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryComponent } from './country/country.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { RoomComponent } from './room/room.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentComponent } from './comment/comment.component';
import { NewCountryComponent } from './new-country/new-country.component';
import { RoomListComponent } from './room-list/room-list.component';
import { AccommodationShowComponent} from './accommodation-show/accommodation-show.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { AuthService } from './services/auth.service';
import { HttpAccommodationsService} from './services/http-accommodations.service';
import { HttpPlacesService} from './services/http-places.service';
import { HttpAccommodationTypesService} from './services/http-accommodationTypes.service';
import { HttpCommentsService} from './services/http-comments.service';
import { HttpRoomsService} from './services/http-rooms.service';
import { HttpCountriesService} from './services/http-countries.service';
import { HttpRoomReservationsService} from './services/http-roomReservations.service';
import { RoomReservationComponent} from './room-reservation/room-reservation.component';
import { NewAccommodationComponent } from './new-accommodation/new-accommodation.component';
import { NewRoomComponent } from './new-room/new-room.component';
import { MyReservationsComponent } from './my-reservations/my-reservations.component';
import { RegionListComponent } from './region-list/region-list.component';
import { HttpRegionsService} from './services/http-regions.service';


const Routes = [
  {path: "home", component: HomeComponent},
  {path: "accommodation-list/:name", component: AccommodationListComponent},
  {path: "accommodation-list", component: AccommodationListComponent},
  {path: "accommodation-show/:id", component: AccommodationShowComponent},
  {path: "room/:Id", component: RoomComponent},
  {path: "room-reservation/:id", component: RoomReservationComponent},
  {path: "", redirectTo:"home", pathMatch: "full"},
  {path: "new-accommodation", component: NewAccommodationComponent},
  {path: "new-room/:id", component: NewRoomComponent},
  {path: "my-reservations", component: MyReservationsComponent},
  {path: "country-list", component: CountryListComponent },
  {path: "region-list/:id", component: RegionListComponent},
  {path: "new-country", component: NewCountryComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccommodationListComponent, 
    RoomComponent,
    AccommodationComponent,
    AccommodationShowComponent,
    CommentListComponent,
    CommentComponent,
    LoginHeaderComponent, 
    RoomReservationComponent,
    RoomListComponent,
    NewAccommodationComponent, 
    MyReservationsComponent,
    NewRoomComponent, 
    CountryListComponent,
    CountryComponent, 
    RegionListComponent, 
    NewCountryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [
    AuthService, 
    HttpAccommodationsService, 
    HttpPlacesService,
    HttpCommentsService,
    HttpRoomsService,
    HttpAccommodationTypesService, 
    HttpCountriesService,
    HttpRoomReservationsService, 
    HttpRegionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
