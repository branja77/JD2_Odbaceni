import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Accommodation } from '../model/accommodation.model';

@Injectable()
export class FilterService {
    private webApiURL = 'http://localhost:54042/';
    constructor(private http: Http) { }

    filterAccommodation(query:string): Observable<any> {
        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append("Authorization", localStorage.getItem("token"));
        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;
        console.log(this.webApiURL + query);

        return this.http.get(this.webApiURL + query, opts).map(this.extractData);
    }

     private extractData(res: Response) {
        return res.json().value;
    }
}