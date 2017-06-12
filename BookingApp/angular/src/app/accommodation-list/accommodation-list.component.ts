import { Component } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import { Accommodation } from '../model/accommodation.model';

@Component({
  selector: 'app-accommodation-list',
  templateUrl: './accommodation-list.component.html',
})
export class AccommodationListComponent {
  public name: string;
  public accommodations: Accommodation[]; 
    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
      activatedRoute.params.subscribe(params => {this.name = params["name"]});
      this.accommodations = [
        {
          id: 1,
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
          owner: {id: "branja", email: "branja@gmail.com", password: "branja", username: "branja"}
        },
        {
          id: 2,
          name: 'pepski2',
          description: 'pepica deskripsn neki drugi, kazu dobar smjestaj',
          address: 'pepska 2',
          averageGrade: 1,
          latitude: 1,
          longitude: 1,
          imageUrl: "",
          approved: true,
          accommodationType: {id: 1, name:"smjestaj"},
          place : {id: 3, name: "Sekovici", region: null},
          owner: {id: "branja", email: "branja@gmail.com", password: "branja", username: "branja"}
      },
      {
          id: 3,
          name: 'smjesstajcic neki',
          description: 'nesto opisa, ovaj nije nesto',
          address: 'ulica ljubicica',
          averageGrade: 1,
          latitude: 1,
          longitude: 1,
          imageUrl: "",
          approved: true,
          accommodationType: {id: 1, name:"smjestaj"},
          place : {id: 1, name: "Bijeljina", region: null},
          owner: {id: "pepo", email: "pepo@gmail.com", password: "pepo", username: "pepo"}
      },         {
          id: 4,
          name: 'branjin smjestaj',
          description: 'trosnja sirotinjska kucica',
          address: 'sirotiljska',
          averageGrade: 1,
          latitude: 1,
          longitude: 1,
          imageUrl: "",
          approved: true,
          accommodationType: {id: 1, name:"smjestaj"},
          place : {id: 2, name: "Novi Sad", region: null},
          owner: {id: "branja", email: "branja@gmail.com", password: "branja", username: "branja"}
      },
      {
          id: 5,
          name: 'smjestaj',
          description: 'smjestaj',
          address: 'sekovacka',
          averageGrade: 1,
          latitude: 1,
          longitude: 1,
          imageUrl: "",
          approved: true,
          accommodationType: {id: 1, name:"smjestaj"},
          place : {id: 3, name: "Sekovici", region: null},
          owner: {id: "branja", email: "branja@gmail.com", password: "branja", username: "branja"}
      }
      ];
   }
}