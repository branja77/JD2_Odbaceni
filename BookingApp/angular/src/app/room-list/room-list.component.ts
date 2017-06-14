import { Component, Input } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import { Accommodation } from '../model/accommodation.model';
import { Room } from '../model/room.model';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
})
export class RoomListComponent {

    @Input() accommodation: Accommodation;
    rooms: Room[];
    constructor()
    {
        this.rooms = [];
    }
}