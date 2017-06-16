import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import {NgForm} from '@angular/forms';
import { Place } from '../model/place.model';
import { Region } from '../model/region.model';
import{ HttpPlacesService} from '../services/http-places.service';
import{ HttpRegionsService} from '../services/http-regions.service';

@Component({
  selector: 'app-new-place',
  templateUrl: './new-place.component.html',
  providers: [HttpPlacesService, HttpRegionsService]
})

export class NewPlaceComponent {
  public place: Place;
  public regionId: number;
  error: any;
    constructor(private router: Router, private activatedRoute: ActivatedRoute,
     private placesService: HttpPlacesService, private regionsService: HttpRegionsService){
        activatedRoute.params.subscribe(params => {this.regionId = params["id"]});
     }
    onSubmit(place: Place){
      this.place = place;
      this.place.region = new Region(this.regionId, null, null);
      this.placesService.postPlace(this.place);
    }

}