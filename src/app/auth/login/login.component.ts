import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', []),
    password: new FormControl('', [])
  });

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  submit() {
    console.log(this.loginForm.value);
  }

  login() {
    console.log('clicked');
    this.authService.login();
  }
}
