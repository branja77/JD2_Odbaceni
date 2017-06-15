import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { Country } from '../model/country.model';
import { HttpCountriesService} from '../services/http-countries.service';
@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  providers: [HttpCountriesService]
})
export class CountryListComponent implements OnInit {
  countries: Country[]; 
  error: any;
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private countriesService: HttpCountriesService) {
   }

  ngOnInit(): void {
    this.countriesService.getCountries().then(countries => {this.countries = countries;});
  }
}