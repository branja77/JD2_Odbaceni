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
        this.rooms = 
        [
            {
                id: 1,
                roomNumber: 1,
                bedCount: 2,
                description: "Pepska soba, kosta boga oca, al sve ima. Pepi kad dolazi, uvijek tu ide.",
                pricePerNight: 10000,
                accommodation: null
            },
            {
                id: 2,
                roomNumber: 2,
                bedCount: 1,
                description: "Branjina soba, prava sirotiljska, tu sirotilja spava.",
                pricePerNight: 1,
                accommodation: null
            },
            {
                id: 3,
                roomNumber: 3,
                bedCount: 4,
                description: "Prosjecna klasicna soba.",
                pricePerNight: 60,
                accommodation: null
            },
        ];
    }
}