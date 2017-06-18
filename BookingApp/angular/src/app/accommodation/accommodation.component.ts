import { Component, Input, HostBinding } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import { Accommodation } from '../model/accommodation.model';
import { HttpAccommodationsService } from '../services/http-accommodations.service';
import {MapInfo} from "../map/map-info.model";

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
})
export class AccommodationComponent {
  mapInfo: MapInfo;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private accService: HttpAccommodationsService)
  {
       this.mapInfo = new MapInfo(45.251667, 19.836944, "", "" , "" , "");
  }
  @Input() accommodation: Accommodation;

  gotoDetail(accId: string): void {
    const link = ['../accommodation-show', accId];
    this.router.navigate(link);
  }

    editAccommodation(accommodation: Accommodation){
      this.accService.putAccommodation(accommodation).
      then(f => {
        window.location.reload();
    });

  }
  showModal(show: boolean){
    if(show){
      document.getElementById(this.accommodation.Id.toString()).style.display='block';
    }else{
      document.getElementById(this.accommodation.Id.toString()).style.display='none';
    }
  }

  showModal2(show: boolean, accommodation: Accommodation){
    // debugger
    // this.mapInfo = new MapInfo(accommodation.Latitude, accommodation.Longitude, "", "" , "" , "");
    // alert(accommodation.Latitude + ' ' + accommodation.Longitude);
    if(show){
      document.getElementById(this.accommodation.Place.toString()).style.display='block';
    }else{
      document.getElementById(this.accommodation.Place.toString()).style.display='none';
    }
  }

  deleteAccommodation(accommodation: Accommodation){
    this.accService.deleteAccommodation(accommodation.Id).
    then(f => {
      window.location.reload();
    });  
  }
}