import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { Region } from '../model/region.model';
import { HttpRegionsService} from '../services/http-regions.service';
@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  providers: [HttpRegionsService]
})
export class RegionListComponent implements OnInit {
  countryId: number;
  regions: Region[];
  error: any;
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private regionsService: HttpRegionsService) {
        activatedRoute.params.subscribe(params => {this.countryId = params["id"]});
    }

  ngOnInit(): void {
    this.regionsService.getRegions().then(regions => {this.regions = regions;});
  }

  editRegion(region: Region){
      this.regionsService.putRegion(region).
      then(f => {
        window.location.reload();
      });
  }

  showModal(show: boolean, region: Region){
    if(show){
      document.getElementById(region.Id.toString()).style.display='block';
    }else{
      document.getElementById(region.Id.toString()).style.display='none';
    }
  }
  deleteRegion(region: Region){
    this.regionsService.deleteRegion(region.Id).
    then(f => {
      window.location.reload();
    });
  }
}