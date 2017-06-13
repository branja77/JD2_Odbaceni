import { Component, Input,  } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import { Room } from '../model/room.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
})
export class RoomComponent {
constructor(private router: Router)
  {

  }
  @Input() room: Room;

  bookNow(room: Room): void {
      const link = ['/room-reservation', room.id];
    this.router.navigate(link);
  }
}