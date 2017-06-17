import { Component, OnInit, Input } from '@angular/core';
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
  roomReservation: RoomReservation;
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private roomReservationsServic: HttpRoomReservationsService) {
    }

   Delete(reservation: RoomReservation){
     this.roomReservationsServic.deleteRoomReservation(reservation.Id).then(f=>{window.location.reload()});
   }

  editRoomReservation(reservation: RoomReservation){
      debugger
      this.roomReservationsServic.putRoomResrvation(reservation).
      then(f => {
        window.location.reload();
    });

  }
  showModal(show: boolean, reservation: RoomReservation){
    if(show){
      document.getElementById(reservation.Id.toString()).style.display='block';
    }else{
      document.getElementById(reservation.Id.toString()).style.display='none';
    }
  }

   ngOnInit()
   {
     this.roomReservationsServic.getRoomReservations().then(roomReservations => {this.roomReservations=roomReservations; console.log(this.roomReservations);});
     
   }
}