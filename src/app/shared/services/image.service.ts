import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from './../../../environments/environment';

@Injectable()
export class ImageService {

  url = environment.apiBaseUrl+'/photos';
  constructor(private http: Http) { }

  get(){
    return this.http.get(this.url)
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
