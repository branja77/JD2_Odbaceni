import { Component, Input, HostBinding } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import { Country } from '../model/country.model';
import { HttpCountriesService } from '../services/http-countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
})
export class CountryComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private countriesService: HttpCountriesService)
  {
  }
  @Input() country: Country;

  onSubmit(country: Country){
    debugger
      //this.countriesService.postCountry(country);
  }
}