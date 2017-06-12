import { Component, Input, HostBinding } from '@angular/core';

import { Accommodation } from '../model/accommodation.model';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
})
export class AccommodationComponent {
  @Input() accommodation: Accommodation;
}