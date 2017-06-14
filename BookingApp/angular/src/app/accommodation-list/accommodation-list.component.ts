import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { Accommodation } from '../model/accommodation.model';
import { HttpAccommodationsService} from '../services/http-accommodations.service';
@Component({
  selector: 'app-accommodation-list',
  templateUrl: './accommodation-list.component.html',
  providers: [HttpAccommodationsService]
})
export class AccommodationListComponent implements OnInit {
  public name: string;
  public accommodations: Accommodation[]; 
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private accommodationsService: HttpAccommodationsService) {
      activatedRoute.params.subscribe(params => {this.name = params["name"]});
   }

  ngOnInit(): void {
    this.accommodationsService.getAccommodations();
    
  }
   
}