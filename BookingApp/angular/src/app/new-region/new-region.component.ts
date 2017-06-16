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
  public countryID: number;
  public region: Region;
  error: any;
    constructor(private router: Router, private activatedRoute: ActivatedRoute,
     private countriesService: HttpCountriesService, private regionsService: HttpRegionsService){
        activatedRoute.params.subscribe(params => {this.countryID = params["id"]});
     }
    onSubmit(region: Region){
      this.region = region;
      this.region.country = new Country(this.countryID, null, null);
      this.regionsService.postRegion(this.region);
    }
}