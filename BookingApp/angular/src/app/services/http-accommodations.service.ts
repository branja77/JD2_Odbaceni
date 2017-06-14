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
    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

    postAccommodation(accommodation: Accommodation): Observable<any>  {
        const headers: Headers = new Headers();
        if(localStorage.getItem("token") !== null)
        {
            headers.append("token", localStorage.getItem("token"));
        }
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.post(
        'http://localhost:54042/api/accommodation',
        JSON.stringify({
            accommodation
        }), opts);
    }

      private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}