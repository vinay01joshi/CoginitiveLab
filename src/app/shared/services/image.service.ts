import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt/angular2-jwt';

import { environment } from './../../../environments/environment';

@Injectable()
export class ImageService {

  url = environment.apiBaseUrl+'/photos';
  constructor(private http: Http ,private authHttp: AuthHttp) { }

  get(){
    return this.authHttp.get(this.url)
      .map(respones => respones.json());
  }

  post(image){
    return this.http.post(this.url, image)
      .map(respose => respose.json());
  }

  delete(name){
    return this.http.delete(this.getUrl(name))
      .map(response => response.json());
  }


  getUrl(name){
    return this.url + '?fileName=' + name;
  }

}
