import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  message: string;
  returnUrl: string;
  username: any;
  password: any;
  Messages: string;
  fullname: string;
  // user;
  // hour;
  // now;
  // setupTime
  constructor() { 

  }

  ngOnInit() {
   
  }

  account_validation_messages = {
    'username': [
      { type: 'required', message: 'Username is required' },
      { type: 'pattern', message: 'Special characters are not accepted' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      // { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' },
      { type: 'pattern', message: 'Special characters are not accepted' }
    ]
  }
}
