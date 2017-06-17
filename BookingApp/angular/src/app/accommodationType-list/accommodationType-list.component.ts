import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { AccommodationType } from '../model/accommodation-type.model';
import { HttpAccommodationTypesService} from '../services/http-accommodationTypes.service';
@Component({
  selector: 'app-accommodationType-list',
  templateUrl: './accommodationType-list.component.html',
  providers: [HttpAccommodationTypesService]
})
export class AccommodationTypeListComponent implements OnInit {
  accommodationTypes: AccommodationType[]; 
  error: any;
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private accommodationTypesService: HttpAccommodationTypesService) {
   }

  ngOnInit(): void {
    this.accommodationTypesService.getAccommodationTypes().then(accommodationTypes => {this.accommodationTypes = accommodationTypes;});
  }

    editAccommodationType(accommodationType: AccommodationType){
      this.accommodationTypesService.putAccommodationType(accommodationType).
      then(f => {
        window.location.reload();
    });

  }
  showModal(show: boolean, accommodationType: AccommodationType){
    if(show){
      document.getElementById(accommodationType.Id.toString()).style.display='block';
    }else{
      document.getElementById(accommodationType.Id.toString()).style.display='none';
    }
  }
  deleteAccommodationType(accommodationType: AccommodationType){
    this.accommodationTypesService.deleteAccommodationType(accommodationType.Id).
    then(f => {
      window.location.reload();
    });  
  }
}