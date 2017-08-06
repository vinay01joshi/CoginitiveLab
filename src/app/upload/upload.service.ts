import { environment } from './../../environments/environment';

import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class UploadService {

    url = environment.apiBaseUrl + '/photos';
    urlFace = environment.apiBaseUrl + '/face';
    constructor(private http: Http){

    }

    getAll(){
       return this.http.get(this.url)
            .map(response => response.json())
    }

    post(photo){
        return this.http.post(this.url,photo)
            .map(response => response.json());
    }

    delete(fileName){
        return this.http.delete(this.url +'?fileName=' + fileName)
            .map(response => response.json())
    }

    recognize(fiename){
        return this.http.get(this.urlFace+'?fileName='+ fiename)
            .map(res => res.json());
    }
}
