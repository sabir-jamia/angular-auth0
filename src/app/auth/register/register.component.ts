import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    email: this.fb.control('', []),
    password: this.fb.control('', []),
    confirmPassword: this.fb.control('', [])
  });

  constructor(private fb: FormBuilder) {}

  submit() {
    const formValues = this.registerForm.value;
    console.log(formValues);
  }
}
