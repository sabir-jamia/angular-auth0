import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login = new FormGroup({
    email: new FormControl('', []),
    password: new FormControl('', [])
  });

  constructor() {}

  ngOnInit() {}

  submit() {
    console.log(this.login.value);
  }
}
