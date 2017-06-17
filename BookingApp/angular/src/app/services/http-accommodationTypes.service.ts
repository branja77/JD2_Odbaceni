import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';
import{AccommodationType} from '../model/accommodation-type.model';

@Injectable()
export class HttpAccommodationTypesService{
    private webApiURL = 'http://localhost:54042/api/AccommodationTypes';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor (private http: Http){

    }

    getAccommodationTypes():Promise<Array<AccommodationType>> {  
        return this.http.get(this.webApiURL).toPromise()
        .then(response => response.json() as AccommodationType[] )
        .catch(this.handleError);
    }

    getAccommodationType(id: number):Promise<AccommodationType> {  
        return this.http.get(this.webApiURL + '/' + id).toPromise()
        .then(response => response.json() as AccommodationType)
        .catch(this.handleError);
    }

    postAccommodationType(accommodationType: AccommodationType): Promise<any>  {
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
        
        return this.http.post(this.webApiURL, accommodationType, opts).toPromise().
            then(response => {response.json(); alert("Successfully Created New Accommodation Type"); console.log(response.json())})
            .catch(this.handleError);
    }

    putAccommodationType(accommodationType: AccommodationType): Promise<any> {
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
        
        return this.http.put(this.webApiURL + '/' + accommodationType.Id, accommodationType, opts).toPromise().
            then(response => {response.json(); alert("Successfully Edited Accommodation Type"); console.log(response.json())})
            .catch(this.handleError);
    }

    deleteAccommodationType(accommodationTypeId: number): Promise<any> {
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
        
        return this.http.delete(this.webApiURL + '/' + accommodationTypeId, opts).toPromise().
            then(response => {response.json(); alert("Successfully Deleted Acommodation Type"); console.log(response.json())})
            .catch(this.handleError);
    }

      private handleError(error: any): Promise<any> {
            console.error('An error occurred', error);
            alert(error);
            return Promise.reject(error.message || error);
      }
}