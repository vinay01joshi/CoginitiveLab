import { FaceService } from './../shared/services/face.service';
import { Component,  Input } from '@angular/core';

@Component({
  selector: 'face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.css']
})
export class FaceComponent  {

  @Input('image') image;
  isFaceRecognizied = false;
  constructor(private faceService: FaceService) { }

  RecognizeFace(name){
    this.image = this.faceService.recognizeFace(name);
    this.isFaceRecognizied = true;
  }
}
