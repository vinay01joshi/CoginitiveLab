import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { JwtHelper, tokenNotExpired } from "angular2-jwt";
import { environment } from './../../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  url = environment.apiBaseUrl;
  constructor(private http: Http) { }

  login(credentials){
    return this.http.post(this.url+'/account',credentials)
        .map(response => {
          let result = response.json();
          if(result && result.token){
            //save token in local storage
            localStorage.setItem('token',result.token);            
            return true;
          }
          return false;
        });
  }

  logout(){
     localStorage.removeItem('token');
  }

  get currentUser(){
    let token = localStorage.getItem('token');

    if(!token) return null;

    return new JwtHelper().decodeToken(token);
  }

  isLoggedIn():boolean {
    return tokenNotExpired();
  }
}
