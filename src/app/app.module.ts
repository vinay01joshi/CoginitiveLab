import { FaceService } from './shared/services/face.service';
import { ImageService } from './shared/services/image.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FaceComponent } from './face/face.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FaceComponent,
    NotFoundComponent,
    NavbarComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path : '', component: HomeComponent},
      {path : 'face', component: FaceComponent}
    ])
  ],
  providers: [ImageService, FaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
