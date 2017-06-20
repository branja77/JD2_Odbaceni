import { Component, OnInit, NgZone } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import { HttpClickService } from '../services/http-click.service';

import {NgForm} from '@angular/forms';
import { Accommodation } from '../model/accommodation.model';
import { Place } from '../model/place.model';
import { AccommodationType } from '../model/accommodation-type.model';
import { HttpAccommodationsService} from '../services/http-accommodations.service';
import{ HttpPlacesService} from '../services/http-places.service';
import{ HttpAccommodationTypesService} from '../services/http-accommodationTypes.service';


@Component({
  selector: 'app-new-accommodation',
  templateUrl: './new-accommodation.component.html',
  providers: [HttpAccommodationsService, HttpPlacesService, HttpAccommodationTypesService, HttpClickService, ]
})
export class NewAccommodationComponent {
  public accommodation: Accommodation;
  places: Place[];
  notifications: string[];
  accommodationTypes: AccommodationType[];
  error: any;
    constructor(private router: Router, private activatedRoute: ActivatedRoute,
     private accommodationsService: HttpAccommodationsService,
      private placesService: HttpPlacesService,
       private accommodationTypesService: HttpAccommodationTypesService,
       private http: HttpClickService
       ){}

    onSubmit(accommodation: Accommodation){
      this.accommodation = accommodation;
      debugger
      this.accommodationsService.postAccommodation(this.accommodation).then(data =>
      {
          this.http.notify('Admin').subscribe(data => console.log(data));
      });
  }

    ngOnInit(){
      this.placesService.getPlaces().then(places => {this.places = places})
      .catch(error => this.error = error);
      this.accommodationTypesService.getAccommodationTypes().then(accommodationTypes => {this.accommodationTypes = accommodationTypes})
      .catch(error => this.error = error);
    }
}