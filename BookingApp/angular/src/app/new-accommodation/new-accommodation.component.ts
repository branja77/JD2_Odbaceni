import { Component } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import {NgForm} from '@angular/forms';
import { Accommodation } from '../model/accommodation.model';
import { HttpAccommodationsService} from '../services/http-accommodations.service';

@Component({
  selector: 'app-new-accommodation',
  templateUrl: './new-accommodation.component.html',
  providers: [HttpAccommodationsService]
})
export class NewAccommodationComponent {
  public accommodation: Accommodation
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private accommodationsService: HttpAccommodationsService){}

    onSubmit(accommodation: Accommodation){
      this.accommodation = accommodation;
      this.accommodationsService.postAccommodation(this.accommodation);
  }
}