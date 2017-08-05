import { UploadService } from './upload/upload.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
