import { Component } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import { Room } from '../model/room.model';

@Component({
  selector: 'app-room-reservation',
  templateUrl: './room-reservation.component.html',
})
export class RoomReservationComponent {
  public id: number;
  public room: Room
    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
      activatedRoute.params.subscribe(params => {this.id = params["id"]});
    }
   reserveRoom(){
     const link = ['/my-reservations'];
    this.router.navigate(link);
   }
}