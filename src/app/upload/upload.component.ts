import { ImageService } from './../shared/services/image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }
}
