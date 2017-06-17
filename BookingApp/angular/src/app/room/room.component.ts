import { Component, Input,  } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import { Room } from '../model/room.model';
import { HttpRoomsService } from '../services/http-rooms.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
})
export class RoomComponent {
constructor(private router: Router, private roomsService: HttpRoomsService)
  {

  }
  @Input() room: Room;

  bookNow(id: number): void {
      const link = ['/room-reservation', id];
    this.router.navigate(link);
  }

  editRoom(room: Room){
      this.roomsService.putRoom(room).
      then(f => {
        window.location.reload();
    });

  }
  showModal(show: boolean){
    if(show){
      document.getElementById(this.room.Id.toString()).style.display='block';
    }else{
      document.getElementById(this.room.Id.toString()).style.display='none';
    }
  }
  deleteRoom(room: Room){
    this.roomsService.deleteRoom(room.Id).
    then(f => {
      window.location.reload();
    });  
  }
}