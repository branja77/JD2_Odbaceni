import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';
import{RoomReservation} from '../model/room-reservation.model';

@Injectable()
export class HttpRoomReservationsService{
    private webApiURL = 'http://localhost:54042/api/roomreservation';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor (private http: Http){

    }

    getRoomReservations():Promise<Array<RoomReservation>> {  
        const headers: Headers = new Headers();
        headers.append('Content-type', 'application/x-www-form-urlencoded');
        headers.append("Authorization", localStorage.getItem("token"));
        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

    return this.http.get(this.webApiURL).toPromise()
    .then(response => response.json() as RoomReservation[] )
    .catch(this.handleError);
  }

    postRoomReservation(roomReservation: RoomReservation): Promise<any>  {
        const headers: Headers = new Headers();
        if(localStorage.getItem("token") !== null)
        {
            headers.append("Authorization", localStorage.getItem("token"));
        }
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;
        
        return this.http.post(this.webApiURL, roomReservation, opts).toPromise().
            then(response => {response.json(); alert("Successfully Created New Room Reservation"); console.log(response.json())})
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        alert(error);
        return Promise.reject(error.message || error);
    }
}