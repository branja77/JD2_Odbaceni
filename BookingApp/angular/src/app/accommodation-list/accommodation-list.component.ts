import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { Accommodation } from '../model/accommodation.model';
import { HttpAccommodationsService} from '../services/http-accommodations.service';
import { NgForm } from "@angular/forms/src/forms";
import { Filter } from "../model/filter.model";
import { FilterService } from "../services/filter.service";
@Component({
  selector: 'app-accommodation-list',
  templateUrl: './accommodation-list.component.html',
  providers: [HttpAccommodationsService, FilterService]
})
export class AccommodationListComponent implements OnInit {
  public name: string;
  accommodations: Accommodation[]; 
  approvedAccommodations: Accommodation[];
  public filter: Filter;
  public query: string;
  page: number;
  error: any;
    constructor(private router: Router,private filterService: FilterService ,private activatedRoute: ActivatedRoute, private accommodationsService: HttpAccommodationsService) {
      activatedRoute.params.subscribe(params => {this.name = params["name"]});
      this.approvedAccommodations = [];
      this.page = 1;
   }

  ngOnInit(): void {
    this.accommodationsService.getAccommodations().then(accommodations => {
      this.accommodations = accommodations;
      this.accommodations.forEach(element => {
        if(element.Approved){
          this.approvedAccommodations.push(element);
        }
      });
    });
   this.filter = new Filter();
    this.filter.MinPrice = 0;
    this.filter.MaxPrice = 10000;
    this.filter.MinRate = 1;
    this.filter.MaxRate = 5;
  }
  onSubmit(searchform: NgForm) {

    //http://localhost:54042/odata/AccomodationsQuery?$filter=Rooms/any(tag:tag/BedCount eq 4) 
//and Rooms/any(r:r/PricePerNight lt 1000 and r/PricePerNight gt 1) and AverageGrade gt 1 and AverageGrade lt 10 and Place/Name eq 'Gacko' and Name eq 'Klinje'
    this.query = `odata/Accommodations?$filter=Rooms/any(tag:tag/BedCount eq ${this.filter.BedCount})
  and Rooms/any(r:r/PricePerNight lt ${this.filter.MaxPrice} and r/PricePerNight gt ${this.filter.MinPrice}) and AvrageGrade gt ${this.filter.MinRate} 
  and AvrageGrade lt ${this.filter.MaxRate} and Place/Name eq '${this.filter.Place}' and Approved eq true`;
//this.query = `odata/AccomodationsQuery`;

    this.filterService.filterAccommodation(this.query).subscribe((result: Array<Accommodation>) => {
      this.accommodations = result;
      this.approvedAccommodations = [];
      this.accommodations.forEach(element => {
        if(element.Approved){
          this.approvedAccommodations.push(element);
        }
      });
      console.log(this.accommodations);
      console.log('filter :');
      console.log(this.filter);
    },
      error => {
        console.log(error);
      });
  }

  changePage(selectedPage: number){
    this.page = selectedPage; 
  }
}