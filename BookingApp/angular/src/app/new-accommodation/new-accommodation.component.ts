import { Component } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import { Accommodation } from '../model/accommodation.model';

@Component({
  selector: 'app-new-accommodation',
  templateUrl: './new-accommodation.component.html',
})
export class NewAccommodationComponent {
  public accommodation: Accommodation
    constructor(){}
}