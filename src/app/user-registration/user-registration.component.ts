import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder ,FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';




@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

 


  registerFormgrp = new FormGroup({

    firstName: new FormControl('',[
      Validators.required
    ]),
    lastName : new FormControl('')


});


  constructor( ) { }

  ngOnInit() {
  }
  
  registerUser(){
    console.log("****", this.registerFormgrp);
  }

 

}
