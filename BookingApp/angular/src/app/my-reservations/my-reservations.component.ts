import { Component } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import { RoomReservation } from '../model/room-reservation.model';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
})
export class MyReservationsComponent {
  public roomReservations: RoomReservation[]; 
    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    }
   Delete(reservation: RoomReservation){
     alert(reservation.id)
   }
}