import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { RoomComponent } from './room/room.component';

const Routes = [
  {path: "home", component: HomeComponent},
  {path: "accommodation", component: AccommodationComponent},
  {path: "room/:Id", component: RoomComponent}
  //{path: "", redirectTo:"home"}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccommodationComponent, 
    RoomComponent
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
