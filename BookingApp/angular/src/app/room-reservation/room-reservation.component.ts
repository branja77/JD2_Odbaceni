import { Component } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import { RoomReservation } from '../model/room-reservation.model';
import { Room} from '../model/room.model';
import {HttpRoomReservationsService} from '../services/http-roomReservations.service';
@Component({
  selector: 'app-room-reservation',
  templateUrl: './room-reservation.component.html',
  providers: [HttpRoomReservationsService]
})
export class RoomReservationComponent {
  public id: number;
  public roomReservation: RoomReservation;
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private roomReservationsService : HttpRoomReservationsService) {
      activatedRoute.params.subscribe(params => {this.id = params["id"]});
   }

   onSubmit(roomReservation : RoomReservation){
     //napraviti objekat roomresrvation, pozvati servis, obavjestiti korisnika, redirekcija   
     this.roomReservation = roomReservation;
     const link = ['/my-reservations'];
     this.roomReservation.room = new Room(this.id, null, null, null, null, null);
     this.roomReservationsService.postRoomReservation(roomReservation).then(f=> {this.router.navigate(link)});
   }
}