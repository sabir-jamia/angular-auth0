import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: this.fb.control('', []),
    password: this.fb.control('', [])
  });

  constructor(private authService: AuthService, private fb: FormBuilder) {}

  submit() {
    console.log(this.loginForm.value);
  }

  login() {
    console.log('clicked');
    this.authService.login();
  }
}
