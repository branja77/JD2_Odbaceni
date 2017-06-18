import { Component, OnInit } from '@angular/core';
import { Place } from '../model/place.model';
import {NgForm} from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import{ HttpPlacesService} from '../services/http-places.service';
import {MapInfo} from "../map/map-info.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{
    places: Place[]; 
    error: any;
    mapInfo: MapInfo;
    constructor(private router: Router, private placesService: HttpPlacesService){
      this.mapInfo = new MapInfo(45.251667, 19.836944, "", "" , "" , "");
    }

    ngOnInit(){
          console.log(this.placesService.getPlaces());
    this.placesService.getPlaces().then(places => {this.places = places})
      .catch(error => this.error = error);
      console.log(this.places);
    }

    onSubmit(place: Place, form: NgForm) {
      this.router.navigate(['/accommodation-list/' + place.name]);
    }
}