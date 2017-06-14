import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';
import{ Room } from '../model/room.model';

@Injectable()
export class HttpRoomsService{
    private webApiURL = 'http://localhost:54042/api/room';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor (private http: Http){

    }

    getRooms():Promise<Array<Room>> {  
        const headers: Headers = new Headers();
        headers.append('Content-type', 'application/x-www-form-urlencoded');
        headers.append("Authorization", localStorage.getItem("token"));
        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

    return this.http.get(this.webApiURL, opts).toPromise()
    .then(response => response.json() as Room[] )
    .catch(this.handleError);
  }

    postPlace(accommodation: Comment): Observable<any>  {
        /*
        return this.http.post(
        'http://localhost:54042/api/accommodation',
        JSON.stringify({
            accommodation
        }), opts);
        */
        return null;
    }

      private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}