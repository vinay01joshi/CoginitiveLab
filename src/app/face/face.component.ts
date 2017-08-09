import { FaceService } from './../shared/services/face.service';
import { environment } from './../../environments/environment';
import { ImageService } from './../shared/services/image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.css']
})
export class FaceComponent implements OnInit {
  imageBaserUrl = environment.baseUrl;
  images = [];
  currentImage;
  isSelected= false;
  constructor(private imageService: ImageService , private faceService: FaceService) { }

  ngOnInit() {
    this.imageService.get()
      .subscribe(images => this.images = images.photos);
  }

  delete(image){
    if (confirm('Are you sure you want to delete?')){

    const index = this.images.indexOf(image);
    this.images.splice(index, 1);

    this.imageService.delete(image.name)
      .subscribe(null, err => { alert('Not able to delete image.')});
    }
  }

  select(image){
    this.isSelected = true;
    this.currentImage = image;
  }

  recognize(image){
    this.faceService.recognize(image.name)
      .subscribe(attribtes => {
        const attribute = JSON.parse(attribtes)[0];
        image.gender = attribute.faceAttributes.gender;
        image.age = attribute.faceAttributes.age;
      });
 }

   fileChange(event){
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        let headers = new Headers();
        this.imageService.post(formData)
          .subscribe( photo => {
            console.log(photo);
            this.images.push(photo);
          });
        } 
  }
}
