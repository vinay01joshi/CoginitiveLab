import { AuthGuard } from './shared/services/auth-guard.service';
import { AuthService } from './shared/services/auth-service.service';
import { FaceService } from './shared/services/face.service';
import { ImageService } from './shared/services/image.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FaceComponent } from './face/face.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UploadComponent } from './upload/upload.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthHttp,provideAuth } from "angular2-jwt/angular2-jwt";

@NgModule({
  declarations: [
    AppComponent,   
    HomeComponent, 
    FaceComponent,
    NotFoundComponent,
    NavbarComponent,
    UploadComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path : '', component: HomeComponent},
      {path : 'admin', component: AdminComponent,canActivate:[AuthGuard]},
      {path : 'face', component: FaceComponent,canActivate:[AuthGuard]},
      {path : 'login', component: LoginComponent},
    ])
  ],
  providers: [ImageService
    , FaceService
    , AuthService
    , AuthGuard
    , provideAuth({
        headerName: 'Authorization',        
        headerPrefix: 'Bearer ',
        tokenName: 'token',
        tokenGetter: () => localStorage.getItem('token'),
        globalHeaders: [{ 'Content-Type': 'application/json' }],        
        noJwtError: true})
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
