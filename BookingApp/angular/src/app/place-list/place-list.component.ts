import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { Place } from '../model/place.model';
import { HttpPlacesService} from '../services/http-places.service';
@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  providers: [HttpPlacesService]
})
export class PlaceListComponent implements OnInit {
  regionId: number;
  places: Place[];
  error: any;
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private placesService: HttpPlacesService) {
        activatedRoute.params.subscribe(params => {this.regionId = params["id"]});
    }

  ngOnInit(): void {
    this.placesService.getPlaces().then(places => {this.places = places;});
  }
}