import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import {NgForm} from '@angular/forms';
import { Country } from '../model/country.model';
import { Region } from '../model/region.model';
import{ HttpCountriesService} from '../services/http-countries.service';
import{ HttpRegionsService} from '../services/http-regions.service';

@Component({
  selector: 'app-new-region',
  templateUrl: './new-region.component.html'
})
export class NewRegionComponent {
  public countries: Country[];
  public region: Region;
  error: any;
    constructor(private router: Router, private activatedRoute: ActivatedRoute,
     private countriesService: HttpCountriesService, private regionsService: HttpRegionsService){

     }
    onSubmit(region: Region){
      this.region = region;
      this.regionsService.postRegion(this.region);
    }

    ngOnInit()
    {
        this.countriesService.getCountries().then(coutries=>this.countries = coutries);
    }
}