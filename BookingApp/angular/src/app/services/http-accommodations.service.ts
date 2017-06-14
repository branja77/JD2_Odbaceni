import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';
import{Accommodation} from '../model/accommodation.model';

@Injectable()
export class HttpAccommodationsService{
    private webApiURL = 'http://localhost:54042/api/accommodation';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor (private http: Http){

    }

    getAccommodations():Promise<Array<Accommodation>> {  
        return this.http.get(this.webApiURL).toPromise()
        .then(response => response.json() as Accommodation[] )
        .catch(this.handleError);
    }

    getAccommodation(id: number):Promise<Accommodation> {  
        return this.http.get(this.webApiURL + '/' + id).toPromise()
        .then(response => response.json() as Accommodation)
        .catch(this.handleError);
    }

    postAccommodation(accommodation: Accommodation): Promise<any>  {
        const headers: Headers = new Headers();
        if(localStorage.getItem("token") !== null)
        {
            headers.append("Authorization", localStorage.getItem("token"));
        }
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;
        
        return this.http.post(this.webApiURL, accommodation, opts).toPromise().
            then(response => {response.json(); console.log(response.json())})
            .catch(this.handleError);
    }

      private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}