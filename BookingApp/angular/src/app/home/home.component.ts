import { Component } from '@angular/core';
import { Place } from '../model/place.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
    places: Place[]; 
    constructor(){
      this.places = [{id: 1, name: "Bijeljina", region: null}, 
      {id: 2, name: "Novi Sad", region: null},
      {id: 3, name: "Sekovici", region: null}
      ];
    }
}