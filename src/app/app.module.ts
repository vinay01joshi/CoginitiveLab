import { FaceService } from './shared/services/face.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

import { UploadService } from './upload/upload.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UploadComponent } from './upload/upload.component';
import { HomeComponent } from './home/home.component';
import { FaceComponent } from './face/face.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UploadComponent,
    HomeComponent,
    FaceComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      // {path: 'face', component: FaceComponent},
      {path: 'upload', component: UploadComponent},
      {path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [UploadService, FaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
