import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import {NgForm} from '@angular/forms';
import { Room } from '../model/room.model';
import { Accommodation } from '../model/accommodation.model';
import{ HttpRoomsService} from '../services/http-rooms.service';

@Component({
  selector: 'app-new-room',
  templateUrl: './new-room.component.html',
  providers: [HttpRoomsService]
})
export class NewRoomComponent {
    roomId: number;
    room: Room;
    error: any;

    constructor(private router: Router, private activatedRoute: ActivatedRoute,
     private roomsService: HttpRoomsService){
         activatedRoute.params.subscribe(params => {this.roomId = params["id"]});
     }

    onSubmit(room: Room){
      this.room = room;
      debugger;
      this.room.accomodation = new Accommodation(this.roomId, null, null, null, null, null, null, null, null, null, null, null);
      this.roomsService.postRoom(this.room);
    }
}