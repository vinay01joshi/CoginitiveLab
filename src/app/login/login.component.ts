import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../shared/services/auth-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin : boolean;
  constructor(private router:Router, private authServce:AuthService) { }

  ngOnInit() {
  }

  signIn(credentials){
    this.authServce.login(credentials)
      .subscribe(result => {
        if(result)
          this.router.navigate(['/']);
        else
          this.invalidLogin = true;
      },
      error=>{
        //alert('An unexpred error occured.')
        console.log(error);
      });
  }

}
