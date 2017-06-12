import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccommodationListComponent } from './accommodation-list/accommodation-list.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { RoomComponent } from './room/room.component';
import { CommentListComponent } from './comment-list/comment-list.component';

const Routes = [
  {path: "home", component: HomeComponent},
  {path: "accommodation-list/:name", component: AccommodationListComponent},
  {path: "accommodation-list", component: AccommodationListComponent},
  {path: "accommodation", component: AccommodationComponent},
  {path: "room/:Id", component: RoomComponent},
  {path: "", redirectTo:"home", pathMatch: "full"}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccommodationListComponent, 
    RoomComponent,
    AccommodationComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
