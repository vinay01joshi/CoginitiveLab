import { environment } from './../../environments/environment';
import { Photo } from './../shared/modles/photo';
import { UploadService } from './../upload/upload.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  photos : Photo[];
  baseUrl : string = environment.baseUrl;
  constructor(private uploadService : UploadService) { }

  ngOnInit() {
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

}
