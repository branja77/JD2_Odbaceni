import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import { RoomReservation } from '../model/room-reservation.model';
import{ HttpRoomReservationsService} from '../services/http-roomReservations.service';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  providers: [HttpRoomReservationsService]
})
export class MyReservationsComponent {
  public roomReservations: RoomReservation[]; 
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private roomReservationsServic: HttpRoomReservationsService) {
    }
   Delete(reservation: RoomReservation){
     debugger
     this.roomReservationsServic.deleteRoomReservation(reservation.Id).then(f=>{window.location.reload()});
   }

   ngOnInit()
   {
     this.roomReservationsServic.getRoomReservations().then(roomReservations => this.roomReservations=roomReservations);
     console.log(this.roomReservations);
   }
}