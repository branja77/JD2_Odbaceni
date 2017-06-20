import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { Accommodation } from '../model/accommodation.model';
import { HttpAccommodationsService} from '../services/http-accommodations.service';
import { HttpClickService } from '../services/http-click.service';

@Component({
  selector: 'unapproved-accommodations',
  templateUrl: './unapproved-accommodations.component.html',
  providers: [HttpClickService]
})
export class UnapprovedAccommodationsComponent implements OnInit {
  public name: string;
  accommodations: Accommodation[]; 
  error: any;
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClickService, private accommodationsService: HttpAccommodationsService) {
   }

  ngOnInit(): void {
    this.accommodationsService.getAccommodations().then(accommodations => {this.accommodations = accommodations;});
  }

  approve(accId: number){
    this.accommodationsService.getAccommodation(accId).then(accommodation => {
      accommodation.Approved = true;
      this.accommodationsService.putAccommodation(accommodation).
      then(f =>
      {
          this.http.notify('Manager').subscribe(data => window.location.reload());      
      });
    });
    
  }

  reject(accId: number){
    this.accommodationsService.deleteAccommodation(accId).
    then(f => {
      window.location.reload();
    });  
  }
}