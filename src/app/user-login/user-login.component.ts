import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder ,FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import{RestServiceService} from '../services/rest-service.service';
import {GlobalVariableService} from '../services/global-variable.service';
import { Route, Router } from '@angular/router';



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  loginUserfrm = new FormGroup({

    userId: new FormControl('',[
      Validators.required
    ]),
    password : new FormControl('',[
      Validators.required
    ])


});

private userDetails : any;

  constructor(private service: RestServiceService, private UserDetailsService : GlobalVariableService, private router : Router) {}

  
  ngOnInit() {
  }

  loginUser(){
    //console.log('#######-----@@@@@', this.loginUserfrm);
    this.service.getUserVerified().subscribe(details=> {
      this.userDetails=details;
      //console.log('user details', this.userDetails);
      if(this.userDetails.verified){
        this.UserDetailsService.login();
        this.UserDetailsService.setloginUser = this.userDetails;
        this.router.navigate(['dashboard']);
      }
    });

  }

}
