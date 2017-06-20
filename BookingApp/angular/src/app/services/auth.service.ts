import { BAIdentityUser} from '../model/baidentity-user.model';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { NotificationService } from '../services/notification.service';


@Injectable()
export class AuthService{
    loggedIn : boolean;
    isConnected: Boolean;
    responses: Observable<Response>;
    constructor(private http: Http, private notifService: NotificationService){
            this.isConnected = false;
    }

    logIn(user: BAIdentityUser): void{
        
        const headers: Headers = new Headers();
        headers.append('Content-type', 'application/x-www-form-urlencoded');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;
        const params: string = `username=${user.username}&password=${user.password}&grant_type=password`;

        this.http.post('http://localhost:54042/oauth/token', params, opts).subscribe(
            (data) => {
                if(data.status == 200){
                    let obj = data.json();
                    const token = obj['token_type'] + ' ' + obj['access_token'];
                    localStorage.setItem("token",token);
                    localStorage.setItem("username",user.username);
                    this.notifService.startConnection();
                    this.checkConnection();
                }else{
                    alert("Oops, something went wrong. Try again.");
                }
            },
            err => {
                alert("Wrong username and password");
            });
        
    }

    logOut(): void{
        localStorage.removeItem("token");
        localStorage.removeItem("username");
    }

    isLoggedIn(): boolean{
        if(localStorage.getItem("token") !== null)
            return true;
        else
            return false;
    }

    private checkConnection(){
        this.notifService.connectionEstablished.subscribe(e => {this.isConnected = e; 
            if (e) {
               this.notifService.sendHello()
            }
        });
    }
}