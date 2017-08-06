import { Http } from '@angular/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class FaceService {

    url = environment.apiBaseUrl + '/face';
    constructor(private http :Http){}
        
    recognizeFace(post){
        return {
            gender : 'male',
            age : 29
        };
    }

    get(name){
        this.http.get(this.url + "?fileName=" + name)
            .subscribe(response => response.json());
    }
}
