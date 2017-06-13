import { Component, Input } from '@angular/core';

import { Room } from '../model/room.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
})
export class RoomComponent {
  constructor()
  {

  }
  @Input() room: Room;

  bookNow(room: Room): void {
      alert(room.pricePerNight)
  }
}