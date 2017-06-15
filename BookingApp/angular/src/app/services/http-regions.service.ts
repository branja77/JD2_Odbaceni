import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';
import{Region} from '../model/region.model';

@Injectable()
export class HttpRegionsService{
    private webApiURL = 'http://localhost:54042/api/region';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor (private http: Http){
    }

    getRegions():Promise<Array<Region>> {  
        return this.http.get(this.webApiURL).toPromise()
        .then(response => response.json() as Region[] )
        .catch(this.handleError);
    }

    getRegion(id: number):Promise<Region> {  
        return this.http.get(this.webApiURL + '/' + id).toPromise()
        .then(response => response.json() as Region)
        .catch(this.handleError);
    }

    postRegion(region: Region): Promise<any>  {
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
        
        return this.http.post(this.webApiURL, region, opts).toPromise().
            then(response => {response.json(); alert("Successfully Created New Region"); console.log(response.json())})
            .catch(this.handleError);
    }

      private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        alert(error)
        return Promise.reject(error.message || error);
  }
}