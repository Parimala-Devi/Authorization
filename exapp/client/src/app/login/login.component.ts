import { Component, OnInit } from '@angular/core';
import {AuthGuardService} from '../auth-guard.service';
import {Router} from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(
    private authGuardService:AuthGuardService,
    private router:Router,
    private ngFlashMessageService: NgFlashMessageService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }

    this.authGuardService.authenticateUser(user).subscribe(data => {
      if(data.success){
        this.authGuardService.storeUserData(data.token, data.user);
        this.ngFlashMessageService.showFlashMessage({
          messages: ["You are now logged in"], 
          timeout: 5000,
          type: 'success'
          });
        this.router.navigate(['dashboard']);
      } else {
        this.ngFlashMessageService.showFlashMessage({
         messages: [data.msg], 
         timeout: 5000,
         type: 'danger'
        });
        this.router.navigate(['login']);
      }
    });
  }

}

