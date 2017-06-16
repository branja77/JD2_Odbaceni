import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import {NgForm} from '@angular/forms';
import { AccommodationType } from '../model/accommodation-type.model';
import { HttpAccommodationTypesService} from '../services/http-accommodationTypes.service';

@Component({
  selector: 'app-new-accommodationType',
  templateUrl: './new-accommodationType.component.html',
  providers: [HttpAccommodationTypesService]
})
export class NewAccommodationTypeComponent {
  public accommodationType: AccommodationType;
  error: any;
    constructor(private router: Router, private activatedRoute: ActivatedRoute,
     private accommodationTypesService: HttpAccommodationTypesService){

     }
    onSubmit(accommodationType: AccommodationType){
      this.accommodationType = accommodationType;
      this.accommodationTypesService.postAccommodationType(this.accommodationType);
  }
}