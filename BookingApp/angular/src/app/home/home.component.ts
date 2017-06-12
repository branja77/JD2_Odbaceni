import { Component } from '@angular/core';
import { Place } from '../model/place.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
    places: Place[]; 
    constructor(){
      this.places = [{id: 1, name: "Bijeljina", region: null}, 
      {id: 2, name: "Novi Sad", region: null},
      {id: 3, name: "Sekovici", region: null},
      {id: 4, name: "Banja Luka", region: null},
      {id: 5, name: "Brcko", region: null}
      ];
    }

    onSubmit(place: Place, form: NgForm) {
      alert(place.name);
    }
}