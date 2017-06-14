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
  constructor(private router: Router, private activatedRoute: ActivatedRoute)
  {

  }
  @Input() accommodation: Accommodation;

  gotoDetail(accId: string): void {
    const link = ['/accommodation-show', accId];
    this.router.navigate(link);
  }
}