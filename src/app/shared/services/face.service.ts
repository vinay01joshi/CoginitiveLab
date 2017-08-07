import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from './../../../environments/environment';

@Injectable()
export class FaceService {

  url = environment.apiBaseUrl + '/face';
  constructor(private http: Http) { }

  recognize(name){
    return this.http.get(this.getUrl(name))
      .map(response => response.json());
  }

  getUrl(name){
    return this.url + '?fileName=' + name;
  }

}
