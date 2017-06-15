import { Component, Input, HostBinding } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import { Country } from '../model/country.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
})
export class CountryComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute)
  {
  }
  @Input() country: Country;
}