import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';
import{Country} from '../model/country.model';

@Injectable()
export class HttpCountriesService{
    private webApiURL = 'http://localhost:54042/api/country';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor (private http: Http){
    }

    getCountries():Promise<Array<Country>> {  
        return this.http.get(this.webApiURL).toPromise()
        .then(response => response.json() as Country[] )
        .catch(this.handleError);
    }

    getCountry(id: number):Promise<Country> {  
        return this.http.get(this.webApiURL + '/' + id).toPromise()
        .then(response => response.json() as Country)
        .catch(this.handleError);
    }

    postCountry(country: Country): Promise<any>  {
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
        
        return this.http.post(this.webApiURL, country, opts).toPromise().
            then(response => {response.json(); alert("Successfully Created New Country"); console.log(response.json())})
            .catch(this.handleError);
    }

      private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        alert(error)
        return Promise.reject(error.message || error);
  }
}