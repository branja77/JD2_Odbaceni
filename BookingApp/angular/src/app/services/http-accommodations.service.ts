import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import{Accommodation} from '../model/accommodation.model';

@Injectable()
export class HttpAccommodationsService{

    constructor (private http: Http){

    }

    getAccommodations():Observable<any> {
        const opts: RequestOptions = new RequestOptions();
        const headers: Headers = new Headers();
        let accommodations: Accommodation[] = null;
        if(localStorage.getItem("token") !== null)
        {
            headers.append("token", localStorage.getItem("token"));
        }
        opts.headers = headers;
        debugger
        return this.http.get('http://localhost:54042/api/accommodation').map((response:Response)=>{
            console.log(response.json());
            return <any>response.json();
        })
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
}