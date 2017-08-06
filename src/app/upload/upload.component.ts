import { environment } from './../../environments/environment';
import { Photo, AiAtributes } from './../shared/modles/photo';
import { UploadService } from './upload.service';
import { Component, OnInit } from '@angular/core';
import { RequestOptions } from "@angular/http";

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  photos : Photo[];  
  baseUrl : string = environment.baseUrl;
  recogRes :string;
  recoginizeObject;
  constructor(private uploadService : UploadService) { }


  ngOnInit(): void {
    this.uploadService.getAll()
        .subscribe(photos => this.photos = photos.photos);
  }

  delete(photo){
    if(confirm("Are you sure you want to delete?")){
    
    var index = this.photos.indexOf(photo);
    this.photos.splice(index,1);

    this.uploadService.delete(photo.name) 
      .subscribe(null,err => { alert('Not able to delete image.')});
    }
  }

  fileChange(event){

    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        let headers = new Headers();       
        this.uploadService.post(formData)
          .subscribe( photo => {
            console.log(photo);
            this.photos.push(photo.photos[0]);
          });
        } 
  }

  recognize(photo:Photo){     
    let selectedPhoto =  <Photo> this.photos.find(p => p.name == photo.name);   
    this.uploadService.recognize(photo.name)
      .subscribe( res => {
        this.recogRes = res
        let result  = JSON.parse(res)[0];      
        selectedPhoto.aiAtributes = new AiAtributes();
        selectedPhoto.isRecognized = true;        
        selectedPhoto.aiAtributes.gender = result.faceAttributes.gender;
        selectedPhoto.aiAtributes.aproxAge = result.faceAttributes.age;  
      });
  }
  
}
