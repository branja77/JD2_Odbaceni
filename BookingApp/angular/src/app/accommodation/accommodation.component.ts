import { Component, Input, HostBinding } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import { Accommodation } from '../model/accommodation.model';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
})
export class AccommodationComponent {
  constructor(private router: Router)
  {

  }
  @Input() accommodation: Accommodation;

  gotoDetail(accommodation: Accommodation): void {
    const link = ['/accommodation-show', accommodation.id];
    this.router.navigate(link);
  }
}