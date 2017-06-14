import { Component, Input, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import { Accommodation } from '../model/accommodation.model';
import { Room } from '../model/room.model';
import { HttpRoomsService} from '../services/http-rooms.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
})
export class RoomListComponent implements OnInit {

    @Input() accommodation: Accommodation;
    rooms: Room[];
    constructor(private roomsService: HttpRoomsService)
    {
    }

    ngOnInit(){
      this.roomsService.getRooms().then(data => { this.rooms = data;});
    }
}