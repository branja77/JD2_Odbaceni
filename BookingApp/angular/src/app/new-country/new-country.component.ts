import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import {NgForm} from '@angular/forms';
import { Country } from '../model/country.model';
import{ HttpCountriesService} from '../services/http-countries.service';

@Component({
  selector: 'app-new-country',
  templateUrl: './new-country.component.html'
})
export class NewCountryComponent {
  public country: Country;
  error: any;
    constructor(private router: Router, private activatedRoute: ActivatedRoute,
     private countriesService: HttpCountriesService){

     }
    onSubmit(country: Country){
      debugger
      this.country = country;
      this.countriesService.postCountry(this.country);
  }
}