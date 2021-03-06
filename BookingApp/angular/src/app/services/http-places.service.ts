import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';
import{Place} from '../model/Place.model';

@Injectable()
export class HttpPlacesService{
    private webApiURL = 'http://localhost:54042/api/place';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor (private http: Http){

    }

    getPlaces():Promise<Array<Place>> {  
        const headers: Headers = new Headers();
        headers.append('Content-type', 'application/x-www-form-urlencoded');
        headers.append("Authorization", localStorage.getItem("token"));
        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

    return this.http.get(this.webApiURL).toPromise()
    .then(response => response.json() as Place[] )
    .catch(this.handleError);
  }

    postPlace(place: Place): Promise<any>  {
       const headers: Headers = new Headers();
        if(localStorage.getItem("token") !== null)
        {
            headers.append("Authorization", localStorage.getItem("token"));
        }
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;
        
        return this.http.post(this.webApiURL, place, opts).toPromise().
            then(response => {response.json(); alert("Successfully Created New Place"); console.log(response.json())})
            .catch(this.handleError);
    }

    putPlace(place: Place): Promise<any> {
        const headers: Headers = new Headers();
        debugger
        if(localStorage.getItem("token") !== null)
        {
            headers.append("Authorization", localStorage.getItem("token"));
        }
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;
        
        return this.http.put(this.webApiURL + '/' + place.Id, place, opts).toPromise().
            then(response => {response.json(); alert("Successfully Edited Place"); console.log(response.json())})
            .catch(this.handleError);
    }

    deletePlace(placeId: number): Promise<any> {
        const headers: Headers = new Headers();
        debugger
        if(localStorage.getItem("token") !== null)
        {
            headers.append("Authorization", localStorage.getItem("token"));
        }
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;
        
        return this.http.delete(this.webApiURL + '/' + placeId, opts).toPromise().
            then(response => {response.json(); alert("Successfully Deleted Place"); console.log(response.json())})
            .catch(this.handleError);
    }

      private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    alert(error)
    return Promise.reject(error.message || error);
  }
}