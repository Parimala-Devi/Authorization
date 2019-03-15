import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { AuthGuardService } from '../auth-guard.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

name:String;
username:String;
email:String;
password:String;

  constructor(
    private authenticationService: AuthenticationService,
    private ngFlashMessageService: NgFlashMessageService,
    private authGuardService:AuthGuardService,
    private router:Router ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username:this.username,
      password:this.password
    }

    //Required fields
    if(!this.authenticationService.validateRegister(user)){
      this.ngFlashMessageService.showFlashMessage({
        // Array of messages each will be displayed in new line
        messages: ["Please enter all the fields"], 
        // Whether the flash can be dismissed by the user defaults to false
        dismissible: true, 
        // Time after which the flash disappears defaults to 2000ms
        timeout: false,
        // Type of flash message, it defaults to info and success, warning, danger types can also be used
        type: 'danger'
        
      });
      return false;
    }

    //Validate Email
    if(!this.authenticationService.validateEmail(user.email)){
      //console.log('Please use a valid email');
      this.ngFlashMessageService.showFlashMessage({
        // Array of messages each will be displayed in new line
        messages: ["Please use a valid email"], 
        // Whether the flash can be dismissed by the user defaults to false
        dismissible: true, 
        // Time after which the flash disappears defaults to 2000ms
        timeout: false,
        // Type of flash message, it defaults to info and success, warning, danger types can also be used
        type: 'danger'
        
      });
      return false;
    }


    //Register user
    this.authGuardService.registerUser(user).subscribe(data =>{
      if(data.success){
        this.ngFlashMessageService.showFlashMessage({
          // Array of messages each will be displayed in new line
          messages: ["You are now registered and can log in"], 
          // Whether the flash can be dismissed by the user defaults to false
          dismissible: true, 
          // Time after which the flash disappears defaults to 2000ms
          timeout: false,
          // Type of flash message, it defaults to info and success, warning, danger types can also be used
          type: 'success'
          
        });
        this.router.navigate(['/login']); 
      }else{
        this.ngFlashMessageService.showFlashMessage({
          // Array of messages each will be displayed in new line
          messages: ["Something went wrong"], 
          // Whether the flash can be dismissed by the user defaults to false
          dismissible: true, 
          // Time after which the flash disappears defaults to 2000ms
          timeout: false,
          // Type of flash message, it defaults to info and success, warning, danger types can also be used
          type: 'danger '
          
        });
        this.router.navigate(['/register']);
      }
    });
  }
}
