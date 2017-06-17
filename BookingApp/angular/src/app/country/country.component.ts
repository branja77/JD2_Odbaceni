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

  editCountry(country: Country){
      this.countriesService.putCountry(country).
      then(f => {
        window.location.reload();
    });

  }
  showModal(show: boolean){
    if(show){
      document.getElementById(this.country.Id.toString()).style.display='block';
    }else{
      document.getElementById(this.country.Id.toString()).style.display='none';
    }
  }
  deleteCountry(country: Country){
    this.countriesService.deleteCountry(country.Id).
    then(f => {
      window.location.reload();
    });  
  }
}