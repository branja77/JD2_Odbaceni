import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


import { Accommodation } from '../model/accommodation.model';
import { HttpAccommodationsService } from '../services/http-accommodations.service';

@Component({
  selector: 'app-accommodation-show',
  templateUrl: './accommodation-show.component.html',
})
export class AccommodationShowComponent implements OnInit {
  public id: number;
  public showComm: boolean = false;
  public accommodation: Accommodation = null;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private accService: HttpAccommodationsService) {
      activatedRoute.params.subscribe(params => {this.id = params["id"]});
  }

  ngOnInit(): void {
     this.accService.getAccommodation(this.id).then(data => { 
       this.accommodation = data;
      });
  
  }

  goBack(): void {
     window.history.back();
  }
  showComments():void{
    if(this.showComm == false)
    {
      this.showComm = true;
    }
    else
    {
      this.showComm = false;
    }
    
  }
}