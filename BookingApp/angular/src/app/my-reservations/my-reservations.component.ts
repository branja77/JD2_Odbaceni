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
      this.roomReservations = [
        {
          id: 1,
          startDate: new Date('03/14/2017'),
          endDate: new Date('03/16/2017'),
          timeStamp: new Date('02/13/2017'),
          room: {id: 1, roomNumber: 3, bedCount: 3, description:"", pricePerNight: 1000, accommodation: null},
          user: {id: "branja", email: "branja@gmail.com", password: "branja", username:"branja"}
        },
        {
          id: 2,
          startDate: new Date('1/13/2017'),
          endDate: new Date('2/23/2017'),
          timeStamp: new Date('3/30/2017'),
          room: {id: 2, roomNumber: 3, bedCount: 3, description:"", pricePerNight: 1000, accommodation: null},
          user: {id: "branja", email: "branja@gmail.com", password: "branja", username:"branja"}
        }
      ];
   }
   Delete(reservation: RoomReservation){
     alert(reservation.id)
   }
}