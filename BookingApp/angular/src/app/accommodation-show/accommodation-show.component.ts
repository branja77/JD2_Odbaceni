import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


import { Accommodation } from '../model/accommodation.model';

@Component({
  selector: 'app-accommodation-show',
  templateUrl: './accommodation-show.component.html',
})
export class AccommodationShowComponent implements OnInit {
  @Output() close = new EventEmitter();
  public id: number;
  accommodation: Accommodation;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
      activatedRoute.params.subscribe(params => {this.id = params["id"]});
      this.accommodation ={id: 1,
          name: 'pepski1',
          description: 'pepica deskripsn',
          address: 'pepska',
          averageGrade: 1,
          latitude: 1,
          longitude: 1,
          imageUrl: "",
          approved: true,
          accommodationType: {id: 1, name:"smjestaj"},
          place : {id: 3, name: "Sekovici", region: null},
          owner: {id: "branja", email: "branja@gmail.com", password: "branja", username: "branja"}};
  }

  ngOnInit(): void {
  }

  save(): void {
  }

  goBack(): void {
     window.history.back();
  }
}