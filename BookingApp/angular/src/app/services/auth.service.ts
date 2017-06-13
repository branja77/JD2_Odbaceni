import { BAIdentityUser} from '../model/baidentity-user.model';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService{
    loggedIn : boolean;
    responses: Observable<Response>;
    constructor(private http: Http){
        
    }

    logIn(user: BAIdentityUser): void{
        
        const headers: Headers = new Headers();
        headers.append('Content-type', 'application/x-www-form-urlencoded');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;
        const params: string = `username=${user.username}&password=${user.password}&grant_type=password`;
        debugger

        this.http.post('http://localhost:54042/oauth/token', params, opts).subscribe(
                (data) => {

                localStorage.setItem("token","nestoo");
            },
            err => console.log("Greska brt"));
        
    }

    logOut(): void{
        localStorage.removeItem("token");
    }

    isLoggedIn(): boolean{
        if(localStorage.getItem("token") !== null)
            return true;
        else
            return false;
    }
}