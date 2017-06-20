import { Component, OnInit } from '@angular/core';
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
import { MdDialog, MdDialogRef } from '@angular/material';
//import {GoogleMapComponent} from '../google-map/google-map.component';

@Component({
  selector: 'app-new-accommodation',
  templateUrl: './new-accommodation.component.html',
  providers: [HttpAccommodationsService, HttpPlacesService, HttpAccommodationTypesService, HttpClickService]
})
export class NewAccommodationComponent {
  public accommodation: Accommodation;
  places: Place[];
  accommodationTypes: AccommodationType[];
  error: any;
    constructor(private router: Router, private activatedRoute: ActivatedRoute,
     private accommodationsService: HttpAccommodationsService,
      private placesService: HttpPlacesService,
     private accommodationTypesService: HttpAccommodationTypesService,
     private http: HttpClickService,
     //private dialogRef: MdDialogRef<GoogleMapComponent>,
     private dialog: MdDialog){}

    onSubmit(accommodation: Accommodation){
      this.accommodation = accommodation;
      debugger
      this.accommodationsService.postAccommodation(this.accommodation).then(data =>
      {
          this.http.notify('Admin').subscribe(data => console.log(data));
      });
  }

    ngOnInit(){
      debugger
      this.placesService.getPlaces().then(places => {this.places = places})
      .catch(error => this.error = error);
      this.accommodationTypesService.getAccommodationTypes().then(accommodationTypes => {this.accommodationTypes = accommodationTypes})
      .catch(error => this.error = error);
    }

    openMap() {
      debugger
      alert("otvori mape");
        // let dialogRef = this.dialog.open(GoogleMapComponent);
        // dialogRef.afterClosed().subscribe((res) => {
        //     console.log("Upesno zatvoren map dialog");
        //     if (res == undefined) {
        //         return;
        //     }
        //     this.accommodation.Latitude = res.lat;
        //     this.accommodation.Longitude = res.lng;
        // });
    } 
}