import { Component, Input, HostBinding } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import { Accommodation } from '../model/accommodation.model';
import { HttpAccommodationsService } from '../services/http-accommodations.service';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
})
export class AccommodationComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private accService: HttpAccommodationsService)
  {

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
  deleteAccommodation(accommodation: Accommodation){
    this.accService.deleteAccommodation(accommodation.Id).
    then(f => {
      window.location.reload();
    });  
  }
}