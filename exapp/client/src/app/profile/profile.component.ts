import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../auth-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:Object;

  constructor(
    private authGuardService:AuthGuardService, 
    private router:Router
    ) { }

  ngOnInit() {
    this.authGuardService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
     err => {
       console.log(err);
       return false;
     });
  }

}